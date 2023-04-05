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
// three additional questions
//this time i used loops

let marriageState = prompt("are you married? \nplease answer with yes or no");
marriageState = marriageState.toLowerCase();
if ((marriageState == "yes") | (marriageState == "no")) {
  marriageState = marriageState;
} else {
  while ((marriageState != "yes") & (marriageState != "no")) {
    alert("invalid, please answer with yes or no");
    marriageState = prompt("are you married? \nplease answer with yes or no");
    marriageState = marriageState.toLowerCase();
  }
}

let workState = prompt("do you work full time? \nplease answer with yes or no");
workState = workState.toLowerCase();
if ((workState == "yes") | (workState == "no")) {
  workState = workState;
} else {
  while ((workState != "yes") & (workState != "no")) {
    alert("invalid, please answer with yes or no");
    workState = prompt("do you work full time? \nplease answer with yes or no");
    workState = workState.toLowerCase();
  }
}

let childState = prompt(
  "do you have any children? \nplease answer with yes or no"
);
childState = childState.toLowerCase();
if ((childState == "yes") | (childState == "no")) {
  childState = childState;
} else {
  while ((childState != "yes") & (childState != "no")) {
    alert("invalid, please answer with yes or no");
    childState = prompt(
      "do you have any children? \nplease answer with yes or no"
    );
    childState = childState.toLowerCase();
  }
}

let answers = [marriageState, workState, childState];
console.log(
  "are you married?\ndo you work full time?\ndo you have any children?"
);
for (i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}

// now with the welcome message
function check() {
  var skipWelcome = confirm(
    "do you want to skip the welcome message?\n skip by clicking {ok} "
  );
  if (skipWelcome == true) {
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
