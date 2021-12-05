let formcontrol = document.getElementById("formcontrol");
let firstname = document.getElementById("firstname");
let firstnameAlert =  document.getElementById("namealert");
let lastname = document.getElementById("lastname");
let lastnameAlert =  document.getElementById("lastnamealert");
let password = document.getElementById("password");
let passwordAlert = document.getElementById("passwordAlert");
let samePasswordAlert = document.getElementById("samepasswordAlert");
let emailvalidation = document.getElementById("emailvalidation");
let emailAlert = document.getElementById("emailAlert");
let phonevalidation = document.getElementById("phonevalidation");
let phoneAlert = document.getElementById("phoneAlert");

let photoupload = document.getElementById("photoupload");
let upload_image = "";
let avatar = document.getElementById("avatar");
let photoAlert = document.getElementById("photoalert");
 // Validation true or false;
let _name = false;
let _surname= false;
let _pass=false;
let _sampass=false;
let _mail = false;
let _phone = false;

var allowedExtensions =  /(\.jpg|\.jpeg|\.png|\.gif)$/i;
photoupload.addEventListener("change", function(){
  let reader = new FileReader();
  if (allowedExtensions.test(photoupload.value)) {

    reader.onload = ()=>{
      upload_image = reader.result;
      document.getElementById("avatar").src = upload_image;
    };
    reader.readAsDataURL(this.files[0]);
    photoAlert.style.display="none";
  }
  else
  {
   photoAlert.style.display="block";
   photoAlert.innerText="Only images with jpg jpeg png gif extensions are accepted"
  }
})




let nameRegex = /^[a-zA-Z]+$/;
firstname.addEventListener("input",()=>{
    let name = firstname.value.trim();
    let nameLeng = name.length;
    if (nameRegex.test(name) == false) {
        firstnameAlert.style.display="block";
        firstnameAlert.innerText="Use only letters";
        _name = false
      
      }else if (nameLeng >= 20) {
       firstnameAlert.style.display="block";
       firstnameAlert.innerText="You can only use 15 letters";
        _name = false;
       }else
       {
           lastnameAlert.style.display="none";
           _name = true;
       }
})

lastname.addEventListener("input",()=>{
    let _lastname = lastname.value.trim();
    let lastnameLeng = _lastname.length;

    if (nameRegex.test(_lastname) == false) {
      lastnameAlert.style.display="block";
      lastnameAlert.innerText="Use only letters";
      _name = false
    }else if (lastnameLeng >= 20) {
     lastnameAlert.style.display="block";
     lastnameAlert.innerText="You can only use 15 letters";
     _name = false
     }else
     {
        lastnameAlert.style.display="none";
       _surname= true;
     }
})

password.addEventListener("input", ()=>{
      let pass = password.value;
     //Strog password check
     let StrongPasswordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
     //Strog password check son
 
     //Medium paswword ceheck
     let MediumPasswordRegex = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;
     //Medium password check son

    if (pass.length=2) {
        passwordAlert.style.display="block";
        passwordAlert.classList.add("alert-danger");
        passwordAlert.innerText="Password is weak!";
        _name = false
    }

     if (MediumPasswordRegex.test(pass)) {
        passwordAlert.style.display="block";
        passwordAlert.classList.remove("alert-danger");
        passwordAlert.classList.add("alert-warning");
        passwordAlert.innerText="Password is medium";
        _pass =true;
    }
    
    if (StrongPasswordRegex.test(pass)) {
        passwordAlert.style.display="block";
        passwordAlert.classList.remove("alert-warning");
        passwordAlert.classList.add("alert-success");
        passwordAlert.innerText="Password is strong!";
        _pass=true;
    }
})

samepassword.addEventListener("input",function samepassword(){
    let samepassword = document.getElementById("samepassword");
    let  samepass =  document.getElementById("password");
    if (samepassword.value != samepass.value) {
     passwordAlert.style.display="block";
     samePasswordAlert.classList.add("alert-warning")
     samePasswordAlert.innerText=" Password are not the same!";
     _name = false
    }
    else{ 
    samePasswordAlert.style.display="none";
    _sampass = true;
    }
})

emailvalidation.addEventListener("input",function email(){
  let EmailCheckRegex =/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  let mail = emailvalidation.value;
  if (EmailCheckRegex.test(mail)==false) {
    emailAlert.style.display="block";
    emailAlert.classList.add("alert-danger")
    emailAlert.innerText="Enter correct email address!";
    _name = false
  }
  else
  {
    emailAlert.style.display="none";
    _mail =true;
  }
})

phonevalidation.addEventListener("input",function phone(){
    let PhoneCheckRegex =/^\+994(77|70|50|51|55|99)[1-9]{7}$/;
    let phone = phonevalidation.value;
    if (PhoneCheckRegex.test(phone)==false) {
      phoneAlert.style.display="block";
      phoneAlert.classList.add("alert-danger")
      phoneAlert.innerText="Only Azerbaijan number is accepted!";
      _name = false
    }
    else
    {
      phoneAlert.style.display="none";
      _phone =true;
    }
  })



function validateForm()
{
      //Form element empty or not empty
      let lname = firstname.value.trim();
      let fname = lastname.value.trim();
      let mail = emailvalidation.value.trim();
      let pass = password.value.trim();
      let phone = phonevalidation.value.trim();

  if (lname=="" || fname =="" || mail=="" || pass=="" || phone=="") {
    return false;
  }else if (_name==false || _surname==false || _mail==false || _pass==false || _phone==false || _sampass==false) {
    return false;
  }
  else
  {
    return true;
  }
}