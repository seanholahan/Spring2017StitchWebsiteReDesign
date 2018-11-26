(function(){
    angular
        .module("WebAppMaker")
        .controller("HomeController", HomeController);



    function HomeController($scope, $http) {
        var vm = this;
        console.log(" eeeks ksdfs !");
        console.log("page loaded!",  window.location.href.substr(window.location.href.lastIndexOf('/') + 1));




        var inventory;


        $http.get("views/shirtInventory.json").then(function(response) {
            $scope.shirtInventory = response.data;
        });

        // $.getJSON("views/shirtInventory.json",
        //
        //     function (data) {
        //         inventory = data;
        //          console.log("yo t dat",data);
        //         $scope.shirtInventory = data;
        //         console.log("data", data[1]);
        //     });
        //
        // inventory = $scope.shirtInventory;



        var shirtId = $scope.sid;

        function init() {

        }
        init();
    }

})();

/**
 * Created by seanHolahan on 6/19/18.
 */
