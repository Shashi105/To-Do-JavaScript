const users=[{"username":"admin","password":"admin"},
{"username":"shashi","password":"shashi"},        
{"username":"sekhar","password":"sekhar"}];

document.addEventListener("DOMContentLoaded",landingPage);

function landingPage(){
    document.getElementById("landingPage").hidden=false;
    document.getElementById("loginPage").hidden=true;
    document.getElementById("signUpPage").hidden=true;
    document.getElementById("dashboard").hidden=true;
    document.getElementById("loginRedirect").addEventListener("click",()=>{
        login()
    });
    document.getElementById("signUpRedirect").addEventListener("click",()=>{
        signUp()
    });
    document.getElementById("back").addEventListener("click",()=>{
        back()
    });
    document.getElementById("backSignUp").addEventListener("click",()=>{
        back()
    });
    document.getElementById("backDashboard").addEventListener("click",()=>{
        back()
    });
    
   
}
function back(){
    document.getElementById("landingPage").hidden=false;
    document.getElementById("loginPage").hidden=true;
    document.getElementById("signUpPage").hidden=true;
    document.getElementById("dashboard").hidden=true;
}

function login(){
    document.getElementById("landingPage").hidden=true;
    document.getElementById("loginPage").hidden=false;
    document.getElementById("signUpPage").hidden=true;
    document.getElementById("dashboard").hidden=true;

}

function signUp(){
    document.getElementById("landingPage").hidden=true;
    document.getElementById("loginPage").hidden=true;
    document.getElementById("signUpPage").hidden=false;
    document.getElementById("dashboard").hidden=true;
}

function dashboard(){

    document.getElementById("landingPage").hidden=true;
    document.getElementById("loginPage").hidden=true;
    document.getElementById("signUpPage").hidden=true;
    document.getElementById("dashboard").hidden=false;
}