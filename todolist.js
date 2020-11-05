function addItem(){
    var ul = document.getElementById("list");
    var task = document.getElementById("task");
    var li = document.createElement("li");
    li.setAttribute('id',task.value);
    li.appendChild(document.createTextNode(task.value));
    ul.appendChild(li);
    
}

function removeItem(){
    var ul = document.getElementById("list");
    var task = document.getElementById("task");
    var item = document.getElementById(task.value);
    ul.removeChild(item);
}
