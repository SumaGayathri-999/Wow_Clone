window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector(".coupon").style.display="block";
        document.querySelector(".main_page").style.opacity="0.7"
    },4000)
}

function closeCoupon(){
    document.querySelector(".coupon").style.display="none";
    document.querySelector(".main_page").style.opacity="1"
}


function togglebody(event){
    document.body.classList.toggle("dark");
    event.classList.toggle("darkToggle");
    event.parentElement.classList.toggle("lightbg");
    document.querySelector(".wow_logo").classList.toggle("wow_logo_dark");
    document.getElementsByClassName("footer")[0].classList.toggle("footerdark");
    let collection=document.querySelectorAll('.navLink>a');
        for(i=0;i<collection.length;i++){
            collection[i].classList.toggle("navtext");
         }
    let bannertext=document.querySelectorAll(".banner_text");
        for(j=0;j<bannertext.length;j++){
       bannertext[j].classList.toggle("dark");
        }    
    let socialmediaicons=document.querySelectorAll('.social_media_icons');
       for(i=0;i<socialmediaicons.length;i++){
        socialmediaicons[i].classList.toggle("iconstogggle")
       }
       let cardtoggle=document.querySelectorAll('.card');
       for(i=0;i<cardtoggle.length;i++){
        cardtoggle[i].classList.toggle("cardcolortoggle")
       }
       let cardtexttoggle=document.querySelectorAll('.card a');
       for(i=0;i<cardtexttoggle.length;i++){
        cardtexttoggle[i].classList.toggle("cardcolortoggle")
       }
    //    document.querySelector('.nav_links').style.backgroundColor="pink"; 
    let navbg=document.querySelector(".nav_links");
    navbg.classList.toggle("navtoggle");
    let hello=document.querySelector(".ca");
    hello.classList.toggle("caToggle"); 
}


