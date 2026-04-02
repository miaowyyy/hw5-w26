var video;
var playbackRate = 1;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop is set to false");


	document.querySelector("#play").addEventListener("click", function () {
		video.play();
		document.querySelector("#volume").textContent = document.querySelector("#slider").value + "%";
		console.log("Play Video");
	});



	document.querySelector("#pause").addEventListener("click", function () {
		video.pause();
		console.log("Pause Video");
	});



	document.querySelector("#slower").addEventListener("click", function () {
		playbackRate = playbackRate * 0.9;
		video.playbackRate = playbackRate
		console.log("Slow down video");
		console.log("Speed is " + video.playbackRate);
	});


	document.querySelector("#faster").addEventListener("click", function () {
		playbackRate = playbackRate / 0.9;
		video.playbackRate = playbackRate;
		console.log("Speed up video");
		console.log("Speed is " + playbackRate);
	});



	document.querySelector("#skip").addEventListener("click", function () {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime = video.currentTime + 10;
		}
		console.log("Video current time is " + video.currentTime);
	});


	document.querySelector("#mute").addEventListener("click", function () {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
			console.log("Unmute");
		} else {
			video.muted = true;
			this.textContent = "Unmute";
			console.log("Mute");
		}
	});


	document.querySelector("#slider").addEventListener("input", function () {
		console.log("The current value is " + video.volume);         
		video.volume = this.value / 100;
		console.log("The current value is " + video.volume);          
		document.querySelector("#volume").textContent = this.value + "%";
		console.log(document.querySelector("#volume"));   
	});


	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});








});

