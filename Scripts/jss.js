function fun2() {
  alert("I am an alert box!");
}

function func(){
let inputElem=document.getElementById("input");
let pElem=document.getElementById("output");
pElem.innerHTML=inputElem.value;
}

val1="This is home"
val2="This is link"

function f1(){
document.getElementById("myDiv1").style.display = none;
}

function f2(){
document.getElementsByClassName("myDiv2")[0].style.display = 'block';
document.getElementsByClassName("myDiv1")[0].style.display = 'none';
document.getElementsByClassName("myDiv1")[0].style.color = "blue";
}

function home(){
document.getElementsByClassName("home")[0].style.display = 'block';
document.getElementsByClassName("testimonial")[0].style.display = 'none';
document.getElementsByClassName("table")[0].style.display = 'none';
document.getElementsByClassName("contact")[0].style.display = 'none';
document.getElementsByClassName("achievement")[0].style.display = 'none';
}

function about(){
document.getElementsByClassName("testimonial")[0].style.display = 'block';
document.getElementsByClassName("home")[0].style.display = 'none';
document.getElementsByClassName("table")[0].style.display = 'none';
document.getElementsByClassName("contact")[0].style.display = 'none';
document.getElementsByClassName("achievement")[0].style.display = 'none';
}

function education(){
document.getElementsByClassName("table")[0].style.display = 'block';
document.getElementsByClassName("home")[0].style.display = 'none';
document.getElementsByClassName("testimonial")[0].style.display = 'none';
document.getElementsByClassName("contact")[0].style.display = 'none';
document.getElementsByClassName("achievement")[0].style.display = 'none';
}

function achievement(){
document.getElementsByClassName("table")[0].style.display = 'none';
document.getElementsByClassName("home")[0].style.display = 'none';
document.getElementsByClassName("testimonial")[0].style.display = 'none';
document.getElementsByClassName("contact")[0].style.display = 'none';
document.getElementsByClassName("achievement")[0].style.display = 'block';
}

function contact(){
document.getElementsByClassName("table")[0].style.display = 'none';
document.getElementsByClassName("home")[0].style.display = 'none';
document.getElementsByClassName("testimonial")[0].style.display = 'none';
document.getElementsByClassName("contact")[0].style.display = 'block';
document.getElementsByClassName("achievement")[0].style.display = 'none';
}

function check1(){
document.getElementsByClassName("wrapper")[0].style.display = 'block';
document.getElementsByClassName("table")[0].style.display = 'none';
}

function check2(){
document.getElementsByClassName("table")[0].style.display = 'block';
document.getElementsByClassName("wrapper")[0].style.display = 'none';
}


function onLoad(){
getTime();
}

const getTime = () => {
    setInterval(() => {
        let date = new Date().toString().split(" ");
        let str = "";
        for(let i=0; i<date.length; i++)
            if(i!=5)
                str += date[i] + " ";
        document.getElementById('date-time').innerHTML = str;
    }, 950);
}

function func1(){
let inputElem=document.getElementById("input");
let pElem=document.getElementById("output");
pElem.innerHTML=inputElem.value;
}

function func2(){
//var s="FGGB";
let inputElem=document.getElementById("input");
document.getElementById("output").innerHTML=val2;
}

function func3()
{
document.getElementById("output").innerHTML = document.getElementById("input").value;
}

function func4()
{
document.getElementById("input").disabled= true;
}
