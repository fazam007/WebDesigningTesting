// my first js program
// const person = {
//     name: 'Qari',
//     age: 25,
//     village: 'Lilownai'
// };
// person.age = 24;
// person['name'] = 'Khan';
// let selection = 'name';
// person[selection] = 'Warkaaa';
// console.log(person);

// let selectedColors = ['red','green','blue'];
// selectedColors[3] = true;
// console.log(selectedColors);

// function greeting(name, lastName) {
//     console.log('Pakhairrr ' + name + lastName);
// }

// greeting('Wazeera', ' Janaaasaaa');
// let a = prompt('Name: ');
// console.log(a);

// document.write('<hr><h2>warka dangg.</h2><hr>');
// document.getElementById('test').innerHTML = 'Warka danggg...';
// let name = prompt("What's you name: ");
// document.write(name);
// let date = Date();
// document.write(date);
// let loc = window.location;
// document.write(loc);

// alert('Incorrect information, please try again...')
// let x = 5 - 2 + 4 * 3/1 % 6;
// let x1 = 'Warka ' + 5;
// let x2 = 100;
// alert(x2);
// document.write('da wala number yi darla pa screen show ko.. '+ "'"+x2+"'");

// function welcomeMsg(msg){
//     let name = prompt('What is your name?');
//     alert('Pakhairrr '+name);
// }
// welcomeMsg('jaaan');

function setDate() {
    document.getElementById("test1").innerHTML = Date();
}


function getChange() {
    e = document.getElementById("test2").innerHTML = prompt('After clicking first Button, whats your name? ');
    
}
function getChangeTwo() {
    document.getElementById("test3").innerHTML = "<button style='color: green;'>Change to second button.</button>";
}

function openMe() {
    x  = document.getElementById('test4');
    x.className = 'open';
}
function closeMe() {
    z = document.getElementById('test4');
    z.className = 'close';
}

function showMouseOver(e) {
    document.getElementById('test5').innerHTML = e.alt;
}
function showMouseLeave(e) {
    document.getElementById('test5').innerHTML = 'Hover over an image.';
}

//Assignment Work
function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src +"')";

    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
//Assignment Work finishes

function getElemnt(){
    let imgs = document.getElementsByTagName('img');
    document.write(imgs);
}
let colorss = ['red', 'green', 'blue'];
function loadColors(){
    document.getElementById('colors').innerHTML = colorss;
}
function myColors(){
    let color = prompt('What is your favorite color? ');
    colorss[colorss.length] = color;
    document.getElementById('colors').innerHTML = colorss;
}

//looping
function faarLoop(){
    let arr = [10,67,,,43,,67,78,,23,,,09,,43,59]
    let sum = 0;
    let count = 0;
    if(arr.length > 0){
        for(counter = 0; counter<arr.length; counter++){
            if(arr[counter] != undefined){
                sum += arr[counter];
                count = count + 1;
            }
        }
        e = document.write(sum/count);
        document.getElementById('tst7').innerHTML = "Avg is: " + e;
    }
}

function showww(){
    let val = prompt("What's your good name? ");
    if(val.length != 0){
        document.getElementById("tst6").innerHTML = "Pakhairrr " + val;
    }
    else
        document.write('R U compuzed, cuz u didnt typed anything?')
}

//nested conditions
function nestedMahool(){
    let naam = prompt("What is your favorite color? ");
    if (naam.length != 0) {
        if(naam == 'Kwach Khan'){
            document.getElementById('tst8').innerHTML = 'Nice choice';
        }
        else
            document.getElementById('tst8').innerHTML = naam;
    }
    else
        document.getElementById('tst8').innerHTML = "R U conpuzed, cuz u didnt write anything!!!";
}

// form validation
function compare(){
    let email1 = document.getElementById('emailAdd');
    let email2 = document.getElementById('emailRepeat');
    if (email1.value != email2.value){
        alert('The two emails must match.');
        return false;
    }
}

//checkbox and things
function nickNameFucn(){
    if(document.getElementById('yesNick').checked){
        document.getElementById('nick').style.display='inline';
        document.getElementById('nickName').setAttribute('required',true);
    }
    else{
        document.getElementById('nickName').removeAttribute('required');
        document.getElementById('nick').style.display='none';
    }
}

// Assignment 2
function billingFunction(){
    if (document.getElementById('same').checked){
        document.getElementById('billingName').value = document.getElementById('shippingName').value;
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
    }
    else{
        document.getElementById('billingName').value = '';
        document.getElementById('billingZip').value = '';
    }
}