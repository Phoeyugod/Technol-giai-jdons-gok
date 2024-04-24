var questions = [
    {
        question: "Mi az operációs rendszer?",
        options: ["A számítógép hardverét kezelő szoftver", "A számítógép képernyőjének felbontása", "A számítógép energiafogyasztása"],
        answer: 0
    },
    {
        question: "Mi a CPU?",
        options: ["A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép képernyőjének felbontása", "A számítógép energiafogyasztása"],
        answer: 0
    },
    {
        question: "Mi a RAM?",
        options: ["A számítógép ideiglenes tárolóhelye, amelyben a CPU gyorsan hozzáférhet az adatokhoz.", "A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép energiafogyasztása"],
        answer: 0
    },
    {
        question: "Mi a GPU?",
        options: ["A számítógépben található hardver, amely a képernyőn megjelenő képek rendereléséért felelős.", "A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép energiafogyasztása"],
        answer: 0
    },
    {
        question: "Mi az SSD?",
        options: ["Az SSD (Solid State Drive) egy típusú adattároló eszköz, amely nincs mozgó alkatrésze, így gyorsabb és megbízhatóbb, mint a hagyományos merevlemezek.", "A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép energiafogyasztása"],
        answer: 0
    },
    {
        question: "Mi a cloud computing?",
        options: ["A cloud computing (felhő alapú számítástechnika) lehetővé teszi a felhasználók számára, hogy interneten keresztül hozzáférjenek számítási erőforrásokhoz, mint például szerverek, tárhely és adatbázisok.", "A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép energiafogyasztása"],
        answer: 0
    }
];

var currentQuestion = questions[Math.floor(Math.random() * questions.length)];
document.getElementById("question").innerText = currentQuestion.question;

var optionsContainer = document.getElementById("options");
currentQuestion.options.forEach(function(option, index) {
    var radioHtml = '<div><input type="radio" name="option" value="' + index + '">' + option + '</div>';
    optionsContainer.innerHTML += radioHtml;
});

function checkAnswer() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption.value == currentQuestion.answer) {
            document.getElementById("result").innerHTML = "Helyes válasz!";
        } else {
            document.getElementById("result").innerHTML = "Sajnos nem helyes a válasz. Próbáld újra!";
        }
    } else {
        document.getElementById("result").innerHTML = "Kérlek, válassz egy válaszlehetőséget!";
    }
}

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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}