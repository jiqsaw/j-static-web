function Point(x, y) {
    if (this instanceof Point) {
        this.x = x;
        this.y = y;
    }
    else {
        return new Point(x, y);
    }
}
function Segment(p1, p2) {
    if (this instanceof Segment) {
        this.p1 = p1;
        this.p2 = p2;
    }
    else {
        return new Segment(p1, p2);
    }
}
var input = [
    Segment(Point(1, 1), Point(2, 2)),
    Segment(Point(1, 1), Point(0, 0)),
    Segment(Point(2, 2), Point(2, 4)),
    Segment(Point(5, 5), Point(2, 4))
];
function testGraph(input) {
    var src = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var item = input_1[_i];
        if ((src.length > 0) && ((src.indexOf(item[0]) !== -1) || (src.indexOf(item[1]) !== -1)))
            src.push(item);
        else
            return false;
        return true;
    }
}
console.log(testGraph(input));
