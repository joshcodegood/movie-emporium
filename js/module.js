/** 
 * Most commonly, we'll either export functions or objects.
 */

function xyz() {
    return 10;
};

module.exports = xyz;
                                //> these two are the same thing, just expressed differently
module.exports = function () {
    return 10;
};
