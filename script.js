const start=new Date("2026-07-16T00:00:00");
const quotes=[
"Bugün de kendim için doğru kararı verdim.",
"En zor gün ilk gündür.",
"Her geçen saniye daha güçlüsün.",
"Küçük adımlar büyük değişimler getirir."
];
document.getElementById("quote").textContent=quotes[Math.floor(Math.random()*quotes.length)];
function tick(){
const now=new Date();
let diff=Math.max(0,now-start);
const d=Math.floor(diff/86400000); diff%=86400000;
const h=Math.floor(diff/3600000); diff%=3600000;
const m=Math.floor(diff/60000); diff%=60000;
const s=Math.floor(diff/1000);
document.getElementById("counter").innerHTML=
`${d} Gün<br>${h} Saat ${m} Dakika ${s} Saniye`;
}
tick();setInterval(tick,1000);