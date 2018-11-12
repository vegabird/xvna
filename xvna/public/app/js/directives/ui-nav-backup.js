angular.module('app')
  .directive('uiNav', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {

        var _window = $(window), 
        _mb = 768, 
        wrap = $('.app-aside'), 
        next, 
        backdrop = '.dropdown-backdrop';
        // unfolded
        el.on('click', 'a', function(e) {
//          console.log("hi");
          //next && next.trigger('mouseleave.wraplist');
          var _this = $(this);
          _this.parent().siblings( ".active" ).toggleClass('active open');
          _this.parent().toggleClass('active open')
          _this.next().is('ul') && _this.find(".arrow").toggleClass("open") &&  e.preventDefault();
          // mobile
          _this.next().is('ul') || ( ( _window.width() < _mb ) && $('.app-aside').removeClass('show off-screen') );
        });

      }
    };
  }]);