let knap1 = document.querySelector(".pil-nede");

let lukkeknap1 = document.querySelector(".pil-luk")

let box1 = document.querySelector(".kategori-su-1");

let test = 1

const mellemrum12 = document.getElementById("kategori2");

const svarnr1 = document.getElementById("svar-1");

knap1.addEventListener("click", function(){
    box1.classList.toggle("transform-active")
    if(test == 1){
        knap1.style.display="none";
        lukkeknap1.style.display="block";
        mellemrum12.style.marginTop="30%";
        svarnr1.style.display="block";
    }
});

lukkeknap1.addEventListener("click", function(){
    box1.classList.toggle("transform-active")
    if(test == 1){
        knap1.style.display="block";
        lukkeknap1.style.display="none";
        mellemrum12.style.marginTop="3%";
        svarnr1.style.display="none";
    }
});
