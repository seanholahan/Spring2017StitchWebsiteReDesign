(function() {
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "views/home.html"
            })

            .when("/home", {
                redirectTo: "/"
            })

            .when("/contact", {
                templateUrl: "views/contact.html"
            })

            .when("/blog", {
                templateUrl: "views/blog.html"
            })

            .when("/archive", {
                templateUrl: "views/archive.html"
            })

            .when("/stitch1", {
                templateUrl: "item/stitch1.html"
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
                redirectTo: "/"
            });
    }
})();

