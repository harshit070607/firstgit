
// var a = document.getElementById('main-header')
// // console.log(a);

// var b = document.getElementById('main')
// // console.log(b);

// var c = document.getElementsByClassName('list-group-item')
// // console.log(c);

// c[2].style.backgroundColor = 'green';
// for(var i = 0;i<c.length;i++)
// {
//     c[i].style.fontWeight = '700';
// }

// var d = document.getElementsByClassName('list-group-item2')

// // console.log(d);
// d[0].style.backgroundColor='red';

// var e = document.getElementsByTagName('li');
// // console.log(e);
// e[4].style.fontWeight='900';

// var f = document.querySelectorAll('li:nth-child(2)');

// // f[0].style.backgroundColor='green';
// f[0].style.color = "green";

// var g = document.querySelectorAll('li:nth-child(3)');
// // g[0].style.display='none';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length ; i++)
// {
//     odd[i].style.backgroundColor="green";
// }

// var h = document.querySelector('#main');
// console.log(h.parentElement);
// console.log(h.lastElementChild);
// console.log(h.lastChild);
// console.log(h.firstElementChild);
// console.log(h.firstChild);
// console.log(h.nextElementSibling);
// console.log(h.nextSibling);
// console.log(h.previousElementSibling);
// console.log(h.previousSibling);

// var i = document.createElement('div');
// i.className='hello1';
// i.id = 'hello2';
// i.setAttribute('title','createElement');
// console.log(i);

// var j = document.createTextNode('Hello world');

// i.appendChild(j);
// var k = document.querySelector('header .container');
// var l = document.querySelector('#header-title');

// k.insertBefore(i,l);

// var m = document.querySelector('#items');
// var n = document.querySelector('.list-group-item');

// m.insertBefore(i,n);


var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');

form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();

var newItem = document.getElementById('item').value;

var li = document.createElement('li');

li.className='list-group-item';

li.appendChild(document.createTextNode(newItem));

itemlist.appendChild(li);

var deletebtn = document.createElement('button');

deletebtn.className='btn btn-danger btn-sm float-right delete';

var textAtbtn = document.createTextNode('X');

deletebtn.appendChild(textAtbtn);

li.appendChild(deletebtn);

}



function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var rem = e.target.parentElement;
            itemlist.removeChild(rem);
        }
    }

}
 

