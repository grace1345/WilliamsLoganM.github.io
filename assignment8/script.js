'using strict'

window.onload = function(){
    const getAsciiButton = document.getElementById("get-ascii");
    getAsciiButton.onclick = getAscii;

    const sumEvenButton = document.getElementById("sum-of-even-button");
    sumEvenButton.onclick = sumOfEvens;
}

function getAscii() {
    const inputString = document.getElementById("word-input").value;
    const asciiSentence = document.getElementById("get-ascii-sentence"); 

    asciiSentence.innerHTML = `${inputString.charCodeAt(0)}`;
    
    for(var i = 1; i < inputString.length; i++)
    {
        let sentenceStart = asciiSentence.innerHTML;
        
        asciiSentence.innerHTML = `${sentenceStart}, ${inputString.charCodeAt(i)}`;
    }
}

function sumOfEvens()
{
    const inputNumber = document.getElementById("input-number").value;
    let total = 0;
    const sumOfEvenSentence = document.getElementById("sum-of-even-display");

    for(var i = 0; i <= inputNumber; i++)
    {
        if(i%2 == 0)
        {
            total += i;
            console.log(total);
        }
    }

    sumOfEvenSentence.innerHTML = `${total}`;
    console.log(total);
}