# Drag and Drop Game Spike

## Notes

- drag and drop behaviour is [native in HTML5](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- any element can be [draggable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable) using the attribute `draggable="true"` 
- add a listener to 
  - enable behaviour on an element e.g. `ondragstart="drag(event)"`
  - enable behaviour on a drop zone e.g. `ondragover="allowDrop(event)"`<sup>*</sup>
- in the JS file define the `drag()` and `allowDrop()` functions
  ```JavaScript
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  ```
  - `dataTransfer` holds the event's data and has methods for managing the data
  - `setData` adds an item to the data
  - the value of the data is defined as `event.target.id`
  ```JavaScript
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
  ```
  - `event.preventDefault` cancels the default behaviour that prevents dropping into another element. <sup>*</sup> `allowDrop` indicates a zone that can accept draggable elements.
  - and `drop` indicates what should happen when an element is dropped in the drop zone

## References

- [Drag-and-Drop tutorial by Andreea Macoveiciuc](https://javascript.plainenglish.io/beginner-drag-and-drop-game-with-html-css-and-js-58653f974285)
- [MDN web docs HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [MDN web docs `draggable`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable)