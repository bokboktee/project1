let maintext = document.querySelector("h1")

window.addEventListener('scroll',function()
{
    let value = window.scrollY;
    console.log("scrollY", value);

    if(value>550){
        maintext.style.animation ="back 1s ease-out forwards";
    }
    else{
        maintext.style.animation='slide 1s ease-out';
    }
})

let secondtext = document.querySelector(".콜린텍스트")

window.addEventListener('scroll',function()
{
    let value = window.scrollY;
    console.log("scrollY", value);

    if(value>950){
        secondtext.style.animation ="back 1s ease-out forwards";
    }
    else{
        secondtext.style.animation='slide 1s ease-out';
    }
})


