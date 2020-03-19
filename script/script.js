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
}