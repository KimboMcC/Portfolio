/*
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 



const col = document.getElementsByClassName("collapsible")[0];

function coll() {
    const val = col.nextElementSibling;
    console.log(val);
    if(val.style.display === "block") {
        val.style.display = "none"
    } else {
        val.style.display = "block"
    }
}

const col1 = document.getElementsByClassName("collapsible")[1];

function coll1() {
    const val = col1.nextElementSibling;
    console.log(val);
    if(val.style.display === "block") {
        val.style.display = "none"
    } else {
        val.style.display = "block"
    }
}
*/

//Expands or collapses when function is called. Function is called by button in HTML. 
//Also flips orientation based on state (aka open/closed aka block/none) 

function coll(x) {
    const col = document.getElementsByClassName("collapsible")[x];
    const val = col.nextElementSibling;
    const fa = document.getElementsByClassName("fa-solid")[x];
    if(val.style.display === "block") {
        val.style.display = "none"
        fa.style.transform = "rotate(360deg)" //rotates 360degree not from original state but from updated state aka. AFTER the 180 degree change.
    } else {
        val.style.display = "block"
        fa.style.transform = "rotate(180deg)"
    }
}