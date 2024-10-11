

// document.getElementById("title").innerHTML = "New Title";
// const a = document.getElementById("myDIV");
// const button = document.querySelector(".checked");
// console.log(button);

var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (ev) {
    if (ev.target.tagName === "LI")
    {
        ev.target.classList.toggle("checked");
}
},
false
);
    