document.querySelector(".subBtn").addEventListener("click", function(){
    location.href = "indexafterlogin.html";
});

document.querySelector(".sign-up").addEventListener("click", function(){
    location.href = "signup.html";
});


// document.querySelector(".subBtn").addEventListener("click", function(){
//     var dataRef = firebase.database().ref('data/').orderByChild('when').equalTo(location.pathname);
//     dataRef.once('value', function(snapshot){
//         snapshot.forEach(function(itemSnapshot){
//             var itemData = itemSnapshot.val();
//             var name = itemData.name;
//             var userName = itemData.userName;
//             var password = itemData.password;
//         })
//     })

//     for(var i=0; i<name.length; i++){
//         alert(name[i]);
//     }

// });
