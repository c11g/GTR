document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var target = document.getElementById('rawgit'),
			go = document.getElementById('go'),
			originUrl = tabs[0].url,
			newUrl = originUrl.replace('github', 'rawgit').replace('blob/', '');

		target.innerHTML = newUrl;

		go.addEventListener("click", function(){
			chrome.tabs.create({'url': newUrl, 'selected': true});
		});

	});

});
