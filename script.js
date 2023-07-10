document.addEventListener("mousemove", rotateimage);

function rotateimage() {
    var image = document.querySelector("#imgrt");
    var count = 0;
    var interval = setInterval(()=> {
        // image.style.transform =" rotate(90deg)";
      image.style.transform = "rotate(" + count + "deg)";
      count++;
      if (count > 360) {
        count = 0;
      }
    }, 50);
  
  // Remove the event listener after the first execution
  document.removeEventListener("mousemove", rotateimage);
}

// image show--------------------------------

var aboutcolimg = document.getElementById("aboutcolimg");
var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");
function changeimgb() {
    aboutcolimg.src = "./images/avatar.jpg";
}
function changeimg() {
    aboutcolimg.src = "./images/realme.jpg";
}
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("activelink");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}

// menu and crosss---------------------------------------------

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";

}
