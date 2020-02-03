
(function(){	
	var currGmt = 6; // ENTER THE INITIAL GMT VALUE HERE
	$('select').on('change',function(){
		if($(this).val()!="novalue"){
			var $this 	= 	$(this),
				el		= 	$('.timezone'),
				gmt		=	$this.val(),
				line	=	"",
				arr		=	"",
				holdVal	=	"";
			
			for(var i=0; i<el.length; i++){
				line = line + el.eq(i).text() + "\n"; 
			}

			$.ajax({
				method	: 	'get',
				url		: 	'request.php',
				data	: 	{data : line, currentGmt : currGmt, gmt : gmt},
				success	: 	function(context){
					currGmt = gmt; 
					arr = context.split("\n");
					var j = 0;
					for(var i=0,j=0; i<arr.length; i++,j=j+2){
						holdVal = arr[i].split(" - ");
						console.log(holdVal[1] + "\n");
						el.eq(j).text(holdVal[0]);
						el.eq(j+1).text(holdVal[1]);
					}
				}
			});
		}
	});
})();
