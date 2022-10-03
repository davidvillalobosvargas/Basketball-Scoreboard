let intervalTimer
function timer() {
    let minute = 13;
    let sec = 59;
    intervalTimer=setInterval(function() {
      document.getElementById("timer").innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 00) {
        minute --;
        sec = 59;
        if (minute == 0) {
          minute = 13;
        }
      }
    }, 1000);
}
window.onload = timer()

let periodCount=1
let periodEl=document.getElementById('period-el')
let guestScore=0
let h2GuestScore = document.getElementById('guestscore') 
let homeScore=0
let h2HomeScore = document.getElementById('homescore') 

function calculateWinner(){
    if(guestScore>homeScore){
        h2GuestScore.style.backgroundColor='green'
        h2HomeScore.style.backgroundColor='black'
    }
    else if(homeScore>guestScore){
        h2HomeScore.style.backgroundColor='green'
        h2GuestScore.style.backgroundColor='black'
    }
    else{
        h2HomeScore.style.backgroundColor='black'
        h2GuestScore.style.backgroundColor='black'
    }
}

function guestplus1(){
    guestScore+=1
    h2GuestScore.textContent=guestScore
    console.log('yo')
    calculateWinner()
}
function guestplus2(){
    guestScore+=2
    h2GuestScore.textContent=guestScore
    console.log('yo')
    calculateWinner()
}
function guestplus3(){
    guestScore+=3
    h2GuestScore.textContent=guestScore
    console.log('yo')
    calculateWinner()
}

function homeplus1(){
    homeScore+=1
    h2HomeScore.textContent=homeScore
    console.log('yo')
    calculateWinner()
}
function homeplus2(){
    homeScore+=2
    h2HomeScore.textContent=homeScore
    console.log('yo')
    calculateWinner()
}
function homeplus3(){
    homeScore+=3
    h2HomeScore.textContent=homeScore
    console.log('yo')
    calculateWinner()
}

function periodplus(){
    periodCount+=1
    periodEl.textContent=periodCount
}

function reset(){
    periodCount=1
    periodEl.textContent=periodCount
    homeScore=0
    h2HomeScore.textContent=homeScore
    guestScore=0
    h2GuestScore.textContent=guestScore
    calculateWinner()
    clearInterval(intervalTimer)
    timer()
}