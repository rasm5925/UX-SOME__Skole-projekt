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
        mellemrum12.style.marginTop="60%";
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


let knap2 = document.querySelector(".pil-nede2");

let lukkeknap2 = document.querySelector(".pil-luk2")

let box2 = document.querySelector(".kategori-su-2");

const mellemrum23 = document.getElementById("kategori3");

const svarnr2 = document.getElementById("svar-2");


knap2.addEventListener("click", function(){
    box2.classList.toggle("transform-active")
    if(test == 1){
        knap2.style.display="none";
        lukkeknap2.style.display="block";
        mellemrum23.style.marginTop="30%";
        svarnr2.style.display="block";
        
    }
});

lukkeknap2.addEventListener("click", function(){
    box2.classList.toggle("transform-active")
    if(test == 1){
        knap2.style.display="block";
        lukkeknap2.style.display="none";
        mellemrum23.style.marginTop="3%";
        svarnr2.style.display="none";
    }
});

let knap3 = document.querySelector(".pil-nede3");

let lukkeknap3 = document.querySelector(".pil-luk3")

let box3 = document.querySelector(".kategori-su-3");

const mellemrum34 = document.getElementById("kategori4");

const svarnr3 = document.getElementById("svar-3");


knap3.addEventListener("click", function(){
    box3.classList.toggle("transform-active")
    if(test == 1){
        knap3.style.display="none";
        lukkeknap3.style.display="block";
        mellemrum34.style.marginTop="30%";
        svarnr3.style.display="block";
        
    }
});

lukkeknap3.addEventListener("click", function(){
    box3.classList.toggle("transform-active")
    if(test == 1){
        knap3.style.display="block";
        lukkeknap3.style.display="none";
        mellemrum34.style.marginTop="3%";
        svarnr3.style.display="none";
    }
});



let knap4 = document.querySelector(".pil-nede4");

let lukkeknap4 = document.querySelector(".pil-luk4")

let box4 = document.querySelector(".kategori-su-4");

const mellemrum45 = document.getElementById("kategori5");

const svarnr4 = document.getElementById("svar-4");


knap4.addEventListener("click", function(){
    box4.classList.toggle("transform-active")
    if(test == 1){
        knap4.style.display="none";
        lukkeknap4.style.display="block";
        mellemrum45.style.marginTop="30%";
        svarnr4.style.display="block";
        
    }
});

lukkeknap4.addEventListener("click", function(){
    box4.classList.toggle("transform-active")
    if(test == 1){
        knap4.style.display="block";
        lukkeknap4.style.display="none";
        mellemrum45.style.marginTop="3%";
        svarnr4.style.display="none";
    }
});



let knap5 = document.querySelector(".pil-nede5");

let lukkeknap5 = document.querySelector(".pil-luk5")

let box5 = document.querySelector(".kategori-su-5");

const mellemrum56 = document.getElementById("kategori6");

const svarnr5 = document.getElementById("svar-5");


knap5.addEventListener("click", function(){
    box5.classList.toggle("transform-active")
    if(test == 1){
        knap5.style.display="none";
        lukkeknap5.style.display="block";
        mellemrum56.style.marginTop="30%";
        svarnr5.style.display="block";
        
    }
});

lukkeknap5.addEventListener("click", function(){
    box5.classList.toggle("transform-active")
    if(test == 1){
        knap5.style.display="block";
        lukkeknap5.style.display="none";
        mellemrum56.style.marginTop="3%";
        svarnr5.style.display="none";
    }
});



let knap6 = document.querySelector(".pil-nede6");

let lukkeknap6 = document.querySelector(".pil-luk6")

let box6 = document.querySelector(".kategori-su-6");

const svarnr6 = document.getElementById("svar-6");


knap6.addEventListener("click", function(){
    box6.classList.toggle("transform-active")
    if(test == 1){
        knap6.style.display="none";
        lukkeknap6.style.display="block";
        mellemrum56.style.marginBottom="30%";
        svarnr6.style.display="block";
        
    }
});

lukkeknap6.addEventListener("click", function(){
    box6.classList.toggle("transform-active")
    if(test == 1){
        knap6.style.display="block";
        lukkeknap6.style.display="none";
        mellemrum56.style.marginBottom="3%";
        svarnr6.style.display="none";
    }
});
