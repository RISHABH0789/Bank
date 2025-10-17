credits={
    nyx:100,
    wit:95,
    iron:90,
    luna:98,
    pulse:100
}
let name=localStorage.getItem("name");
function check(){
    if(document.getElementById("balance").checked){
        
        document.getElementById("depositBtn").style.display="none";
        document.getElementById("withdrawBtn").style.display="none";
        document.getElementById("credits").style.display="none";
        
        document.getElementById("msg").textContent=`Your Balance is ${credits[name]}`;
    }
    else if(document.getElementById("withdraw").checked){
        
        document.getElementById("msg").textContent="";
        
        document.getElementById("depositBtn").style.display="none";
        
        document.getElementById("credits").style.display="block";
        document.getElementById("withdrawBtn").style.display="block";
    }
    else if(document.getElementById("deposit").checked){
        
        document.getElementById("msg").textContent="";
        
        document.getElementById("withdrawBtn").style.display="none";
        
        document.getElementById("credits").style.display="block";
        document.getElementById("depositBtn").style.display="block";
    }
}
function deposit(){
    let credit = Number(document.getElementById("credits").value);
    
    if (credit <= 0) {
        document.getElementById("msg").textContent = "Enter a valid amount!";
        document.getElementById("credits").style.display="none";
        document.getElementById("depositBtn").style.display="none";
    }
    else{
        credits[name]+=credit;
        document.getElementById("credits").style.display="none";
        document.getElementById("depositBtn").style.display="none";
    
        document.getElementById("msg").textContent = `Deposited ${credit} successfully!`;
    }
}
function withdraw(){
    let credit = Number(document.getElementById("credits").value);
    
    if (credits[name] >= credit && credit > 0) {
        credits[name] -= credit;
        document.getElementById("msg").textContent = `Withdrawn ${credit} successfully!`;
    } 
    else if (credit <= 0) {
        document.getElementById("msg").textContent = "Enter a valid amount!";
    }
    else {
        document.getElementById("msg").textContent = "Insufficient balance!";
    }
    
    document.getElementById("credits").style.display = "none";
    document.getElementById("withdrawBtn").style.display = "none";
}
