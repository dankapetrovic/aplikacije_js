const ekran = document.getElementById("display");
const dugmici = document.querySelectorAll("#dugmici button");

dugmici.forEach((dugme) => {
    dugme.addEventListener("click", () => {
        if(dugme.innerHTML === "C"){
            ekran.value = "";
            }
        else if(dugme.innerHTML === "="){
            try{
                let rezultat = eval(ekran.value);
                ekran.value = rezultat;
            }catch(error){
                ekran.value = "Error";
            }
        }
        else{
            ekran.value += dugme.innerHTML;
        }

    });
});
