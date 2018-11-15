function ans(s) {
  var answer = document.getElementById(s);
  if (answer.className=="opa"){
  	answer.className="opa1";
    }
  else{
	answer.className="opa";
  }
}

function ans2(s) {
  var answer2 = document.getElementById(s);
  if (answer2.style.color=="red"){
  	answer2.style.color="#000000";
    }
  else{
	answer2.style.color="red";
  }
}