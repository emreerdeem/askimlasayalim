const start=new Date('2026-07-16T00:00:00');
function update(){
let diff=new Date()-start;if(diff<0)diff=0;
let days=Math.floor(diff/86400000);let r=diff%86400000;
let h=Math.floor(r/3600000);r%=3600000;
let m=Math.floor(r/60000);r%=60000;
let s=Math.floor(r/1000);
counter.textContent=`${days} Gün : ${h} Saat : ${m} Dakika : ${s} Saniye`;
daysLabel.textContent=days;
let badges=0;
document.querySelectorAll('.goal').forEach(g=>{
 if(days>=+g.dataset.days){g.classList.add('active');badges++;}
});
badgeCount.textContent=badges;
}
update();setInterval(update,1000);
