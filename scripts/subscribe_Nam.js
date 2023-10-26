const btnSubscribe = document.getElementById("btnSubscribe");
const inputEmail = document.getElementById("inputEmail");
btnSubscribe.addEventListener("click",function(event){

    if(inputEmail.value =="" || inputEmail.value==null)
    {
        alert("Please input your email to subscribe our newsletter");
    }
    else
    {
        alert(`Thank you for subscribing! \nThe newest newletters will be send to you via: ${inputEmail.value}`);
    }

})