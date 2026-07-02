const output=document.getElementById('terminalOutput');
const btn=document.getElementById('startBtn');
const music=document.getElementById('bgMusic');
const lines=[
'Initializing...',
'Loading memories...',
'Loading laughter...',
'Loading every reason I love you...',
'████████████████████ 100%',
'Access Granted',
'',
'Preparing Something Special...',
'Scanning...',
'Identity Verified',
'Name        : Wildan Alicondro Dulzamirki',
'Current Age : 30',
'Status      : Birthday Detected',
'',
'Surprise package found.',
'Opening package...',
'',
'Selamat telah menuntaskan halaman terakhir usia dua puluhan, sayang.',
'Tidak semua perjalanan selalu mudah.',
'Tapi kamu berhasil sampai di titik ini.',
'Dan aku harap, kamu bangga pada dirimu sendiri.'
];
output.textContent='$ ./open_my_heart';
btn.onclick=async()=>{
 btn.remove();
 try{music.play();}catch(e){}
 output.textContent='';
 for(const l of lines){
   output.textContent+=l+"\n";
   await new Promise(r=>setTimeout(r,700));
 }
 output.textContent+="\n\n(Prototype selesai. Versi premium akan melanjutkan ke slideshow otomatis.)";
};