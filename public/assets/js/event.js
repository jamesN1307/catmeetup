console.log("hello")
document.querySelector("#eventLog").addEventListener("submit",e=>{
    e.preventDefault()
    const eventObj = {
        name:document.querySelector("#name").value,
        location:document.querySelector("#location").value,
        date:document.querySelector("#date").value,
        time:document.querySelector("#time").value,
    }
    console.log(eventObj);
    fetch("/api/event",{
        method:"POST",
        body:JSON.stringify(eventObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log(res);
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})