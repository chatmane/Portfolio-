var projects = [
    {
        "name": "Claim Academy"
    }
]; 

$(document).ready(function () {
    $.each(projects, function (index, project) {
        console.log(projects);
        $('projects').append('')
    });

    $('.jquery-badge').on('mouseenter', projectHover);
});

function submitcontactform() {
    var x = document.forms["contactForm"]["email"].value;
    if (x == "") {
        alert("email must be filled out");
    } else {
        alert('Thank You For Submitting');
    }
}


function projectHover() {
    console.log('wee');
    $(this).addClass('hover');
}