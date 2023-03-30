$('body').css( 'font-family', "Arial, sans-serif" );

$('#nickname').html("Brandon");

$('#favorites').html("Photography, Plants and Badminton");

$('#hometown').html("Selangor, Malaysia");

$('li').each( function () {
    $(this).addClass('listitem')
            .css('color', 'red');   
});

// $('<img>').attr('src', ../images/my-PushSubscriptionOptions.png).html();
const $image = $('<img>');
$image.attr({'src': 'images/my-photo.png', 'width': '200px'});
$('ul').before($image);