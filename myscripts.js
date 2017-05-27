var str = document.body.innerHTML;
var c = (str.match(/\Mr. Trump\b/g) || []).length; //To count the number of occurances of word Mr. Trump
var m = (str.match(/\Donald Trump\b/ig)|| []).length;//To count the number of occurances of word Donald Trump
var i;
for(i=0;i<c;i++)
{
 document.body.innerHTML = document.body.innerHTML.replace(/\Mr. Trump\b/g, 'Crime master Gogo'); //To replace the word Mr. Trump with Crime master Gogo
i=i+1;
}
for(j=0;j<m;j++)
{
 document.body.innerHTML = document.body.innerHTML.replace(/\Donald Trump\b/ig, 'Crime master Gogo'); //To replace the word Mr. Trump with Crime master Gogo
j=j+1;
}