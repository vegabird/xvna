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
          _this.parent().siblings( ".active" ).toggleClass('active');
          _this.parent().toggleClass('active');
          _this.next().is('ul') && _this.find(".arrow").toggleClass("open");

          if(_this.next().is('ul') && _this.find(".arrow").html() == "keyboard_arrow_right"){
              _this.find(".arrow").html("keyboard_arrow_down") &&  e.preventDefault();
          } else {
              _this.find(".arrow").html("keyboard_arrow_right") &&  e.preventDefault();
          }

          // mobile
          //_this.next().is('ul') || ( ( _window.width() < _mb ) && $('.app-aside').removeClass('show off-screen') );
        });

      }
    };
  }]);