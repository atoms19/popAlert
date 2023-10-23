let alertStyle=document.createElement('style')
alertStyle.innerHTML=`@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap);


div.modal-bg{
    background:rgba(0,0,0,0.7);
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    transition:0.25s;
    z-index: 400;
    display: grid;
    place-items: center;
    animation:modal-fade 0.65s;
    overflow-y:scroll;
    
}
.modal-bg[blurr]{
    backdrop-filter: blur(10px);
}
.modal-img-cont{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:1rem;
}

.modal-box{
    width: 77%;
    margin: auto;
    background: #fff;
    padding: 1rem 2rem;
    overflow: hidden;
    border-radius: 7px;
animation-duration:.65s;
     font-family:  'Roboto',  sans-serif;
     max-width:650px;
prespective:1000px;
    
}
.modal-btn,.modal-btn2,.modal-btn3{
    padding: .7rem .4rem;
    background:#696dc2;
    border: none;
    outline: 0;
    border-radius:0.25rem;
    color: #fff;
    min-width: 70px;
    margin-top:1.72rem;
    float: right;
    font-weight: 500;
    text-align:center;
    margin-left:0.5rem;  
    transition:box-shadow .3s;
    --shadeBtn:rgba(0,0,0,0.21);
    cursor:pointer;
    -webkit-tap-highligh-color:rgba(0,0,0,0.3);
}
.modal-btn2{
    background:#cc5050;
     
}
.modal-btn3{
    background:#50cc50;

    
}
.modal-btn:hover,.modal-btn2:hover,.modal-btn3:hover,.modal-btn:focus,.modal-btn2:focus,.modal-btn3:focus{
    box-shadow:0 0 0 0.2rem var(--shadeBtn);
}

.modal-box input,.modal-texta{
    width:97%;
    padding:0.5rem 0.3rem;
    margin-top:0.73rem;
    border-radius:0.25rem;
    border:2px solid #cccccc;
    outline:none;
    background:rgba(255,255,255,0.6);
    --shadeInp:rgb(0,0,0,0.1);
    transition:box-shadow 0.3s;
    font-family:  'Roboto',  sans-serif;
    backdrop-filter:blur(5px);
    
}
.modal-box input:hover,.modal-box input:focus,.modal-texta:focus,.model-texta:hover{
    box-shadow:0 0 0 0.2rem var(--shadeInp);
}




@keyframes modal-zoom{
    from {
    transform: scale(0);
    opacity: 0;
}
to {
    transform: scale(1);
    opacity: 1;
}
}@keyframes modal-zoomOut{
    to {
    transform: scale(0);
    opacity: 0;
}
from {
    transform: scale(1);
    opacity: 1;
}
}@keyframes modal-fadeOut{
    from {
    opacity: 1;
}
to {
    opacity: 0;
}
}

@keyframes modal-top{
    from{
        transform:translateY(-5000px);
    }
    to{
        transform:translateY(0px);
    }
}

@keyframes modal-topOut{
    to{
        transform:translateY(2000px);
    }
    from{
        transform:translateY(0px);
    }
}


@keyframes modal-left{
    from{
        transform:translateX(-5000px);
    }
    to{
        transform:translateX(0px);
    }
}

@keyframes modal-leftOut{
    to{
        transform:translateX(2000px);
    }
    from{
        transform:translateX(0px);
    }
}

@keyframes modal-fade{
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
}

@keyframes modal-rotate{
    from{
        transform:rotateZ(180deg) scale(0);
        opacity:0;
        
        
    }
    to{
        transform:rotateZ(360deg) scale(1);
        opacity:1;
    }
}

@keyframes modal-rotateOut{
    to{
        transform:rotateZ(180deg) scale(0);
        opacity:0;
        
    }
    from{
        transform:rotateZ(360deg) scale(1);
        opacity:1;
    }
}

@keyframes modal-shake{
  30% { transform: scale(1.2); }
  40%, 60% { transform: rotate(-20deg) scale(1.2); }
  50% { transform: rotate(20deg) scale(1.2); }
  70% { transform: rotate(0deg) scale(1.2); }
  100% { transform: scale(1); }
}
@keyframes modal-shakeOut{
30%{transform:scale(0.8);}
50%{transform:rotateX(30deg);}
}





`
document.querySelector('head').appendChild(alertStyle)




