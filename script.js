(function()
{
	var name = ["Jhon" , "jack" , "jim" , "josef" , "yakov" , "Paul" , "laura" , "Jason"];
	for (var i = 0 ; i < name.length;i++)
	{	
		var fir_letter = name[i].charAt(0).toLowerCase();
		if (fir_letter === 'j') 
		{
			console.log(say_goodbye.fun(name[i]));
		}
		else
		{
			console.log(say_hellow.fun(name[i]));
		}
	}
}
)();