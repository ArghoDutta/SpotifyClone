console.log("Welcome to Spotify");
//Initialize the variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let mastersongname=document.getElementById('mastersongname');


let songs =[
    {songName:"Time of our lives",filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Empathy-Crystal Castles",filePath:"2.mp3",coverPath:"covers/2.jpg"},{songName:"Finding Paradise-Petite Noir",filePath:"3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Funk Universo",filePath:"4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Habibi-DJ Gimi-O",filePath:"5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Metamorphosis",filePath:"6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Heat Waves(Slowed reverb)",filePath:"7.mp3",coverPath:"covers/7.jpg"},
    {songName:"this is what you came for-sped upreverb",filePath:"8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Under The Influence X I was Never There",filePath:"9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Unforgettable-slowed(Remix)",filePath:"10.mp3",coverPath:"covers/10.jpg"},
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
    
});

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName('coverst')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        audioElement.src=`${songIndex}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;

    })
})
document.getElementById(`forward`).addEventListener(`click`,()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
})
document.getElementById(`previous`).addEventListener(`click`,()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
})