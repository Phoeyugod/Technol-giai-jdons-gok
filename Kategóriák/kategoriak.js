document.addEventListener('DOMContentLoaded', function() {
    const h1Element = document.querySelector('h1');
    h1Element.style.position = 'absolute';
    h1Element.style.top = '0';
    h1Element.style.left = '50%';
    h1Element.style.transform = 'translateX(-50%)';
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

// A modális ablak bezárása, ha a felhasználó az ablakon kívül kattint
window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none";
      }
  }
}