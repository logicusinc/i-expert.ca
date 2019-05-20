$(document).ready(function(){ 
	$("#ajax-contact-form").submit(function(){
		var str = $(this).serialize(); 
		$.ajax( { type: "POST", url: "contact.php", data: str, success: function(msg){ 
				if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
					{ result = '<div class="notification_ok">Votre message a été envoyé avec succès. Merci!<br> <a href="#" onclick="freset();return false;">Envoyer un nouveau message</a></div>'; $("#fields").hide(); } 							
				else
					{ result = msg; } 
				$("#note").html(result); 
			} 
		}); 
		return false; 
	}); 
});
				
function freset(){ 	
	$("#note").html('');
	document.getElementById('ajax-contact-form').reset();
	$("#fields").show();
};