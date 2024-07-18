const dice = document.getElementById("btn");
const val = document.getElementById("lab");

let rndm;

dice.onclick = function () {
    rndm = Math.floor(Math.random () * 6) + 1;
    val.textContent = rndm;
}
