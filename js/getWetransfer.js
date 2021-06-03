$(function(){
  //close get wetransfer page when click on (x) 
  $('.close_getTr_page').on('click',function(){
    $('.get_wetransf').animate({width:0}) //minimize get wetransfer page width to 0 px
    $('.the_link').show()     //show the button "get wetransfer pro"
    $('.terms_part').css('opacity',1)
    $('.image_block').show()
    $('.home_page').animate({width:'100%'});
  })

  //when click on get weTransfer pro button move to (get wetransfer page 
  $('.the_link').on('click',function(){
    $('.home_page').animate({width:100}); //minimize home paage height
    $('.the_link').hide()
    $('.terms_part').css('opacity',0)
    $('.image_block').fadeOut()
    $('.get_wetransf').show()
    $('.get_wetransf').animate({width:'100%'})
  })
})