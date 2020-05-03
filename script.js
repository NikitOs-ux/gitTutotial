var el_1=document.getElementById('some-block');
var el_2=document.getElementsByTagName('div');

function change(Element){
	Element.innerHTML = 'Here is some content';
}

function collection(Elements){
	for (var i=0; i < Elements.length; i++){
		Elements[i].innerHTML = 'text';
	}
}

var block = document.getElementsByTagName('div');
console.log(block);
var google = document.getElementById('some-block');

function display(){
	google.style.display= 'none';
}