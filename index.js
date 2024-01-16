console.log("Welcome to Spotify");
//initiazise
let songIndex = 0;
let audioElement = new Audio("song-0.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let songItems = document.getElementsByClassName("songItem");
let songs = [
  { SongName: "WaterMelon Sugar", filepath: "ws.mp3", coverPath: "cover1.jpg" },
  { SongName: "7 Years", filepath: "7y(1).mp3", coverPath: "cover2.jpg" },
  { SongName: "Falling Slowly", filepath: "ws.mp3", coverPath: "cover13.jpg" },
  { SongName: "Mocking Bird", filepath: "mb.mp3", coverPath: "cover4.jpg" },
  { SongName: "Dil Nu", filepath: "7y(4).mp3", coverPath: "cover5.jpg" },
  { SongName: "Somebody's Me", filepath: "sm.mp3", coverPath: "cover6.jpg" },
  { SongName: "Perfect", filepath: "p.mp3", coverPath: "cover7.jpg" },
];
// songItems.forEach((element)=>{
//     element.getElementByTagName("img")[0].src=songs[i].coverPath;
//     element.getElementByClassName("songName")[0].innerText=songs[i].SongName;
// })

//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//listen to events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      gif.style.opacity = 0;
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `song-${songIndex}.mp3`;
      document.getElementById('masterSongName').innerText=songs[songIndex].SongName
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 0;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  gif.style.opacity = 0;
  audioElement.src = `song-${songIndex}.mp3`;
  audioElement.currentTime = 0;
  document.getElementById('masterSongName').innerText=songs[songIndex].SongName
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  console.log("WER")
  if (songIndex <=0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  gif.style.opacity = 0;
  audioElement.src = `song-${songIndex}.mp3`;
  audioElement.currentTime = 0;
  document.getElementById('masterSongName').innerText=songs[songIndex].SongName
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

