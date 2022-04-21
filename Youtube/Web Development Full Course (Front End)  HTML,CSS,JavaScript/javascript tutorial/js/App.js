function message(msg) {
    document.getElementById("output").innerHTML = msg + " event";
}

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

function firstButton() {
    document.getElementById("change").innerHTML = "Clicked First Button";
}

function secondButton() {
    document.getElementById("change").innerHTML = "Clicked Second Button";
}

function openMe() {
    x = document.getElementById("openclose");
    // x.style.display = "block";
    x.className = "opened";
}

function closeMe() {
    x = document.getElementById("openclose");
    // x.style.display = "none";
    x.className = "closed";
}

function display(element) {
    console.log(element.id);
}

// POKEMON
function showProperties(element) {
    document.getElementById("message-pokemon").innerHTML = element.alt;
}

function imgMouseLeave() {
    document.getElementById("message-pokemon").innerHTML = "Hover over an image";
}

function txtBlack() {
    x = document.getElementById("message-pokemon");
    x.className = "black";
}

function txtYellow() {
    x = document.getElementById("message-pokemon");
    x.className = "yellow";
}

function txtOrange() {
    x = document.getElementById("message-pokemon");
    x.className = "orange";
}

function txtGreen() {
    x = document.getElementById("message-pokemon");
    x.className = "green";
}


// Photo Gallery Homework
function upDate(previewPic){
    // document.getElementById("image").innerHTML = "Hover over an image";
    // document.getElementById("image").style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById("image").style.backgroundColor = "#8e68ff";
    document.getElementById("image").innerHTML = previewPic.alt;
    
    
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */   
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").style.backgroundColor = "#8e68ff";
    document.getElementById("image").innerHTML = "Hover over an image below to display here."
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was

       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
           
}



// JavaScript Arrays
var fruits_init = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits() {
    document.getElementById("fruits").innerHTML = fruits_init;
}

function addFruit() {
    var fruit = prompt("What is your favorite fruit?");
    fruits_init.push(fruit);
    // fruits_init[fruits_init.length] = fruit
    document.getElementById("fruits").innerHTML = fruits_init;
}

// Iterations
var grades = [80, 56, 70, 92, 82, 84, 80, 66, 79, 81, 90];
var sum = 0;

for(i = 0; i < grades.length; i++) {
    sum += grades[i];
}

console.log(grades);
console.log("average grade (1): " + sum / grades.length);



// Iterations and Conditionals
var grades = [80, 56, , 92, 82, , , 66, 79, , 90];
// var grades = [1, 1, , 1, 1, , , 1, 1, , 1];
var sum = 0;
var count = 0;

console.log(grades);

if (grades.length > 0) {
    for (i = 0; i < grades.length; i++) {
        if (typeof grades[i] == 'number') {
            sum += grades[i];
            count += 1; 
        }
    }
    console.log("average grade (2): " + sum / count);
}
else {
    console.log("empty array");
}

