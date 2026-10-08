let screen1=document.querySelector("#screen1");
let screen2=document.querySelector("#screen2");
let c1=0;
let c2=0;
let redo=document.querySelector("#reset");

function plus1(){
    c1+=1;
    screen1.textContent=c1;

}

function plus2(){
    c1+=2;
    screen1.textContent=c1;
}

function plus3(){
    c1+=3;
    screen1.textContent=c1;
}

function plus4(){
    c2+=1;
    screen2.textContent=c2;

}

function plus5(){
    c2+=2;
    screen2.textContent=c2;
}

function plus6(){
    c2+=3;
    screen2.textContent=c2;
}

function reset(){
    c1=0;
    c2=0;
    screen1.textContent=0;
    screen2.textContent=0;
}
