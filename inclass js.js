
function submitcheck(){
	var value = document.getElementsByClassName("mySeach").value;
	var checkvalue = document.getElementById("check").value;
	let spinner = document.getElementById("loader");
	let thank = document.getElementById("thank");
	const email = document.getElementById("email");
	const submit = document.getElementById("submit");

	if(value !== '' && checkvalue === "yes" && checkemail(document.getElementById("email").value) === true){
		submit.style.display="none";
        spinner.style.visibility = "visible";
        setTimeout(removespinner, 2000);
		
	}else if(value === ''){
		alert("Please fill in the blanks");
	}else if(checkvalue !== "yes"){
		alert("please check the box");
	}else if(checkemail(document.getElementById("email").value) !== true){
		alert("invalid email address");
	}else{
		alert("the form is empty");
	}
}

function checkemail(email){
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function removespinner() {
	let spinner = document.getElementById("loader");
    spinner.style.display = 'none';
    thank.style.visibility = "visible";
}