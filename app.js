(function() {	
	var scroll = new SmoothScroll('a[href*="#"]');

	var soundCloudLoaded = false;		
	
	var loadSoundCloudMedia = function() {
		var mediaSection = document.querySelector('.media');
		var mediaElements = document.querySelectorAll('iframe');		

		if (!soundCloudLoaded && mediaElements && window.pageYOffset >= mediaSection.getBoundingClientRect().top) {
			for (var i = 0; i < mediaElements.length; i++) {
				mediaElements[i].src = mediaElements[i].dataset.src;
			}

			soundCloudLoaded = true;
		}
	};

	window.addEventListener('scroll', loadSoundCloudMedia);	
})();