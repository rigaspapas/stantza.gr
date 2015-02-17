angular.module( 'stantza', ['ngRoute', 'ngAnimate'] )
.config( ['$routeProvider', '$locationProvider',
    function ( $routeProvider, $locationProvider ) {        
        $routeProvider
        .when( '/home', {
            templateUrl: 'home.php'
        } )
        .when( '/samples', {
            templateUrl: 'samples.php'
        } )
        .when( '/shop', {
            templateUrl: 'shop.php'
        } )
        .when( '/clients', {
            templateUrl: 'clients.php'
        } )
        .when('/contact', {
            templateUrl: 'contact.php'
        } )
        .otherwise( {
            redirectTo: '/home'
        } );
    }
] )
.controller( 'pageCtrl', [ '$location', '$scope',
    function( $location, $scope ) {
        this.$path = $location.path().substring(1);
        
        this.setPage = function ( page ) {
            this.$path = page;
        };
        
        /* This is fires every time a new page is loaded */
        this.loaded = function () {
            /* This replaces jQuery's ready functin */
            angular.element( document ).ready( function() {
                
                /* Prefixes for the image preview */
                $( '#black-overlay, #outerprev' ).click( gallery_close );

                /* Set the image preview */
                $( '.samplecontainer img' ).click( function () {
                    console.log(1);
                    var toshow = $( this ).prop( 'src' ).toString().replace(/^.*[\/\\]/g, '').replace( '-thumb', '' );
                    create_gallery( 'samples/' + toshow , 'Sample image' );
                } );

                /* Shop images preview */
                $( 'img.img-thumb' ).click( function () {
                    var full_image = $( this ).prop( 'src' ).toString().replace(/^.*[\/\\]/g, '').replace( '-thumb' , '' );
                    create_gallery( 'shop/' + full_image , 'Shop preview' );
                } );

                $( '.close' ).click( function () {
                    $( '.tip' ).fadeOut( 1000 );
                } );
            } );
        };

    }
] );

/* Preview of pictures function */
function create_gallery( photo , name ) {
    $( '#black-overlay, #outerprev' ).removeClass( 'hidden' );
    //Loading GIF until the image loads
    $( '#innerprev' ).html( '<div id="closebutton"><img onclick="gallery_close();" alt="close" src="images/close.png" /></div> <img id="full" alt="'+name+'" src="images/loading.gif" />' );
    $.get( photo , function () {
        $( '#innerprev img#full' ).prop( 'src' , photo )
    } );
}

/* Close the preview */
function gallery_close() {
    $( '#black-overlay, #outerprev' ).addClass( 'hidden' );
}

