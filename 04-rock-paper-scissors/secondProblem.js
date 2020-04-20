var user_num = prompt("oyun ucun 3-unden birini secin(1-kagiz,2-qayci,3-das):");
if (isNaN(user_num)) {
    alert("Yalniz eded daxil ede bilersiniz!")
    throw new Error("Error")
}else if(user_num>3||user_num<1){
    alert("Yalniz 1 ile 3 arasi eded daxil edin!")
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var comp_num = randomInteger(1, 3);
if ((user_num == 1 && comp_num == 1) || (user_num == 2 && comp_num == 2) || (user_num == 3 && comp_num == 3)) {
    document.write("sizin seciminiz:" + user_num + "<br>" + "kompyuterin secimi:" + comp_num + "<br>" + "Berabere")
} else if ((user_num == 1 && comp_num == 3) || (user_num == 2 && comp_num == 1) || (user_num == 3 && comp_num == 2)) {
    document.write("sizin seciminiz:" + user_num + "<br>" + "kompyuterin secimi:" + comp_num + "<br>" + "siz qazandiniz :)")
} else {
    document.write("sizin seciminiz:" + user_num + "<br>" + "kompyuterin secimi:" + comp_num + "<br>" + "uduzdunuz :(")
}