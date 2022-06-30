Object.prototype.pipe = function(callback, params = []) {
    return callback(this.valueOf(), ...params) || this;
}
