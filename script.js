const start=new Date('2026-07-16T00:00:00');
function t(){let d=new Date()-start;if(d<0)d=0;
let days=Math.floor(d/86400000);d%=86400000;
let h=Math.floor(d/3600000);d%=3600000;
let m=Math.floor(d/60000);d%=60000;
let s=Math.floor(d/1000);
document.getElementById('counter').textContent=`${days} Gün : ${h} Saat : ${m} Dakika : ${s} Saniye`;
}
t();setInterval(t,1000);
