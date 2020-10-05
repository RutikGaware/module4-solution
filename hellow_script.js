(function (window)
{
var say_hellow = {};
var notaion = "Hello";
say_hellow.fun = function (name)
{
	return (notaion + " " + name);
}
window.say_hellow = say_hellow;
})(window);