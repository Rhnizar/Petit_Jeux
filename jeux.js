
    var randomnumber = Math.floor(Math.random() * 100) + 1;
    const msg = document.getElementById("resultat");
    const number = document.getElementById("num");
    const b = document.getElementById("b");
    const p = document.getElementById("t");
    var conteur = 1;
    function tester()
    {
        var numberuser = Number(number.value);
        if(conteur === 1)
        {
            p.textContent = "Vos Test :"; 
        }
        p.textContent += numberuser + ' ';
        if(numberuser === randomnumber)
        {
           msg.style.display = "block";
           msg.textContent = "Bravo";
        }
        
        else if(conteur === 3)
        {
            msg.style.display = "block";
            msg.textContent = "!!! GAME OVER !!! . le bon nomber est :"+randomnumber ;
            b.disabled=true;
        }
        else
        {
            msg.style.display = "block";
            msg.textContent = "Faux";
        }
        conteur ++;
        number.value="";
        number.focus();
    }
    function des()
    {
        msg.style.display = "none";
    }