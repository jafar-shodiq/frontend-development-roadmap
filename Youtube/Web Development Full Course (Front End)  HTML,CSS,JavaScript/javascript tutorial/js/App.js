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