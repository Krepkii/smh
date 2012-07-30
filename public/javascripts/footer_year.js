function y2k(number) { return (number < 1000) ? number + 1900 : number; }
var today = new Date();
var year = y2k(today.getYear());
if (year == 2012 )
document.write(+year+' all rights reserved');
else
document.write('2012 - '+year+' all rights reserved');  
//-->