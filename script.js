const terminalOutput = document.getElementById("terminalOutput");
const startBtn = document.getElementById("startBtn");

const terminalText =
"$ ./open_my_heart";

let index = 0;

// Tombol disembunyikan dulu
startBtn.style.display = "none";

// Efek mengetik
function typeTerminal(){

    if(index < terminalText.length){

        terminalOutput.innerHTML =
        terminalText.substring(0,index+1) +
        '<span class="cursor"></span>';

        index++;

        setTimeout(typeTerminal,120);

    }else{

        terminalOutput.innerHTML =
        terminalText +
        '<span class="cursor"></span>';

        startBtn.style.display="inline-block";

    }

}

typeTerminal();

startBtn.addEventListener("click",startStory);
