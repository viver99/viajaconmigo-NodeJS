jQuery(document).ready(function ($) {
    $('#my-slider').sliderPro({
        width: '100%',
        height: 500,
        arrows: true,
        buttons: true,
        waitForLayers: true,
        fade: true,
        autoplay: true,
        autoScaleLayers: false,
        shuffle: true
    });

    $('#small-slider').sliderPro({
        width: '100%',
        height: 150,
        arrows: false,
        buttons: false,
        waitForLayers: true,
        fade: false,
        autoplay: false,
        autoScaleLayers: false,
        shuffle: true
    });
});
