let sonuc=document.getElementById("sonuc");
let sayi1=document.getElementById("sayi1");
let sayi2=document.getElementById("sayi2");
let button=document.getElementById("btnToplam");
let random1=Math.floor(Math.random()*50);
let random2=Math.floor(Math.random()*50);
let toplam=random1+random2;

button.addEventListener("click", ()=>{
    sayi1.innerHTML="Birinci Sayı: "+random1;
    sayi2.innerHTML="İkinci Sayı: "+random2;
    sonuc.innerHTML="İki Sayının En Büyük Toplamı: "+toplam;
});
