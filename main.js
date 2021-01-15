var song = document.getElementById("song");
var icon = document.getElementById("icon");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
let x = 0;
let song_dir = `songs/${x}.mp3`;

icon.onclick = function() {
    if (song.paused) {
        song.play();
        icon.src = "image/pause.png";
    } else {
        song.pause();
        icon.src = "image/play.png"
    }
};


next.onclick = function() {
    x += 1;
    document.getElementById("song").src = `songs/${x}.mp3`
    song.load()
    song.play()

};

prev.onclick = function() {
    x -= 1;
    document.getElementById("song").src = `songs/${x}.mp3`
    song.load()
    song.play()
}