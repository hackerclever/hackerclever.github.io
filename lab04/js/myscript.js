function isWord(str,num) {
  var patt = new RegExp("^[a-zA-Zก-\u0E50]{1,"+ num + "}$");
  return patt.test(str);
}
function checkWord(firstName,num,errormsg,correctmsg) {
  if(isWord(firstName,num)){
    document.getElementById(errormsg).innerHTML = "";
    document.getElementById(correctmsg).innerHTML = "-->Correct!";
  }else {
    document.getElementById(errormsg).innerHTML = "*invalid!";
    document.getElementById(correctmsg).innerHTML = "";
  }
}

$('#firstName').attr('oninput',"checkWord(this.value,20,'errormsgFirstName','correctmsgFirstName')");
$('#lastName').attr('oninput',"checkWord(this.value,20,'errormsgLastName','correctmsgLastName')");

// function changeCSS(cssFile, cssLinkIndex) {
//
//     var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
//
//     var newlink = document.createElement("link");
//     newlink.setAttribute("rel", "stylesheet");
//     newlink.setAttribute("type", "text/css");
//     newlink.setAttribute("href", cssFile);
//
//     document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
// }

function getGender() {
  var radios = document.getElementsByName('gender');

  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
          return (radios[i].value);
      }
  }
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var datePass = new Date(today-birthDate);
    return datePass.getFullYear()-1970;
}

function checkInput() {
  // console.log("s"+$('#birthday').val()+"s");
  if(!isWord($('#firstName').val(),20)){
    alert("Please fill firstname.");
    return false;
  }
  if(!isWord($('#lastName').val(),20)){
    alert("Please fill lastname.");
    return false;
  }
  if($('#birthday').val() == ""){
    alert("Please fill birthday.");
    return false;
  }
  if(getGender() == undefined){
    alert("Please select your gender.");
    return false;
  }
  if($('#province').val() == ""){
    alert("Please select the province.");
    return false;
  }
  return true;
}

function showCSS() {
  if(getAge($("#birthday").val())>=13){
    if(getGender()=='male'){
      $('#css').attr('href', "css/theme-gentleman.css");
    }else {
      $('#css').attr('href', "css/theme-lady.css");
    }
  }else {
    $('#css').attr('href', "css/theme-childen.css");
  }
}

function loadImage(name,toid) {
  var path = "data/sign/"+name+".png";
  $("#"+toid).attr('src', path);
  // $.ajax({
  //   url: path,
  //   dataType: "image/png",
  //   success: function(data) {
  //     $("#"+toid).attr('src', data);
  //   },
  //   error: function(data) {
  //     alert("error "+data);
  //   }
  // });
}

function loadDoc(name,toid) {
  var path = "data/"+name+".txt";
  $.ajax({
    url: path,
    success: function(data) {
      $('#'+toid).text(data);
    },
    error: function(data) {
      alert("error "+data);
    }
  });
}

// function loadDoc(name,toid) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById(toid).innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", "data/"+name+".txt", true);
//   xhttp.send();
// }

function show() {
  showCSS();
  loadDoc($("#province").val(),"motta");
  loadImage($("#province").val(),"img");
  var greeting = "Hello "+$("#firstName").val()+" "+$("#lastName").val()+" You are "+getAge($("#birthday").val())+" years old.";
  $("#greeting").text(greeting);
  $("#namePro").text($("#province").val());
}

$('#submit').click(function() {
  if(checkInput()){
    show();

  }
});

$('#test').click(function() {
  // document.getElementById('css').setAttribute('href', "css/theme-gentleman.css");
  // $('#css').attr('href', "css/theme-gentleman.css");
  // alert(getAge($("#birthday").val()));
  // changeCSS("css/theme-gentleman.css",0);
  // console.log(loadData("provinceName.txt"));
});
$(document).ready(function() {
  jQuery.get('provinceName.txt', function(data) {
    var str = data.split("\n");
    str.forEach(function(item) {
      if(item != ""){
        $('#provinceName').append("<option value='"+item.substring(0,item.length-1)+"'>"+item+"</option>");
      }
    });
  });
});
