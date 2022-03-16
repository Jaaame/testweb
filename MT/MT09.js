function digitalClock(sec) {
	let h = Math.floor(sec/3600).toString();
	let m = Math.floor(sec%3600/60).toString();
	let s = Math.floor(sec%3600%60).toString();
	if(h.length == 1){
		h = "0"+h
	}
	if(h == "24"){
		h = "00"
	}
	if(m.length == 1){
		m = "0"+m
	}
	if(s.length == 1){
		s = "0"+s
	}
	return h+":"+m+":"+s;
}
console.log("5025 = "+digitalClock(5025));
console.log("61201 = "+digitalClock(61201));
console.log("87000 = "+digitalClock(87000));