const articlePrice=document.querySelector('#in1');
const discount=document.querySelector('#in2');
const button=document.querySelector('.button-id');
const ans1=document.querySelector('#val1');
const ans2=document.querySelector('#val2');

button.addEventListener('click',sendData);

function sendData(){
    let price=articlePrice.value;
    let descuento=discount.value;
    let finalAnswer2=(price*(100-descuento))/100;
    let finalAnswer1=price-finalAnswer2;
    ans2.innerHTML = '$'+finalAnswer2;
    ans1.innerHTML='$'+finalAnswer1;
}
