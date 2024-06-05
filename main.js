const addButton = document.getElementById('add-btn');

const data = [];

function createLiElement(spanValue, checkboxValue){
	const checkbox = document.createElement('input');
	checkbox.type='checkbox';
	checkbox.checked = checkboxValue;
	const span = document.createElement('span');
	span.innerText = spanValue;

	const li = document.createElement('li');

	li.appendChild(span);
	li.appendChild(checkbox);

	li.classList.add('list-group-item', 'd-flex', 'justify-content-between');

	const list = document.getElementById('list');
	list.appendChild(li);

	return checkbox
}

addButton.addEventListener('click', function(){
	debugger
	const input = document.getElementById('todo-value');
	const checkbox = createLiElement(input.value, false);
	const valueToAdd = {
		title: input.value,
		completed: false
	};
	
	checkbox.addEventListener('change',function(e){
		debugger
		valueToAdd.completed = e.target.checked;
	})
	
	data.push(valueToAdd);
	input.value = '';
});

const inProgressButton = document.getElementById('in_progress');
const doneButton = document.getElementById('done');
const allButton = document.getElementById('all');

inProgressButton.addEventListener('click', function(){
	const inProgresData = data.filter(x=>x.completed === false);
	
	const list = document.getElementById('list');

	list.innerHTML=''
	inProgresData.forEach((element)=>{
		createLiElement(element.title, element.completed);
	});
});

doneButton.addEventListener('click', function(){
	const filteredData = data.filter(x=>x.completed === true);
	
	const list = document.getElementById('list');
	list.innerHTML=''
	filteredData.forEach((element)=>{
		createLiElement(element.title, element.completed);
	});
});

allButton.addEventListener('click', function(){
	
	const list = document.getElementById('list');
	list.innerHTML=''
	data.forEach((element)=>{
		createLiElement(element.title, element.completed);
	});
});