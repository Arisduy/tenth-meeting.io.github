var Paragraf = document.getElementById("myParagraph");
            Paragraf.style.color="white";
            Paragraf.innerText="Hai Diah"
        let parf = Paragraf.parentNode;
            parf.style.backgroundColor="red";
            parf.style.padding="3rem";
            parf.style.textAlign="center";
        var tombol = document.getElementsByTagName("button");
            tombol[0].style.backgroundColor="green";
            tombol[0].style.color="white";
            tombol[0].style.margin="10px";
            tombol[0].innerText="Klik disni";
        var tombol2 = document.createElement("button");
            tombol2.innerHTML="Klik disini";
        wika = document.getElementById("wika");
        wika.appendChild(tombol2);
        wika.addEventListener("click", hilang);

        function hilang(){
            window.close();
        }