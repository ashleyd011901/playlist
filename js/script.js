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
		"title":"Across the Universe",
		"artist":"The Beatles",
		"mp3-url":"https://open.spotify.com/track/4dkoqJrP0L8FXftrMZongF",
		"image-url":"https://i.scdn.co/image/b3651a85f2bca826b38194c51d09cd7b068aa3ab",

	},
	{
		"title":"The Party's Crashing Us ",
		"artist":"Of Montreal",
		"mp3-url":"https://open.spotify.com/track/12zvitvNTaAM6HxMPGm1vh",
		"image-url":"https://i.scdn.co/image/029db5b208be1718359eb000e9ffca87ca035157",
	},
	{
		"title":"Under Cover of Darkness",
		"artist":"The Strokes",
		"mp3-url":"https://open.spotify.com/track/6u0x5ad9ewHvs3z6u9Oe3c",
		"image-url":"https://i.scdn.co/image/c1b2df9385e01aedc5288dfa315329f4c1dd79e1",
	}

]
//DOCUMENT READY FUNCTION
// $( document ).ready(function() {
// 	$('body').append("<p>Song title: " + mySong.title + "</p>");
// 	$('body').append("<p>Artist: " + mySong.artist + "</p>");
// 	$('body').append("<img src =" + mySong['image-url'] + ">");
// 	$('body').append("<a href ='" + mySong['mp3-url'] + "'> Play Song </a>");


  
// function displayList
$(document).ready(function(){
	console.log("ready")
	for(var i = 0; i < myPlayList.length; i++){
		$("body").append("<p> Title:" + myPlayList[i].title + "</p>");
    	$("body").append("<p> Artist:" + myPlayList[i].artist + "</p>");
		$("body").append("<a href ='" + myPlayList[i]["mp3-url"] + "'> Play Song </a>");
		$("body").append("<img src =" + myPlayList[i]["image-url"] + ">");
	
	}
});


function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
