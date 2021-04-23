$(document).ready(function(){
    console.log("page loaded");

    $(document).on("submit", "#register-form", function(e) {
        e.preventDefault();
        console.log("Submitted Wizard");
    });
});