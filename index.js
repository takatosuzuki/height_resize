$(function(){

  function adjust(){
    var h = $(window).height();
    var side = $('.chat-side');
    var m_body = $('.chat-body');
    var m_header = $('.chat-header').outerHeight();
    var m_footer = $('.chat-footer').outerHeight();
    var re_body = $(window).height() - m_header - m_footer;
    side.css('height',h + 'px');
    m_body.css('height', re_body + 'px');    
  }

  adjust();

  $(window).on('load resize', function() {
    adjust();
  });
});
