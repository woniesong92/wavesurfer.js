/* eslint-disable valid-jsdoc */
/**
 * Returns the `requestAnimationFrame` function for the browser, or a shim with
 * `setTimeout` if the function is not found
 *
 * @return {function} Available `requestAnimationFrame` function for the browser
 */

export default (callback, element) => setTimeout(callback, 1000 / 60);
