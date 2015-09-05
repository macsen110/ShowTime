
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
	new Slider();

	//调用tabChange
	new tabChange()  
}}