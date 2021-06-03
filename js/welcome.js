$(function(){
  //on click on (x) add string 'hide to sessionStorage
  $('.notice_close').on('click', function(){
    var hideMsg = 'hide';
    sessionStorage.setItem('hide', hideMsg);
    $('.notice_msg').fadeOut();
  });
  //wend document reaady check if notice msg is located in session storage. if yes and hide it else display it flex
  if(sessionStorage.getItem('hide') === 'hide'){
    $('.notice_msg').hide();
  }else{
    $('.notice_msg').css('display','flex');
  }
//on click on welcome page buttons (cookies btns) ..
  //when click on accept cookies btn
  $('.accept_cookies').on('click', function(){
    //create session cookie
    Cookies.set('isAccepted', 'accept', { expires: 7 });
    //hide welcome page
    $('.welcome_page').hide();
    //hide terms part overlay and give terms part an opacity of 1
    $('.terms_part_overlay').hide();
    $('.home_page').show()
    $('.terms_part').css('opacity',1)
  })
  //when click on manage cookies btn
  $('.manage_cookies').on('click', function(){
    $('.first_view').hide();
    $('.second_view').css('display','flex');
  })
  //when click on no thanks cookie's btn
  $('.refuse_cookies').on('click', function(){
    sessionStorage.setItem('noCookie', 'noCookie');
    //hide welcome page
    $('.welcome_page').hide();
    //hide terms part overlay and give terms part an opacity of 1
    $('.terms_part_overlay').hide();
    $('.home_page').show()
    $('.terms_part').css('opacity',1)
  })
  //---
  if(sessionStorage.getItem('noCookie') === 'noCookie'){
    $('.welcome_page').fadeOut();
    $('.terms_part_overlay').fadeOut();
    $('.home_page').show()
    $('.terms_part').css('opacity',1)
    
  }

  //check cookies
  //check if cookies is accepted by the user, if accepted dont show home page
  if(Cookies.get('isAccepted') === 'accept' ){
    $('.welcome_page').hide();
    $('.terms_part_overlay').hide();
    $('.home_page').show()
    $('.terms_part').css('opacity',1)
  }

}) 