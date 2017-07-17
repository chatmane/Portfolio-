function submitcontactform(){
    var x = document.forms["contactForm"]["email"].value;
    if (x == ""){
        alert("email must be filled out");
    }else{
        alert('Thank You For Submitting');
    }
}

$(document).ready(function(){  
});

function submitcontactform(){
    event.preventDefault();
    var x = document.forms["contactForm"]["email"].value;
    if (x == ""){
        alert("Email must be filled out");
    }else{
        $("mycontactform").fadeout();
        $("#success").fadein();
    }
}