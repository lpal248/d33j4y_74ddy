! function(a) {
    "use strict";

    function b(b) {
        var c = [];
        a("#" + b + " .form-control").each(function() {
            var b = a(this).attr("name"),
                d = a(this).val();
            return a(this).css({
                border: "1px solid #c4c4c4"
            }), a(this).prop("required") && "" == d ? (a(this).css({
                border: "2px solid red"
            }), a(this).focus(), !1) : void("" == !d && c.push("&" + b + "=" + d))
        });
        var d = c.join(" ");
        a.ajax({
            method: "POST",
            url: "https://formspree.io/verothemes@gmail.com",
            data: d,
            dataType: "json",
            success: function() {
                a("#" + b).html("<div id='form_send_message'>Thank you for your request, we will contact you as soon as possible.</div>", 1500)
            }
        })
    }

    function e(b) {
        var c = 0;
        b.each(function() {
            a(this).css("height", "auto");
            var b = a(this).height();
            b > c && (c = b)
        }), b.height(c)
    }
    if (a(".har_logo_eq span").each(function() {
            function c() {
                b.animate({
                    height: Math.floor(100 * Math.random()) + "%"
                }, 350)
            }
            var b = a(this);
            setInterval(c, 350)
        }), a(".har_firefly").length > 0 && a(".har_firefly").each(function() {
            var b = a(this).attr("data-total"),
                c = a(this).attr("data-minPixel"),
                d = a(this).attr("data-maxPixel");
            a.firefly({
                minPixel: c,
                maxPixel: d,
                color: "none",
                total: b,
                on: ".har_firefly"
            })
        }), a("#har_text_animation .har_studio_animation").length > 0 && a("#har_text_animation .har_studio_animation").lettering(), a("#har_text_animation .har_studio_animation span").each(function() {
            var b = 0,
                c = 50,
                d = Math.floor(Math.random() * (c - b + 1) + b);
            a(this).css("transition-delay", "0." + d + "s")
        }), a(".har_countdown").each(function() {
            var b = a(this).attr("data-year"),
                c = a(this).attr("data-month"),
                d = a(this).attr("data-day");
            a(this).countdown({
                until: new Date(b, c - 1, d)
            })
        }), a(".har_timer").appear(function() {
            var b = a(this);
            b.countTo({
                from: 0,
                to: b.html(),
                speed: 1300,
                refreshInterval: 60
            })
        }), a(".date_picker").datepicker(), a(".har_form").validate({
            submitHandler: function(c) {
                var d = a(c).attr("id");
                return b(d), !1
            }
        }), a(".lightbox").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        }), a(".video").magnificPopup({
            type: "iframe",
            iframe: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "http://www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "http://player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                },
                srcAction: "iframe_src"
            }
        }), a("#instagram-carousel").length > 0) {
        var c = new Instafeed({
            get: "user",
            userId: 201841569,
            accessToken: "201841569.1677ed0.4e42af92489940db93d585c443779c60",
            sortBy: "most-liked",
            template: '<a href="{{link}}" target="_blank" class="har_insta_item"><img class="img-responsive" src="{{image}}" /></a>',
            target: "instagram-carousel",
            limit: 9,
            resolution: "standard_resolution",
            after: function() {
                a("#instagram-carousel").owlCarousel({
                    items: 5,
                    navigation: !1,
                    pagination: !1,
                    autoPlay: 4e3,
                    loop: !0
                })
            }
        });
        c.run()
    }
    a(".har_slider_carousel").owlCarousel({
        navigation: !0,
        pagination: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        slideSpeed: 100,
        addClassActive: !0,
        paginationSpeed: 200,
        rewindSpeed: 300,
        items: 1,
        autoPlay: 8e3,
        touchDrag: !1,
        singleItem: !0,
        transitionStyle: "fade",
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    }), a(".har_team_slider").owlCarousel({
        navigation: !0,
        responsive: !0,
        addClassActive: !0,
        items: 3,
        itemsTablet: [1200, 2],
        itemsMobile: [700, 1],
        itemsDesktop: 3,
        autoPlay: !1,
        touchDrag: !1,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    }), a(".har_db_slider").owlCarousel({
        navigation: !1,
        responsive: !0,
        addClassActive: !0,
        items: 2,
        itemsTablet: [1e3, 2],
        itemsMobile: [569, 1],
        itemsDesktop: 2,
        autoPlay: !0,
        touchDrag: !1,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    }), a(".har_team_slider_single").owlCarousel({
        navigation: !0,
        responsive: !0,
        addClassActive: !0,
        items: 1,
        autoPlay: !0,
        singleItem: !0,
        autoHeight: !0,
        touchDrag: !1,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    }), a(".har_shop_item_slider").owlCarousel({
        navigation: !0,
        responsive: !0,
        addClassActive: !0,
        items: 1,
        itemsTablet: [1e3, 2],
        itemsMobile: [700, 1],
        itemsDesktop: 1,
        autoPlay: !0,
        touchDrag: !1,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    }), a(".tweets-feed").each(function(a) {
        jQuery(this).attr("id", "tweets-" + a)
    }).each(function(a) {
        function c(b) {
            for (var c = b.length, d = 0, e = document.getElementById("tweets-" + a), f = '<ul class="slides">'; d < c;) f += "<li>" + b[d] + "</li>", d++;
            return f += "</ul>", e.innerHTML = f, f
        }
        var b = {
            id: jQuery("#tweets-" + a).attr("data-widget-id"),
            domId: "",
            maxTweets: 3,
            enableLinks: !0,
            showUser: !0,
            showTime: !0,
            dateFunction: "",
            showRetweet: !1,
            customCallback: c
        };
        twitterFetcher.fetch(b)
    }), a(".har_image_bck").each(function() {
        var b = a(this).attr("data-image"),
            c = a(this).attr("data-gradient"),
            d = a(this).attr("data-color"),
            e = a(this).attr("data-blend"),
            f = a(this).attr("data-opacity"),
            g = a(this).attr("data-position"),
            h = a(this).attr("data-height");
        b && a(this).css("background-image", "url(" + b + ")"), c && a(this).css("background-image", c), d && a(this).css("background-color", d), e && a(this).css("background-blend-mode", e), g && a(this).css("background-position", g), f && a(this).css("opacity", f), h && a(this).css("height", h)
    }), a(".har_particles").length > 0 && a(".har_particles").particleground({
        dotColor: "#fff",
        lineColor: "#fff",
        particleRadius: "3",
        lineWidth: "0.5"
    }), a("#bgndVideo").length > 0 && a("#bgndVideo").YTPlayer(), a(".har_over, .har_head_bck").each(function() {
        var b = a(this).attr("data-color"),
            c = a(this).attr("data-image"),
            d = a(this).attr("data-opacity"),
            e = a(this).attr("data-blend");
        b && a(this).css("background-color", b), c && a(this).css("background-image", "url(" + c + ")"), d && a(this).css("opacity", d), e && a(this).css("mix-blend-mode", e)
    }), a(".har_accordion_location").on("click", function(b) {
        b.preventDefault(), a(".har_accordion_map").slideToggle(200)
    }), a(".har_map_over").on("click", function(b) {
        a(this).parents(".har_section").toggleClass("active_map")
    }), a(".har_top_menu_mobile_link").on("click", function(b) {
        a(this).next(".har_top_menu_cont").fadeToggle(), a(this).parents(".har_light_nav").toggleClass("active")
    }), a(".har_go").on("click", function(b) {
        var c = a(this);
        a("html, body").stop().animate({
            scrollTop: a(c.attr("href")).offset().top
        }, 300), b.preventDefault()
    }), a("div[data-animation=animation_blocks]").each(function() {
        var b = 0;
        a(this).find(".har_icon_box, .har_news_block,  .har_service_block, .skill-bar-content, .har_anim_box, .har_portfolio_item_poloroid, .panel-default").each(function() {
            a(this).css("transition-delay", "0." + b + "s"), b++
        })
    }), a(".increase-qty").on("click", function(b) {
        var c = a(this).parents(".add-to-cart").find(".qty").val(),
            d = 1 * c + 1;
        a(this).parents(".add-to-cart").find("#qty").val(d), b.preventDefault()
    }), a(".decrease-qty").on("click", function(b) {
        var c = a(this).parents(".add-to-cart").find("#qty").val(),
            d = 1 * c - 1;
        d < 1 && (d = 1), a(this).parents(".add-to-cart").find("#qty").val(d), b.preventDefault()
    });
    var d = a("header").height() - 1;
    a("#nav-sidebar").onePageNav({
        currentClass: "current",
        changeHash: !1,
        scrollSpeed: 700,
        scrollOffset: d,
        scrollThreshold: .5,
        filter: "",
        easing: "swing"
    }), a('[data-toggle="tooltip"]').tooltip(), a('[data-toggle="popover"]').popover(), a(window).scroll(function() {
        a(window).scrollTop() > 100 ? (a(".har_logo").addClass("active"), a("body").addClass("har_first_step")) : (a("body").removeClass("har_first_step"), a(".har_logo").removeClass("active")), a(window).scrollTop() > 500 ? a("body").addClass("har_second_step") : a("body").removeClass("har_second_step")
    }), a(".har_fixed").css("background-attachment", "fixed"), a(".har_parent").on({
        mouseenter: function() {
            a(this).find("ul").stop().fadeIn(300)
        },
        mouseleave: function() {
            a(this).find("ul").stop().fadeOut(300)
        }
    }), a(".har_mobile_menu_content .har_parent").on("click", function(b) {
        a(this).find("ul").slideToggle(300)
    }), a(".har_mobile_menu").on("click", function(b) {
        a(this).toggleClass("active"), a(".har_mobile_menu_hor").toggleClass("active")
    }), a(".har_header_search").on({
        mouseenter: function() {
            a(this).find(".har_header_search_cont, .har_header_basket_cont").stop().fadeToggle()
        },
        mouseleave: function() {
            a(this).find(".har_header_search_cont, .har_header_basket_cont").stop().fadeToggle()
        }
    }), a(".har_top_menu_cont a[href*=\\#]:not([href=\\#])").on("click", function() {
        if (a(".har_mobile_menu").trigger("click"), a(".har_top_menu_cont a[href*=\\#]:not([href=\\#])").removeClass("active"), a(this).addClass("active"), location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = a(this.hash);
            if (b = b.length ? b : a("[name=" + this.hash.slice(1) + "]"), b.length) return a("html,body").animate({
                scrollTop: b.offset().top
            }, 1e3), !1
        }
    }), device.tablet() || device.mobile() || a(".har_auto_height").each(function() {
        e(a(this).find('div[class^="col"]'))
    }), device.tablet() && device.landscape() && a(".har_auto_height").each(function() {
        e(a(this).find('div[class^="col"]'))
    }), a(window).resize(function() {
        device.tablet() || device.mobile() || a(".har_auto_height").each(function() {
            e(a(this).find('div[class^="col"]'))
        }), device.tablet() && device.landscape() && a(".har_auto_height").each(function() {
            e(a(this).find('div[class^="col"]'))
        })
    }), jQuery(".trak-item audio").attr("data-state", "pause");
    jQuery("#jquery_jplayer_main").jPlayer({
        ready: function() {
            if (jQuery(".playlist-wrapper .jp-playlist .trak-item").length > 0) {
                var a = jQuery(".playlist-wrapper .jp-playlist .about-list").next(),
                    b = a.data("audio"),
                    c = a.find("audio").attr("title"),
                    d = a.data("thumbnail"),
                    e = a.data("artist");
					
				jQuery(".jp-jplayer").attr("data-state");
				
				
                jQuery(".jp-audio-main .har-artist").text(e), a.addClass("active playing"), jQuery(".jp-audio-main .har-thumbnail img").attr("src", d),jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                    title: c,
                    m4a: b
                }).jPlayer("play"), a.find("audio").attr("data-state", "play"), jQuery(".jp-jplayer").attr({
                    "data-state": "play",
                    "data-audio-src": b
                })
				
				
				
            }
        },
        swfPath: "../dist/jplayer",
        solution: "html, flash",
        supplied: "m4a, oga",
        preload: "metadata",
        volume: .8,
        muted: !1,
        backgroundColor: "#000000",
        cssSelectorAncestor: "#jp_container_content",
        cssSelector: {
            play: ".har-play",
            pause: ".har-pause",
            seekBar: ".har-seek-bar",
            playBar: ".har-seek-bar > div",
            mute: ".har-mute",
            unmute: ".har-unmute",
            volumeBar: ".har-volume-bar",
            volumeBarValue: ".har-volume-bar-value",
            currentTime: ".har-current-time",
            duration: ".har-duration",
            title: ".har-title"
        },
        errorAlerts: !0,
        warningAlerts: !1,
        ended: function() {
            var a = jQuery(".trak-item.active");
            if (a.next().length > 0) {
                var b = a.next(),
                    c = b.find("audio").attr("title"),
                    d = b.data("audio"),
                    e = b.data("thumbnail"),
                    f = b.data("artist");
                jQuery(".jp-jplayer").attr("data-state");
                jQuery(".jp-audio-main .har-artist").text(f), jQuery(".trak-item").removeClass("active playing"), b.addClass("active playing"), jQuery(".har-thumbnail img").attr("src", e), jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                    title: c,
                    m4a: d
                }).jPlayer("play"), b.find("audio").attr("data-state", "play"), jQuery(".jp-jplayer").attr({
                    "data-state": "play",
                    "data-audio-src": d
                })
            } else a.removeClass("playing"), a.find("audio").attr("data-state", "pause")
        },
        play: function() {
            jQuery(".trak-item.active").addClass("playing"), jQuery(".trak-item.active").find("audio").attr("data-state", "play"), jQuery(".jp-jplayer").attr("data-state", "play")
        },
        pause: function() {
            jQuery(".trak-item.active").removeClass("playing"), jQuery(".trak-item.active").find("audio").attr("data-state", "pause"), jQuery(".jp-jplayer").attr("data-state", "pause")
        }
    });
    var h = {
        init: function() {
            jQuery(".trak-item .play-pause-button").on("click", function() {
                jQuery(this).parent().hasClass("active") || (jQuery(".trak-item").removeClass("active playing"), jQuery(".trak-item audio").data("state", "pause"), jQuery(".jp-jplayer").attr("data-state", "pause"));
                var a = jQuery(this).parent(),
                    b = a.find("audio").attr("title"),
                    c = a.data("audio"),
                    d = a.data("thumbnail"),
                    f = (a.data("artist"), jQuery('.trak-item.active[data-audio="' + c + '"][data-artist="' + i + '"][data-thumbnail="' + d + '"]')),
                    g = jQuery(this).parent().find("audio").attr("data-state"),
                    h = jQuery(".jp-jplayer").attr("data-audio-src");
                if (h == c) {
                    if ("play" == g)
                        if (a.hasClass("active")) jQuery("#jquery_jplayer_main").jPlayer("pause"), a.removeClass("playing"), a.find("audio").attr("data-state", "pause"), jQuery(".jp-jplayer").attr("data-state", "pause"), f.addClass("active"), f.removeClass("playing");
                        else {
                            jQuery(".trak-item").removeClass("active playing"), a.addClass("active playing");
                            var i = a.data("artist");
                            jQuery(".jp-audio-main .har-artist").text(i), jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                                title: b,
                                m4a: c
                            }).jPlayer("play"), a.find("audio").attr("data-state", "play"), jQuery(".jp-jplayer").attr({
                                "data-state": "play",
                                "data-audio-src": c
                            }), f.addClass("active playing");
                            var d = (jQuery(".trak-item.active"), a.data("thumbnail"));
                            jQuery(".har-thumbnail img").attr("src", d)
                        } else if ("pause" == g)
                        if (a.hasClass("active")) jQuery("#jquery_jplayer_main").jPlayer("play"), a.addClass("playing"), a.find("audio").attr("data-state", "play"), jQuery(".jp-jplayer").attr("data-state", "play"), f.addClass("active playing");
                        else {
                            jQuery(".trak-item").removeClass("active playing"), a.addClass("active playing");
                            var i = a.data("artist");
                            jQuery(".jp-audio-main .har-artist").text(i), jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                                title: b,
                                m4a: c
                            }).jPlayer("play"), a.find("audio").attr("data-state", "play"), jQuery(".jp-jplayer").attr({
                                "data-state": "play",
                                "data-audio-src": c
                            }), f.addClass("active playing");
                            var d = (jQuery(".trak-item.active"), a.data("thumbnail"));
                            jQuery(".har-thumbnail img").attr("src", d)
                        }
                } else {
                    jQuery(".trak-item").removeClass("active playing"), a.addClass("active playing");
                    var i = a.data("artist");
                    jQuery(".jp-audio-main .har-artist").text(i), jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                        title: b,
                        m4a: c
                    }).jPlayer("play"), a.find("audio").attr("data-state", "play"), jQuery(".jp-jplayer").attr({
                        "data-state": "play",
                        "data-audio-src": c
                    }), f.addClass("active playing");
                    var d = (jQuery(".trak-item.active"), a.data("thumbnail"));
                    jQuery(".har-thumbnail img").attr("src", d)
                }
            })
        },
        playPrevSong: function() {
            jQuery(".har-prev").on("click", function() {
                var a = jQuery(".trak-item.active");
                if (a.prev().length > 0) {
                    var b = a.prev(),
                        c = b.find("audio").attr("title"),
                        d = b.data("audio"),
                        e = b.data("thumbnail"),
                        f = b.data("artist");
                    jQuery(".jp-jplayer").attr("data-state");
                    jQuery(".jp-audio-main .har-artist").text(f), jQuery(".trak-item").removeClass("active playing"), b.addClass("active playing"), jQuery(".har-thumbnail img").attr("src", e), jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                        title: c,
                        m4a: d
                    }).jPlayer("play"), b.find("audio").attr("data-state", "play"), jQuery(".jp-jplayer").attr({
                        "data-state": "play",
                        "data-audio-src": d
                    })
                }
            })
        },
        playNextSong: function() {
            jQuery(".har-next").on("click", function() {
                var a = jQuery(".trak-item.active");
                if (a.next().length > 0) {
                    var b = a.next(),
                        c = b.find("audio").attr("title"),
                        d = b.data("audio"),
                        e = b.data("thumbnail"),
                        f = b.data("artist");
                    jQuery(".jp-jplayer").attr("data-state");
                    jQuery(".jp-audio-main .har-artist").text(f), jQuery(".trak-item").removeClass("active playing"), b.addClass("active playing"), jQuery(".har-thumbnail img").attr("src", e), jQuery("#jquery_jplayer_main").jPlayer("setMedia", {
                        title: c,
                        m4a: d
                    }).jPlayer("play"), b.find("audio").attr("data-state", "play"), jQuery(".jp-jplayer").attr({
                        "data-state": "play",
                        "data-audio-src": d
                    })
                }
            })
        }
    };
    jQuery(document).ready(function() {
        h.init(), h.playPrevSong(), h.playNextSong()
    }), a("#playlist-toggle").on("click", function(b) {
        b.preventDefault(), a(this).toggleClass("close-icon"), a(".playlist-wrapper").toggleClass("300").fadeToggle(300)
    })
}(jQuery), $(window).load(function() {
    if ($(".har_preloader").fadeOut("slow"), $("body").imagesLoaded(function() {
            $(".har_page_loader div").fadeOut(), $(".har_page_loader").delay(200).fadeOut("slow")
        }), !device.tablet() && !device.mobile()) {
        skrollr.init({
            forceHeight: !1
        });
        $(window).stellar({
            horizontalScrolling: !1,
            responsive: !0
        })
    }
    var b = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: !0,
        masonry: {
            columnWidth: ".grid-item"
        }
    });
    b.imagesLoaded().progress(function() {
        b.isotope("layout")
    }), $(window).resize(function() {
        b.isotope("layout")
    }), $(".masonry").masonry({
        itemSelector: ".masonry-item"
    }), $(".filter-button-group").on("click", "a", function() {
        $(this).parents(".filter-button-group").find("a").removeClass("active"), $(this).addClass("active");
        var a = $(this).attr("data-filter");
        b.isotope({
            filter: a
        })
    })
});