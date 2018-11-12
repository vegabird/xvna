/*global describe, beforeEach, afterAll, module, inject, it, spyOn, expect, $, angular */
describe('uiScrollpoint', function () {
  'use strict';

  var scope, $compile, $window;
  beforeEach(module('ui.scrollpoint'));
  beforeEach(inject(function (_$rootScope_, _$compile_, _$window_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;
    $window = _$window_;
  }));

  describe('compiling this directive', function () {
    it('should bind and unbind to window "scroll" event in the absence of a uiScrollpointTarget', function () {
      spyOn($.fn, 'on').and.callThrough();
      $compile('<div ui-scrollpoint="100"></div>')(scope);
      expect($.fn.on).toHaveBeenCalled();
      expect($.fn.on.calls.mostRecent().args[0]).toBe('scroll');
      expect($._data($window, 'events')).toBeDefined();
      expect($._data($window, 'events').scroll.length).toBe(1);
      // Event must un-bind to prevent memory leaks
      spyOn($.fn, 'off').and.callThrough();
      scope.$destroy();
      expect($.fn.off).toHaveBeenCalled();
      expect($.fn.off.calls.mostRecent().args[0]).toBe('scroll');
      expect($._data($window, 'events')).toBeUndefined();
    });
    it('should bind and unbind to a parent uiScrollpointTarget element "scroll" event', function() {
      var $elm = $compile('<div ui-scrollpoint-target><div ui-scrollpoint="100"></div></div>')(scope);
      expect($._data($window, 'events')).toBeUndefined();
      expect($._data($elm[0], 'events')).toBeDefined();
      expect($._data($elm[0], 'events').scroll.length).toBe(1);
      // Event must un-bind to prevent memory leaks
      scope.$destroy();
      expect($._data($elm[0], 'events')).toBeUndefined();
    });
  });
  describe('scrolling the window', function () {
    it('should add the ui-scrollpoint class if the offset is greater than specified', function () {
      var element = $compile('<div ui-scrollpoint="-100"></div>')(scope);
      angular.element($window).trigger('scroll');
      expect(element.hasClass('ui-scrollpoint')).toBe(true);
    });
    it('should remove the ui-scrollpoint class if the offset is less than specified (using absolute coord)', function () {
      var element = $compile('<div ui-scrollpoint="100" class="ui-scrollpoint"></div>')(scope);
      angular.element($window).trigger('scroll');
      expect(element.hasClass('ui-scrollpoint')).toBe(false);

    });
    it('should remove the ui-scrollpoint class if the offset is less than specified (using relative coord)', function () {
      var element = $compile('<div ui-scrollpoint="+100" class="ui-scrollpoint"></div>')(scope);
      angular.element($window).trigger('scroll');
      expect(element.hasClass('ui-scrollpoint')).toBe(false);
    });
  });
  describe('scrolling the target', function() {
    var target, element;
    beforeEach(function() {
      target = $compile('<div style="height:100px;overflow:auto;" ui-scrollpoint-target><div ui-scrollpoint="100"></div><div style="height: 400px;"></div></div>')(scope);
      element = target.find('[ui-scrollpoint]');
      target.appendTo('body');
    });
    afterEach(function() {
      target.remove();
    });
    it('should get scroll position from target', function() {
      target[0].scrollTop = 150;
      //force firing scroll event
      target.trigger('scroll');
      expect(element.hasClass('ui-scrollpoint')).toBe(true);
    });
  });
  describe('using a scope variable', function() {
    var element;
    beforeEach(function() {
       element = $compile('<div ui-scrollpoint="{{ scrollpoint }}" class="ui-scrollpoint"></div>')(scope);
    });
    afterAll(function() {
      scope.scrollpoint = undefined;
    });
    it('should add/remove the ui-scrollpoint class depending on the value of the scrollpoint variable', function () {
      // number (absolute)
      scope.scrollpoint = 100;
      scope.$digest();
      expect(element.hasClass('ui-scrollpoint')).toBe(false);
      expect(element.attr('ui-scrollpoint')).toBe('100');
      
      // string (absolute)
      scope.scrollpoint = "100";
      scope.$digest();
      expect(element.hasClass('ui-scrollpoint')).toBe(false);
      expect(element.attr('ui-scrollpoint')).toBe('100');
      
      // string (plus relative)
      scope.scrollpoint = "+100";
      scope.$digest();
      expect(element.hasClass('ui-scrollpoint')).toBe(false);
      expect(element.attr('ui-scrollpoint')).toBe('+100');
      
      // number (minus relative)
      scope.scrollpoint = -100;
      scope.$digest();
      expect(element.hasClass('ui-scrollpoint')).toBe(true);
      expect(element.attr('ui-scrollpoint')).toBe('-100');
      
      // string (minus relative)
      scope.scrollpoint = "-100";
      scope.$digest();
      expect(element.hasClass('ui-scrollpoint')).toBe(true);
      expect(element.attr('ui-scrollpoint')).toBe('-100');
    });
  });
});
