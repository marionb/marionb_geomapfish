/**
 * Application entry point.
 *
 * This file defines the "geomapfish_mobile" Closure namespace, which is be used as the
 * Closure entry point (see "closure_entry_point" in the "build.json" file).
 *
 * This file includes `goog.require`'s for all the components/directives used
 * by the HTML page and the controller to provide the configuration.
 */
goog.provide('geomapfish.MobileController');
goog.provide('geomapfish_mobile');

goog.require('geomapfish');
goog.require('gmf.AbstractMobileController');
/** @suppress {extraRequire} */
goog.require('ngeo.proj.EPSG2056');
/** @suppress {extraRequire} */
goog.require('ngeo.proj.EPSG21781');


/**
 * @param {angular.Scope} $scope Scope.
 * @param {angular.$injector} $injector Main injector.
 * @constructor
 * @extends {gmf.AbstractMobileController}
 * @ngInject
 * @export
 */
geomapfish.MobileController = function($scope, $injector) {
  gmf.AbstractMobileController.call(this, {
    srid: 21781,
    mapViewConfig: {
      center: [632464, 185457],
      zoom: 3,
      resolutions: [250, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05]
    }
  }, $scope, $injector);

  /**
   * @type {Object.<string, gmf.MobileMeasurePointController.LayerConfig>}
   * @export
   */
  this.elevationLayersConfig = {
    'aster': {unit: 'm'},
    'srtm': {unit: 'm'}
  };

  /**
   * @type {Array.<string>}
   * @export
   */
  this.searchCoordinatesProjections = ['EPSG:21781', 'EPSG:2056', 'EPSG:4326'];

};
ol.inherits(geomapfish.MobileController, gmf.AbstractMobileController);


geomapfish.module.controller('MobileController', geomapfish.MobileController);
