const articlePrice=document.querySelector('#in1');
const discount=document.querySelector('#in2');
const button=document.querySelector('.button-id');
const ans1=document.querySelector('#val1');
const ans2=document.querySelector('#val2');
const advert=document.querySelector('#advert');
const explanation=document.querySelector('#explanation');
const warning=document.querySelector('.adevert-container');

button.addEventListener('click',sendData);

function sendData(){
    let price=articlePrice.value;
    let descuento=discount.value;
    if((!isNaN(price))&&descuento<100&&price>0&&descuento>0){
    let finalAnswer2=(price*(100-descuento))/100;
    let finalAnswer1=price-finalAnswer2;
    ans2.innerHTML = '$'+finalAnswer2;
    ans1.innerHTML='$'+finalAnswer1;
    }else{
    warning.classList.remove('inactive');
    advert.innerHTML = 'VALORES INGRESADOS NO VÁLIDOS';
    explanation.innerHTML='Debes ingresar un numero mayor a 0 en el precio, y un número mayor a cero y menor a 99 en el descuento. Actualiza la página e inténtalo de nuevo';
    }
    
}
