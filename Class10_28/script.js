async function displayShoe()
{
    let response = await fetch("https://williamsloganm.github.io/Class10_28/shoe.json");
    console.log(response);
    let shoeJson = await response.json();

    let shoeName = shoeJson.name;
    let shoeBrand = shoeJson.brand;

    console.log(shoeName + " by " + shoeBrand);

    for(i in comments)
    {
        console.log(comments[i]);
    }
}

window.onload = function()
{
    this.displayShoe();
}