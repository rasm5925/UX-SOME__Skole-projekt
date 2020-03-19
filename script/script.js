const getTextBtnElement = document.getElementById("getCurrentTimes");

getTextBtnElement.addEventListener("click", getCurrentTimes);

function getCurrentTimes(){
    fetch('https://api.myjson.com/bins/1dgp04')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2 class="display-4 mb-4>bins</h2>';
        data.forEach(function(user){
            output+= `
<ul class="list-group mb-3">
<li class="list-group-item">Tid: ${bins.Time}</li>
</ul>
`;
        })
        document.getElementById("output").innerHTML = output;
    })
}