 var user_num=prompt("Enter count of gallons: ");
 if(isNaN(user_num)){
     alert("Enter the number!");
     throw new Error;
 }
 var litres = user_num*3.7854;
 var barel = user_num/19.5;
 var co2=user_num*20;
 var etanol = user_num*115000/75700;
 var price = user_num*4;
 document.write("Litres="+litres+"<br>"+"Barrels="+barel+"<br>"+"CO2="+co2+"<br>"+"Etanol="+etanol+"<br>"+"Price="+price);