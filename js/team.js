(function(){ 
    var authors = [ 
	{
	    name: "Peter Dodds",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "dodds.png",
	    webpage: "http://www.uvm.edu/~pdodds/",
	    linkedin: "",
	    twitter: "peterdodds",
	},
	{
	    name: "Eric Clark",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "clark.png",
	    webpage: "http://www.uvm.edu/~eclark/",
	    linkedin: "",
	    twitter: "eclark66",
	},
	{
	    name: "Suma Desu",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "desu.png",
	    webpage: "http://www.uvm.edu/~eclark/",
	    linkedin: "",
	    twitter: "SumaNMNDesu",
	},
	{
	    name: "Morgan Frank",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "frank.png",
	    webpage: "http://www.uvm.edu/~mrfrank/",
	    linkedin: "",
	    twitter: "mrfrank5790",
	},
	{
	    name: "Andrew Reagan",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "reagan.png",
	    webpage: "http://andyreagan.com",
	    linkedin: "https://www.linkedin.com/pub/andy-reagan/18/a17/2a8",
	    twitter: "andyreagan",
	},
	{
	    name: "Jake Ryland Williams",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "williams.png",
	    webpage: "http://www.uvm.edu/~jrwillia/home/williams_home.html",
	    linkedin: "",
	    twitter: "",
	},
	{
	    name: "Lewis Mitchell",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "mitchell.png",
	    webpage: "http://www.uvm.edu/~lmitche1/main/Welcome.html",
	    linkedin: "",
	    twitter: "dr_pyser",
	},
	{
	    name: "Kameron Decker Harris",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "harris.png",
	    webpage: "http://students.washington.edu/kamdh/",
	    linkedin: "",
	    twitter: "KameronDHarris",
	},
	{
	    name: "Isabel M. Kloumann",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "kloumann.png",
	    webpage: "http://www.uvm.edu/~honcoll/?Page=Newsletter_Jun09/May09_IsabelKloumann.html",
	    linkedin: "",
	    twitter: "",
	},
	{
	    name: "James P. Bagrow",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "bagrow.png",
	    webpage: "http://www.uvm.edu/~jbagrow/",
	    linkedin: "",
	    twitter: "bagrow",
	},
	{
	    name: "Karine Megerdoomian",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "karine.png",
	    webpage: "http://www.zoorna.org/",
	    linkedin: "",
	    twitter: "",
	},
	{
	    name: "Matthew T. McMahon",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "roboctopus.png",
	    webpage: "",
	    linkedin: "",
	    twitter: "",
	},
	{
	    name: "Brian F. Tivnan",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "tivnan.png",
	    webpage: "",
	    linkedin: "",
	    twitter: "",
	},
	{
	    name: "Christopher M. Danforth",
	    inst: "University of Vermont",
	    role: "Lead Investigator",
	    image: "danforth.png",
	    webpage: "http://www.uvm.edu/~cdanfort/main/home.html",
	    linkedin: "",
	    twitter: "chrisdanforth",
	},
    ];

    var mainrow = d3.select("#teamrow");
    mainrow.append("div").attr("class","visible-lg col-lg-3");
    mainrow.append("div").attr("class","visible-sm visible-md col-sm-3");

    for (var i=0; i<authors.length; i++) {
	console.log(i);
	console.log(authors[i].name);
	var newdiv = mainrow.append("div").attr("class","col-xs-12 col-sm-3 col-lg-2");
	var divcenter = newdiv.append("center");
	divcenter.append("img").attr("class","teampim").attr("src","images/humans/circles/"+authors[i].image).attr("width","135px");
	// divcenter.append("p").attr("class","nobreak").text(authors[i].name);
	divcenter.append("p").attr("class","teamp").text(authors[i].name);
	if (authors[i].webpage.length > 0) {
	    // divcenter.append("p").attr("class","nobreak").append("a").attr("href",authors[i].webpage).attr("target","_blank").text("webpage");
	    divcenter.append("a").attr("href",authors[i].webpage).attr("target","_blank").html("<i class=\"fa fa-external-link fa-fw fa-lg\"></i>");
	}
	if (authors[i].linkedin.length > 0) {
	    // divcenter.append("p").attr("class","nobreak").append("a").attr("href",authors[i].linkenin).attr("target","_blank").text("linkedin");
	    divcenter.append("a").attr("href",authors[i].linkedin).attr("target","_blank").html("<i class=\"fa fa-linkedin fa-fw fa-lg\"></i>");
	}
	if (authors[i].twitter.length > 0) {
	    // divcenter.append("p").append("a").attr("href","https://twitter.com/"+authors[i].twitter).attr("target","_blank").text("@"+authors[i].twitter);
	    divcenter.append("a").attr("href","https://twitter.com/"+authors[i].twitter).attr("target","_blank").html("<i class=\"fa fa-twitter fa-fw fa-lg\"></i>");
	}
	if ( ((i+1) % 2 ) === 0) {
	    console.log("even");
	    mainrow.append("div").attr("class","visible-sm visible-md col-sm-3");
	    mainrow.append("div").attr("class","clearfix visible-sm visible-md");
	    mainrow.append("div").attr("class","visible-sm visible-md col-sm-3");
	}
	if ( ((i+1) % 3 ) === 0) {
	    console.log("threes");
	    mainrow.append("div").attr("class","visible-lg col-lg-3");
	    mainrow.append("div").attr("class","clearfix visible-lg");	
    mainrow.append("div").attr("class","visible-lg col-lg-3");
	}
    };
})();
