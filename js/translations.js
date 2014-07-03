google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

var xDecoder = d3.urllib.decoder().varresult(["English"]).varname("x");
var yDecoder = d3.urllib.decoder().varresult(["German"]).varname("y");

function drawChart() {

    var ref = xDecoder().current; //"English";
    var comp = yDecoder().current; //"German";

    var data = new google.visualization.DataTable();
    data.addColumn('number','Average Valence');
    data.addColumn('number','Average Valence');
    data.addColumn({
	type: 'string',
	role: 'tooltip'
    });

    data.addColumn('number','y = x');
    data.addRows([
	[ 1, null, null ,1 ],[ 9, null, null ,9 ],]);

    d3.text("data/TranslationAppendixCharts2/TransValChart_"+ref+"_"+comp+".txt", function(translation) {
	console.log("loaded file");
	tmp = translation.split("\n");
	tmp = tmp.slice(1,tmp.length-1);
	tmp = tmp.map(function(d) { return [parseFloat(d.slice(2,d.length-1).split(",")[0]),parseFloat(d.split(",")[1]),d.split(",")[2].slice(2,d.split(",")[2].length)+","+d.split(",")[3].slice(0,d.split(",")[3].length-1),null]; });
	data.addRows(tmp);

        fontscale = d3.scale.linear().domain([320,940]).range([12,28]);

        figwidth = parseInt(d3.select('#chart_div').style('width')),
        aspectRatio = 1,
        figheight = figwidth*aspectRatio;

	var options = {
            width: figwidth,
            height: figheight,
	    title: ref+" vs "+comp+" Average Word Happiness", 
	    titleTextStyle: { textPosition: 'in', fontType: 'helvetica', fontSize: fontscale(figwidth)*1.1,  bold: true}, 
	    hAxis: {title: ref+" Average Word Happiness", minValue: 1, maxValue: 9, 
		    titleTextStyle: { textPosition: 'in', fontType: 'helvetica', fontSize: fontscale(figwidth),  bold: true}    }, 
	    vAxis: {title: comp+" Average Word Happiness", minValue: 1, maxValue: 9, 
		    titleTextStyle: { textPosition: 'in', fontType: 'helvetica', fontSize: fontscale(figwidth),  bold: true}    }, 
	    pointSize: 1,
	    legend: 'none',
	    trendlines: { 1: { color: 'red',
			       opacity: 0.2,
			     } },
	};

	var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
	chart.draw(data, options);
    });
};

var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-37158538-1']);


(function() {

    var ga = document.createElement('script')
    _gaq.push(['_trackPageview']);

    ; ga.type = 'text/javascript'; ga.async = true;

    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

})();

var xEncoder = d3.urllib.encoder().varname("x");
var yEncoder = d3.urllib.encoder().varname("y");

function findChart(){
    var e = document.getElementById("mydropX");
    //var ChartValue = e.options[e.selectedIndex].value; 
    //ref = e.options[e.selectedIndex].value; 
    var e2 = document.getElementById("mydropY");
    //var ChartValue2 = e2.options[e2.selectedIndex].value; 
    //comp = e2.options[e2.selectedIndex].value;
    xEncoder.varval(e.options[e.selectedIndex].value);
    yEncoder.varval(e2.options[e2.selectedIndex].value);
    
    drawChart();
    //var GoLink = "TranslationAppendixPlot_"+ChartValue+"_"+ChartValue2;
    //goTo(GoLink);
}//getChart

