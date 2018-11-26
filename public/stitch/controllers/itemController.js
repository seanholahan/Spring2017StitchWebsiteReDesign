(function(){
    angular
        .module("WebAppMaker")
        .controller("ItemController", ItemController);






    function ItemController($scope, $http) {
        // var vm = this;
        // console.log(" item,!");
        // console.log("page loaded!",  window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
        var newItem;

        shirtName = "eek";

        var shirtSize;
        var shirtPrice;
        var shirtView1;
        var shirtView2;

        $http.get("views/shirtInventory.json").then(function(response) {
            $scope.myWelcome = response.data;
            console.log("welp",response.data);
            var itemId = window.location.href.substr(window.location.href.lastIndexOf('/') +1);
            console.log("ID", itemId);
            var item = response.data[itemId-1]
            $scope.shirtName = item.name;
            $scope.shirtSize = item.size;
            $scope.shirtPrice = item.price;
            $scope.shirtView1 = item.image1;
            $scope.shirtView2 = item.image2;
            $scope.description = item.description;
        });

        // $scope.search = function() {
        //
        //     console.log("damn");
        //     $http({method: 'JSONP', url: "views/shirtInventory.json"}).
        //     success(function(data, status) {
        //         $scope.items = data;
        //         console.log("woop", data);
        //     }).
        //     error(function(data, status) {
        //         console.log(data || "Request failed");
        //         console.log("woopaa", data);
        //     });
        //
        // };


        $.getJSON("views/shirtInventory.json",
            function (data) {
                var itemId = window.location.href.substr(window.location.href.lastIndexOf('/') +1);
                var item = data[itemId-1];
                console.log("item",item.name);
                shirtName = item.name;
                shirtSize = item.size;
                shirtPrice = item.price;
                shirtView1 = item.image1;
                shirtView2 = item.image2;
                item = item.price;

                // vm.shirt = item.name;
                console.log("got it!", item);
                newItem = item;


            });


        $scope.shirtName =  shirtName;
        console.log("scopeVal", shirtName);
        $scope.shirtName =  shirtName;
        $scope.shirtSize =  shirtSize;
        $scope.shirtPrice =  shirtPrice;
        $scope.shirtView1 =  shirtView1;
        $scope.shirtView2 =  shirtView2;



        // var itemId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        // var item = data[itemId];
        // var name = item.name;
        // console.log("nameGame", name );


        // $scope.setSelection = function(product) {
        //
        //     console.log("page load!", data[1]);
        //
        //
        //
        //     $scope.detail.show = !$scope.detail.show;
        //     $scope.detail.source = product.code + '.html'
        // }








    }

})();

/**
 * Created by seanHolahan on 6/19/18.
 */

