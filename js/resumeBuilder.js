/*var name = "audacity
var uToUpper = name.charAt(1).toUpperCase();
var role = uToUpper + name.slice(2)
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

var skills = ["awesomeness", "programming", "teaching", "js"];

var bio = {
	"name" : "Charles Javelona", 
	"role" : , "Front-end Ninja",
	"contact" : "charlesjavelona@gmail.com",
	"picture" : "images/fry.jpg",
	"welcome_message" : "Hi welcome to my resume page",
	"skills" : skills
};

//Append name
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#main").append("charlesjavelona");




