const getCurrentTimes = document.querySelector("knap");

getCurrentTimes.addEventListener("click", knap);

function knap(){
    fetch('https://api.myjson.com/bins/1dgp04')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2 class="display-4 mb-4>bins</h2>';
        data.forEach(function(tider){
            output+= `
<ul class="list-group mb-3">
<li class="list-group-item">Tid: ${tider.Time}</li>
</ul>
`;
        })
        document.getElementById("output").innerHTML = output;
    })
}