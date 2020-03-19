const getTextBtnElement = document.getElementById("getCurrentTimes");

getTextBtnElement.addEventListener("click", getTimes);

function getTimes(){
    fetch('https://api.myjson.com/bins/1dgp04')
    .then((res) => res.json())
    .then((data) => {
        let output = 'Tiderne herunder er tilgængelige';
        data.forEach(function(bins){
            output+= `
<ul class="list-group mb-3">
<li class="list-group-item">Kl: ${bins.Time}</li>
</ul>
`;
        })
        document.getElementById("output").innerHTML = output;
    })
}