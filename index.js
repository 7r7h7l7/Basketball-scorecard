let homeScore = 0;
let guestScore = 0;
function addValue(value, team) {
    if(team === 2){
        homeScore += value;
        document.getElementById("guestScore").innerText = homeScore;
    }else {
        guestScore += value;
        document.getElementById("homeScore").innerText = guestScore;
    }  
}