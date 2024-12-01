const elements = document.querySelectorAll(".mover");
elements.forEach((element) => {
  DragTheElement(element);
});

function DragTheElement(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  element.onmousedown = (e) => {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  };

  function dragElement(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Update the position of the element
    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var button = $(".lesson1Done")
var congrats = $(".pCongrats")

button.on("click", change)

//event handler
function change(){
  congrats.text("Congrats! You just learned your first line of code.")
}
