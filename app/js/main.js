var $ = jQuery;

var pTags = $(document).find("p");
  for (var i=0; i<pTags.length; i++) {
	var elm = pTags[i];

	if ($(elm).html().replace(/\s|&nbsp;/g, '').length == 0) {
	  $(elm).remove();
	}
}

var $ = jQuery;

( function( $ ) {
  var Neu = Neu || {};

  $.fn.scrollmagicControls = function(options) {
      return this.each(function() {
          var scrollmagicControls = Object.create(Neu.scrollmagicControls);
          scrollmagicControls.init(this, options);
      });
  };

  $.fn.scrollmagicControls.options = {
      pinned: ".pinned"
  };

  Neu.scrollmagicControls = {
      init: function(elem, options) {
          var self = this;
          self.$container = $(elem);
          self.options = $.extend({}, $.fn.scrollmagicControls.options, options);
          self.bindElements();
          self.bindEvents();

          var svgPath = '<svg viewBox="0 0 945.12 1260.56"><path id="salamander" d="M331.93,202.37s7.21-92.57,74.71-133.19c10.18-6.13,21.41,5.75,23.86,7.89,3.3,2.86,109.37,83.92,49.34,189.15-11.54,22.75-8.63,47.09,9.78,58.18s20.44,5.13,27.44,5.61c6.73.46,22.33,8.48,26.92,4.56s13.35-40.19,8.53-47c0,0-.63-4.44-11.35-2.17s-32.35,5.29-31.26-11.09c.89-8.77,16-9.79,23.54-1.87s34.14,7.71,26.42-17.9C544.52,233.75,528.5,230.68,544,221s24.19,37.26,33.89,36.42-6.21-44.78,17.9-38.57-16.44,40.49-2.17,48,39.74-34.13,51.06-14.56-45.38,16.41-45.52,30.86,42.92,14.93,35.39,31.41-24.48,1-31.05-8.67-16.52-4.52-18,5.11,10.4,79.76-69.66,63.41c0,0-5.41-.22-1,8.66S630.61,572.84,486.58,726.2c0,0,85.42-23.81,72.37,80.82-1.72,14.12-.14,24.69,4.83,30.5s18.5,9.9,21.51,12.54,11.73,14.18,18.22,13.49,17.7-43.8,40.67-24.32-18,34.74-37.67,42.23c-3.93,1.5-5.11,24.1,9.83,35.92s38.73,3,31.83,29.42-31.86,6.74-40.49-13.83-37.1-.71-36.35,10.2,10.43,38.38-11.25,35.67-8.8-26-.6-38.21-.89-19.36-6.57-21.21-20.53,8.23-22.23,14.52-6.23,30.64-23.8,16.6,26.56-33.86,29.83-42.24-6-20.16-11.66-22.81-42.3,22-48.09-4c-2-10.6,8.1-13.63,12.56-14.08s19.1,2.31,24.71,7.57,8.13,3.85,11.79.73,12.41-14.69,8.77-27.23-25.56-63.07-49.7-49.91-27.21,19.15-46.24,28.7-26.74,7.94-45,21-155.13,125.91-126.76,269c4.61,33.31,24.93,74.54,76.37,98.14s110.46-28.8,135.51-44.23,74.11-40,98.82-47.66,27.13-7.77,43.75-8.07,145.65,11.66,177.64-14.17,41.9-46.21,46.05-78.56c.42-5.32,4.79.38.54,16.92s-10.06,47.52-30.73,65.17-32,20.68-63.62,24.35-126.13,0-157.12,12.53-40.77,14.47-72.1,38.25-176.35,140.93-281.65,33.49c-101.12-103.16-54.74-238.62,41-422.81C295.73,766.54,258.36,646,218.76,734c-2.51,8.11-3.88,18.71,13.11,44.42,4.29,6.76,1.61,17-8.8,19.93s-26.78,7.49-17.94-44.26c1-5.82-8.37-16.2-20.29-14.46S159,747.75,156.31,755s-17.68,37.44-35.44,11.41,40-24.71,36.93-44c-1.42-5.74-20-11.75-33.08-5s-28.88,6.3-28.61-7.34,6.66-13.13,12.35-14,40.55,10.74,45.21.61c2.26-4.91-4.45-22.66-26.32-29.65-8.88-2.85-10.58-15.3-3.24-20.08s18.47-14.92,30.06,23c2.77,9.06,22.69,21.34,25.27,19.13s8.25-9.53-7.64-28.72-10.56-25.74-3.15-28.1,17.44,3,18.49,10,5.46,34.72,12.19,35.78c3.43.54,19.22-101.33,54.6-98.27s55.82,41.27,87.36,87.75c1.92,2.83,4.26.34,6.8-4.82s72.36-124.47,26.81-241.86c-2.89-7.46-6.91-4-8.8-.43s-24.69,65.28-45.45,63.65-28.15-16.68-36.11-27.75-17.82-45.86-32.76-50-34.66,28.6-45.72,9.25,39.51-15.37,37.15-26.26-11.77-10.3-18.25-9.74-27.69,4.78-30.11-15.49c-.11-5.37,9.07-13.22,14.89-12.22s14.14,17.71,18.31,19.11,19.44,8.23,21.79-1.23.35-11.22-1.86-13.8-29.91-14.67-13.83-28.41,26.66,11.74,25.72,23.72c-.51,6.39,4.48,11.07,8.21,11.36s9.21,2.06,12.46-8.66-5.73-25.89,11.76-26.93c7.21.3,7.89,8.66,7.48,10.5s-17,23-10.15,31,7.59,3.39,11.19,1.8,20.95-12.87,25.36-.74S304.21,380,296,382.53c-4.38,1.26-7.65,19-3.61,25.43s12.24,28.27,19.49,28,24-29.44,33.15-80.94c3.3-14.74,24.46-31.82,24.25-49.51S328.92,241.69,331.93,202.37Z" style="fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px"/>            <circle id="circ4" cx="234.22" cy="992.3" r="29.44" style="fill:#db0000;fill-opacity:0.3;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px"/>            <circle id="circ3" cx="417.81" cy="192.21" r="42.9" style="fill:#db0000;fill-opacity:0.3;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px"/>            <path id="line2" d="M943.6,1053.18C833.87,909.52,774.53,903.57,594.44,873.61" style="fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px"/>            <circle id="circ2" cx="568.47" cy="872.86" r="23.14" style="fill:#db0000;fill-opacity:0.3;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px"/>            <circle id="circ1" cx="486.38" cy="536.03" r="61.11" style="fill:#db0000;fill-opacity:0.3;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px"/>            <path id="line1" d="M780,217.17c18,191.54-33.92,327.22-233.44,303.28" style="fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px"/>            <path id="line3" d="M1.85,1.68C102.71,112.37,223.92,178.49,375,193.23" style="fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px"/>            <line id="line4" x1="9.83" y1="835.7" x2="207.36" y2="977.36" style="fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px"/></svg>';

          $(document).ready( function() {


            $(self.options.pinned).each( function() {

              $(".svg-container").append(svgPath);
              self.pinSection();
                self.scrollEventHandler($(this));
            });
          });

          $(window).scroll( function() {
            $(self.options.pinned).each( function() {
              if ($(this).hasClass("is-active")) {
                self.scrollEventHandler($(this));
              }
            });
          });

      },
      bindElements: function() {
        var self = this;

        self.$pinned = self.$container.find(self.options.pinned);
        self.controller = new ScrollMagic.Controller();
    },
    bindEvents: function() {
      var self = this;
    },
    pinSection: function() {
      var self = this;

      $(self.options.pinned).each( function() {
        var pinSceneTl = new TimelineMax();
        var pinEl = this;

        pinSceneTl
          .fromTo($('#fact1'), 1, {autoAlpha: 0}, {autoAlpha: 1}, 1)
          .fromTo($('#fact2'), 1, {autoAlpha: 0}, {autoAlpha: 1})
          .fromTo($('#fact3'), 1, {autoAlpha: 0}, {autoAlpha: 1})
          .fromTo($('#fact4'), 1, {autoAlpha: 0}, {autoAlpha: 1});

        var pinScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.3,
            duration: "200%"
        })
        .setClassToggle(this, "is-active")
        .setPin(pinEl)
        .setTween(pinSceneTl)
        .addTo(self.controller);

      });

    },
    scrollEventHandler: function(e) {
      var self = this;

      var scrollBehaviour = [
         {id: 'line1', startPct: 0, endPct: 20},
         {id: 'circ1', startPct: 20, endPct: 25},
         {id: 'line2', startPct: 25, endPct: 45},
         {id: 'circ2', startPct: 45, endPct: 50},
         {id: 'line3', startPct: 50, endPct: 70},
         {id: 'circ3', startPct: 70, endPct: 75},
         {id: 'line4', startPct: 75, endPct: 90},
         {id: 'circ4', startPct: 90, endPct: 95}
         // {id: 'rect1', startPct: 30, endPct: 60},
         // {id: 'line2', startPct: 60, endPct: 80},
      ];

      var container = e;
      var wrapper = container.closest(".scrollmagic-pin-spacer");
      var scrollTop = $(window).scrollTop();
      var wrapperOffset = wrapper.offset().top;
      var wrapperPos = wrapperOffset - scrollTop;
      var pinnedOffset = container.offset().top;
      var pinnedPos = pinnedOffset - scrollTop;
      var scrollPos = pinnedPos - wrapperPos;


      var contHeight = container.outerHeight();
      var wrapperHeight = wrapper.outerHeight();
      // Calculate how far down the page the user is
      var percentOfScroll = (scrollPos / (wrapperHeight - contHeight) * 100);

      // For each lement that is getting drawn...
      for (var i=0; i<scrollBehaviour.length; i++)
      {
        var data = scrollBehaviour[i];
        var elem = document.getElementById(data.id);

        // Get the length of this elements path
        var dashLen = self.calcPathLength(elem);

        // Calculate where the current scroll position falls relative to our path
        var fractionThroughThisElem = (percentOfScroll - data.startPct) / (data.endPct - data.startPct);
        // Clamp the fraction value to within this path (0 .. 1)
        fractionThroughThisElem = Math.max(fractionThroughThisElem, 0);
        fractionThroughThisElem = Math.min(fractionThroughThisElem, 1);

        var dashOffset = dashLen * (1 - fractionThroughThisElem);

        elem.setAttribute("stroke-dasharray", dashLen);
        elem.setAttribute("stroke-dashoffset", dashOffset);

        if (percentOfScroll > data.endPct) {
          elem.style.fillOpacity = '0.33';
        } else {
          elem.style.fillOpacity = '0';
        }
      }

    },
    calcPathLength: function(elem) {
      var self = this;

        if (elem.getTotalLength)
        {
          // It's a path
          return elem.getTotalLength();
        }
        else if (elem.tagName === "rect")
        {
          // Handle rect elements: perimeter length = w + w + h + h
          return (elem.width.baseVal.value + elem.height.baseVal.value) * 2;
        }
        else if (elem.tagName === "circle")
        {
          // Handle circle elements: perimeter length = 2 * r * PI
          return elem.r.baseVal.value * 2 * Math.PI;
        }
        else if (elem.tagName === "line")
        {
          // Handle line elements: use pythagoras' theorem
          var dx = elem.x2.baseVal.value - elem.x1.baseVal.value;
          var dy = elem.y2.baseVal.value - elem.y1.baseVal.value;
          return Math.sqrt(dx * dx + dy * dy);
        }
        // If you use other elem types, you will have to add support for them here.
    }
  };

}( $ ) );

(function init () {
  $(document).ready(function() {
    $(".pinned").scrollmagicControls();
  });
})();
