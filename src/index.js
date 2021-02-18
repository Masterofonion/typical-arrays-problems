

exports.min = function min (array) {
    if (array.length == 0) { 
        return 0;
    } else {
        return array.reduce(function(preItem, item) {
            if (preItem > item) {
                return preItem = item;    
            } else {
                return preItem;
            }
        }, Infinity);
    }
    
    
}

exports.max = function max (array) {
    if (array.length == 0) { 
        return 0;
    } else {
        return array.reduce(function(preItem, item) {
            if (preItem < item) {
                return preItem = item;    
            } else {
                return preItem;
            }
        }, +Infinity);
    }
}

exports.avg = function avg (array) {
    
    if (array.length == 0) { 
        return 0;
    } else {
        return array.reduce(function(preItem, item) {
            return preItem += item;    
        }, 0);
    }
}
