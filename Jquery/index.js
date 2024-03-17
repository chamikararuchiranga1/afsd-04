// $(document).ready(function(){
//     console.log('====================================');
//     console.log("run Script");
//     console.log('====================================');
// })

$('#click-hide').click(function () {
    $('.view').hide();
})

$('#click-show').click(function () {
    $('.view').show();
})

// singale page 

$(document).ready(function() {
    $('#homePage').show()
    $('#aboutPage, #contactPage, #detailsPage').hide();
})

$('.nav-home').click(function() {
    $('#homePage').show()
    $('#aboutPage, #contactPage, #detailsPage').hide();
})

$('.nav-about').click(function() {
    $('#aboutPage').show()
    $('#homePage, #contactPage, #detailsPage').hide();
})

$('.nav-contact').click(function() {
    $('#contactPage').show()
    $('#homePage, #aboutPage, #detailsPage').hide();
})

$('.nav-details').click(function() {
    $('#detailsPage').show()
    $('#homePage, #contactPage, #aboutPage').hide();
})