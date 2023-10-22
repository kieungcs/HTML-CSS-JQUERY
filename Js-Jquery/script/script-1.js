// JavaScript Document
function tong()
{
	var s1, s2;
	s1 = document.getElementById('num1').value;
	s2 = document.getElementById('num2').value;
	s1 = parseInt(s1, 10);
	s2 = parseInt(s2, 10);
	
	var result = s1 + s2;
	if(s1 == null || s2 == null)
		alert("Không được để trống")
	else
		alert(s1 + " + " + s2 + " = " + result)
}

$('#btn-login').click(function(){
    var ten = $('#name').val();
    alert("Xin chào " + ten);
})

$(window).scroll(function(){
    if($(window).scrollTop() > 100)
        {
            $('#nav').removeClass('nav-1');
            $('#nav').addClass('nav-2');
            $('#btn-totop').css('display', 'block')
        }
    else
        {
            $('#nav').removeClass('nav-2');
            $('#nav').addClass('nav-1');
            $('#btn-totop').css('display', 'none')
        }
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});