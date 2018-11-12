angular.module('app')
  .directive('uiTodowidget', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
      
        el.on('change', '.icheck input', function(e) {
            var _this = $(this);
            _this.parent().parent().toggleClass("checked") && e.preventDefault();
        });

        el.on('keypress', '.wid-add-task input', function(e) {
            if (e.keyCode == 13) {
                var _this = $(this);
                var msg = _this.val();
                var msg = '<li><label class="icheck icheck-white form-label "><input type="checkbox" value=""><i></i> ' + msg + '</label></li>';
                _this.parent().parent().find(".wid-all-tasks ul").append(msg);
                _this.val("");
                _this.focus();
            }
        });




      }

    };
  }]);