/**
 * @fileoverview This file provides the "marionb_geomapfish" namespace, which is the
 * application's main namespace. And it defines the application's Angular
 * module.
 */
goog.provide('marionb_geomapfish');

/** @suppress {extraRequire} */
goog.require('gmf');


/**
 * @type {!angular.Module}
 */
marionb_geomapfish.module = angular.module('marionb_geomapfish', [gmf.module.name]);

/**
 * The components template based URL, used as is by the template cache.
 * @type {string}
 * @export
 */
marionb_geomapfish.componentsBaseTemplateUrl = 'marionb_geomapfish_components';

/**
 * The template based URL, used to overwrite template from ngeo, used as is by the template cache.
 * @type {string}
 * @export
 */
marionb_geomapfish.partialsBaseTemplateUrl = 'marionb_geomapfish_partials';

/**
 * The default template based URL, used as is by the template cache.
 * @type {string}
 * @export
 */
marionb_geomapfish.baseTemplateUrl = 'marionb_geomapfish_js';
