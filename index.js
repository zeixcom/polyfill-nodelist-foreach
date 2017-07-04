/**
 * Polyfill for nodelist foreach
 *
 * @author Marcel Bührig <marcel.buehrig@zeix.com>
 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, argument) {
    argument = argument || window;
    for (var i = 0; i < this.length; i += 1) {
      callback.call(argument, this[i], i, this);
    }
  };
}
