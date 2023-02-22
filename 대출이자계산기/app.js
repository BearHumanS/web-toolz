function calculate() {
	const loanAmount = document.getElementById("loanAmount").value;
	const interestRate = document.getElementById("interestRate").value / 100 / 12;
	const loanTerm = document.getElementById("loanTerm").value;
	const repaymentMethod = document.getElementById("repaymentMethod").value;
	const resultTable = document.getElementById("resultTable");

	// Clear the table body
	resultTable.getElementsByTagName("tbody")[0].innerHTML = "";

	// Calculate the monthly payment
	const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm, repaymentMethod);

	// Initialize the remaining balance
	let remainingBalance = loanAmount;

	for (let i = 1; i <= loanTerm; i++) {
		let interestPaid, principalPaid;
		switch (repaymentMethod) {
			case "1":
				// Calculate the interest and principal paid for the month
				interestPaid = remainingBalance * interestRate;
				principalPaid = monthlyPayment - interestPaid;
				break;
			case "2":
				// Calculate the interest and principal paid for the month
				principalPaid = loanAmount / loanTerm;
				interestPaid = remainingBalance * interestRate;
				break;
			case "3":
				if (i === loanTerm) {
					// Calculate the interest and principal paid for the last month
					interestPaid = remainingBalance * interestRate;
					principalPaid = remainingBalance;
				} else {
					// Calculate the interest and principal paid for the month
					interestPaid = remainingBalance * interestRate;
					principalPaid = 0;
				}
				break;
		}

		// Calculate the remaining balance
		remainingBalance -= principalPaid;

		// Create a new row in the table with the calculated values
		const newRow = resultTable.insertRow();
		newRow.innerHTML = `<td>${i}</td>
							<td>${monthlyPayment.toFixed(2)}</td>
							<td>${principalPaid.toFixed(2)}</td>
							<td>${interestPaid.toFixed(2)}</td>
							<td>${remainingBalance.toFixed(2)}</td>`;
	}function calculate() {
		const loanAmount = document.getElementById("loanAmount").value;
		const interestRate = document.getElementById("interestRate").value / 100 / 12;
		const loanTerm = document.getElementById("loanTerm").value;
		const repaymentMethod = document.getElementById("repaymentMethod").value;
		const resultTable = document.getElementById("resultTable");
	
		// Clear the table body
		resultTable.getElementsByTagName("tbody")[0].innerHTML = "";
	
		// Calculate the monthly payment
		const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm, repaymentMethod);
	
		// Initialize the remaining balance
		let remainingBalance = loanAmount;
	
		for (let i = 1; i <= loanTerm; i++) {
			let interestPaid, principalPaid;
			switch (repaymentMethod) {
				case "1":
					// Calculate the interest and principal paid for the month
					interestPaid = remainingBalance * interestRate;
					principalPaid = monthlyPayment - interestPaid;
					break;
				case "2":
					// Calculate the interest and principal paid for the month
					principalPaid = loanAmount / loanTerm;
					interestPaid = remainingBalance * interestRate;
					break;
				case "3":
					if (i === loanTerm) {
						// Calculate the interest and principal paid for the last month
						interestPaid = remainingBalance * interestRate;
						principalPaid = remainingBalance;
					} else {
						// Calculate the interest and principal paid for the month
						interestPaid = remainingBalance * interestRate;
						principalPaid = 0;
					}
					break;
			}
	
			// Calculate the remaining balance
			remainingBalance -= principalPaid;
	
			// Create a new row in the table with the calculated values
			const newRow = resultTable.insertRow();
			newRow.innerHTML = `<td>${i}</td>
								<td>${monthlyPayment.toFixed(2)}</td>
								<td>${principalPaid.toFixed(2)}</td>
								<td>${interestPaid.toFixed(2)}</td>
								<td>${remainingBalance.toFixed(2)}</td>`;
		}
	}
	
}

function calculateMonthlyPayment(loanAmount, interestRate, loanTerm, repaymentMethod) {
	let monthlyPayment;
	switch (repaymentMethod) {
		case "1":
			monthlyPayment = loanAmount * (interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
			break;
		case "2":
			monthlyPayment = (loanAmount / loanTerm) + (loanAmount * interestRate);
			break;
		case "3":
			monthlyPayment = loanAmount;
			break;
	}
	return monthlyPayment;
}

function re() {
	location.reload();
}