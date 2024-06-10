// const reveal_text=function(entries,observer)
// {
//      
  
//      if (entry.intersectionRatio >= 0.5)
//      {
//           entry.target.firstElementChild.opacity=;
//      }
//      else
//      {
//           entry.target.firstElementChild.classList.add("hidden");
//      }
//      console.log(entries,entry);
// }










// const reveal_text=function(entries,observer)
// {
//           const [entry]=entries;
//           console.log(entry,entries);
//           entry.target.firstElementChild.style.opacity=entry.intersectionRatio;
// }
// const observer = new IntersectionObserver(reveal_text,{
//      root:null,
//      threshold:[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
// })

// const pages=document.getElementById("picture_1940");

// observer.observe(pages);\
const audioFiles = [
     'audio/founder.ogg',
     'audio/landing.ogg',
     'audio/picture_1930.ogg',
     'audio/picture_1940.ogg',
     'audio/picture_1950.ogg',
     'audio/picture_1960.ogg',
     'audio/picture_1970.ogg',
     'audio/picture_1980.ogg',
     'audio/picture_1990.ogg',
     'audio/picture_2000.ogg',
     'audio/picture_2010.ogg',
     'audio/picture_2020.ogg'
 ];
 // Preload audio files

 function preloadAudio(files) {
     files.forEach(file => {
         const audio = new Audio();
         audio.src = file;
         audio.preload = 'auto';
     });
 }

 window.addEventListener('DOMContentLoaded', () => {
            preloadAudio(audioFiles);
        });








const nav_bar=document.querySelector("nav");
const hide_nav=function(entries,observer)
{
     const [entry]=entries;
     if(entry.intersectionRatio>0.2)
     {
          nav_bar.classList.add("inactive")
     }
     else
     {
          nav_bar.classList.remove("inactive")
     }
     if(entry.isIntersecting==false)
     {
          document.querySelector(".sticky_upper").classList.remove("inactive")
     }
     else
     {
          document.querySelector(".sticky_upper").classList.add("inactive")
     }
}
const landing_observer=new IntersectionObserver(hide_nav,{
     root:null,
     threshold:[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
})
const landing_page=document.querySelector("#landing");
landing_observer.observe(landing_page);


var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl');
    const audio = document.querySelector('audio');
    const source = document.querySelector('source');
const reveal_text=function(entries,observer)
{
          entries.forEach(element => {
               element.target.firstElementChild.style.opacity=element.intersectionRatio;
          });       
}
const observer = new IntersectionObserver(reveal_text,{
     root:null,
     threshold:[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
})
const play_audio=function(entries,observer)
{
   
     // console.log(entries);
     

























///    ACTIVE TAB MA HOVER EFFECT 
     entries.forEach(element=>{
          if(element.intersectionRatio>0.5)
          {
          //     const active_nav=document.querySelector(`#nav_${element.target.id}`);
               if(element.target.id=="picture_1930" || element.target.id=="picture_1950" || element.target.id=="picture_1980" )
              {
               nav_bar.style.color="black";
               // active_nav.style.color="pink";
              } 
               else
               {
                    nav_bar.style.color="white";
                    // active_nav.style.color="blue";
               }
              
               
               source.src=`audio/${element.target.id}.ogg`
               // console.log(source.src)
               audio.load();
               yourAudio["play"]();
          }
     })    
}
const audio_observer=new IntersectionObserver(play_audio,{
     root:null,
     threshold:0.5
})
const pages=document.querySelectorAll(".parallax");
pages.forEach(element=>{
     observer.observe(element);
     audio_observer.observe(element);
})

const aupages=document.querySelectorAll(".au");
aupages.forEach(element=>{
     audio_observer.observe(element);
})




ctrl.onclick = function () {

    // Update the Button
    document.body.style.overflow = 'auto';
    var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'START EXPERIENCING' : 'TIGHTEN YOUR SEAT BEALTS';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    return false;
};

audio.addEventListener('ended', function() {
     var next;
     const current=source.src;
     console.log(current);
     if(current.includes("landing.ogg"))
     next = document.getElementById('founder');
     else if(current.includes('founder'))
     next = document.getElementById('picture_1930');
     else if(current.includes("picture_1930"))
     next = document.getElementById('picture_1940');
     else if(current.includes('picture_1940'))
     next = document.getElementById('picture_1950');
     else if(current.includes("picture_1950.ogg"))
     next = document.getElementById('picture_1960');
     else if(current.includes("picture_1960.ogg"))
     next = document.getElementById('picture_1970');
     else if(current.includes("picture_1970.ogg"))
     next = document.getElementById('picture_1980');
     else if(current.includes("picture_1980.ogg"))
     next = document.getElementById('picture_1990');
     else if(current.includes("picture_1990.ogg"))
     next = document.getElementById('picture_2000');
     else if(current.includes("picture_2000.ogg"))
     next = document.getElementById('picture_2010');
     else if(current.includes("picture_2010.ogg"))
     next = document.getElementById('picture_2020');
     else if(current.includes("picture_2020.ogg"))
     next = document.getElementById('picture_2020');
     next.scrollIntoView({ behavior: 'smooth' });
 });

const on=document.getElementById("on");
const off=document.getElementById("off");
on.addEventListener("click",function(event)
{
     event.preventDefault();
     on.classList.add("inactive");
     off.classList.remove("inactive");
     audio.muted = true;
})
off.addEventListener("click",function(event)
{
     event.preventDefault();
     off.classList.add("inactive");
     on.classList.remove("inactive");
     audio.muted = false;
})










// const pages_1950=document.getElementById("picture_1950");
// observer.observe(pages_1950);

// const pages=document.querySelectorAll(".parallax");
// console.log(pages);
// pages.forEach(function(element){
//      observer.observe(element);
// })





// pages.querySelector(".box").classList.add("hidden");
// --------
// pages.forEach(element => {
//      observer.observe(element);
// });
