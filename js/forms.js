$(function(){
 //when click on i agree button (agree terms) show form
  $('.i_agree_terms').on('click', function(){
    sessionStorage.setItem('iAgreeTerms', 'i agree');
    $('.terms_terms').hide();
    $('.ready_and_download').css('display','flex');
  });

  //check if terms is agree => dont show it again
  if(sessionStorage.getItem('iAgreeTerms') === 'i agree'){
    $('.terms_terms').hide();
    $('.ready_and_download').css('display','flex');
  }

  //check if form fields are not empty enable submit button
  $('.form_input').on('input', function(){
    //get fields values
    var emailTo   = $('.email_to').val();
    var yourEmail = $('.your_email').val();
    var message   = $('.message').val();
    var files     = $('.files').val()
    //check on values
    if(emailTo !== '' && yourEmail !== '' && message !== '' && files !== ''){
      $('.transfer_files_btn').removeClass('disabled');
    }
  })
  //when click on show more options button display the hided section in form
  $('.form_options').on('click', function(){
    //show hided section
    $('.hided_inputs').toggleClass('d-block');
    //if hided inputs is not hide show scroll bar 
    if($('.hided_inputs').hasClass('d-block')){
      $('.form_inputs_container').css('overflow-y', 'scroll')
      $('.form_inputs_container').animate({scrollTop: $('.form_inputs_container').height()})
    }else{
      $('.form_inputs_container').css('overflow-y', 'hidden')
    }
  })
  
  //hide scroll bar when focus on form fields
  $('.email_to').on('focus', function(){
    $('.hided_inputs').removeClass('d-block');
    $('.form_inputs_container').css('overflow-y', 'hidden')
  })
  $('.your_email').on('focus', function(){
    $('.hided_inputs').removeClass('d-block');
    $('.form_inputs_container').css('overflow-y', 'hidden')
  })
  $('.message').on('focus', function(){
    $('.hided_inputs').removeClass('d-block');
    $('.form_inputs_container').css('overflow-y', 'hidden')
  })

  //add color blue on checked email transfer choise
  $('.transfer_email_checked').on('focus', function(){
      $('.label_send').css('color', '#0d6efd')
      $('.label_getlink').css('color', '#000')
  })
  $('.transfer_link_checked').on('focus', function(){
      $('.label_getlink').css('color', '#0d6efd')
      $('.label_send').css('color', '#000')
  })

//show alerts
  //show create an account alert when focus on your email input
  $('.your_email').on('focus', function(){
    $('.create_account').fadeIn(1000).delay(5000).fadeOut(1000)
  })
  //show wrong email alert when email entered is incorrect
  $('.email_to').on('blur', function(){
    var inputValue = $(this).val(); //get email value
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; //email reg ex
    if(!emailReg.test(inputValue)){
      $('.wrong_email').fadeIn(1000).delay(5000).fadeOut(1000)
    }
  })


  //show ready and download form when click on agree terms
  $('.i_agree_terms').on('click', function(){
    $('.terms_terms').fadeOut()
    $('.ready_and_download').css('display','flex'); //show ready and download form
  })
  //hide ready and download when click on download button
  $('.ready_download').on('click', function(){
    $('.ready_and_download').fadeOut()
    $('.download_started').css('display','flex'); //show download started form
    // $('.add_files_form').css('display','flex');
  })
  //hide download started and show download files form
  $('.send_afile').on('click', function(){
    $('.download_started').fadeOut();
    $('.continue_download').css('display','flex');  
  })
  //when click on Cotinue button (Continue to send file) => show add files form 
  $('.continue_to_send').on('click', function(){
    $('.continue_download').hide();
    $('.add_files_form').fadeIn();
  })
  //form__ preventDefault form submit and display the download form
  $('.add_files_form').on('submit', function(e){
    e.preventDefault();
    $(this).fadeOut();
    $('.download_started').show();
    
  })
  
  //back icon on click back to ready and download form
  $('.back_icon').on('click', function(){
    $('.download_started').fadeOut() 
    $('.add_files_form').css('display','flex');
  })
  
})