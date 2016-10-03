$(function () {

    $('#geek').validator();

    $('#geek').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "apply.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&#x2715;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#geek').find('.messages').html(alertBox);
                        $('#geek')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});


// one geek

$(function () {

    $('#geek1').validator();

    $('#geek1').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "apply1.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&#x2715;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#geek1').find('.messages').html(alertBox);
                        $('#geek1')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});


// two geek
$(function () {

    $('#geek2').validator();

    $('#geek2').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "apply2.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&#x2715;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#geek2').find('.messages').html(alertBox);
                        $('#geek2')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});


// geek 3

$(function () {

    $('#geek3').validator();

    $('#geek3').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "apply3.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&#x2715;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#geek3').find('.messages').html(alertBox);
                        $('#geek3')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
