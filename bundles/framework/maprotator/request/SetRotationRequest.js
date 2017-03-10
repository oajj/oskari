/**
 * @class Oskari.mapframework.bundle.system.message.request.ShowMessageRequest
 *
 *
 * Requests are build and sent through Oskari.mapframework.sandbox.Sandbox.
 * Oskari.mapframework.request.Request superclass documents how to send one.
 */
Oskari.clazz.define('Oskari.framework.bundle.maprotator.request.SetRotationRequest',
/**
 * @method create called automatically on construction
 * @static
 */
function( degrees ) {
  this._degrees = degrees;
}, {
  /** @static @property __name request name */
  __name: 'SetRotationRequest',
  /**
   * @method getName
   * @return {String} request name
   */
  getName: function () {
      return this.__name;
  },
  /**
   * @method getDegrees
   */
  getDegrees: function () {
      return this._degrees;
  },
}, {
    'protocol' : ['Oskari.mapframework.request.Request']
});
