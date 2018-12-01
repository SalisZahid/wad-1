//============================================
//-----------  STEP - 1 ----------------------
//============================================


/*var todos = [];
function add() {
    var task = document.getElementById("task").value;   //Gets value of in put from textfield
    todos.push(task);           // Adds item to array
    document.getElementById('todos').innerText = todos;     // get inner text of element
}*/


//============================================
//-----------  STEP - 2 ----------------------
//============================================

/*
var todos = [];
function add() {
    var task = document.getElementById('task').value;
    todos.push(task);
    document.getElementById('task').value = ''; // value '' (null) is placed in text input
    show(); //Function called
}

function show() {
    var ul = document.createElement('ul');  // this function(createElement) will create element node with the given name
    ul.classList.add("list-group");     // classlist property will return class name os an element
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i] + '</li>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);// function will append last child node of a node
}
*/

//============================================
//-----------  STEP - 3 ----------------------
//============================================

/*

function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');   //localStorage property allows to save value in browser
    if(todos_str !== null)
        todos = JSON.parse(todos_str);  // a JSON string constructing the object described by the string
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task,isDone:false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos)); //stringify will convert the date into string
    show();
    return false;
}


function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        var x=document.getElementById('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger">' +
            '<i class="fas fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
show();
*/



//============================================
//-----------  STEP - 4 ----------------------
//============================================

/*

function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){                  //trim function returns a string
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');   // value of attribute is returned with the specified name
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function edit() {
    var task = $(button).parents('li[name="task"]');
    var span = task.children('span[name="Name"]');
    var edit = task.children('button[name="edit"]');
    var save = addElement.button('Save', 'taskItem.save(this)');
    var input = $('<input>');
    input.val(task.data('name'));
    input.attr('name', 'Edit');
    span.replaceWith(input);
    edit.replaceWith(save);
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done'); //removes css class
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}

show();
function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' +'<p  id="\'+i+\'" onclick="strikethroug(this)">'+'<input type="checkbox">'+ todos[i].task +'</p>' +'</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>'+
            '<button class="btn btn-edit" id1="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Edit </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    var buttons2 = document.getElementsByClassName('btn-edit');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
        buttons2[i].addEventListener('click',edit);
    }
}
*/
//============================================
//-----------  STEP - 5 ----------------------
//============================================

/*

CLASS ACTIVITY (HOME WORK) :

1- Enable State of todos by clicking on the text completed, started etc
HINT: use text-decoration:line-through; property of CSS

2- Enable Editing todos in text field to update text



*/

