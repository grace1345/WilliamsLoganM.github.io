'using strict'

window.onload = function(){
    const ageCompareButton = document.getElementById("compare-ages");
    ageCompareButton.onclick = findOldest;

    const displayHelloButton = document.getElementById("display-hello");
    displayHelloButton.onclick = displayIt;

    const pluralizeButton = document.getElementById("Pluralize");
    pluralizeButton.onclick = this.pluralizeIt;
}

function findOldest() {
    let nameOne = document.getElementById("name1-input").value;
    let nameTwo = document.getElementById("name2-input").value;
    let nameThree = document.getElementById("name3-input").value;
    let ageOne = document.getElementById("age1-input").value;
    let ageTwo = document.getElementById("age2-input").value;
    let ageThree = document.getElementById("age3-input").value;
    const compareAgesSentence = document.getElementById("compare-ages-sentence")

    if(ageOne >= ageTwo && ageOne >= ageThree){
        if(ageTwo >= ageThree){
            compareAgesSentence.innerHTML = `Oldest to youngest: ${nameOne}, ${nameTwo}, ${nameThree}`
        }
        else{
            compareAgesSentence.innerHTML = `Oldest to youngest: ${nameOne}, ${nameThree}, ${nameTwo}`
        }
    }

    else if(ageTwo > ageOne && ageTwo >= ageThree){
        if(ageOne >= ageThree){
            compareAgesSentence.innerHTML = `Oldest to youngest: ${nameTwo}, ${nameOne}, ${nameThree}`
        }
        else{
            compareAgesSentence.innerHTML = `Oldest to youngest: ${nameTwo}, ${nameThree}, ${nameOne}`
        }
    }

    else if(ageThree > ageOne && ageThree > ageTwo)
        {
            if(ageOne > ageTwo)
            {
                compareAgesSentence.innerHTML = `Oldest to youngest: ${nameThree}, ${nameOne}, ${nameTwo}`
            }
            else {
                compareAgesSentence.innerHTML = `Oldest to youngest: ${nameThree}, ${nameTwo}, ${nameOne}`
            }
        }
}

function displayIt(){

    let languageChoice = document.getElementById("language-selection").value;
    const languageDisplaySentence = document.getElementById("display-hello-sentence");
    
    if(languageChoice == "Spanish")
    {
        languageDisplaySentence.innerHTML = "Hola Mundo!"
    }
    else if(languageChoice == "German")
    {
        languageDisplaySentence.innerHTML = "Hallo Welt!"
    }
    else if(languageChoice == "Japanese")
    {
        languageDisplaySentence.innerHTML = "こんにちは世界"
    }
    else if(languageChoice == "Croatian")
    {
        languageDisplaySentence.innerHTML = "Pozdrav svijete"
    }
    else {
        languageDisplaySentence.innerHTML = "Unsupported Language!"
    }
}

function pluralizeIt()
{
    let numOfItems = document.getElementById("num-items-input").value;
    const pluralSentence = document.getElementById("pluralized-sentence");
    let nameOfItems = document.getElementById("item-name-input").value;

    if(numOfItems > 1 || numOfItems == 0){
        pluralSentence.innerHTML = `You ordered ${numOfItems} ${nameOfItems}s`
    }
    else if(numOfItems == 1)
    {
        pluralSentence.innerHTML = `You ordered ${numOfItems} ${nameOfItems}`
    }
    else {
        pluralSentence.innerHTML = "You can't pluralize a negative number of items!"
    }
}

