

//Preloader
   
	$(window).load(function() {
		$("#preloader").delay(350).fadeOut("slow");
	})  

//Words Animation	

			$(function () {

				$("#box1words").wordsrotator({
					words: ['awesome...','creative...','unique...','professional...'],
					animationIn: "lightSpeedIn",
					animationOut: "lightSpeedOut"
				});

            });	
	
//Home fit screen	
	
	
	/*global $:false */
	$(function(){"use strict";
		$('#home').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#home').css({'height':($(window).height())+'px'});
		});
	});


//Timer
	
        $(document).ready(function () {
            //set width of wrapper;
            $('#gray').county({ endDateTime: new Date('2014/10/23 10:00:00'), reflection: false, animation: 'scroll', theme: 'gray' });
        });



	
	
//Home Background Slider	
	
        $(function(){

            $.mbBgndGallery.buildGallery({
                containment:"#home",
                timer:4000,
                effTimer:700,
                controls:"#controls",
                grayScale:false,
                shuffle:false,
                preserveWidth:false,
                effect:"slideLeft",
				effect:{enter:{left:"100%",opacity:1},exit:{left:0,opacity:0}, enterTiming:"ease-in", exitTiming:"ease-in"},

                // If your server allow directory listing you can use:
                // (however this doesn't work locally on your computer)

                //folderPath:"testImage/",

                // else:

                 images:[
                 "images/1.jpg",
                 "images/2.jpg",
                 "images/3.jpg"
                 ],

                onStart:function(){},
                onPause:function(){},
                onPlay:function(opt){},
                onChange:function(opt,idx){},
                onNext:function(opt){},
                onPrev:function(opt){}
            });


        });	
		
	


// Switcher CSS 
  $(document).ready(function() {
"use strict";
    $("#hide, #show").click(function () {
        if ($("#show").is(":visible")) {
           
            $("#show").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            
            $("#switch").animate({
                "margin-left": "0px"
            }, 500).show();
        } else {
            $("#switch").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 500);
        }
    });
                      
});






	
	