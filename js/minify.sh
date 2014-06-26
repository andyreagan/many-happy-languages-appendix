# wget https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js

\rm books-all{,.min}.js
cat jquery.min.js bootstrap.min.js d3.andy.js urllib.js plotShift.js shift.js drawLens-chapters.js selectChapter.js selectChapterTop.js drawBookTimeseries.js computeHappsChapters.js books-on-load.js topteam.js >> books-all.js

\rm books-search-all{,.min}.js
cat jquery.min.js bootstrap.min.js d3.andy.js urllib.js typeahead.bundle.js booksearch.js topteam.js >> books-search-all.js


\rm translations-all{,.min}.js
cat jsapi jquery.min.js bootstrap.min.js d3.andy.js urllib.js translations.js topteam.js >> translations-all.js

