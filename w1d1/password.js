function substitute (match, p1) {
  if (p1 == "a") {
    return "4";
  } else if (p1 == "e") {
    return "3";
  } else if (p1 == "o") {
    return "0";
  } else if (p1 == "l") {
    return "1";
  }
}

function obfuscate(password) {
  var pattern1 = /([aeol])/g;
  var newpassword = password.replace(pattern1, substitute);
  return newpassword;
}

/*
console.log(obfuscate())
/*
  var pattern3 = /(o)/g;
  var pattern4 = /(l)/g;

*/



/*
  for (i = 0; i < password.length; i++) {
    password = password.replace(/a/, /e/g, /o/g, /l/g, "$4 $3 $0 $1");
  }
}
var pass = "seal";
console.log(obfuscate(pass));
*/
/*
  var regexp1 = new RegExp ([a]/g, "4")
  var regexp2 = new RegExp ([e]/g, "3")
  var regexp3 = new RegExp ([o]/g, "0")
  var regexp4 = new RegExp ([l]/g, "1")

}

Search a string and replace
Replace a with 4
Repalce e with 3
Replace o with 0
Repalce l with 1
*/

