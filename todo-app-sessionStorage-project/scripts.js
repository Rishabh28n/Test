const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArray = sessionStorage.getItem('items') ?
JSON.parse(sessionStorage.getItem('items')) : [];

itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}

function add(){
  itemsArray.push(input.value);
  sessionStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}

function del(){
  sessionStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}