var user_num = prompt("oyun ucun 3-unden birini secin(1-kagiz,2-qayci,3-das):");
        if(isNaN(user_num)){
            alert("Yalniz eded daxil ede bilersiniz!")
            throw new Error("Error")
        }
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var a = randomInteger(1,3);
if((user_num==1 && a ==1)||(user_num==2 && a==2)||(user_num==3 && a==3)){
    document.write("sizin seciminiz:"+user_num+"<br>"+"kompyuterin secimi:"+a+"<br>"+"Berabere")
}else if((user_num==1 && a== 3)||(user_num==2 && a==1)||(user_num==3 && a==2)){
    document.write("sizin seciminiz:"+user_num+"<br>"+"kompyuterin secimi:"+a+"<br>"+"siz qazandiniz :)")
}else{
    document.write("sizin seciminiz:"+user_num+"<br>"+"kompyuterin secimi:"+a+"<br>"+"uduzdunuz :(")
}