# chop.py
#
# chop up a text into a bunch of frequency vectors of length
# 
# USAGE
#
# python chop.py data/count-of-monte-cristo.txt output.txt french

import codecs # handle utf8
import sys # for user inpurt
import re
from labMTsimple.storyLab import *

if __name__ == "__main__":
  rawbook,saveas,lang = sys.argv[1:]
    
  labMT,labMTvector,labMTwordList = emotionFileReader(stopval=0.0,fileName='labMT2'+lang+'.txt',returnVector=True)

  print labMT

  # make sure we got the right list
  try:
    print labMT['the']
  except KeyError:
    print "no 'the' in this language!"
    
  f = codecs.open(rawbook,"r","utf8")
  raw_text = f.read()
  f.close()

  # break it apart but don't include the blanks
  tmpwords = [x.lower().lstrip("?';:.$%&()\\!*[]{}|\"<>,^-_=+").rstrip("@#?';:.$%&()\\!*[]{}|\"<>,^-_=+") for x in re.split('\s|--',raw_text,flags=re.UNICODE)]

  words = []
  for word in tmpwords:
    if word != u'':
      words.append(word)

  print  
  print "there are {0} words".format(len(words))
  print
  print "first ten words:"
  print
  print words[0:10]
  print
  print "first ten words, individually:"
  print
  for word in words[0:10]:
    print word
  print

  ## compute valence score and return frequency vector for generating wordshift
  textValence,textFvec = emotion(raw_text,labMT,shift=True,happsList=labMTvector)

  print "the frequency vector is {0} long".format(len(textFvec))
  print "there were a total of {0} matching words of {1}".format(sum(textFvec),len(words))
  print
  # print "here is whole thing:"
  # print textFvec
  # print

  print "the valence of {0} is {1:.5}".format(rawbook,textValence)
  print

  print "now splitting the text into chunks of size 1000"
  print "and printing those frequency vectors"

  minSize = 1000;
  allFvec = []
  from numpy import floor
  for i in xrange(int(floor(len(words)/minSize))):
    chunk = unicode('')
    if i == int(floor(len(words)/minSize))-1:
      # take the rest
      print 'last chunk'
      print 'getting words ' + str(i*minSize) + ' through ' + str(len(words)-1)
      for j in xrange(i*minSize,len(words)-1):
        chunk += words[j]+unicode(' ')
    else:
      print 'getting words ' + str(i*minSize) + ' through ' + str((i+1)*minSize)
      for j in xrange(i*minSize,(i+1)*minSize):
        chunk += words[j]+unicode(' ')
        # print chunk[0:10]
      textValence,textFvec = emotion(chunk,labMT,shift=True,happsList=labMTvector)
      # print chunk
    print 'the valence of {0} part {1} is {2}'.format(rawbook,i,textValence)
        
    allFvec.append(textFvec)

  # add up the first five
  total = 0
  for i in xrange(5):
    total += sum(allFvec[i])

  print 
  print "the total for the five vectors in js should be {0}".format(total)

  print "writing out the file to {0}".format(saveas)
  f = open(saveas,"w")
  f.write('{0:.0f}'.format(allFvec[0][0]))
  for k in xrange(1,len(allFvec)):
    f.write(',{0:.0f}'.format(allFvec[k][0]))
  for i in xrange(1,len(allFvec[0])):
    f.write("\n")
    f.write('{0:.0f}'.format(allFvec[0][i]))
    for k in xrange(1,len(allFvec)):
      f.write(',{0:.0f}'.format(allFvec[k][i]))
  f.close()

  print "done!"
