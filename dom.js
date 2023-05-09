
var a = document.getElementById('main-header')
console.log(a);

var b = document.getElementById('main')
console.log(b);

var c = document.getElementsByClassName('list-group-item')
console.log(c);

c[2].style.backgroundColor = 'green';
for(var i = 0;i<c.length;i++)
{
    c[i].style.fontWeight = '700';
}
