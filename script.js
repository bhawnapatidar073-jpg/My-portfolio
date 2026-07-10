const text = "Bhawna Patidar";
let index = 0;

function typingEffect() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 150);

    }

}

typingEffect();

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.onclick = function () {
    document.body.classList.toggle("dark");
    alert("Button Working!");
};

