// function setError(id, error){
//     element = document.getElementById(id);
//     element.getElementsbyClassName('formerror')[0].innerHTML = error;
// }

// console.log(error[0], nameinput)

// function validateForm(e)
// {
//     e.preventDefault()

//     console.log("hiii");

//     // var returnval = true;

//     // var name = document.forms['myForm']["name"].value;
//     // if(name.length<5){
//     //     setError("name", "Length of name is too Short");
//     //     returnval = false;
//     // }
//     // else{

//     // }
//     // return false;
// }

const btnsubmit = document.getElementById("submit-btn");

console.log("hiiii", btnsubmit);

btnsubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let nameinput = document.getElementById("name").value;
  let dobinput = document.getElementById("dob").value;
  let addinput = document.getElementById("address").value;
  let pincodeinput = document.getElementById("pincode").value;
  let aadhaarinput = document.getElementById("aadhaar").value;
  let paninput = document.getElementById("pan").value;
  let emailinput = document.getElementById("email").value;

  let error = document.querySelectorAll(".formerror");
  console.log(error);


  //name 
  if (nameinput == "") {
    error[0].innerHTML = "This field is required";
  } else {
    var letters = /^[A-Za-z ]+$/;
    if (nameinput.match(letters)) {
      error[0].innerHTML = "";
    } else {
      error[0].innerHTML = "Please Enter Correct Name";
      alert("Name is Not Correct");
    }
  }


  //dob
  if (dobinput == "") {
    error[1].innerHTML = "This field is required";
  } else {
    error[1].innerHTML = "";
  }


//address
  if (addinput == "") {
    error[2].innerHTML = "This field is required";
  } else {
    error[2].innerHTML = "";
  }


  //pincode
  if (pincodeinput == "") {
    error[3].innerHTML = "This field is required";
  } else {
    error[3].innerHTML = "";
  }

//aadhaar
  if (aadhaarinput == "") {
    error[5].innerHTML = "This field is required";
  } else {
    var expr =
      /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
    if (!expr.test(aadhaarinput)) {
      error[5].innerHTML = "Invalid Aadhaar Number";
    } else {
      error[5].innerHTML = "Valid";
    }
  }

  //pan
  if (paninput == "") {
    error[6].innerHTML = "This field is required";
  } else {
    var panu = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panu.test(paninput)) {
      error[6].innerHTML = "Invalid PAN Number";
    } else {
      error[6].innerHTML = "Valid";
    }
  }



  //email 
  if (emailinput == "") {
    error[7].innerHTML = "This field is required";
  } else {
    var emailuni= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailuni.test(emailinput)) {
      error[7].innerHTML = "Invalid Email id";
    } else {
      error[7].innerHTML = "Valid";
    }
  }
});
