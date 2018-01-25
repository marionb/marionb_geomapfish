/**
 * @fileoverview This file provides the "geomapfish" namespace, which is the
 * application's main namespace. And it defines the application's Angular
 * module.
 */
goog.provide('geomapfish');

/** @suppress {extraRequire} */
goog.require('gmf');


/**
 * @type {!angular.Module}
 */
geomapfish.module = angular.module('geomapfish', [gmf.module.name]);

/**
 * The components template based URL, used as is by the template cache.
 * @type {string}
 * @export
 */
geomapfish.componentsBaseTemplateUrl = 'geomapfish_components';

/**
 * The template based URL, used to overwrite template from ngeo, used as is by the template cache.
 * @type {string}
 * @export
 */
geomapfish.partialsBaseTemplateUrl = 'geomapfish_partials';

/**
 * The default template based URL, used as is by the template cache.
 * @type {string}
 * @export
 */
geomapfish.baseTemplateUrl = 'geomapfish_js';
