

exports.min = function min (array) {
    if (typeof array == 'undefined') { 
        return 0;
    } else {
        if (array.length == 0) { 
            return 0;
        } 
        return array.reduce(function (preItem, item) {
            if (preItem > item) {
                return preItem = item;    
            } else {
                return preItem;
            }
        }, Infinity);
    }
    
    
}

exports.max = function max (array) {
    if (typeof array == 'undefined') { 
        return 0;
    } else {
        if (array.length == 0) { 
            return 0;
        } 
        return array.reduce(function(preItem, item) {
            if (preItem < item) {
                return preItem = item;    
            } else {
                return preItem;
            }
        }, -Infinity);
    }
}

exports.avg = function avg (array) {
    
    if (typeof array == 'undefined' ) { 
        return 0;
    } else {
        if (array.length == 0) { 
            return 0;
        } 
        return (array.reduce(function(preItem, item) {
            return preItem += item;    
        }, 0))/array.length;
    }
}

