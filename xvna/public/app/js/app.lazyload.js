// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '../bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      plot:           [   '../bower_components/flot/jquery.flot.js',
                          '../bower_components/flot/jquery.flot.pie.js', 
                          '../bower_components/flot/jquery.flot.resize.js',
                          '../bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
                          '../bower_components/flot.orderbars/js/jquery.flot.orderBars.js',
                          '../bower_components/flot-spline/js/jquery.flot.spline.js'],
      knob:           [   '../bower_components/jquery-knob/dist/jquery.knob.min.js', 'js/jq/chart-knobs.js'],
      isotobe:          [  'js/uport_isotobe.js',
                            'js/uport_isotobe_script.js'],
      dataTable:      [   '../bower_components/datatables/media/js/jquery.dataTables.min.js',
                          '../bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '../bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      footable:       [ '../bower_components/footable/dist/footable.all.min.js',
                          '../bower_components/footable/css/footable.core.css'],
      fullcalendar:   [   '../bower_components/moment/moment.js',
                          '../bower_components/fullcalendar/dist/fullcalendar.min.js',
                          '../bower_components/fullcalendar/dist/fullcalendar.css',],
      vectorMap:      [   '../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '../bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '../bower_components/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      sortable:       [   '../bower_components/html5sortable/jquery.sortable.js'],
      nestable:       [   '../bower_components/nestable/jquery.nestable.js'],
      moment:         [   '../bower_components/moment/moment.js'],
      daterangepicker:[   '../bower_components/moment/moment.js',
                          '../bower_components/bootstrap-daterangepicker/daterangepicker.js',
                          '../bower_components/bootstrap-daterangepicker/daterangepicker.css'],
      tagsinput:      [ '../bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '../bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css'],
      jqueryui:        [  '../bower_components/jquery-ui/ui/minified/jquery-ui.min.js',
                          '../bower_components/jquery-ui/themes/smoothness/jquery-ui.css',
                          'js/controllers/ui.slider.js'],
      TouchSpin:      [   '../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          '../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      chosen:         [   '../bower_components/chosen/chosen.jquery.min.js',
                          '../bower_components/bootstrap-chosen/bootstrap-chosen.css'],
      wysiwyg:        [   '../bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '../bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      sparkline:       [   '../bower_components/jquery.sparkline/dist/jquery.sparkline.retina.js']
    }
  )

  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngMorris',
                  files: [
                      '../bower_components/raphael/raphael.js',
                      '../bower_components/mocha/mocha.js',
                      '../bower_components/morrisjs/morris.js',
                      '../bower_components/ngmorris/src/ngMorris-full.js',
                      '../bower_components/morrisjs/morris.css'
                  ]
              },
              {
                  name:'cgNotify',
                  files: [
                      '../bower_components/angular-notify/dist/angular-notify.min.js',
                      '../bower_components/angular-notify/dist/angular-notify.min.css'
                  ]
              },
              {
                  name:'countTo',
                  files: [
                      '../bower_components/angular-count-to/build/angular-count-to.min.js'
                  ]
              },
                                      
              {
                  name:'angularFileUpload',
                  files: [
                    '../bower_components/angular-file-upload/dist/angular-file-upload.min.js'
                  ]
              },
              /*{
                  name: 'textAngular',
                  series: true,
                  files: [
                      '../bower_components/textAngular/dist/textAngular.css',
                      '../bower_components/textAngular/dist/textAngular-rangy.min.js',
                      '../bower_components/textAngular/dist/textAngular.min.js'
                  ]
              },*/
              {
                  name: 'vr.directives.slider',
                  files: [
                      '../bower_components/venturocket-angular-slider/build/angular-slider.min.js',
                      '../bower_components/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'ngGrid',
                  files: [
                      '../bower_components/ng-grid/build/ng-grid.min.js',
                      '../bower_components/ng-grid/ng-grid.min.css',
                      '../bower_components/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      '../bower_components/angular-ui-grid/ui-grid.min.js',
                      '../bower_components/angular-ui-grid/ui-grid.min.css'
                  ]
              },
              {
                  name: 'chart.js',
                  files: [
                      '../bower_components/angular-chart.js/dist/angular-chart.js',
                      '../bower_components/angular-chart.js/dist/angular-chart.css'
                  ]

              },
              {
                  name: 'angular-rickshaw',
                  files: [
                    '../bower_components/rickshaw/rickshaw.min.css',
                    '../bower_components/rickshaw/rickshaw.min.js',
                    '../bower_components/angular-rickshaw/rickshaw.js'
                  ]

              },
              {
                  name: 'xeditable',
                  files: [
                      '../bower_components/angular-xeditable/dist/js/xeditable.min.js',
                      '../bower_components/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['../bower_components/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      '../bower_components/ngImgCrop/compile/minified/ng-img-crop.js',
                      '../bower_components/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'colorpicker.module',
                  files: [
                      '../bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
                      '../bower_components/angular-bootstrap-colorpicker/css/colorpicker.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      '../bower_components/angular-smart-table/dist/smart-table.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      '../bower_components/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      '../bower_components/videogular-controls/vg-controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      '../bower_components/videogular-buffering/vg-buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      '../bower_components/videogular-overlay-play/vg-overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      '../bower_components/videogular-poster/vg-poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      '../bower_components/videogular-ima-ads/vg-ima-ads.min.js'
                  ]
              }
          ]
      });
  }])
;
