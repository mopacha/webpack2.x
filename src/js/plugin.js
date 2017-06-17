(function ($) {
    const color = "blue";
    $.fn.showBlue = function() {
        this.css( "color", color );
        return this;
    };
}(jQuery));
