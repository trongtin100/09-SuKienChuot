let hinhAnh=null;
hinhAnh = document.getElementById("hinhTin");

function init(){
    hinhAnh = document.getElementById("hinhTin");
    hinhAnh.style.position="relative";
    hinhAnh.style.left = "0px";
}
function moveRight(){
    hinhAnh.style.left = parseInt(hinhAnh.style.left) +10 +'px';

}
window.onload = init()