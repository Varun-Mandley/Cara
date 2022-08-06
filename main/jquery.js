$(function () {
    $(".bar").click(function (e) {
        e.preventDefault();
        $(".navbar").addClass("active");
        $(".mobile").hide();
    })
    $(".close").click(function (e) {
        e.preventDefault();
        $(".navbar").removeClass("active")
        $(".mobile").show("slow");

    })

    $(".item-row").click(function () {
        window.location.href="sproduct.html";
    })

    /* log-in form */

    $('.log-in').click(function (e) {
        e.preventDefault();
        $('body').append('<div class=overlay></div>');
        $('body').append('<div class=model></div>');
        $(".model").append('<button class="cl">&times;</button>');

        var account = $(".account").html();
        $('.model').append(account);

        $(window).keydown(function (e) {
            if (e.which == 27) {
                $(".overlay ,.model").remove();
            }
        });
        $('.model .cl, .overlay').click(function () {

            $(".overlay ,.model").remove();

        });

        /* signup */

        $(".signUp").click(function (e) {
            e.preventDefault();
            $('.model').remove();
            $('body').append('<div class=model></div>');
            $(".model").append('<button class="cl">&times;</button>');
            var sign = $(".account-1").html();
            $('.model').append(sign);
            $(window).keydown(function (e) {
                if (e.which == 27) {
                    $(".overlay ,.model").remove();
                }
            });
            $('.model .cl, .overlay').click(function () {
    
                $(".overlay ,.model").remove();
    
            });
            
        });

    });
})
