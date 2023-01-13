function hiddenToggle(){
    document.querySelector(".container1").classList.toggle("hidden");
    document.querySelector(".container2").classList.toggle("hidden");
    document.querySelector(".rate").innerText = `You selected ${rateChosen} out of 5`;
}

document.querySelector(".submit-btn").addEventListener("click", hiddenToggle);


let rateChosen = 0
document.querySelectorAll(".ratebtn").forEach(rating => rating.addEventListener("click",function(){
    rating.classList.toggle("selected");
    rateChosen = rating.innerText;
}))

