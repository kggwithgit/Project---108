//https://teachablemachine.withgoogle.com/models/5JZQ2mW2C/

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassification('https://teachablemachine.withgoogle.com/models/5JZQ2mW2C/',modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function gotResults(error, results) {
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("animal_voices").innerHTML = 'Detected voice is of  - '+ results[0].label;
        document.getElementById("detucted").innerHTML = 'Detected dog - '+dog+ ' Detected cat - '+cat+' Detucted lion - '+lion+' Detucted cow - '+cow;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("detucted").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById("animal_images");

        if(result[0].label == "barking") {
            img.src = 'Dogbarking.gif';
            dog = dog+1;
        }
        else if(result[0].label == "meowing") {
            img.src = 'Catmeowing.gif';
            cat = cat+1;
        }
        else if(result[0].label == "roaring") {
            img.src = 'Lionroaring.gif';
            lion = lion+1;
        }
        else if(result[0].label == "mooing") {
            img.src = 'Cowmooing.gif';
            cow = cow+1
        }
        else {
            img.src = 'https://shravaripatil.github.io/Sound_controlled_animals/listen.gif';
        }
    } 
}