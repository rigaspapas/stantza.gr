var easing = 200;
/* Fix the left bar so fit the window */
function fitwindow () {
	//Let the body fit the window
	$("body").css( 'min-height' , $(window).height() - 1 );
	//Content
	$("#content").css( 'min-height' , $(window).height() - 108 );
	//The background of the images preview
	$("#makeprev").css('min-height' , $("body").height() );
	//Let the element fit the body
	$("#left").css( 'min-height' , $("body").height() );
	//Fix the position of the images
	$("#innerprev").css( 'max-height' , $(window).height() - 50 );
}

/* Preview of pictures function */
function makeprev( photo , name ) {
	fitwindow();
	$("#makeprev").fadeIn( easing );
	$("#outerprev").fadeIn( easing );
	//Loading GIF until the image loads
	$("#innerprev").html( '<div id="closebutton"><img onclick="prevclose();" alt="close" src="images/close.png" /></div> <img id="full" alt="'+name+'" src="images/loading.gif" />' );
	$.get( photo , function () { $('#innerprev img#full').prop( 'src' , photo ) });
	return;
}

/* Close the preview */
function prevclose() {
	$("#makeprev").fadeOut( easing );
	$("#outerprev").fadeOut( easing );
	return;
}

$( document ).ready(
	function () {
		//Fix the left bar
		fitwindow();
		
		//Effects for the top-bar
		$('#slide img').css({'opacity':'0.8'});
		$('#slide img').mouseover(
			function () {
				$(this).stop().css({'border-color':'#f8b156'}).animate( {'opacity' : '1' ,  'border-bottom-width' : '5px'} , 200);
			}
		);
		$('#slide img').mouseout(
			function () {
				$(this).stop().css({'border-color':'#000'}).animate( {'opacity' : '0.8' , 'border-bottom-width' : '1px'} , 200);
			}
		);
		
		//Prefixes for the image preview
		$("#makeprev").click(
			prevclose
		);
		
		//Set the image preview
		$( '#samples .preview img' ).click(
			function () {
				var toshow = $(this).prop( "src" ).toString().replace(/^.*[\/\\]/g, '').replace( "-thumb" , "" );
				makeprev( 'samples/' + toshow , 'Sample image' );
			}
		);
		
		//Shop images preview
		$( '#slide li img' ).click(
			function () {
				var toshow = $(this).prop( "src" ).toString().replace(/^.*[\/\\]/g, '').replace( "-th2" , "" );
				makeprev( 'shop/' + toshow , 'Shop preview' );
			}
		);
		
		//Shop images preview
		$( '#shop img' ).click(
			function () {
				var toshow = $(this).prop( "src" ).toString().replace(/^.*[\/\\]/g, '').replace( "-thumb.png" , ".JPG" );
				makeprev( 'shop/' + toshow , 'Shop preview' );
			}
		);
		
		$("#samples h3").click(
			function () {
				$(this).next().toggle();
				
				if ( $(this).next()[0].style.display == 'none' )
					$(this).css( {'background-image' : 'url(\'images\/expand.png\')' } );
				else
					$(this).css( {'background-image' : 'url(\'images\/collapse.png\')' } );
			}
		);
		
		$("span.close").click(
			function () {
				$("div.tip").fadeOut( 1000 );
			}
		);
	}
);

$( window ).resize(
	function () {
		fitwindow();
	}
);