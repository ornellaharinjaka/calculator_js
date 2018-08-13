var number = document.getElementsByClassName('buttons');
var input = document.getElementById('input');

//add event to number
for (var i = 0; i < number.length ; i++){
    number[i].addEventListener('click', addNumber);
}

//function addNumber
function addNumber(e){

    if(e.target.dataset.value == "C")
    {
        input.innerHTML  = "";

    }else if(e.target.dataset.value == "=")
    {
        input.innerHTML = eval(input.innerHTML).toFixed(2);

    }
    else{
        input.innerHTML = input.innerHTML.concat((e.target.dataset.value));
    }
    
}

//function boolen
/*function isInfinite(eval(input.innerHTML)){
    return value === value / 0;
}*/

/*.inerhtml = isInfinite(eval(.......)) ? 'divbyzero' : eval(...);*/