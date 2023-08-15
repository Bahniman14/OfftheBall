var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
let Q = document.getElementById("quotes");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

// Q.textContent = "P";
// window.onload = function() {
//   var paragraph = document.getElementById("my-paragraph");
//   var contents = ["New content 1", "New content 2", "New content 3"]; // Array of new contents

//   
// // 
let content = [
  "Football is like life: It requires perseverance, self-denial, hard work, sacrifice, dedication, and respect for authority <br> <br>- Vince Lombardi",
  "The more difficult the victory, the greater the happiness in winning <br> <br>- Pele",
  "I learned all about life with a ball at my feet <br> <br>- Ronaldinho",
  "You have to fight to reach your dream <br> <br>- Diego Maradona",
  "When people succeed, it is because of hard work. Luck is only important when you don't work hard <br> <br>- Bill Belichick",
  "Football is not a matter of life and death, it is much more important than that <br> <br>- Bill Shankly",
  "The beautiful game <br> <br>- Jorge Valdano",
  "The ball is round, the game lasts 90 minutes, and everything else is just theory <br> <br>- Sepp Herberger",
  "Football is a game of two halves <br> <br>- Gary Lineker",
  "If you don't believe you can do it, then you have no chance at all <br> <br>- Arsene Wenger"
]
var index = 0;
  setInterval(function() {
    Q.innerHTML = content[index];
    index = (index + 1) % content.length;
  }, 4000); // Change content every 4 seconds (4000 milliseconds)


gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});


function topFunction(){
  const scrollToBottom =  800;;
  window.scrollTo({
    top: scrollToBottom,
    behavior: 'smooth'
  });
}

// History:
const textContainer = document.getElementById("history_text");
let text = "1800s: The early roots";
    const typingSpeed = 5; // Speed in milliseconds (lower value = faster typing)
    fetch('history.txt')
    .then(response => response.text())
    .then(con => {
      text = con; // Output the file content to the console
      // Perform further actions with the content as needed
    })
    .catch(error => {
      console.error('Error reading file:', error);
    });

    let index_H = 0;

    function typeText() {
      if (index_H < text.length) {
        textContainer.innerHTML += text.charAt(index_H);
        index_H++;
        setTimeout(typeText, typingSpeed);
      }
    }
typeText();

const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-btn");
const responseContainer = document.getElementById("AI_answer");


const url = "http://127.0.0.1:8000/";

const call_api = async (question) => {
  try {
    const options = {
      method: "POST",
      body: question,
    };
    const response = await fetch(url, options);
    const result = await response.text();
    return result
  } catch (error) {
    console.error(error);
  }
};

submitButton.addEventListener("click", async ()=>{

const question = userInput.value;
responseContainer.textContent = "Thinking...";

const blinkInterval = setInterval(() => {
  responseContainer.style.visibility = responseContainer.style.visibility === "hidden" ? "visible" : "hidden";
}, 500);

// Make the API call (you should replace this with your actual API call)
const result = await call_api(question);

// Stop the blinking effect
clearInterval(blinkInterval);

// Update the responseContainer with the result
responseContainer.style.visibility = "visible";
responseContainer.textContent = result;
})
