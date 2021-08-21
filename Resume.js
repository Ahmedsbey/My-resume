function openNavbar() {
    document.getElementById('Navbar').classList.toggle('openNavbar');
    document.getElementById('arrow').classList.toggle('closebtn');
}
function transparent() {
    document.querySelector('.openNavbar').style.background = "rgb(228 224 218 / 47%)";
    document.querySelector('.openNavbar').style.backdropFilter = "blur(10px)";
}

function forScroll(){
    window.scrollTo(0,0);
}
// upper scroll button 
window.onscroll = function(){
var html =  document.documentElement;
var scrolltop = html.scrollTop;
var height = html.scrollHeight - html.clientHeight;
var unit = (scrolltop/height)*100;
console.log(unit);
document.querySelector('#scrollbar').style.width = unit + "%";

if(unit <= 51.17876468274297){
    document.querySelector('.scrollto').style.opacity = 0;
}else if(unit >= 51.17876468274297 && unit <=  99.99033585442847){
    document.querySelector('.scrollto').style.opacity = 1;
}else if(unit >= 99.99033585442847) {
    document.querySelector('.scrollto').style.opacity = 0;
}
}



