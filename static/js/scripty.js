$(document).ready(function(){
    console.log("page loaded");

    $(document).on("submit", "#register-form", function(e) {
        e.preventDefault();
        var form = $('#register-form').serialize();
        $.ajax({
            url: '/postregstration',
            type: 'POST',
            data: form,
            success: function(response) {
                console.log(response);
            }
        })
    });
});