var number = document.getElementsByClassName('buttons');
var input = document.getElementById('input');

//add event to number
for (var i = 0; i < number.length ; i++){
    number[i].addEventListener('click', addNumber);
}

//function addNumber
function addNumber(e){

    var num = e.target.dataset.value;

    if(num == "C")
    {
        input.innerHTML  = "";

    }else if(num == "=")
    {
        input.innerHTML = Math.round(eval(input.innerHTML) * 100)/100;

    }
    else{
        input.innerHTML = input.innerHTML.concat((num));
    }
    
}

//function boolen
/*function isInfinite(eval(input.innerHTML)){
    return value === value / 0;
}*/

/*.inerhtml = isInfinite(eval(.......)) ? 'divbyzero' : eval(...);*/