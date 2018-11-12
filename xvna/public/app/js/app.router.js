'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/access/login');
                $stateProvider


                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('access.login', {
                        url: '/login',
                        templateUrl: 'partials/ui-login.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/login.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })



                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })
                    .state('app.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'partials/app_dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                            function() {
                                                return $ocLazyLoad.load('js/controllers/dashboard.js');
                                            }
                                        )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                            }
                                          )/*.then(
                                          function(){
                                                return $ocLazyLoad.load('js/directives/ui-todowidget.js');
                                         }
                                      )*/
                                    ;
                                }
                            ]
                        }
                    })

                    .state('app.a1_injection', {
                        url: '/a1_injection',
                        templateUrl: 'partials/a1_injection.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/a1_injection.js']);
                                }
                            ]
                        }
                    })
                    .state('app.a1_injection_sql', {
                        url: '/a1_injection_sql',
                        templateUrl: 'partials/a1_injection_sql.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/a1_injection_sql.js']);
                                }
                            ]
                        }
                    })
                 .state('app.eval', {
                        url: '/eval',
                        templateUrl: 'partials/eval.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/eval.js']);
                                }
                            ]
                        }
                    })

                
                .state('app.a3_sensitive', {
                        url: '/a3_sensitive',
                        templateUrl: 'partials/a3_sensitive.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/a3_sensitive.js']);
                                }
                            ]
                        }
                    })
                .state('app.a3_sensitive_header', {
                        url: '/a3_sensitive_header',
                        templateUrl: 'partials/a3_sensitive_header.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/a3_sensitive_header.js']);
                                }
                            ]
                        }
                    })
                    .state('app.a4_xxe', {
                        url: '/a4_xxe',
                        templateUrl: 'partials/a4_xxe.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/a4_xxe.js']);
                                }
                            ]
                        }
                    })
                    .state('app.a5_insecure_dor', {
                        url: '/a5_insecure_dor',
                        templateUrl: 'partials/a5_insecure_dor.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/a5_insecure_dor.js']);
                                }
                            ]
                        }
                    })
                   
                .state('app.a6_misconfig', {
                        url: '/a6_misconfig',
                        templateUrl: 'partials/a6_misconfig.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/a6_misconfig.js']);
                                }
                            ]
                        }
                    })

                    .state('app.a7_xss_reflected', {
                        url: '/a7_xss_reflected',
                        templateUrl: 'partials/a7_xss_reflected.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/a7_xss_reflected.js']);
                                }
                            ]
                        }
                    })

                .state('app.a8_insecure_deserialization', {
					url: '/a8_insecure_deserialization'
					, templateUrl: 'partials/a8_insecure_deserialization.html'
					, resolve: {
						deps: ['$ocLazyLoad'
                                
							, function ($ocLazyLoad) {
								return $ocLazyLoad.load(['js/controllers/a8_insecure_deserialization.js']);
                                }
                            ]
					}
				})
                  

                    

                   
            }
        ]
    );
