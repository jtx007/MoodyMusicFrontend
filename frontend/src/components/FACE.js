const FACE = (() => {
  // Private Section
  var K_VERSION                   = "2.0";
  var K_FACE_URL                  = "https://api-face.sightcorp.com/api/detect/";
  var K_FORM_IMG_FIELD_NAME       = "img";
  var K_FORM_URL_FIELD_NAME       = "url";
  var K_FORM_APP_KEY_FIELD_NAME   = "fb6027a3e3d4439794f9bd52abb77f30";

  // Private support functions
  function isImage( file ) {
    if( file && ( file instanceof Blob ) && file.type )
      return ( file.type.substring( 0, "image".length ) == "image" );
    return false;
  };

  function isString( string ) {
    return ( typeof string == 'string' || string instanceof String );
  };

  function isFunction( funct ) {
    return ( typeof funct ) == 'function';
  };
  // TODO : Diego : implement and check isInteger for input validation

  return {
    /**
     * Sends an analysis request to the FACE API.
     *
     * @method sendFaceRequest
     *
     * @param options                     {Object}   An object containing the parameters for sending a FACE request.
     *
     * @param [options.img]               {Object}   A Blob (or Blob subclass) which has "image" as type. This parameter
     *                                               is not compatible with options.url. Only one has to be specified.
     *
     * @param [options.url]               {String}   A string representing the url of a remote image resource. This parameter
     *                                               is not compatible with options.img. Only one has to be specified.
     *
     * @param [options.app_key]           {String}   The FACE API application key. If the API request destination is not specified
     *                                               or the destination is face.sightcorp.com/api/detect/ then this parameter
     *                                               is mandatory.
     *
     * @param [options.destination]       {String}   A string representing the url of a remote server where to send the
     *                                               API request to. If the destination is not specified, the Sightcorp
     *                                               FACE service is used by default and app_key parameter is mandatory.
     *
     * @param options.onSuccessCallback   {Function} A callback function to be executed on successfull FACE API request.
     *                                               The function must accept a JSON object representing the FACE API response.
     *
     * @param [options.onFailureCallback] {Function} A callback function to be executed in case the FACE API request fails.
     *                                               The function must accept an integer identifying the error code, and a string
     *                                               describing the cause of the request failure. Both API error and HTTP error can
     *                                               trigger this function. In case of HTTP error, the HTTP error code is returned
     *                                               as error code.
     *
     * @param [options.csrf_token]        {String}   A string representing Cross-Site-Request-Forgery protection token.
     *                                               Some frameworks like Django use this string to prevent malicious attacks.
     *                                               http://en.wikipedia.org/wiki/Cross-site_request_forgery
     *
     * @return {Boolean} True if the request has been sent, false otherwise.
     *
     */

    sendFaceRequest : function( options ) {
      ////
      // Validate parameters
      if( !options ) {
        console.error( "Configuration missing" ); return false;
      }
      if( ( options.img && options.url ) || ( !options.img && !options.url ) ) {
        console.error( "Either img or url has to be present in the request" ); return false;
      }
      if( options.img && !isImage( options.img ) ) {
        console.error( "Selected file is not an image" ); return false;
      }
      if( options.url && !isString( options.url ) ) {
        console.error( "url parameter is not a string" ); return false;
      }
      if( options.app_key && !isString( options.app_key ) ) {
        console.error( "App is not a string" ); return false;
      }
      if( options.destination && !isString( options.destination ) ) {
        console.error( "destination parameter is not a string" ); return false;
      }
      if( !options.destination && !options.app_key ) {
        console.error( "App key is mandatory when destination is missing" ); return false;
      }
      if( !isFunction( options.onSuccessCallback ) ) {
        console.error( "onSuccessCallback is not defined or is not a function" ); return false;
      }
      if( options.onFailureCallback && !isFunction( options.onFailureCallback ) ) {
        console.error( "onFailureCallback is not a function" ); return false;
      }
      if( options.csrf_token && !isString( options.csrf_token ) ) {
        console.error( "csrf_token parameter is not a string" ); return false;
      }

      ////
      // Build request
      if( !options.destination )
        options.destination = K_FACE_URL;

      var formData = new FormData();
      if( options.img )
        formData.append( K_FORM_IMG_FIELD_NAME,     options.img );
      else
        formData.append( K_FORM_URL_FIELD_NAME,     options.url );
      formData.append(   K_FORM_APP_KEY_FIELD_NAME, options.app_key );

      ////
      // Send request
      var ajaxRequest = new XMLHttpRequest();
      ajaxRequest.open( "POST", options.destination, true );
      ajaxRequest.onreadystatechange = ( function( unused ) {
        if( ajaxRequest.readyState != 4 )
          return;
        if( ajaxRequest.status != 200 ) {
          if( options.onFailureCallback ) {
            options.onFailureCallback( ajaxRequest.status, "HTTP request failed." );
          }
          return;
        }
        var jsonResponse = JSON.parse( ajaxRequest.responseText );
        if( jsonResponse.error_code ) {
          if( options.onFailureCallback ) {
            options.onFailureCallback( jsonResponse.error_code, "FACE request failed : " + jsonResponse.description );
          }
          return;
        }
        options.onSuccessCallback( JSON.parse( ajaxRequest.responseText ) );
      } );
      if( options.csrf_token ) {
        ajaxRequest.setRequestHeader( "X-CSRFToken", options.csrf_token );
      }
      ajaxRequest.send( formData );
      return true;
    },

    getVersion : function() {
      return K_VERSION;
    },

    // Webcam Module
    webcam : ( function() {
                 return {
                   // Open camera and preview on video element with videoTagID id.
                   startPlaying : function( videoTagID ) {
                     if( !isString( videoTagID ) )
                       return;

                     var video = document.getElementById( videoTagID );

                     navigator.getMedia = ( navigator.getUserMedia ||
                                            navigator.webkitGetUserMedia ||
                                            navigator.mozGetUserMedia ||
                                            navigator.msGetUserMedia );

                     if( !navigator.getMedia ) {
                       alert( "Your browser does not support getUserMedia" );
                       return;
                     }

                     navigator.getMedia(
                       { video: true, audio: false },
                       function( stream ) {
                         var vendorURL = window.URL ||
                                         window.webkitURL ||
                                         window.mozURL ||
                                         window.msURL;
                         video.src = vendorURL.createObjectURL( stream );
                         video.play();
                       },
                       function( err ) {
                         console.log( "An error occured! " + err );
                       }
                     );
                   },

                   // Close the camera and stop the preview on video element with videoTagID id.
                   stopPlaying : function( videoTagID ) {
                     if( !isString( videoTagID ) )
                       return;

                     var video = document.getElementById( videoTagID );
                     video.pause();
                     video.src = null;
                   },

                   // Take a screenshot from the video element with videoTagID id and print it on
                   // the image element with imageTagID id. A callback can be optionally set when
                   // image.onload is fired.
                   takePicture : function( videoTagID, imageTagID, callback ) {
                     if( !isString( videoTagID ) || !isString( imageTagID ) )
                       return;

                     var video = document.getElementById( videoTagID );
                     var image = document.getElementById( imageTagID );

                     // Prepare the canvas
                     var canvas = document.createElement( 'canvas' );
                     canvas.width  = video.videoWidth;
                     canvas.height = video.videoHeight;

                     var context = canvas.getContext( '2d' );
                     context.drawImage( video, 0, 0 );
                     image.src = canvas.toDataURL( 'image/jpeg' );
                     if( isFunction( callback ) )
                       image.onload = callback;
                   },
                 };
               }() ),

    // Util Module
    util : ( function() {
               // Private data section
               var K_MAX_IMG_WIDTH  = 640;
               var K_MAX_IMG_HEIGHT = 480;

               return {

                 // computeSize() // TODO : Diego : Document functions
                 computeSize : function( width, height ) {
                   // Keep the ratio
                   if( width > K_MAX_IMG_WIDTH ) {
                     height = Math.round( height *= K_MAX_IMG_WIDTH / width );
                     width = K_MAX_IMG_WIDTH;
                   }

                   if( height > K_MAX_IMG_HEIGHT ) {
                     width = Math.round( width *= K_MAX_IMG_HEIGHT / height );
                     height = K_MAX_IMG_HEIGHT;
                   }
                   return { width : width, height : height };
                 },

                 // http://stackoverflow.com/a/11954337
                 // dataURItoBlob()
                 dataURItoBlob : function( dataURI ) {
                   if( !isString( dataURI ) )
                     return null;

                   var binary = atob( dataURI.split( ',' )[ 1 ] );
                   var arr = [];
                   for( var i = 0; i < binary.length; i++ ) {
                     arr.push( binary.charCodeAt( i ) );
                   }
                   return new Blob( [new Uint8Array( arr )], { type : 'image/jpeg' } );
                 },

                 // resizeImage()
                 resizeImage : function( img, callback, width, height ) {

                   // TODO : Diego : Do proper input checking (all functions)
                   if( !isImage( img ) || !isFunction( callback ) || ( width <= 0 ) || ( height <= 0 ) )
                     return false;

                   // Prepare the canvas
                   var canvas = document.createElement( 'canvas' );
                   canvas.width  = width;
                   canvas.height = height;

                   var context = canvas.getContext( '2d' );

                   var readImgCallback = function( data ) {
                     var tmpImg = new Image();
                     tmpImg.onload = function() {
                       context.drawImage( tmpImg, 0, 0, width, height );
                       context.canvas.toBlob( function( blob ) { callback( blob ); }, 'image/jpeg' );
                     };
                     tmpImg.src = data;
                   };
                   FACE.util.readFileAsBase64( img, readImgCallback );
                   return true;
                 },

                 // getImageFromInput()
                 getImageFromInput : function( inputFileID ) {
                   if( !isString( inputFileID ) )
                     return null;
                   return document.getElementById( inputFileID ).files[0];
                 },

                 // readFileAsBase64()
                 readFileAsBase64 : function( file, callback ) {
                   // Check for browser support
                   if( !( window.File &&
                          window.FileReader &&
                          window.FileList &&
                          window.Blob ) ) {
                     alert( 'Your browser does not support File API.' );
                     return false;
                   }

                   if( !isImage( file ) || !isFunction( callback ) )
                     return false;

                   var reader = new FileReader();
                   reader.onloadend = function() { callback( this.result ); };
                   reader.readAsDataURL( file );
                   return true;
                 },

                 // displayImage()
                 displayImage : function( img, Selfie, callback ) {
                   if( !isString( Selfie ) || !isImage( img ) )
                     return;

                   Selfie = document.getElementById( Selfie );
                   if( isFunction( callback ) )
                     Selfie.onload = callback();
                   FACE.util.readFileAsBase64( img, function( imgData ){ Selfie.src = imgData; } );
                 },

                 // resizeImageIfNeeded()
                 resizeImageIfNeeded : function( img, callback ) {
                   // TODO : Diego : Implement
                 },
               };

             }() ), // End util

  };

});

export default FACE
