var a = ["English","Portuguese","Spanish","French","Arabic","Indonesian","Russian","German","Korean","Chinese",]
var b = [["Twitter","Books","New York Times","Music Lyrics",],["Google Web","Twitter",],["Google Web","Twitter","Books",],["Google Web","Twitter","Books",],["Movie and TV subtitles",],["Twitter","Movie subtitles",],["Twitter","Books","Movie and TV subtitles",],["Google Web","Twitter","Books",],["Twitter","Movie subtitles",],["Books",],]

var decoder = d3.urllib.decoder().varresult("English").varname("lang");
var encoder = d3.urllib.encoder().varname("lang");

d3.select("#langSelect")
    .select("ul")
    .selectAll("a")
    .data(a)
    .enter()
    .append("li")
    .append("a")
    .text(function(d) { return d; })
    .on("click",function(d) { 
	d3.select("#langLabel").text(d);
	encoder.varval(d);
	showPNGs(d);
    });



function showPNGs(lang) {
    console.log("showing pngs from "+lang);
    var langIndex = 0;
    for (var i=0; i < a.length; i++) {
	if (lang === a[i]) {
	    langIndex = i;
	}
    }
    console.log(langIndex);
    d3.select("#pngRow").selectAll("div").remove();
    d3.select("#englishRowLabel").selectAll("h4").remove();
    d3.select("#englishPngRow").selectAll("div").remove();
    for (var j=1; j<=b[langIndex].length; j++ ) {
	console.log(j);
	    // <div class="col-xs-2">
	    // </div><!-- col -->

	d3.select("#pngRow").append("div")
	    .attr("class","col-xs-6")
	    .append("img")
	    .attr("src","http://www.uvm.edu/storylab/share/papers/dodds2014a/figures/fighappinessdist_jellyfish_words_havg_multilanguage001_"+zeroFill(langIndex+1,3)+"_"+zeroFill(j,3)+"_"+lang.toLowerCase()+"_noname.png")
	    .attr("class","img-responsive");
    }
    if (lang !== "English") {
	// show the translated ones
	d3.select("#englishRowLabel").append("h4").text("Translated to English:");
	for (var j=1; j<=b[langIndex].length; j++ ) {
	    console.log(j);
	    // <div class="col-xs-2">
	    // </div><!-- col -->

	    d3.select("#englishPngRow").append("div")
		.attr("class","col-xs-6")
		.append("img")
		.attr("src","http://www.uvm.edu/storylab/share/papers/dodds2014a/figures/fighappinessdist_jellyfish_words_havg_multilanguage002_"+zeroFill(langIndex+1,3)+"_"+zeroFill(j,3)+"_"+lang.toLowerCase()+"_noname.png")
		.attr("class","img-responsive");
	}
    }
}

// http://stackoverflow.com/questions/1267283/how-can-i-create-a-zerofilled-value-using-javascript
function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}

d3.select("#langLabel").text(decoder().current);
showPNGs(decoder().current);

    


