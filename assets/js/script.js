$(function(){
	
	var note = $('#note'),
		ts = new Date(2023, 9, 7),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "Falta para la fiesta  ";
			
			message += days + " dia" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hora" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minuto" + ( minutes==1 ? '':'s' ) + " y ";
			message += seconds + " segundo" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
			 	message += "";
			}
			 else {
				message += "Falta 10 dia a partir de ahora para el gran dia!";
			}
			
			note.html(message);
		}
	});
	
		}
		);


