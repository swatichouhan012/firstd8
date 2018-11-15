var audio;

//Hide Pause
jQuery('#pause').hide();

initAudio(jQuery('#playlist li:first-child'));

function initAudio(element){
	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');
	
	//Create audio object
	audio = new Audio(''+ song);
	
	//Insert audio info
	jQuery('.artist').text(artist);
	jQuery('.title').text(title);
	
	//Insert song cover
	jQuery('img.cover').attr('src',''+cover);
	
	jQuery('#playlist li').removeClass('active');
	element.addClass('active');
}

//Play button
jQuery('#play').click(function(){
	audio.play();
	jQuery('#play').hide();
	jQuery('#pause').show();
	showDuration();
});

//Pause button
jQuery('#pause').click(function(){
	audio.pause();
	jQuery('#play').show();
	jQuery('#pause').hide();
});

//Stop button
jQuery('#stop').click(function(){
	audio.pause();
	audio.currentTime = 0;
});

//Next button
jQuery('#next').click(function(){
	audio.pause();
	var next = jQuery('#playlist li.active').next();
	if(next.length == 0){
		next = jQuery('#playlist li:first-child');
	}
	initAudio(next);
	audio.play();
	showDuration();
});

//Prev button
jQuery('#prev').click(function(){
	audio.pause();
	var prev = jQuery('#playlist li.active').prev();
	if(prev.length == 0){
		prev = jQuery('#playlist li:last-child');
	}
	initAudio(prev);
	audio.play();
	showDuration();
});

//Playlist song click
jQuery('#playlist li').click(function(){
	audio.pause();
	initAudio(jQuery(this));
	jQuery('#play').hide();
	jQuery('#pause').show();
	audio.play();
	showDuration();
});

//Volume control
jQuery('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});


//Time/Duration
function showDuration(){
	jQuery(audio).bind('timeupdate',function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt(audio.currentTime / 60) % 60;
		if(s < 10){
			s = '0'+s;
		}
		jQuery('#duration').html(m + ':'+ s);
		var value = 0;
		if(audio.currentTime > 0){
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		jQuery('#progress').css('width',value+'%');
	});
}

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

jQuery('#speaker').click(function(){
    jQuery('#volume').val('0');
});
jQuery('#speaker').click(function(){
    jQuery('#volume-section').toggle();
    audio.volume = 0; muted = true;
  });
jQuery('#volume').click(function(){
    jQuery('#volume-section').hide();
   });
