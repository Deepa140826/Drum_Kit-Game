
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInner=this.innerHTML;
        makesound(buttonInner);
        makeanimation(buttonInner);
       
        
    });

}

document.addEventListener("keypress",function(event){
makesound(event.key);
makeanimation(event.key);
});

function makesound(key){

    switch(key){
        case "w":
             var tom4=new Audio("C:/Users/student.DESKTOP-CHNCEBS/Documents/workshtml/DOM/Drum Kit Starting Files/sounds/tom-4.mp3");
             tom4.play();
             break;
         case "a":
             var crash=new Audio("C:/Users/student.DESKTOP-CHNCEBS/Documents/workshtml/DOM/Drum Kit Starting Files/sounds/crash.mp3");
             crash.play();
             break;    
         case "s":
             var tom1=new Audio("C:/Users/student.DESKTOP-CHNCEBS/Documents/workshtml/DOM/Drum Kit Starting Files/sounds/tom-1.mp3");
             tom1.play();
             break;
         case "d":
             var kick=new Audio("C:/Users/student.DESKTOP-CHNCEBS/Documents/workshtml/DOM/Drum Kit Starting Files/sounds/kick-bass.mp3");
             kick.play();
             break;
         case "j":
             var tom3=new Audio("C:/Users/student.DESKTOP-CHNCEBS/Documents/workshtml/DOM/Drum Kit Starting Files/sounds/tom-3.mp3");
             tom3.play();
             break;
         case "k":
             var snare=new Audio("C:/Users/student.DESKTOP-CHNCEBS/Documents/workshtml/DOM/Drum Kit Starting Files/sounds/snare.mp3");
             snare.play();
             break;
         case "l":
             var tom2=new Audio("C:/Users/student.DESKTOP-CHNCEBS/Documents/workshtml/DOM/Drum Kit Starting Files/sounds/tom-2.mp3");
             tom2.play();
              break;
         default: console.log(key);
    }

}

function makeanimation(currentkey){
    var activeButton=document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}














