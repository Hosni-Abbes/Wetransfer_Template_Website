$(function(){
  //change imaage aand background every 15s
  var arr = [
    'https://backgrounds.wetransfer.net/cp_iwemyr/iwemyr1_t1_v1/assets/images/img1.png',
    'https://backgrounds.wetransfer.net/cp_joplin/joplin1_t1_v1/assets/images/img1.png',
    'https://backgrounds.wetransfer.net/cp_timfranco/timfranco1_t1_v1/assets/images/img1.png'
  ]
  var bg = ['#ffcdd2', '#e1bee7', '#9e9e9e']
  setInterval(function(){
    var random = Math.floor(Math.random()*4)
    $('.the_img_home').attr('src', arr[random]); //change the image
    $('.home_page').css('background', bg[random]) //change background
  }, 15000)
  
})