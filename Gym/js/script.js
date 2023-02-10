(function($) {
	"use strict";
	
	//Update Header Style and Scroll to Top
	var HeaderHight = $('.header').height();
	function headerStyle() {
		if($('.header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header');
			var scrollLink = $('.scroll-to-top');

			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}
	
	headerStyle();
	
	//Event Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
		});
	 });
	}
	

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 6000,
			navText: [ '<span class=""></span>', '<span class=""></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay:false,
			navText: [ '<span class=""></span>', '<span class=""></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}
	

	// Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 6000,
			navText: [ '<span class=""></span>', '<span class=""></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:3
				},
				800:{
					items:3
				},
				1024:{
					items:4
				}
			}
		});    		
	}
	
	
	// Client Testimonial Carousel
	if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

		var $sync3 = $(".client-testimonial-carousel"),
			$sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: true,
					navText: [ '<span class=""></span>', '<span class=""></span>' ],
					dots: true,
					autoplay:false,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin:20,
					items: 1,
					nav: true,
					navText: [ '<span class=""></span>', '<span class=""></span>' ],
					dots: false,
					center: false,
					autoplay:false,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:1,
				            autoWidth: false
				        },
				        1000:{
				            items:1,
				            autoWidth: false
				        },
						1200:{
				            items:1,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
})(window.jQuery);

var map, marker, infowindow;
var markers = [];
var address_infos = {};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 21.0167904, lng: 105.7819856 },
    streetViewControl: false,
    mapTypeControl: false
  });
  
  placeMarker({ lat: 21.0167904, lng: 105.7819856 });
  geocodeAddress(marker.position);
  map.panTo(marker.position);
  markers.push(marker);

  map.addListener("click", function(e) {
    clearMarkers();
    placeMarker(e.latLng);
    geocodeAddress(e.latLng);
    map.panTo(marker.position);
    markers.push(marker);
  });

  createInfoWindow();
  
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  // map.addListener('bounds_changed', function() {
    // searchBox.setBounds(map.getBounds());
  // });

  searchBox.addListener("places_changed", function() {
    searchBox.set("map", null);
    clearMarkers();

    var places = searchBox.getPlaces();
    if (places.length == 0) {
      console.log("Returned no place");
      return;
    }

     var bounds = new google.maps.LatLngBounds();

     if (places.length > 1) {
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        marker = new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        });

        marker.bindTo("map", searchBox, "map");
        marker.addListener("map_changed", function() {
          if (!this.getMap()) {
            this.unbindAll();
          }
        });

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });

      map.fitBounds(bounds);
      searchBox.set("map", map);
      map.setZoom(Math.min(map.getZoom(),15));
      // searchBox.setBounds(map.getBounds());
    } else {
      infowindow.close();
      var place = places[0];
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      placeMarker(place.geometry.location);

      marker.bindTo("map", searchBox, "map");
      marker.addListener("map_changed", function() {
        if (!this.getMap()) {
          this.unbindAll();
        }
      });

      create_address_infos(place);

      infowindow.setContent(
        "<div>" +
          "<b>Address :</b> " + place.formatted_address + "<br>" +
          "<b>Latitude :</b> " + place.geometry.location.lat() + "<br>" +
          "<b>Longitude :</b> " + place.geometry.location.lng() +
        "</div>"
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }

      map.fitBounds(bounds);
      searchBox.set("map", map);
      map.setZoom(Math.min(map.getZoom(),15));
      infowindow.open(map, marker);
      markers.push(marker);
    }
  });
  
}

function placeMarker(latLng) {
  marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
}

function createInfoWindow() {
  if (infowindow) {
    infowindow.close();
  }
  infowindow = new google.maps.InfoWindow();
}

function geocodeAddress(latLng) {
  var geocoder = new google.maps.Geocoder;
  createInfoWindow();

  geocoder.geocode(
    { "location": latLng },
    function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          create_address_infos(results[0]);

          infowindow.setContent(
            "<div>" +
              "<b>Address :</b> " + address_infos["name"] + "<br>" +
              "<b>Latitude :</b> " + address_infos["latitude"] + "<br>" +
              "<b>Longitude :</b> " + address_infos["longitude"] +
            "</div>"
          );
          infowindow.open(map, marker);
        } else {
          console.log("No results found");
        }
      } else {
        console.log("Geocoder failed due to: " + status);
      }
    }
  );
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null)
  }
  markers = [];
}

function create_address_infos(address) {
  address_infos = {
    name: address.formatted_address.toString(),
    latitude: address.geometry.location.lat(),
    longitude: address.geometry.location.lng(),
    prefecture: "",
    city: "",
    town: "",
    choume: "",
    banchi: "",
    gou: ""
  }
}

