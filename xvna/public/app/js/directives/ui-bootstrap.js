/* ------------------------------
   ui.bootstrap tooltip directive
--------------------------------*/

angular.module('app')
  .directive('uiTooltip', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {

        el.on('mouseenter', '[tooltip]', function(e) {
          //console.log("tooltip triggered");
          var _this = $(this);
          var id = angular.element(_this).attr('tooltip-class');
          $(this).next(".tooltip").addClass(id);
        });

      }
    };
  }]);



  /* ------------------------------
   ui.bootstrap popover directive
--------------------------------*/

angular.module('app')
  .directive('uiPopover', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {

        el.on('mouseenter', '[popover]', function(e) {
          //console.log("tooltip triggered");
          var _this = $(this);
          var id = angular.element(_this).attr('popover-class');
          $(this).next(".popover").addClass(id);
        });

      }
    };
  }]);


  /* ------------------------------
   ui.bootstrap breadcrumb auto hidden directive
--------------------------------*/

angular.module('app')
  .directive('uiBreadcrumbAutoHidden', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {

        el.on('mouseenter', '.breadcrumb.auto-hidden a', function(e) {
          var _this = $(this);
          $(this).removeClass("collapsed");
        });

        el.on('mouseleave', '.breadcrumb.auto-hidden a', function(e) {
          var _this = $(this);
          $(this).addClass("collapsed");
        });

      }
    };
  }]);


