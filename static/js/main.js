jQuery(document).ready(function() {
    jQuery('.navTrigger').click(function() {
        jQuery(this).toggleClass('active');
        console.log("Clicked menu");
        jQuery("#mainListDiv").toggleClass("show_list");
        jQuery("#mainListDiv").fadeIn();
    });
});
