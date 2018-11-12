angular.module('app')
  .directive('uiChatwindow', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
      
        el.on('click', '.user-row', function(e) {
            var _this = $(this);
            $(".chaton").show() && e.preventDefault();
        });

        el.on('click', '.closewindow', function(e) {
            var _this = $(this);
            $(".chaton").hide() && e.preventDefault();
        });


        el.on('keypress', '.wid-add-task input', function(e) {
            if (e.keyCode == 13) {
                var _this = $(this);
                var msg = _this.val();
                var msg = '<li><label class="icheck icheck-white form-label "><input type="checkbox" value=""><i></i> ' + msg + '</label></li>';
                _this.parent().parent().find(".wid-all-tasks ul").append(msg);
                _this.val("");
                _this.focus();
                console.log("entered");            
            }
        });




      }

    };
  }]);