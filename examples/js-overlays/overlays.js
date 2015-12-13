console.log('working');

$(function() { // document.ready
    console.log('js loaded');
  	$("#overlay-button").click(function() {
	  	console.log( "Overlay button clicked" );
	    $('.overlay').empty;
	    $('.overlay').append('<img src="../overlay-1.png"/>');
	});

  $("#track-again-button").click(function() {
  	var tracker = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
      tracker.setStepSize(1.3);

      tracking.track('#img', tracker);

      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          window.plot(rect.x, rect.y, rect.width, rect.height);
        });
      });

      window.plot = function(x, y, w, h) {
        if((x != 0) && (y != 0)) {
        	var rect = document.createElement('div');
	        document.querySelector('.demo-container').appendChild(rect);
	        rect.classList.add('rect');
	        rect.style.width = w + 'px';
	        rect.style.height = h + 'px';
	        rect.style.left = (img.offsetLeft + x) + 'px';
	        rect.style.top = (img.offsetTop + y) + 'px';
	        console.log('a face has been detected')
	      }
        else {
        	console.log('no face detected');
        }
      };
      console.log('track again button clicked');
  });

  // this isn't being used
  $("#btnSave").click(function() { 
        html2canvas($("#video"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);

                // Convert and download as image 
                Canvas2Image.saveAsPNG(canvas); 
                $("#img-out").append(canvas);
                // Clean up 
                //document.body.removeChild(canvas);
            }
        });
    });

  // Capturing HTML 5 Video To An Image
	// http://odetocode.com/blogs/scott/archive/2013/01/04/capturing-html-5-video-to-an-image.aspx
	(function() {
	    "use strict";
	 
	    var video, $output;
	    var scale = 0.25;
	 
	    var initialize = function() {
	        $output = $("#output");
	        video = $("#video").get(0);
	        $("#capture").click(captureImage);                
	    };
	 
	    var captureImage = function() {
	        var canvas = document.createElement("canvas");
	        canvas.width = video.videoWidth * scale;
	        canvas.height = video.videoHeight * scale;
	        canvas.getContext('2d')
	              .drawImage(video, 0, 0, canvas.width, canvas.height);
	 
	        var img = document.createElement("img");
	        img.src = canvas.toDataURL();
	        $output.append(img);
	    };
	 
	    $(initialize);  
	        
	}());





// Save still image from video 
// from http://appcropolis.com/blog/web-technology/using-html5-canvas-to-capture-frames-from-a-video/
	// var videoId = 'video';
	// var scaleFactor = 0.25;
	// var snapshots = [];
	 
	// /**
	//  * Captures a image frame from the provided video element.
	//  *
	//  * @param {Video} video HTML5 video element from where the image frame will be captured.
	//  * @param {Number} scaleFactor Factor to scale the canvas element that will be return. This is an optional parameter.
	//  *
	//  * @return {Canvas}
	//  */
	// function capture(video, scaleFactor) {
	//     if(scaleFactor == null){
	//         scaleFactor = 1;
	//     }
	//     var w = video.videoWidth * scaleFactor;
	//     var h = video.videoHeight * scaleFactor;
	//     var canvas = document.createElement('canvas');
	//         canvas.width  = w;
	//         canvas.height = h;
	//     var ctx = canvas.getContext('2d');
	//         ctx.drawImage(video, 0, 0, w, h);
	//     return canvas;
	// } 
	 
	// /**
	//  * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
	//  */
	// function shoot(){
	//     var video  = document.getElementById(videoId);
	//     var output = document.getElementById('output');
	//     var canvas = capture(video, scaleFactor);
	//         canvas.onclick = function(){
	//             window.open(this.toDataURL());
	//         };
	//     snapshots.unshift(canvas);
	//     output.innerHTML = '';
	//     for(var i=0; i<4; i++){
	//         output.appendChild(snapshots[i]);
	//     }
	// }





}); // end document.ready

