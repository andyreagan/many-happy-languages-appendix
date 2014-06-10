(function() { 
    var authors = [ 
	{
	    name: "Peter Dodds",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "dodds.png",
	},
	{
	    name: "Eric Clark",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "clark.png",
	},
	{
	    name: "Suma Desu",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "desu.png",
	},
	{
	    name: "Morgan Frank",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "frank.png",
	},
	{
	    name: "Andrew Reagan",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "reagan.png",
	},
	{
	    name: "Jake Ryland Williams",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "williams.png",
	},
	{
	    name: "Lewis Mitchell",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "mitchell.png",
	},
	{
	    name: "Kameron Decker Harris",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "harris.png",
	},
	{
	    name: "Isabel M. Kloumann",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "kloumann.png",
	},
	{
	    name: "James P. Bagrow",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "bagrow.png",
	},
	{
	    name: "Karine Megerdoomian",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "roboctopus.png",
	},
	{
	    name: "Matthew T. McMahon",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "roboctopus.png",
	},
	{
	    name: "Brian F. Tivnan",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "tivnan.png",
	},
	{
	    name: "Christopher M. Danforth",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "danforth.png",
	},
    ];

    var mainrow = d3.select("#topteamrow");
    //  mainrow.append("div").attr("class","visible-lg col-lg-3");
    //  mainrow.append("div").attr("class","visible-sm visible-md col-sm-3");

    for (var i=0; i<authors.length; i++) {
	// console.log(i);
	// console.log(authors[i].name);
	// var newdiv = mainrow.append("div").attr("class","col-xs-12 col-sm-3 col-lg-2");
	// var divcenter = newdiv.append("center");
	mainrow.append("img").attr("src","images/humans/circles/"+authors[i].image).attr("width","35px").attr("class","topteam");
	// divcenter.append("br");
	// divcenter.append("br");
	// divcenter.append("p").text(authors[i].name);
	// divcenter.append("br");
	// if ( ((i+1) % 2 ) === 0) {
	//     console.log("even");
	//     mainrow.append("div").attr("class","visible-sm visible-md col-sm-3");
	//     mainrow.append("div").attr("class","clearfix visible-sm visible-md");
	//     mainrow.append("div").attr("class","visible-sm visible-md col-sm-3");
	// }
	// if ( ((i+1) % 3 ) === 0) {
	//     console.log("threes");
	//     mainrow.append("div").attr("class","visible-lg col-lg-3");
	//     mainrow.append("div").attr("class","clearfix visible-lg");
	//     mainrow.append("div").attr("class","visible-lg col-lg-3");
	// }
    };
})();



