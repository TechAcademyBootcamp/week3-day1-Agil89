var user_rod = prompt("Mesafeni daxil edin: ")
        if(isNaN(user_rod)){
            alert("Eded daxil edin!")
            throw new Error;
        }
        document.write("Metrle:"+user_rod*5.0292+"<br>"+"Feetle:"+user_rod*16.5+"<br>"+"Mille: "+user_rod/319.9992+"<br>"+"Furlongla: "+user_rod/40+"<br>"+"Deqiqe ile:"+user_rod/319.9992/3.1*60);