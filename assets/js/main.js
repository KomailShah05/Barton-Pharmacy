!(function (e) {
  "use strict";
  e(window).on("load", function () {
    e(".preloader").fadeOut();
  }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.vsmobilemenu = function (t) {
      var i = e.extend(
        {
          menuToggleBtn: ".vs-menu-toggle",
          bodyToggleClass: "vs-body-visible",
          subMenuClass: "vs-submenu",
          subMenuParent: "vs-item-has-children",
          subMenuParentToggle: "vs-active",
          meanExpandClass: "vs-mean-expand",
          subMenuToggleClass: "vs-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function s() {
          t.toggleClass(i.bodyToggleClass);
          var s = "." + i.subMenuClass;
          e(s).each(function () {
            e(this).hasClass(i.subMenuToggleClass) &&
              (e(this).removeClass(i.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(i.subMenuParentToggle));
          });
        }
        t.find("li").each(function () {
          var t = e(this).find("ul");
          t.addClass(i.subMenuClass),
            t.css("display", "none"),
            t.parent().addClass(i.subMenuParent),
            t.prev("a").addClass(i.meanExpandClass),
            t.next("a").addClass(i.meanExpandClass);
        });
        var a = "." + i.meanExpandClass;
        e(a).each(function () {
          e(this).on("click", function (t) {
            var s;
            t.preventDefault(),
              e((s = this)).next("ul").length > 0
                ? (e(s).parent().toggleClass(i.subMenuParentToggle),
                  e(s).next("ul").slideToggle(i.toggleSpeed),
                  e(s).next("ul").toggleClass(i.subMenuToggleClass))
                : e(s).prev("ul").length > 0 &&
                  (e(s).parent().toggleClass(i.subMenuParentToggle),
                  e(s).prev("ul").slideToggle(i.toggleSpeed),
                  e(s).prev("ul").toggleClass(i.subMenuToggleClass));
          });
        }),
          e(i.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              s();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), s();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".vs-menu-wrapper").vsmobilemenu();
  var t,
    i,
    s,
    a = "",
    n = ".scrollToTop";
  function o(e) {
    return parseInt(e, 10);
  }
  e(window).on("scroll", function () {
    var t, i, s, o, l;
    (t = e(".sticky-active")),
      (i = "active"),
      (s = "will-sticky"),
      (o = e(window).scrollTop()),
      (l = t.css("height")),
      t.parent().css("min-height", l),
      e(window).scrollTop() > 800
        ? (t.parent().addClass(s), o > a ? t.removeClass(i) : t.addClass(i))
        : (t.parent().css("min-height", "").removeClass(s), t.removeClass(i)),
      (a = o),
      e(this).scrollTop() > 500
        ? e(n).addClass("show")
        : e(n).removeClass("show");
  }),
    e(n).each(function () {
      e(this).on("click", function (t) {
        return (
          t.preventDefault(),
          e("html, body").animate({ scrollTop: 0 }, a / 3),
          !1
        );
      });
    }),
    e("[data-bg-src]").length > 0 &&
      e("[data-bg-src]").each(function () {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")");
      }),
    e("[data-bg-color]").length > 0 &&
      e("[data-bg-color]").each(function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t);
      }),
    (t = ".sidemenu-wrapper"),
    (i = ".sideMenuCls"),
    (s = "show"),
    e(".sideMenuToggler").on("click", function (i) {
      i.preventDefault(), e(t).addClass(s);
    }),
    e(t).on("click", function (i) {
      i.stopPropagation(), e(t).removeClass(s);
    }),
    e(t + " > div").on("click", function (i) {
      i.stopPropagation(), e(t).addClass(s);
    }),
    e(i).on("click", function (i) {
      i.preventDefault(), i.stopPropagation(), e(t).removeClass(s);
    }),
    (function (t, i, s, a) {
      e(i).on("click", function (i) {
        i.preventDefault(), e(t).addClass(a);
      }),
        e(t).on("click", function (i) {
          i.stopPropagation(), e(t).removeClass(a);
        }),
        e(t)
          .find("form")
          .on("click", function (i) {
            i.stopPropagation(), e(t).addClass(a);
          }),
        e(s).on("click", function (i) {
          i.preventDefault(), i.stopPropagation(), e(t).removeClass(a);
        });
    })(".popup-search-box", ".searchBoxTggler", ".searchClose", "show"),
    e(".vs-hero-carousel").each(function () {
      var t = e(this);
      function i(e) {
        return t.data(e);
      }
      t
        .on("sliderWillLoad", function (e, t) {
          var i = jQuery(this).find(".ls-responsive"),
            s = jQuery(window).width();
          i.each(function () {
            var e = jQuery(this);
            function t(t) {
              return "" === e.data(t) ? e.data(null) : e.data(t);
            }
            var i = t(
                s < 768
                  ? "ls-mobile"
                  : s < 993
                  ? "ls-tablet"
                  : s < 1025
                  ? "ls-laptop"
                  : "ls-desktop"
              ),
              a = void 0 !== e.attr("style") ? e.attr("style") : " ";
            e.attr("style", a + i);
          });
        })
        .on("sliderDidLoad", function (i, s) {
          setTimeout(() => {
            var i = "data-slide-go",
              a = ".ls-custom-dot",
              n = s.slides.current.index,
              o = 1;
            t.find(a).each(function () {
              e(this).attr(i, o),
                o++,
                e(this).on("click", function (t) {
                  t.preventDefault();
                  var s = e(this).closest(".ls-container"),
                    a = e(this).attr(i);
                  s.layerSlider(parseFloat(a));
                });
            }),
              t.find(".ls-custom-arrow").each(function () {
                e(this).on("click", function (t) {
                  t.preventDefault();
                  var i = e(this).attr("data-change-slide");
                  e(this).closest(".ls-container").layerSlider(i);
                });
              }),
              e(a + "[" + i + '="' + n + '"').addClass("active");
          }, 1e3);
        })
        .on("slideChangeDidComplete", function (t, i) {
          var s = i.slides.current.index;
          e('.ls-custom-dot[data-slide-go="' + s + '"')
            .addClass("active")
            .siblings()
            .removeClass("active");
        }),
        t.find("[data-ls-go]").each(function () {
          e(this).on("click", function (i) {
            i.preventDefault();
            var s = e(this).data("ls-go");
            t.layerSlider(s);
          });
        }),
        t.layerSlider({
          allowRestartOnResize: !0,
          maxRatio: i("maxratio") ? i("maxratio") : 1,
          type: i("slidertype") ? i("slidertype") : "responsive",
          pauseOnHover: !!i("pauseonhover"),
          navPrevNext: !!i("navprevnext"),
          hoverPrevNext: !!i("hoverprevnext"),
          hoverBottomNav: !!i("hoverbottomnav"),
          navStartStop: !!i("navstartstop"),
          navButtons: !!i("navbuttons"),
          loop: !1 !== i("loop"),
          autostart: !!i("autostart"),
          height: i("height") ? i("height") : 1080,
          responsiveUnder: i("responsiveunder") ? i("responsiveunder") : 1220,
          layersContainer: i("container") ? i("container") : 1220,
          showCircleTimer: !!i("showcircletimer"),
          skinsPath: "layerslider/skins/",
          thumbnailNavigation: !1 !== i("thumbnailnavigation"),
          globalBGImage: !!i("globalbgimage") && i("globalbgimage"),
          globalBGSize: !!i("globalbgsize") && i("globalbgsize"),
        });
    }),
    e(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    (e.fn.countdown = function () {
      e(this).each(function () {
        var t = e(this),
          i = new Date(t.data("offer-date")).getTime();
        function s(e) {
          return t.find(e);
        }
        var a = setInterval(function () {
          var e = new Date().getTime(),
            n = i - e,
            o = Math.floor(n / 864e5),
            l = Math.floor((n % 864e5) / 36e5),
            r = Math.floor((n % 36e5) / 6e4),
            c = Math.floor((n % 6e4) / 1e3);
          n < 0
            ? (clearInterval(a),
              t.addClass("expired"),
              t.find(".message").css("display", "block"))
            : (s(".day").html(o + " "),
              s(".hour").html(l + " "),
              s(".minute").html(r + " "),
              s(".seconds").html(c + " "));
        }, 1e3);
      });
    }),
    e(".offer-counter").length && e(".offer-counter").countdown(),
    (e.fn.sectionPosition = function (t, i) {
      e(this).each(function () {
        var s,
          a,
          n,
          l,
          r,
          c = e(this);
        (s = Math.floor(c.height() / 2)),
          (a = c.attr(t)),
          (n = c.attr(i)),
          (l = o(e(n).css("padding-top"))),
          (r = o(e(n).css("padding-bottom"))),
          "top-half" === a
            ? (e(n).css("padding-bottom", r + s + "px"),
              c.css("margin-top", "-" + s + "px"))
            : "bottom-half" === a &&
              (e(n).css("padding-top", l + s + "px"),
              c.css("margin-bottom", "-" + s + "px"));
      });
    }),
    e("[data-sec-pos]").length &&
      e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for"),
    e(".member-angle-links .middle-icon").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).toggleClass("active"),
          e(this).parent().toggleClass("show");
      });
    }),
    (e.fn.indicator = function () {
      var t = e(this),
        i = t.find("a"),
        s = t.find("button");
      t.append('<span class="indicator"></span>');
      var a = t.find(".indicator");
      if (i.length) var n = i;
      else if (s.length) n = s;
      function o() {
        var e = t.find(".active"),
          i = e.css("height"),
          s = e.css("width"),
          n = e.position().top + "px",
          o = e.position().left + "px";
        a.css({ top: n, left: o, width: s, height: i });
      }
      n.on("click", function (t) {
        t.preventDefault(),
          e(this).addClass("active"),
          e(this).siblings(".active").removeClass("active"),
          o();
      }),
        o();
    }),
    e(".product-tab").length && e(".product-tab").indicator(),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var i = e(this).siblings(".qty-input"),
          s = o(i.val());
        isNaN(s) || i.val(s + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var i = e(this).siblings(".qty-input"),
          s = o(i.val());
        !isNaN(s) && s > 0 && i.val(s - 1);
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".product-thumb").length &&
      e(".product-thumb").each(function () {
        e(this).on("click", function () {
          var t = e(this).find("img").data("big-img");
          e(".img-fullsize img").attr("src", t),
            e(".img-fullsize .popup-image").attr("href", t);
        });
      }),
    e(".filter-active").imagesLoaded(function () {
      var t = ".filter-active",
        i = ".filter-item",
        s = ".filter-menu-active";
      if (e(t).length > 0) {
        var a = e(t).isotope({
          itemSelector: i,
          filter: "*",
          masonry: { columnWidth: i },
        });
        e(s).on("click", "button", function () {
          var t = e(this).attr("data-filter");
          a.isotope({ filter: t });
        }),
          e(s).on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".dateTime-pick").datetimepicker({
      timepicker: !0,
      datepicker: !0,
      format: "y-m-d H:i",
      hours12: !1,
      step: 30,
    }),
    e(".date-pick").datetimepicker({
      timepicker: !1,
      datepicker: !0,
      format: "m-d-y",
      step: 10,
    }),
    e(".time-pick").datetimepicker({
      datepicker: !1,
      timepicker: !0,
      format: "H:i",
      hours12: !1,
      step: 10,
    }),
    new universalParallax().init(),
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      resetAnimation: !1,
    }).init(),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".service-circle__item").length &&
      (e(".service-circle__item").each(function (t) {
        e(this).attr("data-tab-no", t);
      }),
      e(".service-circle__menu li a").each(function (t) {
        let i = e(this);
        i.attr("data-tab-link", t),
          i.on("click", function (t) {
            t.preventDefault();
            let i = e(this).data("tab-link");
            e(this)
              .parent()
              .addClass("active")
              .siblings()
              .removeClass("active"),
              e(`.service-circle__item[data-tab-no="${i}"]`)
                .addClass("active")
                .siblings()
                .removeClass("active");
          });
      })),
    e(".service-slider1").slick({
      dots: !0,
      arrows: !0,
      infinite: !0,
      autoplay: !1,
      fade: !1,
      speed: 1e3,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="far fa-long-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="far fa-long-arrow-right"></i></button>',
      appendArrows: e("#slidenav1"),
      appendDots: e("#slidenav1"),
      responsive: [
        { breakpoint: 1600, settings: { slidesToShow: 4 } },
        { breakpoint: 1400, settings: { slidesToShow: 3 } },
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } },
      ],
    });
})(jQuery);
