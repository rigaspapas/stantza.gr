function checkKey(e) {
	
	if ( $( '#black-overlay' ).hasClass( 'hidden' ) )
		return;
	
	//This is the current image
	var selector = $( '#full' ).prop( 'src' ).toString().replace(/^.*[\/\\]/g, '' ).replace( '.png' , '-thumb.png' ).replace( '.jpg' , '-thumb.jpg' ).replace( '.JPG' , '-thumb.JPG' );
	var activeSample = 'img[src="samples/' + selector + '"]';
	var activeShop = 'img[src="shop/' + selector + '"]';	
	
	if (e.keyCode=='37' ) {
		//Left key press
		//picking the previous sibling image
		var toshowSample = $( activeSample ).prev( 'img[alt="sample"]' ).prop( 'src' );
		var toshowShop = $( activeShop ).prev( 'img.img-thumb' ).prop( 'src' );
	}	
	else if (e.keyCode=='39' ) {
		//Right key press		
		//picking the next sibling image
		var toshowSample = $( activeSample ).next( 'img[alt="sample"]' ).prop( 'src' );
		var toshowShop = $( activeShop ).next( 'img.img-thumb' ).prop( 'src' );
	}
	else
		return;
	
	//If our goal is not null we change the image
	if ( toshowSample != undefined ) {
		toshowSample = toshowSample.toString().replace(/^.*[\/\\]/g, '' ).replace( '-thumb', '' );
		create_gallery( 'samples/' + toshowSample , 'Sample image' );
	}
	else if ( toshowShop != undefined ) {
		toshowShop = toshowShop.toString().replace(/^.*[\/\\]/g, '' ).replace( '-thumb.JPG', '.JPG' );
		create_gallery( 'shop/' + toshowShop , 'Shop image' );
	}
}
	 
document.onkeydown = checkKey;