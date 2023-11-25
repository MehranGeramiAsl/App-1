console.log('salam2');


setTimeout(function(){
    
var p = document.getElementById('p2');
console.log(p);

p.style.backgroundColor = 'pink';
p.innerHTML = '<h1> Test</h1>'



var b = document.createElement('b');
b.innerText ='b is b';

p.appendChild(b);

},3000);

function c()
{
    console.log('clicked!');
}

function d(event)
{
    console.log('move');
}

document.querySelector('#btn1').addEventListener('clicked',c);