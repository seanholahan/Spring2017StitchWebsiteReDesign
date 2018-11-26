(function(){
        angular
            .module("WebAppMaker")
            .controller("ShirtController", ShirtController);

        console.log("page loaded!",  window.location.href.substr(window.location.href.lastIndexOf('/') + 1));

        function ShirtController($scope) {
            var vm = this;



             $.getJSON("views/shirtInventory.json",

                function (data) {
                    $scope.shirtInventory = data;
                    console.log("got it!", data);
                })


            $scope.setSelection = function(product) {

                    console.log("page load!", window.location.href);



                $scope.detail.show = !$scope.detail.show;
                $scope.detail.source = product.code + '.html'
            }









        $scope.records = [
                "Alfreds Futterkiste",
                "Berglunds snabbköp",
                "Centro comercial Moctezuma",
                "Ernst Handel"
            ];


            var shirtId = $scope.sid;
            console.log("yo t dat",shirtId);
            function init() {

            }
            init();
        }

    })();






