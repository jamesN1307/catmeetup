document.querySelector("#signup").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#signupUsername").value,
        password:document.querySelector("#signupPassword").value,
    }
    console.log(userObj)
    fetch("/api/users/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/profile"
        } else {
            alert("trumpet sound")
        }
    })
})
