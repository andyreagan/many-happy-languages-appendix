# make the data 
\rm -r data
\rm data.*
mkdir data
cp labMT* data
tar -zcvf data.tgz data
zip -r data.zip data
tar -cvf data.tar data

\rm -r books
\rm books.*
mkdir books
cp *.csv books/
\rm books/labMT*
tar -zcvf books.tgz books
zip -r books.zip books
tar -cvf books.tar books