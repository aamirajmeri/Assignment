const ElinputText = document.querySelector(".txtInput");
const ElbtnSave = document.querySelector(".btnSave");
const ElenterValue = document.querySelector(".enterValue");
const ElCounter = document.querySelector(".counter");
const ElbtnAdd  = document.querySelector("#btnAdd");
const ElbtnSub  = document.querySelector("#btnSub");
const Elprogressbar = document.querySelector(".progress-bar");
const Elbtnreset = document.querySelector("#btnReset");

let userInput = 0;
function updateProgressbar(){
    let progressPercent = userInput / 150 * 100;
    console.log(progressPercent);
    // Elprogressbar.setAttribute("width","10%");
    Elprogressbar.style.width=progressPercent + "%";
}

ElbtnSave.addEventListener("click",()=>{
    if(ElinputText.value >= 0 && ElinputText.value <= 150){

        userInput = ElinputText.value;
        ElenterValue.innerHTML = userInput;
        ElCounter.innerHTML = userInput;
        updateProgressbar();
    }else{
        alert("please enter a number between 0 - 150");
    }
});

ElbtnAdd.addEventListener("click",()=>{
    userInput++;
    if(userInput >= 0 && userInput <= 150 )
        {
            ElCounter.innerHTML = userInput;
            updateProgressbar();

        }
        else{
            alert("Number is out of range !")
        }
});

ElbtnSub.addEventListener("click",()=>{

userInput--;
if(userInput >= 0 && userInput <= 150 ){
    
    ElCounter.innerHTML = userInput;
    updateProgressbar();
}else{
    alert("Number is out of range !!");
}

});

Elbtnreset.addEventListener("click",()=>{
    ElinputText.value = "";
    userInput = 0;
    ElenterValue.innerHTML = 0;
    ElCounter.innerHTML = 0;
    updateProgressbar(); 
})