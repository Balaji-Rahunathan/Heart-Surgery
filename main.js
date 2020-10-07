const redCircleFour = document.querySelector(".red-circle4");
const btnPara =   document.querySelector('.btn-para');
const btnText = document.querySelector(".btn-text");
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
card.addEventListener('click', function(){
    card.classList.add('is-flipped');
});
card2.addEventListener('click', function(){
    card2.classList.add('is-flipped');
});
card3.addEventListener('click', function(){
    card3.classList.add('is-flipped');
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
    redCircleFour.classList.add("rota");
    redCircleFour.classList.remove("cir");
    console.log("hi");
    setTimeout(() => {
        btnText.style.display = "block";
        btnText.textContent = `During your Coronary Artery Bypass Surgery (CABG) the doctor takes a vein from your leg and an artery from your chext wall or arm. These are used to bypass the narrowed area in your coronary arteries (see picture opposite). This improves the oxygen supply to the heart muscle. Your body can still work without the arteries and veins that are used by the surgeon for your bypass.`;
        btnPara.style.display = "none";
       
    }, 0300);
           
       
 } else {
    redCircleFour.classList.remove("rota");
    redCircleFour.classList.add("cir");
    console.log("you");
    setTimeout(() => {
        btnText.style.display = "none";
        btnText.textContent = "";
        btnPara.style.display = "block";
       
    }, 0300);
       
    }
})