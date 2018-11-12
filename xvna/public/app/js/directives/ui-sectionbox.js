angular.module('app')
    .directive('uiSectionbox', ['$timeout', function($timeout) {
        return {
            restrict: 'AC',
            link: function(scope, el, attr) {

                el.on('click', '.box header .actions i.box_toggle', function(e) {
                    var _this = $(this);
                    var txt = _this.html();
                    if(txt == "expand_more"){
                        _this.html("expand_less") && e.preventDefault();
                    } else if(txt == "expand_less"){
                        _this.html("expand_more") && e.preventDefault();
                    }
                    _this.parent().parent().parent().toggleClass("collapsed");
                });

                el.on('click', '.box header .actions i.box_close', function(e) {
                    var _this = $(this);
                    _this.parent().parent().parent().addClass("hide").hide() && e.preventDefault();
                });

                angular.element(document).ready(function() {});
            }

        };
    }]);



angular.module('app').directive('menuheight', ['$timeout', function($window) {
    return function(scope, element, attrs) {
        var w = angular.element($window);
        var changeNavHeight = function() {
          //console.log($scope.settings.menuProfile);
            if (angular.element(".page-sidebar.collapseit").length || angular.element(".page-sidebar.chat_shift").length) {
              var navHeight = angular.element("#main-content section.wrapper .content-wrapper").innerHeight() + 90;              
            } else {
              var navHeight = $(window).innerHeight() - 60;
              //console.log("hi1 "+navHeight);
            }
            //console.log("hi "+navHeight);
            element.height(navHeight);
        };
        w.bind('resize', function() {
            changeNavHeight();
        });
        changeNavHeight();
    }
}]);

angular.module('app')
    .directive('searchgroup', ['$timeout', function($timeout) {
        return {
            restrict: 'AC',
            link: function(scope, el, attr) {

                el.on('focus', 'input.form-control', function(e) {
                    var _this = $(this);
                    _this.parent().parent().parent().addClass("focus");
                });
                el.on('blur', 'input.form-control', function(e) {
                    var _this = $(this);
                    _this.parent().parent().parent().removeClass("focus");
                });

                el.on('click', '.input-focus', function(e) {
                    var _this = $(this);
                    _this.parent().find(".form-control").focus();
                    _this.parent().parent().addClass("focus");
                });


            }

        };
    }]);


angular.module('app')
    .directive('inputgroup', ['$timeout', function($timeout) {
        return {
            restrict: 'AC',
            link: function(scope, el, attr) {

                el.on('focus', 'input.form-control', function(e) {
                    var _this = $(this);
                    _this.parent().addClass("focus");
                });
                el.on('blur', 'input.form-control', function(e) {
                    var _this = $(this);
                    _this.parent().removeClass("focus");
                });

                el.on('click', '.input-group-addon', function(e) {
                    var _this = $(this);
                    _this.parent().find(".form-control").focus();
                    _this.parent().addClass("focus");
                });


            }

        };
    }]);


angular.module('app')
    .directive('chatapifocus', ['$timeout', function($timeout) {
        return {
            restrict: 'AC',
            link: function(scope, el, attr) {

                el.on('focus', 'input.form-control', function(e) {
                    var _this = $(this);
                    _this.parent().find("i").addClass("primary");
                });
                el.on('blur', 'input.form-control', function(e) {
                    var _this = $(this);
                    _this.parent().find("i").removeClass("primary");
                });

                el.on('click', 'i', function(e) {
                    var _this = $(this);
                    _this.parent().find(".form-control").focus();
                    _this.addClass("primary");
                });


            }

        };
    }]);


angular.module('app')
    .directive('verticalrhythm', ['$timeout', function($timeout) {
        return {
            restrict: 'AC',
            link: function(scope, el, attr) {

                el.on('click', 'i', function(e) {
                    var _this = $(this);
                    _this.parent().toggleClass("vertical-test-on");
                });
            }

        };
    }]);

