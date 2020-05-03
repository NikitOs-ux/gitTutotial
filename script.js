//function fun1(){
//	var chek;
//chek = document.getElementById('one');
//
//if(chek.checked){
//	alert('Yes');
//}
//else
//	{
//		alert('No');
//	}
//}
function fun1(){
	var rad=document.getElementsByName('r1');
	for(var i=0; i < rad.length; i++){
		if (rad[i].checked){
			alert('Выбран '+i+' элемент');
		}
	}  
}