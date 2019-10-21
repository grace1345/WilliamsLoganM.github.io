let quoteIndex = 0; 
const quotesArray = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela", "The way to get started is to quit talking and begin doing. -Walt Disney", "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking. -Steve Jobs", "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt", "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey"];

window.onload = function()
    {   
    const quotePara = document.getElementById("quote-para");
    quotePara.innerHTML = quotesArray[0];
    this.setInterval(advanceQuote, 2000);

    const lotteryButton = document.getElementById("did-you-win");
    lotteryButton.onclick = this.lotteryIt;
}

function advanceQuote()
{
    quoteIndex++;
    if(quoteIndex >= quotesArray.length)
    {
        quoteIndex = 0;
    }
    const quotePara = document.getElementById("quote-para");
    quotePara.innerHTML = quotesArray[quoteIndex];
}

function lotteryIt()
{
    let inputNumbers = document.getElementsByClassName("number-input");
    let inputNumberArray = [];
    for(let x = 0; x < inputNumbers.length; x++){
        inputNumberArray.push(inputNumbers[x].value);
    }

    let randomCompNumbers = [];
    for(let x = 0; x < inputNumbers.length; x++)
    {
        randomCompNumbers.push(Math.round(Math.random() * 10));
    }

    const randomPara = document.getElementById("lottery-sentence");
    randomPara.innerHTML = randomCompNumbers

    let spanArray = document.getElementsByClassName("num-span");

    for(let x = 0; x < inputNumberArray.length; x++){
        if(inputNumberArray[x] == randomCompNumbers[x])
            {
                spanArray[x].innerHTML = "match";
            }
        else{
            spanArray[x].innerHTML = "not a match";
        }
    }

    const resultPara = document.getElementById("result-para");

    if(inputNumberArray == randomCompNumbers)
        {
            resultPara.innerHTML = "Congratulations!";        
        }
    else
    {
        resultPara.innerHTML = "Better luck next time";
    }
}