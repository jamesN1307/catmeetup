console.log("hello")
document.querySelector("#eventLog").addEventListener("submit",e=>{
    e.preventDefault()
    const eventObj = {
        title:document.querySelector("#name").value,
        body:document.querySelector("#location").value,
        body:document.querySelector("#date").value,
        body:document.querySelector("#time").value,
    }
    fetch("/api/event",{
        method:"POST",
        body:JSON.stringify(eventObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})