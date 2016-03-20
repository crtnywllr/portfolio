function submitForm() {
    alert("I have activated the submitForm function");
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success: function (text) {
            if (text == "success") {
                formSuccess();
            }
        }
    });

    function formSuccess() {
        $("#msgSubmit").removeClass("hidden");
    }
}

$(document).ready(function () {
    $('#contactForm').submit(function (event) {
        event.preventDefault();
        submitForm();

    })
    $('#message').click(function () {
        $(this).css({
            "padding-bottom": "10rem"
        });
    });

    $('#shoppingList').on('click', function () {
        $('#shoppingList').toggleClass('col-md-3 col-md-12');
        $('#quizApp').toggle();
        $('#apiHack').toggle();
        $('#hotCold').toggle();
        $('.description').toggle();
        $('.expand').toggle();
        $('.contract').toggle();
        $('#shoppingListImage').toggle();


    })
    $('#quizApp').on('click', function () {
        $('#quizApp').toggleClass('col-md-3 col-md-12');
        $('#shoppingList').toggle();
        $('#apiHack').toggle();
        $('#hotCold').toggle();
        $('.description').toggle();
        $('.expand').toggle();
        $('.contract').toggle();
        $('#quizAppImage').toggle();
    })
    $('#apiHack').on('click', function () {
        $('#apiHack').toggleClass('col-md-3 col-md-12');
        $('#quizApp').toggle();
        $('#shoppingList').toggle();
        $('#hotCold').toggle();
        $('.description').toggle();
        $('.expand').toggle();
        $('.contract').toggle();
        $('#apiHackImage').toggle();
    })
    $('#hotCold').on('click', function () {
        $('#hotCold').toggleClass('col-md-3 col-md-12');
        $('#quizApp').toggle();
        $('#apiHack').toggle();
        $('#shoppingList').toggle();
        $('.description').toggle();
        $('.expand').toggle();
        $('.contract').toggle();
        $('#hotColdImage').toggle();
    })

})
