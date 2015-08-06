$(document).ready(function() {

    //Hide stuffs

    $('.contact').hide();

    // Contact expando/collapse

    $('.contact-toggle').click(function() {
        $('.contact').slideToggle(300);
        return false;
    });

    // Contact close

    $('.contact a.contact-close').click(function() {
        $('.contact').slideUp(300);
        return false;
    });

    
});