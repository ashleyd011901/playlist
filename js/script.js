// quick fix for Cloud9 warning:
/* global $ */
/* global url */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"How Did I Get Here",
	"artist":"ODESZA",
	"mp3-url":"https://open.spotify.com/track/5MioM7cyUToVQN7zcIMVxi",
	"image-url":"https://i.scdn.co/image/26c51ac179c1c8a7682747dcc9c1ab81361dfe2f",
	"duration":"2:11",
	"genre":"pop",
}

var myPlayList = [
	{
		"title":" Across the Universe",
		"artist":" The Beatles",
		"mp3-url":"https://open.spotify.com/track/4dkoqJrP0L8FXftrMZongF",
		"image-url":"https://i.scdn.co/image/b3651a85f2bca826b38194c51d09cd7b068aa3ab",

	},
	{
		"title":" The Party's Crashing Us ",
		"artist":" Of Montreal",
		"mp3-url":"https://open.spotify.com/track/12zvitvNTaAM6HxMPGm1vh",
		"image-url":"https://i.scdn.co/image/029db5b208be1718359eb000e9ffca87ca035157",
	},
	{
		"title":" Under Cover of Darkness",
		"artist":" The Strokes",
		"mp3-url":"https://open.spotify.com/track/6u0x5ad9ewHvs3z6u9Oe3c",
		"image-url":"https://i.scdn.co/image/c1b2df9385e01aedc5288dfa315329f4c1dd79e1",
	}

]

$(document).ready(function(){
	console.log("ready")
	renderPlayList();
	$("#addSong").click(addSong);
});

function renderPlayList() {
	
	$(".songs").html("");
	for(var i = 0; i < myPlayList.length; i++) {
	console.log("renderPlayList")	
		$(".songs").append("<div class='song' id='song-" + i + "'><br><div class='remove'>&#10007;</div></div>");
		$("#song-" + i).append("<p> Title:" + myPlayList[i].title + "</p>");
    	$("#song-" + i).append("<p> Artist:" + myPlayList[i].artist + "</p>");
		$("#song-" + i).append("<a href ='" + myPlayList[i]["mp3-url"] + "'> <h5 class= 'header'>Play Song</h5> </a>");
		$("#song-" + i).append("<img src =" + myPlayList[i]["image-url"] + ">");
	}

	$(".remove").click(removeSong);
}

function removeSong(event){
	console.log('X Clicked')
    console.log($(event.target).parent().attr("id"));
    var songId = $(event.target).parent().attr("id");
    var index = songId.split("-")[1]
    myPlayList.splice(index, 1);
    renderPlayList();
  
}

function addSong(){
	myPlayList.push({
		"title": $("#title").val(),
		"artist": $("#artist").val(),
		"mp3-url": $("#mp3Url").val(),
		"image-url": $("#imageUrl").val()
	});
	renderPlayList();
}
