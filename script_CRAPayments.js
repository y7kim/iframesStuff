window.onload = function (e) {

	var pageTitle = document.querySelector("#PageTitle").textContent;

	//verify if element has class
	Element.prototype.hasClass = function (className) {
		return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
	};

	//Show Print Button on conclusion screen
	function showPrintButton() {
		var print = document.querySelectorAll(".topic");

		for (var i = 0; i < print.length; i++) {
			print[i].classList.add("show-topic");
		}
	}

	//Show Success Image on Conclusion screen
	function showSucessImageAndTextReceipN() {
		var successImageNode = document.createElement('div');
		successImageNode.setAttribute("class", "success-image");
		var imageNode = document.createElement('img');
		successImageNode.appendChild(imageNode);
		imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_success.png");
		var successImageReferenceNode = document.querySelector('.receiptN');
		successImageReferenceNode.parentNode.insertBefore(successImageNode, successImageReferenceNode);

		var inputSuccessImageNode = document.createElement('div');
		inputSuccessImageNode.setAttribute("class", "success-text");
		var inputErrorImageReferenceNode = document.querySelector('.receiptN');
		inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
	}

	//Show Success Image v2 on Conclusion screen
	function showSucessImageAndTextReceiptHeader() {
		var successImageNode = document.createElement('div');
		successImageNode.setAttribute("class", "success-image");
		var imageNode = document.createElement('img');
		successImageNode.appendChild(imageNode);
		imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_success.png");
		var successImageReferenceNode = document.querySelector('.receiptHeader');
		successImageReferenceNode.parentNode.insertBefore(successImageNode, successImageReferenceNode);

		var inputSuccessImageNode = document.createElement('div');
		inputSuccessImageNode.setAttribute("class", "success-text");
		var inputErrorImageReferenceNode = document.querySelector('.receiptHeader');
		inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
	}

	//Show Alert Image on Confirmation screen w/ Confirmation DIV
	function showAlertImageWithConfirmationDiv() {
		var confirmationDiv = document.querySelector('.confirmation').classList.add('transfer-confirmation');

		var alertImageNode = document.createElement('div');
		alertImageNode.setAttribute("class", "alert-image");
		var imageNode = document.createElement('img');
		alertImageNode.appendChild(imageNode);
		imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_alert.png");
		var alertImageReferenceNode = document.querySelector('.confirmation');
		alertImageReferenceNode.parentNode.insertBefore(alertImageNode, alertImageReferenceNode);
	}

	//Show Error Image on Conclusion screen
	function showErrorImageOnConclusionScreen() {
		var errorsImageNode = document.createElement('div');
		errorsImageNode.setAttribute("class", "errors-image");
		var imageNode = document.createElement('img');
		errorsImageNode.appendChild(imageNode);
		imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_error.png");
		var errorsImageReferenceNode = document.querySelector('.receiptN');
		errorsImageReferenceNode.parentNode.insertBefore(errorsImageNode, errorsImageReferenceNode);
	}

	//Show Error Image
	function showErrorImage() {
		var errorsImageNode = document.createElement('div');
		errorsImageNode.setAttribute("class", "errors-image");
		var imageNode = document.createElement('img');
		errorsImageNode.appendChild(imageNode);
		imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_error.png");
		var errorsImageReferenceNode = document.querySelector('.errors');
		errorsImageReferenceNode.parentNode.insertBefore(errorsImageNode, errorsImageReferenceNode);
	}

	//Add top disclaimer on Remove CRA Account screen
	if (pageTitle == "Remove CRA Account") {
		if (document.querySelector(".divHide") == null) {
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer");
			topDisclaimerNode.innerHTML = 'To remove this CRA account click Delete. <br /><p>Please note: if you remove your account for any of the following, RC 159 and RC 160 all of the accounts will be removed. If you wish to keep any of the accounts from that list, please click cancel to the main CRA Filing and Payments area.</p>';
			var bottomDisclaimerReferenceNode = document.querySelector('.details');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);

			document.querySelector(".details").classList.add("remove-cra-details");
			document.querySelector(".header").classList.add("remove-cra-header");
			document.querySelector("table").classList.add("remove-cra-table");
		} else {
			showSucessImageAndTextReceiptHeader();

			document.querySelector('.success-text').textContent = "Account successfully removed";

			document.querySelector(".receiptN").classList.add("hide-div");
			document.querySelector(".receiptHeader").classList.add("show-ReceiptHeader");

			showPrintButton();
		}
	}

	//Remit RC 159 Amount Owing screen
	if (pageTitle == "Remit RC 159 Amount Owing") {
		if (document.querySelector(".formEdit") == null && document.querySelector(".status") == null) {
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer");
			topDisclaimerNode.innerHTML = 'Use Form RC159 to make payments on an existing debt or to make a prepayment for an anticipated reassessment.';
			var bottomDisclaimerReferenceNode = document.querySelector('.details');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);

			var requiredFields = document.querySelectorAll('.required');
			requiredFields[2].classList.add('contact-phone-input');
			requiredFields[3].classList.add('date-input');
			requiredFields[6].classList.add('date-input');
		}

		//Confirmation screen
		else if (document.querySelector(".formEdit") != null) {
			showAlertImageWithConfirmationDiv();

			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.confirmation');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);

			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer--remit-confirmation-screen");
			topDisclaimerNode.innerHTML = 'To remit your RC 159, please review your Pay Amount, Pay From account, and Payment Date, then click Remit. To make any changes to your information click the "Edit transaction details" link.';
			var bottomDisclaimerReferenceNode = document.querySelector('.confirmation');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);

			document.querySelector('.success-text').textContent = "Please review the information below";

			var labels = document.querySelectorAll("label");

			for (var i = 0; i < labels.length; i++) {
				labels[i].classList.add("remit-labels");
			}
		}

		//Conclusion screen
		else if (document.querySelector(".formEdit") == null && document.querySelector(".status") != null) {
			//Status Completed
			if (document.querySelector(".status").textContent == "Completed") {
				showSucessImageAndTextReceipN();

				document.querySelector('.success-text').textContent = "Transaction Completed";

				showPrintButton();
			}

			//Status Not Completed
			if (document.querySelector(".status").textContent == "Not Completed" || document.querySelector(".status").textContent == "Not Created") {
				showErrorImageOnConclusionScreen()

				var inputSuccessImageNode = document.createElement('div');
				inputSuccessImageNode.setAttribute("class", "success-text");
				var inputErrorImageReferenceNode = document.querySelector('.receiptN');
				inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);

				document.querySelector('.success-text').textContent = "Transaction Not Completed";
			}
		}
	}

	//Remit RC 160 Interim Payments screen
	if (pageTitle == "Remit RC 160 Interim Payments") {
		if (document.querySelector(".formEdit") == null && document.querySelector(".status") == null) {
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer");
			topDisclaimerNode.innerHTML = 'Use Form RC160 to make payments on an existing debt or to make a prepayment for an antecipated reassessment.';
			var bottomDisclaimerReferenceNode = document.querySelector('.details');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);

			var requiredFields = document.querySelectorAll('.required');
			requiredFields[2].classList.add('contact-phone-input');
			requiredFields[3].classList.add('date-input');
			requiredFields[6].classList.add('date-input');
		}

		//Confirmation screen
		else if (document.querySelector(".formEdit") != null) {
			showAlertImageWithConfirmationDiv();

			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.confirmation');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);

			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer--remit-confirmation-screen");
			topDisclaimerNode.innerHTML = 'To remit your RC 160, please review your Pay Amount, Pay From account, and Payment Date, then click Remit. To make any changes to your information click the "Edit transaction details" link.';
			var bottomDisclaimerReferenceNode = document.querySelector('.confirmation');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);

			document.querySelector('.success-text').textContent = "Please review the information below";
		}

		//Conclusion screen
		else if (document.querySelector(".formEdit") == null && document.querySelector(".status") != null) {
			//Status Completed
			if (document.querySelector(".status").textContent == "Completed") {
				showSucessImageAndTextReceipN();

				document.querySelector('.success-text').textContent = "Transaction Completed";

				showPrintButton();
			}

			//Status Not Completed
			if (document.querySelector(".status").textContent == "Not Completed" || document.querySelector(".status").textContent == "Not Created") {
				showErrorImageOnConclusionScreen()

				var inputSuccessImageNode = document.createElement('div');
				inputSuccessImageNode.setAttribute("class", "success-text");
				var inputErrorImageReferenceNode = document.querySelector('.receiptN');
				inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);

				document.querySelector('.success-text').textContent = "Transaction Not Completed";
			}
		}
	}

	//Remit Payroll and Source Deduction screen
	if (pageTitle == "Remit Payroll and Source Deduction") {
		if (document.querySelector(".formEdit") == null && document.querySelector(".status") == null) {
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer");
			topDisclaimerNode.innerHTML = 'To begin your Payroll and Source Deduction Remittance (current year), enter your remittance information and payment amount, select an account to pay from and a payment date, and click Continue. For more information on Remittance Type click Help. <br /><p>Please Note: Payment amount must be less than or equal to $1,000,000 - if you wish to make a payment for more than this amount you will need to perform two separate bill payments of unequal amounts. Click on <a href="/">Help</a> for more information.</p>';
			var bottomDisclaimerReferenceNode = document.querySelector('.details');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);

			var requiredFields = document.querySelectorAll('.required');
			var inputs = document.querySelectorAll('.input');
			requiredFields[3].classList.add('date-input');
			requiredFields[7].classList.add('date-input');
			inputs[1].classList.add("gross-payroll-input");
		}

		//Confirmation screen
		else if (document.querySelector(".formEdit") != null) {
			showAlertImageWithConfirmationDiv();

			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.confirmation');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);

			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer--remit-confirmation-screen");
			topDisclaimerNode.innerHTML = 'To submit your Corporation Tax Remittance, please review your Pay Amount, Pay From account, and Payment Date, then click Remit. To make any changes to your information click the "Edit transaction details" link.';
			var bottomDisclaimerReferenceNode = document.querySelector('.confirmation');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);

			document.querySelector('.success-text').textContent = "Please review the information below";
		}

		//Conclusion screen
		else if (document.querySelector(".formEdit") == null && document.querySelector(".status") != null) {
			//Status Completed
			if (document.querySelector(".status").textContent == "Completed") {
				showPrintButton();

				var bottomDisclaimerNode = document.createElement('div');
				bottomDisclaimerNode.setAttribute("class", "bottom-disclaimer");
				bottomDisclaimerNode.innerHTML = '<b>Please Note:</b><ul><li>All future bill payments will debit the account requested on the date provided for the transaction. If you have set up a <b>scheduled transfer</b> to cover the future dated bill payment, the <b>Transfer must be completed one day prior to the bill payment date</b> to ensure the funds are available.</li><li>Please ensure that your Account has sufficient funds to cover the Payment on the Payment Date. <b>If funds are not available on the date the payment is due, your payment will not be processed.</b></li><li>If you have scheduled multiple payments to the same vendor for the same amount on the same day, duplicate transactions may be rejected even if the payments are from different accounts</li></ul>';
				var bottomDisclaimerReferenceNode = document.querySelector('.topic');
				bottomDisclaimerReferenceNode.parentNode.insertBefore(bottomDisclaimerNode, bottomDisclaimerReferenceNode);

				showSucessImageAndTextReceipN();

				document.querySelector('.success-text').textContent = "Transaction Completed";
			}

			//Status Not Completed
			if (document.querySelector(".status").textContent == "Not Completed" || document.querySelector(".status").textContent == "Not Created") {
				showErrorImageOnConclusionScreen()

				var inputSuccessImageNode = document.createElement('div');
				inputSuccessImageNode.setAttribute("class", "success-text");
				var inputErrorImageReferenceNode = document.querySelector('.receiptN');
				inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);

				document.querySelector('.success-text').textContent = "Transaction Not Completed";
			}
		}
	}

	//add top disclaimer on Remit Corporation Taxs screen
	if (pageTitle == "Remit Corporation Tax") {
		if (document.querySelector(".formEdit") == null && document.querySelector(".status") == null) {
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer");
			topDisclaimerNode.innerHTML = 'To begin your Corporation Tax Remittance, enter your remittance information and payment amount, select an account to pay from and a payment date, and click Continue. <br /><p>Please note: Payment amount must be less than or equal to $1,000,000 - if you wish to make a payment for more than this amount you will need to perform two separate bill payments of unequal amounts.</p>';
			var bottomDisclaimerReferenceNode = document.querySelector('.confirmation');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);

			var requiredFields = document.querySelectorAll('.required');
			requiredFields[2].classList.add('date-input');
			requiredFields[5].classList.add('date-input');
		}

		//Confirmation screen
		else if (document.querySelector(".formEdit") != null) {
			showAlertImageWithConfirmationDiv();

			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.confirmation');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);

			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer--remit-confirmation-screen");
			topDisclaimerNode.innerHTML = 'To submit your Corporation Tax Remittance, please review your Pay Amount, Pay From account, and Payment Date, then click Remit. To make any changes to your information click the "Edit transaction details" link.';
			var bottomDisclaimerReferenceNode = document.querySelector('.confirmation');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);

			document.querySelector('.success-text').textContent = "Please review the information below";
		}

		//Conclusion screen
		else if (document.querySelector(".formEdit") == null && document.querySelector(".status") != null) {
			//Status Completed
			if (document.querySelector(".status").textContent == "Completed") {
				showSucessImageAndTextReceipN();

				document.querySelector('.success-text').textContent = "Transaction Completed";

				showPrintButton();
			}

			//Status Not Completed
			if (document.querySelector(".status").textContent == "Not Completed" || document.querySelector(".status").textContent == "Not Created") {
				showErrorImageOnConclusionScreen()

				var inputSuccessImageNode = document.createElement('div');
				inputSuccessImageNode.setAttribute("class", "success-text");
				var inputErrorImageReferenceNode = document.querySelector('.receiptN');
				inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);

				document.querySelector('.success-text').textContent = "Transaction Not Completed";
			}
		}
	}

	//add top disclaimer on File GST/HST 34 screens
	if (pageTitle == "File GST/HST 34") {
		var requiredFields = document.querySelectorAll('.required');

		if (requiredFields.length) {
			requiredFields[2].classList.add('contact-phone-input');
			requiredFields[3].classList.add('date-input');
			requiredFields[4].classList.add('date-input');
		}

		if (document.querySelector(".formEdit") == null && document.querySelector("#FileOnly") == null) {
			var print = document.querySelectorAll("a");

			if (print[0].hasAttribute("onclick") && document.querySelector(".receiptN") != null) {
				showSucessImageAndTextReceipN();

				document.querySelector('.success-text').textContent = "Transaction Completed";

				var bottomDisclaimerNode = document.createElement('div');
				bottomDisclaimerNode.setAttribute("class", "bottom-disclaimer");
				bottomDisclaimerNode.innerHTML = '<b>Please Note:</b><ul><li>All future bill payments will debit the account requested on the date provided for the transaction. If you have set up a <b>scheduled transfer</b> to cover the future dated bill payment, the <b>Transfer must be completed one day prior to the bill payment date</b> to ensure the funds are available.</li><li>Please ensure that your Account has sufficient funds to cover the Payment on the Payment Date. <b>If funds are not available on the date the payment is due, your payment will not be processed.</b></li><li>If you have scheduled multiple payments to the same vendor for the same amount on the same day, duplicate transactions may be rejected even if the payments are from different accounts</li></ul>';
				var bottomDisclaimerReferenceNode = document.querySelector('.topic');
				bottomDisclaimerReferenceNode.parentNode.insertBefore(bottomDisclaimerNode, bottomDisclaimerReferenceNode);

				showPrintButton();
			} else {
				var topDisclaimerNode = document.createElement('div');
				topDisclaimerNode.setAttribute("class", "top-disclaimer");
				topDisclaimerNode.innerHTML = 'GST/HST 34 is used to file your GST/HST 34 return and optionally make a GST/HST 34 Payment. To Begin, enter your information on this form. The numbers for each field correspond with the numbered fields on the CRAs GST 34-2.<br /><p>Please Note: Payment Amount must be less than or equal to $1,000,000 - if you wish to make a payment for more than this amount you will need to perform two separate bill payments for unequal amounts. Click Help for more information.</p>';
				var bottomDisclaimerReferenceNode = document.querySelector('.details');
				bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
			}
		}

		//add top disclaimer on File GST/HST 34 screens
		else if (document.querySelector(".formEdit") == null && document.querySelector("#FileOnly") != null) {
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer");
			topDisclaimerNode.innerHTML = '<p>The information below is your GST/HST Return for Registrants. We will file this return with the CRA on your behalf. If you have a balance owing and wish to make a payment to the CRA, please select an account to pay from, select a payment date, and click File & Pay. Please note that you can change the Payment Enclosed amount (Line 115) by entering a different amount in the Payment Amount field. If you have a balance owing but do not wish to make a payment to the CRA at this time, click File Only. If you are claiming a refund your only option is to click File Only.</p>';
			var topDisclaimerReferenceNode = document.querySelector('.details');
			topDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, topDisclaimerReferenceNode);

			var bottomDisclaimerNode = document.createElement('div');
			bottomDisclaimerNode.setAttribute("class", "bottom-disclaimer");
			bottomDisclaimerNode.innerHTML = '<p>Your calculated balance is $0.00. Since the CRA does not process payments less than $2.00, your Payment Enclosed (line 115) has been set to $0.00. Please click “File Only” to file your GST 34 without making a payment.</p>';
			var topDisclaimerReferenceNode = document.querySelector('.formActions');
			topDisclaimerReferenceNode.parentNode.insertBefore(bottomDisclaimerNode, topDisclaimerReferenceNode);

			document.querySelector("table").classList.add("gst-table")
		} else if (document.querySelector(".formEdit") != null) {
			showAlertImageWithConfirmationDiv();

			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.confirmation');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);

			document.querySelector('.success-text').textContent = "Please review the information below";

			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "cancel-transfer-disclaimer");
			topDisclaimerNode.innerHTML = 'Confirm your GST/HST 34 information and click Continue. To make any changes to you info click the "Edit transaction details" link.';
			var bottomDisclaimerReferenceNode = document.querySelector('.confirmation');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
		}
	}

	//add top disclaimer on CRA Select Membership screens
	if (pageTitle == "CRA Select Membership") {
		var topDisclaimerNode = document.createElement('div');
		topDisclaimerNode.setAttribute("class", "top-disclaimer");
		topDisclaimerNode.innerHTML = 'Please select the membership you wish to use for this CRA filing/remittance.';
		var bottomDisclaimerReferenceNode = document.querySelector('.details');
		bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
	}

	//Add error image to input
	if (document.querySelector('.errors p') != null && (document.querySelector('.errors p').textContent == "There appears to be an error! All errors must be corrected before continuing." ||
			document.querySelector('.errors p').textContent == "There appears to be an error!  All errors must be corrected before continuing.")) {
		showErrorImage();

		if (document.querySelector('.requirederror') != null && pageTitle != "CRA Account History") {

			var requiredErrors = document.querySelectorAll('.requirederror');

			for (var i = 0; i < requiredErrors.length; i++) {
				var inputErrorImageNodeIDD = document.createElement('div');
				inputErrorImageNodeIDD.setAttribute("class", "error-image");
				requiredErrors[i].parentNode.insertBefore(inputErrorImageNodeIDD, requiredErrors[i]);
			}
		}
	}

	//Diff table height to CRA payments table's
	if (pageTitle == "Pay Business Taxes") {
		var tables = document.querySelectorAll('.summarydata');

		for (var i = 0; i < tables.length; i++) {
			tables[i].classList.add('cra-table')
		}

		var trs = document.querySelectorAll("tr");

		for (var i = 0; i < trs.length; i++) {
			if (!trs[i].hasClass('header')) {
				trs[i].classList.add("body-rows");
			}
		}
	}

	//Add class to cra Account table
	if (pageTitle == "Add CRA Account") {
		if (document.querySelector(".divHide") == null) {
			var tables = document.querySelectorAll('.summarydata');

			for (var i = 0; i < tables.length; i++) {
				tables[i].classList.add('cra-table--add-accs')
			}

			var tableHeaders = document.querySelectorAll('th');

			for (var i = 0; i < tableHeaders.length; i++) {
				tableHeaders[i].colSpan = "0";
			}
		} else {
			showSucessImageAndTextReceiptHeader();

			document.querySelector('.success-text').textContent = "Account successfully created";

			document.querySelector(".receiptHeader").classList.add("show-ReceiptHeader");

			showPrintButton();
		}
	}

	//Add class to Selects on CRA Account History page
	if (pageTitle == "CRA Account History") {
		var selects = document.querySelectorAll('select');

		for (var i = 0; i < selects.length; i++) {
			selects[i].classList.add('inline-select');
		}
	}
};