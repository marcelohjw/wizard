$(document).ready(function(){
    console.log("charged");

    $(document).on("submit", "register-form", function(e) {
        e.preventDefault;
        console.log("Submitted Wizard.")
    });
});