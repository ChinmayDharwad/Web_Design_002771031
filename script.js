var form = document.getElementById("feedbackForm");
form.addEventListener("submit", submitted);

const formToReset = document.querySelector("form");

//initially we are setting to false
let validTitle = false;
var validFname = false;
var validLname = false;
var validEmail = false;
var validPhone = false;
var validStAdd1 = false;
var validCity = false;
var validState = false;
var validZipcode = false;
var validMedia = false;
var validDrink = false;
var validAdd = false;
var validComment = false;

// additional customization variables
var check1 = document.getElementById("checkBox1");
var check2 = document.getElementById("checkBox2");
var check3 = document.getElementById("checkBox3");
var check4 = document.getElementById("checkBox4");
var check5 = document.getElementById("checkBox5");

var custom1 = document.getElementById("addCustom1");
var custom2 = document.getElementById("addCustom2");
var custom3 = document.getElementById("addCustom3");
var custom4 = document.getElementById("addCustom4");
var custom5 = document.getElementById("addCustom5");

//regular expressions for name, email and phone
var regExFname = /^[a-zA-Z]+$/;
var regExLname = /^[a-zA-Z]+$/;
var regExEmail = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZipcode = /^[0-9]{5}(?:-[0-9]{4})?$/;

//values
const titles = document.querySelectorAll('input[name="title"]');

var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var streetAddress1 = document.getElementById("streetAddress1");
streetAddress1.addEventListener("input", validate);

var city = document.getElementById("city");
city.addEventListener("input", validate);

var state = document.getElementById("state");
state.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

var fb = document.getElementById("fb");
var google = document.getElementById("google");
var yelp = document.getElementById("yelp");

var drink = document.getElementById("drink");

var add = document.getElementById("custom");

var comments = document.getElementById("comments");
comments.addEventListener("input", validate);

// write a function for validate
function validate(e) {
  var value = e.target.value;
  var type = this.id; // we are getting ID of the field
  var em = "error_" + type;

  switch (type) {
    case "firstName":
      if (!value.trim().match(regExFname)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validFname = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validFname = true;
      }
      break;

    case "lastName":
      if (!value.trim().match(regExLname)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validLname = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validLname = true;
      }
      break;

    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
      }
      break;

    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;

    case "streetAddress1":
      if (value) {
        validStAdd1 = true;
      } else {
        validStAdd1 = false;
      }
      break;

    case "city":
      if (value) {
        validCity = true;
      } else {
        validCity = false;
      }
      break;

    case "state":
      if (value) {
        validState = true;
      } else {
        validState = false;
      }
      break;

    case "zipcode":
      if (!value.trim().match(regExZipcode)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZipcode = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZipcode = true;
      }
      break;

    case "comments":
      if (value) {
        validComment = true;
      } else {
        validComment = false;
      }
      break;
  }
}

