        
var now = new Date();
now.setMinutes(Math.ceil(now.getMinutes() / 30) * 30);
var hours = now.getHours()
var h = ('0' + hours).slice(-2)
var h2 = ('0' + (hours + 12) % 24).slice(-2)
console.log(h)
console.log(h2)
document.getElementById("myImage").style.background = `url(../images/sky/${h}00.png) center center fixed`
document.getElementById("myImage2").style.background = `url(../images/sky/${h2}00.png) center center fixed`
document.getElementById("myIcon").onclick = function () { onclick() };
function onclick() {
  window.scrollTo(0, 0)
}
window.onscroll = function () { myFunction() };
var header = document.getElementById("myIcon");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    document.getElementById("fadeObject").style.opacity = '0';
    header.classList.add("sticky");
    document.getElementById("lmao").style.paddingLeft = "100px"
  } else {
    document.getElementById("fadeObject").style.opacity = '1';
    header.classList.remove("sticky");
    document.getElementById("lmao").style.paddingLeft = "20px"
  }
}

const headlineElement = document.getElementById("headline");
headlineElement.addEventListener("click", function() {
    const textToCopy = "play.wasteofti.me";
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            showToast("IP copied!");
        })
        .catch(err => {
            console.log("Error trying to copy text: ", err);
            showToast("Error copying text to clipboard");
        });
});

// Event listener for mouseenter on headline element
headlineElement.addEventListener("mouseenter", function() {
  toastStuff(true);
});

// Event listener for mouseleave on headline element
headlineElement.addEventListener("mouseleave", function() {
  console.log("mouse elft")
  toastStuff(false);
});


const toast = document.createElement("div");
toast.classList.add("infoToast");
toast.textContent = "Click to copy IP!";

function toastStuff(bool) {

  if (bool) {
    headlineElement.parentElement.appendChild(toast);
  } else {
    removeToast()
  }

  // Function to handle removing the toast
  function removeToast() {
          toast.remove();
  }
}



function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;
    headlineElement.parentElement.appendChild(toast);
    const headlineRect = headlineElement.getBoundingClientRect();

    // Wait for the message to show for a bit before starting fade out
    setTimeout(function() {
        toast.style.opacity = '0';
    }, 500); // Start fade out a bit before removal to see the effect
  
    // Wait for the fade out transition, then remove
    setTimeout(function() {
        toast.remove();
    }, 1000 + 500); // Plus the transition time to ensure it's seen
}