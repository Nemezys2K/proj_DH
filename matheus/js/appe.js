const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel(){
    idx++;

    if(idx > img.length -1){
        idx = 0;
    }
    img.style.transform = `translateX(${-idx * 100}vw)`;
}

setInterval(carrosel, 1800);