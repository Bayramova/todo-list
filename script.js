document.getElementById('add')
	.addEventListener('click', function () {
		const li = createItem();
	});


function createItem () {
	const li = document.createElement('li');
	const inputValue = document.getElementById('input').value;
	const text = document.createTextNode(inputValue);
  	li.appendChild(text);
	
	if (inputValue === '') {
		alert('You must write something');
	}
	else {
		document.getElementById('list')
		.appendChild(li);
	}

	document.getElementById('input').value = '';

	const deleteButton = document.createElement('span');
	const txt = document.createTextNode('\u00D7');
	deleteButton.className = 'close';
	deleteButton.appendChild(txt);
	li.appendChild(deleteButton);
	
	deleteButton.addEventListener('click', deleteItem);

	li.addEventListener('click', toggle);

	return li;
}

function deleteItem (event) {
	const li = event.target.parentNode;
	const list = document.getElementById('list');
	list.removeChild(li);
}

function toggle (event) {
	const li = event.target;
	li.style.textDecoration === 'line-through'
			?li.style.textDecoration = 'none'
			:li.style.textDecoration = 'line-through';
}
