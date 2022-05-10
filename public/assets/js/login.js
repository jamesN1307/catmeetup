console.log("login linked1")
document.querySelector("#login").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#username").value,
        password:document.querySelector("#password").value,
    }
    console.log(userObj)
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/event"
        } else {
            alert("trumpet sound")
        }
    })
})




// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Passport Authentication</title>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css">
//   <link href="stylesheets/style.css" rel="stylesheet">
// </head>
// <body>
//   <nav class="navbar navbar-default">
//     <div class="container-fluid">
//       <div class="navbar-header">
//       </div>
//     </div>
//   </nav>
//   <div class="container">
//     <div class="row">
//       <div class="col-md-6 col-md-offset-3">
//         <h2>Login Form</h2>
//         <form class="login">
//           <div class="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input type="email" class="form-control" id="email-input" placeholder="Email">
//           </div>
//           <div class="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input type="password" class="form-control" id="password-input" placeholder="Password">
//           </div>
//           <button type="submit" class="btn btn-default">Login</button>
//         </form>
//         <br />
//         <p>Or sign up <a href="/">here</a></p>
//       </div>
//     </div>
//   </div>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//   <script type="text/javascript" src="js/login.js"></script>
// </body>
// </html>