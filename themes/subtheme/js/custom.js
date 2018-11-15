jQuery(".search-icon").click(function(){
        jQuery(".form-search").slideToggle("slow");
	});	

jQuery(document).ready(function(){
  jQuery("#block-searchform-3").appendTo(".all-error-content .search_list_block");


/*var slideheight = jQuery(".views_slideshow_cycle_teaser_section > div").height();
	     var total_height = slideheight +0;
	     jQuery(".ui-tabs-panel.ui-corner-bottom .skin-default").css({"height":total_height+'0px'});*/
	jQuery('video').attr('id','myVideo');
	jQuery('#myVideo').after('<div class="mute-unmute"><button type="button" class="mutevideo ismutevideo"></button><button type="button" class="unmutevideo unmute"></button><button type="button" class="videostop"></button></div><span class="playvideo"></span><span class="pausevideo"></span>');
	var vid = document.getElementById("myVideo"); 
	jQuery('.pausevideo').hide();
	jQuery('.unmutevideo').hide();
	jQuery('.mute-unmute').hide();
jQuery('.playvideo').on('click',function(){
	vid.play();   	
	jQuery('.pausevideo').show();
	jQuery('.playvideo').hide();
	jQuery('.mute-unmute').show();
	setTimeout(function(){
	changeslide();
	vid.pause(); 	
	jQuery('.pausevideo').hide();
	jQuery('.playvideo').show();
	jQuery('.mute-unmute').hide();
		}, 59000)

})
jQuery('.pausevideo').on('click',function(){
	vid.pause(); 	
	jQuery('.pausevideo').hide();
	jQuery('.playvideo').show();
	jQuery('.mute-unmute').hide();

})
jQuery('.ismutevideo').on('click',function(){
	vid.muted = true;
	jQuery('.unmutevideo').show();
	jQuery('.ismutevideo').hide();

})
jQuery('.unmute').on('click',function(){
	vid.muted = false;
jQuery('.unmutevideo').hide();
jQuery('.ismutevideo').show();
})
jQuery('.videostop').on('click',function(){
	changeslide();
	vid.pause(); 	
	jQuery('.pausevideo').hide();
	jQuery('.playvideo').show();
	jQuery('.mute-unmute').hide();
})







	     
	         if (jQuery(window).width() <= 767) {  
             jQuery(".department_sidebar_menu").appendTo(".community_news");
             jQuery(".inner-page-ql").appendTo(".community_news");
		 
       } 
jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 50) {
       jQuery('.mobile_search').addClass('search_issue');
    } else {
       jQuery('.mobile_search').removeClass('search_issue');
    }
	
	
		
	
});

jQuery('a span.sf-sub-indicator').bind("click", function (e) {
        e.preventDefault();
  jQuery(this).parents('li.sf-depth-1').find('ul').toggleClass('sf-hidden');
  
    });
/* class for span icon*/
jQuery('.department_sidebar_menu .menu.sf-menu li .sf-sub-indicator').click(function() {
    jQuery(this).toggleClass("open-arrow");
    });
var path = window.location.pathname.split('/');
path = path[path.length-1];
if (path !== undefined) {
  jQuery("ul.sf-menu")
    .find("a[href$='" + path + "']") // gets all links that match the href
    .parents('li')  // gets all list items that are ancestors of the link
    .children('a')  // walks down one level from all selected li's
    .addClass('active');
}   
//~ jQuery(".node-199 .quicktabs-tabs").prepend("<h4 class='toolkit_title'>Toolkit</h4>");

jQuery('#navbar .menu_section ul.sf-menu.sf-accordion ul').addClass('sf-hidden');

window.onscroll = function() {
	myFunction();
	myFunction2();
	myFunction3();
	};

var header = document.getElementById("menu_section_id");
var header2 = document.getElementById("mobile_header_id");
var header3 = document.getElementById("main_header_section_id");
var sticky = header.offsetTop;
var sticky2 = header.offsetTop;
var sticky3 = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } 
  else {
    header.classList.remove("sticky");
  }
}

function myFunction2() {
  if (window.pageYOffset >= sticky2) {
    header2.classList.add("sticky");
  } 
  else {
    header2.classList.remove("sticky");
  }
}

function myFunction3() {
  if (window.pageYOffset >= sticky2) {
    header3.classList.add("sticky_logo");
  } 
  else {
    header3.classList.remove("sticky_logo");
  }
}

function changeslide(){
	setTimeout(function(){
	jQuery('.views_slideshow_cycle_teaser_section').cycle('fade');	
		}, 50);
	//~ alert("change slide");
}
// expect ratio for community events image home page
//~ jQuery('.csecond_content .csimage').each(function(){
  //~ var image = jQuery(this).find('img').attr('src');
  //~ jQuery(this).css('backgroundImage',"url("+image+")");
//~ })
var isipad = /ipad/i.test(navigator.userAgent.toLowerCase());
if (isipad)
{
$("#block-mainnavigation ul li.menuparent a.menuparent").on("click", function() {
    var isthis = $(this);
    if(isthis.attr('data-islink')=='openlink'){
		isthis.removeAttr('data-islink');
	}else{
		event.preventDefault();
		$("#block-mainnavigation ul li.menuparent a.menuparent").each(function(){
			$("#block-mainnavigation ul li.menuparent a.menuparent").removeAttr('data-islink');
		})
		isthis.attr('data-islink','openlink');
	}
})	
}
jQuery(".document_download span").parents(".get_document").css({"display": "block"});

jQuery(".banner_mobile").offsetParent("").addClass("mobile-show-banner");
  jQuery(".contact_clarkston").siblings("h1").css({"display":"none"});
  jQuery(".water_quality_incident_report").siblings("h1").css({"display":"none"});

      jQuery('.imagefield_slideshow-prev').click(function() {
			jQuery(this).parents('.imagefield_slideshow-wrapper' ).find('a:eq(0)').show();
			jQuery(this).parents('.imagefield_slideshow-wrapper' ).find('a:eq(1)').hide();
        //slideshow.cycle('prev');
      });
      jQuery('.imagefield_slideshow-next').click(function() {
        //slideshow.cycle('next');
			jQuery(this).parents('.imagefield_slideshow-wrapper' ).find('a:eq(1)').show();
			jQuery(this).parents('.imagefield_slideshow-wrapper' ).find('a:eq(0)').hide();
      });
jQuery(".quicktabs-loaded, .ui-tabs-anchor").click(function(){
        jQuery("div").scrollTop(0);
    });

jQuery(".attachment-before").siblings(".view-header").css("display", "none" );
});

		
	



