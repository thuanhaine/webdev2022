const today = new Date();
let day = today.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const prepand = (hour > 12)? "PM" : "AM";

document.getElementsByClassName('boxTime')[0].innerHTML = `
<p class = "boxTime__today">Today is: ${dayList[today.getDay()]}</p>
<p class = "boxTime__time">Current time is: ${hour} ${prepand} : ${minute} : ${second}</p>
`;

function getValueCopy() {
    var valueInput = document.getElementById("inputLab1");
    
    valueInput.select();
    navigator.clipboard.writeText(valueInput.value);
    alert("Copied the text: " + valueInput.value);
}