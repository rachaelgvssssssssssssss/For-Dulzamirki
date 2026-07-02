const terminalOutput = document.getElementById("terminalOutput");
const startBtn = document.getElementById("startBtn");

const storyScreen = document.getElementById("storyScreen");
const terminalScreen = document.getElementById("terminalScreen");
const storyContainer = document.getElementById("storyContainer");

const bootText = "$ ./open_my_heart";

let index = 0;

startBtn.style.display = "none";

function typeTerminal(){

    if(index < bootText.length){

        terminalOutput.innerHTML =
        bootText.substring(0,index+1) +
        '<span class="cursor"></span>';

        index++;

        setTimeout(typeTerminal,90);

    }else{

        terminalOutput.innerHTML =
        bootText +
        '<span class="cursor"></span>';

        startBtn.style.display="inline-block";

    }

}

typeTerminal();

const lines=[

"Initializing...",

"Loading memories...",

"Loading laughter...",

"Loading every reason I love you...",

"████████████████ 100%",

"Access Granted",

"",

"SYSTEM BOOT SUCCESS",

"Scanning...",

"Identity Verified",

"",

"Name : Wildan Alicondro Dulzamirki",

"Current Age : 30",

"Status : Birthday Detected",

"",

"Checking life progress...",

"Childhood ✔",

"Teenage Years ✔",

"Twenties ✔",

"Preparing next chapter..."

];

startBtn.addEventListener("click",startStory);

function startStory(){

    startBtn.style.display="none";

    terminalOutput.innerHTML="";

    let i=0;

    function printLine(){

        if(i>=lines.length){

            setTimeout(showMessage,1200);

            return;

        }

        terminalOutput.innerHTML+=lines[i]+"\n";

        terminalOutput.scrollTop=terminalOutput.scrollHeight;

        i++;

        setTimeout(printLine,600);

    }

    printLine();

}

function showMessage(){

    terminalScreen.style.display="none";

    storyScreen.style.display="flex";

    storyContainer.innerHTML=`

    <div class="storyLine fade">
        Selamat telah menuntaskan halaman terakhir usia dua puluhan, sayang.
    </div>

    <div class="storyLine fade">
        Tidak semua perjalanan selalu mudah.
    </div>

    <div class="storyLine fade">
        Tapi kamu berhasil sampai di titik ini.
    </div>

    <div class="storyLine fade">
        Dan aku harap, kamu bangga pada dirimu sendiri.
    </div>

    `;

    const items=document.querySelectorAll(".storyLine");

    items.forEach((item,index)=>{

        setTimeout(()=>{

            item.style.display="block";

        },index*2000);

    });

}
