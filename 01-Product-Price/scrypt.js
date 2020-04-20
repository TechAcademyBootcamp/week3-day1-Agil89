var poduct_name = prompt("mehsulun adini daxil edin:")
 var product_price = prompt("mehsulun qiymetini daxil edin:")
 if(isNaN(product_price)){
     alert("Yalniz eded daxil ede bilersiniz!");
     throw new Error("Error")
 }
 var product_weight = prompt("mehsulun cekisini(ve ya sayini) daxil edin:")
 if(isNaN(product_weight)){
     alert("Yalniz eded daxil ede bilersiniz!");
     throw new Error("Error")
 }
 var product_discount = prompt("mehsula olunacaq endirimi daxil edin:")
 if(isNaN(product_discount)){
     alert("Yalniz eded daxil ede bilersiniz!");
     throw new Error("Error")
 }
alert("Odeyeceyiniz mebleg(endirim daxil) bu qederdir: " + ((product_price * product_weight) - ((product_price*product_weight)/100)*product_discount));