document.getElementById("add").onclick = function () {
	document.getElementById("new-Songs").focus();
}

window.addEventListener("keydown", function (event) {
	if (event.defaultPrevented) {
		return; 
	}
	switch (event.key) {		
		case "Enter":
			console.log('-----Enter key was pressed-----');
			this.document.getElementsByTagName('label');
			this.document.getElementById('add').click();
			break;
		default:
			return; 
	}
	event.preventDefault();
}, true);

let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdPlaylist = new Text();
	console.log('variable createdPlaylist empty string =', createdPlaylist);
    
    let table = document.getElementById('songs-table');
    console.log('variable table = This is new container from input', table);

    let row = table.insertRow(1);
    console.log('variable row = This is adding another row of data from text input', row);

    row.setAttribute('id', `item-${id}`);
	console.log('row.setAttribute: sets new ID to added item', 'id', `item-${id}`)

    row.insertCell(0).innerHTML = document.getElementById('new-artists').value;
	console.log('row.insertCell(0) =', document.getElementById('new-artists').value);

    row.insertCell(1).innerHTML = document.getElementById('new-songs').value;
	console.log('row.insertCell(1) =', document.getElementById('new-songs').value);



    let actions = row.insertCell(2);
    console.log('variable "actions" =', actions);

    actions.appendChild(createDeleteButton(id++));
	console.log('This appendsChild ', createDeleteButton(id++));

    document.getElementById('new-artists').value = '';
    document.getElementById('new-songs').value = '';
});

function createDeleteButton(id) {

    let btn = document.createElement('button');
	console.log(document.createElement('button'));

    btn.className = 'btn btn-danger';
	console.log(btn.className);

    btn.id = id;
	console.log(btn.id);

    btn.innerHTML = 'Remove';
	console.log(btn.innerHTML);

    btn.onclick = () => {

        let elementToDelete = document.getElementById(`item-${id}`);
				
        elementToDelete.parentNode.removeChild(elementToDelete);
		console.log('Deleting :', elementToDelete);
    };
	console.log(btn);
    return btn;	
}