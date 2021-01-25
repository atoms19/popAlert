cssloaded=false
function pop_alert(content="nothing to alert",head="alert",btn="ok",dm=false){
    if(cssloaded==false){
        var css_g2xc=document.createElement("style")
        css_g2xc.innerHTML=".g2xc-wrapper{width:100vw;height:100vh;background:rgba(0,0,0,.75);position:fixed;left:0;top:0;z-index:400;display:grid;place-item:center;backdrop-filter:blur(10px)}.g2xc-card-alert{width:77%;margin:auto;background:#fff;padding:1rem 2rem;overflow:hidden;border-radius:7px;animation:g2xczoom .5s}.g2xc-button-confrim{padding:.7rem .4rem;background:#1e90ff;border:none;outline:0;border-radius:7px;color:#fff;min-width:70px;margin-top:.72rem;float:right;font-weight:500}.g2xc-button-confrim:active{background:#87ceeb}.g2xc-heading-alert{font-weight:500}@keyframes g2xczoom{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes g2xczoomout{to{transform:scale(0);opacity:0}from{transform:scale(1);opacity:1}}@keyframes g2xcfadeout{from{opacity:1}to{opacity:0}}"
 document.body.appendChild(css_g2xc)
 cssloaded=true
 g2x_alert(content,head,btn,dm)
 }        
else{
    g2x_alert(content,head,btn,dm)
}            
}

function g2x_alert(content,head,btn_text,dm){
    var wrapper=document.createElement("div")
    wrapper.classList.add("g2xc-wrapper")
    
var card=document.createElement("div")    
    card.classList.add("g2xc-card-alert")
    
 wrapper.appendChild(card) 
 var heading=document.createElement("h1")
 heading.classList.add("g2xc-heading-alert")
 heading.innerHTML=head  
 card.appendChild(heading)
 card.innerHTML+=content
 var btn=document.createElement("button")
 btn.classList.add("g2xc-button-confrim")
 btn.innerHTML+=btn_text
 btn.addEventListener("click",g2xcClose)
 card.appendChild(btn)
    document.body.appendChild(wrapper)
   window.addEventListener("click",g2xcouter)
    if(dm==true){
        btn.style.background="#1b60a6"
        card.style.background="rgb(35,35,35)"
        card.style.color="white"
        
    }
        
    
    
    
    function g2xcClose(){
     card.style.animation="g2xczoomout 0.5s forwards"
     wrapper.style.animation="g2xcfadeout 0.5s forwards"
     setTimeout(()=>{wrapper.remove()},500)
 }
 
 function g2xcouter(e){
     if(e.target==wrapper){
         g2xcClose()
     }
 }
    
}




