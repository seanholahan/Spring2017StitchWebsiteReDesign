(function() {
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "views/landing.html"
            })

            .when("/home", {
                templateUrl: "views/home.html",
                controller: "HomeController",
                controllerAs: "model"
            })

            .when("/contact", {
                templateUrl: "views/contact.html"
            })

            .when("/landing", {
                redirectTo: "/"
            })


            .when("/contactStyle", {
                templateUrl: "views/contactStyle.html"
            })

            .when("/custom", {
                templateUrl: "views/custom.html",
                controller: "CustomController"
            })


            .when("/custom5", {
                templateUrl: "views/custom5.html"
            })

            .when("/archive", {
                templateUrl: "views/archive.html"
            })

            .when("/lookBook", {
                templateUrl: "views/lookBook.html",
                controller: "LookBookController",
                controllerAs: "model"
            })

            .when("/profile", {
            templateUrl: "views/user/profile.html"
        })

            .when("/profile2", {
                templateUrl: "views/user/profile2.html"
            })

            .when("/stitch/:sid", {
                templateUrl: "views/item.html",
                controller: "ItemController",
                controllerAs: "model"

            })

            .when("/stitch7", {
                templateUrl: "item/stitch7.html"
            })

            .when("/stitch10", {
                templateUrl: "item/stitch10.html"
            })

            .when("/stitch11", {
                templateUrl: "item/stitch11.html"
            })

            .when("/stitch13", {
                templateUrl: "item/stitch13.html"
            })

            .when("/stitch14", {
            templateUrl: "item/stitch14.html"
             })

            .when("/stitch16", {
                templateUrl: "item/stitch16.html"
            })

            .when("/stitch17", {
                templateUrl: "item/stitch17.html"
            })

            .when("/#carousel-example-generic", {
                templateUrl: "item/stitch1.html"
            })

            .otherwise ({
                redirectTo: "/home"
            });
    }
})();

