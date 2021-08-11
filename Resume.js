// const container = document.querySelector('.background');
// for (var i = 1; i <= 50; i++) {
//     const blocks = document.createElement('div');
//     blocks.classList.add('block');
//     container.appendChild(blocks);
// }
// function generate() {
//     anime({
//         targets: '.block',
//         translateX: function () {
//             return anime.random(-700, 700)
//         },
//         translateY: function () {
//             return anime.random(-700, 700)
//         },
//         scale: function () {
//             return anime.random(1, 5)
//         }
//     })
// }
// generate()
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

window.onscroll = function(){
var html =  document.documentElement;
var scrolltop = html.scrollTop;
var height = html.scrollHeight - html.clientHeight;
var unit = (scrolltop/height)*100;
console.log(unit);
document.querySelector('#scrollbar').style.width = unit + "%";

if(unit <= 51.17876468274297){
    document.querySelector('.scrollto').style.opacity = 0;
}else {
    document.querySelector('.scrollto').style.opacity = 1;
}
}



