function checkKey(e)  {
	
	if ( $("#makeprev").css('display') == "none" )
			return;
	
	//This is the current image
	var selector = $("#full").prop( 'src' ).toString().replace(/^.*[\/\\]/g, '').replace( ".png" , "-thumb.png" ).replace( ".jpg" , "-thumb.jpg" ).replace( ".JPG" , "-thumb.JPG" );
	var selectorAlt = $("#full").prop( 'src' ).toString().replace(/^.*[\/\\]/g, '').replace( ".png" , "-thumb.png" ).replace( ".jpg" , "-thumb.jpg" ).replace( ".JPG" , "-thumb.png" );
	var active = 'img[src="samples/' + selector + '"]';
	var activeAlt = 'img[src="shop/' + selectorAlt + '"]';	
	
	if (e.keyCode=='37') {
		//Left key press
		//picking the previous sibling image
		var toshow = $( active ).prev('img[alt="sample"]').prop('src');
		var toshowAlt = $( activeAlt ).prev('img[alt="shopimage"]').prop('src');
	}	
	else if (e.keyCode=='39') {
		//Right key press		
		//picking the next sibling image
		var toshow = $( active ).next('img[alt="sample"]').prop('src');
		var toshowAlt = $( activeAlt ).next('img[alt="shopimage"]').prop('src');
	}
	else
		return;
	
	//If our goal is not null we change the image
	if ( toshow != undefined ) {
		toshow = toshow.toString().replace(/^.*[\/\\]/g, '').replace( "-thumb" , "" );
		makeprev( 'samples/' + toshow , 'Sample image' );
	}
	else if ( toshowAlt != undefined ) {
		toshowAlt = toshowAlt.toString().replace(/^.*[\/\\]/g, '').replace( "-thumb.png" , ".JPG" );
		makeprev( 'shop/' + toshowAlt , 'Sample image' );
	}
}
	 
document.onkeydown = checkKey;