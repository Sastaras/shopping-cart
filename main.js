const appleCounter=document.getElementById('appleCounter');
const bananaCounter=document.getElementById('bananaCounter');
const cherryCounter=document.getElementById('cherryCounter');

const buttonApplePlus=document.getElementById('applePlus');
const buttonAppleMinus=document.getElementById('appleMinus');
const buttonBananaPlus=document.getElementById('bananaPlus');
const buttonBananaMinus=document.getElementById('bananaMinus');
const buttonCherryPlus=document.getElementById('cherryPlus');
const buttonCherryMinus=document.getElementById('cherryMinus');


let appleCounterValue=0;
let bananaCounterValue=0;
let cherryCounterValue=0;


const applePrice=0.97;
const bananaPrice=1.67;
const cherryPrice=9.0;

const total=document.getElementById('total');

buttonApplePlus.addEventListener('click',appleMore);
buttonAppleMinus.addEventListener('click',appleLess);

buttonBananaPlus.addEventListener('click',bananaMore);
buttonBananaMinus.addEventListener('click',bananaLess);

buttonCherryPlus.addEventListener('click',cherryMore);
buttonCherryMinus.addEventListener('click',cherryLess);

function appleMore(){
    appleCounterValue++;
    console.log(appleCounterValue);
    appleCounter.innerHTML=appleCounterValue+' articles';
    if(appleCounterValue== 1){
        appleCounter.innerHTML=appleCounterValue+' article';
    }
    else{
        appleCounter.innerHTML=appleCounterValue+' articles';  
    }
    document.getElementById("total").innerHTML=(appleCounterValue*applePrice)+(bananaCounterValue*bananaPrice)+(cherryCounterValue*cherryPrice);
}


function appleLess(){
    appleCounterValue--;
    console.log(appleCounterValue);
    if(appleCounterValue<=0){
        appleCounterValue=0 ;
        appleCounter.innerHTML=appleCounterValue+' article';
    }
    else if(appleCounterValue== 1){
        appleCounter.innerHTML=appleCounterValue+' article';
    }
    else{
        appleCounter.innerHTML=appleCounterValue+' articles';
    }
    document.getElementById("total").innerHTML=(appleCounterValue*applePrice)+(bananaCounterValue*bananaPrice)+(cherryCounterValue*cherryPrice);
}

function bananaMore(){
    bananaCounterValue++;
    console.log(bananaCounterValue);
    bananaCounter.innerHTML=bananaCounterValue+' articles';
    if(bananaCounterValue== 1){
        bananaCounter.innerHTML=bananaCounterValue+' article';
    }
    else{
        bananaCounter.innerHTML=bananaCounterValue+' articles';  
    }
    document.getElementById("total").innerHTML=(appleCounterValue*applePrice)+(bananaCounterValue*bananaPrice)+(cherryCounterValue*cherryPrice);
}


function bananaLess(){
    bananaCounterValue--;
    console.log(bananaCounterValue);
    if(bananaCounterValue<=0){
        bananaCounterValue=0 ;
        bananaCounter.innerHTML=bananaCounterValue+' article';
    }
    else if(bananaCounterValue== 1){
        bananaCounter.innerHTML=bananaCounterValue+' article';
    }
    else{
        bananaCounter.innerHTML=bananaCounterValue+' articles';
    }
    document.getElementById("total").innerHTML=(appleCounterValue*applePrice)+(bananaCounterValue*bananaPrice)+(cherryCounterValue*cherryPrice);
}

function cherryMore(){
    cherryCounterValue++;
    console.log(cherryCounterValue);
    cherryCounter.innerHTML=cherryCounterValue+' articles';
    if(cherryCounterValue== 1){
        cherryCounter.innerHTML=cherryCounterValue+' article';
    }
    else{
        cherryCounter.innerHTML=cherryCounterValue+' articles';  
    }
    document.getElementById("total").innerHTML=(appleCounterValue*applePrice)+(bananaCounterValue*bananaPrice)+(cherryCounterValue*cherryPrice);
}


function cherryLess(){
    cherryCounterValue--;
    console.log(cherryCounterValue);
    if(cherryCounterValue<=0){
        cherryCounterValue=0 ;
        cherryCounter.innerHTML=cherryCounterValue+' article';
    }
    else if(cherryCounterValue== 1){
        cherryCounter.innerHTML=cherryCounterValue+' article';
    }
    else{
        cherryCounter.innerHTML=cherryCounterValue+' articles';
    }
    document.getElementById("total").innerHTML=(appleCounterValue*applePrice)+(bananaCounterValue*bananaPrice)+(cherryCounterValue*cherryPrice);
}

