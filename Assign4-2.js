//distance between two points

function Point(x,y){
    this.x = x;
    this.y = y;
    

    this.distanceTo = function (point)
    {
        var distance = Math.sqrt((Math.pow(point.x-this.x,2))+(Math.pow(point.y-this.y,2)))
        return distance;
    };
}

var newPoint = new Point (10,100);
var nextPoint = new Point (20,25);

console.log(newPoint.distanceTo(nextPoint))
