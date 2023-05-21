var Header = document.getElementById('header-title');
console.log(Header);
Header.style.borderBottom = 'solid 3px #000';


var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items [1].textContent = 'Hello 2';
items [1].style.fontweight = 'bold';
items [1].style.color = 'green';