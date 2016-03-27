$(document).ready(function () {
    //Check and send form data
    $("#submit").click(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var human = $("#human").val();
        $("#returnMessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (name == '' || email == '' || message == '' || human == '') {
            alert("Please Fill Required Fields");
        } else {
            // Returns successful data submission message when the entered information is stored in database.
            $.post("contact.php", {
                name1: name,
                email1: email,
                message1: message,
                contact1: contact
            }, function (data) {
                $("#returnMessage").append(data); // Append returned message to message paragraph.
                if (data == "Your Query has been received, We will contact you soon.") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
});
$('#message').click(function () {
    $(this).css({
        "padding-bottom": "10rem"
    });
});

//Show and Hide More Option
setInterval(function () {

    $(".fa-ellipsis-h")
        .velocity("transition.slideLeftIn", {
            stagger: 250
        })
        .delay(2000)
        .velocity({
            opacity: 1
        }, 750)
}, 5000);

//Expand and Contract Works
$('#shoppingList').on('click', function () {
    $('#shoppingList').toggleClass('box shortBox')
    $('#shoppingList').toggleClass('col-md-3 col-md-12');
    $('#quizApp').toggle();
    $('#apiHack').toggle();
    $('#hotCold').toggle();
    $('.description').toggle();
    $('.contract').toggle();
    $('#shoppingListImage').toggle();
})
$('#quizApp').on('click', function () {
    $('#quizApp').toggleClass('box shortBox')
    $('#quizApp').toggleClass('col-md-3 col-md-12');
    $('#shoppingList').toggle();
    $('#apiHack').toggle();
    $('#hotCold').toggle();
    $('.description').toggle();
    $('.contract').toggle();

    $('#quizAppImage').toggle();
})
$('#apiHack').on('click', function () {
    $('#apiHack').toggleClass('box shortBox')
    $('#apiHack').toggleClass('col-md-3 col-md-12');
    $('#quizApp').toggle();
    $('#shoppingList').toggle();
    $('#hotCold').toggle();
    $('.description').toggle();
    $('.contract').toggle();

    $('#apiHackImage').toggle();
})
$('#hotCold').on('click', function () {
    $('#hotCold').toggleClass('box shortBox')
    $('#hotCold').toggleClass('col-md-3 col-md-12');
    $('#quizApp').toggle();
    $('#apiHack').toggle();
    $('#shoppingList').toggle();
    $('.description').toggle();
    $('.contract').toggle();
    $('#hotColdImage').toggle();
})


//Setting Scrolls
$(".navbar-brand").click(function () {
    $(".hero").velocity("scroll", 1000);
})

$(".fa-chevron-down").click(function () {
    $("#intro").velocity("scroll", 1000);
})
$("#profileLink").click(function () {
    $("#intro").velocity("scroll", 1000);
})
$("#portfolioLink").click(function () {
    $("#works").velocity("scroll", 1000);
})
$("#contactLink").click(function () {
    $("#contact").velocity("scroll", 1000);
})

//Callout Styles
$("#toProfile").velocity({
    translateY: "10px"
}, {
    loop: 5
});
$(".contract").velocity({
    translateY: "10px"
}, {
    loop: 5
});