// write a function for submitted
function submitted(e) {
  e.preventDefault();
  let title;

  // to validate the title
  for (let i = 0; i < titles.length; i++) {
    if (titles[i].checked) {
      validTitle = true;
      title = titles[i].value;
    }
  }

  //to validate the media checkbox
  if (fb.checked || google.checked || yelp.checked) {
    validMedia = true;
  } else {
    validMedia = false;
  }

  //to validate drinks selection
  if (drink.value != "select") {
    validDrink = true;
  } else {
    validDrink = false;
  }

  //to validate additional customization
  if (add.value != "") {
    validAdd = true;
  } else {
    validAdd = false;
  }

  if (
    validTitle &&
    validFname &&
    validLname &&
    validEmail &&
    validPhone &&
    validStAdd1 &&
    validCity &&
    validState &&
    validZipcode &&
    validMedia &&
    validDrink &&
    validAdd &&
    validComment
  ) {
    alert("Data entered successfull");
    // populate = true;
    var table = document.getElementById("feedbackTable");
    var row = table.insertRow();
    var c1 = row.insertCell();
    var c2 = row.insertCell();
    var c3 = row.insertCell();
    var c4 = row.insertCell();
    var c5 = row.insertCell();
    var c6 = row.insertCell();
    var c7 = row.insertCell();
    var c8 = row.insertCell();
    var c9 = row.insertCell();
    var c10 = row.insertCell();
    var c11 = row.insertCell();
    var c12 = row.insertCell();
    var c13 = row.insertCell();
    var c14 = row.insertCell();
    var c15 = row.insertCell();

    c1.innerHTML = title.charAt(0).toUpperCase() + title.slice(1);
    c2.innerHTML = document.getElementById("firstName").value;
    c3.innerHTML = document.getElementById("lastName").value;
    c4.innerHTML = document.getElementById("emailId").value;
    c5.innerHTML = document.getElementById("phoneNumber").value;
    c6.innerHTML = document.getElementById("streetAddress1").value;
    c7.innerHTML = document.getElementById("streetAddress2").value;
    c8.innerHTML = document.getElementById("city").value;
    c9.innerHTML = document.getElementById("state").value;
    c10.innerHTML = document.getElementById("zipcode").value;
    c11.innerHTML = fb.value + ", " + google.value + ", " + yelp.value;
    c12.innerHTML = drink.value;
    c14.innerHTML = add.value;

    formToReset.reset();
    validTitle = false;
  } else {
    alert("Please enter valid details");
  }
}

function drinkDetail() {
  var drink = document.getElementById("drink");

  if (drink.value == "hotBlackTea") {
    document.getElementById("hotBlackTea").style.display = "block";

    // custom2.style.display = "none";
    // custom3.style.display = "none";
    // custom4.style.display = "none";
    // custom5.style.display = "none";

    // check2.checked = flase;
    // check3.checked = flase;
    // check4.checked = flase;
    // check5.checked = flase;
  } else {
    document.getElementById("hotBlackTea").style.display = "none";
  }

  if (drink.value == "coldCoffee") {
    document.getElementById("coldCoffee").style.display = "block";

    // custom1.style.display = "none";
    // custom3.style.display = "none";
    // custom4.style.display = "none";
    // custom5.style.display = "none";

    // check1.checked = flase;
    // check3.checked = flase;
    // check4.checked = flase;
    // check5.checked = flase;
  } else {
    document.getElementById("coldCoffee").style.display = "none";
    // document.getElementById("addCustom2").style.display = "none";
  }

  if (drink.value == "lemonIcedTea") {
    document.getElementById("lemonIcedTea").style.display = "block";
  } else {
    document.getElementById("lemonIcedTea").style.display = "none";
    // document.getElementById("addCustom3").style.display = "none";
  }

  if (drink.value == "expresso") {
    document.getElementById("expresso").style.display = "block";
  } else {
    document.getElementById("expresso").style.display = "none";
    // document.getElementById("addCustom4").style.display = "none";
  }

  if (drink.value == "latte") {
    document.getElementById("latte").style.display = "block";
  } else {
    document.getElementById("latte").style.display = "none";
    // document.getElementById("addCustom4").style.display = "none";
  }
}

function addOn() {
  if (check1.checked == true) {
    custom1.style.display = "block";
    // custom2.style.display = "none";
    // custom3.style.display = "none";
    // custom4.style.display = "none";
    // custom5.style.display = "none";
  } else {
    custom1.style.display = "none";
  }

  if (check2.checked == true) {
    custom2.style.display = "block";
    // custom1.style.display = "none";
    // custom3.style.display = "none";
    // custom4.style.display = "none";
    // custom5.style.display = "none";
  } else {
    custom2.style.display = "none";
  }

  if (check3.checked == true) {
    custom3.style.display = "block";
  } else {
    custom3.style.display = "none";
  }

  if (check4.checked == true) {
    custom4.style.display = "block";
  } else {
    custom4.style.display = "none";
  }

  if (check5.checked == true) {
    custom5.style.display = "block";
  } else {
    custom5.style.display = "none";
  }
}
