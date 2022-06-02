//Ödev-2
// kullanıcı tarafından girilen 2 cümle ile yapılan işlemler
var cumle, degistirilmisCumle;
cumle=prompt("cümle giriniz");
degistirilmisCumle=String(prompt("cümle giriniz"));
document.write("Girilen cümle: "+cumle+"<br>");

//S-1) Kaç karakterlidir?
document.write("Kaç karakterli: "+cumle.length+"<br>");

//S-2) boşluklar alınarak kaç karakterlidir?
document.write("Boşkluklar silinmiş karakter sayısı: "+cumle.replace(" ","").length +"<br>");

//S-3) bütün kelimeyi küçük harfle göstermek?
document.write("hepsi küçük harf: "+cumle.toLowerCase()+"<br>");

//S-4) bütün kelimeyi büyük harfle göstermek?
document.write("hepsi büyük harf: "+cumle.toUpperCase()+"<br>");

//S-5) ilk harf nedir?
document.write("girilen ilk harf: "+cumle.charAt("0")+"<br>");

//S-6) girdiğiniz kelime java ile başlıyor mu?
document.write("kelimenin başı java ile başlıyor mu? "+cumle.startsWith('java')+"<br>");

//S-7) girdiğiniz kelimenin sonuna "ben js öğreniyorum"?
document.write("kelimenin sonunda ben js öğreniyorum yazıyor mu? " +cumle.endsWith('ben js öğreniyorum')+"<br>")

//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin?
document.write("İlk 4 karakter: "+cumle.substring(0,4)+"<br>") 

//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek?
document.write("Değiştirilmiş cümle: "+cumle.replace(cumle,degistirilmisCumle)+"<br>")

  








