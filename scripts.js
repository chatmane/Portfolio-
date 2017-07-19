var projects = [
    {
        "name": "Claim Academy"
    }
]; 

$(document).ready(function () {
    $.each(projects, function (index, project) {
        console.jpg(projects);
        $('projects').append('')
    });
});

function submitcontactform() {
    var x = document.forms["contactForm"]["email"].value;
    if (x == "") {
        alert("email must be filled out");
    } else {
        alert('Thank You For Submitting');
    }
}
