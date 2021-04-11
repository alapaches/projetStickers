$(function() {
    $(".img-sticker").each(function() {
        var nom = $(this).data("nom");
        $(this).popover({
            container: "body",
            trigger: "hover",
            placement: "top",
            html: true,
            content: nom
        });
    })
    
})