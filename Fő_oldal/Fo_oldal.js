var questions = [
    {
        question: "Mi az operációs rendszer?",
        options: ["A számítógép hardverét kezelő szoftver", "A számítógép képernyőjének felbontása", "A számítógép energiafogyasztása"],
        answer: "A számítógép hardverét kezelő szoftver"
    },
    {
        question: "Mi a CPU?",
        options: ["A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép képernyőjének felbontása", "A számítógép energiafogyasztása"],
        answer: "A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak."
    },
    {
        question: "Mi a RAM?",
        options: ["A számítógép ideiglenes tárolóhelye, amelyben a CPU gyorsan hozzáférhet az adatokhoz.", "A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép energiafogyasztása"],
        answer: "A számítógép ideiglenes tárolóhelye, amelyben a CPU gyorsan hozzáférhet az adatokhoz."
    },
    {
        question: "Mi a GPU?",
        options: ["A számítógépben található hardver, amely a képernyőn megjelenő képek rendereléséért felelős.", "A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép energiafogyasztása"],
        answer: "A számítógépben található hardver, amely a képernyőn megjelenő képek rendereléséért felelős."
    },
    {
        question: "Mi az SSD?",
        options: ["Az SSD (Solid State Drive) egy típusú adattároló eszköz, amely nincs mozgó alkatrésze, így gyorsabb és megbízhatóbb, mint a hagyományos merevlemezek.", "A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép energiafogyasztása"],
        answer: "Az SSD (Solid State Drive) egy típusú adattároló eszköz, amely nincs mozgó alkatrésze, így gyorsabb és megbízhatóbb, mint a hagyományos merevlemezek."
    },
    {
        question: "Mi a cloud computing?",
        options: ["A cloud computing (felhő alapú számítástechnika) lehetővé teszi a felhasználók számára, hogy interneten keresztül hozzáférjenek számítási erőforrásokhoz, mint például szerverek, tárhely és adatbázisok.", "A számítógép 'agyát' jelenti, amely végrehajtja az utasításokat, amelyeket a számítógépes programok tartalmaznak.", "A számítógép energiafogyasztása"],
        answer: "A cloud computing (felhő alapú számítástechnika) lehetővé teszi a felhasználók számára, hogy interneten keresztül hozzáférjenek számítási erőforrásokhoz, mint például szerverek, tárhely és adatbázisok."
    }
];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // Amíg még vannak elemek a tömbben
    while (0 !== currentIndex) {

        // Válasszunk egy véletlen elemet
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // És cseréljük meg a jelenlegi elemet a véletlen elemmel
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var currentQuestion = questions[Math.floor(Math.random() * questions.length)];
currentQuestion.options = shuffle(currentQuestion.options);
document.getElementById("question").innerText = currentQuestion.question;

var optionsContainer = document.getElementById("options");
currentQuestion.options.forEach(function(option, index) {
    var radioHtml = '<div><input type="radio" name="option" value="' + option + '">' + option + '</div>';
    optionsContainer.innerHTML += radioHtml;
});

function checkAnswer() {
    var selectedOption = document.querySelector('input[name="option"]:checked').value;
    if (selectedOption == currentQuestion.answer) {
        document.getElementById("result").innerHTML = "Helyes válasz!";
    } else {
        document.getElementById("result").innerHTML = "Sajnos nem helyes a válasz. Próbáld újra!";
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