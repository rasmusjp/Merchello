    /**
     * @ngdoc model
     * @name ExtendedDataDisplay
     * @function
     *
     * @description
     * Represents a JS version of Merchello's ExtendedDataDisplay object
     */
    var ExtendedDataDisplay = function() {
        var items = [];
    };

    ExtendedDataDisplay.prototype = (function() {

        function getValue(key) {
            return _.where(this.items, { key: key });
        }

        function setValue(key, value) {
            var found = false;
            var i = 0;
            while(i < this.items.length && !found) {
                if (this.items[0].key == key) {
                    found = true;
                    this.items[ i ].value = value;
                }
                i++;
            }
            if (found) {
                return;
            }
            this.items.push({ key: key, value: value });
        }

        return {
            getValue: getValue,
            setValue: setValue
        };
    }());