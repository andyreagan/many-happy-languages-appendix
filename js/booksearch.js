var searchEncoder = d3.urllib.encoder().varname("book");

var books = {
    "blank": {
	language: "",
	fulltitle: "",
	wiki: "",
    },
    "moby_dick": {
	language: "english",
	fulltitle: "Moby Dick",
	wiki: "http://en.wikipedia.org/wiki/Moby-Dick",
    },
    "luther": {
	language: "english",
	fulltitle: "I Have a Dream",
	wiki: "",
    },
    "luther": {
	language: "english",
	fulltitle: "I Have a Dream",
	wiki: "",
    },
    "anna_karenina": {
	language: "russian",
	fulltitle: "Anna Karenina",
	wiki: "http://en.wikipedia.org/wiki/Anna_Karenina",
    },
    "count_of_monte_cristo": {
	language: "french",
	fulltitle: "Count of Monte Cristo",
	wiki: "http://en.wikipedia.org/wiki/The_Count_of_Monte_Cristo",
    },
    "crime_and_punishment": {
	language: "russian",
	fulltitle: "Crime and Punishment",
	wiki: "http://en.wikipedia.org/wiki/Crime_and_Punishment",
    },
    "crime_and_punishment_en": {
	language: "english",
	fulltitle: "Crime and Punishment: English Translation",
	wiki: "http://en.wikipedia.org/wiki/Crime_and_Punishment",
    },
    "die_verwandlung_en": { 
	language: "english", 
	fulltitle: "Die Verwandlung: English Translation",
	wiki: "http://en.wikipedia.org/wiki/The_Metamorphosis",
    },
    "die_verwandlung": { 
	language: "german",
	fulltitle: "Die Verwandlung",
	wiki: "http://en.wikipedia.org/wiki/The_Metamorphosis",
    },
    "don_quixote": {
	language: "spanish",
	fulltitle: "Don Quixote",
	wiki: "http://en.wikipedia.org/wiki/Don_Quixote",
    },
    "the_three_musketeers": {
	language: "french",
	fulltitle: "The Three Musketeers",
	wiki: "http://en.wikipedia.org/wiki/The_Three_Musketeers",
    },
    "twoCities": {
	language: "english",
	fulltitle: "A Tale of Two Cities",
	wiki: "",
    },
    "expectations": {
	language: "english",
	fulltitle: "Great Expectations",
	wiki: "",
    },
    "pride": {
	language: "english",
	fulltitle: "Pride and Prejudice",
	wiki: "",
    },
    "huck": {
	language: "english",
	fulltitle: "Adventures of Huckleberry Finn",
	wiki: "",
    },
    "alice": {
	language: "english",
	fulltitle: "Alice's Adventures in Wonderland",
	wiki: "",
    },
    "tom": {
	language: "english",
	fulltitle: "The Adventures of Tom Sawyer",
	wiki: "",
    },
    "sherlock": {
	language: "english",
	fulltitle: "The Adventures of Sherlock Holmes",
	wiki: "",
    },
    "leaves": {
	language: "english",
	fulltitle: "Leaves of Grass",
	wiki: "",
    },
    "ulysses": {
	language: "english",
	fulltitle: "Ulysses",
	wiki: "",
    },
    "frankenstein": {
	language: "english",
	fulltitle: "Frankenstein; Or the Modern Prometheus",
	wiki: "",
    },
    "heights": {
	language: "english",
	fulltitle: "Wuthering Heights",
	wiki: "",
    },
    "sense": {
	language: "english",
	fulltitle: "Sense and Sensibility",
	wiki: "",
    },
    "twist": {
	language: "english",
	fulltitle: "Oliver Twist",
	wiki: "",
    },
};

