// JavaScript Document
      jssor_slider1_starter = function (containerId) {
			  var _SlideshowTransitions = [{
/*				$Duration: 300,
				$Delay: 50,
				$Cols: 8,
				$Rows: 4,
				$FlyDirection: 5,
				$Formation:
				$JssorSlideshowFormations$.$FormationZigZag,
				$Assembly: 1028,
				$ChessMode: { $Column: 3, $Row: 12 },
				$Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad },
				$Opacity: 2*/
				$Duration:1200,
				$Opacity:2
			}];
		
            var options = {
                $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
                $AutoPlay: true,
				/*$SlideDuration: 100,*/
				$Idle: 4000,
				$SlideshowOptions: {                                //Options which specifies enable slideshow or not
					$Class: $JssorSlideshowRunner$,                 //Class to create instance of slideshow
					$Transitions: _SlideshowTransitions,            //Transitions to play slide, see jssor slideshow transition builder
					$TransitionsOrder: 1,                           //The way to choose transition to play slide, 1 Sequence, 0 Random
					$ShowLink: 2,                                   //0 After Slideshow, 2 Always
					$ContentMode: false                             //Whether to trait content as slide, otherwise trait an image as slide
					},	
				$ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 0,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                }
            };

            var jssor_slider1 = new $JssorSlider$(containerId, options);
        };
		

		$(document).ready(function() {
			//when hover over the div with class=photo,
			//find the caption and change its css bottom property
			//from the original value =-100 px to 0px
            $('.photo').hover(function(){
				
				$(this)
				.find('.caption')
				.stop()
				.animate({bottom:'0'});

			}, function() {
				
				$(this)
				.find('.caption')
				.stop()
				.animate({bottom: '-60px'});
			});
			
            $('.photo_gal').hover(function(){
				
				$(this)
				.find('.caption_gal')
				.stop()
				.animate({bottom:'0'});

			}, function() {
				
				$(this)
				.find('.caption_gal')
				.stop()
				.animate({bottom: '-100px'});
			});
			
			$(".news_title").bind("click", show_news_detail);
			$(".read_more").bind("click", show_news_detail);
		
/* 			var count;
			for(count = 1; count < 5; count++){
				setInterval(function(){
					$('.jssora03r').click();
			}, 5000)
			}; */
		});
		  
		  function show_news_detail(){
				$(this).next("p").slideToggle("fast");
			}
		  