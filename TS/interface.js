var _imagedim = {
    width: "200px",
    height: "300px"
};
var user = {
    id: 12,
    firstName: "Josh",
    lastName: "",
    getFullName: function () { return "".concat(firstName, " ").concat(lastName); } //since the property is missing it throws an error 
};
//class implement interface 
var NameofClass = /** @class */ (function () {
    function NameofClass() {
    }
    return NameofClass;
}());
var Shapes = /** @class */ (function () {
    function Shapes(width, height) {
        this.width = width;
        this.height = height;
    }
    Shapes.prototype.getWidth = function () {
        return this.width;
    };
    return Shapes;
}());
