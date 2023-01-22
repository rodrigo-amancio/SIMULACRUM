/*loading screen*/

const loader = document.querySelector(".loader-reality, .loader-unreality");
    window.onload = ()=>{
        setTimeout(function(){
                loader.style.opacity = "0";
        setTimeout(function(){
                loader.style.display = "none";
            }, 500)
            }, 1500)
    }