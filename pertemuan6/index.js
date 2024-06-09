function tes(){
    alert("Selamat anda berhasil");
};

var typed = new Typed("#typing",{
    strings: ["student", "friends","classmate"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
var text1 = document.getElementById("alert-item");
text1.innerHTML="Klik disini";
text1.style.padding="10px";
text1.style.background="blue";
text1.style.color="white";

var body = document.getElementById("body");
body.style.background="#FFEAE3";
