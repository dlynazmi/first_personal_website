/*all javascripts should go here*/
var idArrays = ["home_content","contact_content","about_content","skills_content"];
var idSkills = ["skills_computer","novels","short_films"];

/*array for quotes*/
var quotesArray = ["Go confidently in the direction of your dreams. Live the life you have imagined.",
"I have spread my dreams beneath your feet. Tread softly because you tread on my dreams."];
var quoters = ["Henry David Thoreau","W.B. Yeats" ]

function displayQuotes(id,content){
	var container = document.getElementById(id);
	container.innerHTML = content;
	var len = quotesArray.length;
	var ran = Math.floor(Math.random()*length) + 1;
};
				
function replaceContent(id, childId){
	for (var i=0; i<idArrays.length; i++)
    {
        if (idArrays[i] !=  id){
            document.getElementById(idArrays[i]).style.display = "none";
        }
        else {
            document.getElementById(idArrays[i]).style.display="block";
            
            /*display the content of skills differently*/
            if (idArrays[i] == "skills_content"){
            	document.getElementById("skills_info").style.display="block";
            	for (var j=0; j < idSkills.length; j++){
                	if (idSkills[j] != childId){
                    	document.getElementById(idSkills[j]).style.display = "none";
                	}// end of if
                	else{
                    	document.getElementById(idSkills[j]).style.display="block";
                    	document.getElementById("skills_info").style.display="none";
                	}// end of else
            	}//end of for loop
      		}//end of if
      		
      		else if (idArrays[i] == "home_content"){
      			var container = document.getElementById("quotes");
      			container.innerHTML = quotesArray[0];   		
      		}
        }
                        
                    
        
    }//end of for
}//end of function replaceContent

/**********************end of javascripts***************************/
    
/*for jquery scrip*/    
$(document).ready(function(){	
    
    $('.skills').hover(function(event){
		//hover over code
		var toolTip = $(this).attr('Tooltip');
		$('<span class="tooltip"></span>').text(toolTip)
				.appendTo('body')
				.css('top', (event.pageY - 10) + 'px')
				.css('left', (event.pageX + 20) + 'px')
				.fadeIn('slow');
		}, function() {
			//hover out code
			$('.tooltip').remove();
		}).mousemove(function(event){
			$('.tooltip')
				.css('top', (event.pageY - 10) + 'px')
				.css('left', (event.pageX + 20) + 'px');
	});
});//end doc.onready function