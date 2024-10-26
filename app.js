let gameSeq = [];
let userSeq = [];
let started = false;
let level=0;
let h2=document.querySelector("h2");
let Heighest_Score =0; 
let h3=document.querySelector("h3");

let btns=["yellow", "red", "green", "purple"];
//step 1
document.addEventListener("keypress", function(){
    console.log("game started");
    if(started==false){
        started=true;
        levelUp();
    }
});
//step2 
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //generate random color
    let randIdx= Math.floor(Math.random()*3);
    let randcolor= btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(randbtn);

}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
//step 3

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        Heighest_Score= Math.max(Heighest_Score,level);
        h3.innerText = `Heighest Score is : ${Heighest_Score}`
        h2.innerHTML= `Game over! Your Score was <b>${level}</b>  <br> Press any key to Start the game `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 100)
        reset();
    }
}
function btnPress(){
    //console.log("Button was Pressed");
    let btn = this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    console.log(`user sequence is : ${userSeq}`);

    checkAns(userSeq.length-1);

}
let allbtns= document.querySelectorAll(".btn")
    for(btn of allbtns){
        btn.addEventListener("click", btnPress);
    }

