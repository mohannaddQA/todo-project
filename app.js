var Name, age, gender, title;
alert("Please, can you provide your name, age and gender");
Name = prompt("enter your name");

gender = prompt("enter your gender male or female");
gender = gender.toLowerCase();

// now we will create our conditions and i will start with gender
function Gender() {
  if (gender == "male") {
    title = "Mr.";
  } else if (gender == "female") {
    title = "Ms.";
  } else {
    // alert("please enter gender correctly");
    // gender = prompt("enter your gender male or female");
    // gender = gender.toLowerCase();
    return;
  }
}
Gender();

/*
// this is only if i wanted the user to enter only male or female
if ((gender != "male") & (gender != "female")) {
  Gender();
} else {
  gender = gender;

}

*/
//then the age condition
age = prompt("enter your age");
age = Number(age);
function Age() {
  if (age <= 0) {
    alert("please enter age correctly");
    age = prompt("enter your age");
    age = Number(age);
  } else {
    age = age;
  }
}
if (age <= 0) {
  Age();
} else {
  age = age;
}
console.log(title, "from line 48");
// now with the welcome message
function check() {
  var skip_welcome = confirm(
    "do you want to skip the welcome message?\n skip by clicking {ok} "
  );
  if (skip_welcome == true) {
    return;
  } else if ((gender == "male") | (gender == "female")) {
    var message = `hi ${title}${Name}, welcome to our service \n we hope you like it`;
    alert(message);
  } else {
    var message = `hi ${Name}, welcome to our service \n we hope you like it`;
    alert(message);
  }
}
check();
