//your JS code here. If required.
const p = document.querySelector("#timer");

setInterval(()=>{
	let date = new Date();
	p.innerText = date.toLocaleString();
},1000)