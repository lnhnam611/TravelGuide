//user storage
let arrayUser = [
    { username: "duongcuibap", password: "123456", secretKey: "dog" },
    { username: "user2", password: "user2", secretKey: "cat" },
    { username: "user3", password: "user3", secretKey: "fish" }
  ];
  
  
  //javascript for login button and logout button
  const login = document.getElementById("btnLogin");
  const logout = document.getElementById("btnLogout");
  
  let foundUsername = false;
  let loggedUsername = "";
  
  logout.addEventListener("click", function (event) {

    loggedIn = false;
    document.getElementById("welcomeUser").innerHTML = "Log in";
  }
  );
  
  login.addEventListener("click",function(event){
    //----------------------
    if(document.getElementById("username").value =="" || document.getElementById("username").value == null
    || document.getElementById("password").value =="" || document.getElementById("password").value == null )
    {
      alert("Please enter your username and password!");
    }
    else
    {
      //-------------------------------------
      fetch('user_data.txt')
    .then(response => response.text())
    .then(text => {
      const lines = text.split('\n');
      lines.forEach(line => {

        try {
          const jsonObject = JSON.parse(line);
          
          if (jsonObject.username == document.getElementById("username").value) 
          {
            foundUsername = true;
            if(jsonObject.password == document.getElementById("password").value)
            {
              loggedIn = true;
              loggedUsername = jsonObject.username;
              //alert(loggedIn);
            }
            
          }
        } catch (error) {
          
        }
      });
      //alert(loggedIn);
      if (loggedIn) {
        alert(`Welcome back ${loggedUsername}!`);
        document.getElementById("welcomeUser").innerHTML= `Welcome back <span style="color: orange; font-style: italic;">${loggedUsername}</span> !` ;
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        //loggedIn = false;
        foundUsername = false;
      }
      else if (foundUsername && !loggedIn) {
        alert("Your password is wrong! Please enter again!");
        document.getElementById("password").value = "";
      }
      else {
        alert("Your username does not exist in system!");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      }

    })
    .catch(error => {
      alert('Error reading user_data.txt:', error);
      //outputElement.textContent = 'An error occurred. Please check the console.';
    });
      //------------------------------------

    }
    //--------------------------
  });
  
  
  
  //javascript for forgot password
  const forgotPass = document.getElementById("a_forget");
  let found;
  let foundPass;
  
  forgotPass.addEventListener('click', function (event) {
    //----------------------------------------------------
    if (document.getElementById("username").value == "") {
      alert("Please input your username in username box and your secret key in the password box. Then click Forgot your password again!");
    }
    else
    {
      fetch('user_data.txt')
    .then(response => response.text())
    .then(text => {
      const lines = text.split('\n');
      lines.forEach(line => {

        try {
          const jsonObject = JSON.parse(line);
          
          if (document.getElementById("username").value == jsonObject.username) {
  
            foundUsername = true;
            //alert(foundUsername);
            if (document.getElementById("password").value == jsonObject.secretKey) {
              foundPass = jsonObject.password
              found = true;
              //alert(found);
            }
          }

        } catch (error) {
        }
      });
      //alert(loggedIn);
      if (found) {
        alert(`Your password is "${foundPass}"`);
        foundPass = "";
    
        document.getElementById("password").value = "";
      }
      else if (foundUsername && !found) {
        alert("Your secret key is wrong! Please enter again!");
        document.getElementById("password").value = "";
      }
      else {
        alert("Your username does not exist in system!");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      }

    })
    .catch(error => {
      alert('Error reading user_data.txt:', error);
      //outputElement.textContent = 'An error occurred. Please check the console.';
    });

    }
    }

   
  
  );