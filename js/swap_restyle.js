// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	selectModel();
	selectMode();

	function selectPage() {

		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		
		$('#food').hide();
		$('#mahmoud').hide();
		$('#handicrafts').hide();


		$('#navHome').click(function(){
			$('#home').show();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').show(); 
			$('#food').hide();
			$('#mahmoud').hide();
			$('#handicrafts').hide();	  
		});

		$('#navAbout').click(function(){
			$('#home').hide();
			$('#about').show();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#food').hide();
			$('#mahmoud').hide();
			$('#handicrafts').hide();	  
		});

		$('#navAbout2').click(function(){
			$('#home').hide();
			$('#about').show();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#food').hide();
			$('#mahmoud').hide();
			$('#handicrafts').hide();	  
		});

		$('#navModels').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionJ').hide();
			$('#interactionN').hide();
			$('#aboutCityJ').hide();
			$('#aboutCityN').hide();
			$('#footerColor').show();
			$('#food').hide();
			$('#mahmoud').hide();
			$('#handicrafts').hide();
			$('#jercity').show();
			$('#nabcity').show(); 
			$('#CityButtons').show(); 
			$('#DestrinationsJ').hide(); 
			$('#DestrinationsN').hide();  
		});

		$('#navModels2').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionJ').hide();
			$('#interactionN').hide();
			$('#aboutCityJ').hide();
			$('#aboutCityN').hide();
			$('#footerColor').show();
			$('#food').hide();
			$('#mahmoud').hide();
			$('#handicrafts').hide();
			$('#jercity').show();
			$('#nabcity').show(); 
			$('#CityButtons').show(); 
			$('#DestrinationsJ').hide(); 
			$('#DestrinationsN').hide();  
		});

		$('#navJer').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionJ').show();
			$('#interactionN').hide();
			$('#aboutCityJ').show();
			$('#aboutCityN').hide();
			$('#VideoJ').hide();
			$('#AudioJ').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#jercity').hide();
			$('#nabcity').hide();
			$('#CityButtons').hide();  
			$('#DestrinationsJ').show();
			$('#DestrinationsN').hide(); 
			
		
		});

		$('#navAudioJ').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionJ').show();
			$('#aboutCityJ').show();
			$('#ImageJ').hide();
			$('#VideoJ').hide();
			$('#AudioJ').show();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#jercity').hide();
			$('#nabcity').hide(); 
			
		
		});
		$('#navImageJ').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionJ').show();
			$('#aboutCityJ').show();
			$('#ImageJ').show();
			$('#VideoJ').hide();
			$('#AudioJ').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#jercity').hide();
			$('#nabcity').hide(); 
			
		
		});

		$('#navVideoJ').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionJ').show();
			$('#aboutCityJ').show();
			$('#ImageJ').hide();
			$('#VideoJ').show();
			$('#AudioJ').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#jercity').hide();
			$('#nabcity').hide(); 
			
		
		});

		$('#navFood').click(function(){
			$('#home').hide();
			$('#food').show();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#rec2').hide();
			$('#rec1').show();
			$('#rec3').hide();
			$('#mahmoud').hide();
			$('#handicrafts').hide();	  
		});

		$('#navFood2').click(function(){
			$('#home').hide();
			$('#food').show();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#rec2').hide();
			$('#rec1').show();
			$('#rec3').hide();
			$('#mahmoud').hide();
			$('#handicrafts').hide();	  
		});
		$('#navHandicrafts').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#rec2').hide();
			$('#rec1').hide();
			$('#rec3').hide();
			$('#mahmoud').hide();
			$('#handicrafts').show();	  
		});

		$('#navMahmoud').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#rec2').hide();
			$('#rec1').hide();
			$('#rec3').hide();
			$('#mahmoud').show();
			$('#handicrafts').hide();	  
		});

		$('#navMahmoud2').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#rec2').hide();
			$('#rec1').hide();
			$('#rec3').hide();
			$('#mahmoud').show();
			$('#handicrafts').hide();	  
		});

		$('#jers').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').show();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide();
			$('#nablus').hide();
				  
		});

		
		$('#navNab').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionJ').hide();
			$('#interactionN').show();
			$('#aboutCityJ').hide();
			$('#VideoJ').hide();
			$('#AudioJ').hide();
			$('#aboutCityN').show();
			$('#VideoN').hide();
			$('#AudioN').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#jercity').hide();
			$('#nabcity').hide();
			$('#CityButtons').hide();  
			$('#DestrinationsJ').hide();
			$('#DestrinationsN').show(); 
			
		
		});

		$('#navAudioN').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionN').show();
			$('#aboutCityN').show();
			$('#ImageN').hide();
			$('#VideoN').hide();
			$('#AudioN').show();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#jercity').hide();
			$('#nabcity').hide(); 
			
		
		});
		$('#navImageN').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionN').show();
			$('#aboutCityN').show();
			$('#ImageN').show();
			$('#VideoN').hide();
			$('#AudioN').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#jercity').hide();
			$('#nabcity').hide(); 
			
		
		});

		$('#navVideoN').click(function(){
			$('#home').hide();
			$('#food').hide();
			$('#about').hide();
			$('#models').show();
			$('#interactionN').show();
			$('#aboutCityN').show();
			$('#ImageN').hide();
			$('#VideoN').show();
			$('#AudioN').hide();
			$('#spriteDescription').hide(); 
			$('#footerColor').hide(); 
			$('#jercity').hide();
			$('#nabcity').hide(); 
			
		
		});

	

		
	}

	function selectModel() {

		$('#navPS1').click(function(){
			$('#psone').show();
			$('#ps4').hide();
			$('#controller').hide();
			$('#lights').hide();
			$('#cup').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show();
			$('#food').hide();
			 
	
		});

		$('#navPS4').click(function(){
			$('#psone').hide();
			$('#ps4').show();
			$('#controller').hide();
			$('#lights').hide();
			$('#cup').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show(); 
			$('#food').hide();	  	  
		});

		$('#navController').click(function(){
			$('#psone').hide();
			$('#ps4').hide();
			$('#controller').show();
			$('#lights').hide();
			$('#cup').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show(); 
			$('#food').hide();	  	  
		});

		$('#navLight').click(function(){
			$('#psone').hide();
			$('#ps4').hide();
			$('#controller').hide();
			$('#lights').show();
			$('#cup').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show(); 
			$('#food').hide();	  	  
		});

		$('#navCup').click(function(){
			$('#psone').hide();
			$('#ps4').hide();
			$('#controller').hide();
			$('#lights').hide();
			$('#cup').show();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show(); 
			$('#food').hide();	  	  
		});



		
	}

	function selectMode() {

		$('#navPS1').click(function(){
			$('#psone').show();
			$('#ps4').hide();
			$('#controller').hide();
			$('#lights').hide();
			$('#cup').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show();
			 
	
		});

		$('#navPS4').click(function(){
			$('#psone').hide();
			$('#ps4').show();
			$('#controller').hide();
			$('#lights').hide();
			$('#cup').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show(); 	  	  
		});

		$('#navController').click(function(){
			$('#psone').hide();
			$('#ps4').hide();
			$('#controller').show();
			$('#lights').hide();
			$('#cup').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show(); 	  	  
		});

		$('#navLight').click(function(){
			$('#psone').hide();
			$('#ps4').hide();
			$('#controller').hide();
			$('#lights').show();
			$('#cup').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show(); 	  	  
		});

		$('#navCup').click(function(){
			$('#psone').hide();
			$('#ps4').hide();
			$('#controller').hide();
			$('#lights').hide();
			$('#cup').show();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide();
			$('#cameraControls').show(); 	  	  
		});



		
	}


});


function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
		document.getElementById('bodyColor').style.backgroundImage = 'url(assets/images/ps.jpg)';
			//document.getElementById('bodyColor').style.backgroundColor = 'lightblue';
			document.getElementById('headerColor').style.backgroundColor = '#FF0000';
			document.getElementById('footerColor').style.backgroundColor = '#FF9900';
			document.getElementById('psLogo').style.backgroundImage = 'url(assets/images/psoneLogo.png)';
			
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = '#FF6600';
			document.getElementById('headerClor').style.backgroundColor = '#FF9999';
			document.getElementById('footerColor').style.backgroundColor = '#996699';
			break;
		case 3:
			document.getElementById('bodyColor').style.backgroundColor = 'coral';
			document.getElementById('headerColor').style.backgroundColor = 'darkcyan';
			document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
			break;
		case 4:
			counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = 'lightgrey';
			document.getElementById('headerColor').style.backgroundColor = 'chocolate';
			document.getElementById('footerColor').style.backgroundColor = 'dimgrey';
			break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
	document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
}



$(".hover").mouseleave(
	function () {
	  $(this).removeClass("hover");
	}
  );



