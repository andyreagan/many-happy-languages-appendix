#!/usr/bin/perl 

use strict;
use warnings; 

#This creates the html code for the online Translation Valence Appendix
 use utf8;  
 
# decode/encode UTF-8
use Encode;

# decode HTML character entities                 #headers for using UTF8 Code
use HTML::Entities;

# input & output are in UTF-8
binmode STDIN, ":utf8";
binmode STDOUT, ":utf8";



my @Languages = ('Spanish', 'Portuguese', 'English','Indonesian','French','German','Arabic','Russian','Korean','Chinese');

foreach my $Lang (@Languages){
    foreach my $cLang (@Languages){
        
                   
    open (INFILE1, 'TransChartTemp1.txt') || die(" died Tmp1 \n"); 
    open (INFILE2b, 'TransChartTemp2b.txt') || die(" died Tmp2b \n");
     open (INFILE2c, 'TransChartTemp2c.txt') || die(" died Tmp2c \n");
     open (CHART, '/Users/ericclark/Documents/English_Translated_LABMT_lists/Translation_Intersection/LangPairTrans/TranslationAppendixCharts/TransValChart_'.$Lang.'_'.$cLang.'.txt') || die(" died Chart \n");
    
       open (OUTFILE, ">:utf8", '/Users/ericclark/Documents/English_Translated_LABMT_lists/Translation_Intersection/LangPairTrans/AppendixHTMLcode/TranslationAppendixPlot_'.$Lang.'_'.$cLang.'.html');
  
        
  while (<INFILE1>) 
   {    utf8::decode($_); print OUTFILE $_;}
   
   print OUTFILE "\n";
   
  while(<CHART>)
  {  utf8::decode($_); print OUTFILE $_;}
  
  
  print OUTFILE "\n";
  
  
  print OUTFILE  'var options = {', "\n";
  print OUTFILE "title: '$Lang vs $cLang Average Word Happiness', ", "\n";
  print OUTFILE "titleTextStyle: { textPosition: 'in', fontType: 'helvetica', fontSize: 28,  bold: true}, ", "\n";


  print OUTFILE "hAxis: {title: '$Lang Average Word Happiness', minValue: 1, maxValue: 9, ", "\n";
  print OUTFILE  " titleTextStyle: { textPosition: 'in', fontType: 'helvetica', fontSize: 25,  bold: true}    }, ", "\n";

  print OUTFILE "vAxis: {title: '$cLang Average Word Happiness', minValue: 1, maxValue: 9, ", "\n";
  print OUTFILE "titleTextStyle: { textPosition: 'in', fontType: 'helvetica', fontSize: 25,  bold: true}    }, ", "\n";
  
  
  
   while (<INFILE2b>)
     { utf8::decode($_); print OUTFILE $_; }
   
   
        
    
    #print specific for lang and clang
     
print OUTFILE '<!-- <div align="center"> -->', "\n";
print OUTFILE '<select id="mydropX">', "\n";
print OUTFILE '<option value="'.$Lang.'">'.$Lang.'</option>',"\n";

foreach my $L (@Languages)
{
    if ($L eq $Lang){ }
    else{ print OUTFILE '<option value="'.$L.'">'.$L.'</option>',"\n";     }
   
}


print OUTFILE '</select>', "\n";
print OUTFILE '<!-- </div>  -->', "\n";

print OUTFILE '<!-- <div align="center"> -->', "\n";
print OUTFILE '<select id="mydropY">', "\n";
print OUTFILE '<option value="'.$cLang.'">'.$cLang.'</option>',"\n";

foreach my $L (@Languages)
{
    if ($L eq $cLang){ }
    else{ print OUTFILE '<option value="'.$L.'">'.$L.'</option>',"\n";     }
   
}
#example  
#<option value="Spanish">Spanish</option>
#<option value="Portuguese">Portuguese</option>

print OUTFILE '</select>', "\n";
print OUTFILE '<!-- </div>  -->', "\n";   
    
    while (<INFILE2c>)
     { utf8::decode($_); print OUTFILE $_; }
   
   
    }  
    
    
}


