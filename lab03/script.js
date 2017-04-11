function checkWord(firstName,num,errormsg,correctmsg) {
  //var patt = /^[a-zA-Zก-\u0E49]{1,20}$/;
  var patt = new RegExp("^[a-zA-Zก-\u0E50]{1,"+ num + "}$");
  // \u0E50-\u0E59 is 0-9
  // all thai char and number is ก-๙-
  // ret: https://unicode-table.com/th/#control-character
  //window.alert(str.search(/^[a-zA-Zก-\u0E49]+$/));
  if(patt.test(firstName)){
    document.getElementById(errormsg).innerHTML = "";
    document.getElementById(correctmsg).innerHTML = "-->Correct!";
    return true;
  }else {
    document.getElementById(errormsg).innerHTML = "*invalid!";
    document.getElementById(correctmsg).innerHTML = "";
    return false;
  }
  // window.alert(patt.test(firstName));
}

function checkPhoneNumber(number,errormsg,correctmsg) {
  var patt = /^\+662-[0-9]{3}-[0-9]{3}$/;
  if(patt.test(number)){
    document.getElementById(errormsg).innerHTML = "";
    document.getElementById(correctmsg).innerHTML = "-->Correct!";
    return true;
  }else {
    document.getElementById(errormsg).innerHTML = "*invalid!";
    document.getElementById(correctmsg).innerHTML = "";
    return false;
  }
}

function checkCellPhoneNumber(number,errormsg,correctmsg) {
  var patt = /^\+66[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
  if(patt.test(number)){
    document.getElementById(errormsg).innerHTML = "";
    document.getElementById(correctmsg).innerHTML = "-->Correct!";
    return true;
  }else {
    document.getElementById(errormsg).innerHTML = "*invalid!";
    document.getElementById(correctmsg).innerHTML = "";
    return false;
  }
}

function checkNumber(number,errormsg,correctmsg) {
  var patt = /^[0-9]+$/;
  // console.log(patt.test(houseNumber))
  if(patt.test(number)){
    document.getElementById(errormsg).innerHTML = "";
    document.getElementById(correctmsg).innerHTML = "-->Correct!";
    return true;
  }else {
    document.getElementById(errormsg).innerHTML = "*invalid!";
    document.getElementById(correctmsg).innerHTML = "";
    return false;
  }
}

function checkZipcode(number,errormsg,correctmsg) {
  var patt = /^[0-9]{5}$/;
  // console.log(patt.test(houseNumber))
  if(patt.test(number)){
    document.getElementById(errormsg).innerHTML = "";
    document.getElementById(correctmsg).innerHTML = "-->Correct!";
    return true;
  }else {
    document.getElementById(errormsg).innerHTML = "*invalid!";
    document.getElementById(correctmsg).innerHTML = "";
    return false;
  }
}

function checkWordNumber(firstName,num,errormsg,correctmsg) {
  var str = firstName;
  //var patt = /^[a-zA-Zก-\u0E49]{1,20}$/;
  var patt = new RegExp("^[a-zA-Zก-\u0E500-9]{1,"+ num + "}$");
  // \u0E50-\u0E59 is 0-9
  // all thai char and number is ก-๙-
  // ret: https://unicode-table.com/th/#control-character
  //window.alert(str.search(/^[a-zA-Zก-\u0E49]+$/));
  if(patt.test(firstName)){
    document.getElementById(errormsg).innerHTML = "";
    document.getElementById(correctmsg).innerHTML = "-->Correct!";
    return true;
  }else {
    document.getElementById(errormsg).innerHTML = "*invalid!";
    document.getElementById(correctmsg).innerHTML = "";
    return false;
  }
  // window.alert(patt.test(firstName));
}
function checkCitizenship(citizenship,errormsg,correctmsg) {
  for(i=0, sum=0; i < 12; i++){
    sum += parseFloat(citizenship.charAt(i))*(13-i);
  }
  if((11-sum%11)%10!=parseFloat(citizenship.charAt(12)) || citizenship.length != 13){
    console.log("asdlji")
    document.getElementById(errormsg).innerHTML = "*invalid!";
    document.getElementById(correctmsg).innerHTML = "";
    return false;
  }else{
    console.log("asdlji")
    document.getElementById(errormsg).innerHTML = "";
    document.getElementById(correctmsg).innerHTML = "-->Correct!";
    return true;
  }
}

function checkHouseNumber(houseNumber, errormsg, correctmsg) {

  var patt = /^[0-9]+(\/[0-9])?$/;
  // console.log(patt.test(houseNumber))
  if(patt.test(houseNumber)){
    document.getElementById(errormsg).innerHTML = "";
    document.getElementById(correctmsg).innerHTML = "-->Correct!";
    return true;
  }else {
    document.getElementById(errormsg).innerHTML = "*invalid!";
    document.getElementById(correctmsg).innerHTML = "";
    return false;
  }
}

function getAlphabet(event) {
  //console.log(event.charCode);
  return (event.charCode >= 65 && event.charCode <= 90) //A-Z
  || (event.charCode >= 97 && event.charCode <= 122) //a-z
  || (event.charCode >= 3585 && event.charCode <= 3663); //thai
}

function save() {
  var form = document.getElementById("myForm");
  // localStorage.setItem("xxx", document.myForm.houseNumber1.value);
  // alert(document.getElementsByName("firstName"));
  for(i = 0; i < form.length; i++){
    if(form.elements[i].type != "button"){
      localStorage.setItem(form.elements[i].id, form.elements[i].value);
    }
  }

}

window.onload = function() {
  var form = document.getElementById("myForm");
  // document.getElementsByName('name')
  // alert(form.elements.size);
  // console.log(form.elements[0].value);
  // document.getElementById('houseNumber1').value = localStorage.getItem("xxx");
  for(i = 0; i < form.length; i++) {
    // console.log(form.elements[i].id);
    if(form.elements[i].type != "button" && form.elements[i].type != "reset" && form.elements[i].type != "submit"){
      // console.log(form.elements[i].type);
      document.getElementById(form.elements[i].id).value = localStorage.getItem(form.elements[i].id);
    }

  }
  // console.log(form.elements[9].value);
}
