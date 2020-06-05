function addList(todoId, inputId, span1, spanOrther) {
  var li = document.createElement("li");
  var input = document.getElementById(inputId).value;
  li.innerHTML = input;
  var span = document.createElement("span");
  span.className = "close";
  span.innerHTML = "x";
  li.appendChild(span);
  document.getElementById(todoId).appendChild(li);
  document.getElementById(inputId).style.display = "none";
  document.getElementById(span1).style.display = "none";
  document.getElementById(spanOrther).style.display = "block";
}

//  Hiện thị list
function showInputAdd(task, span) {
  document.getElementById(task).style.display = "block";
  document.getElementById(span).style.display = "block";
}

function evenListener(idList, Model, showTask) {
  var bien = document.getElementById(idList);
  function chose(e) {
    var nameTask = e.target;
    document.getElementById(Model).style.display = "block";
    document.getElementById(showTask).innerHTML = nameTask.innerHTML;
  }
  bien.addEventListener("click", chose, false);
}

function cancel(idModel) {
  var modal = (document.getElementById(idModel).style.display = "none");
}

function showModal(listId, taskId, desc) {
  document.getElementById("id01").style.display = "block";
  var value = document.getElementById(`${listId}-${taskId}`).innerHTML;
  document.getElementById("nameTask").innerHTML = value;
  document.getElementById("getDescription").innerHTML = desc;
}

function modelTop(idModel) {
  let modal = (document.getElementById(idModel).style.display = "block");
}

function deleteTask(listId, taskId) {
  const a = document.getElementById(`${listId}-${taskId}`).parentElement;
  a.remove();
}
