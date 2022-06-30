//string enum
var Printrandom;
(function (Printrandom) {
    Printrandom["Apple"] = "APPLE";
    Printrandom["letter"] = "LETTER";
    Printrandom["Magazine"] = "MAGAZINE";
    Printrandom["Books"] = "BOOKS";
})(Printrandom || (Printrandom = {}));
// Access String Enum 
Printrandom.Apple; //returns APPLE
Printrandom['Magazine']; //returns MAGAZINE
