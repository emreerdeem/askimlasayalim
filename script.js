const hedefler=[1,7,30,100,365];

const goalEls=document.querySelectorAll(".goal");

let tamamlanan=0;

goalEls.forEach((goal,index)=>{

    if(days>=hedefler[index]){

        goal.classList.add("active");

        tamamlanan++;

    }

});

document.getElementById("progressFill").style.width=((tamamlanan-1)/4*100)+"%";
