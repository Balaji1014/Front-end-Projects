let imgFront = document.getElementById('img-front');
let inputFront = document.getElementById('input-front');

inputFront.onchange = (e) => {

    if(inputFront.files[0])
    imgFront.src = URL.createObjectURL(inputFront.files[0]);

};

let imgBack = document.getElementById('img-back');
let inputBack = document.getElementById('input-back');

inputBack.onchange = (e) => {

    if(inputBack.files[0])
    imgBack.src = URL.createObjectURL(inputBack.files[0]);

};