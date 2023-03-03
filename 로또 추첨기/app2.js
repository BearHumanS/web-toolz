const start = document.querySelector("#start");
const result = document.querySelector("#result");

function startLotto() {
  const lottoNumbers = [];
  for (i=0; i<6; i++) {
    const lottoNumber = Math.floor(Math.random() * 45) + 1;
    i = lottoNumbers.length;
    if (!lottoNumbers.includes(lottoNumber)) {
      lottoNumbers.push(lottoNumber);
    }
  }

  lottoNumbers.sort(function (a, b) {
    return a - b;
  });

  result.innerHTML = lottoNumbers;
}

start.addEventListener("click", startLotto);
