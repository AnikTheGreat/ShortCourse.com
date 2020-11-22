const rootRef = firebase.database().ref();
const dataRef = rootRef.child('data');


document.querySelector(".join-btn").addEventListener("click", function(){
    preventDefault();
    var fname = document.querySelector(".fname").value;
    var lname = document.querySelector(".lname").value;
    var mail = document.querySelector(".mail").value;
    var uName = document.querySelector(".uName").value;
    var pass1 = document.querySelector(".pass1").value;
    var pass2 = document.querySelector(".pass2").value;
    var fullName = fname + " " + lname;

    if(mail == ""){
        alert("Please Enter Your E-mail, Thank You.");
    }
    else if(uName == ""){
        alert("Please Enter an User Name, Thank You.");
    }
    else if(pass1 == ""){
        alert("Please Enter a Password, Thank You.");
    }
    else if(pass2 == ""){
        alert("Please Confirm Password, Thank You.");
    }
    else{
        if(pass1 == pass2){
            var newPostRef = dataRef.push();
            newPostRef.set({
                name: fullName,
                email: mail,
                userName: uName,
                password:pass1,
                when: firebase.database.ServerValue.TIMESTAMP
            });


            alert(fullName);
        }
        else{
            alert("Sorry, Password did not match. Please Try Again.");
        }
    }
    alert(fname+lname+mail+uName+pass1+pass2);
});