const start = document.querySelector("#start");
const result = document.querySelector("#result");

function startLotto() {
    const lottoNumbers = [];
    while(lottoNumbers.length < 6){
    const lottoNumber = Math.floor(Math.random()*45)+1;
    if(!lottoNumbers.includes(lottoNumber)) {
        lottoNumbers.push(lottoNumber);
        };
    };
    lottoNumbers.sort(function(a, b){return a-b});

    result.innerHTML = lottoNumbers.join(",");
};

start.addEventListener("click", startLotto);