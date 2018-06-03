var but=document.querySelector("button");
//var isblue=false;
//but.addEventListener("click",function(){
//if (isblue){
//	document.body.style.background="white";
//}
//else{
//	document.body.style.background="blue";
//}
//isblue= !isblue;
//
//}
//)
but.addEventListener("click",function(){
	document.body.classList.toggle("hello");
})