class popAlert{

constructor(obj,p2,p3){

this.delay=0
        this.bg=document.createElement("div")
        this.bg.classList.add("modal-bg")
        this.box=document.createElement("div")
        this.box.classList.add("modal-box")
if(typeof obj=='object'){        
if(obj.heading!=undefined){
        this.head=document.createElement("h1")
        this.head.textContent=obj.heading
        this.box.appendChild(this.head)
            
}
if(obj.image!=undefined){
this.imgc=document.createElement("div")
this.imgc.classList.add("modal-img-cont")
    this.img=document.createElement("img")
    this.img.classList.add("modal-img")
    if(obj.image.src!=undefined){
        this.img.src=obj.image.src
        this.imgc.appendChild(this.img)
    }
    if(obj.image.width!=undefined){
        this.img.style.width=obj.image.width
    }
    if(obj.image.height!=undefined){
        this.img.style.height=obj.image.height
    }
    
    
    
    this.box.appendChild(this.imgc)
}

if(obj.message!=undefined){
        this.txt=document.createElement("div")
        this.txt.classList.add("modal-message")
        this.txt.innerHTML=obj.message
        this.box.appendChild(this.txt)
}
if(obj.mode!=undefined){
    if(obj.mode=="dark"){
        obj.bgColor="rgb(30,30,30)";
        obj.textColor="white"
    }else if(obj.mode=="glass"){
        console.log("still in development")
    }
}

this.animation="rotate"

if(obj.input != undefined){
        this.inp=document.createElement("input")
        
if(obj.input.placeholder!=undefined){      this.inp.placeholder=obj.input.placeholder}
if(obj.input.value!=undefined){      this.inp.value=obj.input.value}

if(obj.input.type!=undefined){      this.inp.type=obj.input.type}


/*if(obj.input.min!=undefined){      this.inp.min=obj.input.min}

if(obj.input.max!=undefined){      this.inp.max=obj.input.max*/


if(obj.input.limit!=undefined){      this.inp.maxLength=obj.input.limit}

        this.box.appendChild(this.inp)
}

//input2_______________________________
if(obj.input2 != undefined){
        this.inp2=document.createElement("input")
        
if(obj.input2.placeholder!=undefined){      this.inp2.placeholder=obj.input2.placeholder}
if(obj.input2.value!=undefined){      this.inp2.value=obj.input2.value}

if(obj.input2.type!=undefined){      this.inp2.type=obj.input2.type}


if(obj.input2.limit!=undefined){      this.inp2.maxLength=obj.input2.limit}

        this.box.appendChild(this.inp2)
}
//input3_______________________________
if(obj.input3 != undefined){
        this.inp3=document.createElement("input")
        
if(obj.input3.placeholder!=undefined){      this.inp3.placeholder=obj.input3.placeholder}
if(obj.input3.value!=undefined){      this.inp3.value=obj.input3.value}

if(obj.input3.type!=undefined){      this.inp3.type=obj.input3.type}


if(obj.input3.limit!=undefined){      this.inp3.maxLength=obj.input3.limit}

        this.box.appendChild(this.inp3)
}
}
//textarea______________________________________
if(obj.textarea!=undefined){
    this.textarea=document.createElement("textarea")
    this.textarea.classList.add("modal-texta")
    
    if(obj.textarea.limit!=undefined){     this.textarea.maxLength=obj.textarea.limit}
    
    if(obj.textarea.placeholder!=undefined){      this.textarea.placeholder=obj.textarea.placeholder}

    
    
    this.box.appendChild(this.textarea)
}






//button______________________________________
this.btn=document.createElement("button")
this.btn.classList.add("modal-btn")
this.btn.textContent="ok"
this.box.appendChild(this.btn)
this.btn.addEventListener("click",()=>{
    close()
})

close=()=>{

this.box.style.animationName="modal-"+this.animation+"Out"
    this.bg.style.animation="modal-fadeOut 0.65s"
    setTimeout(()=>{this.bg.remove()},659)

}

if(typeof obj=='object'){
if(obj.btn!=undefined){
    
    if(obj.btn.text!=undefined){
        this.btn.textContent=obj.btn.text
    }
    if(obj.btn.bgColor!=undefined){
        this.btn.style.background=obj.btn.bgColor
    }
    if(obj.btn.textColor!=undefined){
        this.btn.style.color=obj.btn.textColor 
    }
    if(obj.btn.trigger!=undefined){
        this.btn.onclick=obj.btn.trigger
    }
    
}
//button2______________________________________
if(obj.btn2!=undefined){
    this.btn2=document.createElement("button")
this.btn2.classList.add("modal-btn2")
this.btn2.textContent="cancel"
this.box.appendChild(this.btn2)
this.btn2.addEventListener("click",()=>{
    close()
})

    if(obj.btn2.text!=undefined){
        this.btn2.textContent=obj.btn2.text
    }
    if(obj.btn2.bgColor!=undefined){
        this.btn2.style.background=obj.btn2.bgColor
    }
    if(obj.btn2.textColor!=undefined){
        this.btn2.style.color=obj.btn2.textColor 
    }
    if(obj.btn2.trigger!=undefined){
        this.btn2.onclick=obj.btn2.trigger
    }
    
}
//button3______________________________________
if(obj.btn3!=undefined){
    this.btn3=document.createElement("button")
this.btn3.classList.add("modal-btn2")
this.btn3.textContent="cancel"
this.box.appendChild(this.btn3)
this.btn3.addEventListener("click",()=>{
close()
})

    if(obj.btn3.text!=undefined){
        this.btn3.textContent=obj.btn3.text
    }
    if(obj.btn3.bgColor!=undefined){
        this.btn3.style.background=obj.btn3.bgColor
    }
    if(obj.btn3.textColor!=undefined){
        this.btn3.style.color=obj.btn3.textColor 
    }
    if(obj.btn3.trigger!=undefined){
        this.btn3.onclick=obj.btn3.trigger
    }
    
}

//animation____________________________________
if(obj.animation!=undefined){
    this.box.style.animationName="modal-"+obj.animation
    
this.animation=obj.animation
}else{
    this.box.style.animationName="modal-"+this.animation
}
//background___________________________________
if(obj.bgColor!=undefined){
    this.box.style.background=obj.bgColor

}
//textColor_____________________________________
if(obj.textColor!=undefined){
    this.box.style.color=obj.textColor

}
if(obj.headingColor!=undefined){
    this.head.style.color=obj.headingColor

}

//backgroundBlur____________________________
if(obj.bgBlur!=undefined){
    if(obj.bgBlur==true){
        this.bg.setAttribute("blurr","")
    }
}

//timers____________________________________

if(obj.delay!=undefined){
    this.delay=obj.delay 
}
if(obj.autoClose!=undefined){
  setTimeout(close,obj.autoClose+this.delay)
}




}else{
this.box.style.animationName="modal-left"
this.animation="left"
this.btn.remove()
if(p2!=undefined){
    this.miniheader=document.createElement("h1")
    this.miniheader.textContent=obj
    this.box.appendChild(this.miniheader)
    obj=p2
}

this.minicon=document.createElement("div")
this.minicon.innerHTML=obj
this.box.appendChild(this.minicon)
if(p3!=undefined){
this.btn.textContent=p3
}
this.box.appendChild(this.btn)
    
}



        this.bg.appendChild(this.box)

  setTimeout(()=>{
  document.body.appendChild(this.bg)
  },this.delay)
        
        
    }


}











