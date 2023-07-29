
// initialize the valiables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3')
let masterPlay = document.getElementById('masterplay')
let myprogressbar = document.getElementById('myprogressbar')
let songitem = Array.from(document.getElementsByClassName('songitem'));
let mastersongname =document.getElementById('mastersongname');
let songs = [
    {SongName:"jatti", filePath: "song/1.mp3" , CoverPath: "cover/jatti1.jpg"},
    {SongName:"Bom_Diggy_diggy", filePath: "song/2.mp3" , CoverPath: "cover/bom.jpg"},
    {SongName:"Cheez_Badi", filePath: "song/3.mp3" , CoverPath: "cover/cheez.jpg"},
    {SongName:"Coca_Cola", filePath: "song/4.mp3" , CoverPath: "cover/coka.jpg"},
    {SongName:"Daaru_Wargi", filePath: "song/5.mp3" , CoverPath: "cover/daru.jpg"},
    {SongName:"chandighar_mein", filePath: "song/6.mp3" , CoverPath: "cover/jatti1.jpg"},
    {SongName:"channa_mereya", filePath: "song/7.mp3" , CoverPath: "cover/jatti1.jpg"},
    {SongName:"chogada", filePath: "song/8.mp3" , CoverPath: "cover/jatti1.jpg"}
]
songitem.forEach((element ,i) => {
    element.getElementsByTagName('img')[0].src  = songs[i].CoverPath;
    element.getElementsByClassName('songnames')[0].innerText = songs[i].SongName
});
// audioElement.play()

// Handle Play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        
        document.getElementById('gif').style.opacity = 1;
        masterPlay.classList.remove('fa-regular', 'fa-2x', 'fa-circle-play');
        masterPlay.classList.add('fa-regular', 'fa-2x', 'fa-circle-pause');
        
    }
    else{
        audioElement.pause();
        document.getElementById('gif').style.opacity = 0;
        masterPlay.classList.remove('fa-regular', 'fa-2x', 'fa-circle-pause');
        masterPlay.classList.add('fa-regular', 'fa-2x', 'fa-circle-play');
        
        
    }
})
// Listen to Event 
audioElement.addEventListener('timeupdate',()=>{
// Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
myprogressbar.value = progress;

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songplayitem')).forEach((element)=>{
            element.classList.remove('fa-regular' , 'fa-circle-pause')
            element.classList.add('fa-regular' , 'fa-circle-play')
        })
    }
Array.from(document.getElementsByClassName('songplayitem')).forEach((element,i)=>{
    element.addEventListener('click',(e) =>
    {
        // makeAllPlays();
        if(audioElement.paused || audioElement.currentTime<=0){
        songIndex = parseInt(e.target.id);
       
        
        e.target.classList.remove('fa-regular' , 'fa-circle-play')
        e.target.classList.add('fa-regular' , 'fa-circle-pause')
        audioElement.src = `song/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].SongName;
        audioElement.currentTime =0;
        audioElement.play();
        document.getElementById('gif').style.opacity = 1;
        masterPlay.classList.remove('fa-regular', 'fa-2x', 'fa-circle-play');
        masterPlay.classList.add('fa-regular', 'fa-2x', 'fa-circle-pause');
        }
        else{
            audioElement.pause();  
            document.getElementById('gif').style.opacity = 0;
            e.target.classList.remove('fa-regular' , 'fa-circle-pause')
        e.target.classList.add('fa-regular' , 'fa-circle-play')
        masterPlay.classList.remove('fa-regular', 'fa-2x', 'fa-circle-pause');
        masterPlay.classList.add('fa-regular', 'fa-2x', 'fa-circle-play');
        }
    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].SongName;
    audioElement.currentTime =0;
    audioElement.play();
    document.getElementById('gif').style.opacity = 1;
    masterPlay.classList.remove('fa-regular', 'fa-2x', 'fa-circle-play');
    masterPlay.classList.add('fa-regular', 'fa-2x', 'fa-circle-pause');
})
document.getElementById('back').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].SongName;
    audioElement.currentTime =0;
    audioElement.play();
    document.getElementById('gif').style.opacity = 1;
    masterPlay.classList.remove('fa-regular', 'fa-2x', 'fa-circle-play');
    masterPlay.classList.add('fa-regular', 'fa-2x', 'fa-circle-pause');
})
