const redCircleOne = document.querySelector('.red-circle1');
const redCircleTwo = document.querySelector('.red-circle2');
const redCircleThree = document.querySelector('.clot');
const redCircleFour = document.querySelector(".red-circle4");
const btnPara =   document.querySelector('.btn-para');
const btnText = document.querySelector(".btn-text");

redCircleOne.addEventListener('click', function() {
    redCircleOne.style.backgroundColor = "#00A1FB";
    redCircleOne.innerText = "Bypass using Saphenous vein";
});
redCircleTwo.addEventListener('click', function() {
    redCircleTwo.style.backgroundColor = "#00A1FB";
    redCircleTwo.innerText = "Bypass using Internal Mammary Artery";
});
redCircleThree.addEventListener('click', function() {
    redCircleThree.classList.remove("red-circle3");
    redCircleThree.innerHTML = `<div class="blockage-container">
    <img src="./images/Blockage.svg" class="blockage">
    <p class="blockage-text">Blockage</p>
    </div>
    `
});

btnPara.addEventListener('click', function() {
    btnText.style.display = "block";
    btnText.textContent = `During your Coronary Artery Bypass Surgery (CABG) the doctor takes a vein from your leg and an artery from your chext wall or arm. These are used to bypass the narrowed area in your coronary arteries (see picture opposite). This improves the oxygen supply to the heart muscle. Your body can still work without the arteries and veins that are used by the surgeon for your bypass. `;
    btnPara.style.display = "none";
    redCircleFour.classList.add("rota");
    redCircleFour.classList.remove("cir");
});
 redCircleFour.addEventListener('click', function() {


if (!redCircleFour.classList.contains("rota")) {
    
            btnText.style.display = "block";
            btnText.textContent = `During your Coronary Artery Bypass Surgery (CABG) the doctor takes a vein from your leg and an artery from your chext wall or arm. These are used to bypass the narrowed area in your coronary arteries (see picture opposite). This improves the oxygen supply to the heart muscle. Your body can still work without the arteries and veins that are used by the surgeon for your bypass.`;
            btnPara.style.display = "none";
            redCircleFour.classList.add("rota");
            console.log("hi");
       
} else {
   
        btnText.style.display = "none";
        btnText.textContent = "";
        btnPara.style.display = "block";
        redCircleFour.classList.remove("rota");
        console.log("you");
    }
})