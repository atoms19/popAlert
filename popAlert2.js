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











