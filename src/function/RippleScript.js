const RippleScript = () => {
    var drawRipple = function (ev) {
        var node = document.querySelector(".ripple");
        var newNode = node.cloneNode(true);
        newNode.classList.add("animate");
        newNode.style.left = ev.clientX - 5 + "px";
        newNode.style.top = ev.clientY - 5 + "px";
        node.parentNode.replaceChild(newNode, node);
      };
    
      //Ripple Triggers
      window.addEventListener("click", drawRipple);
}
 
export default RippleScript;