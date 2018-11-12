/*!
 * angular-ui-scrollpoint
 * https://github.com/angular-ui/ui-scrollpoint
 * Version: 1.2.1 - 2015-11-17T02:53:22.290Z
 * License: MIT
 */


(function () { 
'use strict';
/**
 * Adds a 'ui-scrollpoint' class to the element when the page scrolls past it's position.
 * @param [offset] {int} optional Y-offset to override the detected offset.
 *   Takes 300 (absolute) or -300 or +300 (relative to detected)
 */
angular.module('ui.scrollpoint', []).directive('uiScrollpoint', ['$window', function ($window) {

        function getWindowScrollTop() {
            if (angular.isDefined($window.pageYOffset)) {
                return $window.pageYOffset;
            } else {
                var iebody = (document.compatMode && document.compatMode !== 'BackCompat') ? document.documentElement : document.body;
                return iebody.scrollTop;
            }
        }
        function getWindowHeight(contentHeight) {
            return (contentHeight ? ($window.document.body.scrollHeight - $window.innerHeight) : $window.innerHeight);
        }
        return {
            require: '^?uiScrollpointTarget',
            scope: {
                uiScrollpoint: '@',
                uiScrollpointClass: '@?',
                uiScrollpointAction: '&?',
                uiScrollpointBottom: '@'
            },
            link: function (scope, elm, attrs, uiScrollpointTarget) {
                var absolute = true,
                    percent = false,
                    shift = 0,
                    past = false,
                    bottom = scope.uiScrollpointBottom,
                    fixLimit,
                    $target = uiScrollpointTarget && uiScrollpointTarget.$element || angular.element($window),
                    scrollpointClass = scope.uiScrollpointClass || 'ui-scrollpoint',
                    action = scope.uiScrollpointAction ? scope.uiScrollpointAction() : undefined;

                function setup(scrollpoint) {
                    if (!scrollpoint) {
                        absolute = false;
                    } else if (typeof (scrollpoint) === 'string') {
                        // charAt is generally faster than indexOf: http://jsperf.com/indexof-vs-charat
                        percent = (scrollpoint.charAt(scrollpoint.length-1) == '%');
                        if(percent){
                            scrollpoint = scrollpoint.substr(0, scrollpoint.length-1);
                        }
                        if (scrollpoint.charAt(0) === '-') {
                            absolute = percent;
                            shift = -parseFloat(scrollpoint.substr(1));
                        } else if (scrollpoint.charAt(0) === '+') {
                            absolute = percent;
                            shift = parseFloat(scrollpoint.substr(1));
                        } else {
                            var parsed = parseFloat(scrollpoint);
                            if (!isNaN(parsed) && isFinite(parsed)) {
                                absolute = true;
                                shift = parsed;
                            }
                        }
                    } else if (typeof (scrollpoint) === 'number') {
                        scrollpoint = scrollpoint.toString();
                        setup(scrollpoint);
                        return;
                    }
                    fixLimit = calcLimit();
                }
                setup(scope.uiScrollpoint);

                function calcLimit(){
                    var limit = absolute ? shift : calcElementTop() + shift;
                    if(percent && absolute){
                        // percent only works in absolute mode (absolute mode is forced for %'s in setup())
                        limit = shift / 100.0 * calcTargetContentHeight();
                        if(bottom){
                            limit = calcTargetContentHeight() - limit;
                        }
                    }
                    else if(bottom){
                        if(absolute){
                            limit = calcTargetContentHeight() - limit;
                        }
                        else{
                            limit = limit + elm[0].offsetHeight+1 - calcTargetHeight();
                        }
                    }
                    return limit;
                }

                function calcElementTop(){
                    if(!uiScrollpointTarget){
                        var bounds = elm[0].getBoundingClientRect();
                        return bounds.top + getWindowScrollTop();
                    }
                    return elm[0].offsetTop;
                }
                function calcTargetHeight(){
                    return ( uiScrollpointTarget ? $target[0].offsetHeight : getWindowHeight() );
                }
                function calcTargetContentHeight(){
                    return ( uiScrollpointTarget ? ($target[0].scrollHeight - $target[0].clientHeight) : getWindowHeight(true) );
                }
    
                function onScroll() {
                    var limit = calcLimit();
    
                    // if pageYOffset is defined use it, otherwise use other crap for IE
                    var offset = uiScrollpointTarget ? $target[0].scrollTop : getWindowScrollTop();
                    var distance = null;
                    
                    if ((!bottom && offset >= limit) || (bottom && offset <= limit)) {
                        if(!past){
                            distance = limit - offset;
                            past = true;
                        }
                        if(!elm.hasClass(scrollpointClass)){
                            elm.addClass(scrollpointClass);
                        }
                        fixLimit = limit;
                    } else if ((!bottom && offset < fixLimit) || (bottom && offset > fixLimit)) {
                        if(past){
                            distance = fixLimit - offset;
                            past = false;
                        }
                        if(elm.hasClass(scrollpointClass)){
                            elm.removeClass(scrollpointClass);
                        }
                    }
                    if(action && distance !== null){
                        action(elm, distance * (bottom?-1.0:1.0));
                    }
                }
    
                function reset() {
                    elm.removeClass(scrollpointClass);
                    past = bottom; // everything is flipped for scrollpoint-bottom (this would be false for normal scrollpoint)
                    fixLimit = calcLimit();
                    onScroll();
                }
    
                scope.$on('scrollpointShouldReset', reset);
    
                $target.on('scroll', onScroll);
                onScroll(); // sets the initial state
    
                // Unbind scroll event handler when directive is removed
                scope.$on('$destroy', function () {
                    $target.off('scroll', onScroll);
                });
    
                scope.$watch('uiScrollpoint', function (newScrollpoint) {
                    setup(newScrollpoint);
                    onScroll();
                });
            }
        };
    }]).directive('uiScrollpointTarget', [function () {
        return {
            controller: ['$element', function ($element) {
                this.$element = $element;
            }]
        };
    }]);

}());