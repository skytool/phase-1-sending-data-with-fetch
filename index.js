// Add your code here
function submitData(name, email){
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        
        body : JSON.stringify({
            name: "Ooggy",
            email: "adb@example.com",
        }),
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (obj) {
            console.log(obj);
        })
        .catch(function (error){
            alert("it is an error!!");
            console.log(error.message);
        })

    }
