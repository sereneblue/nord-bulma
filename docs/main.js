// check if set in local storage
if (localStorage.getItem('theme') == 'dark') {
	document.styleSheets[2].disabled = true;
	document.getElementById('themeBtn').innerText = "Switch to light theme";
} else {
	localStorage.setItem('theme', 'light');
	document.getElementById('themeBtn').innerText = "Switch to dark theme";
}

function switchTheme() {
	let curTheme = localStorage.getItem('theme');

	localStorage.setItem('theme', curTheme == 'dark' ? 'light' : 'dark');
	document.styleSheets[2].disabled = curTheme == 'light';
	document.getElementById('themeBtn').innerText = `Switch to ${curTheme} theme`;
}