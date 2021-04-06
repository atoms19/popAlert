cssloaded=false


//main alert function

function pop_alert(content="",head="alert",btn_text="ok",dm=false,btn_color="null"){


loadcss()

    var wrapper=document.createElement("div")
    wrapper.classList.add("pop-wrapper")
    
var card=document.createElement("div")    
    card.classList.add("pop-card")
    
 wrapper.appendChild(card) 
 
 var heading=document.createElement("h1")
 heading.classList.add("pop-heading")
 
 heading.innerHTML=head  
 card.appendChild(heading)
 card.innerHTML+=content
 var btn=document.createElement("button")
 
 document.body.style.overflowY="hidden"
 btn.classList.add("pop-btn")
 btn.innerHTML+=btn_text
 btn.addEventListener("click",popClose)
 
 
 card.appendChild(btn)
    document.body.appendChild(wrapper)
    var is_opened=true
   window.addEventListener("click",popOuter)
    if(dm==true){
        btn.style.background="#1b60a6"
        card.style.background="rgb(35,35,35)"
        card.style.color="white"
        
    }
    
    if(btn_color!=="null"){
        btn.style.background=btn_color
    }    
    
    
    
    function popClose(){
     card.style.animation="popAnimationOut 0.5s forwards"
     wrapper.style.animation="popFade 0.5s forwards"
     
     
     document.body.style.overflowY="scroll"
     is_opened =false
     setTimeout(()=>{wrapper.remove()},500)
     
 }
 
 function popOuter(e){
     if(e.target==wrapper){
         popClose()
     }
 }
 
 
    
}


//css injector

function loadcss(){
    if(cssloaded==false){
        var styleContainer=document.createElement("style")
        styleContainer.innerHTML=`@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap);.pop-wrapper{width:100%;height:100%;background:rgba(0,0,0,.75);font-family:Roboto,sans-serif;position:fixed;left:0;top:0;z-index:400;display:grid;place-item:center;overflow-y:scroll;backdrop-filter:blur(10px)}.pop-card{width:77%;margin:auto;background:#fff;padding:1rem 2rem;overflow:hidden;border-radius:7px;animation:popAnimationIn .5s}.pop-btn{padding:.7rem .4rem;background:#1e90ff;border:none;outline:0;border-radius:7px;color:#fff;min-width:70px;margin:.1rem;margin-top:2.72rem;float:right;font-weight:500}.pop-btn:active{opacity:.4}.pop-heading{font-weight:500;font-size:2.25rem}@keyframes popAnimationIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes popAnimationOut{to{transform:scale(0);opacity:0}from{transform:scale(1);opacity:1}}@keyframes popFade{from{opacity:1}to{opacity:0}}`
 document.body.appendChild(styleContainer)
 cssloaded=true
 
 }        
else{
    return 
} 
           
}


//paying my own bills

