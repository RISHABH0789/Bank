let users=["nyx","luna","wit","iron","pulse"]
passwords={
    nyx:"078",
    luna:"077",
    wit:"076",
    iron:"075",
    pulse:"074"
}
function submit(){
    let name=document.getElementById("name").value;
    name=name.toLowerCase()
    let password=document.getElementById("pass").value;
    if(users.includes(name)){
        if(passwords[name]==password){
            localStorage.setItem("name",name);
            window.location.href="bank.html";
        }
        else if(password==""){
            document.getElementById("msg").textContent="Give Password!";
        }
        else{
            document.getElementById("msg").textContent="Wrong Password Entered!";
        }
    }
    else if(name==""){
        document.getElementById("msg").textContent="Give Your Name First!";
    }
    else{
    document.getElementById("msg").textContent="No Such User Exist!";
    }
}