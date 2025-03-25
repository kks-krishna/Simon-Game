    let gameSeq=[];
let userSeq=[];
let list=[];
let NameOfList=[];
let Go = document.querySelector(".Str")

let nam = prompt("Enter Player Name")
let Restart = document.querySelector("#resrt")


let Nh = document.querySelector("#name")

let Ncolor = ["orange","blue","purple","green"];   //--------> Color Change for Name 
let Rindx = Math.floor(Math.random()*3)
let RndColor = Ncolor[Rindx]
let clr = document.querySelector("#rmv")
clr.style.display = "none"


let hs = 0;
let Rsc = 0;
let h3 = document.querySelector("h3");



let h2 =document.querySelector("h2");
let body = document.querySelector("body")


let started = false;
let level = 0

Go.addEventListener("click", function() {
    if(started== false) {  //-------- >Starting Game by Pressing Any Key
        started = true; 
        Nh.innerText=`${nam} is Playing`
        Nh.style.fontWeight="bolder"
        Nh.style.color = `${RndColor}`

        levelUp();  
    }
})
// ---------------------------------------------------------------

function GameFlash(bt){
    bt.classList.add("flash");      // ----------> Flash Animation By Key Press
    setTimeout(function () {
        bt.classList.remove("flash")
    },270)
}

function userFlash(bt){
    bt.classList.add("userflash");
    setTimeout(function () {               // ---------> Flash Animation By Mouse Click 
        bt.classList.remove("userflash")
    },100)
}


// --------------------------------------


function levelUp(){
    userSeq=[];
    level++;
    // h2.innerText=`Level ${level}`
 let btns = ["yellow","red","purple","green"];   //--------> Flash Animation by Pressing Any Key.
 let Rindx = Math.floor(Math.random()*3)
 let RndColor = btns[Rindx]
 gameSeq.push(RndColor)
 console.log(` Game ->${gameSeq}`)
 let Rndbtn = document.querySelector(`.${RndColor}`)
 GameFlash(Rndbtn);
}


// --------------------------------------------------------------------

function checkAns(idx) {

    if(gameSeq[idx]==userSeq[idx]) {
        if(gameSeq.length==userSeq.length){       //------------------> Matching Game Sequence With User Sequence
            setTimeout(levelUp,500)

        }
    }
    else {
        h2.innerHTML=`Game Over ! <b>Your score Was  <b>${level}</b>  <br> Press any key to start`
        docFlash(body);
        if(level > hs ) {
            hs = level 
            Restart.addEventListener("click",()=> {
            setTimeout(()=> {
                NameOfList.push(nam)
                nam = prompt("Firse Daaal Naaam")
                },200)
                Nh.innerText=`${nam} is Playing`
                list.push(level)

            })
           
            Nh.innerText=`${nam} is Playing`
            list.push(level)
            Hbtn.addEventListener("click" , ()=> {
                clr.style.display = ""
                Hsc.innerHTML= `${hs}`
            })
        }
        else if (hs > level) {
            Restart.addEventListener("click",()=> {
                setTimeout(()=> {
                    NameOfList.push(nam)
                    nam = prompt("Firse Daaal Naaam")
                    },200)
                    Nh.innerText=`${nam} is Playing`
                    list.push(level)
    
                })
               
                
            
            Hbtn.addEventListener("click" , ()=> {
                Hsc.innerHTML=` ${hs}`
            })
        }
        reset();
        
    }

    clr.addEventListener("click", ()=> {
        Hsc.innerText=""
    })

}

let Hsc = document.querySelector("#Hsc")
let Hbtn = document.querySelector("#Hbtn")



function reset() {
    started = false;
    level = 0;
    gameSeq=[];
    userSeq=[];

   

}

function btnpress() {
   let btn = this;
   userFlash(btn)

   userColor = btn.getAttribute("id")
   userSeq.push(userColor)
   console.log(`user -> ${userSeq}`)

   checkAns(userSeq.length-1);

}

let allbtn = document.querySelectorAll(".btn")  //--------- All DIVs Are Set type to Butoon And There Class's are (.btn)
for (bt of allbtn) {                            // -----------------> Flash Animation in Div by Clicking Event
    bt.addEventListener("click", btnpress)
}

//- Red Flash 

function docFlash(bt) {
    bt.classList.add("docFlash");
    setTimeout(function () {                 //--------> Flash Due to Wrong Answer.
        bt.classList.remove("docFlash")
    },500)

}



console.log("Heloo my frnd")




