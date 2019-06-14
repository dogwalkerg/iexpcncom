  //<![CDATA[

      jQuery.noConflict();

      jQuery('.thumb_popup').css('bottom', '106px')

      jQuery('ul.superfish').superfish({
          delay: 200,                            // one second delay on mouseout 
          animation: { 'marginLeft': '0px', opacity: 'show', height: 'show' },  // fade-in and slide-down animation 
          speed: 'fast',                          // faster animation speed 
          autoArrows: true,                           // disable generation of arrow mark-up 
          onBeforeShow: function () { this.css('marginLeft', '20px'); },
          dropShadows: false                            // disable drop shadows 
      });

      jQuery('ul.nav > li > a.sf-with-ul').parent('li').addClass('sf-ul');

      jQuery("ul.nav > li > ul").prev("a").attr("href", "#");
      /* search form */

      var $searchform = jQuery('#header div#search-form');
      var $searchinput = $searchform.find("input#searchinput");
      var $searchvalue = $searchinput.val();

      $searchform.css("right", "25px");

      jQuery("#header a#search-icon").click(function () {
          if ($searchform.filter(':hidden').length == 1)
              $searchform.animate({ "right": "-1", "opacity": "toggle" }, "slow")
          else
              $searchform.animate({ "right": "25", "opacity": "toggle" }, "slow");
          return false;
      });

      $searchinput.focus(function () {
          if (jQuery(this).val() == $searchvalue) jQuery(this).val("");
      }).blur(function () {
          if (jQuery(this).val() == "") jQuery(this).val($searchvalue);
      });


      /* footer widgets improvements */

      var $footer_widget = jQuery("#footer .widget");

      if (!($footer_widget.length == 0)) {
          $footer_widget.each(function (index, domEle) {
              // domEle == this
              if ((index + 1) % 3 == 0) jQuery(domEle).addClass("last").after("<div class='clear'></div>");
          });
      };


      /* featured slider */

      var $featured_area = jQuery('#featured-slider'),
        $feature_thumb = jQuery('#featured-thumbs img'),
        $active_arrow = jQuery('div#active_item');
      ordernum = 1,
        $slider_control = jQuery('#featured-thumbs'), //div#featured-thumbs
        $slider_control_tab = $feature_thumb.parent('a');

      if ($featured_area.length) {
          et_featured_options = {
              timeout: 0,
              speed: 300,
              cleartypeNoBg: true,
              prev: '#featured-area a#prevlink',
              next: '#featured-area a#nextlink',
              before: function (currSlideElement, nextSlideElement, options, forwardFlag) {
                  var $et_active_slide = jQuery(nextSlideElement),
              et_active_order = $et_active_slide.prevAll().length,
              $this_element = $slider_control.find('a').eq(et_active_order);

                  $active_arrow.animate({ "left": $this_element.find("img").position().left + 55 }, "slow");
              },
              fx: 'fade'
          }

          et_featured_options.pause = 1;

          et_featured_options.timeout = 3000;

          $featured_area.cycle(et_featured_options);
      }

      $feature_thumb.hover(function () {
          $next_div = jQuery(this).parent('a').next('div');

          $next_div.css('bottom', '106px')
          $next_div.css({ 'left': jQuery(this).position().left - 10 });

          jQuery(this).addClass('hover').fadeTo('fast', 0.5);
          $next_div.css('display', 'block').animate({ "bottom": "96px", "opacity": "1" }, "fast");
      }, function () {
          jQuery(this).removeClass('hover').fadeTo('fast', 1);
          $next_div.animate({ "bottom": "106px", "opacity": "0" }, "fast", function () {
              jQuery(this).css('display', 'none');
          });
      });

      $slider_control_tab.click(function () {
          var et_ordernumber = jQuery(this).prevAll('a').length;
          $featured_area.cycle(et_ordernumber);
          return false;
      });
      
  //]]>  
 