var booklist = [
    { caption: "moby_dick",
      language: "english",
      fulltitle: "Moby Dick",
      wiki: "http://en.wikipedia.org/wiki/Moby-Dick",
    },
    { caption: "luther",
      language: "english",
      fulltitle: "I Have a Dream",
      wiki: "",
    },
    { caption: "luther",
      language: "english",
      fulltitle: "I Have a Dream",
      wiki: "",
    },
    { caption:"anna_karenina",
      language: "russian",
      fulltitle: "Anna Karenina",
      wiki: "http://en.wikipedia.org/wiki/Anna_Karenina",
    },
    { caption:"count_of_monte_cristo",
      language: "french",
      fulltitle: "Count of Monte Cristo",
      wiki: "http://en.wikipedia.org/wiki/The_Count_of_Monte_Cristo",
    },
    { caption: "crime_and_punishment",
      language: "russian",
      fulltitle: "Crime and Punishment",
      wiki: "http://en.wikipedia.org/wiki/Crime_and_Punishment",
    },
    { caption: "crime_and_punishment_en",
      language: "english",
      fulltitle: "Crime and Punishment: English Translation",
      wiki: "http://en.wikipedia.org/wiki/Crime_and_Punishment",
    },
    { caption:"die_verwandlung_en", 
      language: "english", 
      fulltitle: "Die Verwandlung: English Translation",
      wiki: "http://en.wikipedia.org/wiki/The_Metamorphosis",
    },
    { caption: "die_verwandlung", 
      language: "german",
      fulltitle: "Die Verwandlung",
      wiki: "http://en.wikipedia.org/wiki/The_Metamorphosis",
    },
    { caption: "don_quixote",
      language: "spanish",
      fulltitle: "Don Quixote",
      wiki: "http://en.wikipedia.org/wiki/Don_Quixote",
    },
    { caption: "the_three_musketeers",
      language: "french",
      fulltitle: "The Three Musketeers",
      wiki: "http://en.wikipedia.org/wiki/The_Three_Musketeers",
    },
    { caption: "twoCities",
      language: "english",
      fulltitle: "A Tale of Two Cities",
      wiki: "",
    },
    { caption: "expectations",
      language: "english",
      fulltitle: "Great Expectations",
      wiki: "",
    },
    { caption: "pride",
      language: "english",
      fulltitle: "Pride and Prejudice",
      wiki: "",
    },
    { caption: "huck",
      language: "english",
      fulltitle: "Adventures of Huckleberry Finn",
      wiki: "",
    },
    { caption: "alice",
      language: "english",
      fulltitle: "Alice's Adventures in Wonderland",
      wiki: "",
    },
    { caption: "tom",
      language: "english",
      fulltitle: "The Adventures of Tom Sawyer",
      wiki: "",
    },
    { caption: "sherlock",
      language: "english",
      fulltitle: "The Adventures of Sherlock Holmes",
      wiki: "",
    },
    { caption: "leaves",
      language: "english",
      fulltitle: "Leaves of Grass",
      wiki: "",
    },
    { caption: "ulysses",
      language: "english",
      fulltitle: "Ulysses",
      wiki: "",
    },
    { caption: "frankenstein",
      language: "english",
      fulltitle: "Frankenstein; Or the Modern Prometheus",
      wiki: "",
    },
    { caption: "heights",
      language: "english",
      fulltitle: "Wuthering Heights",
      wiki: "",
    },
    { caption: "sense",
      language: "english",
      fulltitle: "Sense and Sensibility",
      wiki: "",
    },
    { caption: "twist",
      language: "english",
      fulltitle: "Oliver Twist",
      wiki: "",
    },
];

var substringMatcher = function(strs) {
    return function findMatches(q,cb) {
        var matches, substringRegex;
        console.log("matching "+q);
        matches = [];
        for (var i=0; i<booklist.length; i++) {
            if (booklist[i].fulltitle.toLowerCase().match(q)) {
     		matches.push({ value: booklist[i].fulltitle})   
            }
        }
        if (matches.length === 0) { matches.push({ value: "<i>book not indexed</i>" }); }
        cb(matches);
    };
};

$(document).ready(function() {
    $("#wordsearch").typeahead(
        {
            hint: false,
            highlight: true,
            minLength: 1,
        },
        {
            name: "books",
            source: substringMatcher(["one","two"])
        });
}).on("typeahead:selected",function(event,sugg,dataset) {
    console.log(event);
    console.log(sugg);
    console.log(dataset);
  
    //if (parseFloat(allDecoder().current)) { allEncoder.varval("0"); }
    for (var i=0; i<booklist.length; i++) {
        if (booklist[i].fulltitle === sugg.value) {
    	    // console.log(i);
    	    console.log(booklist[i].fulltitle);
    	    console.log(booklist[i].caption);
	    searchEncoder.varval(booklist[i].caption);
	    window.location.replace("http://www.uvm.edu/storylab/share/papers/dodds2014a/books.html?book="+booklist[i].caption);
            break;
        }
    }
});




