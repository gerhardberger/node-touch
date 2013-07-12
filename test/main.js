require('../index.js')();

window.onload = function () {

for (var i = 0; i < 30;i++) {
	var button = document.createElement('button');
	button.classList.add('touch');
	var div = document.createElement('div');
	div.innerHTML = i + ' item';
	button.appendChild(div);
	document.body.appendChild(button);

	button.addEventListener('tap', function (event) {
		this.classList.toggle('tapped');
		console.log('tap')
	}, false);
}

};