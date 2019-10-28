async function special()
{
    console.log("In special beginning");
    console.log(await setTimeout(doStuff, 2000));
    console.log("In special ending");
}

function doStuff()
{
    console.log("In do stuff");
}

window.onload = function()
{
    this.console.log("Before calling Special");
    this.special();
    this.console.log("After calling special");
}