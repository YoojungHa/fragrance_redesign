$('.gnb li a').each(function() {
    const pageUrl = window.location.href;
    let aHref = $(this).attr('href');

    if(pageUrl.indexOf(aHref) > -1){
        $(this).parent().addClass('on')
    }
})

function row_scroll() {
    document.querySelector(".gnb").addEventListener("wheel", (e) => {
      e.preventDefault();

      // deltaY를 사용하여 수직 휠 스크롤 값을 가져옴
      var scrollAmount = e.deltaY;

      // 현재 타겟 요소의 scrollLeft 값을 업데이트
      e.currentTarget.scrollLeft += scrollAmount;
    });
  }

  row_scroll();