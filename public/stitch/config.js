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
                templateUrl: "views/home.html"
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
                templateUrl: "views/custom.html"
            })

            .when("/custom1", {
                templateUrl: "views/custom1.html"
            })

            .when("/custom2", {
                templateUrl: "views/custom2.html"
            })

            .when("/custom3", {
                templateUrl: "views/custom3.html"
            })

            .when("/custom4", {
                templateUrl: "views/custom4.html"
            })


            .when("/blog", {
                templateUrl: "views/blog.html"
            })

            .when("/custom5", {
                templateUrl: "views/custom5.html"
            })

            .when("/archive", {
                templateUrl: "views/archive.html"
            })

            .when("/lookBook", {
                templateUrl: "views/lookBook.html"
            })

            .when("/profile", {
            templateUrl: "views/user/profile.html"
        })

            .when("/profile2", {
                templateUrl: "views/user/profile2.html"
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
                redirectTo: "/home"
            });
    }
})();

