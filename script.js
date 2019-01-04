const addButton = document.querySelector('#add');
addButton.addEventListener('click', function () {
	const li = document.createElement('li');
	li.innerText = prompt();
	const list = document.querySelector('#list');
	list.appendChild(li);
});
