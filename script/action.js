$('.gnb li a').each(function() {
    const pageUrl = window.location.href;
    let aHref = $(this).attr('href');

    if(pageUrl.indexOf(aHref) > -1){
        $(this).parent().addClass('on')
    }
})