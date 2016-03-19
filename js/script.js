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
        $('#quizApp').toggleClass('col-md-3 col-md-0');
        $('#apiHack').toggleClass('col-md-3 col-md-0');
        $('#hotCold').toggleClass('col-md-3 col-md-0');
        $('.imgs').toggle();
        $('.codeLinks').toggle();
        // $('.moreDetailButton').toggle();
        $('.lessDetailButton').toggle();


    })
    $('#quizApp').on('click', function () {
        $('#quizApp').toggleClass('col-md-3 col-md-12');
        $('#shoppingList').toggleClass('col-md-3 col-md-0');
        $('#apiHack').toggleClass('col-md-3 col-md-0');
        $('#hotCold').toggleClass('col-md-3 col-md-0');
        $('.description').toggle();
        $('.codeLinks').toggle();
        $('.moreDetailButton').toggle();
        $('.lessDetailButton').toggle();
        $('.screenshot').toggleClass('bigImg');
    })
    $('#apiHack').on('click', function () {
        $('#apiHack').toggleClass('col-md-3 col-md-12');
        $('#quizApp').toggleClass('col-md-3 col-md-0');
        $('#shoppingList').toggleClass('col-md-3 col-md-0');
        $('#hotCold').toggleClass('col-md-3 col-md-0');
        $('.description').toggle();
        $('.codeLinks').toggle();
        $('.moreDetailButton').toggle();
        $('.lessDetailButton').toggle();
        $('.screenshot').toggleClass('bigImg');
    })
    $('#hotCold').on('click', function () {
        $('#hotCold').toggleClass('col-md-3 col-md-12');
        $('#quizApp').toggleClass('col-md-3 col-md-0');
        $('#apiHack').toggleClass('col-md-3 col-md-0');
        $('#shoppingList').toggleClass('col-md-3 col-md-0');
        $('.description').toggle();
        $('.codeLinks').toggle();
        $('.moreDetailButton').toggle();
        $('.lessDetailButton').toggle();
        $('.screenshot').toggleClass('bigImg');
    })

})
