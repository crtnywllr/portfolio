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
        jQuery(document).ready(function () {

            /*
        Fullscreen background
    */
            $.backstretch("assets/img/backgrounds/1.jpg");

            /*
    Contact form
    */
            $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function () {
                $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
            });
            $('.contact-form form').submit(function (e) {
                e.preventDefault();
                $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
                var postdata = $('.contact-form form').serialize();
                $.ajax({
                    type: 'POST',
                    url: 'php/contact.php',
                    data: postdata,
                    dataType: 'json',
                    success: function (json) {
                        if (json.emailMessage != '') {
                            $('.contact-form form #email').addClass('input-error');
                        }
                        if (json.subjectMessage != '') {
                            $('.contact-form form #name').addClass('input-error');
                        }
                        if (json.messageMessage != '') {
                            $('.contact-form form #message').addClass('input-error');
                        }
                        if (json.antispamMessage != '') {
                            $('.contact-form form #human').addClass('input-error');
                        }
                        if (json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
                            $('.contact-form form').fadeOut('fast', function () {
                                $('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');

                            });
                        }
                    }
                });
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
