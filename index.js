var joinbtn = document.querySelectorAll(".mybtn");
for(var i=0; i<joinbtn.length ;i++){
    joinbtn[i].addEventListener("click", function(){
        location.href = "signup.html";
    });
}