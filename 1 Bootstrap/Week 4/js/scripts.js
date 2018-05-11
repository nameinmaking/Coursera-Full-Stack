$(document).ready(function()
        {
            $('#myCarousel').carousel({interval: 2000});
            $('#carouselButton').click(function()
            {
                if ($('#carouselButton').children('span').hasClass('fa-pause'))
                {
                    $('#myCarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause');
                    $('#carouselButton').children('span').addClass('fa-play');
                }
                else if ($('#carouselButton').children('span').hasClass('fa-play'))
                {
                    $('#myCarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play');
                    $('#carouselButton').children('span').addClass('fa-pause');
                }
            });

            // Reservation Modal JQuery code
            $('#reservationButton').click(function(){
              $('#reserveTableModal').modal('show');
            });
            $('#reservationCancelButton').click(function(){
              $('#reserveTableModal').modal('hide');
            });
            $('#reservationCloseButton').click(function(){
              $('#reserveTableModal').modal('hide');
            });

            // Login Modal JQuery code
            $('#loginButton').click(function() {
              $('#loginModal').modal('show');
            });
            $('#loginCancelButton').click(function() {
              $('#loginModal').modal('hide');
            });
            $('#loginCloseButton').click(function() {
              $('#loginModal').modal('hide');
            });
        })