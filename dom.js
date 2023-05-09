
var a = document.getElementById('main-header')
// console.log(a);

var b = document.getElementById('main')
// console.log(b);

var c = document.getElementsByClassName('list-group-item')
// console.log(c);

c[2].style.backgroundColor = 'green';
for(var i = 0;i<c.length;i++)
{
    c[i].style.fontWeight = '700';
}

var d = document.getElementsByClassName('list-group-item2')

// console.log(d);
d[0].style.backgroundColor='red';

var e = document.getElementsByTagName('li');
// console.log(e);
e[4].style.fontWeight='900';

var f = document.querySelectorAll('li:nth-child(2)');

f[0].style.backgroundColor='green';

var g = document.querySelectorAll('li:nth-child(3)');
g[0].style.display='none';


