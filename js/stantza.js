(function() {
    var app = angular.module( 'stantza', [] );
    
    app.controller( 'pageController', function () {
        /* Default location */
        this.location = 'home';
        
        /* Possible locations */
        pages = [ 'home', 'samples', 'shop', 'clients', 'contact' ];
        
        /* Check for selected location on hash */
        if ( window.location.hash && pages.indexOf( window.location.hash.substring(2) ) >= 0 )
            this.location = window.location.hash.substring(2);
    
        /* On-load functionality */
        this.pageLoaded = function () {            
             //Prefixes for the image preview
            $( '#black-overlay, #outerprev' ).click( gallery_close );

            //Set the image preview
            $( '.samplecontainer img' ).click( function () {
                var toshow = $( this ).prop( 'src' ).toString().replace(/^.*[\/\\]/g, '').replace( '-thumb', '' );
                create_gallery( 'samples/' + toshow , 'Sample image' );
            } );

            //Shop images preview
            $( '#shop img' ).click( function () {
                var toshow = $( this ).prop( "src" ).toString().replace(/^.*[\/\\]/g, '').replace( "-thumb.png" , ".JPG" );
                create_gallery( 'shop/' + toshow , 'Shop preview' );
            } );

            $( '#samples h3' ).click( function () {
                $( this ).toggleClass( 'expanded' );
                $( this ).next().slideToggle();
            } );

            $( '.close' ).click( function () {
                $( '.tip' ).fadeOut( 1000 );
            } );
        };
    } );
    
})();

var easing = 200;

/* Preview of pictures function */
function create_gallery( photo , name ) {
    $( '#black-overlay' ).fadeIn( easing );
    $( '#outerprev' ).fadeIn( easing );
    //Loading GIF until the image loads
    $( '#innerprev' ).html( '<div id="closebutton"><img onclick="gallery_close();" alt="close" src="images/close.png" /></div> <img id="full" alt="'+name+'" src="images/loading.gif" />' );
    $.get( photo , function () {
        $( '#innerprev img#full' ).prop( 'src' , photo )
    } );
    return;
}

/* Close the preview */
function gallery_close() {
    $( '#black-overlay' ).fadeOut( easing );
    $( '#outerprev' ).fadeOut( easing );
    return;
}

