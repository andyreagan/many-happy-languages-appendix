# tar -zcvf data.tgz data
# zip -r data.zip data
# tar -cvf data.tar data

if __name__ == '__main__':
    # langs = ['arabic','chinese','english','french','german','hindi','indonesian','korean','pashto','portuguese','russian','spanish']
    langs = ['arabic','chinese','english','french','german','indonesian','korean','portuguese','russian','spanish']

    f = open('datapageraw.html','w')
    for lang in langs:
        f.write('<h3>')
        f.write('{0}:'.format(lang))
        f.write('</h3>\n')
        f.write('<h4>\n')
        f.write('<a href="data/labMTwords-{0}.csv">[words]</a>\n'.format(lang))
        f.write('<a href="data/labMTwords-{0}.csv">[scores]</a>\n'.format(lang))
        f.write('<a href="data/labMTwordsEn-{0}.csv">[english]</a>\n'.format(lang))
        f.write('</h4>\n')
    f.close()
     
