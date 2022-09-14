var guestList = ["Jahanvi" , "Ranveer" , "Sakshi" , "Shanthan" , "Hemil" , "Simar"];
var guestName = prompt ("What is your name?");
if (guestList.includes(guestName)){
  alert ("Welcome to the party!");
}else{
  alert ("Sorry, you are not invited!");
}
