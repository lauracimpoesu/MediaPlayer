$('#vidBtn').on('click', function() {
    var box = $('#chVideo'); 
    box.fadeToggle(500);
    }) 

    $('#audioBtn').on('click', function() {
        var box = $('#chAudio'); 
        box.fadeToggle(500);
        }) 


var controllo = document.querySelector('#controllo')
var moreControl = document.querySelector('#moreControl')
moreControl.innerHTML = '<p class="text-light"></p>'
function forward() { document.querySelector('#controllo').currentTime += 1 }
function back() { document.querySelector('#controllo').currentTime -= 3 }
function speedItUp() { document.querySelector('#controllo').playbackRate = 2 } 

var displayMyMedia = {
swissMedia: new swissMedia(),
storageJSON : "js/json/playlist.json",
myVideos : '#chVideo',
mySongs : '#chAudio',
displayMedia: function () {
    displayMyMedia.swissMedia.myPlayer = 'assets'
    displayMyMedia.caricamento(); },

caricamento() {
$.ajax({
type: 'GET',
url: displayMyMedia.storageJSON,
dataType: 'json',
success: function (theResponse) {
    displayMyMedia.swissMedia.theAudio = theResponse.audio
    displayMyMedia.swissMedia.theVideo = theResponse.video
    displayMyMedia.displayMagic(); } }) },

displayMagic()
{ canciones = ''
    misvideos = ''
for(i=0; i<displayMyMedia.swissMedia.theAudio.length; i++) { canciones+= "<li id='firstList' class='list-group-item' onclick=\"displayMyMedia.swissMedia.startFunctions('"+displayMyMedia.swissMedia.theAudio[i].file+"', '"+displayMyMedia.swissMedia.types.AUDIO+"')\">"+displayMyMedia.swissMedia.theAudio[i].title+"</li>" }
for (i = 0; i < displayMyMedia.swissMedia.theVideo.length; i++) { misvideos += "<li id='secondList' class='list-group-item' onclick=\"displayMyMedia.swissMedia.startFunctions('" + displayMyMedia.swissMedia.theVideo[i].file + "', '" + displayMyMedia.swissMedia.types.VIDEO + "')\">" + displayMyMedia.swissMedia.theVideo[i].title + "</li>" 
}
$(displayMyMedia.mySongs).html(canciones)
$(displayMyMedia.myVideos).html(misvideos) } }
$(document).ready(displayMyMedia.displayMedia)

function swissMedia()
    {  this.myPlayer = ''
        this.theVideo = []
        this.theAudio = []
        this.types = { AUDIO : 'audio', VIDEO : 'video' }
        this.startFunctions = function(index, myValue){
var swissPlayer = document.getElementsByTagName(myValue)[0];
swissPlayer.setAttribute("src", this.myPlayer + "/" + myValue + "/" + index)
swissPlayer.play() }}







