// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	var example = '<img class="pp-insert-all size-full aligncenter" src="http://www.andrew-ho.com/wp-content/uploads/2011/11/TajeVishal-2.jpg" alt="" width="900" height="600" /><img class="pp-insert-all size-full aligncenter" src="http://www.andrew-ho.com/wp-content/uploads/2011/11/TajeVishal-3.jpg" alt="" width="900" height="600" /><img class="pp-insert-all size-full aligncenter" src="http://www.andrew-ho.com/wp-content/uploads/2011/11/TajeVishal-5.jpg" alt="" width="900" height="600" />';
	var include;
	var include2;
	var eachimage;
	var caption = '';
	var flag;
	var where;
	
	
	
	$(document).delegate("#convert", "click", function(e) {
		e.preventDefault();
		
		include = (($("#imgtag").is(":checked")) ? true : false) ? '[IMG]' : '';
	    include2 = (($("#imgtag").is(":checked")) ? true : false) ? '[/IMG]' : '';
		where = $(".wherecaptions").val();
		flag = (($("input#addcaptions").is(":checked")) ? true : false) ? 1 : 0;
	    var string = $("#input").val(); 
	    var imgtag;
	    var $container = $('<div/>').html(string);

		var result = [];
		var c;
	
		$container.find('a,img').each(function(i) {
			if (i == 0) 
				{
		            c = 1;
		        }
		        else
		        {
		            c += 1;
		        }

		    if(this.tagName.toUpperCase() == 'IMG') {
				try {
					caption = $("#pictures").find('[caption="'+(i+1)+'"]').val();
				} 
				catch(err) {
				}
				if (where=="Before") {
		        	result.push([c+". "+caption+"\n"+include+this.src+include2]);
				}
				else {
					result.push([c+".\n"+include+this.src+include2+"\n"+caption]);
				}
				eachimage = ''+this.src;
		    }
		});
		$("#output").val(result.join("\n"));
	});
	
	

	$("#next").click(function() {
		if ($("#input").val() == '')
		{
			
		}
		else {
		$(this).off('click');
	    include = (($("#imgtag").is(":checked")) ? true : false) ? '[IMG]' : '';
	    include2 = (($("#imgtag").is(":checked")) ? true : false) ? '[/IMG]' : '';
		flag = (($("input#addcaptions").is(":checked")) ? true : false) ? 1 : 0;
	    var string = $("#input").val(); 
	    var imgtag;

	    var $container = $('<div/>').html(string);

	var result = [];
	var c;
	
	

	$container.find('a,img').each(function(i) {
		if (i == 0) 
			{
	            c = 1;
	        }
	        else
	        {
	            c += 1;
	        }
	
	    if(this.tagName.toUpperCase() == 'IMG') {
			
	        result.push([c+".\n"+include+this.src+include2]);
			eachimage = ''+this.src;
	    }

		if (flag) {
			$("#pictures").append('<div class="span3 well"><img src="http://www.andrew-ho.com/scripts/timthumb.php?src='+eachimage+'&w=270"/><p style="margin: 0 !important; height: 20px; line-height: 20px;">Caption:</p><textarea caption="'+(i+1)+'" class="boxsizingBorder" style="width: 100%;"></textarea></div>');
		}
	});
	
	if (flag) {
		$("#pictures").after('<div class="row"><div class="span"><a class="btn btn-success btn-large" href="#" id="convert">Convert It!</a></div></div>');
	} 
    else {
	$("#output").val(result.join("\n"));
	}
	}
	});
	
	
	

	$("input#addcaptions").change(function() {
		$(".wherecaptions").toggle();
	});
	

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/