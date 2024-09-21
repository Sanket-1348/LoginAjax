let btn = document.querySelector('#subBtn')
let pass = document.querySelector("#password")
let uname = document.querySelector("#username")
btn.addEventListener('click',(e)=>{
    e.preventDefault();

    let user={
        username: uname.value,
        password: pass.value
    }

    fetch('/login',{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)

    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
console.log(data)
alert(data.status)
    })
    .catch((err)=>{
        console.log("Error:"+ err)
    })

})
