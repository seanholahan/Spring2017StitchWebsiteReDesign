    (function(){
        angular
            .module("WebAppMaker")
            .controller("ShirtController", ShirtController);

        function ShirtController($routeParams) {
            var vm = this;

            $.getJSON("views/shirtInventory.json", function(json) {
                console.log(json); // this will show the info it in firebug console
                console.log(json[0])
                // var shirts = JSON.parse(json);

            });




            var shirtId = $routeParams.sid;
            console.log("yo t dat",shirtId);
            function init() {

            }
            init();
        }

    })();



