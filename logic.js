function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  console.log("drag event");
  event.dataTransfer.setData("target", event.target.id);
  event.dataTransfer.setData("type", "freshWater");
}
function drop(event) {
console.log(event.target);
  event.preventDefault();
  var data = event.dataTransfer.getData("target");
  var type = event.dataTransfer.getData("type");
  console.log(type);
  event.target.appendChild(document.getElementById(data));
}

function poison(event) {
    console.log(event);
    var data = event.dataTransfer.getData("target");
    document.getElementById(data).className="poisoned";
    drop(event);
}