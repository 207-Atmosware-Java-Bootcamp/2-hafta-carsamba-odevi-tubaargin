//Ödev-1
// Kullanıcıda tarafından aldığımız 2 tane sayı ile yapılan işlemler
var num1,num2;
num1=Number(prompt("1.sayıyı giriniz"));
num2=Number(prompt("2.sayıyı giriniz"));
document.write("Girilen sayılar:"+num1+", "+num2+"<br/>");

// s1-) Bu sayılardan en büyüğü nedir ?
document.write("En büyüğü: "+ Math.max(num1,num2)+"<br/>");

// s2-) Bu sayılardan en küçüğü nedir ?
document.write("En küçüğü: "+ Math.min(num1,num2)+"<br/>");

// s3-) Bu sayılardan en küçüğünün karekökü nedir ?
document.write("En küçüğünün karekökü: "+Math.sqrt(Math.abs(Math.min(num1,num2)))+"<br/>");

// s4-) Bu sayılardan en küçüğünün karekökünü üste yuvarla
document.write("En küçüğünün karekökünün üste yuvarla: "+Math.ceil(Math.sqrt(Math.abs(Math.min(num1,num2))))+"<br/>")

// s5-) Bu sayılardan en büyüğünün mutlak değeri nedir ?
document.write("En büyüğünün mutlak değeri: "+Math.abs(Math.max(num1,num2))+"<br/>");

// s6-) Bu sayılardan en büyüğü alt taban, en küçüğü üst taban şeklinde üstünü alalım
document.write("En büyüğü alt taban en küçüğü  üst taban: "+Math.pow(Math.abs(Math.max(num1,num2)), Math.abs(Math.min(num1,num2)))+"<br/>");













