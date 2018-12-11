window.onload = function(e) {
	
		var pageTitle = document.querySelector("#PageTitle").textContent;
		
		//Show Print Button on conclusion screen
		function showPrintButton()
		{
			var print = document.querySelectorAll(".topic");
				
			for (var i = 0; i < print.length; i++) {
				print[i].classList.add("show-topic");
			}
		}
		
		//Show Success Image on Conclusion screen
		function showSucessImageAndTextReceipN()
		{
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
		
		//Show Alert Image on Confirmation screen w/ Confirmation DIV
		function showAlertImageWithConfirmationDiv()
		{
			var confirmationDiv = document.querySelector('.confirmation').classList.add('transfer-confirmation');
			
			var alertImageNode = document.createElement('div');
			alertImageNode.setAttribute("class", "alert-image");
			var imageNode = document.createElement('img');
			alertImageNode.appendChild(imageNode);
			imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_alert.png");
			var alertImageReferenceNode = document.querySelector('.confirmation');
			alertImageReferenceNode.parentNode.insertBefore(alertImageNode, alertImageReferenceNode);
		}
		
		//Show Alert Image on Confirmation screen w/ Confirmation DIV
		function showAlertImageWithConfirmationDivOnReceiveAndDeclineScreens()
		{
			var confirmationDiv = document.querySelector('.instructions').classList.add('transfer-confirmation');
			
			var alertImageNode = document.createElement('div');
			alertImageNode.setAttribute("class", "alert-image");
			var imageNode = document.createElement('img');
			alertImageNode.appendChild(imageNode);
			imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_alert.png");
			var alertImageReferenceNode = document.querySelector('.instructions');
			alertImageReferenceNode.parentNode.insertBefore(alertImageNode, alertImageReferenceNode);
		}
		
		//Show Alert Image on Confirmation screen w/ Show Form DIV
		function showAlertImageWithShowFormDiv()
		{
			var confirmationDiv = document.querySelector('.showForm').classList.add('transfer-confirmation');
			
			var alertImageNode = document.createElement('div');
			alertImageNode.setAttribute("class", "alert-image");
			var imageNode = document.createElement('img');
			alertImageNode.appendChild(imageNode);
			imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_alert.png");
			var alertImageReferenceNode = document.querySelector('.showForm');
			alertImageReferenceNode.parentNode.insertBefore(alertImageNode, alertImageReferenceNode);
		}
		
		//Show Alert Image on Fullfil Confirmation screen
		function showAlertImageOnFullfilConfirmationScreen()
		{
			var confirmationDiv = document.querySelector('.rfmConfirm').classList.add('transfer-confirmation');
			
			var alertImageNode = document.createElement('div');
			alertImageNode.setAttribute("class", "alert-image");
			var imageNode = document.createElement('img');
			alertImageNode.appendChild(imageNode);
			imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_alert.png");
			var alertImageReferenceNode = document.querySelector('.rfmConfirm');
			alertImageReferenceNode.parentNode.insertBefore(alertImageNode, alertImageReferenceNode);
		}
		
		//Show Error Image on Conclusion screen
		function showErrorImageOnConclusionScreen()
		{
			var errorsImageNode = document.createElement('div');
			errorsImageNode.setAttribute("class", "errors-image");
			var imageNode = document.createElement('img');
			errorsImageNode.appendChild(imageNode);
			imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_error.png");
			var errorsImageReferenceNode = document.querySelector('.receiptN');
			errorsImageReferenceNode.parentNode.insertBefore(errorsImageNode, errorsImageReferenceNode);
		}
		
		//Show Error Image
		function showErrorImage()
		{
			var errorsImageNode = document.createElement('div');
			errorsImageNode.setAttribute("class", "errors-image");
			var imageNode = document.createElement('img');
			errorsImageNode.appendChild(imageNode);
			imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_error.png");
			var errorsImageReferenceNode = document.querySelector('.errors');
			errorsImageReferenceNode.parentNode.insertBefore(errorsImageNode, errorsImageReferenceNode);
		}
		
		// bottom disclaimer
		if(document.querySelector('.formActions') != null && pageTitle == "Send Interac e-Transfer®"){
			var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			
			if(screenWidth > 767)
			{
				var bottomDisclaimerNode = document.createElement('div');
				bottomDisclaimerNode.setAttribute("class", "bottom-disclaimer");
				var textInsideDiv = document.createElement('div');
				textInsideDiv.setAttribute("class", "disclaimer-text");
				textInsideDiv.innerHTML ="<div class='title'>Things to know about INTERAC® e-Transfers:</div><ul class='disclaimer-hine-height'><li>INTERAC® e-Transfers can only be sent and received via Canadian financial institutions</li><li>INTERAC® e-Transfers sent via mobile phone can only be sent to Canadian phone numbers.</li><li>The amount and a $1.50 Service Charge will be withdrawn from your account.</br>You may cancel the transfer before the recipient accepts it; however, the service charge will not be refunded.</br>The fee will apply even if you're over the daily eTransfer limit.</li><li>INTERAC® e-Transfers can only be sent from chequing or savings accounts. In order to send an INTERAC® e-Transfer from a different product type, transfer the funds to a chequing or savings account first.</li></ul>";
				bottomDisclaimerNode.appendChild(textInsideDiv);
				var bottomDisclaimerReferenceNode = document.querySelector('.conclusion');
				bottomDisclaimerReferenceNode.parentNode.insertBefore(bottomDisclaimerNode, bottomDisclaimerReferenceNode);
			}
			
			else{
				var bottomDisclaimerNode = document.createElement('div');
				bottomDisclaimerNode.setAttribute("class", "bottom-disclaimer");
				var textInsideDiv = document.createElement('div');
				textInsideDiv.setAttribute("class", "disclaimer-text");
				textInsideDiv.innerHTML ="<div class='title'>Things to know about INTERAC® e-Transfers:</div><p>INTERAC® e-Transfers can only be sent and received via Canadian financial institutions. INTERAC® e-Transfers sent via mobile phone can only be sent to Canadian phone numbers.</p><p>The amount and a $1.50 Service Charge will be withdrawn from your account. You may cancel the transfer before the recipient accepts it; however, the service charge will not be refunded. The fee will apply even if you're over the daily eTransfer limit.</p><p>INTERAC® e-Transfers can only be sent from chequing or savings accounts. In order to send an INTERAC® e-Transfer from a different product type, transfer the funds to a chequing or savings account first.</p>";
				bottomDisclaimerNode.appendChild(textInsideDiv);
				var bottomDisclaimerReferenceNode = document.querySelector('.conclusion');
				bottomDisclaimerReferenceNode.parentNode.insertBefore(bottomDisclaimerNode, bottomDisclaimerReferenceNode);
			}
		 }
		 
		 //Add error image to input
		if (document.querySelector('.errors p') != null && (document.querySelector('.errors p').textContent == "There appears to be an error! All errors must be corrected before continuing."
		|| document.querySelector('.errors p').textContent == "There appears to be an error!  All errors must be corrected before continuing."))
		{
			showErrorImage();

			//Add class to Request money form
			if(document.querySelector('.requestMoneyForm') != null)
			{
				document.querySelector('.requestMoneyForm').classList.add('money-form-errors');
			}			
			
			if(document.querySelector('.requirederror') != null && pageTitle != "CRA Account History" && pageTitle != "Search Interac e-Transfer® History"){
				
				var requiredErrors = document.querySelectorAll('.requirederror');
			
				for (var i = 0; i < requiredErrors.length; i++) {
					var inputErrorImageNodeIDD = document.createElement('div');
					inputErrorImageNodeIDD.setAttribute("class", "error-image");
					requiredErrors[i].parentNode.insertBefore(inputErrorImageNodeIDD, requiredErrors[i]);
				}
			}
			
			else if(document.querySelector('.requirederror') != null && pageTitle == "Search Interac e-Transfer® History")
			{
				var requiredErrors = document.querySelectorAll('.requirederror');
			
				for (var i = 0; i < requiredErrors.length; i++) {
					var inputErrorImageNodeIDD = document.createElement('div');
					inputErrorImageNodeIDD.setAttribute("class", "error-image-history");
					requiredErrors[i].parentNode.insertBefore(inputErrorImageNodeIDD, requiredErrors[i]);
				}
			}
		}
		
		//Fulfill Request screen
		if(pageTitle == "Fulfill Request")
		 {
			var inputValues = document.querySelectorAll(".input");
			inputValues[0].classList.add("input-in-line");
			var requiredAttr = document.querySelectorAll(".required");
			requiredAttr[3].classList.add("add-padd-top");
			document.querySelector(".requiredTCs").classList.add("consent-in-line");
		 }
		 
		 //Fulfill Request - Confirm screen
		 if(pageTitle == "Fulfill Request - Confirm")
		 {
			showAlertImageOnFullfilConfirmationScreen();
				
			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.rfmConfirm');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
				
			document.querySelector('.success-text').textContent = "Please confirm the fullfil request details";
		 }
		 
		 //Fulfill Request - Receipt screen
		 if(pageTitle == "Fulfill Request - Receipt")
		 {
			showSucessImageAndTextReceipN();
				
			document.querySelector('.success-text').textContent = "Fullfil request completed";
				
			showPrintButton();
				
			var dls = document.querySelectorAll("dl");
			dls[1].classList.add("no-pad-bottom");
				
			document.querySelector(".linkN").classList.add("request-button");
		 }
		 
		 //Receive Interac e-Transfer® screen
		 /*if(pageTitle == "Receive Interac e-Transfer®")
		 {
			var requiredAttr = document.querySelectorAll(".required");
			requiredAttr[0].classList.add("remove-padd-top");
			requiredAttr[0].textContent = "You have answered the security question correctly, please indicate whether you would like to accept or decline this transfer";
		 }*/
		 
		 //Receive Interac e-Transfer® - Confirm screen
		 if(pageTitle == "Receive Interac e-Transfer® - Confirm")
		 {
			showAlertImageWithConfirmationDivOnReceiveAndDeclineScreens();
				
			document.querySelector('.instructions').classList.add("success-text");
			document.querySelector('.instructions').classList.add("show-div");
		 }
		 
		 //Decline Interac e-Transfer® - Receipt screen
		 if(pageTitle == "Decline Interac e-Transfer® - Receipt")
		 {
			showSucessImageAndTextReceipN();
				
			document.querySelector('.success-text').textContent = "Transfer successfully declined";
				
			showPrintButton();
				
			var dls = document.querySelectorAll("dl");
			dls[1].classList.add("no-pad-bottom");
				
			document.querySelector(".linkN").classList.add("request-button");
		 }
		 
		 //Add Recipient screen
		 if(pageTitle == "Add Recipient")
		 {
			if(document.querySelector("#id7") != null){
				document.querySelector("#id7").classList.add("recipient-last-field");
			}
			
			document.querySelector(".instructions").classList.add("show-instructions");
			document.querySelector(".hint").classList.add("display-hint");
		 }
		 
		 //Add Recipient - Confirm screen
		 if(pageTitle == "Add Recipient - Confirm")
		 {
			showAlertImageWithConfirmationDiv();
				
			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.confirmation');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
				
			document.querySelector('.success-text').textContent = "Please confirm recipient details";
		 }
		 
		 //Add Recipient - Receipt screen
		 if(pageTitle == "Add Recipient - Receipt")
		 {
			showSucessImageAndTextReceipN();
				
			document.querySelector('.success-text').textContent = "Recipient added successfully";
				
			showPrintButton();
				
			var dls = document.querySelectorAll("dl");
			dls[0].classList.add("hide-dl");
			dls[1].classList.add("no-pad-bottom");
				
			document.querySelector(".linkN").classList.add("d-none");
		 }
		 
		 //Request Money via INTERAC e-Transfer® screen
		 /*if(pageTitle == "Request Money via INTERAC e-Transfer®")
		 {
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer");
			topDisclaimerNode.innerHTML ='Choose a recipient to request money from using Interac e-Transfer or go to Manage Recipients to add a new one';
			var bottomDisclaimerReferenceNode = document.querySelector('.showForm');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
		 }*/
		 
		 //Request Money - Confirm screen
		 /*if(pageTitle == "Request Money - Confirm")
		 {
			showAlertImageWithShowFormDiv();
				
			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.showForm');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
				
			document.querySelector('.success-text').textContent = "Please confirm money request details";
		 }*/
		 
		 //Request Money - Receipt screen
		 /*if(pageTitle == "Request Money - Receipt")
		 {
			showSucessImageAndTextReceipN();
				
			document.querySelector('.success-text').textContent = "Request Status Completed";
				
			//showPrintButton();
				
			var link1 = document.querySelector(".link1").classList.add("show-link1");
		 }*/
		 
		 //Resend Money Request Notice - Confirm screen
		 if(pageTitle == "Resend Money Request Notice - Confirm")
		 {
			showAlertImageWithShowFormDiv();
				
			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.showForm');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
				
			document.querySelector('.success-text').textContent = "Please confirm request notice details";
		 }
		 
		 //Resend Money Request Notice - Receipt screen
		 if(pageTitle == "Resend Money Request Notice - Receipt")
		 {
			showSucessImageAndTextReceipN();
				
			document.querySelector('.success-text').textContent = "Request resent successfully";
				
			//showPrintButton();
		 }
		 
		 //Resend Interac e-Transfer® Notice - Confirm screen
		 if(pageTitle == "Resend Interac e-Transfer® Notice - Confirm")
		 {
			showAlertImageWithConfirmationDiv();
				
			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.confirmation');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
				
			document.querySelector('.success-text').textContent = "Please confirm sent notice details";
		 }
		 
		 //Resend Interac e-Transfer® Notice - Receipt screen
		 if(pageTitle == "Resend Interac e-Transfer® Notice - Receipt")
		 {
			showSucessImageAndTextReceipN();
				
			document.querySelector('.success-text').textContent = "Notice resent successfully";
				
			//showPrintButton();
		 }
		 
		 //Cancel Money Request screen
		 if(pageTitle == "Cancel Money Request")
		 {
			showAlertImageWithShowFormDiv();
				
			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.showForm');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
				
			document.querySelector('.success-text').textContent = "Please confirm money request cancelation details";
			document.querySelectorAll('.required')[4].classList.add('last-required');
				
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "cancel-transfer-disclaimer");
			topDisclaimerNode.innerHTML ='This message will appear in the cancellation notice sent to the recipient';
			var bottomDisclaimerReferenceNode = document.querySelector('.formActions');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
		 }
		 
		 //Cancel Money Request - Receipt screen
		 if(pageTitle == "Cancel Money Request - Receipt")
		 {
			showSucessImageAndTextReceipN();
				
			document.querySelector('.success-text').textContent = "Transfer Status Deleted";
				
			//showPrintButton();
		 }
		 
		 //Edit Money Request - Receipt screen
		 if(pageTitle == "Edit Money Request - Receipt")
		 {
			document.querySelector(".link1").classList.add("back-to-pending-transfers");
			var topics = document.querySelectorAll(".topic");
			topics[0].classList.add("formActions");
			for (var i = 0; i < topics.length; i++) {
				topics[i].classList.add("money-request-topic");
			}
			
			showSucessImageAndTextReceipN();
				
			document.querySelector('.success-text').textContent = "Request Status Completed";
				
			showPrintButton();
		 }
		 
		 //Cancel Interac e-Transfer® - Confirm screen
		 if(pageTitle == "Cancel Interac e-Transfer® - Confirm")
		 {
			document.querySelector("textarea").classList.add("cancel-transfer-textarea")
			document.querySelector(".hint").classList.add("display-hint");
			document.querySelector(".hint").classList.add("cancel-hint-padding");
			    
			showAlertImageWithConfirmationDiv();
				
			var inputSuccessImageNode = document.createElement('div');
			inputSuccessImageNode.setAttribute("class", "success-text");
			var inputErrorImageReferenceNode = document.querySelector('.confirmation');
			inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
				
			document.querySelector('.success-text').textContent = "Please confirm money sent cancelation details";
				
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "cancel-transfer-disclaimer");
			topDisclaimerNode.innerHTML ='<b>NOTE:</b> The service charge will not be refunded.';
			var bottomDisclaimerReferenceNode = document.querySelector('.confirmation');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
		 }
		 
		 //Cancel Interac e-Transfer® - Receipt screen
		 if(pageTitle == "Cancel Interac e-Transfer® - Receipt")
		 {
			document.querySelector(".receipts").classList.add("cancel-transfer-conclusion");
			 
			showSucessImageAndTextReceipN();
				
			document.querySelector('.success-text').textContent = "Transfer Status Deleted";
				
			showPrintButton();
		 }
		 
		 //Add success image to Success Transfer
		if(pageTitle == "Send Interac e-Transfer®")
		{
			if(document.querySelector('.errors p') == null)
			{
				var topDisclaimerNode = document.createElement('div');
				topDisclaimerNode.setAttribute("class", "top-disclaimer");
				topDisclaimerNode.innerHTML ='Choose a recipient to send money with Interac e-Transfer or go to Manage Recipients to add a new one.';
				var bottomDisclaimerReferenceNode = document.querySelector('.certapaySendTransfer');
				bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
			}
			
			else
			{
				var firstRequired = document.querySelectorAll(".required");
				var topDisclaimerNode = document.createElement('div');
				topDisclaimerNode.setAttribute("class", "top-disclaimer--errors");
				topDisclaimerNode.innerHTML ='Choose a recipient to send money with Interac e-Transfer or go to Manage Recipients to add a new one.';
				var bottomDisclaimerReferenceNode = firstRequired[0];
				bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
			}
		}
		
		//Hide cancel button on mobile
		if(pageTitle == "Send Interac e-Transfer®" || pageTitle == "Request Money via INTERAC e-Transfer®" || pageTitle == "Autodeposit Registration" || pageTitle == "Edit Sender Profile")
		{
			document.querySelector('.formCancel').classList.add("hide-cancel-button");
		}

		//Add placeholder to date input
		if(pageTitle == "Search Interac e-Transfer® History")
		{
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer--search-transfers");
			topDisclaimerNode.innerHTML ='Enter a date range to display you transfer history';
			var bottomDisclaimerReferenceNode = document.querySelector('.instructions');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
			
			var selects = document.querySelectorAll('.hasDatepicker');
			
			for (var i = 0; i < selects.length; i++)
			{
				selects[i].placeholder = "dd/mm/yyyy";
			}
		}
		
		//Add class to control on Pending Interac e-Transfer®s screen
		if(pageTitle == "Pending Interac e-Transfer®s")
		{
			var hrefs = document.querySelectorAll('a');
			
			for (var i = 0; i < hrefs.length; i++)
			{
				if(hrefs[hrefs.length - 1] == hrefs[i])
				{
					hrefs[i].innerHTML  = 'Send Interac e-Transfer®';
				}
				
				else
				{
					hrefs[i].innerHTML  = '';
				}
				
			}
			
			var table = document.querySelector('.summarygroup');
			table.classList.add('pending-transfers-table');
			
			var topDisclaimerNode = document.createElement('div');
			topDisclaimerNode.setAttribute("class", "top-disclaimer");
			topDisclaimerNode.innerHTML ='To remind an Interac e-Transfer&reg; Recipient to accept the funds, click on <b>Resend Notice</b> beside the transfer. To edit a request, click on <b>Edit</b>. To cancel an Interac e-Transfer&reg;, or receive a refund for a declined e-Transfer click on <b>Cancel</b>.';
			var bottomDisclaimerReferenceNode = document.querySelector('.summarygroup');
			bottomDisclaimerReferenceNode.parentNode.insertBefore(topDisclaimerNode, bottomDisclaimerReferenceNode);
		}
		
		//add class to formCancel on Edit Money Request screen
		/*if(pageTitle == "Edit Money Request")
		{
			var formCancel = document.querySelectorAll('.formCancel');
			formCancel[1].classList.add('hide-clear-button');
		}*/

		//Remove Delete and Edit text on Recipients screen
		if(pageTitle == "Recipients")
		{
			document.querySelector(".link1").classList.add("hiden-recipients");
			document.querySelector(".link2").classList.add("hiden-recipients");
			document.querySelector(".link4").classList.add("hiden-recipients");
			var topic = document.querySelector('.topic');
			var nav = document.querySelector('.nav');
			var hrefs = document.querySelectorAll('a');
			var tables = document.querySelectorAll('.summarydata');
			var tdControl = document.querySelectorAll('.control');
			topic.classList.add('recipient-topic');
			nav.classList.add('recipient-topic');
			
			for (var i = 0; i < tables.length; i++) {
				tables[i].classList.add('recipients-table')
			}
		}
		
		//Add class to Autodeposit settings screen tables
		/*if(pageTitle == "Autodeposit Settings")
		{
			var tables = document.querySelectorAll('.registeredMembers');
			tables[0].classList.add("auto-deposit-settings--first-table");
			for (var i = 1; i < tables.length; i++) {
				tables[i].classList.add('autodeposit-settings-table');
			}
			
			var successImageNode = document.createElement('div');
			successImageNode.setAttribute("class", "success-image");
			var imageNode = document.createElement('img');
			successImageNode.appendChild(imageNode);
			imageNode.setAttribute("src", "/DynamicContent/Resources/Images/warning_alert.png");
			var successImageReferenceNode = document.querySelector('.deleteModalText');
			successImageReferenceNode.parentNode.insertBefore(successImageNode, successImageReferenceNode);
		}*/
		
		
		//Add class to eTransfer History screen table
		if(pageTitle == "Interac e-Transfer® History")
		{
			if(document.querySelector("span") != null)
			{
				if(document.querySelectorAll("span")[0].textContent == "You do not have any Interac e-Transfer® within this date range.")
				{
					document.querySelector('.summarydata').classList.add('etransfer-history-table-withoutResults');
					document.querySelector(".prose").classList.add("prose-w-100");
				}
				
				else{
					document.querySelector('.summarydata').classList.add('etransfer-history-table');
				}
			}
			
			else{
				document.querySelector('.summarydata').classList.add('etransfer-history-table');
				var showButton = document.querySelectorAll('.topic');
				showButton[2].classList.add("d-block");
				showButton[3].classList.add("d-block");
				document.querySelector(".conclusion").classList.add("conclusion-pad-top");
			}
		}
		
		//Add class to eTransfer History screen table
		if(pageTitle == "Interac e-Transfer® History - Details")
		{
			document.querySelector('.summarydata').classList.add('etransfer-history-table-details');
			var showButton = document.querySelectorAll('.control');
			showButton[0].classList.add("history-details-button");
			document.querySelector(".conclusion").classList.add("conclusion-pad-top-details");
		}
		
		//Add class to Delete Recipient error page
		if(pageTitle == "Delete Recipient - Confirm")
		{
			if (document.querySelector('.errors p') != null)
			{
				document.querySelector('.errors').classList.add('delete-recipient-error');
				
				showErrorImage();
			}
			
			if(document.querySelector('#Continue') != null)
			{
				showAlertImageWithConfirmationDiv();
				
				var inputSuccessImageNode = document.createElement('div');
				inputSuccessImageNode.setAttribute("class", "success-text");
				var inputErrorImageReferenceNode = document.querySelector('.confirmation');
				inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
				
				document.querySelector('.success-text').textContent = "Please confirm recipient details";
			}
		}
		
		//Add warning image to Edit Recipient - Confirm screen
		if(pageTitle == "Edit Recipient - Confirm")
		{
			if(document.querySelector('#Continue') != null)
			{
				showAlertImageWithConfirmationDiv();
					
				var inputSuccessImageNode = document.createElement('div');
				inputSuccessImageNode.setAttribute("class", "success-text");
				var inputErrorImageReferenceNode = document.querySelector('.confirmation');
				inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
					
				document.querySelector('.success-text').textContent = "Please confirm recipient details";
			}
		}
		
		//Show security information disclaimer on Edit Recipient screen
		
		if(pageTitle == "Edit Recipient")
		{
			document.querySelector(".instructions").classList.add("show-instructions");
		}
		
		//Add success image to Edit Recipient - Receipt screen
		
		if(pageTitle == "Edit Recipient - Receipt")
		{
			//Status Completed
			if(document.querySelector(".status").textContent == "Completed")
			{
				showSucessImageAndTextReceipN();
				
				document.querySelector('.success-text').textContent = "Recipient Updated Successfully";
				
				showPrintButton();
				
				var dls = document.querySelectorAll("dl");
				dls[0].classList.add("hide-dl");
			}
				
			//Status Not Completed
			if(document.querySelector(".status").textContent == "Not Completed" || document.querySelector(".status").textContent == "Not Created")
			{
				showErrorImageOnConclusionScreen()
					
				var inputSuccessImageNode = document.createElement('div');
				inputSuccessImageNode.setAttribute("class", "success-text");
				var inputErrorImageReferenceNode = document.querySelector('.receiptN');
				inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
					
				document.querySelector('.success-text').textContent = "Recipient Not Updated";
			}
		}
		
		//Add success image to Delete Recipient - Receipt screen
		if(pageTitle == "Delete Recipient - Receipt")
		{
			if (document.querySelector('.status').textContent == "Completed")
			{
				showSucessImageAndTextReceipN();
				
				document.querySelector('.success-text').textContent = "Recipient Deleted Successfully";
				
				showPrintButton();
				
				var dls = document.querySelectorAll("dl");
				dls[0].classList.add("hide-dl");
				dls[1].classList.add("no-pad-bottom");
			}
		}
		
		//Add success image to Success Transfer
		if(pageTitle == "Send Interac e-Transfer® - Receipt")
		{
			if (document.querySelector('.status').textContent == "Completed")
			{
				showSucessImageAndTextReceipN();
				
				document.querySelector('.success-text').textContent = "Transfer Status Complete";
				
				var lastdl = document.querySelectorAll("dl");
				
				lastdl[9].classList.add("last-dl-break");
				
				var receipts = document.querySelector(".receipts").classList.add("edit-send-profile-receipt");
				
				showPrintButton();
			}
		}
		
		//Add confirm image to confirm transfers screen
		if(pageTitle == "Send Interac e-Transfer® - Confirm")
		{
			if (document.querySelector('.formEdit') != null)
			{
				showAlertImageWithConfirmationDiv();
				
				var inputSuccessImageNode = document.createElement('div');
				inputSuccessImageNode.setAttribute("class", "success-text");
				var inputErrorImageReferenceNode = document.querySelector('.confirmation');
				inputErrorImageReferenceNode.parentNode.insertBefore(inputSuccessImageNode, inputErrorImageReferenceNode);
				
				document.querySelector('.success-text').textContent = "Please confirm sending money request details";
				
				var lastValue = document.querySelectorAll(".oneColRow");
				
				lastValue[8].classList.add("last-value-break");
			}
			
			if(document.querySelector('.errors p') != null)
			{
				showErrorImage();
			}
			
			if(document.querySelector('.formActions') != null){
				var bottomDisclaimerNode = document.createElement('div');
				bottomDisclaimerNode.setAttribute("class", "bottom-disclaimer--confirm-screen");
				var textInsideDiv = document.createTextNode("Note: The amount and a $1.50 Service Charge will be withdrawn from your account. You may cancel the transfer before the recipient accepts it; however, the service charge will not be refunded. The fee will apply even if you're over the daily eTransfer limit.");
				bottomDisclaimerNode.appendChild(textInsideDiv);
				var bottomDisclaimerReferenceNode = document.querySelector('.conclusion');
				bottomDisclaimerReferenceNode.parentNode.insertBefore(bottomDisclaimerNode, bottomDisclaimerReferenceNode);
			}
		}
		
		//add class to conclusion class on Create Your Sender Profile screen
		if(pageTitle == "Create Your Sender Profile")
		{
			document.querySelector(".hint").classList.add("display-hint");
			document.querySelector(".conclusion").classList.add("create-profile-conclusion");
		}
		
		//add class to conclusion class on Create Your Sender Profile screen
		if(pageTitle == "Create Sender Profile - Receipt")
		{
			if (document.querySelector('.status').textContent == "Completed")
			{
				showSucessImageAndTextReceipN();
				
				document.querySelector('.success-text').textContent = "Profile Status Completed";
				
				showPrintButton();
			}
		}
		
		//display hint on Edit Sender Profile screen
		if(pageTitle == "Edit Sender Profile")
		{
			document.querySelector(".hint").classList.add("display-hint");
		}
		
		//Add success image to Edit Profile
		if(pageTitle == "Edit Sender Profile - Receipt")
		{
			if (document.querySelector('.status').textContent == "Completed")
			{
				showSucessImageAndTextReceipN();
				
				document.querySelector('.success-text').textContent = "Profile Status Completed";
				
				var receipts = document.querySelector(".receipts").classList.add("edit-send-profile-receipt");
				
				showPrintButton();

			}
		}
};
