function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  console.log("drag event");
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
console.log(event.target);
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function poison(event) {
    document.getElementById("fish").className="poisoned";
    drop(event);
}