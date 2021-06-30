function compute() {
	var result = document.getElementById('result');
	var principal = document.getElementById('principal').value;
	var rate = document.getElementById('rate').value;
	var years = document.getElementById('years').value;
	var interest = (principal * years * rate) / 100;
	var year = new Date().getFullYear() + parseInt(years);

	// Validate that the Amount input value is greater than zero
	if (principal <= 0) {
		alert('Enter a positive number');
		// put focus back to the Amount input element
		document.getElementById('principal').focus();
		return false;
	}

	// Attach the answer to the span element with id = result
	result.innerHTML = `<div class='result'>
    If you deposit <span class='num'> ${principal} </span>, <br />
    at an interest rate of <span class='num'>${rate}%</span>. <br />
    You will receive an amount of <span class='num'> ${interest}</span>, <br />
    in the year  <span class='num'>${year}</span> <br />
    </div>`;
}

// Update the text of span element with id = rate_val
function updateRate() {
	var rateval = document.getElementById('rate').value;
	document.getElementById('rate_val').innerText = rateval;
}
