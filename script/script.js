const getTextBtnElement = document.getElementById("getCurrentTimes");

getTextBtnElement.addEventListener("click", getTimes);

function getTimes(){
    fetch('https://api.myjson.com/bins/1dgp04')
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        data.forEach(function(bins){
            output+= `

<section class="tidspunk-flex">
    <section class="tidspunkt-p"><p class="tidspunkt-p-klok">${bins.Time}</p></section>
    </section>

`;
        })
        document.getElementById("output").innerHTML = output;
    })
};


const datoen16 = document.getElementById("dato-16");

const datoen17 = document.getElementById("dato-17");

const datoen18 = document.getElementById("dato-18");

const datoen19 = document.getElementById("dato-19");

let test = 1

datoen16.addEventListener("click", function(){
    if(test == 1){
        datoen16.style.backgroundColor="rgba(255,255,255,0.2)";
        datoen17.style.backgroundColor="rgba(255,255,255,0)";
        datoen18.style.backgroundColor="rgba(255,255,255,0)";
        datoen19.style.backgroundColor="rgba(255,255,255,0)";
        
    }
    
});

datoen17.addEventListener("click", function(){
    if(test == 1){
        datoen17.style.backgroundColor="rgba(255,255,255,0.2)";
        datoen16.style.backgroundColor="rgba(255,255,255,0)";
        datoen18.style.backgroundColor="rgba(255,255,255,0)";
        datoen19.style.backgroundColor="rgba(255,255,255,0)";
        
    }
    
});

datoen18.addEventListener("click", function(){
    if(test == 1){
        datoen18.style.backgroundColor="rgba(255,255,255,0.2)";
        datoen19.style.backgroundColor="rgba(255,255,255,0)";
        datoen16.style.backgroundColor="rgba(255,255,255,0)";
        datoen17.style.backgroundColor="rgba(255,255,255,0)";
        
    }
    
});

datoen19.addEventListener("click", function(){
    if(test == 1){
        datoen19.style.backgroundColor="rgba(255,255,255,0.2)";
        datoen16.style.backgroundColor="rgba(255,255,255,0)";
        datoen17.style.backgroundColor="rgba(255,255,255,0)";
        datoen18.style.backgroundColor="rgba(255,255,255,0)";
        
    }
    
});