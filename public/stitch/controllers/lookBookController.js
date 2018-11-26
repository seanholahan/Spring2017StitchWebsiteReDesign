

    (function(){
        angular
            .module("WebAppMaker")
            .controller("LookBookController", LookBookController);



        function LookBookController($scope, $http) {
            var vm = this;

            console.log("slideControlled");


            // $scope.plusDivs = function(n) {
            //
            //     console.log("active");
            //     $scope.showDivs(slideIndex += n);
            // }
            // $scope.currentDiv = function(n){
            //     $scope.showDivs(slideIndex = n);
            //     console.log("activey");
            // }
            //
            // $scope.showDivs = function(n){
            //     console.log("activey");
            //     var i;
            //     var x = document.getElementsByClassName("mySlides");
            //     var dots = document.getElementsByClassName("demo");
            //     if (n > x.length) {slideIndex = 1}
            //     if (n < 1) {slideIndex = x.length}
            //     for (i = 0; i < x.length; i++) {
            //         x[i].style.display = "none";
            //     }
            //     for (i = 0; i < dots.length; i++) {
            //         dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
            //     }
            //     x[slideIndex-1].style.display = "block";
            //     dots[slideIndex-1].className += " w3-opacity-off";
            // }
            //
            // var slideIndex = 1;
            // $scope.showDivs(slideIndex);


            console.log("yo");
            $('.slider').each(function() {
                var $this = $(this);
                var $group = $this.find('.slide_group');
                var $slides = $this.find('.slide');
                var bulletArray = [];
                var currentIndex = 0;
                var timeout;
                function move(newIndex) {
                    var animateLeft, slideLeft;
                    $scope.advance();
                    if ($group.is(':animated') || currentIndex === newIndex) {
                        return;
                    }
                    bulletArray[currentIndex].removeClass('active');
                    bulletArray[newIndex].addClass('active');
                    if (newIndex > currentIndex) {
                        slideLeft = '100%';
                        animateLeft = '-100%';
                    } else {
                        slideLeft = '-100%';
                        animateLeft = '100%';
                    }
                    $slides.eq(newIndex).css({
                        display: 'block',
                        left: slideLeft
                    });
                    $group.animate({
                        left: animateLeft
                    }, function() {
                        $slides.eq(currentIndex).css({
                            display: 'none'
                        });
                        $slides.eq(newIndex).css({
                            left: 0
                        });
                        $group.css({
                            left: 0
                        });
                        currentIndex = newIndex;
                    });
                }
                 $scope.advance = function() {
                    clearTimeout(timeout);
                    timeout = setTimeout(function() {
                        if (currentIndex < ($slides.length - 1)) {
                            move(currentIndex + 1);
                        } else {
                            move(0);
                        }
                    }, 4000);
                }
                $scope.next =  function() {
                    if (currentIndex < ($slides.length - 1)) {
                        move(currentIndex + 1);
                    } else {
                        move(0);
                    }
                };

                $scope.previous =  function() {
                    if (currentIndex !== 0) {
                        move(currentIndex - 1);
                    } else {
                        move(3);
                    }
                };
                $.each($slides, function(index) {
                    var $button = $('<div class="slide_btn"></div>');
                    if (index === currentIndex) {
                        $button.addClass('active');
                    }
                    $button.on('click', function() {
                        move(index);
                    }).appendTo('.slide_buttons');
                    bulletArray.push($button);
                });
                $scope.advance();
            });





        }

    })();


