(function(){
    angular
        .module("WebAppMaker")
        .controller("CustomController", CustomController);



    function CustomController($scope) {
        console.log("heloo from custom controll");

        $scope.onBlur = function() {
            console.log("yeeeep");
            if($('.input').val()) {
                console.log("hiii!");
            }
        };

        // var slideIndex = 1;
        // showDivs(slideIndex);
        //
        // function plusDivs(n) {
        //     showDivs(slideIndex += n);
        // }
        //
        // function currentDiv(n) {
        //     showDivs(slideIndex = n);
        // }



        // function showDivs(n) {
        //     var i;
        //     var x = document.getElementsByClassName("mySlides");
        //     var dots = document.getElementsByClassName("demo");
        //     if (n > x.length) {slideIndex = 1}
        //     if (n < 1) {slideIndex = x.length}
        //     for (i = 0; i < x.length; i++) {
        //         x[i].style.display = "none";
        //     }
        //     for (i = 0; i < dots.length; i++) {
        //         dots[i].className = dots[i].className.replace(" w3-white", "");
        //     }
        //     x[slideIndex-1].style.display = "block";
        //     dots[slideIndex-1].className += " w3-white";
        // }


        // function leaveInput(el) {
        //             if (el.value.length > 0) {
        //                 console.log('value greater than 0');
        //         if (!el.classList.contains('active')) {
        //             el.classList.add('active');
        //             console.log('add active');
        //         }
        //     } else {
        //         if (el.classList.contains('active')) {
        //             el.classList.remove('active');
        //             console.log('remove active');
        //         }
        //     }
        // }
        //
        // var inputs = document.getElementsByClassName("input");
        // for (var i = 0; i < inputs.length; i++) {
        //     var el = inputs[i];
        //     el.addEventListener("blur", function() {
        //         leaveInput(this);
        //     });
        // }
    }

})();

/**
 * Created by seanHolahan on 6/19/18.
 */