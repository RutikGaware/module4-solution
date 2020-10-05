(function (window)
{
var say_goodbye = {};
var notaion = "Good Bye";
say_goodbye.fun = function (name)
{
	return (notaion + " " + name);
}
window.say_goodbye = say_goodbye;
})(window);