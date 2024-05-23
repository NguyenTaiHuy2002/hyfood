/*! For license information please see product_search.js.LICENSE.txt */
!(function (t) {
    var e = {};
    function i(s) {
        if (e[s]) return e[s].exports;
        var n = (e[s] = { i: s, l: !1, exports: {} });
        return t[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    (i.m = t),
        (i.c = e),
        (i.d = function (t, e, s) {
            i.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: s });
        }),
        (i.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (i.t = function (t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var s = Object.create(null);
            if (
                (i.r(s),
                Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && "string" != typeof t)
            )
                for (var n in t)
                    i.d(
                        s,
                        n,
                        function (e) {
                            return t[e];
                        }.bind(null, n)
                    );
            return s;
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = "/"),
        i((i.s = 2));
})({
    2: function (t, e, i) {
        t.exports = i("aWfg");
    },
    "835U": function (t, e, i) {
        (function (t) {
            !(function (t, e) {
                "use strict";
                e.SliderPro = {
                    modules: [],
                    addModule: function (t, i) {
                        this.modules.push(t), e.extend(s.prototype, i);
                    },
                };
                var i = (e.SliderPro.namespace = "SliderPro"),
                    s = function (t, i) {
                        (this.instance = t),
                            (this.$slider = e(this.instance)),
                            (this.$slides = null),
                            (this.$slidesMask = null),
                            (this.$slidesContainer = null),
                            (this.slides = []),
                            (this.slidesOrder = []),
                            (this.options = i),
                            (this.settings = {}),
                            (this.originalSettings = {}),
                            (this.originalGotoSlide = null),
                            (this.selectedSlideIndex = 0),
                            (this.previousSlideIndex = 0),
                            (this.middleSlidePosition = 0),
                            (this.supportedAnimation = null),
                            (this.vendorPrefix = null),
                            (this.transitionEvent = null),
                            (this.positionProperty = null),
                            (this.sizeProperty = null),
                            (this.isIE = null),
                            (this.slidesPosition = 0),
                            (this.slidesSize = 0),
                            (this.averageSlideSize = 0),
                            (this.slideWidth = 0),
                            (this.slideHeight = 0),
                            (this.previousSlideWidth = 0),
                            (this.previousSlideHeight = 0),
                            (this.previousWindowWidth = 0),
                            (this.previousWindowHeight = 0),
                            (this.allowResize = !0),
                            (this.uniqueId = new Date().valueOf()),
                            (this.breakpoints = []),
                            (this.currentBreakpoint = -1),
                            (this.shuffledIndexes = []),
                            this._init();
                    };
                s.prototype = {
                    _init: function () {
                        var s = this;
                        (this.supportedAnimation = o.getSupportedAnimation()),
                            (this.vendorPrefix = o.getVendorPrefix()),
                            (this.transitionEvent = o.getTransitionEvent()),
                            (this.isIE = o.checkIE()),
                            this.$slider.removeClass("sp-no-js"),
                            t.navigator.userAgent.match(
                                /(iPad|iPhone|iPod)/g
                            ) && this.$slider.addClass("ios");
                        var n = /(msie) ([\w.]+)/.exec(
                            t.navigator.userAgent.toLowerCase()
                        );
                        this.isIE && this.$slider.addClass("ie"),
                            null !== n &&
                                this.$slider.addClass(
                                    "ie" + parseInt(n[2], 10)
                                ),
                            (this.$slidesContainer = e(
                                '<div class="sp-slides-container"></div>'
                            ).appendTo(this.$slider)),
                            (this.$slidesMask = e(
                                '<div class="sp-mask"></div>'
                            ).appendTo(this.$slidesContainer)),
                            (this.$slides = this.$slider
                                .find(".sp-slides")
                                .appendTo(this.$slidesMask)),
                            this.$slider
                                .find(".sp-slide")
                                .appendTo(this.$slides);
                        var r = e.SliderPro.modules;
                        if (void 0 !== r)
                            for (var a = 0; a < r.length; a++) {
                                var l =
                                    r[a].substring(0, 1).toLowerCase() +
                                    r[a].substring(1) +
                                    "Defaults";
                                void 0 !== this[l] &&
                                    e.extend(this.defaults, this[l]);
                            }
                        if (
                            ((this.settings = e.extend(
                                {},
                                this.defaults,
                                this.options
                            )),
                            void 0 !== r)
                        )
                            for (var h = 0; h < r.length; h++)
                                void 0 !== this["init" + r[h]] &&
                                    this["init" + r[h]]();
                        if (
                            ((this.originalSettings = e.extend(
                                {},
                                this.settings
                            )),
                            (this.originalGotoSlide = this.gotoSlide),
                            null !== this.settings.breakpoints)
                        ) {
                            for (var d in this.settings.breakpoints)
                                this.breakpoints.push({
                                    size: parseInt(d, 10),
                                    properties: this.settings.breakpoints[d],
                                });
                            this.breakpoints = this.breakpoints.sort(function (
                                t,
                                e
                            ) {
                                return t.size >= e.size ? 1 : -1;
                            });
                        }
                        if (
                            ((this.selectedSlideIndex =
                                this.settings.startSlide),
                            !0 === this.settings.shuffle)
                        ) {
                            var u = this.$slides.find(".sp-slide"),
                                c = [];
                            u.each(function (t) {
                                s.shuffledIndexes.push(t);
                            });
                            for (
                                var p = this.shuffledIndexes.length - 1;
                                p > 0;
                                p--
                            ) {
                                var f = Math.floor(Math.random() * (p + 1)),
                                    g = this.shuffledIndexes[p];
                                (this.shuffledIndexes[p] =
                                    this.shuffledIndexes[f]),
                                    (this.shuffledIndexes[f] = g);
                            }
                            e.each(this.shuffledIndexes, function (t, e) {
                                c.push(u[e]);
                            }),
                                this.$slides.empty().append(c);
                        }
                        e(t).on(
                            "resize." + this.uniqueId + "." + i,
                            function () {
                                var i = e(t).width(),
                                    n = e(t).height();
                                !1 === s.allowResize ||
                                    (s.previousWindowWidth === i &&
                                        s.previousWindowHeight === n) ||
                                    ((s.previousWindowWidth = i),
                                    (s.previousWindowHeight = n),
                                    (s.allowResize = !1),
                                    setTimeout(function () {
                                        s.resize(), (s.allowResize = !0);
                                    }, 200));
                            }
                        ),
                            this.on("update." + i, function () {
                                (s.previousSlideWidth = 0), s.resize();
                            }),
                            this.update(),
                            this.$slides
                                .find(".sp-slide")
                                .eq(this.selectedSlideIndex)
                                .addClass("sp-selected"),
                            this.trigger({ type: "init" }),
                            e.isFunction(this.settings.init) &&
                                this.settings.init.call(this, { type: "init" });
                    },
                    update: function () {
                        var t = this;
                        "horizontal" === this.settings.orientation
                            ? (this.$slider
                                  .removeClass("sp-vertical")
                                  .addClass("sp-horizontal"),
                              this.$slider.css({
                                  height: "",
                                  "max-height": "",
                              }),
                              this.$slides.find(".sp-slide").css("top", ""))
                            : "vertical" === this.settings.orientation &&
                              (this.$slider
                                  .removeClass("sp-horizontal")
                                  .addClass("sp-vertical"),
                              this.$slides.find(".sp-slide").css("left", "")),
                            !0 === this.settings.rightToLeft
                                ? this.$slider.addClass("sp-rtl")
                                : this.$slider.removeClass("sp-rtl"),
                            (this.positionProperty =
                                "horizontal" === this.settings.orientation
                                    ? "left"
                                    : "top"),
                            (this.sizeProperty =
                                "horizontal" === this.settings.orientation
                                    ? "width"
                                    : "height"),
                            (this.gotoSlide = this.originalGotoSlide);
                        for (var s = this.slides.length - 1; s >= 0; s--)
                            if (
                                0 ===
                                this.$slider.find(
                                    '.sp-slide[data-index="' + s + '"]'
                                ).length
                            ) {
                                var n = this.slides[s];
                                n.off("imagesLoaded." + i),
                                    n.destroy(),
                                    this.slides.splice(s, 1);
                            }
                        (this.slidesOrder.length = 0),
                            this.$slider.find(".sp-slide").each(function (i) {
                                var s = e(this);
                                void 0 === s.attr("data-init")
                                    ? t._createSlide(i, s)
                                    : t.slides[i].setIndex(i),
                                    t.slidesOrder.push(i);
                            }),
                            (this.middleSlidePosition = parseInt(
                                (t.slidesOrder.length - 1) / 2,
                                10
                            )),
                            !0 === this.settings.loop &&
                                this._updateSlidesOrder(),
                            this.trigger({ type: "update" }),
                            e.isFunction(this.settings.update) &&
                                this.settings.update.call(this, {
                                    type: "update",
                                });
                    },
                    _createSlide: function (t, s) {
                        var o = this,
                            r = new n(e(s), t, this.settings);
                        this.slides.splice(t, 0, r),
                            r.on("imagesLoaded." + i, function (t) {
                                !0 === o.settings.autoSlideSize &&
                                    (!1 === o.$slides.hasClass("sp-animated") &&
                                        o._resetSlidesPosition(),
                                    o._calculateSlidesSize()),
                                    !0 === o.settings.autoHeight &&
                                        t.index === o.selectedSlideIndex &&
                                        o._resizeHeightTo(r.getSize().height);
                            });
                    },
                    _updateSlidesOrder: function () {
                        var t,
                            i,
                            s =
                                e.inArray(
                                    this.selectedSlideIndex,
                                    this.slidesOrder
                                ) - this.middleSlidePosition;
                        if (s < 0)
                            for (
                                i =
                                    (t = this.slidesOrder.splice(
                                        s,
                                        Math.abs(s)
                                    )).length - 1;
                                i >= 0;
                                i--
                            )
                                this.slidesOrder.unshift(t[i]);
                        else if (s > 0)
                            for (
                                t = this.slidesOrder.splice(0, s), i = 0;
                                i <= t.length - 1;
                                i++
                            )
                                this.slidesOrder.push(t[i]);
                    },
                    _updateSlidesPosition: function () {
                        var t,
                            e,
                            i,
                            s,
                            n,
                            o = parseInt(
                                this.$slides
                                    .find(".sp-slide")
                                    .eq(this.selectedSlideIndex)
                                    .css(this.positionProperty),
                                10
                            ),
                            r = o;
                        if (!0 === this.settings.autoSlideSize)
                            if (
                                !0 === this.settings.rightToLeft &&
                                "horizontal" === this.settings.orientation
                            ) {
                                for (i = this.middleSlidePosition; i >= 0; i--)
                                    (e = (t = this.getSlideAt(
                                        this.slidesOrder[i]
                                    )).$slide).css(this.positionProperty, r),
                                        (r =
                                            parseInt(
                                                e.css(this.positionProperty),
                                                10
                                            ) +
                                            t.getSize()[this.sizeProperty] +
                                            this.settings.slideDistance);
                                for (
                                    r = o, i = this.middleSlidePosition + 1;
                                    i < this.slidesOrder.length;
                                    i++
                                )
                                    (e = (t = this.getSlideAt(
                                        this.slidesOrder[i]
                                    )).$slide).css(
                                        this.positionProperty,
                                        r -
                                            (t.getSize()[this.sizeProperty] +
                                                this.settings.slideDistance)
                                    ),
                                        (r = parseInt(
                                            e.css(this.positionProperty),
                                            10
                                        ));
                            } else {
                                for (
                                    i = this.middleSlidePosition - 1;
                                    i >= 0;
                                    i--
                                )
                                    (e = (t = this.getSlideAt(
                                        this.slidesOrder[i]
                                    )).$slide).css(
                                        this.positionProperty,
                                        r -
                                            (t.getSize()[this.sizeProperty] +
                                                this.settings.slideDistance)
                                    ),
                                        (r = parseInt(
                                            e.css(this.positionProperty),
                                            10
                                        ));
                                for (
                                    r = o, i = this.middleSlidePosition;
                                    i < this.slidesOrder.length;
                                    i++
                                )
                                    (e = (t = this.getSlideAt(
                                        this.slidesOrder[i]
                                    )).$slide).css(this.positionProperty, r),
                                        (r =
                                            parseInt(
                                                e.css(this.positionProperty),
                                                10
                                            ) +
                                            t.getSize()[this.sizeProperty] +
                                            this.settings.slideDistance);
                            }
                        else
                            for (
                                s =
                                    !0 === this.settings.rightToLeft &&
                                    "horizontal" === this.settings.orientation
                                        ? -1
                                        : 1,
                                    n =
                                        "horizontal" ===
                                        this.settings.orientation
                                            ? this.slideWidth
                                            : this.slideHeight,
                                    i = 0;
                                i < this.slidesOrder.length;
                                i++
                            )
                                (e = this.$slides
                                    .find(".sp-slide")
                                    .eq(this.slidesOrder[i])).css(
                                    this.positionProperty,
                                    o +
                                        s *
                                            (i - this.middleSlidePosition) *
                                            (n + this.settings.slideDistance)
                                );
                    },
                    _resetSlidesPosition: function () {
                        var t,
                            e,
                            i,
                            s,
                            n,
                            o,
                            r = 0;
                        if (!0 === this.settings.autoSlideSize) {
                            if (
                                !0 === this.settings.rightToLeft &&
                                "horizontal" === this.settings.orientation
                            )
                                for (i = 0; i < this.slidesOrder.length; i++)
                                    (e = (t = this.getSlideAt(
                                        this.slidesOrder[i]
                                    )).$slide).css(
                                        this.positionProperty,
                                        r -
                                            (t.getSize()[this.sizeProperty] +
                                                this.settings.slideDistance)
                                    ),
                                        (r = parseInt(
                                            e.css(this.positionProperty),
                                            10
                                        ));
                            else
                                for (i = 0; i < this.slidesOrder.length; i++)
                                    (e = (t = this.getSlideAt(
                                        this.slidesOrder[i]
                                    )).$slide).css(this.positionProperty, r),
                                        (r =
                                            parseInt(
                                                e.css(this.positionProperty),
                                                10
                                            ) +
                                            t.getSize()[this.sizeProperty] +
                                            this.settings.slideDistance);
                            s = this.getSlideAt(
                                this.selectedSlideIndex
                            ).getSize()[this.sizeProperty];
                        } else {
                            for (
                                n =
                                    !0 ==
                                    (!0 === this.settings.rightToLeft &&
                                        "horizontal" ===
                                            this.settings.orientation)
                                        ? -1
                                        : 1,
                                    o =
                                        "horizontal" ===
                                        this.settings.orientation
                                            ? this.slideWidth
                                            : this.slideHeight,
                                    i = 0;
                                i < this.slidesOrder.length;
                                i++
                            )
                                (e = this.$slides
                                    .find(".sp-slide")
                                    .eq(this.slidesOrder[i])).css(
                                    this.positionProperty,
                                    n * i * (o + this.settings.slideDistance)
                                );
                            s = o;
                        }
                        var a =
                                !0 === this.settings.centerSelectedSlide &&
                                "auto" !== this.settings.visibleSize
                                    ? Math.round(
                                          (parseInt(
                                              this.$slidesMask.css(
                                                  this.sizeProperty
                                              ),
                                              10
                                          ) -
                                              s) /
                                              2
                                      )
                                    : 0,
                            l =
                                -parseInt(
                                    this.$slides
                                        .find(".sp-slide")
                                        .eq(this.selectedSlideIndex)
                                        .css(this.positionProperty),
                                    10
                                ) + a;
                        this._moveTo(l, !0);
                    },
                    _calculateSlidesSize: function () {
                        if (!0 === this.settings.autoSlideSize) {
                            var t = this.$slides
                                    .find(".sp-slide")
                                    .eq(this.slidesOrder[0]),
                                e = parseInt(t.css(this.positionProperty), 10),
                                i = this.$slides
                                    .find(".sp-slide")
                                    .eq(
                                        this.slidesOrder[
                                            this.slidesOrder.length - 1
                                        ]
                                    ),
                                s =
                                    parseInt(i.css(this.positionProperty), 10) +
                                    (!0 === this.settings.rightToLeft &&
                                    "horizontal" === this.settings.orientation
                                        ? -1
                                        : 1) *
                                        parseInt(i.css(this.sizeProperty), 10);
                            (this.slidesSize = Math.abs(s - e)),
                                (this.averageSlideSize = Math.round(
                                    this.slidesSize / this.slides.length
                                ));
                        } else
                            (this.slidesSize =
                                (("horizontal" === this.settings.orientation
                                    ? this.slideWidth
                                    : this.slideHeight) +
                                    this.settings.slideDistance) *
                                    this.slides.length -
                                this.settings.slideDistance),
                                (this.averageSlideSize =
                                    "horizontal" === this.settings.orientation
                                        ? this.slideWidth
                                        : this.slideHeight);
                    },
                    resize: function () {
                        var i = this;
                        if (
                            null !== this.settings.breakpoints &&
                            this.breakpoints.length > 0
                        )
                            if (
                                e(t).width() >
                                    this.breakpoints[
                                        this.breakpoints.length - 1
                                    ].size &&
                                -1 !== this.currentBreakpoint
                            )
                                (this.currentBreakpoint = -1),
                                    this._setProperties(
                                        this.originalSettings,
                                        !1
                                    );
                            else
                                for (
                                    var s = 0, n = this.breakpoints.length;
                                    s < n;
                                    s++
                                )
                                    if (
                                        e(t).width() <= this.breakpoints[s].size
                                    ) {
                                        if (
                                            this.currentBreakpoint !==
                                            this.breakpoints[s].size
                                        ) {
                                            var o = {
                                                type: "breakpointReach",
                                                size: this.breakpoints[s].size,
                                                settings:
                                                    this.breakpoints[s]
                                                        .properties,
                                            };
                                            this.trigger(o),
                                                e.isFunction(
                                                    this.settings
                                                        .breakpointReach
                                                ) &&
                                                    this.settings.breakpointReach.call(
                                                        this,
                                                        o
                                                    ),
                                                (this.currentBreakpoint =
                                                    this.breakpoints[s].size);
                                            var r = e.extend(
                                                {},
                                                this.originalSettings,
                                                this.breakpoints[s].properties
                                            );
                                            return void this._setProperties(
                                                r,
                                                !1
                                            );
                                        }
                                        break;
                                    }
                        !0 === this.settings.responsive
                            ? ("fullWidth" !== this.settings.forceSize &&
                                  "fullWindow" !== this.settings.forceSize) ||
                              ("auto" !== this.settings.visibleSize &&
                                  ("auto" === this.settings.visibleSize ||
                                      "vertical" !== this.settings.orientation))
                                ? this.$slider.css({
                                      width: "100%",
                                      "max-width": this.settings.width,
                                      marginLeft: "",
                                  })
                                : (this.$slider.css("margin", 0),
                                  this.$slider.css({
                                      width: e(t).width(),
                                      "max-width": "",
                                      marginLeft: -this.$slider.offset().left,
                                  }))
                            : this.$slider.css({ width: this.settings.width }),
                            -1 === this.settings.aspectRatio &&
                                (this.settings.aspectRatio =
                                    this.settings.width / this.settings.height),
                            (this.slideWidth = this.$slider.width()),
                            "fullWindow" === this.settings.forceSize
                                ? (this.slideHeight = e(t).height())
                                : (this.slideHeight = isNaN(
                                      this.settings.aspectRatio
                                  )
                                      ? this.settings.height
                                      : this.slideWidth /
                                        this.settings.aspectRatio),
                            (this.previousSlideWidth !== this.slideWidth ||
                                this.previousSlideHeight !== this.slideHeight ||
                                "auto" !== this.settings.visibleSize ||
                                this.$slider.outerWidth() >
                                    this.$slider.parent().width() ||
                                this.$slider.width() !==
                                    this.$slidesMask.width()) &&
                                ((this.previousSlideWidth = this.slideWidth),
                                (this.previousSlideHeight = this.slideHeight),
                                this._resizeSlides(),
                                this.$slidesMask.css({
                                    width: this.slideWidth,
                                    height: this.slideHeight,
                                }),
                                !0 === this.settings.autoHeight
                                    ? setTimeout(function () {
                                          i._resizeHeight();
                                      }, 1)
                                    : this.$slidesMask.css(
                                          this.vendorPrefix + "transition",
                                          ""
                                      ),
                                "auto" !== this.settings.visibleSize &&
                                    ("horizontal" === this.settings.orientation
                                        ? ("fullWidth" ===
                                              this.settings.forceSize ||
                                          "fullWindow" ===
                                              this.settings.forceSize
                                              ? (this.$slider.css("margin", 0),
                                                this.$slider.css({
                                                    width: e(t).width(),
                                                    "max-width": "",
                                                    marginLeft:
                                                        -this.$slider.offset()
                                                            .left,
                                                }))
                                              : this.$slider.css({
                                                    width: this.settings
                                                        .visibleSize,
                                                    "max-width": "100%",
                                                    marginLeft: 0,
                                                }),
                                          this.$slidesMask.css(
                                              "width",
                                              this.$slider.width()
                                          ))
                                        : ("fullWindow" ===
                                          this.settings.forceSize
                                              ? this.$slider.css({
                                                    height: e(t).height(),
                                                    "max-height": "",
                                                })
                                              : this.$slider.css({
                                                    height: this.settings
                                                        .visibleSize,
                                                    "max-height": "100%",
                                                }),
                                          this.$slidesMask.css(
                                              "height",
                                              this.$slider.height()
                                          ))),
                                this._resetSlidesPosition(),
                                this._calculateSlidesSize(),
                                this.trigger({ type: "sliderResize" }),
                                e.isFunction(this.settings.sliderResize) &&
                                    this.settings.sliderResize.call(this, {
                                        type: "sliderResize",
                                    }));
                    },
                    _resizeSlides: function () {
                        var t = this.slideWidth,
                            i = this.slideHeight;
                        !0 === this.settings.autoSlideSize
                            ? "horizontal" === this.settings.orientation
                                ? (t = "auto")
                                : "vertical" === this.settings.orientation &&
                                  (i = "auto")
                            : !0 === this.settings.autoHeight && (i = "auto"),
                            e.each(this.slides, function (e, s) {
                                s.setSize(t, i);
                            });
                    },
                    _resizeHeight: function () {
                        var t = this.getSlideAt(this.selectedSlideIndex);
                        this._resizeHeightTo(t.getSize().height);
                    },
                    gotoSlide: function (t) {
                        if (
                            t !== this.selectedSlideIndex &&
                            void 0 !== this.slides[t]
                        ) {
                            var i = this;
                            (this.previousSlideIndex = this.selectedSlideIndex),
                                (this.selectedSlideIndex = t),
                                this.$slides
                                    .find(".sp-selected")
                                    .removeClass("sp-selected"),
                                this.$slides
                                    .find(".sp-slide")
                                    .eq(this.selectedSlideIndex)
                                    .addClass("sp-selected"),
                                !0 === this.settings.loop &&
                                    (this._updateSlidesOrder(),
                                    this._updateSlidesPosition()),
                                !0 === this.settings.autoHeight &&
                                    this._resizeHeight();
                            var s =
                                    !0 === this.settings.centerSelectedSlide &&
                                    "auto" !== this.settings.visibleSize
                                        ? Math.round(
                                              (parseInt(
                                                  this.$slidesMask.css(
                                                      this.sizeProperty
                                                  ),
                                                  10
                                              ) -
                                                  this.getSlideAt(
                                                      this.selectedSlideIndex
                                                  ).getSize()[
                                                      this.sizeProperty
                                                  ]) /
                                                  2
                                          )
                                        : 0,
                                n =
                                    -parseInt(
                                        this.$slides
                                            .find(".sp-slide")
                                            .eq(this.selectedSlideIndex)
                                            .css(this.positionProperty),
                                        10
                                    ) + s;
                            this._moveTo(n, !1, function () {
                                i._resetSlidesPosition(),
                                    i.trigger({
                                        type: "gotoSlideComplete",
                                        index: t,
                                        previousIndex: i.previousSlideIndex,
                                    }),
                                    e.isFunction(
                                        i.settings.gotoSlideComplete
                                    ) &&
                                        i.settings.gotoSlideComplete.call(i, {
                                            type: "gotoSlideComplete",
                                            index: t,
                                            previousIndex: i.previousSlideIndex,
                                        });
                            }),
                                this.trigger({
                                    type: "gotoSlide",
                                    index: t,
                                    previousIndex: this.previousSlideIndex,
                                }),
                                e.isFunction(this.settings.gotoSlide) &&
                                    this.settings.gotoSlide.call(this, {
                                        type: "gotoSlide",
                                        index: t,
                                        previousIndex: this.previousSlideIndex,
                                    });
                        }
                    },
                    nextSlide: function () {
                        var t =
                            this.selectedSlideIndex >= this.getTotalSlides() - 1
                                ? 0
                                : this.selectedSlideIndex + 1;
                        this.gotoSlide(t);
                    },
                    previousSlide: function () {
                        var t =
                            this.selectedSlideIndex <= 0
                                ? this.getTotalSlides() - 1
                                : this.selectedSlideIndex - 1;
                        this.gotoSlide(t);
                    },
                    _moveTo: function (t, e, i) {
                        var s = this,
                            n = {};
                        if (t !== this.slidesPosition)
                            if (
                                ((this.slidesPosition = t),
                                ("css-3d" !== this.supportedAnimation &&
                                    "css-2d" !== this.supportedAnimation) ||
                                    !1 !== this.isIE)
                            )
                                (n["margin-" + this.positionProperty] = t),
                                    void 0 !== e && !0 === e
                                        ? this.$slides.css(n)
                                        : (this.$slides.addClass("sp-animated"),
                                          this.$slides.animate(
                                              n,
                                              this.settings
                                                  .slideAnimationDuration,
                                              function () {
                                                  s.$slides.removeClass(
                                                      "sp-animated"
                                                  ),
                                                      "function" == typeof i &&
                                                          i();
                                              }
                                          ));
                            else {
                                var o,
                                    r =
                                        "horizontal" ===
                                        this.settings.orientation
                                            ? t
                                            : 0,
                                    a =
                                        "horizontal" ===
                                        this.settings.orientation
                                            ? 0
                                            : t;
                                "css-3d" === this.supportedAnimation
                                    ? (n[this.vendorPrefix + "transform"] =
                                          "translate3d(" +
                                          r +
                                          "px, " +
                                          a +
                                          "px, 0)")
                                    : (n[this.vendorPrefix + "transform"] =
                                          "translate(" +
                                          r +
                                          "px, " +
                                          a +
                                          "px)"),
                                    void 0 !== e && !0 === e
                                        ? (o = "")
                                        : (this.$slides.addClass("sp-animated"),
                                          (o =
                                              this.vendorPrefix +
                                              "transform " +
                                              this.settings
                                                  .slideAnimationDuration /
                                                  1e3 +
                                              "s"),
                                          this.$slides.on(
                                              this.transitionEvent,
                                              function (t) {
                                                  t.target ===
                                                      t.currentTarget &&
                                                      (s.$slides.off(
                                                          s.transitionEvent
                                                      ),
                                                      s.$slides.removeClass(
                                                          "sp-animated"
                                                      ),
                                                      "function" == typeof i &&
                                                          i());
                                              }
                                          )),
                                    (n[this.vendorPrefix + "transition"] = o),
                                    this.$slides.css(n);
                            }
                    },
                    _stopMovement: function () {
                        var t = {};
                        if (
                            ("css-3d" !== this.supportedAnimation &&
                                "css-2d" !== this.supportedAnimation) ||
                            !1 !== this.isIE
                        )
                            this.$slides.stop(),
                                (this.slidesPosition = parseInt(
                                    this.$slides.css(
                                        "margin-" + this.positionProperty
                                    ),
                                    10
                                ));
                        else {
                            var e = this.$slides.css(
                                    this.vendorPrefix + "transform"
                                ),
                                i =
                                    -1 !== e.indexOf("matrix3d")
                                        ? "matrix3d"
                                        : "matrix",
                                s = e.replace(i, "").match(/-?[0-9\.]+/g),
                                n =
                                    "matrix3d" === i
                                        ? parseInt(s[12], 10)
                                        : parseInt(s[4], 10),
                                o =
                                    "matrix3d" === i
                                        ? parseInt(s[13], 10)
                                        : parseInt(s[5], 10);
                            "css-3d" === this.supportedAnimation
                                ? (t[this.vendorPrefix + "transform"] =
                                      "translate3d(" +
                                      n +
                                      "px, " +
                                      o +
                                      "px, 0)")
                                : (t[this.vendorPrefix + "transform"] =
                                      "translate(" + n + "px, " + o + "px)"),
                                (t[this.vendorPrefix + "transition"] = ""),
                                this.$slides.css(t),
                                this.$slides.off(this.transitionEvent),
                                (this.slidesPosition =
                                    "horizontal" === this.settings.orientation
                                        ? n
                                        : o);
                        }
                        this.$slides.removeClass("sp-animated");
                    },
                    _resizeHeightTo: function (t) {
                        var i = this,
                            s = { height: t };
                        "css-3d" === this.supportedAnimation ||
                        "css-2d" === this.supportedAnimation
                            ? ((s[this.vendorPrefix + "transition"] =
                                  "height " +
                                  this.settings.heightAnimationDuration / 1e3 +
                                  "s"),
                              this.$slidesMask.off(this.transitionEvent),
                              this.$slidesMask.on(
                                  this.transitionEvent,
                                  function (t) {
                                      t.target === t.currentTarget &&
                                          (i.$slidesMask.off(i.transitionEvent),
                                          i.trigger({
                                              type: "resizeHeightComplete",
                                          }),
                                          e.isFunction(
                                              i.settings.resizeHeightComplete
                                          ) &&
                                              i.settings.resizeHeightComplete.call(
                                                  i,
                                                  {
                                                      type: "resizeHeightComplete",
                                                  }
                                              ));
                                  }
                              ),
                              this.$slidesMask.css(s))
                            : this.$slidesMask
                                  .stop()
                                  .animate(
                                      s,
                                      this.settings.heightAnimationDuration,
                                      function (t) {
                                          i.trigger({
                                              type: "resizeHeightComplete",
                                          }),
                                              e.isFunction(
                                                  i.settings
                                                      .resizeHeightComplete
                                              ) &&
                                                  i.settings.resizeHeightComplete.call(
                                                      i,
                                                      {
                                                          type: "resizeHeightComplete",
                                                      }
                                                  );
                                      }
                                  );
                    },
                    destroy: function () {
                        this.$slider.removeData("sliderPro"),
                            this.$slider.removeAttr("style"),
                            this.$slides.removeAttr("style"),
                            this.off("update." + i),
                            e(t).off("resize." + this.uniqueId + "." + i);
                        var s = e.SliderPro.modules;
                        if (void 0 !== s)
                            for (var n = 0; n < s.length; n++)
                                void 0 !== this["destroy" + s[n]] &&
                                    this["destroy" + s[n]]();
                        e.each(this.slides, function (t, e) {
                            e.destroy();
                        }),
                            (this.slides.length = 0),
                            this.$slides.prependTo(this.$slider),
                            this.$slidesContainer.remove();
                    },
                    _setProperties: function (t, e) {
                        for (var i in t)
                            (this.settings[i] = t[i]),
                                !1 !== e && (this.originalSettings[i] = t[i]);
                        this.update();
                    },
                    on: function (t, e) {
                        return this.$slider.on(t, e);
                    },
                    off: function (t) {
                        return this.$slider.off(t);
                    },
                    trigger: function (t) {
                        return this.$slider.triggerHandler(t);
                    },
                    getSlideAt: function (t) {
                        return this.slides[t];
                    },
                    getSelectedSlide: function () {
                        return this.selectedSlideIndex;
                    },
                    getTotalSlides: function () {
                        return this.slides.length;
                    },
                    defaults: {
                        width: 500,
                        height: 300,
                        responsive: !0,
                        aspectRatio: -1,
                        imageScaleMode: "cover",
                        centerImage: !0,
                        allowScaleUp: !0,
                        autoHeight: !1,
                        autoSlideSize: !1,
                        startSlide: 0,
                        shuffle: !1,
                        orientation: "horizontal",
                        forceSize: "none",
                        loop: !0,
                        slideDistance: 10,
                        slideAnimationDuration: 700,
                        heightAnimationDuration: 700,
                        visibleSize: "auto",
                        centerSelectedSlide: !0,
                        rightToLeft: !1,
                        breakpoints: null,
                        init: function () {},
                        update: function () {},
                        sliderResize: function () {},
                        gotoSlide: function () {},
                        gotoSlideComplete: function () {},
                        resizeHeightComplete: function () {},
                        breakpointReach: function () {},
                    },
                };
                var n = function (t, e, i) {
                    (this.$slide = t),
                        (this.$mainImage = null),
                        (this.$imageContainer = null),
                        (this.hasMainImage = !1),
                        (this.isMainImageLoaded = !1),
                        (this.isMainImageLoading = !1),
                        (this.hasImages = !1),
                        (this.areImagesLoaded = !1),
                        (this.areImagesLoading = !1),
                        (this.width = 0),
                        (this.height = 0),
                        (this.settings = i),
                        this.setIndex(e),
                        this._init();
                };
                (n.prototype = {
                    _init: function () {
                        this.$slide.attr("data-init", !0),
                            (this.$mainImage =
                                0 !== this.$slide.find(".sp-image").length
                                    ? this.$slide.find(".sp-image")
                                    : null),
                            null !== this.$mainImage &&
                                ((this.hasMainImage = !0),
                                (this.$imageContainer = e(
                                    '<div class="sp-image-container"></div>'
                                ).prependTo(this.$slide)),
                                0 !== this.$mainImage.parent("a").length
                                    ? this.$mainImage
                                          .parent("a")
                                          .appendTo(this.$imageContainer)
                                    : this.$mainImage.appendTo(
                                          this.$imageContainer
                                      )),
                            (this.hasImages =
                                0 !== this.$slide.find("img").length);
                    },
                    setSize: function (t, e) {
                        (this.width = t),
                            (this.height = e),
                            this.$slide.css({
                                width: this.width,
                                height: this.height,
                            }),
                            !0 === this.hasMainImage &&
                                (this.$imageContainer.css({
                                    width: this.settings.width,
                                    height: this.settings.height,
                                }),
                                void 0 === this.$mainImage.attr("data-src") &&
                                    this.resizeMainImage());
                    },
                    getSize: function () {
                        var t,
                            e = this;
                        if (
                            !0 === this.hasImages &&
                            !1 === this.areImagesLoaded &&
                            !1 === this.areImagesLoading &&
                            ((this.areImagesLoading = !0),
                            "complete" !== o.checkImagesStatus(this.$slide))
                        )
                            return (
                                o.checkImagesComplete(this.$slide, function () {
                                    (e.areImagesLoaded = !0),
                                        (e.areImagesLoading = !1),
                                        e.trigger({
                                            type: "imagesLoaded." + i,
                                            index: e.index,
                                        });
                                }),
                                {
                                    width: this.settings.width,
                                    height: this.settings.height,
                                }
                            );
                        return {
                            width: (t = this.calculateSize()).width,
                            height: t.height,
                        };
                    },
                    calculateSize: function () {
                        var t = this.$slide.width(),
                            i = this.$slide.height();
                        return (
                            this.$slide.children().each(function (s, n) {
                                var o = e(n);
                                if (!0 !== o.is(":hidden")) {
                                    var r = n.getBoundingClientRect(),
                                        a =
                                            o.position().top +
                                            (r.bottom - r.top),
                                        l =
                                            o.position().left +
                                            (r.right - r.left);
                                    a > i && (i = a), l > t && (t = l);
                                }
                            }),
                            { width: t, height: i }
                        );
                    },
                    resizeMainImage: function (t) {
                        var e = this;
                        if (
                            (!0 === t &&
                                ((this.isMainImageLoaded = !1),
                                (this.isMainImageLoading = !1)),
                            !1 === this.isMainImageLoaded &&
                                !1 === this.isMainImageLoading)
                        )
                            return (
                                (this.isMainImageLoading = !0),
                                void o.checkImagesComplete(
                                    this.$mainImage,
                                    function () {
                                        (e.isMainImageLoaded = !0),
                                            (e.isMainImageLoading = !1),
                                            e.resizeMainImage(),
                                            e.trigger({
                                                type: "imagesLoaded." + i,
                                                index: e.index,
                                            });
                                    }
                                )
                            );
                        this.$imageContainer.css({
                            width: this.width,
                            height: this.height,
                        }),
                            !1 === this.settings.allowScaleUp &&
                                (this.$mainImage.css({
                                    width: "",
                                    height: "",
                                    maxWidth: "",
                                    maxHeight: "",
                                }),
                                this.$mainImage.css({
                                    maxWidth: this.$mainImage.width(),
                                    maxHeight: this.$mainImage.height(),
                                })),
                            !0 === this.settings.autoSlideSize
                                ? "horizontal" === this.settings.orientation
                                    ? (this.$mainImage.css({
                                          width: "auto",
                                          height: "100%",
                                      }),
                                      this.$slide.css(
                                          "width",
                                          this.$mainImage.width()
                                      ))
                                    : "vertical" ===
                                          this.settings.orientation &&
                                      (this.$mainImage.css({
                                          width: "100%",
                                          height: "auto",
                                      }),
                                      this.$slide.css(
                                          "height",
                                          this.$mainImage.height()
                                      ))
                                : !0 === this.settings.autoHeight
                                ? this.$mainImage.css({
                                      width: "100%",
                                      height: "auto",
                                  })
                                : ("cover" === this.settings.imageScaleMode
                                      ? this.$mainImage.width() /
                                            this.$mainImage.height() <=
                                        this.$slide.width() /
                                            this.$slide.height()
                                          ? this.$mainImage.css({
                                                width: "100%",
                                                height: "auto",
                                            })
                                          : this.$mainImage.css({
                                                width: "auto",
                                                height: "100%",
                                            })
                                      : "contain" ===
                                        this.settings.imageScaleMode
                                      ? this.$mainImage.width() /
                                            this.$mainImage.height() >=
                                        this.$slide.width() /
                                            this.$slide.height()
                                          ? this.$mainImage.css({
                                                width: "100%",
                                                height: "auto",
                                            })
                                          : this.$mainImage.css({
                                                width: "auto",
                                                height: "100%",
                                            })
                                      : "exact" ===
                                            this.settings.imageScaleMode &&
                                        this.$mainImage.css({
                                            width: "100%",
                                            height: "100%",
                                        }),
                                  !0 === this.settings.centerImage &&
                                      this.$mainImage.css({
                                          marginLeft:
                                              0.5 *
                                              (this.$imageContainer.width() -
                                                  this.$mainImage.width()),
                                          marginTop:
                                              0.5 *
                                              (this.$imageContainer.height() -
                                                  this.$mainImage.height()),
                                      }));
                    },
                    destroy: function () {
                        this.$slide.removeAttr("style"),
                            this.$slide.removeAttr("data-init"),
                            this.$slide.removeAttr("data-index"),
                            this.$slide.removeAttr("data-loaded"),
                            !0 === this.hasMainImage &&
                                (this.$slide
                                    .find(".sp-image")
                                    .removeAttr("style")
                                    .appendTo(this.$slide),
                                this.$slide
                                    .find(".sp-image-container")
                                    .remove());
                    },
                    getIndex: function () {
                        return this.index;
                    },
                    setIndex: function (t) {
                        (this.index = t),
                            this.$slide.attr("data-index", this.index);
                    },
                    on: function (t, e) {
                        return this.$slide.on(t, e);
                    },
                    off: function (t) {
                        return this.$slide.off(t);
                    },
                    trigger: function (t) {
                        return this.$slide.triggerHandler(t);
                    },
                }),
                    (t.SliderPro = s),
                    (t.SliderProSlide = n),
                    (e.fn.sliderPro = function (t) {
                        var i = Array.prototype.slice.call(arguments, 1);
                        return this.each(function () {
                            if (void 0 === e(this).data("sliderPro")) {
                                var n = new s(this, t);
                                e(this).data("sliderPro", n);
                            } else if (void 0 !== t) {
                                var o = e(this).data("sliderPro");
                                if ("function" == typeof o[t]) o[t].apply(o, i);
                                else if (void 0 !== o.settings[t]) {
                                    var r = {};
                                    (r[t] = i[0]), o._setProperties(r);
                                } else
                                    "object" == typeof t
                                        ? o._setProperties(t)
                                        : e.error(
                                              t +
                                                  " does not exist in sliderPro."
                                          );
                            }
                        });
                    });
                var o = {
                    supportedAnimation: null,
                    vendorPrefix: null,
                    transitionEvent: null,
                    isIE: null,
                    getSupportedAnimation: function () {
                        if (null !== this.supportedAnimation)
                            return this.supportedAnimation;
                        var t = (document.body || document.documentElement)
                            .style;
                        if (
                            !0 ===
                            (void 0 !== t.transition ||
                                void 0 !== t.WebkitTransition ||
                                void 0 !== t.MozTransition ||
                                void 0 !== t.OTransition)
                        ) {
                            var e = document.createElement("div");
                            if (
                                ((void 0 === e.style.WebkitPerspective &&
                                    void 0 === e.style.perspective) ||
                                    (this.supportedAnimation = "css-3d"),
                                "css-3d" === this.supportedAnimation &&
                                    void 0 !== e.styleWebkitPerspective)
                            ) {
                                var i = document.createElement("style");
                                (i.textContent =
                                    "@media (transform-3d),(-webkit-transform-3d){#test-3d{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0;}}"),
                                    document
                                        .getElementsByTagName("head")[0]
                                        .appendChild(i),
                                    (e.id = "test-3d"),
                                    document.body.appendChild(e),
                                    (9 === e.offsetLeft &&
                                        5 === e.offsetHeight) ||
                                        (this.supportedAnimation = null),
                                    i.parentNode.removeChild(i),
                                    e.parentNode.removeChild(e);
                            }
                            null !== this.supportedAnimation ||
                                (void 0 === e.style["-webkit-transform"] &&
                                    void 0 === e.style.transform) ||
                                (this.supportedAnimation = "css-2d");
                        } else this.supportedAnimation = "javascript";
                        return this.supportedAnimation;
                    },
                    getVendorPrefix: function () {
                        if (null !== this.vendorPrefix)
                            return this.vendorPrefix;
                        var t = document.createElement("div"),
                            e = ["Webkit", "Moz", "ms", "O"];
                        if ("transform" in t.style)
                            return (this.vendorPrefix = ""), this.vendorPrefix;
                        for (var i = 0; i < e.length; i++)
                            if (e[i] + "Transform" in t.style) {
                                this.vendorPrefix =
                                    "-" + e[i].toLowerCase() + "-";
                                break;
                            }
                        return this.vendorPrefix;
                    },
                    getTransitionEvent: function () {
                        if (null !== this.transitionEvent)
                            return this.transitionEvent;
                        var t = document.createElement("div"),
                            e = {
                                transition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd",
                            };
                        for (var i in e)
                            if (i in t.style) {
                                this.transitionEvent = e[i];
                                break;
                            }
                        return this.transitionEvent;
                    },
                    checkImagesComplete: function (t, e) {
                        var i = this,
                            s = this.checkImagesStatus(t);
                        if ("loading" === s)
                            var n = setInterval(function () {
                                "complete" === (s = i.checkImagesStatus(t)) &&
                                    (clearInterval(n),
                                    "function" == typeof e && e());
                            }, 100);
                        else "function" == typeof e && e();
                        return s;
                    },
                    checkImagesStatus: function (t) {
                        var i = "complete";
                        return (
                            t.is("img") && !1 === t[0].complete
                                ? (i = "loading")
                                : t.find("img").each(function (t) {
                                      !1 === e(this)[0].complete &&
                                          (i = "loading");
                                  }),
                            i
                        );
                    },
                    checkIE: function () {
                        if (null !== this.isIE) return this.isIE;
                        var e = t.navigator.userAgent;
                        e.indexOf("MSIE");
                        return (
                            -1 !== e.indexOf("MSIE") ||
                            e.match(/Trident.*rv\:11\./)
                                ? (this.isIE = !0)
                                : (this.isIE = !1),
                            this.isIE
                        );
                    },
                };
                t.SliderProUtils = o;
            })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Thumbnails." + e.SliderPro.namespace,
                        s = {
                            $thumbnails: null,
                            $thumbnailsContainer: null,
                            thumbnails: null,
                            selectedThumbnailIndex: 0,
                            thumbnailsSize: 0,
                            thumbnailsContainerSize: 0,
                            thumbnailsPosition: 0,
                            thumbnailsOrientation: null,
                            thumbnailsPositionProperty: null,
                            isThumbnailScroller: !1,
                            initThumbnails: function () {
                                var t = this;
                                (this.thumbnails = []),
                                    this.on(
                                        "update." + i,
                                        e.proxy(this._thumbnailsOnUpdate, this)
                                    ),
                                    this.on(
                                        "sliderResize." + i,
                                        e.proxy(this._thumbnailsOnResize, this)
                                    ),
                                    this.on("gotoSlide." + i, function (e) {
                                        t._gotoThumbnail(e.index);
                                    });
                            },
                            _thumbnailsOnUpdate: function () {
                                var t = this;
                                if (
                                    0 !==
                                        this.$slider.find(".sp-thumbnail")
                                            .length ||
                                    0 !== this.thumbnails.length
                                ) {
                                    if (
                                        ((this.isThumbnailScroller = !0),
                                        null === this.$thumbnailsContainer &&
                                            (this.$thumbnailsContainer = e(
                                                '<div class="sp-thumbnails-container"></div>'
                                            ).insertAfter(
                                                this.$slidesContainer
                                            )),
                                        null === this.$thumbnails)
                                    )
                                        if (
                                            0 !==
                                            this.$slider.find(".sp-thumbnails")
                                                .length
                                        ) {
                                            if (
                                                ((this.$thumbnails =
                                                    this.$slider
                                                        .find(".sp-thumbnails")
                                                        .appendTo(
                                                            this
                                                                .$thumbnailsContainer
                                                        )),
                                                !0 === this.settings.shuffle)
                                            ) {
                                                var i =
                                                        this.$thumbnails.find(
                                                            ".sp-thumbnail"
                                                        ),
                                                    s = [];
                                                e.each(
                                                    this.shuffledIndexes,
                                                    function (t, n) {
                                                        var o = e(i[n]);
                                                        0 !==
                                                            o.parent("a")
                                                                .length &&
                                                            (o = o.parent("a")),
                                                            s.push(o);
                                                    }
                                                ),
                                                    this.$thumbnails
                                                        .empty()
                                                        .append(s);
                                            }
                                        } else
                                            this.$thumbnails = e(
                                                '<div class="sp-thumbnails"></div>'
                                            ).appendTo(
                                                this.$thumbnailsContainer
                                            );
                                    this.$slides
                                        .find(".sp-thumbnail")
                                        .each(function (i) {
                                            var s = e(this),
                                                n = s
                                                    .parents(".sp-slide")
                                                    .index(),
                                                o =
                                                    t.$thumbnails.find(
                                                        ".sp-thumbnail"
                                                    ).length - 1;
                                            0 !== s.parent("a").length &&
                                                (s = s.parent("a")),
                                                n > o
                                                    ? s.appendTo(t.$thumbnails)
                                                    : s.insertBefore(
                                                          t.$thumbnails
                                                              .find(
                                                                  ".sp-thumbnail"
                                                              )
                                                              .eq(n)
                                                      );
                                        });
                                    for (
                                        var n = this.thumbnails.length - 1;
                                        n >= 0;
                                        n--
                                    ) {
                                        if (
                                            0 ===
                                            this.$thumbnails.find(
                                                '.sp-thumbnail[data-index="' +
                                                    n +
                                                    '"]'
                                            ).length
                                        )
                                            this.thumbnails[n].destroy(),
                                                this.thumbnails.splice(n, 1);
                                    }
                                    this.$thumbnails
                                        .find(".sp-thumbnail")
                                        .each(function (i) {
                                            var s = e(this);
                                            void 0 === s.attr("data-init")
                                                ? t._createThumbnail(s, i)
                                                : t.thumbnails[i].setIndex(i);
                                        }),
                                        this.$thumbnailsContainer.removeClass(
                                            "sp-top-thumbnails sp-bottom-thumbnails sp-left-thumbnails sp-right-thumbnails"
                                        ),
                                        "top" ===
                                        this.settings.thumbnailsPosition
                                            ? (this.$thumbnailsContainer.addClass(
                                                  "sp-top-thumbnails"
                                              ),
                                              (this.thumbnailsOrientation =
                                                  "horizontal"))
                                            : "bottom" ===
                                              this.settings.thumbnailsPosition
                                            ? (this.$thumbnailsContainer.addClass(
                                                  "sp-bottom-thumbnails"
                                              ),
                                              (this.thumbnailsOrientation =
                                                  "horizontal"))
                                            : "left" ===
                                              this.settings.thumbnailsPosition
                                            ? (this.$thumbnailsContainer.addClass(
                                                  "sp-left-thumbnails"
                                              ),
                                              (this.thumbnailsOrientation =
                                                  "vertical"))
                                            : "right" ===
                                                  this.settings
                                                      .thumbnailsPosition &&
                                              (this.$thumbnailsContainer.addClass(
                                                  "sp-right-thumbnails"
                                              ),
                                              (this.thumbnailsOrientation =
                                                  "vertical")),
                                        !0 === this.settings.thumbnailPointer
                                            ? this.$thumbnailsContainer.addClass(
                                                  "sp-has-pointer"
                                              )
                                            : this.$thumbnailsContainer.removeClass(
                                                  "sp-has-pointer"
                                              ),
                                        (this.selectedThumbnailIndex =
                                            this.selectedSlideIndex),
                                        this.$thumbnails
                                            .find(".sp-thumbnail-container")
                                            .eq(this.selectedThumbnailIndex)
                                            .addClass("sp-selected-thumbnail"),
                                        (this.thumbnailsSize = 0),
                                        e.each(
                                            this.thumbnails,
                                            function (e, i) {
                                                i.setSize(
                                                    t.settings.thumbnailWidth,
                                                    t.settings.thumbnailHeight
                                                ),
                                                    (t.thumbnailsSize +=
                                                        "horizontal" ===
                                                        t.thumbnailsOrientation
                                                            ? i.getSize().width
                                                            : i.getSize()
                                                                  .height);
                                            }
                                        ),
                                        "horizontal" ===
                                        this.thumbnailsOrientation
                                            ? (this.$thumbnails.css({
                                                  width: this.thumbnailsSize,
                                                  height: this.settings
                                                      .thumbnailHeight,
                                              }),
                                              this.$thumbnailsContainer.css(
                                                  "height",
                                                  ""
                                              ),
                                              (this.thumbnailsPositionProperty =
                                                  "left"))
                                            : (this.$thumbnails.css({
                                                  width: this.settings
                                                      .thumbnailWidth,
                                                  height: this.thumbnailsSize,
                                              }),
                                              this.$thumbnailsContainer.css(
                                                  "width",
                                                  ""
                                              ),
                                              (this.thumbnailsPositionProperty =
                                                  "top")),
                                        this.trigger({
                                            type: "thumbnailsUpdate",
                                        }),
                                        e.isFunction(
                                            this.settings.thumbnailsUpdate
                                        ) &&
                                            this.settings.thumbnailsUpdate.call(
                                                this,
                                                { type: "thumbnailsUpdate" }
                                            );
                                } else this.isThumbnailScroller = !1;
                            },
                            _createThumbnail: function (t, e) {
                                var s = this,
                                    o = new n(t, this.$thumbnails, e);
                                o.on("thumbnailClick." + i, function (t) {
                                    s.gotoSlide(t.index);
                                }),
                                    this.thumbnails.splice(e, 0, o);
                            },
                            _thumbnailsOnResize: function () {
                                if (!1 !== this.isThumbnailScroller) {
                                    var i;
                                    "horizontal" === this.thumbnailsOrientation
                                        ? ((this.thumbnailsContainerSize =
                                              Math.min(
                                                  this.$slidesMask.width(),
                                                  this.thumbnailsSize
                                              )),
                                          this.$thumbnailsContainer.css(
                                              "width",
                                              this.thumbnailsContainerSize
                                          ),
                                          "fullWindow" ===
                                              this.settings.forceSize &&
                                              (this.$slidesMask.css(
                                                  "height",
                                                  this.$slidesMask.height() -
                                                      this.$thumbnailsContainer.outerHeight(
                                                          !0
                                                      )
                                              ),
                                              (this.slideHeight =
                                                  this.$slidesMask.height()),
                                              this._resizeSlides(),
                                              this._resetSlidesPosition()))
                                        : "vertical" ===
                                              this.thumbnailsOrientation &&
                                          (this.$slidesMask.width() +
                                              this.$thumbnailsContainer.outerWidth(
                                                  !0
                                              ) >
                                              this.$slider.parent().width() &&
                                              ("fullWidth" ===
                                                  this.settings.forceSize ||
                                              "fullWindow" ===
                                                  this.settings.forceSize
                                                  ? this.$slider.css(
                                                        "max-width",
                                                        e(t).width() -
                                                            this.$thumbnailsContainer.outerWidth(
                                                                !0
                                                            )
                                                    )
                                                  : this.$slider.css(
                                                        "max-width",
                                                        this.$slider
                                                            .parent()
                                                            .width() -
                                                            this.$thumbnailsContainer.outerWidth(
                                                                !0
                                                            )
                                                    ),
                                              this.$slidesMask.css(
                                                  "width",
                                                  this.$slider.width()
                                              ),
                                              "vertical" ===
                                                  this.settings.orientation &&
                                                  ((this.slideWidth =
                                                      this.$slider.width()),
                                                  this._resizeSlides()),
                                              this._resetSlidesPosition()),
                                          (this.thumbnailsContainerSize =
                                              Math.min(
                                                  this.$slidesMask.height(),
                                                  this.thumbnailsSize
                                              )),
                                          this.$thumbnailsContainer.css(
                                              "height",
                                              this.thumbnailsContainerSize
                                          )),
                                        (i =
                                            this.thumbnailsSize <=
                                                this.thumbnailsContainerSize ||
                                            0 ===
                                                this.$thumbnails.find(
                                                    ".sp-selected-thumbnail"
                                                ).length
                                                ? 0
                                                : Math.max(
                                                      -this.thumbnails[
                                                          this
                                                              .selectedThumbnailIndex
                                                      ].getPosition()[
                                                          this
                                                              .thumbnailsPositionProperty
                                                      ],
                                                      this
                                                          .thumbnailsContainerSize -
                                                          this.thumbnailsSize
                                                  )),
                                        "top" ===
                                        this.settings.thumbnailsPosition
                                            ? this.$slider.css({
                                                  paddingTop:
                                                      this.$thumbnailsContainer.outerHeight(
                                                          !0
                                                      ),
                                                  paddingLeft: "",
                                                  paddingRight: "",
                                              })
                                            : "bottom" ===
                                              this.settings.thumbnailsPosition
                                            ? this.$slider.css({
                                                  paddingTop: "",
                                                  paddingLeft: "",
                                                  paddingRight: "",
                                              })
                                            : "left" ===
                                              this.settings.thumbnailsPosition
                                            ? this.$slider.css({
                                                  paddingTop: "",
                                                  paddingLeft:
                                                      this.$thumbnailsContainer.outerWidth(
                                                          !0
                                                      ),
                                                  paddingRight: "",
                                              })
                                            : "right" ===
                                                  this.settings
                                                      .thumbnailsPosition &&
                                              this.$slider.css({
                                                  paddingTop: "",
                                                  paddingLeft: "",
                                                  paddingRight:
                                                      this.$thumbnailsContainer.outerWidth(
                                                          !0
                                                      ),
                                              }),
                                        this._moveThumbnailsTo(i, !0);
                                }
                            },
                            _gotoThumbnail: function (t) {
                                if (
                                    !1 !== this.isThumbnailScroller &&
                                    void 0 !== this.thumbnails[t]
                                ) {
                                    var i = this.selectedThumbnailIndex,
                                        s = this.thumbnailsPosition;
                                    if (
                                        ((this.selectedThumbnailIndex = t),
                                        this.$thumbnails
                                            .find(".sp-selected-thumbnail")
                                            .removeClass(
                                                "sp-selected-thumbnail"
                                            ),
                                        this.$thumbnails
                                            .find(".sp-thumbnail-container")
                                            .eq(this.selectedThumbnailIndex)
                                            .addClass("sp-selected-thumbnail"),
                                        !0 === this.settings.rightToLeft &&
                                            "horizontal" ===
                                                this.thumbnailsOrientation)
                                    ) {
                                        if (this.selectedThumbnailIndex >= i) {
                                            var n =
                                                    this
                                                        .selectedThumbnailIndex ===
                                                    this.thumbnails.length - 1
                                                        ? this
                                                              .selectedThumbnailIndex
                                                        : this
                                                              .selectedThumbnailIndex +
                                                          1,
                                                o = this.thumbnails[n];
                                            o.getPosition().left <
                                                -this.thumbnailsPosition &&
                                                (s = -o.getPosition().left);
                                        } else if (
                                            this.selectedThumbnailIndex < i
                                        ) {
                                            var r =
                                                    0 ===
                                                    this.selectedThumbnailIndex
                                                        ? this
                                                              .selectedThumbnailIndex
                                                        : this
                                                              .selectedThumbnailIndex -
                                                          1,
                                                a = this.thumbnails[r],
                                                l =
                                                    -this.thumbnailsPosition +
                                                    this
                                                        .thumbnailsContainerSize;
                                            a.getPosition().right > l &&
                                                (s =
                                                    this.thumbnailsPosition -
                                                    (a.getPosition().right -
                                                        l));
                                        }
                                    } else if (
                                        this.selectedThumbnailIndex >= i
                                    ) {
                                        var h =
                                                this.selectedThumbnailIndex ===
                                                this.thumbnails.length - 1
                                                    ? this
                                                          .selectedThumbnailIndex
                                                    : this
                                                          .selectedThumbnailIndex +
                                                      1,
                                            d = this.thumbnails[h],
                                            u =
                                                "horizontal" ===
                                                this.thumbnailsOrientation
                                                    ? d.getPosition().right
                                                    : d.getPosition().bottom,
                                            c =
                                                -this.thumbnailsPosition +
                                                this.thumbnailsContainerSize;
                                        u > c &&
                                            (s =
                                                this.thumbnailsPosition -
                                                (u - c));
                                    } else if (
                                        this.selectedThumbnailIndex < i
                                    ) {
                                        var p =
                                                0 ===
                                                this.selectedThumbnailIndex
                                                    ? this
                                                          .selectedThumbnailIndex
                                                    : this
                                                          .selectedThumbnailIndex -
                                                      1,
                                            f = this.thumbnails[p],
                                            g =
                                                "horizontal" ===
                                                this.thumbnailsOrientation
                                                    ? f.getPosition().left
                                                    : f.getPosition().top;
                                        g < -this.thumbnailsPosition &&
                                            (s = -g);
                                    }
                                    this._moveThumbnailsTo(s),
                                        this.trigger({ type: "gotoThumbnail" }),
                                        e.isFunction(
                                            this.settings.gotoThumbnail
                                        ) &&
                                            this.settings.gotoThumbnail.call(
                                                this,
                                                { type: "gotoThumbnail" }
                                            );
                                }
                            },
                            _moveThumbnailsTo: function (t, i, s) {
                                var n = this,
                                    o = {};
                                if (t !== this.thumbnailsPosition)
                                    if (
                                        ((this.thumbnailsPosition = t),
                                        "css-3d" === this.supportedAnimation ||
                                            "css-2d" ===
                                                this.supportedAnimation)
                                    ) {
                                        var r,
                                            a =
                                                "horizontal" ===
                                                this.thumbnailsOrientation
                                                    ? t
                                                    : 0,
                                            l =
                                                "horizontal" ===
                                                this.thumbnailsOrientation
                                                    ? 0
                                                    : t;
                                        "css-3d" === this.supportedAnimation
                                            ? (o[
                                                  this.vendorPrefix +
                                                      "transform"
                                              ] =
                                                  "translate3d(" +
                                                  a +
                                                  "px, " +
                                                  l +
                                                  "px, 0)")
                                            : (o[
                                                  this.vendorPrefix +
                                                      "transform"
                                              ] =
                                                  "translate(" +
                                                  a +
                                                  "px, " +
                                                  l +
                                                  "px)"),
                                            void 0 !== i && !0 === i
                                                ? (r = "")
                                                : (this.$thumbnails.addClass(
                                                      "sp-animated"
                                                  ),
                                                  (r =
                                                      this.vendorPrefix +
                                                      "transform 0.7s"),
                                                  this.$thumbnails.on(
                                                      this.transitionEvent,
                                                      function (t) {
                                                          t.target ===
                                                              t.currentTarget &&
                                                              (n.$thumbnails.off(
                                                                  n.transitionEvent
                                                              ),
                                                              n.$thumbnails.removeClass(
                                                                  "sp-animated"
                                                              ),
                                                              "function" ==
                                                                  typeof s &&
                                                                  s(),
                                                              n.trigger({
                                                                  type: "thumbnailsMoveComplete",
                                                              }),
                                                              e.isFunction(
                                                                  n.settings
                                                                      .thumbnailsMoveComplete
                                                              ) &&
                                                                  n.settings.thumbnailsMoveComplete.call(
                                                                      n,
                                                                      {
                                                                          type: "thumbnailsMoveComplete",
                                                                      }
                                                                  ));
                                                      }
                                                  )),
                                            (o[
                                                this.vendorPrefix + "transition"
                                            ] = r),
                                            this.$thumbnails.css(o);
                                    } else
                                        (o[
                                            "margin-" +
                                                this.thumbnailsPositionProperty
                                        ] = t),
                                            void 0 !== i && !0 === i
                                                ? this.$thumbnails.css(o)
                                                : this.$thumbnails
                                                      .addClass("sp-animated")
                                                      .animate(
                                                          o,
                                                          700,
                                                          function () {
                                                              n.$thumbnails.removeClass(
                                                                  "sp-animated"
                                                              ),
                                                                  "function" ==
                                                                      typeof s &&
                                                                      s(),
                                                                  n.trigger({
                                                                      type: "thumbnailsMoveComplete",
                                                                  }),
                                                                  e.isFunction(
                                                                      n.settings
                                                                          .thumbnailsMoveComplete
                                                                  ) &&
                                                                      n.settings.thumbnailsMoveComplete.call(
                                                                          n,
                                                                          {
                                                                              type: "thumbnailsMoveComplete",
                                                                          }
                                                                      );
                                                          }
                                                      );
                            },
                            _stopThumbnailsMovement: function () {
                                var t = {};
                                if (
                                    "css-3d" === this.supportedAnimation ||
                                    "css-2d" === this.supportedAnimation
                                ) {
                                    var e = this.$thumbnails.css(
                                            this.vendorPrefix + "transform"
                                        ),
                                        i =
                                            -1 !== e.indexOf("matrix3d")
                                                ? "matrix3d"
                                                : "matrix",
                                        s = e
                                            .replace(i, "")
                                            .match(/-?[0-9\.]+/g),
                                        n =
                                            "matrix3d" === i
                                                ? parseInt(s[12], 10)
                                                : parseInt(s[4], 10),
                                        o =
                                            "matrix3d" === i
                                                ? parseInt(s[13], 10)
                                                : parseInt(s[5], 10);
                                    "css-3d" === this.supportedAnimation
                                        ? (t[this.vendorPrefix + "transform"] =
                                              "translate3d(" +
                                              n +
                                              "px, " +
                                              o +
                                              "px, 0)")
                                        : (t[this.vendorPrefix + "transform"] =
                                              "translate(" +
                                              n +
                                              "px, " +
                                              o +
                                              "px)"),
                                        (t[this.vendorPrefix + "transition"] =
                                            ""),
                                        this.$thumbnails.css(t),
                                        this.$thumbnails.off(
                                            this.transitionEvent
                                        ),
                                        (this.thumbnailsPosition =
                                            "horizontal" ===
                                            this.thumbnailsOrientation
                                                ? parseInt(s[4], 10)
                                                : parseInt(s[5], 10));
                                } else
                                    this.$thumbnails.stop(),
                                        (this.thumbnailsPosition = parseInt(
                                            this.$thumbnails.css(
                                                "margin-" +
                                                    this
                                                        .thumbnailsPositionProperty
                                            ),
                                            10
                                        ));
                                this.$thumbnails.removeClass("sp-animated");
                            },
                            destroyThumbnails: function () {
                                var s = this;
                                this.off("update." + i),
                                    !1 !== this.isThumbnailScroller &&
                                        (this.off("sliderResize." + i),
                                        this.off("gotoSlide." + i),
                                        e(t).off(
                                            "resize." + this.uniqueId + "." + i
                                        ),
                                        this.$thumbnails
                                            .find(".sp-thumbnail")
                                            .each(function () {
                                                var t = e(this),
                                                    n = parseInt(
                                                        t.attr("data-index"),
                                                        10
                                                    ),
                                                    o = s.thumbnails[n];
                                                o.off("thumbnailClick." + i),
                                                    o.destroy();
                                            }),
                                        (this.thumbnails.length = 0),
                                        this.$thumbnails.appendTo(this.$slider),
                                        this.$thumbnailsContainer.remove(),
                                        this.$slider.css({
                                            paddingTop: "",
                                            paddingLeft: "",
                                            paddingRight: "",
                                        }));
                            },
                            thumbnailsDefaults: {
                                thumbnailWidth: 100,
                                thumbnailHeight: 80,
                                thumbnailsPosition: "bottom",
                                thumbnailPointer: !1,
                                thumbnailsUpdate: function () {},
                                gotoThumbnail: function () {},
                                thumbnailsMoveComplete: function () {},
                            },
                        },
                        n = function (t, e, i) {
                            (this.$thumbnail = t),
                                (this.$thumbnails = e),
                                (this.$thumbnailContainer = null),
                                (this.width = 0),
                                (this.height = 0),
                                (this.isImageLoaded = !1),
                                this.setIndex(i),
                                this._init();
                        };
                    (n.prototype = {
                        _init: function () {
                            var t = this;
                            this.$thumbnail.attr("data-init", !0),
                                (this.$thumbnailContainer = e(
                                    '<div class="sp-thumbnail-container"></div>'
                                ).appendTo(this.$thumbnails)),
                                0 !== this.$thumbnail.parent("a").length
                                    ? this.$thumbnail
                                          .parent("a")
                                          .appendTo(this.$thumbnailContainer)
                                    : this.$thumbnail.appendTo(
                                          this.$thumbnailContainer
                                      ),
                                this.$thumbnailContainer.on(
                                    "click." + i,
                                    function () {
                                        t.trigger({
                                            type: "thumbnailClick." + i,
                                            index: t.index,
                                        });
                                    }
                                );
                        },
                        setSize: function (t, e) {
                            (this.width = t),
                                (this.height = e),
                                this.$thumbnailContainer.css({
                                    width: this.width,
                                    height: this.height,
                                }),
                                this.$thumbnail.is("img") &&
                                    void 0 ===
                                        this.$thumbnail.attr("data-src") &&
                                    this.resizeImage();
                        },
                        getSize: function () {
                            return {
                                width: this.$thumbnailContainer.outerWidth(!0),
                                height: this.$thumbnailContainer.outerHeight(
                                    !0
                                ),
                            };
                        },
                        getPosition: function () {
                            return {
                                left:
                                    this.$thumbnailContainer.position().left +
                                    parseInt(
                                        this.$thumbnailContainer.css(
                                            "marginLeft"
                                        ),
                                        10
                                    ),
                                right:
                                    this.$thumbnailContainer.position().left +
                                    parseInt(
                                        this.$thumbnailContainer.css(
                                            "marginLeft"
                                        ),
                                        10
                                    ) +
                                    this.$thumbnailContainer.outerWidth(),
                                top:
                                    this.$thumbnailContainer.position().top +
                                    parseInt(
                                        this.$thumbnailContainer.css(
                                            "marginTop"
                                        ),
                                        10
                                    ),
                                bottom:
                                    this.$thumbnailContainer.position().top +
                                    parseInt(
                                        this.$thumbnailContainer.css(
                                            "marginTop"
                                        ),
                                        10
                                    ) +
                                    this.$thumbnailContainer.outerHeight(),
                            };
                        },
                        setIndex: function (t) {
                            (this.index = t),
                                this.$thumbnail.attr("data-index", this.index);
                        },
                        resizeImage: function () {
                            var t = this;
                            !1 !== this.isImageLoaded
                                ? ((this.$thumbnail =
                                      this.$thumbnailContainer.find(
                                          ".sp-thumbnail"
                                      )),
                                  this.$thumbnail.width() /
                                      this.$thumbnail.height() <=
                                  this.width / this.height
                                      ? this.$thumbnail.css({
                                            width: "100%",
                                            height: "auto",
                                        })
                                      : this.$thumbnail.css({
                                            width: "auto",
                                            height: "100%",
                                        }),
                                  this.$thumbnail.css({
                                      marginLeft:
                                          0.5 *
                                          (this.$thumbnailContainer.width() -
                                              this.$thumbnail.width()),
                                      marginTop:
                                          0.5 *
                                          (this.$thumbnailContainer.height() -
                                              this.$thumbnail.height()),
                                  }))
                                : SliderProUtils.checkImagesComplete(
                                      this.$thumbnailContainer,
                                      function () {
                                          (t.isImageLoaded = !0),
                                              t.resizeImage();
                                      }
                                  );
                        },
                        destroy: function () {
                            this.$thumbnailContainer.off("click." + i),
                                this.$thumbnail.removeAttr("data-init"),
                                this.$thumbnail.removeAttr("data-index"),
                                0 !== this.$thumbnail.parent("a").length
                                    ? this.$thumbnail
                                          .parent("a")
                                          .insertBefore(
                                              this.$thumbnailContainer
                                          )
                                    : this.$thumbnail.insertBefore(
                                          this.$thumbnailContainer
                                      ),
                                this.$thumbnailContainer.remove();
                        },
                        on: function (t, e) {
                            return this.$thumbnailContainer.on(t, e);
                        },
                        off: function (t) {
                            return this.$thumbnailContainer.off(t);
                        },
                        trigger: function (t) {
                            return this.$thumbnailContainer.triggerHandler(t);
                        },
                    }),
                        e.SliderPro.addModule("Thumbnails", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "ConditionalImages." + e.SliderPro.namespace,
                        s = {
                            previousImageSize: null,
                            currentImageSize: null,
                            isRetinaScreen: !1,
                            initConditionalImages: function () {
                                (this.currentImageSize =
                                    this.previousImageSize =
                                        "default"),
                                    (this.isRetinaScreen =
                                        void 0 !== this._isRetina &&
                                        !0 === this._isRetina()),
                                    this.on(
                                        "update." + i,
                                        e.proxy(
                                            this._conditionalImagesOnUpdate,
                                            this
                                        )
                                    ),
                                    this.on(
                                        "sliderResize." + i,
                                        e.proxy(
                                            this._conditionalImagesOnResize,
                                            this
                                        )
                                    );
                            },
                            _conditionalImagesOnUpdate: function () {
                                e.each(this.slides, function (t, i) {
                                    i.$slide
                                        .find("img:not([ data-default ])")
                                        .each(function () {
                                            var t = e(this);
                                            void 0 !== t.attr("data-src")
                                                ? t.attr(
                                                      "data-default",
                                                      t.attr("data-src")
                                                  )
                                                : t.attr(
                                                      "data-default",
                                                      t.attr("src")
                                                  );
                                        });
                                });
                            },
                            _conditionalImagesOnResize: function () {
                                if (
                                    (this.slideWidth <= this.settings.smallSize
                                        ? (this.currentImageSize = "small")
                                        : this.slideWidth <=
                                          this.settings.mediumSize
                                        ? (this.currentImageSize = "medium")
                                        : this.slideWidth <=
                                          this.settings.largeSize
                                        ? (this.currentImageSize = "large")
                                        : (this.currentImageSize = "default"),
                                    this.previousImageSize !==
                                        this.currentImageSize)
                                ) {
                                    var t = this;
                                    e.each(this.slides, function (i, s) {
                                        s.$slide.find("img").each(function () {
                                            var i = e(this),
                                                n = "";
                                            !0 === t.isRetinaScreen &&
                                            void 0 !==
                                                i.attr(
                                                    "data-retina" +
                                                        t.currentImageSize
                                                )
                                                ? ((n = i.attr(
                                                      "data-retina" +
                                                          t.currentImageSize
                                                  )),
                                                  void 0 !==
                                                      i.attr("data-retina") &&
                                                      i.attr("data-retina") !==
                                                          n &&
                                                      i.attr("data-retina", n))
                                                : (!1 === t.isRetinaScreen ||
                                                      (!0 ===
                                                          t.isRetinaScreen &&
                                                          void 0 ===
                                                              i.attr(
                                                                  "data-retina"
                                                              ))) &&
                                                  void 0 !==
                                                      i.attr(
                                                          "data-" +
                                                              t.currentImageSize
                                                      ) &&
                                                  ((n = i.attr(
                                                      "data-" +
                                                          t.currentImageSize
                                                  )),
                                                  void 0 !==
                                                      i.attr("data-src") &&
                                                      i.attr("data-src") !==
                                                          n &&
                                                      i.attr("data-src", n)),
                                                "" !== n &&
                                                    void 0 ===
                                                        i.attr("data-src") &&
                                                    i.attr("src") !== n &&
                                                    t._loadConditionalImage(
                                                        i,
                                                        n,
                                                        function (t) {
                                                            t.hasClass(
                                                                "sp-image"
                                                            ) &&
                                                                ((s.$mainImage =
                                                                    t),
                                                                s.resizeMainImage(
                                                                    !0
                                                                ));
                                                        }
                                                    );
                                        });
                                    }),
                                        (this.previousImageSize =
                                            this.currentImageSize);
                                }
                            },
                            _loadConditionalImage: function (t, i, s) {
                                var n = e(new Image());
                                n.attr("class", t.attr("class")),
                                    n.attr("style", t.attr("style")),
                                    e.each(t.data(), function (t, e) {
                                        n.attr("data-" + t, e);
                                    }),
                                    void 0 !== t.attr("width") &&
                                        n.attr("width", t.attr("width")),
                                    void 0 !== t.attr("height") &&
                                        n.attr("height", t.attr("height")),
                                    void 0 !== t.attr("alt") &&
                                        n.attr("alt", t.attr("alt")),
                                    void 0 !== t.attr("title") &&
                                        n.attr("title", t.attr("title")),
                                    n.attr("src", i),
                                    n.insertAfter(t),
                                    t.remove(),
                                    (t = null),
                                    "function" == typeof s && s(n);
                            },
                            destroyConditionalImages: function () {
                                this.off("update." + i),
                                    this.off("sliderResize." + i);
                            },
                            conditionalImagesDefaults: {
                                smallSize: 480,
                                mediumSize: 768,
                                largeSize: 1024,
                            },
                        };
                    e.SliderPro.addModule("ConditionalImages", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Retina." + e.SliderPro.namespace,
                        s = {
                            initRetina: function () {
                                !1 !== this._isRetina() &&
                                    (this.on(
                                        "sliderResize." + i,
                                        e.proxy(this._checkRetinaImages, this)
                                    ),
                                    0 !==
                                        this.$slider.find(".sp-thumbnail")
                                            .length &&
                                        this.on(
                                            "update.Thumbnails." + i,
                                            e.proxy(
                                                this
                                                    ._checkRetinaThumbnailImages,
                                                this
                                            )
                                        ));
                            },
                            _isRetina: function () {
                                return (
                                    t.devicePixelRatio >= 2 ||
                                    !(
                                        !t.matchMedia ||
                                        !t.matchMedia(
                                            "(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx)"
                                        ).matches
                                    )
                                );
                            },
                            _checkRetinaImages: function () {
                                var t = this;
                                e.each(this.slides, function (i, s) {
                                    var n = s.$slide;
                                    void 0 === n.attr("data-retina-loaded") &&
                                        (n.attr("data-retina-loaded", !0),
                                        n
                                            .find("img[data-retina]")
                                            .each(function () {
                                                var i = e(this);
                                                void 0 !== i.attr("data-src")
                                                    ? i.attr(
                                                          "data-src",
                                                          i.attr("data-retina")
                                                      )
                                                    : t._loadRetinaImage(
                                                          i,
                                                          function (t) {
                                                              t.hasClass(
                                                                  "sp-image"
                                                              ) &&
                                                                  ((s.$mainImage =
                                                                      t),
                                                                  s.resizeMainImage(
                                                                      !0
                                                                  ));
                                                          }
                                                      );
                                            }));
                                });
                            },
                            _checkRetinaThumbnailImages: function () {
                                var t = this;
                                e.each(this.thumbnails, function (i, s) {
                                    var n = s.$thumbnailContainer;
                                    void 0 === n.attr("data-retina-loaded") &&
                                        (n.attr("data-retina-loaded", !0),
                                        n
                                            .find("img[data-retina]")
                                            .each(function () {
                                                var i = e(this);
                                                void 0 !== i.attr("data-src")
                                                    ? i.attr(
                                                          "data-src",
                                                          i.attr("data-retina")
                                                      )
                                                    : t._loadRetinaImage(
                                                          i,
                                                          function (t) {
                                                              t.hasClass(
                                                                  "sp-thumbnail"
                                                              ) &&
                                                                  s.resizeImage();
                                                          }
                                                      );
                                            }));
                                });
                            },
                            _loadRetinaImage: function (t, i) {
                                var s = !1,
                                    n = "";
                                if (
                                    (void 0 !== t.attr("data-retina") &&
                                        ((s = !0), (n = t.attr("data-retina"))),
                                    void 0 !== t.attr("data-src") &&
                                        (!1 === s && (n = t.attr("data-src")),
                                        t.removeAttr("data-src")),
                                    "" !== n)
                                ) {
                                    var o = e(new Image());
                                    o.attr("class", t.attr("class")),
                                        o.attr("style", t.attr("style")),
                                        e.each(t.data(), function (t, e) {
                                            o.attr("data-" + t, e);
                                        }),
                                        void 0 !== t.attr("width") &&
                                            o.attr("width", t.attr("width")),
                                        void 0 !== t.attr("height") &&
                                            o.attr("height", t.attr("height")),
                                        void 0 !== t.attr("alt") &&
                                            o.attr("alt", t.attr("alt")),
                                        void 0 !== t.attr("title") &&
                                            o.attr("title", t.attr("title")),
                                        o.insertAfter(t),
                                        t.remove(),
                                        (t = null),
                                        o.attr("src", n),
                                        "function" == typeof i && i(o);
                                }
                            },
                            destroyRetina: function () {
                                this.off("update." + i),
                                    this.off("update.Thumbnails." + i);
                            },
                        };
                    e.SliderPro.addModule("Retina", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "LazyLoading." + e.SliderPro.namespace,
                        s = {
                            allowLazyLoadingCheck: !0,
                            initLazyLoading: function () {
                                this.on(
                                    "sliderResize." + i,
                                    e.proxy(this._lazyLoadingOnResize, this)
                                ),
                                    this.on(
                                        "gotoSlide." + i,
                                        e.proxy(
                                            this._checkAndLoadVisibleImages,
                                            this
                                        )
                                    ),
                                    this.on(
                                        "thumbnailsUpdate." +
                                            i +
                                            " thumbnailsMoveComplete." +
                                            i,
                                        e.proxy(
                                            this
                                                ._checkAndLoadVisibleThumbnailImages,
                                            this
                                        )
                                    );
                            },
                            _lazyLoadingOnResize: function () {
                                var t = this;
                                !1 !== this.allowLazyLoadingCheck &&
                                    ((this.allowLazyLoadingCheck = !1),
                                    this._checkAndLoadVisibleImages(),
                                    0 !==
                                        this.$slider.find(".sp-thumbnail")
                                            .length &&
                                        this._checkAndLoadVisibleThumbnailImages(),
                                    setTimeout(function () {
                                        t.allowLazyLoadingCheck = !0;
                                    }, 500));
                            },
                            _checkAndLoadVisibleImages: function () {
                                if (
                                    0 !==
                                    this.$slider.find(
                                        ".sp-slide:not([ data-loaded ])"
                                    ).length
                                ) {
                                    var t = this,
                                        i =
                                            !0 === this.settings.loop
                                                ? this.middleSlidePosition
                                                : this.selectedSlideIndex,
                                        s = Math.ceil(
                                            (parseInt(
                                                this.$slidesMask.css(
                                                    this.sizeProperty
                                                ),
                                                10
                                            ) -
                                                this.averageSlideSize) /
                                                2 /
                                                this.averageSlideSize
                                        ),
                                        n =
                                            !0 ===
                                            this.settings.centerSelectedSlide
                                                ? Math.max(i - s - 1, 0)
                                                : Math.max(i - 1, 0),
                                        o =
                                            !0 ===
                                            this.settings.centerSelectedSlide
                                                ? Math.min(
                                                      i + s + 1,
                                                      this.getTotalSlides() - 1
                                                  )
                                                : Math.min(
                                                      i + 2 * s + 1,
                                                      this.getTotalSlides() - 1
                                                  ),
                                        r = this.slidesOrder.slice(n, o + 1);
                                    e.each(r, function (i, s) {
                                        var n = t.slides[s],
                                            o = n.$slide;
                                        void 0 === o.attr("data-loaded") &&
                                            (o.attr("data-loaded", !0),
                                            o
                                                .find("img[ data-src ]")
                                                .each(function () {
                                                    var i = e(this);
                                                    t._loadImage(
                                                        i,
                                                        function (t) {
                                                            t.hasClass(
                                                                "sp-image"
                                                            ) &&
                                                                ((n.$mainImage =
                                                                    t),
                                                                n.resizeMainImage(
                                                                    !0
                                                                ));
                                                        }
                                                    );
                                                }));
                                    });
                                }
                            },
                            _checkAndLoadVisibleThumbnailImages: function () {
                                if (
                                    0 !==
                                    this.$slider.find(
                                        ".sp-thumbnail-container:not([ data-loaded ])"
                                    ).length
                                ) {
                                    var t = this,
                                        i =
                                            this.thumbnailsSize /
                                            this.thumbnails.length,
                                        s = Math.floor(
                                            Math.abs(
                                                this.thumbnailsPosition / i
                                            )
                                        ),
                                        n = Math.floor(
                                            (-this.thumbnailsPosition +
                                                this.thumbnailsContainerSize) /
                                                i
                                        ),
                                        o = this.thumbnails.slice(s, n + 1);
                                    e.each(o, function (i, s) {
                                        var n = s.$thumbnailContainer;
                                        void 0 === n.attr("data-loaded") &&
                                            (n.attr("data-loaded", !0),
                                            n
                                                .find("img[ data-src ]")
                                                .each(function () {
                                                    var i = e(this);
                                                    t._loadImage(
                                                        i,
                                                        function () {
                                                            s.resizeImage();
                                                        }
                                                    );
                                                }));
                                    });
                                }
                            },
                            _loadImage: function (t, i) {
                                var s = e(new Image());
                                s.attr("class", t.attr("class")),
                                    s.attr("style", t.attr("style")),
                                    e.each(t.data(), function (t, e) {
                                        s.attr("data-" + t, e);
                                    }),
                                    void 0 !== t.attr("width") &&
                                        s.attr("width", t.attr("width")),
                                    void 0 !== t.attr("height") &&
                                        s.attr("height", t.attr("height")),
                                    void 0 !== t.attr("alt") &&
                                        s.attr("alt", t.attr("alt")),
                                    void 0 !== t.attr("title") &&
                                        s.attr("title", t.attr("title")),
                                    s.attr("src", t.attr("data-src")),
                                    s.removeAttr("data-src"),
                                    s.insertAfter(t),
                                    t.remove(),
                                    (t = null),
                                    "function" == typeof i && i(s);
                            },
                            destroyLazyLoading: function () {
                                this.off("update." + i),
                                    this.off("gotoSlide." + i),
                                    this.off("sliderResize." + i),
                                    this.off("thumbnailsUpdate." + i),
                                    this.off("thumbnailsMoveComplete." + i);
                            },
                        };
                    e.SliderPro.addModule("LazyLoading", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Layers." + e.SliderPro.namespace,
                        s = {
                            layersGotoSlideReference: null,
                            waitForLayersTimer: null,
                            initLayers: function () {
                                this.on(
                                    "update." + i,
                                    e.proxy(this._layersOnUpdate, this)
                                ),
                                    this.on(
                                        "sliderResize." + i,
                                        e.proxy(this._layersOnResize, this)
                                    ),
                                    this.on(
                                        "gotoSlide." + i,
                                        e.proxy(this._layersOnGotoSlide, this)
                                    );
                            },
                            _layersOnUpdate: function (t) {
                                var i = this;
                                e.each(this.slides, function (t, i) {
                                    i.$slide;
                                    this.$slide
                                        .find(
                                            ".sp-layer:not([ data-layer-init ])"
                                        )
                                        .each(function () {
                                            var t = new o(e(this));
                                            void 0 === i.layers &&
                                                (i.layers = []),
                                                i.layers.push(t),
                                                !1 ===
                                                    e(this).hasClass(
                                                        "sp-static"
                                                    ) &&
                                                    (void 0 ===
                                                        i.animatedLayers &&
                                                        (i.animatedLayers = []),
                                                    i.animatedLayers.push(t));
                                        });
                                }),
                                    !0 === this.settings.waitForLayers &&
                                        (clearTimeout(this.waitForLayersTimer),
                                        (this.waitForLayersTimer = setTimeout(
                                            function () {
                                                (i.layersGotoSlideReference =
                                                    i.gotoSlide),
                                                    (i.gotoSlide =
                                                        i._layersGotoSlide);
                                            },
                                            1
                                        ))),
                                    setTimeout(function () {
                                        i.showLayers(i.selectedSlideIndex);
                                    }, 1);
                            },
                            _layersOnResize: function () {
                                var t,
                                    i,
                                    s = this.settings.autoScaleLayers;
                                !1 !== this.settings.autoScaleLayers &&
                                    (-1 === this.settings.autoScaleReference
                                        ? "string" ==
                                              typeof this.settings.width &&
                                          -1 !==
                                              this.settings.width.indexOf("%")
                                            ? (s = !1)
                                            : (t = parseInt(
                                                  this.settings.width,
                                                  10
                                              ))
                                        : (t =
                                              this.settings.autoScaleReference),
                                    (i =
                                        !0 === s && this.slideWidth < t
                                            ? this.slideWidth / t
                                            : 1),
                                    e.each(this.slides, function (t, s) {
                                        void 0 !== s.layers &&
                                            e.each(s.layers, function (t, e) {
                                                e.scale(i);
                                            });
                                    }));
                            },
                            _layersGotoSlide: function (t) {
                                var e = this,
                                    s =
                                        this.slides[this.selectedSlideIndex]
                                            .animatedLayers;
                                this.$slider.hasClass("sp-swiping") ||
                                void 0 === s ||
                                0 === s.length
                                    ? this.layersGotoSlideReference(t)
                                    : (this.on(
                                          "hideLayersComplete." + i,
                                          function () {
                                              e.off("hideLayersComplete." + i),
                                                  e.layersGotoSlideReference(t);
                                          }
                                      ),
                                      this.hideLayers(this.selectedSlideIndex));
                            },
                            _layersOnGotoSlide: function (t) {
                                this.previousSlideIndex !==
                                    this.selectedSlideIndex &&
                                    this.hideLayers(this.previousSlideIndex),
                                    this.showLayers(this.selectedSlideIndex);
                            },
                            showLayers: function (t) {
                                var i = this,
                                    s = this.slides[t].animatedLayers,
                                    n = 0;
                                void 0 !== s &&
                                    e.each(s, function (t, o) {
                                        !0 === o.isVisible()
                                            ? ++n === s.length &&
                                              (i.trigger({
                                                  type: "showLayersComplete",
                                                  index: t,
                                              }),
                                              e.isFunction(
                                                  i.settings.showLayersComplete
                                              ) &&
                                                  i.settings.showLayersComplete.call(
                                                      i,
                                                      {
                                                          type: "showLayersComplete",
                                                          index: t,
                                                      }
                                                  ))
                                            : o.show(function () {
                                                  ++n === s.length &&
                                                      (i.trigger({
                                                          type: "showLayersComplete",
                                                          index: t,
                                                      }),
                                                      e.isFunction(
                                                          i.settings
                                                              .showLayersComplete
                                                      ) &&
                                                          i.settings.showLayersComplete.call(
                                                              i,
                                                              {
                                                                  type: "showLayersComplete",
                                                                  index: t,
                                                              }
                                                          ));
                                              });
                                    });
                            },
                            hideLayers: function (t) {
                                var i = this,
                                    s = this.slides[t].animatedLayers,
                                    n = 0;
                                void 0 !== s &&
                                    e.each(s, function (t, o) {
                                        !1 === o.isVisible()
                                            ? ++n === s.length &&
                                              (i.trigger({
                                                  type: "hideLayersComplete",
                                                  index: t,
                                              }),
                                              e.isFunction(
                                                  i.settings.hideLayersComplete
                                              ) &&
                                                  i.settings.hideLayersComplete.call(
                                                      i,
                                                      {
                                                          type: "hideLayersComplete",
                                                          index: t,
                                                      }
                                                  ))
                                            : o.hide(function () {
                                                  ++n === s.length &&
                                                      (i.trigger({
                                                          type: "hideLayersComplete",
                                                          index: t,
                                                      }),
                                                      e.isFunction(
                                                          i.settings
                                                              .hideLayersComplete
                                                      ) &&
                                                          i.settings.hideLayersComplete.call(
                                                              i,
                                                              {
                                                                  type: "hideLayersComplete",
                                                                  index: t,
                                                              }
                                                          ));
                                              });
                                    });
                            },
                            destroyLayers: function () {
                                this.off("update." + i),
                                    this.off("sliderResize." + i),
                                    this.off("gotoSlide." + i),
                                    this.off("hideLayersComplete." + i);
                            },
                            layersDefaults: {
                                waitForLayers: !1,
                                autoScaleLayers: !0,
                                autoScaleReference: -1,
                                showLayersComplete: function () {},
                                hideLayersComplete: function () {},
                            },
                        },
                        n = t.SliderProSlide.prototype.destroy;
                    t.SliderProSlide.prototype.destroy = function () {
                        void 0 !== this.layers &&
                            (e.each(this.layers, function (t, e) {
                                e.destroy();
                            }),
                            (this.layers.length = 0)),
                            void 0 !== this.animatedLayers &&
                                (this.animatedLayers.length = 0),
                            n.apply(this);
                    };
                    var o = function (t) {
                        (this.$layer = t),
                            (this.visible = !1),
                            (this.styled = !1),
                            (this.data = null),
                            (this.position = null),
                            (this.horizontalProperty = null),
                            (this.verticalProperty = null),
                            (this.horizontalPosition = null),
                            (this.verticalPosition = null),
                            (this.scaleRatio = 1),
                            (this.supportedAnimation =
                                SliderProUtils.getSupportedAnimation()),
                            (this.vendorPrefix =
                                SliderProUtils.getVendorPrefix()),
                            (this.transitionEvent =
                                SliderProUtils.getTransitionEvent()),
                            (this.delayTimer = null),
                            (this.stayTimer = null),
                            this._init();
                    };
                    (o.prototype = {
                        _init: function () {
                            this.$layer.attr("data-layer-init", !0),
                                this.$layer.hasClass("sp-static")
                                    ? this._setStyle()
                                    : this.$layer.css({ visibility: "hidden" });
                        },
                        _setStyle: function () {
                            (this.styled = !0),
                                (this.data = this.$layer.data()),
                                void 0 !== this.data.width &&
                                    this.$layer.css("width", this.data.width),
                                void 0 !== this.data.height &&
                                    this.$layer.css("height", this.data.height),
                                void 0 !== this.data.depth &&
                                    this.$layer.css("z-index", this.data.depth),
                                (this.position = this.data.position
                                    ? this.data.position.toLowerCase()
                                    : "topleft"),
                                -1 !== this.position.indexOf("right")
                                    ? (this.horizontalProperty = "right")
                                    : -1 !== this.position.indexOf("left")
                                    ? (this.horizontalProperty = "left")
                                    : (this.horizontalProperty = "center"),
                                -1 !== this.position.indexOf("bottom")
                                    ? (this.verticalProperty = "bottom")
                                    : -1 !== this.position.indexOf("top")
                                    ? (this.verticalProperty = "top")
                                    : (this.verticalProperty = "center"),
                                this._setPosition(),
                                this.scale(this.scaleRatio);
                        },
                        _setPosition: function () {
                            var t = this.$layer.attr("style");
                            (this.horizontalPosition =
                                void 0 !== this.data.horizontal
                                    ? this.data.horizontal
                                    : 0),
                                (this.verticalPosition =
                                    void 0 !== this.data.vertical
                                        ? this.data.vertical
                                        : 0),
                                "center" === this.horizontalProperty
                                    ? (!1 === this.$layer.is("img") &&
                                          (void 0 === t ||
                                              (void 0 !== t &&
                                                  -1 === t.indexOf("width"))) &&
                                          (this.$layer.css(
                                              "white-space",
                                              "nowrap"
                                          ),
                                          this.$layer.css(
                                              "width",
                                              this.$layer.outerWidth(!0)
                                          )),
                                      this.$layer.css({
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          left: this.horizontalPosition,
                                          right: 0,
                                      }))
                                    : this.$layer.css(
                                          this.horizontalProperty,
                                          this.horizontalPosition
                                      ),
                                "center" === this.verticalProperty
                                    ? (!1 === this.$layer.is("img") &&
                                          (void 0 === t ||
                                              (void 0 !== t &&
                                                  -1 ===
                                                      t.indexOf("height"))) &&
                                          (this.$layer.css(
                                              "white-space",
                                              "nowrap"
                                          ),
                                          this.$layer.css(
                                              "height",
                                              this.$layer.outerHeight(!0)
                                          )),
                                      this.$layer.css({
                                          marginTop: "auto",
                                          marginBottom: "auto",
                                          top: this.verticalPosition,
                                          bottom: 0,
                                      }))
                                    : this.$layer.css(
                                          this.verticalProperty,
                                          this.verticalPosition
                                      );
                        },
                        scale: function (t) {
                            if (
                                !this.$layer.hasClass("sp-no-scale") &&
                                ((this.scaleRatio = t), !1 !== this.styled)
                            ) {
                                var e =
                                        "center" === this.horizontalProperty
                                            ? "left"
                                            : this.horizontalProperty,
                                    i =
                                        "center" === this.verticalProperty
                                            ? "top"
                                            : this.verticalProperty,
                                    s = {};
                                (s[this.vendorPrefix + "transform-origin"] =
                                    this.horizontalProperty +
                                    " " +
                                    this.verticalProperty),
                                    (s[this.vendorPrefix + "transform"] =
                                        "scale(" + this.scaleRatio + ")"),
                                    "string" !=
                                        typeof this.horizontalPosition &&
                                        (s[e] =
                                            this.horizontalPosition *
                                            this.scaleRatio),
                                    "string" != typeof this.verticalPosition &&
                                        (s[i] =
                                            this.verticalPosition *
                                            this.scaleRatio),
                                    "string" == typeof this.data.width &&
                                        -1 !== this.data.width.indexOf("%") &&
                                        (s.width =
                                            (
                                                parseInt(this.data.width, 10) /
                                                this.scaleRatio
                                            ).toString() + "%"),
                                    "string" == typeof this.data.height &&
                                        -1 !== this.data.height.indexOf("%") &&
                                        (s.height =
                                            (
                                                parseInt(this.data.height, 10) /
                                                this.scaleRatio
                                            ).toString() + "%"),
                                    this.$layer.css(s);
                            }
                        },
                        show: function (t) {
                            if (!0 !== this.visible) {
                                (this.visible = !0),
                                    !1 === this.styled && this._setStyle();
                                var e = this,
                                    i =
                                        void 0 !== this.data.showOffset
                                            ? this.data.showOffset
                                            : 50,
                                    s =
                                        void 0 !== this.data.showDuration
                                            ? this.data.showDuration / 1e3
                                            : 0.4,
                                    n =
                                        void 0 !== this.data.showDelay
                                            ? this.data.showDelay
                                            : 10,
                                    o =
                                        void 0 !== e.data.stayDuration
                                            ? parseInt(e.data.stayDuration, 10)
                                            : -1;
                                if ("javascript" === this.supportedAnimation)
                                    this.$layer
                                        .stop()
                                        .delay(n)
                                        .css({
                                            opacity: 0,
                                            visibility: "visible",
                                        })
                                        .animate(
                                            { opacity: 1 },
                                            1e3 * s,
                                            function () {
                                                -1 !== o &&
                                                    (e.stayTimer = setTimeout(
                                                        function () {
                                                            e.hide(),
                                                                (e.stayTimer =
                                                                    null);
                                                        },
                                                        o
                                                    )),
                                                    void 0 !== t && t();
                                            }
                                        );
                                else {
                                    var r = {
                                            opacity: 0,
                                            visibility: "visible",
                                        },
                                        a = { opacity: 1 },
                                        l = "";
                                    (r[this.vendorPrefix + "transform"] =
                                        "scale(" + this.scaleRatio + ")"),
                                        (a[this.vendorPrefix + "transform"] =
                                            "scale(" + this.scaleRatio + ")"),
                                        (a[this.vendorPrefix + "transition"] =
                                            "opacity " + s + "s"),
                                        void 0 !== this.data.showTransition &&
                                            ("left" === this.data.showTransition
                                                ? (l = i + "px, 0")
                                                : "right" ===
                                                  this.data.showTransition
                                                ? (l = "-" + i + "px, 0")
                                                : "up" ===
                                                  this.data.showTransition
                                                ? (l = "0, " + i + "px")
                                                : "down" ===
                                                      this.data
                                                          .showTransition &&
                                                  (l = "0, -" + i + "px"),
                                            (r[
                                                this.vendorPrefix + "transform"
                                            ] +=
                                                "css-3d" ===
                                                this.supportedAnimation
                                                    ? " translate3d(" +
                                                      l +
                                                      ", 0)"
                                                    : " translate(" + l + ")"),
                                            (a[
                                                this.vendorPrefix + "transform"
                                            ] +=
                                                "css-3d" ===
                                                this.supportedAnimation
                                                    ? " translate3d(0, 0, 0)"
                                                    : " translate(0, 0)"),
                                            (a[
                                                this.vendorPrefix + "transition"
                                            ] +=
                                                ", " +
                                                this.vendorPrefix +
                                                "transform " +
                                                s +
                                                "s")),
                                        this.$layer.on(
                                            this.transitionEvent,
                                            function (i) {
                                                i.target === i.currentTarget &&
                                                    (e.$layer
                                                        .off(e.transitionEvent)
                                                        .css(
                                                            e.vendorPrefix +
                                                                "transition",
                                                            ""
                                                        ),
                                                    -1 !== o &&
                                                        (e.stayTimer =
                                                            setTimeout(
                                                                function () {
                                                                    e.hide(),
                                                                        (e.stayTimer =
                                                                            null);
                                                                },
                                                                o
                                                            )),
                                                    void 0 !== t && t());
                                            }
                                        ),
                                        this.$layer.css(r),
                                        (this.delayTimer = setTimeout(
                                            function () {
                                                e.$layer.css(a);
                                            },
                                            n
                                        ));
                                }
                            }
                        },
                        hide: function (t) {
                            if (!1 !== this.visible) {
                                var i = this,
                                    s =
                                        void 0 !== this.data.hideOffset
                                            ? this.data.hideOffset
                                            : 50,
                                    n =
                                        void 0 !== this.data.hideDuration
                                            ? this.data.hideDuration / 1e3
                                            : 0.4,
                                    o =
                                        void 0 !== this.data.hideDelay
                                            ? this.data.hideDelay
                                            : 10;
                                if (
                                    ((this.visible = !1),
                                    null !== this.stayTimer &&
                                        clearTimeout(this.stayTimer),
                                    "javascript" === this.supportedAnimation)
                                )
                                    this.$layer
                                        .stop()
                                        .delay(o)
                                        .animate(
                                            { opacity: 0 },
                                            1e3 * n,
                                            function () {
                                                e(this).css(
                                                    "visibility",
                                                    "hidden"
                                                ),
                                                    void 0 !== t && t();
                                            }
                                        );
                                else {
                                    var r = "",
                                        a = { opacity: 0 };
                                    (a[this.vendorPrefix + "transform"] =
                                        "scale(" + this.scaleRatio + ")"),
                                        (a[this.vendorPrefix + "transition"] =
                                            "opacity " + n + "s"),
                                        void 0 !== this.data.hideTransition &&
                                            ("left" === this.data.hideTransition
                                                ? (r = "-" + s + "px, 0")
                                                : "right" ===
                                                  this.data.hideTransition
                                                ? (r = s + "px, 0")
                                                : "up" ===
                                                  this.data.hideTransition
                                                ? (r = "0, -" + s + "px")
                                                : "down" ===
                                                      this.data
                                                          .hideTransition &&
                                                  (r = "0, " + s + "px"),
                                            (a[
                                                this.vendorPrefix + "transform"
                                            ] +=
                                                "css-3d" ===
                                                this.supportedAnimation
                                                    ? " translate3d(" +
                                                      r +
                                                      ", 0)"
                                                    : " translate(" + r + ")"),
                                            (a[
                                                this.vendorPrefix + "transition"
                                            ] +=
                                                ", " +
                                                this.vendorPrefix +
                                                "transform " +
                                                n +
                                                "s")),
                                        this.$layer.on(
                                            this.transitionEvent,
                                            function (e) {
                                                e.target === e.currentTarget &&
                                                    (i.$layer
                                                        .off(i.transitionEvent)
                                                        .css(
                                                            i.vendorPrefix +
                                                                "transition",
                                                            ""
                                                        ),
                                                    !1 === i.visible &&
                                                        i.$layer.css(
                                                            "visibility",
                                                            "hidden"
                                                        ),
                                                    void 0 !== t && t());
                                            }
                                        ),
                                        (this.delayTimer = setTimeout(
                                            function () {
                                                i.$layer.css(a);
                                            },
                                            o
                                        ));
                                }
                            }
                        },
                        isVisible: function () {
                            return (
                                !1 !== this.visible &&
                                !this.$layer.is(":hidden")
                            );
                        },
                        destroy: function () {
                            this.$layer.removeAttr("style"),
                                this.$layer.removeAttr("data-layer-init"),
                                clearTimeout(this.delayTimer),
                                clearTimeout(this.stayTimer),
                                (this.delayTimer = null),
                                (this.stayTimer = null);
                        },
                    }),
                        e.SliderPro.addModule("Layers", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Fade." + e.SliderPro.namespace,
                        s = {
                            fadeGotoSlideReference: null,
                            initFade: function () {
                                this.on(
                                    "update." + i,
                                    e.proxy(this._fadeOnUpdate, this)
                                );
                            },
                            _fadeOnUpdate: function () {
                                !0 === this.settings.fade &&
                                    ((this.fadeGotoSlideReference =
                                        this.gotoSlide),
                                    (this.gotoSlide = this._fadeGotoSlide));
                            },
                            _fadeGotoSlide: function (t) {
                                if (t !== this.selectedSlideIndex)
                                    if (this.$slider.hasClass("sp-swiping"))
                                        this.fadeGotoSlideReference(t);
                                    else {
                                        var i,
                                            s,
                                            n = this,
                                            o = t;
                                        e.each(this.slides, function (t, e) {
                                            var r = e.getIndex(),
                                                a = e.$slide;
                                            r === o
                                                ? (a.css({
                                                      opacity: 0,
                                                      left: 0,
                                                      top: 0,
                                                      "z-index": 20,
                                                      visibility: "visible",
                                                  }),
                                                  (i = a))
                                                : r === n.selectedSlideIndex
                                                ? (a.css({
                                                      opacity: 1,
                                                      left: 0,
                                                      top: 0,
                                                      "z-index": 10,
                                                      visibility: "visible",
                                                  }),
                                                  (s = a))
                                                : a.css({
                                                      opacity: 1,
                                                      visibility: "hidden",
                                                      "z-index": "",
                                                  });
                                        }),
                                            (this.previousSlideIndex =
                                                this.selectedSlideIndex),
                                            (this.selectedSlideIndex = t),
                                            this.$slides
                                                .find(".sp-selected")
                                                .removeClass("sp-selected"),
                                            this.$slides
                                                .find(".sp-slide")
                                                .eq(this.selectedSlideIndex)
                                                .addClass("sp-selected"),
                                            !0 === n.settings.loop &&
                                                n._updateSlidesOrder(),
                                            this._moveTo(0, !0),
                                            this._fadeSlideTo(
                                                i,
                                                1,
                                                function () {
                                                    var i = !0;
                                                    e.each(
                                                        n.slides,
                                                        function (t, e) {
                                                            void 0 !==
                                                                e.$slide.attr(
                                                                    "data-transitioning"
                                                                ) && (i = !1);
                                                        }
                                                    ),
                                                        !0 === i &&
                                                            (e.each(
                                                                n.slides,
                                                                function (
                                                                    t,
                                                                    e
                                                                ) {
                                                                    e.$slide.css(
                                                                        {
                                                                            visibility:
                                                                                "",
                                                                            opacity:
                                                                                "",
                                                                            "z-index":
                                                                                "",
                                                                        }
                                                                    );
                                                                }
                                                            ),
                                                            n._resetSlidesPosition()),
                                                        n.trigger({
                                                            type: "gotoSlideComplete",
                                                            index: t,
                                                            previousIndex:
                                                                n.previousSlideIndex,
                                                        }),
                                                        e.isFunction(
                                                            n.settings
                                                                .gotoSlideComplete
                                                        ) &&
                                                            n.settings.gotoSlideComplete.call(
                                                                n,
                                                                {
                                                                    type: "gotoSlideComplete",
                                                                    index: t,
                                                                    previousIndex:
                                                                        n.previousSlideIndex,
                                                                }
                                                            );
                                                }
                                            ),
                                            !0 ===
                                                this.settings
                                                    .fadeOutPreviousSlide &&
                                                this._fadeSlideTo(s, 0),
                                            !0 === this.settings.autoHeight &&
                                                this._resizeHeight(),
                                            this.trigger({
                                                type: "gotoSlide",
                                                index: t,
                                                previousIndex:
                                                    this.previousSlideIndex,
                                            }),
                                            e.isFunction(
                                                this.settings.gotoSlide
                                            ) &&
                                                this.settings.gotoSlide.call(
                                                    this,
                                                    {
                                                        type: "gotoSlide",
                                                        index: t,
                                                        previousIndex:
                                                            this
                                                                .previousSlideIndex,
                                                    }
                                                );
                                    }
                            },
                            _fadeSlideTo: function (t, e, i) {
                                var s = this;
                                1 === e && t.attr("data-transitioning", !0),
                                    "css-3d" === this.supportedAnimation ||
                                    "css-2d" === this.supportedAnimation
                                        ? (setTimeout(function () {
                                              var i = { opacity: e };
                                              (i[
                                                  s.vendorPrefix + "transition"
                                              ] =
                                                  "opacity " +
                                                  s.settings.fadeDuration /
                                                      1e3 +
                                                  "s"),
                                                  t.css(i);
                                          }, 100),
                                          t.on(
                                              this.transitionEvent,
                                              function (e) {
                                                  e.target ===
                                                      e.currentTarget &&
                                                      (t.off(s.transitionEvent),
                                                      t.css(
                                                          s.vendorPrefix +
                                                              "transition",
                                                          ""
                                                      ),
                                                      t.removeAttr(
                                                          "data-transitioning"
                                                      ),
                                                      "function" == typeof i &&
                                                          i());
                                              }
                                          ))
                                        : t
                                              .stop()
                                              .animate(
                                                  { opacity: e },
                                                  this.settings.fadeDuration,
                                                  function () {
                                                      t.removeAttr(
                                                          "data-transitioning"
                                                      ),
                                                          "function" ==
                                                              typeof i && i();
                                                  }
                                              );
                            },
                            destroyFade: function () {
                                this.off("update." + i),
                                    null !== this.fadeGotoSlideReference &&
                                        (this.gotoSlide =
                                            this.fadeGotoSlideReference);
                            },
                            fadeDefaults: {
                                fade: !1,
                                fadeOutPreviousSlide: !0,
                                fadeDuration: 500,
                            },
                        };
                    e.SliderPro.addModule("Fade", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "TouchSwipe." + e.SliderPro.namespace,
                        s = {
                            touchStartPoint: { x: 0, y: 0 },
                            touchEndPoint: { x: 0, y: 0 },
                            touchDistance: { x: 0, y: 0 },
                            touchStartPosition: 0,
                            isTouchMoving: !1,
                            touchSwipeEvents: {
                                startEvent: "",
                                moveEvent: "",
                                endEvent: "",
                            },
                            allowOppositeScrolling: !0,
                            previousStartEvent: "",
                            initTouchSwipe: function () {
                                var t = this;
                                !1 !== this.settings.touchSwipe &&
                                    ((this.touchSwipeEvents.startEvent =
                                        "touchstart." + i + " mousedown." + i),
                                    (this.touchSwipeEvents.moveEvent =
                                        "touchmove." + i + " mousemove." + i),
                                    (this.touchSwipeEvents.endEvent =
                                        "touchend." +
                                        this.uniqueId +
                                        "." +
                                        i +
                                        " mouseup." +
                                        this.uniqueId +
                                        "." +
                                        i),
                                    this.$slidesMask.on(
                                        this.touchSwipeEvents.startEvent,
                                        e.proxy(this._onTouchStart, this)
                                    ),
                                    this.$slidesMask.on(
                                        "dragstart." + i,
                                        function (t) {
                                            t.preventDefault();
                                        }
                                    ),
                                    this.$slidesMask
                                        .find("a")
                                        .on("click." + i, function (e) {
                                            t.$slider.hasClass("sp-swiping") &&
                                                e.preventDefault();
                                        }),
                                    this.$slidesMask.addClass("sp-grab"));
                            },
                            _onTouchStart: function (t) {
                                if (
                                    "mousedown" !== t.type ||
                                    "touchstart" !== this.previousStartEvent
                                ) {
                                    if (
                                        ((this.previousStartEvent = t.type),
                                        !(
                                            e(t.target).closest(
                                                ".sp-selectable"
                                            ).length >= 1
                                        ))
                                    ) {
                                        var i =
                                            void 0 !== t.originalEvent.touches
                                                ? t.originalEvent.touches[0]
                                                : t.originalEvent;
                                        (this.touchStartPoint.x =
                                            i.pageX || i.clientX),
                                            (this.touchStartPoint.y =
                                                i.pageY || i.clientY),
                                            (this.touchStartPosition =
                                                this.slidesPosition),
                                            (this.touchDistance.x =
                                                this.touchDistance.y =
                                                    0),
                                            this.$slides.hasClass(
                                                "sp-animated"
                                            ) &&
                                                ((this.isTouchMoving = !0),
                                                this._stopMovement(),
                                                (this.touchStartPosition =
                                                    this.slidesPosition)),
                                            this.$slidesMask.on(
                                                this.touchSwipeEvents.moveEvent,
                                                e.proxy(this._onTouchMove, this)
                                            ),
                                            e(document).on(
                                                this.touchSwipeEvents.endEvent,
                                                e.proxy(this._onTouchEnd, this)
                                            ),
                                            this.$slidesMask
                                                .removeClass("sp-grab")
                                                .addClass("sp-grabbing");
                                    }
                                } else this.previousStartEvent = t.type;
                            },
                            _onTouchMove: function (t) {
                                var e =
                                    void 0 !== t.originalEvent.touches
                                        ? t.originalEvent.touches[0]
                                        : t.originalEvent;
                                (this.isTouchMoving = !0),
                                    !1 ===
                                        this.$slider.hasClass("sp-swiping") &&
                                        this.$slider.addClass("sp-swiping"),
                                    (this.touchEndPoint.x =
                                        e.pageX || e.clientX),
                                    (this.touchEndPoint.y =
                                        e.pageY || e.clientY),
                                    (this.touchDistance.x =
                                        this.touchEndPoint.x -
                                        this.touchStartPoint.x),
                                    (this.touchDistance.y =
                                        this.touchEndPoint.y -
                                        this.touchStartPoint.y);
                                var i =
                                        "horizontal" ===
                                        this.settings.orientation
                                            ? this.touchDistance.x
                                            : this.touchDistance.y,
                                    s =
                                        "horizontal" ===
                                        this.settings.orientation
                                            ? this.touchDistance.y
                                            : this.touchDistance.x;
                                Math.abs(i) > Math.abs(s) &&
                                    (this.allowOppositeScrolling = !1),
                                    !0 !== this.allowOppositeScrolling &&
                                        (t.preventDefault(),
                                        !1 === this.settings.loop &&
                                            ((this.slidesPosition >
                                                this.touchStartPosition &&
                                                0 ===
                                                    this.selectedSlideIndex) ||
                                                (this.slidesPosition <
                                                    this.touchStartPosition &&
                                                    this.selectedSlideIndex ===
                                                        this.getTotalSlides() -
                                                            1)) &&
                                            (i *= 0.2),
                                        this._moveTo(
                                            this.touchStartPosition + i,
                                            !0
                                        ));
                            },
                            _onTouchEnd: function (t) {
                                var i = this,
                                    s =
                                        "horizontal" ===
                                        this.settings.orientation
                                            ? this.touchDistance.x
                                            : this.touchDistance.y;
                                if (
                                    (this.$slidesMask.off(
                                        this.touchSwipeEvents.moveEvent
                                    ),
                                    e(document).off(
                                        this.touchSwipeEvents.endEvent
                                    ),
                                    (this.allowOppositeScrolling = !0),
                                    this.$slidesMask
                                        .removeClass("sp-grabbing")
                                        .addClass("sp-grab"),
                                    this.$slider.hasClass("sp-swiping") &&
                                        setTimeout(function () {
                                            i.$slider.removeClass("sp-swiping");
                                        }, 100),
                                    !1 !== this.isTouchMoving)
                                ) {
                                    this.isTouchMoving = !1;
                                    var n =
                                            !0 ===
                                                this.settings
                                                    .centerSelectedSlide &&
                                            "auto" !== this.settings.visibleSize
                                                ? Math.round(
                                                      (parseInt(
                                                          this.$slidesMask.css(
                                                              this.sizeProperty
                                                          ),
                                                          10
                                                      ) -
                                                          this.getSlideAt(
                                                              this
                                                                  .selectedSlideIndex
                                                          ).getSize()[
                                                              this.sizeProperty
                                                          ]) /
                                                          2
                                                  )
                                                : 0,
                                        o =
                                            -parseInt(
                                                this.$slides
                                                    .find(".sp-slide")
                                                    .eq(this.selectedSlideIndex)
                                                    .css(this.positionProperty),
                                                10
                                            ) + n;
                                    if (
                                        Math.abs(s) <
                                        this.settings.touchSwipeThreshold
                                    )
                                        this._moveTo(o);
                                    else {
                                        var r =
                                            ((!0 ===
                                                this.settings.rightToLeft &&
                                            "horizontal" ===
                                                this.settings.orientation
                                                ? -1
                                                : 1) *
                                                s) /
                                            (this.averageSlideSize +
                                                this.settings.slideDistance);
                                        r = parseInt(r, 10) + (r > 0 ? 1 : -1);
                                        var a =
                                            this.slidesOrder[
                                                e.inArray(
                                                    this.selectedSlideIndex,
                                                    this.slidesOrder
                                                ) - r
                                            ];
                                        !0 === this.settings.loop
                                            ? this.gotoSlide(a)
                                            : void 0 !== a
                                            ? this.gotoSlide(a)
                                            : this._moveTo(o);
                                    }
                                }
                            },
                            destroyTouchSwipe: function () {
                                this.$slidesMask.off("dragstart." + i),
                                    this.$slidesMask
                                        .find("a")
                                        .off("click." + i),
                                    this.$slidesMask.off(
                                        this.touchSwipeEvents.startEvent
                                    ),
                                    this.$slidesMask.off(
                                        this.touchSwipeEvents.moveEvent
                                    ),
                                    e(document).off(
                                        this.touchSwipeEvents.endEvent
                                    ),
                                    this.$slidesMask.removeClass("sp-grab");
                            },
                            touchSwipeDefaults: {
                                touchSwipe: !0,
                                touchSwipeThreshold: 50,
                            },
                        };
                    e.SliderPro.addModule("TouchSwipe", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Caption." + e.SliderPro.namespace,
                        s = {
                            $captionContainer: null,
                            captionContent: "",
                            initCaption: function () {
                                this.on(
                                    "update." + i,
                                    e.proxy(this._captionOnUpdate, this)
                                ),
                                    this.on(
                                        "gotoSlide." + i,
                                        e.proxy(
                                            this._updateCaptionContent,
                                            this
                                        )
                                    );
                            },
                            _captionOnUpdate: function () {
                                (this.$captionContainer = this.$slider.find(
                                    ".sp-caption-container"
                                )),
                                    this.$slider.find(".sp-caption").length &&
                                        0 === this.$captionContainer.length &&
                                        ((this.$captionContainer = e(
                                            '<div class="sp-caption-container"></div>'
                                        ).appendTo(this.$slider)),
                                        this._updateCaptionContent()),
                                    this.$slides
                                        .find(".sp-caption")
                                        .each(function () {
                                            e(this).css("display", "none");
                                        });
                            },
                            _updateCaptionContent: function () {
                                var t = this,
                                    e = this.$slider
                                        .find(".sp-slide")
                                        .eq(this.selectedSlideIndex)
                                        .find(".sp-caption"),
                                    i = 0 !== e.length ? e.html() : "";
                                !0 === this.settings.fadeCaption
                                    ? "" !== this.captionContent
                                        ? (0 ===
                                              parseFloat(
                                                  this.$captionContainer.css(
                                                      "opacity"
                                                  ),
                                                  10
                                              ) &&
                                              (this.$captionContainer.css(
                                                  this.vendorPrefix +
                                                      "transition",
                                                  ""
                                              ),
                                              this.$captionContainer.css(
                                                  "opacity",
                                                  1
                                              )),
                                          this._fadeCaptionTo(0, function () {
                                              (t.captionContent = i),
                                                  "" !== i
                                                      ? (t.$captionContainer.html(
                                                            t.captionContent
                                                        ),
                                                        t._fadeCaptionTo(1))
                                                      : t.$captionContainer.empty();
                                          }))
                                        : ((this.captionContent = i),
                                          this.$captionContainer.html(
                                              this.captionContent
                                          ),
                                          this.$captionContainer.css(
                                              "opacity",
                                              0
                                          ),
                                          this._fadeCaptionTo(1))
                                    : ((this.captionContent = i),
                                      this.$captionContainer.html(
                                          this.captionContent
                                      ));
                            },
                            _fadeCaptionTo: function (t, e) {
                                var i = this;
                                "css-3d" === this.supportedAnimation ||
                                "css-2d" === this.supportedAnimation
                                    ? (setTimeout(function () {
                                          var e = { opacity: t };
                                          (e[i.vendorPrefix + "transition"] =
                                              "opacity " +
                                              i.settings.captionFadeDuration /
                                                  1e3 +
                                              "s"),
                                              i.$captionContainer.css(e);
                                      }, 1),
                                      this.$captionContainer.on(
                                          this.transitionEvent,
                                          function (t) {
                                              t.target === t.currentTarget &&
                                                  (i.$captionContainer.off(
                                                      i.transitionEvent
                                                  ),
                                                  i.$captionContainer.css(
                                                      i.vendorPrefix +
                                                          "transition",
                                                      ""
                                                  ),
                                                  "function" == typeof e &&
                                                      e());
                                          }
                                      ))
                                    : this.$captionContainer
                                          .stop()
                                          .animate(
                                              { opacity: t },
                                              this.settings.captionFadeDuration,
                                              function () {
                                                  "function" == typeof e && e();
                                              }
                                          );
                            },
                            destroyCaption: function () {
                                this.off("update." + i),
                                    this.off("gotoSlide." + i),
                                    this.$captionContainer.remove(),
                                    this.$slider
                                        .find(".sp-caption")
                                        .each(function () {
                                            e(this).css("display", "");
                                        });
                            },
                            captionDefaults: {
                                fadeCaption: !0,
                                captionFadeDuration: 500,
                            },
                        };
                    e.SliderPro.addModule("Caption", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "DeepLinking." + e.SliderPro.namespace,
                        s = {
                            initDeepLinking: function () {
                                var s = this;
                                this.on("init." + i, function () {
                                    s._gotoHash(t.location.hash);
                                }),
                                    this.on("gotoSlide." + i, function (e) {
                                        if (!0 === s.settings.updateHash) {
                                            var i = s.$slider
                                                .find(".sp-slide")
                                                .eq(e.index)
                                                .attr("id");
                                            void 0 === i && (i = e.index),
                                                (t.location.hash =
                                                    s.$slider.attr("id") +
                                                    "/" +
                                                    i);
                                        }
                                    }),
                                    e(t).on(
                                        "hashchange." + this.uniqueId + "." + i,
                                        function () {
                                            s._gotoHash(t.location.hash);
                                        }
                                    );
                            },
                            _parseHash: function (t) {
                                if ("" !== t) {
                                    var e = (t = t.substring(1))
                                            .split("/")
                                            .pop(),
                                        i = t.slice(
                                            0,
                                            -e.toString().length - 1
                                        );
                                    if (this.$slider.attr("id") === i)
                                        return { sliderID: i, slideId: e };
                                }
                                return !1;
                            },
                            _gotoHash: function (t) {
                                var e = this._parseHash(t);
                                if (!1 !== e) {
                                    var i = e.slideId,
                                        s = parseInt(i, 10);
                                    if (isNaN(s)) {
                                        var n = this.$slider
                                            .find(".sp-slide#" + i)
                                            .index();
                                        -1 !== n &&
                                            n !== this.selectedSlideIndex &&
                                            this.gotoSlide(n);
                                    } else
                                        s !== this.selectedSlideIndex &&
                                            this.gotoSlide(s);
                                }
                            },
                            destroyDeepLinking: function () {
                                this.off("init." + i),
                                    this.off("gotoSlide." + i),
                                    e(t).off(
                                        "hashchange." + this.uniqueId + "." + i
                                    );
                            },
                            deepLinkingDefaults: { updateHash: !1 },
                        };
                    e.SliderPro.addModule("DeepLinking", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Autoplay." + e.SliderPro.namespace,
                        s = {
                            autoplayTimer: null,
                            isTimerRunning: !1,
                            isTimerPaused: !1,
                            initAutoplay: function () {
                                this.on(
                                    "update." + i,
                                    e.proxy(this._autoplayOnUpdate, this)
                                );
                            },
                            _autoplayOnUpdate: function (t) {
                                !0 === this.settings.autoplay
                                    ? (this.on(
                                          "gotoSlide." + i,
                                          e.proxy(
                                              this._autoplayOnGotoSlide,
                                              this
                                          )
                                      ),
                                      this.on(
                                          "mouseenter." + i,
                                          e.proxy(
                                              this._autoplayOnMouseEnter,
                                              this
                                          )
                                      ),
                                      this.on(
                                          "mouseleave." + i,
                                          e.proxy(
                                              this._autoplayOnMouseLeave,
                                              this
                                          )
                                      ),
                                      this.startAutoplay())
                                    : (this.off("gotoSlide." + i),
                                      this.off("mouseenter." + i),
                                      this.off("mouseleave." + i),
                                      this.stopAutoplay());
                            },
                            _autoplayOnGotoSlide: function (t) {
                                !0 === this.isTimerRunning &&
                                    this.stopAutoplay(),
                                    !1 === this.isTimerPaused &&
                                        this.startAutoplay();
                            },
                            _autoplayOnMouseEnter: function (t) {
                                !this.isTimerRunning ||
                                    ("pause" !==
                                        this.settings.autoplayOnHover &&
                                        "stop" !==
                                            this.settings.autoplayOnHover) ||
                                    (this.stopAutoplay(),
                                    (this.isTimerPaused = !0));
                            },
                            _autoplayOnMouseLeave: function (t) {
                                !0 === this.settings.autoplay &&
                                    !1 === this.isTimerRunning &&
                                    "stop" !== this.settings.autoplayOnHover &&
                                    (this.startAutoplay(),
                                    (this.isTimerPaused = !1));
                            },
                            startAutoplay: function () {
                                var t = this;
                                (this.isTimerRunning = !0),
                                    (this.autoplayTimer = setTimeout(
                                        function () {
                                            "normal" ===
                                            t.settings.autoplayDirection
                                                ? t.nextSlide()
                                                : "backwards" ===
                                                      t.settings
                                                          .autoplayDirection &&
                                                  t.previousSlide();
                                        },
                                        this.settings.autoplayDelay
                                    ));
                            },
                            stopAutoplay: function () {
                                (this.isTimerRunning = !1),
                                    (this.isTimerPaused = !1),
                                    clearTimeout(this.autoplayTimer);
                            },
                            destroyAutoplay: function () {
                                clearTimeout(this.autoplayTimer),
                                    this.off("update." + i),
                                    this.off("gotoSlide." + i),
                                    this.off("mouseenter." + i),
                                    this.off("mouseleave." + i);
                            },
                            autoplayDefaults: {
                                autoplay: !0,
                                autoplayDelay: 5e3,
                                autoplayDirection: "normal",
                                autoplayOnHover: "pause",
                            },
                        };
                    e.SliderPro.addModule("Autoplay", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Keyboard." + e.SliderPro.namespace,
                        s = {
                            initKeyboard: function () {
                                var t = this,
                                    s = !1;
                                !1 !== this.settings.keyboard &&
                                    (this.$slider.on("focus." + i, function () {
                                        s = !0;
                                    }),
                                    this.$slider.on("blur." + i, function () {
                                        s = !1;
                                    }),
                                    e(document).on(
                                        "keydown." + this.uniqueId + "." + i,
                                        function (e) {
                                            if (
                                                !0 !==
                                                    t.settings
                                                        .keyboardOnlyOnFocus ||
                                                !1 !== s
                                            )
                                                if (37 === e.which)
                                                    t.previousSlide();
                                                else if (39 === e.which)
                                                    t.nextSlide();
                                                else if (13 === e.which) {
                                                    var i = t.$slider
                                                        .find(".sp-slide")
                                                        .eq(
                                                            t.selectedSlideIndex
                                                        )
                                                        .find(
                                                            ".sp-image-container a"
                                                        );
                                                    0 !== i.length &&
                                                        i[0].click();
                                                }
                                        }
                                    ));
                            },
                            destroyKeyboard: function () {
                                this.$slider.off("focus." + i),
                                    this.$slider.off("blur." + i),
                                    e(document).off(
                                        "keydown." + this.uniqueId + "." + i
                                    );
                            },
                            keyboardDefaults: {
                                keyboard: !0,
                                keyboardOnlyOnFocus: !1,
                            },
                        };
                    e.SliderPro.addModule("Keyboard", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "FullScreen." + e.SliderPro.namespace,
                        s = {
                            isFullScreen: !1,
                            $fullScreenButton: null,
                            sizeBeforeFullScreen: {},
                            initFullScreen: function () {
                                (document.fullscreenEnabled ||
                                    document.webkitFullscreenEnabled ||
                                    document.mozFullScreenEnabled ||
                                    document.msFullscreenEnabled) &&
                                    this.on(
                                        "update." + i,
                                        e.proxy(this._fullScreenOnUpdate, this)
                                    );
                            },
                            _fullScreenOnUpdate: function () {
                                !0 === this.settings.fullScreen &&
                                null === this.$fullScreenButton
                                    ? this._addFullScreen()
                                    : !1 === this.settings.fullScreen &&
                                      null !== this.$fullScreenButton &&
                                      this._removeFullScreen(),
                                    !0 === this.settings.fullScreen &&
                                        (!0 === this.settings.fadeFullScreen
                                            ? this.$fullScreenButton.addClass(
                                                  "sp-fade-full-screen"
                                              )
                                            : !1 ===
                                                  this.settings
                                                      .fadeFullScreen &&
                                              this.$fullScreenButton.removeClass(
                                                  "sp-fade-full-screen"
                                              ));
                            },
                            _addFullScreen: function () {
                                (this.$fullScreenButton = e(
                                    '<div class="sp-full-screen-button"></div>'
                                ).appendTo(this.$slider)),
                                    this.$fullScreenButton.on(
                                        "click." + i,
                                        e.proxy(
                                            this._onFullScreenButtonClick,
                                            this
                                        )
                                    ),
                                    document.addEventListener(
                                        "fullscreenchange",
                                        e.proxy(this._onFullScreenChange, this)
                                    ),
                                    document.addEventListener(
                                        "mozfullscreenchange",
                                        e.proxy(this._onFullScreenChange, this)
                                    ),
                                    document.addEventListener(
                                        "webkitfullscreenchange",
                                        e.proxy(this._onFullScreenChange, this)
                                    ),
                                    document.addEventListener(
                                        "MSFullscreenChange",
                                        e.proxy(this._onFullScreenChange, this)
                                    );
                            },
                            _removeFullScreen: function () {
                                null !== this.$fullScreenButton &&
                                    (this.$fullScreenButton.off("click." + i),
                                    this.$fullScreenButton.remove(),
                                    (this.$fullScreenButton = null),
                                    document.removeEventListener(
                                        "fullscreenchange",
                                        this._onFullScreenChange
                                    ),
                                    document.removeEventListener(
                                        "mozfullscreenchange",
                                        this._onFullScreenChange
                                    ),
                                    document.removeEventListener(
                                        "webkitfullscreenchange",
                                        this._onFullScreenChange
                                    ),
                                    document.removeEventListener(
                                        "MSFullscreenChange",
                                        this._onFullScreenChange
                                    ));
                            },
                            _onFullScreenButtonClick: function () {
                                !1 === this.isFullScreen
                                    ? this.instance.requestFullScreen
                                        ? this.instance.requestFullScreen()
                                        : this.instance.mozRequestFullScreen
                                        ? this.instance.mozRequestFullScreen()
                                        : this.instance.webkitRequestFullScreen
                                        ? this.instance.webkitRequestFullScreen()
                                        : this.instance.msRequestFullscreen &&
                                          this.instance.msRequestFullscreen()
                                    : document.exitFullScreen
                                    ? document.exitFullScreen()
                                    : document.mozCancelFullScreen
                                    ? document.mozCancelFullScreen()
                                    : document.webkitCancelFullScreen
                                    ? document.webkitCancelFullScreen()
                                    : document.msExitFullscreen &&
                                      document.msExitFullscreen();
                            },
                            _onFullScreenChange: function () {
                                (this.isFullScreen = !!(
                                    document.fullscreenElement ||
                                    document.webkitFullscreenElement ||
                                    document.mozFullScreenElement ||
                                    document.msFullscreenElement
                                )),
                                    !0 === this.isFullScreen
                                        ? ((this.sizeBeforeFullScreen = {
                                              forceSize:
                                                  this.settings.forceSize,
                                              autoHeight:
                                                  this.settings.autoHeight,
                                          }),
                                          this.$slider.addClass(
                                              "sp-full-screen"
                                          ),
                                          (this.settings.forceSize =
                                              "fullWindow"),
                                          (this.settings.autoHeight = !1))
                                        : (this.$slider.css("margin", ""),
                                          this.$slider.removeClass(
                                              "sp-full-screen"
                                          ),
                                          (this.settings.forceSize =
                                              this.sizeBeforeFullScreen.forceSize),
                                          (this.settings.autoHeight =
                                              this.sizeBeforeFullScreen.autoHeight)),
                                    this.resize();
                            },
                            destroyFullScreen: function () {
                                this.off("update." + i),
                                    this._removeFullScreen();
                            },
                            fullScreenDefaults: {
                                fullScreen: !1,
                                fadeFullScreen: !0,
                            },
                        };
                    e.SliderPro.addModule("FullScreen", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Buttons." + e.SliderPro.namespace,
                        s = {
                            $buttons: null,
                            initButtons: function () {
                                this.on(
                                    "update." + i,
                                    e.proxy(this._buttonsOnUpdate, this)
                                );
                            },
                            _buttonsOnUpdate: function () {
                                (this.$buttons =
                                    this.$slider.find(".sp-buttons")),
                                    !0 === this.settings.buttons &&
                                    this.getTotalSlides() > 1 &&
                                    0 === this.$buttons.length
                                        ? this._createButtons()
                                        : !0 === this.settings.buttons &&
                                          this.getTotalSlides() !==
                                              this.$buttons.find(".sp-button")
                                                  .length &&
                                          0 !== this.$buttons.length
                                        ? this._adjustButtons()
                                        : (!1 === this.settings.buttons ||
                                              (this.getTotalSlides() <= 1 &&
                                                  0 !==
                                                      this.$buttons.length)) &&
                                          this._removeButtons();
                            },
                            _createButtons: function () {
                                var t = this;
                                this.$buttons = e(
                                    '<div class="sp-buttons"></div>'
                                ).appendTo(this.$slider);
                                for (var s = 0; s < this.getTotalSlides(); s++)
                                    e('<div class="sp-button"></div>').appendTo(
                                        this.$buttons
                                    );
                                this.$buttons.on(
                                    "click." + i,
                                    ".sp-button",
                                    function () {
                                        t.gotoSlide(e(this).index());
                                    }
                                ),
                                    this.$buttons
                                        .find(".sp-button")
                                        .eq(this.selectedSlideIndex)
                                        .addClass("sp-selected-button"),
                                    this.on("gotoSlide." + i, function (e) {
                                        t.$buttons
                                            .find(".sp-selected-button")
                                            .removeClass("sp-selected-button"),
                                            t.$buttons
                                                .find(".sp-button")
                                                .eq(e.index)
                                                .addClass("sp-selected-button");
                                    }),
                                    this.$slider.addClass("sp-has-buttons");
                            },
                            _adjustButtons: function () {
                                this.$buttons.empty();
                                for (var t = 0; t < this.getTotalSlides(); t++)
                                    e('<div class="sp-button"></div>').appendTo(
                                        this.$buttons
                                    );
                                this.$buttons
                                    .find(".sp-selected-button")
                                    .removeClass("sp-selected-button"),
                                    this.$buttons
                                        .find(".sp-button")
                                        .eq(this.selectedSlideIndex)
                                        .addClass("sp-selected-button");
                            },
                            _removeButtons: function () {
                                this.$buttons.off("click." + i, ".sp-button"),
                                    this.off("gotoSlide." + i),
                                    this.$buttons.remove(),
                                    this.$slider.removeClass("sp-has-buttons");
                            },
                            destroyButtons: function () {
                                this._removeButtons(), this.off("update." + i);
                            },
                            buttonsDefaults: { buttons: !0 },
                        };
                    e.SliderPro.addModule("Buttons", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Arrows." + e.SliderPro.namespace,
                        s = {
                            $arrows: null,
                            $previousArrow: null,
                            $nextArrow: null,
                            initArrows: function () {
                                this.on(
                                    "update." + i,
                                    e.proxy(this._arrowsOnUpdate, this)
                                ),
                                    this.on(
                                        "gotoSlide." + i,
                                        e.proxy(
                                            this._checkArrowsVisibility,
                                            this
                                        )
                                    );
                            },
                            _arrowsOnUpdate: function () {
                                var t = this;
                                !0 === this.settings.arrows &&
                                null === this.$arrows
                                    ? ((this.$arrows = e(
                                          '<div class="sp-arrows"></div>'
                                      ).appendTo(this.$slidesContainer)),
                                      (this.$previousArrow = e(
                                          '<div class="sp-arrow sp-previous-arrow"></div>'
                                      ).appendTo(this.$arrows)),
                                      (this.$nextArrow = e(
                                          '<div class="sp-arrow sp-next-arrow"></div>'
                                      ).appendTo(this.$arrows)),
                                      this.$previousArrow.on(
                                          "click." + i,
                                          function () {
                                              t.previousSlide();
                                          }
                                      ),
                                      this.$nextArrow.on(
                                          "click." + i,
                                          function () {
                                              t.nextSlide();
                                          }
                                      ),
                                      this._checkArrowsVisibility())
                                    : !1 === this.settings.arrows &&
                                      null !== this.$arrows &&
                                      this._removeArrows(),
                                    !0 === this.settings.arrows &&
                                        (!0 === this.settings.fadeArrows
                                            ? this.$arrows.addClass(
                                                  "sp-fade-arrows"
                                              )
                                            : !1 === this.settings.fadeArrows &&
                                              this.$arrows.removeClass(
                                                  "sp-fade-arrows"
                                              ));
                            },
                            _checkArrowsVisibility: function () {
                                !1 !== this.settings.arrows &&
                                    !0 !== this.settings.loop &&
                                    (0 === this.selectedSlideIndex
                                        ? this.$previousArrow.css(
                                              "display",
                                              "none"
                                          )
                                        : this.$previousArrow.css(
                                              "display",
                                              "block"
                                          ),
                                    this.selectedSlideIndex ===
                                    this.getTotalSlides() - 1
                                        ? this.$nextArrow.css("display", "none")
                                        : this.$nextArrow.css(
                                              "display",
                                              "block"
                                          ));
                            },
                            _removeArrows: function () {
                                null !== this.$arrows &&
                                    (this.$previousArrow.off("click." + i),
                                    this.$nextArrow.off("click." + i),
                                    this.$arrows.remove(),
                                    (this.$arrows = null));
                            },
                            destroyArrows: function () {
                                this._removeArrows(),
                                    this.off("update." + i),
                                    this.off("gotoSlide." + i);
                            },
                            arrowsDefaults: { arrows: !1, fadeArrows: !0 },
                        };
                    e.SliderPro.addModule("Arrows", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "ThumbnailTouchSwipe." + e.SliderPro.namespace,
                        s = {
                            thumbnailTouchStartPoint: { x: 0, y: 0 },
                            thumbnailTouchEndPoint: { x: 0, y: 0 },
                            thumbnailTouchDistance: { x: 0, y: 0 },
                            thumbnailTouchStartPosition: 0,
                            isThumbnailTouchMoving: !1,
                            isThumbnailTouchSwipe: !1,
                            thumbnailTouchSwipeEvents: {
                                startEvent: "",
                                moveEvent: "",
                                endEvent: "",
                            },
                            thumbnailPreviousStartEvent: "",
                            initThumbnailTouchSwipe: function () {
                                this.on(
                                    "update." + i,
                                    e.proxy(
                                        this._thumbnailTouchSwipeOnUpdate,
                                        this
                                    )
                                );
                            },
                            _thumbnailTouchSwipeOnUpdate: function () {
                                !1 !== this.isThumbnailScroller &&
                                    (!0 === this.settings.thumbnailTouchSwipe &&
                                        !1 === this.isThumbnailTouchSwipe &&
                                        ((this.isThumbnailTouchSwipe = !0),
                                        (this.thumbnailTouchSwipeEvents.startEvent =
                                            "touchstart." +
                                            i +
                                            " mousedown." +
                                            i),
                                        (this.thumbnailTouchSwipeEvents.moveEvent =
                                            "touchmove." +
                                            i +
                                            " mousemove." +
                                            i),
                                        (this.thumbnailTouchSwipeEvents.endEvent =
                                            "touchend." +
                                            this.uniqueId +
                                            "." +
                                            i +
                                            " mouseup." +
                                            this.uniqueId +
                                            "." +
                                            i),
                                        this.$thumbnails.on(
                                            this.thumbnailTouchSwipeEvents
                                                .startEvent,
                                            e.proxy(
                                                this._onThumbnailTouchStart,
                                                this
                                            )
                                        ),
                                        this.$thumbnails.on(
                                            "dragstart." + i,
                                            function (t) {
                                                t.preventDefault();
                                            }
                                        ),
                                        this.$thumbnails.addClass("sp-grab")),
                                    e.each(this.thumbnails, function (t, e) {
                                        e.off("thumbnailClick");
                                    }));
                            },
                            _onThumbnailTouchStart: function (t) {
                                if (
                                    "mousedown" !== t.type ||
                                    "touchstart" !==
                                        this.thumbnailPreviousStartEvent
                                ) {
                                    if (
                                        ((this.thumbnailPreviousStartEvent =
                                            t.type),
                                        !(
                                            e(t.target).closest(
                                                ".sp-selectable"
                                            ).length >= 1
                                        ))
                                    ) {
                                        var s =
                                            void 0 !== t.originalEvent.touches
                                                ? t.originalEvent.touches[0]
                                                : t.originalEvent;
                                        void 0 === t.originalEvent.touches &&
                                            t.preventDefault(),
                                            e(t.target)
                                                .parents(
                                                    ".sp-thumbnail-container"
                                                )
                                                .find("a")
                                                .one(
                                                    "click." + i,
                                                    function (t) {
                                                        t.preventDefault();
                                                    }
                                                ),
                                            (this.thumbnailTouchStartPoint.x =
                                                s.pageX || s.clientX),
                                            (this.thumbnailTouchStartPoint.y =
                                                s.pageY || s.clientY),
                                            (this.thumbnailTouchStartPosition =
                                                this.thumbnailsPosition),
                                            (this.thumbnailTouchDistance.x =
                                                this.thumbnailTouchDistance.y =
                                                    0),
                                            this.$thumbnails.hasClass(
                                                "sp-animated"
                                            ) &&
                                                ((this.isThumbnailTouchMoving =
                                                    !0),
                                                this._stopThumbnailsMovement(),
                                                (this.thumbnailTouchStartPosition =
                                                    this.thumbnailsPosition)),
                                            this.$thumbnails.on(
                                                this.thumbnailTouchSwipeEvents
                                                    .moveEvent,
                                                e.proxy(
                                                    this._onThumbnailTouchMove,
                                                    this
                                                )
                                            ),
                                            e(document).on(
                                                this.thumbnailTouchSwipeEvents
                                                    .endEvent,
                                                e.proxy(
                                                    this._onThumbnailTouchEnd,
                                                    this
                                                )
                                            ),
                                            this.$thumbnails
                                                .removeClass("sp-grab")
                                                .addClass("sp-grabbing"),
                                            this.$thumbnailsContainer.addClass(
                                                "sp-swiping"
                                            );
                                    }
                                } else
                                    this.thumbnailPreviousStartEvent = t.type;
                            },
                            _onThumbnailTouchMove: function (t) {
                                var e =
                                    void 0 !== t.originalEvent.touches
                                        ? t.originalEvent.touches[0]
                                        : t.originalEvent;
                                (this.isThumbnailTouchMoving = !0),
                                    (this.thumbnailTouchEndPoint.x =
                                        e.pageX || e.clientX),
                                    (this.thumbnailTouchEndPoint.y =
                                        e.pageY || e.clientY),
                                    (this.thumbnailTouchDistance.x =
                                        this.thumbnailTouchEndPoint.x -
                                        this.thumbnailTouchStartPoint.x),
                                    (this.thumbnailTouchDistance.y =
                                        this.thumbnailTouchEndPoint.y -
                                        this.thumbnailTouchStartPoint.y);
                                var i =
                                        "horizontal" ===
                                        this.thumbnailsOrientation
                                            ? this.thumbnailTouchDistance.x
                                            : this.thumbnailTouchDistance.y,
                                    s =
                                        "horizontal" ===
                                        this.thumbnailsOrientation
                                            ? this.thumbnailTouchDistance.y
                                            : this.thumbnailTouchDistance.x;
                                if (Math.abs(i) > Math.abs(s)) {
                                    if (
                                        (t.preventDefault(),
                                        this.thumbnailsPosition >= 0)
                                    ) {
                                        var n =
                                            -this.thumbnailTouchStartPosition;
                                        i = n + 0.2 * (i - n);
                                    } else if (
                                        this.thumbnailsPosition <=
                                        -this.thumbnailsSize +
                                            this.thumbnailsContainerSize
                                    ) {
                                        var o =
                                            this.thumbnailsSize -
                                            this.thumbnailsContainerSize +
                                            this.thumbnailTouchStartPosition;
                                        i = 0.2 * (i + o) - o;
                                    }
                                    this._moveThumbnailsTo(
                                        this.thumbnailTouchStartPosition + i,
                                        !0
                                    );
                                }
                            },
                            _onThumbnailTouchEnd: function (t) {
                                var s = this;
                                "horizontal" === this.thumbnailsOrientation
                                    ? this.thumbnailTouchDistance.x
                                    : this.thumbnailTouchDistance.y;
                                if (
                                    (this.$thumbnails.off(
                                        this.thumbnailTouchSwipeEvents.moveEvent
                                    ),
                                    e(document).off(
                                        this.thumbnailTouchSwipeEvents.endEvent
                                    ),
                                    this.$thumbnails
                                        .removeClass("sp-grabbing")
                                        .addClass("sp-grab"),
                                    !1 === this.isThumbnailTouchMoving ||
                                        (!0 === this.isThumbnailTouchMoving &&
                                            Math.abs(
                                                this.thumbnailTouchDistance.x
                                            ) < 10 &&
                                            Math.abs(
                                                this.thumbnailTouchDistance.y
                                            ) < 10))
                                ) {
                                    var n = (
                                        e(t.target).hasClass(
                                            "sp-thumbnail-container"
                                        )
                                            ? e(t.target)
                                            : e(t.target).parents(
                                                  ".sp-thumbnail-container"
                                              )
                                    ).index();
                                    0 !== e(t.target).parents("a").length
                                        ? (e(t.target)
                                              .parents("a")
                                              .off("click." + i),
                                          this.$thumbnailsContainer.removeClass(
                                              "sp-swiping"
                                          ))
                                        : n !== this.selectedThumbnailIndex &&
                                          -1 !== n &&
                                          this.gotoSlide(n);
                                } else
                                    (this.isThumbnailTouchMoving = !1),
                                        e(t.target)
                                            .parents(".sp-thumbnail")
                                            .one("click", function (t) {
                                                t.preventDefault();
                                            }),
                                        setTimeout(function () {
                                            s.$thumbnailsContainer.removeClass(
                                                "sp-swiping"
                                            );
                                        }, 1),
                                        this.thumbnailsPosition > 0
                                            ? this._moveThumbnailsTo(0)
                                            : this.thumbnailsPosition <
                                                  this.thumbnailsContainerSize -
                                                      this.thumbnailsSize &&
                                              this._moveThumbnailsTo(
                                                  this.thumbnailsContainerSize -
                                                      this.thumbnailsSize
                                              ),
                                        this.trigger({
                                            type: "thumbnailsMoveComplete",
                                        }),
                                        e.isFunction(
                                            this.settings.thumbnailsMoveComplete
                                        ) &&
                                            this.settings.thumbnailsMoveComplete.call(
                                                this,
                                                {
                                                    type: "thumbnailsMoveComplete",
                                                }
                                            );
                            },
                            destroyThumbnailTouchSwipe: function () {
                                this.off("update." + i),
                                    !1 !== this.isThumbnailScroller &&
                                        (this.$thumbnails.off(
                                            this.thumbnailTouchSwipeEvents
                                                .startEvent
                                        ),
                                        this.$thumbnails.off(
                                            this.thumbnailTouchSwipeEvents
                                                .moveEvent
                                        ),
                                        this.$thumbnails.off("dragstart." + i),
                                        e(document).off(
                                            this.thumbnailTouchSwipeEvents
                                                .endEvent
                                        ),
                                        this.$thumbnails.removeClass(
                                            "sp-grab"
                                        ));
                            },
                            thumbnailTouchSwipeDefaults: {
                                thumbnailTouchSwipe: !0,
                            },
                        };
                    e.SliderPro.addModule("ThumbnailTouchSwipe", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "ThumbnailArrows." + e.SliderPro.namespace,
                        s = {
                            $thumbnailArrows: null,
                            $previousThumbnailArrow: null,
                            $nextThumbnailArrow: null,
                            initThumbnailArrows: function () {
                                var t = this;
                                this.on(
                                    "update." + i,
                                    e.proxy(this._thumbnailArrowsOnUpdate, this)
                                ),
                                    this.on(
                                        "sliderResize." +
                                            i +
                                            " thumbnailsMoveComplete." +
                                            i,
                                        function () {
                                            !0 === t.isThumbnailScroller &&
                                                !0 ===
                                                    t.settings
                                                        .thumbnailArrows &&
                                                t._checkThumbnailArrowsVisibility();
                                        }
                                    );
                            },
                            _thumbnailArrowsOnUpdate: function () {
                                var t = this;
                                !1 !== this.isThumbnailScroller &&
                                    (!0 === this.settings.thumbnailArrows &&
                                    null === this.$thumbnailArrows
                                        ? ((this.$thumbnailArrows = e(
                                              '<div class="sp-thumbnail-arrows"></div>'
                                          ).appendTo(
                                              this.$thumbnailsContainer
                                          )),
                                          (this.$previousThumbnailArrow = e(
                                              '<div class="sp-thumbnail-arrow sp-previous-thumbnail-arrow"></div>'
                                          ).appendTo(this.$thumbnailArrows)),
                                          (this.$nextThumbnailArrow = e(
                                              '<div class="sp-thumbnail-arrow sp-next-thumbnail-arrow"></div>'
                                          ).appendTo(this.$thumbnailArrows)),
                                          this.$previousThumbnailArrow.on(
                                              "click." + i,
                                              function () {
                                                  var e = Math.min(
                                                      0,
                                                      t.thumbnailsPosition +
                                                          t.thumbnailsContainerSize
                                                  );
                                                  t._moveThumbnailsTo(e);
                                              }
                                          ),
                                          this.$nextThumbnailArrow.on(
                                              "click." + i,
                                              function () {
                                                  var e = Math.max(
                                                      t.thumbnailsContainerSize -
                                                          t.thumbnailsSize,
                                                      t.thumbnailsPosition -
                                                          t.thumbnailsContainerSize
                                                  );
                                                  t._moveThumbnailsTo(e);
                                              }
                                          ))
                                        : !1 ===
                                              this.settings.thumbnailArrows &&
                                          null !== this.$thumbnailArrows &&
                                          this._removeThumbnailArrows(),
                                    !0 === this.settings.thumbnailArrows &&
                                        (!0 ===
                                        this.settings.fadeThumbnailArrows
                                            ? this.$thumbnailArrows.addClass(
                                                  "sp-fade-thumbnail-arrows"
                                              )
                                            : !1 ===
                                                  this.settings
                                                      .fadeThumbnailArrows &&
                                              this.$thumbnailArrows.removeClass(
                                                  "sp-fade-thumbnail-arrows"
                                              ),
                                        this._checkThumbnailArrowsVisibility()));
                            },
                            _checkThumbnailArrowsVisibility: function () {
                                0 === this.thumbnailsPosition
                                    ? this.$previousThumbnailArrow.css(
                                          "display",
                                          "none"
                                      )
                                    : this.$previousThumbnailArrow.css(
                                          "display",
                                          "block"
                                      ),
                                    this.thumbnailsPosition ===
                                    this.thumbnailsContainerSize -
                                        this.thumbnailsSize
                                        ? this.$nextThumbnailArrow.css(
                                              "display",
                                              "none"
                                          )
                                        : this.$nextThumbnailArrow.css(
                                              "display",
                                              "block"
                                          );
                            },
                            _removeThumbnailArrows: function () {
                                null !== this.$thumbnailArrows &&
                                    (this.$previousThumbnailArrow.off(
                                        "click." + i
                                    ),
                                    this.$nextThumbnailArrow.off("click." + i),
                                    this.$thumbnailArrows.remove(),
                                    (this.$thumbnailArrows = null));
                            },
                            destroyThumbnailArrows: function () {
                                this._removeThumbnailArrows(),
                                    this.off("update." + i),
                                    this.off("sliderResize." + i),
                                    this.off("thumbnailsMoveComplete." + i);
                            },
                            thumbnailArrowsDefaults: {
                                thumbnailArrows: !1,
                                fadeThumbnailArrows: !0,
                            },
                        };
                    e.SliderPro.addModule("ThumbnailArrows", s);
                })(window, t),
                (function (t, e) {
                    "use strict";
                    var i = "Video." + e.SliderPro.namespace,
                        s = {
                            firstInit: !1,
                            initVideo: function () {
                                this.on(
                                    "update." + i,
                                    e.proxy(this._videoOnUpdate, this)
                                ),
                                    this.on(
                                        "gotoSlide." + i,
                                        e.proxy(this._videoOnGotoSlide, this)
                                    ),
                                    this.on(
                                        "gotoSlideComplete." + i,
                                        e.proxy(
                                            this._videoOnGotoSlideComplete,
                                            this
                                        )
                                    );
                            },
                            _videoOnUpdate: function () {
                                var t = this;
                                this.$slider
                                    .find(".sp-video")
                                    .not("a, [data-video-init]")
                                    .each(function () {
                                        var i = e(this);
                                        t._initVideo(i);
                                    }),
                                    this.$slider
                                        .find("a.sp-video")
                                        .not("[data-video-preinit]")
                                        .each(function () {
                                            var i = e(this);
                                            t._preinitVideo(i);
                                        }),
                                    !1 === this.firstInit &&
                                        ((this.firstInit = !0),
                                        this._videoOnGotoSlideComplete({
                                            index: this.selectedSlideIndex,
                                            previousIndex: -1,
                                        }));
                            },
                            _initVideo: function (t) {
                                var s = this;
                                t.attr("data-video-init", !0).videoController(),
                                    t.on("videoPlay." + i, function () {
                                        "stopAutoplay" ===
                                            s.settings.playVideoAction &&
                                            void 0 !== s.stopAutoplay &&
                                            (s.stopAutoplay(),
                                            (s.settings.autoplay = !1));
                                        var i = { type: "videoPlay", video: t };
                                        s.trigger(i),
                                            e.isFunction(
                                                s.settings.videoPlay
                                            ) &&
                                                s.settings.videoPlay.call(s, i);
                                    }),
                                    t.on("videoPause." + i, function () {
                                        "startAutoplay" ===
                                            s.settings.pauseVideoAction &&
                                            void 0 !== s.startAutoplay &&
                                            (s.stopAutoplay(),
                                            s.startAutoplay(),
                                            (s.settings.autoplay = !0));
                                        var i = {
                                            type: "videoPause",
                                            video: t,
                                        };
                                        s.trigger(i),
                                            e.isFunction(
                                                s.settings.videoPause
                                            ) &&
                                                s.settings.videoPause.call(
                                                    s,
                                                    i
                                                );
                                    }),
                                    t.on("videoEnded." + i, function () {
                                        "startAutoplay" ===
                                            s.settings.endVideoAction &&
                                        void 0 !== s.startAutoplay
                                            ? (s.stopAutoplay(),
                                              s.startAutoplay(),
                                              (s.settings.autoplay = !0))
                                            : "nextSlide" ===
                                              s.settings.endVideoAction
                                            ? s.nextSlide()
                                            : "replayVideo" ===
                                                  s.settings.endVideoAction &&
                                              t.videoController("replay");
                                        var i = { type: "videoEnd", video: t };
                                        s.trigger(i),
                                            e.isFunction(s.settings.videoEnd) &&
                                                s.settings.videoEnd.call(s, i);
                                    });
                            },
                            _preinitVideo: function (t) {
                                var s = this;
                                t.attr("data-video-preinit", !0),
                                    t.on("click." + i, function (i) {
                                        if (!s.$slider.hasClass("sp-swiping")) {
                                            i.preventDefault();
                                            var n,
                                                o,
                                                r,
                                                a,
                                                l,
                                                h,
                                                d,
                                                u = t.attr("href"),
                                                c =
                                                    t
                                                        .children("img")
                                                        .attr("width") ||
                                                    t.children("img").width(),
                                                p =
                                                    t
                                                        .children("img")
                                                        .attr("height") ||
                                                    t.children("img").height();
                                            -1 !== u.indexOf("youtube") ||
                                            -1 !== u.indexOf("youtu.be")
                                                ? (o = "youtube")
                                                : -1 !== u.indexOf("vimeo") &&
                                                  (o = "vimeo"),
                                                (r =
                                                    "youtube" === o
                                                        ? /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
                                                        : /http:\/\/(www\.)?vimeo.com\/(\d+)/),
                                                (a = u.match(r)),
                                                (l = a[2]),
                                                (h =
                                                    "youtube" === o
                                                        ? "//www.youtube.com/embed/" +
                                                          l +
                                                          "?enablejsapi=1&wmode=opaque"
                                                        : "//player.vimeo.com/video/" +
                                                          l),
                                                void 0 !==
                                                    (d = u.split("?")[1]) &&
                                                    ((d = d.split("&")),
                                                    e.each(d, function (t, e) {
                                                        -1 === e.indexOf(l) &&
                                                            (h += "&" + e);
                                                    })),
                                                (n = e("<iframe></iframe>")
                                                    .attr({
                                                        src: h,
                                                        width: c,
                                                        height: p,
                                                        class: t.attr("class"),
                                                        frameborder: 0,
                                                        allowfullscreen:
                                                            "allowfullscreen",
                                                    })
                                                    .insertBefore(t)),
                                                s._initVideo(n),
                                                n.videoController("play"),
                                                t.css("display", "none");
                                        }
                                    });
                            },
                            _videoOnGotoSlide: function (t) {
                                var e = this.$slides
                                    .find(".sp-slide")
                                    .eq(t.previousIndex)
                                    .find(".sp-video[data-video-init]");
                                -1 !== t.previousIndex &&
                                    0 !== e.length &&
                                    ("stopVideo" ===
                                    this.settings.leaveVideoAction
                                        ? e.videoController("stop")
                                        : "pauseVideo" ===
                                          this.settings.leaveVideoAction
                                        ? e.videoController("pause")
                                        : "removeVideo" ===
                                              this.settings.leaveVideoAction &&
                                          (0 !== e.siblings("a.sp-video").length
                                              ? (e
                                                    .siblings("a.sp-video")
                                                    .css("display", ""),
                                                e.videoController("destroy"),
                                                e.remove())
                                              : e.videoController("stop")));
                            },
                            _videoOnGotoSlideComplete: function (t) {
                                if (
                                    "playVideo" ===
                                        this.settings.reachVideoAction &&
                                    t.index === this.selectedSlideIndex
                                ) {
                                    var e = this.$slides
                                            .find(".sp-slide")
                                            .eq(t.index)
                                            .find(".sp-video[data-video-init]"),
                                        s = this.$slides
                                            .find(".sp-slide")
                                            .eq(t.index)
                                            .find(
                                                ".sp-video[data-video-preinit]"
                                            );
                                    0 !== e.length
                                        ? e.videoController("play")
                                        : 0 !== s.length &&
                                          s.trigger("click." + i),
                                        (0 === e.length && 0 === s.length) ||
                                            "stopAutoplay" !==
                                                this.settings.playVideoAction ||
                                            void 0 === this.stopAutoplay ||
                                            (this.stopAutoplay(),
                                            (this.settings.autoplay = !1));
                                }
                            },
                            destroyVideo: function () {
                                this.$slider
                                    .find(".sp-video[ data-video-preinit ]")
                                    .each(function () {
                                        var t = e(this);
                                        t.removeAttr("data-video-preinit"),
                                            t.off("click." + i);
                                    }),
                                    this.$slider
                                        .find(".sp-video[ data-video-init ]")
                                        .each(function () {
                                            var t = e(this);
                                            t.removeAttr("data-video-init"),
                                                t.off("Video"),
                                                t.videoController("destroy");
                                        }),
                                    this.off("update." + i),
                                    this.off("gotoSlide." + i),
                                    this.off("gotoSlideComplete." + i);
                            },
                            videoDefaults: {
                                reachVideoAction: "none",
                                leaveVideoAction: "pauseVideo",
                                playVideoAction: "stopAutoplay",
                                pauseVideoAction: "none",
                                endVideoAction: "none",
                                videoPlay: function () {},
                                videoPause: function () {},
                                videoEnd: function () {},
                            },
                        };
                    e.SliderPro.addModule("Video", s);
                })(window, t),
                (function (t) {
                    "use strict";
                    var e =
                            !!window.navigator.userAgent.match(
                                /(iPad|iPhone|iPod)/g
                            ),
                        i = function (e, i) {
                            (this.$video = t(e)),
                                (this.options = i),
                                (this.settings = {}),
                                (this.player = null),
                                this._init();
                        };
                    (i.prototype = {
                        _init: function () {
                            this.settings = t.extend(
                                {},
                                this.defaults,
                                this.options
                            );
                            var e = this,
                                i = t.VideoController.players,
                                s = this.$video.attr("id");
                            for (var n in i)
                                if (
                                    void 0 !== i[n] &&
                                    i[n].isType(this.$video)
                                ) {
                                    this.player = new i[n](this.$video);
                                    break;
                                }
                            if (null !== this.player) {
                                t.each(
                                    [
                                        "ready",
                                        "start",
                                        "play",
                                        "pause",
                                        "ended",
                                    ],
                                    function (i, n) {
                                        var o =
                                            "video" +
                                            n.charAt(0).toUpperCase() +
                                            n.slice(1);
                                        e.player.on(n, function () {
                                            e.trigger({ type: o, video: s }),
                                                t.isFunction(e.settings[o]) &&
                                                    e.settings[o].call(e, {
                                                        type: o,
                                                        video: s,
                                                    });
                                        });
                                    }
                                );
                            }
                        },
                        play: function () {
                            (!0 === e && !1 === this.player.isStarted()) ||
                                "playing" === this.player.getState() ||
                                this.player.play();
                        },
                        stop: function () {
                            (!0 === e && !1 === this.player.isStarted()) ||
                                "stopped" === this.player.getState() ||
                                this.player.stop();
                        },
                        pause: function () {
                            (!0 === e && !1 === this.player.isStarted()) ||
                                "paused" === this.player.getState() ||
                                this.player.pause();
                        },
                        replay: function () {
                            (!0 === e && !1 === this.player.isStarted()) ||
                                this.player.replay();
                        },
                        on: function (t, e) {
                            return this.$video.on(t, e);
                        },
                        off: function (t) {
                            return this.$video.off(t);
                        },
                        trigger: function (t) {
                            return this.$video.triggerHandler(t);
                        },
                        destroy: function () {
                            !0 === this.player.isStarted() && this.stop(),
                                this.player.off("ready"),
                                this.player.off("start"),
                                this.player.off("play"),
                                this.player.off("pause"),
                                this.player.off("ended"),
                                this.$video.removeData("videoController");
                        },
                        defaults: {
                            videoReady: function () {},
                            videoStart: function () {},
                            videoPlay: function () {},
                            videoPause: function () {},
                            videoEnded: function () {},
                        },
                    }),
                        (t.VideoController = {
                            players: {},
                            addPlayer: function (t, e) {
                                this.players[t] = e;
                            },
                        }),
                        (t.fn.videoController = function (e) {
                            var s = Array.prototype.slice.call(arguments, 1);
                            return this.each(function () {
                                if (
                                    void 0 === t(this).data("videoController")
                                ) {
                                    var n = new i(this, e);
                                    t(this).data("videoController", n);
                                } else if (void 0 !== e) {
                                    var o = t(this).data("videoController");
                                    "function" == typeof o[e]
                                        ? o[e].apply(o, s)
                                        : t.error(
                                              e +
                                                  " does not exist in videoController."
                                          );
                                }
                            });
                        });
                    var s = function (e) {
                        (this.$video = e),
                            (this.player = null),
                            (this.ready = !1),
                            (this.started = !1),
                            (this.state = ""),
                            (this.events = t({})),
                            this._init();
                    };
                    s.prototype = {
                        _init: function () {},
                        play: function () {},
                        pause: function () {},
                        stop: function () {},
                        replay: function () {},
                        isType: function () {},
                        isReady: function () {
                            return this.ready;
                        },
                        isStarted: function () {
                            return this.started;
                        },
                        getState: function () {
                            return this.state;
                        },
                        on: function (t, e) {
                            return this.events.on(t, e);
                        },
                        off: function (t) {
                            return this.events.off(t);
                        },
                        trigger: function (t) {
                            return this.events.triggerHandler(t);
                        },
                    };
                    var n = { youtubeAPIAdded: !1, youtubeVideos: [] },
                        o = function (e) {
                            if (
                                ((this.init = !1),
                                void 0 !== (window.YT && window.YT.Player))
                            )
                                s.call(this, e);
                            else if (
                                (n.youtubeVideos.push({
                                    video: e,
                                    scope: this,
                                }),
                                !1 === n.youtubeAPIAdded)
                            ) {
                                n.youtubeAPIAdded = !0;
                                var i = document.createElement("script");
                                i.src = "//www.youtube.com/player_api";
                                var o =
                                    document.getElementsByTagName("script")[0];
                                o.parentNode.insertBefore(i, o),
                                    (window.onYouTubePlayerAPIReady =
                                        function () {
                                            t.each(
                                                n.youtubeVideos,
                                                function (t, e) {
                                                    s.call(e.scope, e.video);
                                                }
                                            );
                                        });
                            }
                        };
                    ((o.prototype = new s()).constructor = o),
                        t.VideoController.addPlayer("YoutubeVideo", o),
                        (o.isType = function (t) {
                            if (t.is("iframe")) {
                                var e = t.attr("src");
                                if (
                                    -1 !== e.indexOf("youtube.com") ||
                                    -1 !== e.indexOf("youtu.be")
                                )
                                    return !0;
                            }
                            return !1;
                        }),
                        (o.prototype._init = function () {
                            (this.init = !0), this._setup();
                        }),
                        (o.prototype._setup = function () {
                            var t = this;
                            this.player = new YT.Player(this.$video[0], {
                                events: {
                                    onReady: function () {
                                        t.trigger({ type: "ready" }),
                                            (t.ready = !0);
                                    },
                                    onStateChange: function (e) {
                                        switch (e.data) {
                                            case YT.PlayerState.PLAYING:
                                                !1 === t.started &&
                                                    ((t.started = !0),
                                                    t.trigger({
                                                        type: "start",
                                                    })),
                                                    (t.state = "playing"),
                                                    t.trigger({ type: "play" });
                                                break;
                                            case YT.PlayerState.PAUSED:
                                                (t.state = "paused"),
                                                    t.trigger({
                                                        type: "pause",
                                                    });
                                                break;
                                            case YT.PlayerState.ENDED:
                                                (t.state = "ended"),
                                                    t.trigger({
                                                        type: "ended",
                                                    });
                                        }
                                    },
                                },
                            });
                        }),
                        (o.prototype.play = function () {
                            var t = this;
                            if (!0 === this.ready) this.player.playVideo();
                            else
                                var e = setInterval(function () {
                                    !0 === t.ready &&
                                        (clearInterval(e),
                                        t.player.playVideo());
                                }, 100);
                        }),
                        (o.prototype.pause = function () {
                            !0 === e ? this.stop() : this.player.pauseVideo();
                        }),
                        (o.prototype.stop = function () {
                            this.player.seekTo(1),
                                this.player.stopVideo(),
                                (this.state = "stopped");
                        }),
                        (o.prototype.replay = function () {
                            this.player.seekTo(1), this.player.playVideo();
                        }),
                        (o.prototype.on = function (t, e) {
                            var i = this;
                            if (!0 === this.init)
                                s.prototype.on.call(this, t, e);
                            else
                                var n = setInterval(function () {
                                    !0 === i.init &&
                                        (clearInterval(n),
                                        s.prototype.on.call(i, t, e));
                                }, 100);
                        });
                    var r = { vimeoAPIAdded: !1, vimeoVideos: [] },
                        a = function (e) {
                            if (((this.init = !1), void 0 !== window.Vimeo))
                                s.call(this, e);
                            else if (
                                (r.vimeoVideos.push({ video: e, scope: this }),
                                !1 === r.vimeoAPIAdded)
                            ) {
                                r.vimeoAPIAdded = !0;
                                var i = document.createElement("script");
                                i.src = "//player.vimeo.com/api/player.js";
                                var n =
                                    document.getElementsByTagName("script")[0];
                                n.parentNode.insertBefore(i, n);
                                var o = setInterval(function () {
                                    void 0 !== window.Vimeo &&
                                        (clearInterval(o),
                                        t.each(r.vimeoVideos, function (t, e) {
                                            s.call(e.scope, e.video);
                                        }));
                                }, 100);
                            }
                        };
                    ((a.prototype = new s()).constructor = a),
                        t.VideoController.addPlayer("VimeoVideo", a),
                        (a.isType = function (t) {
                            if (
                                t.is("iframe") &&
                                -1 !== t.attr("src").indexOf("vimeo.com")
                            )
                                return !0;
                            return !1;
                        }),
                        (a.prototype._init = function () {
                            (this.init = !0), this._setup();
                        }),
                        (a.prototype._setup = function () {
                            var t = this;
                            (this.player = new Vimeo.Player(this.$video[0])),
                                (t.ready = !0),
                                t.trigger({ type: "ready" }),
                                t.player.on("play", function () {
                                    !1 === t.started &&
                                        ((t.started = !0),
                                        t.trigger({ type: "start" })),
                                        (t.state = "playing"),
                                        t.trigger({ type: "play" });
                                }),
                                t.player.on("pause", function () {
                                    (t.state = "paused"),
                                        t.trigger({ type: "pause" });
                                }),
                                t.player.on("ended", function () {
                                    (t.state = "ended"),
                                        t.trigger({ type: "ended" });
                                });
                        }),
                        (a.prototype.play = function () {
                            var t = this;
                            if (!0 === this.ready) this.player.play();
                            else
                                var e = setInterval(function () {
                                    !0 === t.ready &&
                                        (clearInterval(e), t.player.play());
                                }, 100);
                        }),
                        (a.prototype.pause = function () {
                            this.player.pause();
                        }),
                        (a.prototype.stop = function () {
                            var t = this;
                            this.player.setCurrentTime(0).then(function () {
                                t.player.pause(), (t.state = "stopped");
                            });
                        }),
                        (a.prototype.replay = function () {
                            var t = this;
                            this.player.setCurrentTime(0).then(function () {
                                t.player.play();
                            });
                        }),
                        (a.prototype.on = function (t, e) {
                            var i = this;
                            if (!0 === this.init)
                                s.prototype.on.call(this, t, e);
                            else
                                var n = setInterval(function () {
                                    !0 === i.init &&
                                        (clearInterval(n),
                                        s.prototype.on.call(i, t, e));
                                }, 100);
                        });
                    var l = function (t) {
                        s.call(this, t);
                    };
                    ((l.prototype = new s()).constructor = l),
                        t.VideoController.addPlayer("HTML5Video", l),
                        (l.isType = function (t) {
                            return !(
                                !t.is("video") ||
                                !1 !== t.hasClass("video-js") ||
                                !1 !== t.hasClass("sublime")
                            );
                        }),
                        (l.prototype._init = function () {
                            var t = this;
                            this.player = this.$video[0];
                            var e = setInterval(function () {
                                4 === t.player.readyState &&
                                    (clearInterval(e),
                                    (t.ready = !0),
                                    t.trigger({ type: "ready" }),
                                    t.player.addEventListener(
                                        "play",
                                        function () {
                                            !1 === t.started &&
                                                ((t.started = !0),
                                                t.trigger({ type: "start" })),
                                                (t.state = "playing"),
                                                t.trigger({ type: "play" });
                                        }
                                    ),
                                    t.player.addEventListener(
                                        "pause",
                                        function () {
                                            (t.state = "paused"),
                                                t.trigger({ type: "pause" });
                                        }
                                    ),
                                    t.player.addEventListener(
                                        "ended",
                                        function () {
                                            (t.state = "ended"),
                                                t.trigger({ type: "ended" });
                                        }
                                    ));
                            }, 100);
                        }),
                        (l.prototype.play = function () {
                            var t = this;
                            if (!0 === this.ready) this.player.play();
                            else
                                var e = setInterval(function () {
                                    !0 === t.ready &&
                                        (clearInterval(e), t.player.play());
                                }, 100);
                        }),
                        (l.prototype.pause = function () {
                            this.player.pause();
                        }),
                        (l.prototype.stop = function () {
                            (this.player.currentTime = 0),
                                this.player.pause(),
                                (this.state = "stopped");
                        }),
                        (l.prototype.replay = function () {
                            (this.player.currentTime = 0), this.player.play();
                        });
                    var h = function (t) {
                        s.call(this, t);
                    };
                    ((h.prototype = new s()).constructor = h),
                        t.VideoController.addPlayer("VideoJSVideo", h),
                        (h.isType = function (t) {
                            return !(
                                (void 0 === t.attr("data-videojs-id") &&
                                    !t.hasClass("video-js")) ||
                                "undefined" == typeof videojs
                            );
                        }),
                        (h.prototype._init = function () {
                            var t = this,
                                e = this.$video.hasClass("video-js")
                                    ? this.$video.attr("id")
                                    : this.$video.attr("data-videojs-id");
                            (this.player = videojs(e)),
                                this.player.ready(function () {
                                    (t.ready = !0),
                                        t.trigger({ type: "ready" }),
                                        t.player.on("play", function () {
                                            !1 === t.started &&
                                                ((t.started = !0),
                                                t.trigger({ type: "start" })),
                                                (t.state = "playing"),
                                                t.trigger({ type: "play" });
                                        }),
                                        t.player.on("pause", function () {
                                            (t.state = "paused"),
                                                t.trigger({ type: "pause" });
                                        }),
                                        t.player.on("ended", function () {
                                            (t.state = "ended"),
                                                t.trigger({ type: "ended" });
                                        });
                                });
                        }),
                        (h.prototype.play = function () {
                            this.player.play();
                        }),
                        (h.prototype.pause = function () {
                            this.player.pause();
                        }),
                        (h.prototype.stop = function () {
                            this.player.currentTime(0),
                                this.player.pause(),
                                (this.state = "stopped");
                        }),
                        (h.prototype.replay = function () {
                            this.player.currentTime(0), this.player.play();
                        });
                    var d = function (t) {
                        s.call(this, t);
                    };
                    ((d.prototype = new s()).constructor = d),
                        t.VideoController.addPlayer("SublimeVideo", d),
                        (d.isType = function (t) {
                            return !(
                                !t.hasClass("sublime") ||
                                "undefined" == typeof sublime
                            );
                        }),
                        (d.prototype._init = function () {
                            var t = this;
                            sublime.ready(function () {
                                (t.player = sublime.player(
                                    t.$video.attr("id")
                                )),
                                    (t.ready = !0),
                                    t.trigger({ type: "ready" }),
                                    t.player.on("play", function () {
                                        !1 === t.started &&
                                            ((t.started = !0),
                                            t.trigger({ type: "start" })),
                                            (t.state = "playing"),
                                            t.trigger({ type: "play" });
                                    }),
                                    t.player.on("pause", function () {
                                        (t.state = "paused"),
                                            t.trigger({ type: "pause" });
                                    }),
                                    t.player.on("stop", function () {
                                        (t.state = "stopped"),
                                            t.trigger({ type: "stop" });
                                    }),
                                    t.player.on("end", function () {
                                        (t.state = "ended"),
                                            t.trigger({ type: "ended" });
                                    });
                            });
                        }),
                        (d.prototype.play = function () {
                            this.player.play();
                        }),
                        (d.prototype.pause = function () {
                            this.player.pause();
                        }),
                        (d.prototype.stop = function () {
                            this.player.stop();
                        }),
                        (d.prototype.replay = function () {
                            this.player.stop(), this.player.play();
                        });
                    var u = function (t) {
                        s.call(this, t);
                    };
                    ((u.prototype = new s()).constructor = u),
                        t.VideoController.addPlayer("JWPlayerVideo", u),
                        (u.isType = function (t) {
                            return !(
                                (void 0 === t.attr("data-jwplayer-id") &&
                                    !t.hasClass("jwplayer") &&
                                    0 ===
                                        t.find("object[data*='jwplayer']")
                                            .length) ||
                                "undefined" == typeof jwplayer
                            );
                        }),
                        (u.prototype._init = function () {
                            var t,
                                e = this;
                            this.$video.hasClass("jwplayer")
                                ? (t = this.$video.attr("id"))
                                : void 0 !==
                                  this.$video.attr("data-jwplayer-id")
                                ? (t = this.$video.attr("data-jwplayer-id"))
                                : 0 !==
                                      this.$video.find(
                                          "object[data*='jwplayer']"
                                      ).length &&
                                  (t = this.$video.find("object").attr("id")),
                                (this.player = jwplayer(t)),
                                this.player.onReady(function () {
                                    (e.ready = !0),
                                        e.trigger({ type: "ready" }),
                                        e.player.onPlay(function () {
                                            !1 === e.started &&
                                                ((e.started = !0),
                                                e.trigger({ type: "start" })),
                                                (e.state = "playing"),
                                                e.trigger({ type: "play" });
                                        }),
                                        e.player.onPause(function () {
                                            (e.state = "paused"),
                                                e.trigger({ type: "pause" });
                                        }),
                                        e.player.onComplete(function () {
                                            (e.state = "ended"),
                                                e.trigger({ type: "ended" });
                                        });
                                });
                        }),
                        (u.prototype.play = function () {
                            this.player.play(!0);
                        }),
                        (u.prototype.pause = function () {
                            this.player.pause(!0);
                        }),
                        (u.prototype.stop = function () {
                            this.player.stop(), (this.state = "stopped");
                        }),
                        (u.prototype.replay = function () {
                            this.player.seek(0), this.player.play(!0);
                        });
                })(t);
        }).call(this, i("EVdn"));
    },
    B9Yq: function (t, e) {
        t.exports = function () {
            throw new Error("define cannot be used indirect");
        };
    },
    EVdn: function (t, e, i) {
        var s;
        !(function (e, i) {
            "use strict";
            "object" == typeof t.exports
                ? (t.exports = e.document
                      ? i(e, !0)
                      : function (t) {
                            if (!t.document)
                                throw new Error(
                                    "jQuery requires a window with a document"
                                );
                            return i(t);
                        })
                : i(e);
        })("undefined" != typeof window ? window : this, function (i, n) {
            "use strict";
            var o = [],
                r = i.document,
                a = Object.getPrototypeOf,
                l = o.slice,
                h = o.concat,
                d = o.push,
                u = o.indexOf,
                c = {},
                p = c.toString,
                f = c.hasOwnProperty,
                g = f.toString,
                m = g.call(Object),
                v = {},
                y = function (t) {
                    return (
                        "function" == typeof t && "number" != typeof t.nodeType
                    );
                },
                b = function (t) {
                    return null != t && t === t.window;
                },
                w = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function x(t, e, i) {
                var s,
                    n,
                    o = (i = i || r).createElement("script");
                if (((o.text = t), e))
                    for (s in w)
                        (n = e[s] || (e.getAttribute && e.getAttribute(s))) &&
                            o.setAttribute(s, n);
                i.head.appendChild(o).parentNode.removeChild(o);
            }
            function S(t) {
                return null == t
                    ? t + ""
                    : "object" == typeof t || "function" == typeof t
                    ? c[p.call(t)] || "object"
                    : typeof t;
            }
            var _ = function (t, e) {
                    return new _.fn.init(t, e);
                },
                C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function T(t) {
                var e = !!t && "length" in t && t.length,
                    i = S(t);
                return (
                    !y(t) &&
                    !b(t) &&
                    ("array" === i ||
                        0 === e ||
                        ("number" == typeof e && e > 0 && e - 1 in t))
                );
            }
            (_.fn = _.prototype =
                {
                    jquery: "3.4.1",
                    constructor: _,
                    length: 0,
                    toArray: function () {
                        return l.call(this);
                    },
                    get: function (t) {
                        return null == t
                            ? l.call(this)
                            : t < 0
                            ? this[t + this.length]
                            : this[t];
                    },
                    pushStack: function (t) {
                        var e = _.merge(this.constructor(), t);
                        return (e.prevObject = this), e;
                    },
                    each: function (t) {
                        return _.each(this, t);
                    },
                    map: function (t) {
                        return this.pushStack(
                            _.map(this, function (e, i) {
                                return t.call(e, i, e);
                            })
                        );
                    },
                    slice: function () {
                        return this.pushStack(l.apply(this, arguments));
                    },
                    first: function () {
                        return this.eq(0);
                    },
                    last: function () {
                        return this.eq(-1);
                    },
                    eq: function (t) {
                        var e = this.length,
                            i = +t + (t < 0 ? e : 0);
                        return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
                    },
                    end: function () {
                        return this.prevObject || this.constructor();
                    },
                    push: d,
                    sort: o.sort,
                    splice: o.splice,
                }),
                (_.extend = _.fn.extend =
                    function () {
                        var t,
                            e,
                            i,
                            s,
                            n,
                            o,
                            r = arguments[0] || {},
                            a = 1,
                            l = arguments.length,
                            h = !1;
                        for (
                            "boolean" == typeof r &&
                                ((h = r), (r = arguments[a] || {}), a++),
                                "object" == typeof r || y(r) || (r = {}),
                                a === l && ((r = this), a--);
                            a < l;
                            a++
                        )
                            if (null != (t = arguments[a]))
                                for (e in t)
                                    (s = t[e]),
                                        "__proto__" !== e &&
                                            r !== s &&
                                            (h &&
                                            s &&
                                            (_.isPlainObject(s) ||
                                                (n = Array.isArray(s)))
                                                ? ((i = r[e]),
                                                  (o =
                                                      n && !Array.isArray(i)
                                                          ? []
                                                          : n ||
                                                            _.isPlainObject(i)
                                                          ? i
                                                          : {}),
                                                  (n = !1),
                                                  (r[e] = _.extend(h, o, s)))
                                                : void 0 !== s && (r[e] = s));
                        return r;
                    }),
                _.extend({
                    expando:
                        "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (t) {
                        throw new Error(t);
                    },
                    noop: function () {},
                    isPlainObject: function (t) {
                        var e, i;
                        return (
                            !(!t || "[object Object]" !== p.call(t)) &&
                            (!(e = a(t)) ||
                                ("function" ==
                                    typeof (i =
                                        f.call(e, "constructor") &&
                                        e.constructor) &&
                                    g.call(i) === m))
                        );
                    },
                    isEmptyObject: function (t) {
                        var e;
                        for (e in t) return !1;
                        return !0;
                    },
                    globalEval: function (t, e) {
                        x(t, { nonce: e && e.nonce });
                    },
                    each: function (t, e) {
                        var i,
                            s = 0;
                        if (T(t))
                            for (
                                i = t.length;
                                s < i && !1 !== e.call(t[s], s, t[s]);
                                s++
                            );
                        else
                            for (s in t)
                                if (!1 === e.call(t[s], s, t[s])) break;
                        return t;
                    },
                    trim: function (t) {
                        return null == t ? "" : (t + "").replace(C, "");
                    },
                    makeArray: function (t, e) {
                        var i = e || [];
                        return (
                            null != t &&
                                (T(Object(t))
                                    ? _.merge(i, "string" == typeof t ? [t] : t)
                                    : d.call(i, t)),
                            i
                        );
                    },
                    inArray: function (t, e, i) {
                        return null == e ? -1 : u.call(e, t, i);
                    },
                    merge: function (t, e) {
                        for (var i = +e.length, s = 0, n = t.length; s < i; s++)
                            t[n++] = e[s];
                        return (t.length = n), t;
                    },
                    grep: function (t, e, i) {
                        for (
                            var s = [], n = 0, o = t.length, r = !i;
                            n < o;
                            n++
                        )
                            !e(t[n], n) !== r && s.push(t[n]);
                        return s;
                    },
                    map: function (t, e, i) {
                        var s,
                            n,
                            o = 0,
                            r = [];
                        if (T(t))
                            for (s = t.length; o < s; o++)
                                null != (n = e(t[o], o, i)) && r.push(n);
                        else
                            for (o in t)
                                null != (n = e(t[o], o, i)) && r.push(n);
                        return h.apply([], r);
                    },
                    guid: 1,
                    support: v,
                }),
                "function" == typeof Symbol &&
                    (_.fn[Symbol.iterator] = o[Symbol.iterator]),
                _.each(
                    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                        " "
                    ),
                    function (t, e) {
                        c["[object " + e + "]"] = e.toLowerCase();
                    }
                );
            var $ = (function (t) {
                var e,
                    i,
                    s,
                    n,
                    o,
                    r,
                    a,
                    l,
                    h,
                    d,
                    u,
                    c,
                    p,
                    f,
                    g,
                    m,
                    v,
                    y,
                    b,
                    w = "sizzle" + 1 * new Date(),
                    x = t.document,
                    S = 0,
                    _ = 0,
                    C = lt(),
                    T = lt(),
                    $ = lt(),
                    P = lt(),
                    E = function (t, e) {
                        return t === e && (u = !0), 0;
                    },
                    I = {}.hasOwnProperty,
                    z = [],
                    A = z.pop,
                    k = z.push,
                    D = z.push,
                    L = z.slice,
                    O = function (t, e) {
                        for (var i = 0, s = t.length; i < s; i++)
                            if (t[i] === e) return i;
                        return -1;
                    },
                    M =
                        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    j = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    H =
                        "\\[" +
                        j +
                        "*(" +
                        R +
                        ")(?:" +
                        j +
                        "*([*^$|!~]?=)" +
                        j +
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                        R +
                        "))|)" +
                        j +
                        "*\\]",
                    N =
                        ":(" +
                        R +
                        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                        H +
                        ")*)|.*)\\)|)",
                    q = new RegExp(j + "+", "g"),
                    F = new RegExp(
                        "^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$",
                        "g"
                    ),
                    W = new RegExp("^" + j + "*," + j + "*"),
                    B = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                    V = new RegExp(j + "|>"),
                    U = new RegExp(N),
                    G = new RegExp("^" + R + "$"),
                    X = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + N),
                        CHILD: new RegExp(
                            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                                j +
                                "*(even|odd|(([+-]|)(\\d*)n|)" +
                                j +
                                "*(?:([+-]|)" +
                                j +
                                "*(\\d+)|))" +
                                j +
                                "*\\)|)",
                            "i"
                        ),
                        bool: new RegExp("^(?:" + M + ")$", "i"),
                        needsContext: new RegExp(
                            "^" +
                                j +
                                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                j +
                                "*((?:-\\d)?\\d*)" +
                                j +
                                "*\\)|)(?=[^-]|$)",
                            "i"
                        ),
                    },
                    Y = /HTML$/i,
                    Z = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    tt = /[+~]/,
                    et = new RegExp(
                        "\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)",
                        "ig"
                    ),
                    it = function (t, e, i) {
                        var s = "0x" + e - 65536;
                        return s != s || i
                            ? e
                            : s < 0
                            ? String.fromCharCode(s + 65536)
                            : String.fromCharCode(
                                  (s >> 10) | 55296,
                                  (1023 & s) | 56320
                              );
                    },
                    st = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    nt = function (t, e) {
                        return e
                            ? "\0" === t
                                ? "�"
                                : t.slice(0, -1) +
                                  "\\" +
                                  t.charCodeAt(t.length - 1).toString(16) +
                                  " "
                            : "\\" + t;
                    },
                    ot = function () {
                        c();
                    },
                    rt = wt(
                        function (t) {
                            return (
                                !0 === t.disabled &&
                                "fieldset" === t.nodeName.toLowerCase()
                            );
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    D.apply((z = L.call(x.childNodes)), x.childNodes),
                        z[x.childNodes.length].nodeType;
                } catch (t) {
                    D = {
                        apply: z.length
                            ? function (t, e) {
                                  k.apply(t, L.call(e));
                              }
                            : function (t, e) {
                                  for (
                                      var i = t.length, s = 0;
                                      (t[i++] = e[s++]);

                                  );
                                  t.length = i - 1;
                              },
                    };
                }
                function at(t, e, s, n) {
                    var o,
                        a,
                        h,
                        d,
                        u,
                        f,
                        v,
                        y = e && e.ownerDocument,
                        S = e ? e.nodeType : 9;
                    if (
                        ((s = s || []),
                        "string" != typeof t ||
                            !t ||
                            (1 !== S && 9 !== S && 11 !== S))
                    )
                        return s;
                    if (
                        !n &&
                        ((e ? e.ownerDocument || e : x) !== p && c(e),
                        (e = e || p),
                        g)
                    ) {
                        if (11 !== S && (u = Q.exec(t)))
                            if ((o = u[1])) {
                                if (9 === S) {
                                    if (!(h = e.getElementById(o))) return s;
                                    if (h.id === o) return s.push(h), s;
                                } else if (
                                    y &&
                                    (h = y.getElementById(o)) &&
                                    b(e, h) &&
                                    h.id === o
                                )
                                    return s.push(h), s;
                            } else {
                                if (u[2])
                                    return (
                                        D.apply(s, e.getElementsByTagName(t)), s
                                    );
                                if (
                                    (o = u[3]) &&
                                    i.getElementsByClassName &&
                                    e.getElementsByClassName
                                )
                                    return (
                                        D.apply(s, e.getElementsByClassName(o)),
                                        s
                                    );
                            }
                        if (
                            i.qsa &&
                            !P[t + " "] &&
                            (!m || !m.test(t)) &&
                            (1 !== S || "object" !== e.nodeName.toLowerCase())
                        ) {
                            if (((v = t), (y = e), 1 === S && V.test(t))) {
                                for (
                                    (d = e.getAttribute("id"))
                                        ? (d = d.replace(st, nt))
                                        : e.setAttribute("id", (d = w)),
                                        a = (f = r(t)).length;
                                    a--;

                                )
                                    f[a] = "#" + d + " " + bt(f[a]);
                                (v = f.join(",")),
                                    (y = (tt.test(t) && vt(e.parentNode)) || e);
                            }
                            try {
                                return D.apply(s, y.querySelectorAll(v)), s;
                            } catch (e) {
                                P(t, !0);
                            } finally {
                                d === w && e.removeAttribute("id");
                            }
                        }
                    }
                    return l(t.replace(F, "$1"), e, s, n);
                }
                function lt() {
                    var t = [];
                    return function e(i, n) {
                        return (
                            t.push(i + " ") > s.cacheLength &&
                                delete e[t.shift()],
                            (e[i + " "] = n)
                        );
                    };
                }
                function ht(t) {
                    return (t[w] = !0), t;
                }
                function dt(t) {
                    var e = p.createElement("fieldset");
                    try {
                        return !!t(e);
                    } catch (t) {
                        return !1;
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), (e = null);
                    }
                }
                function ut(t, e) {
                    for (var i = t.split("|"), n = i.length; n--; )
                        s.attrHandle[i[n]] = e;
                }
                function ct(t, e) {
                    var i = e && t,
                        s =
                            i &&
                            1 === t.nodeType &&
                            1 === e.nodeType &&
                            t.sourceIndex - e.sourceIndex;
                    if (s) return s;
                    if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
                    return t ? 1 : -1;
                }
                function pt(t) {
                    return function (e) {
                        return (
                            "input" === e.nodeName.toLowerCase() && e.type === t
                        );
                    };
                }
                function ft(t) {
                    return function (e) {
                        var i = e.nodeName.toLowerCase();
                        return (
                            ("input" === i || "button" === i) && e.type === t
                        );
                    };
                }
                function gt(t) {
                    return function (e) {
                        return "form" in e
                            ? e.parentNode && !1 === e.disabled
                                ? "label" in e
                                    ? "label" in e.parentNode
                                        ? e.parentNode.disabled === t
                                        : e.disabled === t
                                    : e.isDisabled === t ||
                                      (e.isDisabled !== !t && rt(e) === t)
                                : e.disabled === t
                            : "label" in e && e.disabled === t;
                    };
                }
                function mt(t) {
                    return ht(function (e) {
                        return (
                            (e = +e),
                            ht(function (i, s) {
                                for (
                                    var n, o = t([], i.length, e), r = o.length;
                                    r--;

                                )
                                    i[(n = o[r])] && (i[n] = !(s[n] = i[n]));
                            })
                        );
                    });
                }
                function vt(t) {
                    return t && void 0 !== t.getElementsByTagName && t;
                }
                for (e in ((i = at.support = {}),
                (o = at.isXML =
                    function (t) {
                        var e = t.namespaceURI,
                            i = (t.ownerDocument || t).documentElement;
                        return !Y.test(e || (i && i.nodeName) || "HTML");
                    }),
                (c = at.setDocument =
                    function (t) {
                        var e,
                            n,
                            r = t ? t.ownerDocument || t : x;
                        return r !== p && 9 === r.nodeType && r.documentElement
                            ? ((f = (p = r).documentElement),
                              (g = !o(p)),
                              x !== p &&
                                  (n = p.defaultView) &&
                                  n.top !== n &&
                                  (n.addEventListener
                                      ? n.addEventListener("unload", ot, !1)
                                      : n.attachEvent &&
                                        n.attachEvent("onunload", ot)),
                              (i.attributes = dt(function (t) {
                                  return (
                                      (t.className = "i"),
                                      !t.getAttribute("className")
                                  );
                              })),
                              (i.getElementsByTagName = dt(function (t) {
                                  return (
                                      t.appendChild(p.createComment("")),
                                      !t.getElementsByTagName("*").length
                                  );
                              })),
                              (i.getElementsByClassName = J.test(
                                  p.getElementsByClassName
                              )),
                              (i.getById = dt(function (t) {
                                  return (
                                      (f.appendChild(t).id = w),
                                      !p.getElementsByName ||
                                          !p.getElementsByName(w).length
                                  );
                              })),
                              i.getById
                                  ? ((s.filter.ID = function (t) {
                                        var e = t.replace(et, it);
                                        return function (t) {
                                            return t.getAttribute("id") === e;
                                        };
                                    }),
                                    (s.find.ID = function (t, e) {
                                        if (void 0 !== e.getElementById && g) {
                                            var i = e.getElementById(t);
                                            return i ? [i] : [];
                                        }
                                    }))
                                  : ((s.filter.ID = function (t) {
                                        var e = t.replace(et, it);
                                        return function (t) {
                                            var i =
                                                void 0 !== t.getAttributeNode &&
                                                t.getAttributeNode("id");
                                            return i && i.value === e;
                                        };
                                    }),
                                    (s.find.ID = function (t, e) {
                                        if (void 0 !== e.getElementById && g) {
                                            var i,
                                                s,
                                                n,
                                                o = e.getElementById(t);
                                            if (o) {
                                                if (
                                                    (i =
                                                        o.getAttributeNode(
                                                            "id"
                                                        )) &&
                                                    i.value === t
                                                )
                                                    return [o];
                                                for (
                                                    n = e.getElementsByName(t),
                                                        s = 0;
                                                    (o = n[s++]);

                                                )
                                                    if (
                                                        (i =
                                                            o.getAttributeNode(
                                                                "id"
                                                            )) &&
                                                        i.value === t
                                                    )
                                                        return [o];
                                            }
                                            return [];
                                        }
                                    })),
                              (s.find.TAG = i.getElementsByTagName
                                  ? function (t, e) {
                                        return void 0 !== e.getElementsByTagName
                                            ? e.getElementsByTagName(t)
                                            : i.qsa
                                            ? e.querySelectorAll(t)
                                            : void 0;
                                    }
                                  : function (t, e) {
                                        var i,
                                            s = [],
                                            n = 0,
                                            o = e.getElementsByTagName(t);
                                        if ("*" === t) {
                                            for (; (i = o[n++]); )
                                                1 === i.nodeType && s.push(i);
                                            return s;
                                        }
                                        return o;
                                    }),
                              (s.find.CLASS =
                                  i.getElementsByClassName &&
                                  function (t, e) {
                                      if (
                                          void 0 !== e.getElementsByClassName &&
                                          g
                                      )
                                          return e.getElementsByClassName(t);
                                  }),
                              (v = []),
                              (m = []),
                              (i.qsa = J.test(p.querySelectorAll)) &&
                                  (dt(function (t) {
                                      (f.appendChild(t).innerHTML =
                                          "<a id='" +
                                          w +
                                          "'></a><select id='" +
                                          w +
                                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                          t.querySelectorAll(
                                              "[msallowcapture^='']"
                                          ).length &&
                                              m.push(
                                                  "[*^$]=" + j + "*(?:''|\"\")"
                                              ),
                                          t.querySelectorAll("[selected]")
                                              .length ||
                                              m.push(
                                                  "\\[" +
                                                      j +
                                                      "*(?:value|" +
                                                      M +
                                                      ")"
                                              ),
                                          t.querySelectorAll("[id~=" + w + "-]")
                                              .length || m.push("~="),
                                          t.querySelectorAll(":checked")
                                              .length || m.push(":checked"),
                                          t.querySelectorAll("a#" + w + "+*")
                                              .length || m.push(".#.+[+~]");
                                  }),
                                  dt(function (t) {
                                      t.innerHTML =
                                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                      var e = p.createElement("input");
                                      e.setAttribute("type", "hidden"),
                                          t
                                              .appendChild(e)
                                              .setAttribute("name", "D"),
                                          t.querySelectorAll("[name=d]")
                                              .length &&
                                              m.push(
                                                  "name" + j + "*[*^$|!~]?="
                                              ),
                                          2 !==
                                              t.querySelectorAll(":enabled")
                                                  .length &&
                                              m.push(":enabled", ":disabled"),
                                          (f.appendChild(t).disabled = !0),
                                          2 !==
                                              t.querySelectorAll(":disabled")
                                                  .length &&
                                              m.push(":enabled", ":disabled"),
                                          t.querySelectorAll("*,:x"),
                                          m.push(",.*:");
                                  })),
                              (i.matchesSelector = J.test(
                                  (y =
                                      f.matches ||
                                      f.webkitMatchesSelector ||
                                      f.mozMatchesSelector ||
                                      f.oMatchesSelector ||
                                      f.msMatchesSelector)
                              )) &&
                                  dt(function (t) {
                                      (i.disconnectedMatch = y.call(t, "*")),
                                          y.call(t, "[s!='']:x"),
                                          v.push("!=", N);
                                  }),
                              (m = m.length && new RegExp(m.join("|"))),
                              (v = v.length && new RegExp(v.join("|"))),
                              (e = J.test(f.compareDocumentPosition)),
                              (b =
                                  e || J.test(f.contains)
                                      ? function (t, e) {
                                            var i =
                                                    9 === t.nodeType
                                                        ? t.documentElement
                                                        : t,
                                                s = e && e.parentNode;
                                            return (
                                                t === s ||
                                                !(
                                                    !s ||
                                                    1 !== s.nodeType ||
                                                    !(i.contains
                                                        ? i.contains(s)
                                                        : t.compareDocumentPosition &&
                                                          16 &
                                                              t.compareDocumentPosition(
                                                                  s
                                                              ))
                                                )
                                            );
                                        }
                                      : function (t, e) {
                                            if (e)
                                                for (; (e = e.parentNode); )
                                                    if (e === t) return !0;
                                            return !1;
                                        }),
                              (E = e
                                  ? function (t, e) {
                                        if (t === e) return (u = !0), 0;
                                        var s =
                                            !t.compareDocumentPosition -
                                            !e.compareDocumentPosition;
                                        return (
                                            s ||
                                            (1 &
                                                (s =
                                                    (t.ownerDocument || t) ===
                                                    (e.ownerDocument || e)
                                                        ? t.compareDocumentPosition(
                                                              e
                                                          )
                                                        : 1) ||
                                            (!i.sortDetached &&
                                                e.compareDocumentPosition(t) ===
                                                    s)
                                                ? t === p ||
                                                  (t.ownerDocument === x &&
                                                      b(x, t))
                                                    ? -1
                                                    : e === p ||
                                                      (e.ownerDocument === x &&
                                                          b(x, e))
                                                    ? 1
                                                    : d
                                                    ? O(d, t) - O(d, e)
                                                    : 0
                                                : 4 & s
                                                ? -1
                                                : 1)
                                        );
                                    }
                                  : function (t, e) {
                                        if (t === e) return (u = !0), 0;
                                        var i,
                                            s = 0,
                                            n = t.parentNode,
                                            o = e.parentNode,
                                            r = [t],
                                            a = [e];
                                        if (!n || !o)
                                            return t === p
                                                ? -1
                                                : e === p
                                                ? 1
                                                : n
                                                ? -1
                                                : o
                                                ? 1
                                                : d
                                                ? O(d, t) - O(d, e)
                                                : 0;
                                        if (n === o) return ct(t, e);
                                        for (i = t; (i = i.parentNode); )
                                            r.unshift(i);
                                        for (i = e; (i = i.parentNode); )
                                            a.unshift(i);
                                        for (; r[s] === a[s]; ) s++;
                                        return s
                                            ? ct(r[s], a[s])
                                            : r[s] === x
                                            ? -1
                                            : a[s] === x
                                            ? 1
                                            : 0;
                                    }),
                              p)
                            : p;
                    }),
                (at.matches = function (t, e) {
                    return at(t, null, null, e);
                }),
                (at.matchesSelector = function (t, e) {
                    if (
                        ((t.ownerDocument || t) !== p && c(t),
                        i.matchesSelector &&
                            g &&
                            !P[e + " "] &&
                            (!v || !v.test(e)) &&
                            (!m || !m.test(e)))
                    )
                        try {
                            var s = y.call(t, e);
                            if (
                                s ||
                                i.disconnectedMatch ||
                                (t.document && 11 !== t.document.nodeType)
                            )
                                return s;
                        } catch (t) {
                            P(e, !0);
                        }
                    return at(e, p, null, [t]).length > 0;
                }),
                (at.contains = function (t, e) {
                    return (t.ownerDocument || t) !== p && c(t), b(t, e);
                }),
                (at.attr = function (t, e) {
                    (t.ownerDocument || t) !== p && c(t);
                    var n = s.attrHandle[e.toLowerCase()],
                        o =
                            n && I.call(s.attrHandle, e.toLowerCase())
                                ? n(t, e, !g)
                                : void 0;
                    return void 0 !== o
                        ? o
                        : i.attributes || !g
                        ? t.getAttribute(e)
                        : (o = t.getAttributeNode(e)) && o.specified
                        ? o.value
                        : null;
                }),
                (at.escape = function (t) {
                    return (t + "").replace(st, nt);
                }),
                (at.error = function (t) {
                    throw new Error(
                        "Syntax error, unrecognized expression: " + t
                    );
                }),
                (at.uniqueSort = function (t) {
                    var e,
                        s = [],
                        n = 0,
                        o = 0;
                    if (
                        ((u = !i.detectDuplicates),
                        (d = !i.sortStable && t.slice(0)),
                        t.sort(E),
                        u)
                    ) {
                        for (; (e = t[o++]); ) e === t[o] && (n = s.push(o));
                        for (; n--; ) t.splice(s[n], 1);
                    }
                    return (d = null), t;
                }),
                (n = at.getText =
                    function (t) {
                        var e,
                            i = "",
                            s = 0,
                            o = t.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof t.textContent)
                                    return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    i += n(t);
                            } else if (3 === o || 4 === o) return t.nodeValue;
                        } else for (; (e = t[s++]); ) i += n(e);
                        return i;
                    }),
                ((s = at.selectors =
                    {
                        cacheLength: 50,
                        createPseudo: ht,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": { dir: "parentNode", first: !0 },
                            " ": { dir: "parentNode" },
                            "+": { dir: "previousSibling", first: !0 },
                            "~": { dir: "previousSibling" },
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return (
                                    (t[1] = t[1].replace(et, it)),
                                    (t[3] = (
                                        t[3] ||
                                        t[4] ||
                                        t[5] ||
                                        ""
                                    ).replace(et, it)),
                                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                    t.slice(0, 4)
                                );
                            },
                            CHILD: function (t) {
                                return (
                                    (t[1] = t[1].toLowerCase()),
                                    "nth" === t[1].slice(0, 3)
                                        ? (t[3] || at.error(t[0]),
                                          (t[4] = +(t[4]
                                              ? t[5] + (t[6] || 1)
                                              : 2 *
                                                ("even" === t[3] ||
                                                    "odd" === t[3]))),
                                          (t[5] = +(
                                              t[7] + t[8] || "odd" === t[3]
                                          )))
                                        : t[3] && at.error(t[0]),
                                    t
                                );
                            },
                            PSEUDO: function (t) {
                                var e,
                                    i = !t[6] && t[2];
                                return X.CHILD.test(t[0])
                                    ? null
                                    : (t[3]
                                          ? (t[2] = t[4] || t[5] || "")
                                          : i &&
                                            U.test(i) &&
                                            (e = r(i, !0)) &&
                                            (e =
                                                i.indexOf(")", i.length - e) -
                                                i.length) &&
                                            ((t[0] = t[0].slice(0, e)),
                                            (t[2] = i.slice(0, e))),
                                      t.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(et, it).toLowerCase();
                                return "*" === t
                                    ? function () {
                                          return !0;
                                      }
                                    : function (t) {
                                          return (
                                              t.nodeName &&
                                              t.nodeName.toLowerCase() === e
                                          );
                                      };
                            },
                            CLASS: function (t) {
                                var e = C[t + " "];
                                return (
                                    e ||
                                    ((e = new RegExp(
                                        "(^|" + j + ")" + t + "(" + j + "|$)"
                                    )) &&
                                        C(t, function (t) {
                                            return e.test(
                                                ("string" ==
                                                    typeof t.className &&
                                                    t.className) ||
                                                    (void 0 !==
                                                        t.getAttribute &&
                                                        t.getAttribute(
                                                            "class"
                                                        )) ||
                                                    ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function (t, e, i) {
                                return function (s) {
                                    var n = at.attr(s, t);
                                    return null == n
                                        ? "!=" === e
                                        : !e ||
                                              ((n += ""),
                                              "=" === e
                                                  ? n === i
                                                  : "!=" === e
                                                  ? n !== i
                                                  : "^=" === e
                                                  ? i && 0 === n.indexOf(i)
                                                  : "*=" === e
                                                  ? i && n.indexOf(i) > -1
                                                  : "$=" === e
                                                  ? i &&
                                                    n.slice(-i.length) === i
                                                  : "~=" === e
                                                  ? (
                                                        " " +
                                                        n.replace(q, " ") +
                                                        " "
                                                    ).indexOf(i) > -1
                                                  : "|=" === e &&
                                                    (n === i ||
                                                        n.slice(
                                                            0,
                                                            i.length + 1
                                                        ) ===
                                                            i + "-"));
                                };
                            },
                            CHILD: function (t, e, i, s, n) {
                                var o = "nth" !== t.slice(0, 3),
                                    r = "last" !== t.slice(-4),
                                    a = "of-type" === e;
                                return 1 === s && 0 === n
                                    ? function (t) {
                                          return !!t.parentNode;
                                      }
                                    : function (e, i, l) {
                                          var h,
                                              d,
                                              u,
                                              c,
                                              p,
                                              f,
                                              g =
                                                  o !== r
                                                      ? "nextSibling"
                                                      : "previousSibling",
                                              m = e.parentNode,
                                              v = a && e.nodeName.toLowerCase(),
                                              y = !l && !a,
                                              b = !1;
                                          if (m) {
                                              if (o) {
                                                  for (; g; ) {
                                                      for (c = e; (c = c[g]); )
                                                          if (
                                                              a
                                                                  ? c.nodeName.toLowerCase() ===
                                                                    v
                                                                  : 1 ===
                                                                    c.nodeType
                                                          )
                                                              return !1;
                                                      f = g =
                                                          "only" === t &&
                                                          !f &&
                                                          "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (
                                                  ((f = [
                                                      r
                                                          ? m.firstChild
                                                          : m.lastChild,
                                                  ]),
                                                  r && y)
                                              ) {
                                                  for (
                                                      b =
                                                          (p =
                                                              (h =
                                                                  (d =
                                                                      (u =
                                                                          (c =
                                                                              m)[
                                                                              w
                                                                          ] ||
                                                                          (c[
                                                                              w
                                                                          ] =
                                                                              {}))[
                                                                          c
                                                                              .uniqueID
                                                                      ] ||
                                                                      (u[
                                                                          c.uniqueID
                                                                      ] = {}))[
                                                                      t
                                                                  ] ||
                                                                  [])[0] ===
                                                                  S && h[1]) &&
                                                          h[2],
                                                          c =
                                                              p &&
                                                              m.childNodes[p];
                                                      (c =
                                                          (++p && c && c[g]) ||
                                                          (b = p = 0) ||
                                                          f.pop());

                                                  )
                                                      if (
                                                          1 === c.nodeType &&
                                                          ++b &&
                                                          c === e
                                                      ) {
                                                          d[t] = [S, p, b];
                                                          break;
                                                      }
                                              } else if (
                                                  (y &&
                                                      (b = p =
                                                          (h =
                                                              (d =
                                                                  (u =
                                                                      (c = e)[
                                                                          w
                                                                      ] ||
                                                                      (c[w] =
                                                                          {}))[
                                                                      c.uniqueID
                                                                  ] ||
                                                                  (u[
                                                                      c.uniqueID
                                                                  ] = {}))[t] ||
                                                              [])[0] === S &&
                                                          h[1]),
                                                  !1 === b)
                                              )
                                                  for (
                                                      ;
                                                      (c =
                                                          (++p && c && c[g]) ||
                                                          (b = p = 0) ||
                                                          f.pop()) &&
                                                      ((a
                                                          ? c.nodeName.toLowerCase() !==
                                                            v
                                                          : 1 !== c.nodeType) ||
                                                          !++b ||
                                                          (y &&
                                                              ((d =
                                                                  (u =
                                                                      c[w] ||
                                                                      (c[w] =
                                                                          {}))[
                                                                      c.uniqueID
                                                                  ] ||
                                                                  (u[
                                                                      c.uniqueID
                                                                  ] = {}))[t] =
                                                                  [S, b]),
                                                          c !== e));

                                                  );
                                              return (
                                                  (b -= n) === s ||
                                                  (b % s == 0 && b / s >= 0)
                                              );
                                          }
                                      };
                            },
                            PSEUDO: function (t, e) {
                                var i,
                                    n =
                                        s.pseudos[t] ||
                                        s.setFilters[t.toLowerCase()] ||
                                        at.error("unsupported pseudo: " + t);
                                return n[w]
                                    ? n(e)
                                    : n.length > 1
                                    ? ((i = [t, t, "", e]),
                                      s.setFilters.hasOwnProperty(
                                          t.toLowerCase()
                                      )
                                          ? ht(function (t, i) {
                                                for (
                                                    var s,
                                                        o = n(t, e),
                                                        r = o.length;
                                                    r--;

                                                )
                                                    t[(s = O(t, o[r]))] = !(i[
                                                        s
                                                    ] = o[r]);
                                            })
                                          : function (t) {
                                                return n(t, 0, i);
                                            })
                                    : n;
                            },
                        },
                        pseudos: {
                            not: ht(function (t) {
                                var e = [],
                                    i = [],
                                    s = a(t.replace(F, "$1"));
                                return s[w]
                                    ? ht(function (t, e, i, n) {
                                          for (
                                              var o,
                                                  r = s(t, null, n, []),
                                                  a = t.length;
                                              a--;

                                          )
                                              (o = r[a]) &&
                                                  (t[a] = !(e[a] = o));
                                      })
                                    : function (t, n, o) {
                                          return (
                                              (e[0] = t),
                                              s(e, null, o, i),
                                              (e[0] = null),
                                              !i.pop()
                                          );
                                      };
                            }),
                            has: ht(function (t) {
                                return function (e) {
                                    return at(t, e).length > 0;
                                };
                            }),
                            contains: ht(function (t) {
                                return (
                                    (t = t.replace(et, it)),
                                    function (e) {
                                        return (
                                            (e.textContent || n(e)).indexOf(t) >
                                            -1
                                        );
                                    }
                                );
                            }),
                            lang: ht(function (t) {
                                return (
                                    G.test(t || "") ||
                                        at.error("unsupported lang: " + t),
                                    (t = t.replace(et, it).toLowerCase()),
                                    function (e) {
                                        var i;
                                        do {
                                            if (
                                                (i = g
                                                    ? e.lang
                                                    : e.getAttribute(
                                                          "xml:lang"
                                                      ) ||
                                                      e.getAttribute("lang"))
                                            )
                                                return (
                                                    (i = i.toLowerCase()) ===
                                                        t ||
                                                    0 === i.indexOf(t + "-")
                                                );
                                        } while (
                                            (e = e.parentNode) &&
                                            1 === e.nodeType
                                        );
                                        return !1;
                                    }
                                );
                            }),
                            target: function (e) {
                                var i = t.location && t.location.hash;
                                return i && i.slice(1) === e.id;
                            },
                            root: function (t) {
                                return t === f;
                            },
                            focus: function (t) {
                                return (
                                    t === p.activeElement &&
                                    (!p.hasFocus || p.hasFocus()) &&
                                    !!(t.type || t.href || ~t.tabIndex)
                                );
                            },
                            enabled: gt(!1),
                            disabled: gt(!0),
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return (
                                    ("input" === e && !!t.checked) ||
                                    ("option" === e && !!t.selected)
                                );
                            },
                            selected: function (t) {
                                return (
                                    t.parentNode && t.parentNode.selectedIndex,
                                    !0 === t.selected
                                );
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (t) {
                                return !s.pseudos.empty(t);
                            },
                            header: function (t) {
                                return K.test(t.nodeName);
                            },
                            input: function (t) {
                                return Z.test(t.nodeName);
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return (
                                    ("input" === e && "button" === t.type) ||
                                    "button" === e
                                );
                            },
                            text: function (t) {
                                var e;
                                return (
                                    "input" === t.nodeName.toLowerCase() &&
                                    "text" === t.type &&
                                    (null == (e = t.getAttribute("type")) ||
                                        "text" === e.toLowerCase())
                                );
                            },
                            first: mt(function () {
                                return [0];
                            }),
                            last: mt(function (t, e) {
                                return [e - 1];
                            }),
                            eq: mt(function (t, e, i) {
                                return [i < 0 ? i + e : i];
                            }),
                            even: mt(function (t, e) {
                                for (var i = 0; i < e; i += 2) t.push(i);
                                return t;
                            }),
                            odd: mt(function (t, e) {
                                for (var i = 1; i < e; i += 2) t.push(i);
                                return t;
                            }),
                            lt: mt(function (t, e, i) {
                                for (
                                    var s = i < 0 ? i + e : i > e ? e : i;
                                    --s >= 0;

                                )
                                    t.push(s);
                                return t;
                            }),
                            gt: mt(function (t, e, i) {
                                for (var s = i < 0 ? i + e : i; ++s < e; )
                                    t.push(s);
                                return t;
                            }),
                        },
                    }).pseudos.nth = s.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    s.pseudos[e] = pt(e);
                for (e in { submit: !0, reset: !0 }) s.pseudos[e] = ft(e);
                function yt() {}
                function bt(t) {
                    for (var e = 0, i = t.length, s = ""; e < i; e++)
                        s += t[e].value;
                    return s;
                }
                function wt(t, e, i) {
                    var s = e.dir,
                        n = e.next,
                        o = n || s,
                        r = i && "parentNode" === o,
                        a = _++;
                    return e.first
                        ? function (e, i, n) {
                              for (; (e = e[s]); )
                                  if (1 === e.nodeType || r) return t(e, i, n);
                              return !1;
                          }
                        : function (e, i, l) {
                              var h,
                                  d,
                                  u,
                                  c = [S, a];
                              if (l) {
                                  for (; (e = e[s]); )
                                      if ((1 === e.nodeType || r) && t(e, i, l))
                                          return !0;
                              } else
                                  for (; (e = e[s]); )
                                      if (1 === e.nodeType || r)
                                          if (
                                              ((d =
                                                  (u = e[w] || (e[w] = {}))[
                                                      e.uniqueID
                                                  ] || (u[e.uniqueID] = {})),
                                              n &&
                                                  n ===
                                                      e.nodeName.toLowerCase())
                                          )
                                              e = e[s] || e;
                                          else {
                                              if (
                                                  (h = d[o]) &&
                                                  h[0] === S &&
                                                  h[1] === a
                                              )
                                                  return (c[2] = h[2]);
                                              if (
                                                  ((d[o] = c),
                                                  (c[2] = t(e, i, l)))
                                              )
                                                  return !0;
                                          }
                              return !1;
                          };
                }
                function xt(t) {
                    return t.length > 1
                        ? function (e, i, s) {
                              for (var n = t.length; n--; )
                                  if (!t[n](e, i, s)) return !1;
                              return !0;
                          }
                        : t[0];
                }
                function St(t, e, i, s, n) {
                    for (
                        var o, r = [], a = 0, l = t.length, h = null != e;
                        a < l;
                        a++
                    )
                        (o = t[a]) &&
                            ((i && !i(o, s, n)) || (r.push(o), h && e.push(a)));
                    return r;
                }
                function _t(t, e, i, s, n, o) {
                    return (
                        s && !s[w] && (s = _t(s)),
                        n && !n[w] && (n = _t(n, o)),
                        ht(function (o, r, a, l) {
                            var h,
                                d,
                                u,
                                c = [],
                                p = [],
                                f = r.length,
                                g =
                                    o ||
                                    (function (t, e, i) {
                                        for (
                                            var s = 0, n = e.length;
                                            s < n;
                                            s++
                                        )
                                            at(t, e[s], i);
                                        return i;
                                    })(e || "*", a.nodeType ? [a] : a, []),
                                m = !t || (!o && e) ? g : St(g, c, t, a, l),
                                v = i ? (n || (o ? t : f || s) ? [] : r) : m;
                            if ((i && i(m, v, a, l), s))
                                for (
                                    h = St(v, p), s(h, [], a, l), d = h.length;
                                    d--;

                                )
                                    (u = h[d]) && (v[p[d]] = !(m[p[d]] = u));
                            if (o) {
                                if (n || t) {
                                    if (n) {
                                        for (h = [], d = v.length; d--; )
                                            (u = v[d]) && h.push((m[d] = u));
                                        n(null, (v = []), h, l);
                                    }
                                    for (d = v.length; d--; )
                                        (u = v[d]) &&
                                            (h = n ? O(o, u) : c[d]) > -1 &&
                                            (o[h] = !(r[h] = u));
                                }
                            } else (v = St(v === r ? v.splice(f, v.length) : v)), n ? n(null, r, v, l) : D.apply(r, v);
                        })
                    );
                }
                function Ct(t) {
                    for (
                        var e,
                            i,
                            n,
                            o = t.length,
                            r = s.relative[t[0].type],
                            a = r || s.relative[" "],
                            l = r ? 1 : 0,
                            d = wt(
                                function (t) {
                                    return t === e;
                                },
                                a,
                                !0
                            ),
                            u = wt(
                                function (t) {
                                    return O(e, t) > -1;
                                },
                                a,
                                !0
                            ),
                            c = [
                                function (t, i, s) {
                                    var n =
                                        (!r && (s || i !== h)) ||
                                        ((e = i).nodeType
                                            ? d(t, i, s)
                                            : u(t, i, s));
                                    return (e = null), n;
                                },
                            ];
                        l < o;
                        l++
                    )
                        if ((i = s.relative[t[l].type])) c = [wt(xt(c), i)];
                        else {
                            if (
                                (i = s.filter[t[l].type].apply(
                                    null,
                                    t[l].matches
                                ))[w]
                            ) {
                                for (
                                    n = ++l;
                                    n < o && !s.relative[t[n].type];
                                    n++
                                );
                                return _t(
                                    l > 1 && xt(c),
                                    l > 1 &&
                                        bt(
                                            t.slice(0, l - 1).concat({
                                                value:
                                                    " " === t[l - 2].type
                                                        ? "*"
                                                        : "",
                                            })
                                        ).replace(F, "$1"),
                                    i,
                                    l < n && Ct(t.slice(l, n)),
                                    n < o && Ct((t = t.slice(n))),
                                    n < o && bt(t)
                                );
                            }
                            c.push(i);
                        }
                    return xt(c);
                }
                return (
                    (yt.prototype = s.filters = s.pseudos),
                    (s.setFilters = new yt()),
                    (r = at.tokenize =
                        function (t, e) {
                            var i,
                                n,
                                o,
                                r,
                                a,
                                l,
                                h,
                                d = T[t + " "];
                            if (d) return e ? 0 : d.slice(0);
                            for (a = t, l = [], h = s.preFilter; a; ) {
                                for (r in ((i && !(n = W.exec(a))) ||
                                    (n && (a = a.slice(n[0].length) || a),
                                    l.push((o = []))),
                                (i = !1),
                                (n = B.exec(a)) &&
                                    ((i = n.shift()),
                                    o.push({
                                        value: i,
                                        type: n[0].replace(F, " "),
                                    }),
                                    (a = a.slice(i.length))),
                                s.filter))
                                    !(n = X[r].exec(a)) ||
                                        (h[r] && !(n = h[r](n))) ||
                                        ((i = n.shift()),
                                        o.push({
                                            value: i,
                                            type: r,
                                            matches: n,
                                        }),
                                        (a = a.slice(i.length)));
                                if (!i) break;
                            }
                            return e
                                ? a.length
                                : a
                                ? at.error(t)
                                : T(t, l).slice(0);
                        }),
                    (a = at.compile =
                        function (t, e) {
                            var i,
                                n = [],
                                o = [],
                                a = $[t + " "];
                            if (!a) {
                                for (e || (e = r(t)), i = e.length; i--; )
                                    (a = Ct(e[i]))[w] ? n.push(a) : o.push(a);
                                (a = $(
                                    t,
                                    (function (t, e) {
                                        var i = e.length > 0,
                                            n = t.length > 0,
                                            o = function (o, r, a, l, d) {
                                                var u,
                                                    f,
                                                    m,
                                                    v = 0,
                                                    y = "0",
                                                    b = o && [],
                                                    w = [],
                                                    x = h,
                                                    _ =
                                                        o ||
                                                        (n &&
                                                            s.find.TAG("*", d)),
                                                    C = (S +=
                                                        null == x
                                                            ? 1
                                                            : Math.random() ||
                                                              0.1),
                                                    T = _.length;
                                                for (
                                                    d &&
                                                    (h = r === p || r || d);
                                                    y !== T &&
                                                    null != (u = _[y]);
                                                    y++
                                                ) {
                                                    if (n && u) {
                                                        for (
                                                            f = 0,
                                                                r ||
                                                                    u.ownerDocument ===
                                                                        p ||
                                                                    (c(u),
                                                                    (a = !g));
                                                            (m = t[f++]);

                                                        )
                                                            if (
                                                                m(u, r || p, a)
                                                            ) {
                                                                l.push(u);
                                                                break;
                                                            }
                                                        d && (S = C);
                                                    }
                                                    i &&
                                                        ((u = !m && u) && v--,
                                                        o && b.push(u));
                                                }
                                                if (((v += y), i && y !== v)) {
                                                    for (f = 0; (m = e[f++]); )
                                                        m(b, w, r, a);
                                                    if (o) {
                                                        if (v > 0)
                                                            for (; y--; )
                                                                b[y] ||
                                                                    w[y] ||
                                                                    (w[y] =
                                                                        A.call(
                                                                            l
                                                                        ));
                                                        w = St(w);
                                                    }
                                                    D.apply(l, w),
                                                        d &&
                                                            !o &&
                                                            w.length > 0 &&
                                                            v + e.length > 1 &&
                                                            at.uniqueSort(l);
                                                }
                                                return (
                                                    d && ((S = C), (h = x)), b
                                                );
                                            };
                                        return i ? ht(o) : o;
                                    })(o, n)
                                )).selector = t;
                            }
                            return a;
                        }),
                    (l = at.select =
                        function (t, e, i, n) {
                            var o,
                                l,
                                h,
                                d,
                                u,
                                c = "function" == typeof t && t,
                                p = !n && r((t = c.selector || t));
                            if (((i = i || []), 1 === p.length)) {
                                if (
                                    (l = p[0] = p[0].slice(0)).length > 2 &&
                                    "ID" === (h = l[0]).type &&
                                    9 === e.nodeType &&
                                    g &&
                                    s.relative[l[1].type]
                                ) {
                                    if (
                                        !(e = (s.find.ID(
                                            h.matches[0].replace(et, it),
                                            e
                                        ) || [])[0])
                                    )
                                        return i;
                                    c && (e = e.parentNode),
                                        (t = t.slice(l.shift().value.length));
                                }
                                for (
                                    o = X.needsContext.test(t) ? 0 : l.length;
                                    o-- &&
                                    ((h = l[o]), !s.relative[(d = h.type)]);

                                )
                                    if (
                                        (u = s.find[d]) &&
                                        (n = u(
                                            h.matches[0].replace(et, it),
                                            (tt.test(l[0].type) &&
                                                vt(e.parentNode)) ||
                                                e
                                        ))
                                    ) {
                                        if (
                                            (l.splice(o, 1),
                                            !(t = n.length && bt(l)))
                                        )
                                            return D.apply(i, n), i;
                                        break;
                                    }
                            }
                            return (
                                (c || a(t, p))(
                                    n,
                                    e,
                                    !g,
                                    i,
                                    !e || (tt.test(t) && vt(e.parentNode)) || e
                                ),
                                i
                            );
                        }),
                    (i.sortStable = w.split("").sort(E).join("") === w),
                    (i.detectDuplicates = !!u),
                    c(),
                    (i.sortDetached = dt(function (t) {
                        return (
                            1 &
                            t.compareDocumentPosition(
                                p.createElement("fieldset")
                            )
                        );
                    })),
                    dt(function (t) {
                        return (
                            (t.innerHTML = "<a href='#'></a>"),
                            "#" === t.firstChild.getAttribute("href")
                        );
                    }) ||
                        ut("type|href|height|width", function (t, e, i) {
                            if (!i)
                                return t.getAttribute(
                                    e,
                                    "type" === e.toLowerCase() ? 1 : 2
                                );
                        }),
                    (i.attributes &&
                        dt(function (t) {
                            return (
                                (t.innerHTML = "<input/>"),
                                t.firstChild.setAttribute("value", ""),
                                "" === t.firstChild.getAttribute("value")
                            );
                        })) ||
                        ut("value", function (t, e, i) {
                            if (!i && "input" === t.nodeName.toLowerCase())
                                return t.defaultValue;
                        }),
                    dt(function (t) {
                        return null == t.getAttribute("disabled");
                    }) ||
                        ut(M, function (t, e, i) {
                            var s;
                            if (!i)
                                return !0 === t[e]
                                    ? e.toLowerCase()
                                    : (s = t.getAttributeNode(e)) && s.specified
                                    ? s.value
                                    : null;
                        }),
                    at
                );
            })(i);
            (_.find = $),
                (_.expr = $.selectors),
                (_.expr[":"] = _.expr.pseudos),
                (_.uniqueSort = _.unique = $.uniqueSort),
                (_.text = $.getText),
                (_.isXMLDoc = $.isXML),
                (_.contains = $.contains),
                (_.escapeSelector = $.escape);
            var P = function (t, e, i) {
                    for (
                        var s = [], n = void 0 !== i;
                        (t = t[e]) && 9 !== t.nodeType;

                    )
                        if (1 === t.nodeType) {
                            if (n && _(t).is(i)) break;
                            s.push(t);
                        }
                    return s;
                },
                E = function (t, e) {
                    for (var i = []; t; t = t.nextSibling)
                        1 === t.nodeType && t !== e && i.push(t);
                    return i;
                },
                I = _.expr.match.needsContext;
            function z(t, e) {
                return (
                    t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                );
            }
            var A =
                /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function k(t, e, i) {
                return y(e)
                    ? _.grep(t, function (t, s) {
                          return !!e.call(t, s, t) !== i;
                      })
                    : e.nodeType
                    ? _.grep(t, function (t) {
                          return (t === e) !== i;
                      })
                    : "string" != typeof e
                    ? _.grep(t, function (t) {
                          return u.call(e, t) > -1 !== i;
                      })
                    : _.filter(e, t, i);
            }
            (_.filter = function (t, e, i) {
                var s = e[0];
                return (
                    i && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === s.nodeType
                        ? _.find.matchesSelector(s, t)
                            ? [s]
                            : []
                        : _.find.matches(
                              t,
                              _.grep(e, function (t) {
                                  return 1 === t.nodeType;
                              })
                          )
                );
            }),
                _.fn.extend({
                    find: function (t) {
                        var e,
                            i,
                            s = this.length,
                            n = this;
                        if ("string" != typeof t)
                            return this.pushStack(
                                _(t).filter(function () {
                                    for (e = 0; e < s; e++)
                                        if (_.contains(n[e], this)) return !0;
                                })
                            );
                        for (i = this.pushStack([]), e = 0; e < s; e++)
                            _.find(t, n[e], i);
                        return s > 1 ? _.uniqueSort(i) : i;
                    },
                    filter: function (t) {
                        return this.pushStack(k(this, t || [], !1));
                    },
                    not: function (t) {
                        return this.pushStack(k(this, t || [], !0));
                    },
                    is: function (t) {
                        return !!k(
                            this,
                            "string" == typeof t && I.test(t) ? _(t) : t || [],
                            !1
                        ).length;
                    },
                });
            var D,
                L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((_.fn.init = function (t, e, i) {
                var s, n;
                if (!t) return this;
                if (((i = i || D), "string" == typeof t)) {
                    if (
                        !(s =
                            "<" === t[0] &&
                            ">" === t[t.length - 1] &&
                            t.length >= 3
                                ? [null, t, null]
                                : L.exec(t)) ||
                        (!s[1] && e)
                    )
                        return !e || e.jquery
                            ? (e || i).find(t)
                            : this.constructor(e).find(t);
                    if (s[1]) {
                        if (
                            ((e = e instanceof _ ? e[0] : e),
                            _.merge(
                                this,
                                _.parseHTML(
                                    s[1],
                                    e && e.nodeType ? e.ownerDocument || e : r,
                                    !0
                                )
                            ),
                            A.test(s[1]) && _.isPlainObject(e))
                        )
                            for (s in e)
                                y(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
                        return this;
                    }
                    return (
                        (n = r.getElementById(s[2])) &&
                            ((this[0] = n), (this.length = 1)),
                        this
                    );
                }
                return t.nodeType
                    ? ((this[0] = t), (this.length = 1), this)
                    : y(t)
                    ? void 0 !== i.ready
                        ? i.ready(t)
                        : t(_)
                    : _.makeArray(t, this);
            }).prototype = _.fn),
                (D = _(r));
            var O = /^(?:parents|prev(?:Until|All))/,
                M = { children: !0, contents: !0, next: !0, prev: !0 };
            function j(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType; );
                return t;
            }
            _.fn.extend({
                has: function (t) {
                    var e = _(t, this),
                        i = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < i; t++)
                            if (_.contains(this, e[t])) return !0;
                    });
                },
                closest: function (t, e) {
                    var i,
                        s = 0,
                        n = this.length,
                        o = [],
                        r = "string" != typeof t && _(t);
                    if (!I.test(t))
                        for (; s < n; s++)
                            for (i = this[s]; i && i !== e; i = i.parentNode)
                                if (
                                    i.nodeType < 11 &&
                                    (r
                                        ? r.index(i) > -1
                                        : 1 === i.nodeType &&
                                          _.find.matchesSelector(i, t))
                                ) {
                                    o.push(i);
                                    break;
                                }
                    return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o);
                },
                index: function (t) {
                    return t
                        ? "string" == typeof t
                            ? u.call(_(t), this[0])
                            : u.call(this, t.jquery ? t[0] : t)
                        : this[0] && this[0].parentNode
                        ? this.first().prevAll().length
                        : -1;
                },
                add: function (t, e) {
                    return this.pushStack(
                        _.uniqueSort(_.merge(this.get(), _(t, e)))
                    );
                },
                addBack: function (t) {
                    return this.add(
                        null == t ? this.prevObject : this.prevObject.filter(t)
                    );
                },
            }),
                _.each(
                    {
                        parent: function (t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null;
                        },
                        parents: function (t) {
                            return P(t, "parentNode");
                        },
                        parentsUntil: function (t, e, i) {
                            return P(t, "parentNode", i);
                        },
                        next: function (t) {
                            return j(t, "nextSibling");
                        },
                        prev: function (t) {
                            return j(t, "previousSibling");
                        },
                        nextAll: function (t) {
                            return P(t, "nextSibling");
                        },
                        prevAll: function (t) {
                            return P(t, "previousSibling");
                        },
                        nextUntil: function (t, e, i) {
                            return P(t, "nextSibling", i);
                        },
                        prevUntil: function (t, e, i) {
                            return P(t, "previousSibling", i);
                        },
                        siblings: function (t) {
                            return E((t.parentNode || {}).firstChild, t);
                        },
                        children: function (t) {
                            return E(t.firstChild);
                        },
                        contents: function (t) {
                            return void 0 !== t.contentDocument
                                ? t.contentDocument
                                : (z(t, "template") && (t = t.content || t),
                                  _.merge([], t.childNodes));
                        },
                    },
                    function (t, e) {
                        _.fn[t] = function (i, s) {
                            var n = _.map(this, e, i);
                            return (
                                "Until" !== t.slice(-5) && (s = i),
                                s &&
                                    "string" == typeof s &&
                                    (n = _.filter(s, n)),
                                this.length > 1 &&
                                    (M[t] || _.uniqueSort(n),
                                    O.test(t) && n.reverse()),
                                this.pushStack(n)
                            );
                        };
                    }
                );
            var R = /[^\x20\t\r\n\f]+/g;
            function H(t) {
                return t;
            }
            function N(t) {
                throw t;
            }
            function q(t, e, i, s) {
                var n;
                try {
                    t && y((n = t.promise))
                        ? n.call(t).done(e).fail(i)
                        : t && y((n = t.then))
                        ? n.call(t, e, i)
                        : e.apply(void 0, [t].slice(s));
                } catch (t) {
                    i.apply(void 0, [t]);
                }
            }
            (_.Callbacks = function (t) {
                t =
                    "string" == typeof t
                        ? (function (t) {
                              var e = {};
                              return (
                                  _.each(t.match(R) || [], function (t, i) {
                                      e[i] = !0;
                                  }),
                                  e
                              );
                          })(t)
                        : _.extend({}, t);
                var e,
                    i,
                    s,
                    n,
                    o = [],
                    r = [],
                    a = -1,
                    l = function () {
                        for (n = n || t.once, s = e = !0; r.length; a = -1)
                            for (i = r.shift(); ++a < o.length; )
                                !1 === o[a].apply(i[0], i[1]) &&
                                    t.stopOnFalse &&
                                    ((a = o.length), (i = !1));
                        t.memory || (i = !1), (e = !1), n && (o = i ? [] : "");
                    },
                    h = {
                        add: function () {
                            return (
                                o &&
                                    (i && !e && ((a = o.length - 1), r.push(i)),
                                    (function e(i) {
                                        _.each(i, function (i, s) {
                                            y(s)
                                                ? (t.unique && h.has(s)) ||
                                                  o.push(s)
                                                : s &&
                                                  s.length &&
                                                  "string" !== S(s) &&
                                                  e(s);
                                        });
                                    })(arguments),
                                    i && !e && l()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                _.each(arguments, function (t, e) {
                                    for (var i; (i = _.inArray(e, o, i)) > -1; )
                                        o.splice(i, 1), i <= a && a--;
                                }),
                                this
                            );
                        },
                        has: function (t) {
                            return t ? _.inArray(t, o) > -1 : o.length > 0;
                        },
                        empty: function () {
                            return o && (o = []), this;
                        },
                        disable: function () {
                            return (n = r = []), (o = i = ""), this;
                        },
                        disabled: function () {
                            return !o;
                        },
                        lock: function () {
                            return (n = r = []), i || e || (o = i = ""), this;
                        },
                        locked: function () {
                            return !!n;
                        },
                        fireWith: function (t, i) {
                            return (
                                n ||
                                    ((i = [
                                        t,
                                        (i = i || []).slice ? i.slice() : i,
                                    ]),
                                    r.push(i),
                                    e || l()),
                                this
                            );
                        },
                        fire: function () {
                            return h.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!s;
                        },
                    };
                return h;
            }),
                _.extend({
                    Deferred: function (t) {
                        var e = [
                                [
                                    "notify",
                                    "progress",
                                    _.Callbacks("memory"),
                                    _.Callbacks("memory"),
                                    2,
                                ],
                                [
                                    "resolve",
                                    "done",
                                    _.Callbacks("once memory"),
                                    _.Callbacks("once memory"),
                                    0,
                                    "resolved",
                                ],
                                [
                                    "reject",
                                    "fail",
                                    _.Callbacks("once memory"),
                                    _.Callbacks("once memory"),
                                    1,
                                    "rejected",
                                ],
                            ],
                            s = "pending",
                            n = {
                                state: function () {
                                    return s;
                                },
                                always: function () {
                                    return (
                                        o.done(arguments).fail(arguments), this
                                    );
                                },
                                catch: function (t) {
                                    return n.then(null, t);
                                },
                                pipe: function () {
                                    var t = arguments;
                                    return _.Deferred(function (i) {
                                        _.each(e, function (e, s) {
                                            var n = y(t[s[4]]) && t[s[4]];
                                            o[s[1]](function () {
                                                var t =
                                                    n &&
                                                    n.apply(this, arguments);
                                                t && y(t.promise)
                                                    ? t
                                                          .promise()
                                                          .progress(i.notify)
                                                          .done(i.resolve)
                                                          .fail(i.reject)
                                                    : i[s[0] + "With"](
                                                          this,
                                                          n ? [t] : arguments
                                                      );
                                            });
                                        }),
                                            (t = null);
                                    }).promise();
                                },
                                then: function (t, s, n) {
                                    var o = 0;
                                    function r(t, e, s, n) {
                                        return function () {
                                            var a = this,
                                                l = arguments,
                                                h = function () {
                                                    var i, h;
                                                    if (!(t < o)) {
                                                        if (
                                                            (i = s.apply(
                                                                a,
                                                                l
                                                            )) === e.promise()
                                                        )
                                                            throw new TypeError(
                                                                "Thenable self-resolution"
                                                            );
                                                        (h =
                                                            i &&
                                                            ("object" ==
                                                                typeof i ||
                                                                "function" ==
                                                                    typeof i) &&
                                                            i.then),
                                                            y(h)
                                                                ? n
                                                                    ? h.call(
                                                                          i,
                                                                          r(
                                                                              o,
                                                                              e,
                                                                              H,
                                                                              n
                                                                          ),
                                                                          r(
                                                                              o,
                                                                              e,
                                                                              N,
                                                                              n
                                                                          )
                                                                      )
                                                                    : (o++,
                                                                      h.call(
                                                                          i,
                                                                          r(
                                                                              o,
                                                                              e,
                                                                              H,
                                                                              n
                                                                          ),
                                                                          r(
                                                                              o,
                                                                              e,
                                                                              N,
                                                                              n
                                                                          ),
                                                                          r(
                                                                              o,
                                                                              e,
                                                                              H,
                                                                              e.notifyWith
                                                                          )
                                                                      ))
                                                                : (s !== H &&
                                                                      ((a =
                                                                          void 0),
                                                                      (l = [
                                                                          i,
                                                                      ])),
                                                                  (
                                                                      n ||
                                                                      e.resolveWith
                                                                  )(a, l));
                                                    }
                                                },
                                                d = n
                                                    ? h
                                                    : function () {
                                                          try {
                                                              h();
                                                          } catch (i) {
                                                              _.Deferred
                                                                  .exceptionHook &&
                                                                  _.Deferred.exceptionHook(
                                                                      i,
                                                                      d.stackTrace
                                                                  ),
                                                                  t + 1 >= o &&
                                                                      (s !==
                                                                          N &&
                                                                          ((a =
                                                                              void 0),
                                                                          (l = [
                                                                              i,
                                                                          ])),
                                                                      e.rejectWith(
                                                                          a,
                                                                          l
                                                                      ));
                                                          }
                                                      };
                                            t
                                                ? d()
                                                : (_.Deferred.getStackHook &&
                                                      (d.stackTrace =
                                                          _.Deferred.getStackHook()),
                                                  i.setTimeout(d));
                                        };
                                    }
                                    return _.Deferred(function (i) {
                                        e[0][3].add(
                                            r(0, i, y(n) ? n : H, i.notifyWith)
                                        ),
                                            e[1][3].add(r(0, i, y(t) ? t : H)),
                                            e[2][3].add(r(0, i, y(s) ? s : N));
                                    }).promise();
                                },
                                promise: function (t) {
                                    return null != t ? _.extend(t, n) : n;
                                },
                            },
                            o = {};
                        return (
                            _.each(e, function (t, i) {
                                var r = i[2],
                                    a = i[5];
                                (n[i[1]] = r.add),
                                    a &&
                                        r.add(
                                            function () {
                                                s = a;
                                            },
                                            e[3 - t][2].disable,
                                            e[3 - t][3].disable,
                                            e[0][2].lock,
                                            e[0][3].lock
                                        ),
                                    r.add(i[3].fire),
                                    (o[i[0]] = function () {
                                        return (
                                            o[i[0] + "With"](
                                                this === o ? void 0 : this,
                                                arguments
                                            ),
                                            this
                                        );
                                    }),
                                    (o[i[0] + "With"] = r.fireWith);
                            }),
                            n.promise(o),
                            t && t.call(o, o),
                            o
                        );
                    },
                    when: function (t) {
                        var e = arguments.length,
                            i = e,
                            s = Array(i),
                            n = l.call(arguments),
                            o = _.Deferred(),
                            r = function (t) {
                                return function (i) {
                                    (s[t] = this),
                                        (n[t] =
                                            arguments.length > 1
                                                ? l.call(arguments)
                                                : i),
                                        --e || o.resolveWith(s, n);
                                };
                            };
                        if (
                            e <= 1 &&
                            (q(t, o.done(r(i)).resolve, o.reject, !e),
                            "pending" === o.state() || y(n[i] && n[i].then))
                        )
                            return o.then();
                        for (; i--; ) q(n[i], r(i), o.reject);
                        return o.promise();
                    },
                });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (_.Deferred.exceptionHook = function (t, e) {
                i.console &&
                    i.console.warn &&
                    t &&
                    F.test(t.name) &&
                    i.console.warn(
                        "jQuery.Deferred exception: " + t.message,
                        t.stack,
                        e
                    );
            }),
                (_.readyException = function (t) {
                    i.setTimeout(function () {
                        throw t;
                    });
                });
            var W = _.Deferred();
            function B() {
                r.removeEventListener("DOMContentLoaded", B),
                    i.removeEventListener("load", B),
                    _.ready();
            }
            (_.fn.ready = function (t) {
                return (
                    W.then(t).catch(function (t) {
                        _.readyException(t);
                    }),
                    this
                );
            }),
                _.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (t) {
                        (!0 === t ? --_.readyWait : _.isReady) ||
                            ((_.isReady = !0),
                            (!0 !== t && --_.readyWait > 0) ||
                                W.resolveWith(r, [_]));
                    },
                }),
                (_.ready.then = W.then),
                "complete" === r.readyState ||
                ("loading" !== r.readyState && !r.documentElement.doScroll)
                    ? i.setTimeout(_.ready)
                    : (r.addEventListener("DOMContentLoaded", B),
                      i.addEventListener("load", B));
            var V = function (t, e, i, s, n, o, r) {
                    var a = 0,
                        l = t.length,
                        h = null == i;
                    if ("object" === S(i))
                        for (a in ((n = !0), i)) V(t, e, a, i[a], !0, o, r);
                    else if (
                        void 0 !== s &&
                        ((n = !0),
                        y(s) || (r = !0),
                        h &&
                            (r
                                ? (e.call(t, s), (e = null))
                                : ((h = e),
                                  (e = function (t, e, i) {
                                      return h.call(_(t), i);
                                  }))),
                        e)
                    )
                        for (; a < l; a++)
                            e(t[a], i, r ? s : s.call(t[a], a, e(t[a], i)));
                    return n ? t : h ? e.call(t) : l ? e(t[0], i) : o;
                },
                U = /^-ms-/,
                G = /-([a-z])/g;
            function X(t, e) {
                return e.toUpperCase();
            }
            function Y(t) {
                return t.replace(U, "ms-").replace(G, X);
            }
            var Z = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            };
            function K() {
                this.expando = _.expando + K.uid++;
            }
            (K.uid = 1),
                (K.prototype = {
                    cache: function (t) {
                        var e = t[this.expando];
                        return (
                            e ||
                                ((e = {}),
                                Z(t) &&
                                    (t.nodeType
                                        ? (t[this.expando] = e)
                                        : Object.defineProperty(
                                              t,
                                              this.expando,
                                              { value: e, configurable: !0 }
                                          ))),
                            e
                        );
                    },
                    set: function (t, e, i) {
                        var s,
                            n = this.cache(t);
                        if ("string" == typeof e) n[Y(e)] = i;
                        else for (s in e) n[Y(s)] = e[s];
                        return n;
                    },
                    get: function (t, e) {
                        return void 0 === e
                            ? this.cache(t)
                            : t[this.expando] && t[this.expando][Y(e)];
                    },
                    access: function (t, e, i) {
                        return void 0 === e ||
                            (e && "string" == typeof e && void 0 === i)
                            ? this.get(t, e)
                            : (this.set(t, e, i), void 0 !== i ? i : e);
                    },
                    remove: function (t, e) {
                        var i,
                            s = t[this.expando];
                        if (void 0 !== s) {
                            if (void 0 !== e) {
                                i = (e = Array.isArray(e)
                                    ? e.map(Y)
                                    : (e = Y(e)) in s
                                    ? [e]
                                    : e.match(R) || []).length;
                                for (; i--; ) delete s[e[i]];
                            }
                            (void 0 === e || _.isEmptyObject(s)) &&
                                (t.nodeType
                                    ? (t[this.expando] = void 0)
                                    : delete t[this.expando]);
                        }
                    },
                    hasData: function (t) {
                        var e = t[this.expando];
                        return void 0 !== e && !_.isEmptyObject(e);
                    },
                });
            var J = new K(),
                Q = new K(),
                tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                et = /[A-Z]/g;
            function it(t, e, i) {
                var s;
                if (void 0 === i && 1 === t.nodeType)
                    if (
                        ((s = "data-" + e.replace(et, "-$&").toLowerCase()),
                        "string" == typeof (i = t.getAttribute(s)))
                    ) {
                        try {
                            i = (function (t) {
                                return (
                                    "true" === t ||
                                    ("false" !== t &&
                                        ("null" === t
                                            ? null
                                            : t === +t + ""
                                            ? +t
                                            : tt.test(t)
                                            ? JSON.parse(t)
                                            : t))
                                );
                            })(i);
                        } catch (t) {}
                        Q.set(t, e, i);
                    } else i = void 0;
                return i;
            }
            _.extend({
                hasData: function (t) {
                    return Q.hasData(t) || J.hasData(t);
                },
                data: function (t, e, i) {
                    return Q.access(t, e, i);
                },
                removeData: function (t, e) {
                    Q.remove(t, e);
                },
                _data: function (t, e, i) {
                    return J.access(t, e, i);
                },
                _removeData: function (t, e) {
                    J.remove(t, e);
                },
            }),
                _.fn.extend({
                    data: function (t, e) {
                        var i,
                            s,
                            n,
                            o = this[0],
                            r = o && o.attributes;
                        if (void 0 === t) {
                            if (
                                this.length &&
                                ((n = Q.get(o)),
                                1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                            ) {
                                for (i = r.length; i--; )
                                    r[i] &&
                                        0 ===
                                            (s = r[i].name).indexOf("data-") &&
                                        ((s = Y(s.slice(5))), it(o, s, n[s]));
                                J.set(o, "hasDataAttrs", !0);
                            }
                            return n;
                        }
                        return "object" == typeof t
                            ? this.each(function () {
                                  Q.set(this, t);
                              })
                            : V(
                                  this,
                                  function (e) {
                                      var i;
                                      if (o && void 0 === e)
                                          return void 0 !== (i = Q.get(o, t))
                                              ? i
                                              : void 0 !== (i = it(o, t))
                                              ? i
                                              : void 0;
                                      this.each(function () {
                                          Q.set(this, t, e);
                                      });
                                  },
                                  null,
                                  e,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (t) {
                        return this.each(function () {
                            Q.remove(this, t);
                        });
                    },
                }),
                _.extend({
                    queue: function (t, e, i) {
                        var s;
                        if (t)
                            return (
                                (e = (e || "fx") + "queue"),
                                (s = J.get(t, e)),
                                i &&
                                    (!s || Array.isArray(i)
                                        ? (s = J.access(t, e, _.makeArray(i)))
                                        : s.push(i)),
                                s || []
                            );
                    },
                    dequeue: function (t, e) {
                        e = e || "fx";
                        var i = _.queue(t, e),
                            s = i.length,
                            n = i.shift(),
                            o = _._queueHooks(t, e);
                        "inprogress" === n && ((n = i.shift()), s--),
                            n &&
                                ("fx" === e && i.unshift("inprogress"),
                                delete o.stop,
                                n.call(
                                    t,
                                    function () {
                                        _.dequeue(t, e);
                                    },
                                    o
                                )),
                            !s && o && o.empty.fire();
                    },
                    _queueHooks: function (t, e) {
                        var i = e + "queueHooks";
                        return (
                            J.get(t, i) ||
                            J.access(t, i, {
                                empty: _.Callbacks("once memory").add(
                                    function () {
                                        J.remove(t, [e + "queue", i]);
                                    }
                                ),
                            })
                        );
                    },
                }),
                _.fn.extend({
                    queue: function (t, e) {
                        var i = 2;
                        return (
                            "string" != typeof t && ((e = t), (t = "fx"), i--),
                            arguments.length < i
                                ? _.queue(this[0], t)
                                : void 0 === e
                                ? this
                                : this.each(function () {
                                      var i = _.queue(this, t, e);
                                      _._queueHooks(this, t),
                                          "fx" === t &&
                                              "inprogress" !== i[0] &&
                                              _.dequeue(this, t);
                                  })
                        );
                    },
                    dequeue: function (t) {
                        return this.each(function () {
                            _.dequeue(this, t);
                        });
                    },
                    clearQueue: function (t) {
                        return this.queue(t || "fx", []);
                    },
                    promise: function (t, e) {
                        var i,
                            s = 1,
                            n = _.Deferred(),
                            o = this,
                            r = this.length,
                            a = function () {
                                --s || n.resolveWith(o, [o]);
                            };
                        for (
                            "string" != typeof t && ((e = t), (t = void 0)),
                                t = t || "fx";
                            r--;

                        )
                            (i = J.get(o[r], t + "queueHooks")) &&
                                i.empty &&
                                (s++, i.empty.add(a));
                        return a(), n.promise(e);
                    },
                });
            var st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                nt = new RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
                ot = ["Top", "Right", "Bottom", "Left"],
                rt = r.documentElement,
                at = function (t) {
                    return _.contains(t.ownerDocument, t);
                },
                lt = { composed: !0 };
            rt.getRootNode &&
                (at = function (t) {
                    return (
                        _.contains(t.ownerDocument, t) ||
                        t.getRootNode(lt) === t.ownerDocument
                    );
                });
            var ht = function (t, e) {
                    return (
                        "none" === (t = e || t).style.display ||
                        ("" === t.style.display &&
                            at(t) &&
                            "none" === _.css(t, "display"))
                    );
                },
                dt = function (t, e, i, s) {
                    var n,
                        o,
                        r = {};
                    for (o in e) (r[o] = t.style[o]), (t.style[o] = e[o]);
                    for (o in ((n = i.apply(t, s || [])), e)) t.style[o] = r[o];
                    return n;
                };
            function ut(t, e, i, s) {
                var n,
                    o,
                    r = 20,
                    a = s
                        ? function () {
                              return s.cur();
                          }
                        : function () {
                              return _.css(t, e, "");
                          },
                    l = a(),
                    h = (i && i[3]) || (_.cssNumber[e] ? "" : "px"),
                    d =
                        t.nodeType &&
                        (_.cssNumber[e] || ("px" !== h && +l)) &&
                        nt.exec(_.css(t, e));
                if (d && d[3] !== h) {
                    for (l /= 2, h = h || d[3], d = +l || 1; r--; )
                        _.style(t, e, d + h),
                            (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 &&
                                (r = 0),
                            (d /= o);
                    (d *= 2), _.style(t, e, d + h), (i = i || []);
                }
                return (
                    i &&
                        ((d = +d || +l || 0),
                        (n = i[1] ? d + (i[1] + 1) * i[2] : +i[2]),
                        s && ((s.unit = h), (s.start = d), (s.end = n))),
                    n
                );
            }
            var ct = {};
            function pt(t) {
                var e,
                    i = t.ownerDocument,
                    s = t.nodeName,
                    n = ct[s];
                return (
                    n ||
                    ((e = i.body.appendChild(i.createElement(s))),
                    (n = _.css(e, "display")),
                    e.parentNode.removeChild(e),
                    "none" === n && (n = "block"),
                    (ct[s] = n),
                    n)
                );
            }
            function ft(t, e) {
                for (var i, s, n = [], o = 0, r = t.length; o < r; o++)
                    (s = t[o]).style &&
                        ((i = s.style.display),
                        e
                            ? ("none" === i &&
                                  ((n[o] = J.get(s, "display") || null),
                                  n[o] || (s.style.display = "")),
                              "" === s.style.display && ht(s) && (n[o] = pt(s)))
                            : "none" !== i &&
                              ((n[o] = "none"), J.set(s, "display", i)));
                for (o = 0; o < r; o++)
                    null != n[o] && (t[o].style.display = n[o]);
                return t;
            }
            _.fn.extend({
                show: function () {
                    return ft(this, !0);
                },
                hide: function () {
                    return ft(this);
                },
                toggle: function (t) {
                    return "boolean" == typeof t
                        ? t
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              ht(this) ? _(this).show() : _(this).hide();
                          });
                },
            });
            var gt = /^(?:checkbox|radio)$/i,
                mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                vt = /^$|^module$|\/(?:java|ecma)script/i,
                yt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            function bt(t, e) {
                var i;
                return (
                    (i =
                        void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e || "*")
                            : void 0 !== t.querySelectorAll
                            ? t.querySelectorAll(e || "*")
                            : []),
                    void 0 === e || (e && z(t, e)) ? _.merge([t], i) : i
                );
            }
            function wt(t, e) {
                for (var i = 0, s = t.length; i < s; i++)
                    J.set(t[i], "globalEval", !e || J.get(e[i], "globalEval"));
            }
            (yt.optgroup = yt.option),
                (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
                (yt.th = yt.td);
            var xt,
                St,
                _t = /<|&#?\w+;/;
            function Ct(t, e, i, s, n) {
                for (
                    var o,
                        r,
                        a,
                        l,
                        h,
                        d,
                        u = e.createDocumentFragment(),
                        c = [],
                        p = 0,
                        f = t.length;
                    p < f;
                    p++
                )
                    if ((o = t[p]) || 0 === o)
                        if ("object" === S(o)) _.merge(c, o.nodeType ? [o] : o);
                        else if (_t.test(o)) {
                            for (
                                r = r || u.appendChild(e.createElement("div")),
                                    a = (mt.exec(o) || [
                                        "",
                                        "",
                                    ])[1].toLowerCase(),
                                    l = yt[a] || yt._default,
                                    r.innerHTML =
                                        l[1] + _.htmlPrefilter(o) + l[2],
                                    d = l[0];
                                d--;

                            )
                                r = r.lastChild;
                            _.merge(c, r.childNodes),
                                ((r = u.firstChild).textContent = "");
                        } else c.push(e.createTextNode(o));
                for (u.textContent = "", p = 0; (o = c[p++]); )
                    if (s && _.inArray(o, s) > -1) n && n.push(o);
                    else if (
                        ((h = at(o)),
                        (r = bt(u.appendChild(o), "script")),
                        h && wt(r),
                        i)
                    )
                        for (d = 0; (o = r[d++]); )
                            vt.test(o.type || "") && i.push(o);
                return u;
            }
            (xt = r
                .createDocumentFragment()
                .appendChild(r.createElement("div"))),
                (St = r.createElement("input")).setAttribute("type", "radio"),
                St.setAttribute("checked", "checked"),
                St.setAttribute("name", "t"),
                xt.appendChild(St),
                (v.checkClone = xt
                    .cloneNode(!0)
                    .cloneNode(!0).lastChild.checked),
                (xt.innerHTML = "<textarea>x</textarea>"),
                (v.noCloneChecked = !!xt.cloneNode(!0).lastChild.defaultValue);
            var Tt = /^key/,
                $t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Pt = /^([^.]*)(?:\.(.+)|)/;
            function Et() {
                return !0;
            }
            function It() {
                return !1;
            }
            function zt(t, e) {
                return (
                    (t ===
                        (function () {
                            try {
                                return r.activeElement;
                            } catch (t) {}
                        })()) ==
                    ("focus" === e)
                );
            }
            function At(t, e, i, s, n, o) {
                var r, a;
                if ("object" == typeof e) {
                    for (a in ("string" != typeof i &&
                        ((s = s || i), (i = void 0)),
                    e))
                        At(t, a, i, s, e[a], o);
                    return t;
                }
                if (
                    (null == s && null == n
                        ? ((n = i), (s = i = void 0))
                        : null == n &&
                          ("string" == typeof i
                              ? ((n = s), (s = void 0))
                              : ((n = s), (s = i), (i = void 0))),
                    !1 === n)
                )
                    n = It;
                else if (!n) return t;
                return (
                    1 === o &&
                        ((r = n),
                        ((n = function (t) {
                            return _().off(t), r.apply(this, arguments);
                        }).guid = r.guid || (r.guid = _.guid++))),
                    t.each(function () {
                        _.event.add(this, e, n, s, i);
                    })
                );
            }
            function kt(t, e, i) {
                i
                    ? (J.set(t, e, !1),
                      _.event.add(t, e, {
                          namespace: !1,
                          handler: function (t) {
                              var s,
                                  n,
                                  o = J.get(this, e);
                              if (1 & t.isTrigger && this[e]) {
                                  if (o.length)
                                      (_.event.special[e] || {}).delegateType &&
                                          t.stopPropagation();
                                  else if (
                                      ((o = l.call(arguments)),
                                      J.set(this, e, o),
                                      (s = i(this, e)),
                                      this[e](),
                                      o !== (n = J.get(this, e)) || s
                                          ? J.set(this, e, !1)
                                          : (n = {}),
                                      o !== n)
                                  )
                                      return (
                                          t.stopImmediatePropagation(),
                                          t.preventDefault(),
                                          n.value
                                      );
                              } else
                                  o.length &&
                                      (J.set(this, e, {
                                          value: _.event.trigger(
                                              _.extend(o[0], _.Event.prototype),
                                              o.slice(1),
                                              this
                                          ),
                                      }),
                                      t.stopImmediatePropagation());
                          },
                      }))
                    : void 0 === J.get(t, e) && _.event.add(t, e, Et);
            }
            (_.event = {
                global: {},
                add: function (t, e, i, s, n) {
                    var o,
                        r,
                        a,
                        l,
                        h,
                        d,
                        u,
                        c,
                        p,
                        f,
                        g,
                        m = J.get(t);
                    if (m)
                        for (
                            i.handler &&
                                ((i = (o = i).handler), (n = o.selector)),
                                n && _.find.matchesSelector(rt, n),
                                i.guid || (i.guid = _.guid++),
                                (l = m.events) || (l = m.events = {}),
                                (r = m.handle) ||
                                    (r = m.handle =
                                        function (e) {
                                            return void 0 !== _ &&
                                                _.event.triggered !== e.type
                                                ? _.event.dispatch.apply(
                                                      t,
                                                      arguments
                                                  )
                                                : void 0;
                                        }),
                                h = (e = (e || "").match(R) || [""]).length;
                            h--;

                        )
                            (p = g = (a = Pt.exec(e[h]) || [])[1]),
                                (f = (a[2] || "").split(".").sort()),
                                p &&
                                    ((u = _.event.special[p] || {}),
                                    (p =
                                        (n ? u.delegateType : u.bindType) || p),
                                    (u = _.event.special[p] || {}),
                                    (d = _.extend(
                                        {
                                            type: p,
                                            origType: g,
                                            data: s,
                                            handler: i,
                                            guid: i.guid,
                                            selector: n,
                                            needsContext:
                                                n &&
                                                _.expr.match.needsContext.test(
                                                    n
                                                ),
                                            namespace: f.join("."),
                                        },
                                        o
                                    )),
                                    (c = l[p]) ||
                                        (((c = l[p] = []).delegateCount = 0),
                                        (u.setup &&
                                            !1 !== u.setup.call(t, s, f, r)) ||
                                            (t.addEventListener &&
                                                t.addEventListener(p, r))),
                                    u.add &&
                                        (u.add.call(t, d),
                                        d.handler.guid ||
                                            (d.handler.guid = i.guid)),
                                    n
                                        ? c.splice(c.delegateCount++, 0, d)
                                        : c.push(d),
                                    (_.event.global[p] = !0));
                },
                remove: function (t, e, i, s, n) {
                    var o,
                        r,
                        a,
                        l,
                        h,
                        d,
                        u,
                        c,
                        p,
                        f,
                        g,
                        m = J.hasData(t) && J.get(t);
                    if (m && (l = m.events)) {
                        for (h = (e = (e || "").match(R) || [""]).length; h--; )
                            if (
                                ((p = g = (a = Pt.exec(e[h]) || [])[1]),
                                (f = (a[2] || "").split(".").sort()),
                                p)
                            ) {
                                for (
                                    u = _.event.special[p] || {},
                                        c =
                                            l[
                                                (p =
                                                    (s
                                                        ? u.delegateType
                                                        : u.bindType) || p)
                                            ] || [],
                                        a =
                                            a[2] &&
                                            new RegExp(
                                                "(^|\\.)" +
                                                    f.join("\\.(?:.*\\.|)") +
                                                    "(\\.|$)"
                                            ),
                                        r = o = c.length;
                                    o--;

                                )
                                    (d = c[o]),
                                        (!n && g !== d.origType) ||
                                            (i && i.guid !== d.guid) ||
                                            (a && !a.test(d.namespace)) ||
                                            (s &&
                                                s !== d.selector &&
                                                ("**" !== s || !d.selector)) ||
                                            (c.splice(o, 1),
                                            d.selector && c.delegateCount--,
                                            u.remove && u.remove.call(t, d));
                                r &&
                                    !c.length &&
                                    ((u.teardown &&
                                        !1 !==
                                            u.teardown.call(t, f, m.handle)) ||
                                        _.removeEvent(t, p, m.handle),
                                    delete l[p]);
                            } else
                                for (p in l)
                                    _.event.remove(t, p + e[h], i, s, !0);
                        _.isEmptyObject(l) && J.remove(t, "handle events");
                    }
                },
                dispatch: function (t) {
                    var e,
                        i,
                        s,
                        n,
                        o,
                        r,
                        a = _.event.fix(t),
                        l = new Array(arguments.length),
                        h = (J.get(this, "events") || {})[a.type] || [],
                        d = _.event.special[a.type] || {};
                    for (l[0] = a, e = 1; e < arguments.length; e++)
                        l[e] = arguments[e];
                    if (
                        ((a.delegateTarget = this),
                        !d.preDispatch || !1 !== d.preDispatch.call(this, a))
                    ) {
                        for (
                            r = _.event.handlers.call(this, a, h), e = 0;
                            (n = r[e++]) && !a.isPropagationStopped();

                        )
                            for (
                                a.currentTarget = n.elem, i = 0;
                                (o = n.handlers[i++]) &&
                                !a.isImmediatePropagationStopped();

                            )
                                (a.rnamespace &&
                                    !1 !== o.namespace &&
                                    !a.rnamespace.test(o.namespace)) ||
                                    ((a.handleObj = o),
                                    (a.data = o.data),
                                    void 0 !==
                                        (s = (
                                            (_.event.special[o.origType] || {})
                                                .handle || o.handler
                                        ).apply(n.elem, l)) &&
                                        !1 === (a.result = s) &&
                                        (a.preventDefault(),
                                        a.stopPropagation()));
                        return (
                            d.postDispatch && d.postDispatch.call(this, a),
                            a.result
                        );
                    }
                },
                handlers: function (t, e) {
                    var i,
                        s,
                        n,
                        o,
                        r,
                        a = [],
                        l = e.delegateCount,
                        h = t.target;
                    if (
                        l &&
                        h.nodeType &&
                        !("click" === t.type && t.button >= 1)
                    )
                        for (; h !== this; h = h.parentNode || this)
                            if (
                                1 === h.nodeType &&
                                ("click" !== t.type || !0 !== h.disabled)
                            ) {
                                for (o = [], r = {}, i = 0; i < l; i++)
                                    void 0 ===
                                        r[(n = (s = e[i]).selector + " ")] &&
                                        (r[n] = s.needsContext
                                            ? _(n, this).index(h) > -1
                                            : _.find(n, this, null, [h])
                                                  .length),
                                        r[n] && o.push(s);
                                o.length && a.push({ elem: h, handlers: o });
                            }
                    return (
                        (h = this),
                        l < e.length &&
                            a.push({ elem: h, handlers: e.slice(l) }),
                        a
                    );
                },
                addProp: function (t, e) {
                    Object.defineProperty(_.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(e)
                            ? function () {
                                  if (this.originalEvent)
                                      return e(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent)
                                      return this.originalEvent[t];
                              },
                        set: function (e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e,
                            });
                        },
                    });
                },
                fix: function (t) {
                    return t[_.expando] ? t : new _.Event(t);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (t) {
                            var e = this || t;
                            return (
                                gt.test(e.type) &&
                                    e.click &&
                                    z(e, "input") &&
                                    kt(e, "click", Et),
                                !1
                            );
                        },
                        trigger: function (t) {
                            var e = this || t;
                            return (
                                gt.test(e.type) &&
                                    e.click &&
                                    z(e, "input") &&
                                    kt(e, "click"),
                                !0
                            );
                        },
                        _default: function (t) {
                            var e = t.target;
                            return (
                                (gt.test(e.type) &&
                                    e.click &&
                                    z(e, "input") &&
                                    J.get(e, "click")) ||
                                z(e, "a")
                            );
                        },
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result &&
                                t.originalEvent &&
                                (t.originalEvent.returnValue = t.result);
                        },
                    },
                },
            }),
                (_.removeEvent = function (t, e, i) {
                    t.removeEventListener && t.removeEventListener(e, i);
                }),
                (_.Event = function (t, e) {
                    if (!(this instanceof _.Event)) return new _.Event(t, e);
                    t && t.type
                        ? ((this.originalEvent = t),
                          (this.type = t.type),
                          (this.isDefaultPrevented =
                              t.defaultPrevented ||
                              (void 0 === t.defaultPrevented &&
                                  !1 === t.returnValue)
                                  ? Et
                                  : It),
                          (this.target =
                              t.target && 3 === t.target.nodeType
                                  ? t.target.parentNode
                                  : t.target),
                          (this.currentTarget = t.currentTarget),
                          (this.relatedTarget = t.relatedTarget))
                        : (this.type = t),
                        e && _.extend(this, e),
                        (this.timeStamp = (t && t.timeStamp) || Date.now()),
                        (this[_.expando] = !0);
                }),
                (_.Event.prototype = {
                    constructor: _.Event,
                    isDefaultPrevented: It,
                    isPropagationStopped: It,
                    isImmediatePropagationStopped: It,
                    isSimulated: !1,
                    preventDefault: function () {
                        var t = this.originalEvent;
                        (this.isDefaultPrevented = Et),
                            t && !this.isSimulated && t.preventDefault();
                    },
                    stopPropagation: function () {
                        var t = this.originalEvent;
                        (this.isPropagationStopped = Et),
                            t && !this.isSimulated && t.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var t = this.originalEvent;
                        (this.isImmediatePropagationStopped = Et),
                            t &&
                                !this.isSimulated &&
                                t.stopImmediatePropagation(),
                            this.stopPropagation();
                    },
                }),
                _.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (t) {
                            var e = t.button;
                            return null == t.which && Tt.test(t.type)
                                ? null != t.charCode
                                    ? t.charCode
                                    : t.keyCode
                                : !t.which && void 0 !== e && $t.test(t.type)
                                ? 1 & e
                                    ? 1
                                    : 2 & e
                                    ? 3
                                    : 4 & e
                                    ? 2
                                    : 0
                                : t.which;
                        },
                    },
                    _.event.addProp
                ),
                _.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                    _.event.special[t] = {
                        setup: function () {
                            return kt(this, t, zt), !1;
                        },
                        trigger: function () {
                            return kt(this, t), !0;
                        },
                        delegateType: e,
                    };
                }),
                _.each(
                    {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout",
                    },
                    function (t, e) {
                        _.event.special[t] = {
                            delegateType: e,
                            bindType: e,
                            handle: function (t) {
                                var i,
                                    s = this,
                                    n = t.relatedTarget,
                                    o = t.handleObj;
                                return (
                                    (n && (n === s || _.contains(s, n))) ||
                                        ((t.type = o.origType),
                                        (i = o.handler.apply(this, arguments)),
                                        (t.type = e)),
                                    i
                                );
                            },
                        };
                    }
                ),
                _.fn.extend({
                    on: function (t, e, i, s) {
                        return At(this, t, e, i, s);
                    },
                    one: function (t, e, i, s) {
                        return At(this, t, e, i, s, 1);
                    },
                    off: function (t, e, i) {
                        var s, n;
                        if (t && t.preventDefault && t.handleObj)
                            return (
                                (s = t.handleObj),
                                _(t.delegateTarget).off(
                                    s.namespace
                                        ? s.origType + "." + s.namespace
                                        : s.origType,
                                    s.selector,
                                    s.handler
                                ),
                                this
                            );
                        if ("object" == typeof t) {
                            for (n in t) this.off(n, e, t[n]);
                            return this;
                        }
                        return (
                            (!1 !== e && "function" != typeof e) ||
                                ((i = e), (e = void 0)),
                            !1 === i && (i = It),
                            this.each(function () {
                                _.event.remove(this, t, i, e);
                            })
                        );
                    },
                });
            var Dt =
                    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Lt = /<script|<style|<link/i,
                Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function jt(t, e) {
                return (
                    (z(t, "table") &&
                        z(11 !== e.nodeType ? e : e.firstChild, "tr") &&
                        _(t).children("tbody")[0]) ||
                    t
                );
            }
            function Rt(t) {
                return (
                    (t.type = (null !== t.getAttribute("type")) + "/" + t.type),
                    t
                );
            }
            function Ht(t) {
                return (
                    "true/" === (t.type || "").slice(0, 5)
                        ? (t.type = t.type.slice(5))
                        : t.removeAttribute("type"),
                    t
                );
            }
            function Nt(t, e) {
                var i, s, n, o, r, a, l, h;
                if (1 === e.nodeType) {
                    if (
                        J.hasData(t) &&
                        ((o = J.access(t)), (r = J.set(e, o)), (h = o.events))
                    )
                        for (n in (delete r.handle, (r.events = {}), h))
                            for (i = 0, s = h[n].length; i < s; i++)
                                _.event.add(e, n, h[n][i]);
                    Q.hasData(t) &&
                        ((a = Q.access(t)), (l = _.extend({}, a)), Q.set(e, l));
                }
            }
            function qt(t, e) {
                var i = e.nodeName.toLowerCase();
                "input" === i && gt.test(t.type)
                    ? (e.checked = t.checked)
                    : ("input" !== i && "textarea" !== i) ||
                      (e.defaultValue = t.defaultValue);
            }
            function Ft(t, e, i, s) {
                e = h.apply([], e);
                var n,
                    o,
                    r,
                    a,
                    l,
                    d,
                    u = 0,
                    c = t.length,
                    p = c - 1,
                    f = e[0],
                    g = y(f);
                if (
                    g ||
                    (c > 1 &&
                        "string" == typeof f &&
                        !v.checkClone &&
                        Ot.test(f))
                )
                    return t.each(function (n) {
                        var o = t.eq(n);
                        g && (e[0] = f.call(this, n, o.html())), Ft(o, e, i, s);
                    });
                if (
                    c &&
                    ((o = (n = Ct(e, t[0].ownerDocument, !1, t, s)).firstChild),
                    1 === n.childNodes.length && (n = o),
                    o || s)
                ) {
                    for (
                        a = (r = _.map(bt(n, "script"), Rt)).length;
                        u < c;
                        u++
                    )
                        (l = n),
                            u !== p &&
                                ((l = _.clone(l, !0, !0)),
                                a && _.merge(r, bt(l, "script"))),
                            i.call(t[u], l, u);
                    if (a)
                        for (
                            d = r[r.length - 1].ownerDocument,
                                _.map(r, Ht),
                                u = 0;
                            u < a;
                            u++
                        )
                            (l = r[u]),
                                vt.test(l.type || "") &&
                                    !J.access(l, "globalEval") &&
                                    _.contains(d, l) &&
                                    (l.src &&
                                    "module" !== (l.type || "").toLowerCase()
                                        ? _._evalUrl &&
                                          !l.noModule &&
                                          _._evalUrl(l.src, {
                                              nonce:
                                                  l.nonce ||
                                                  l.getAttribute("nonce"),
                                          })
                                        : x(
                                              l.textContent.replace(Mt, ""),
                                              l,
                                              d
                                          ));
                }
                return t;
            }
            function Wt(t, e, i) {
                for (
                    var s, n = e ? _.filter(e, t) : t, o = 0;
                    null != (s = n[o]);
                    o++
                )
                    i || 1 !== s.nodeType || _.cleanData(bt(s)),
                        s.parentNode &&
                            (i && at(s) && wt(bt(s, "script")),
                            s.parentNode.removeChild(s));
                return t;
            }
            _.extend({
                htmlPrefilter: function (t) {
                    return t.replace(Dt, "<$1></$2>");
                },
                clone: function (t, e, i) {
                    var s,
                        n,
                        o,
                        r,
                        a = t.cloneNode(!0),
                        l = at(t);
                    if (
                        !(
                            v.noCloneChecked ||
                            (1 !== t.nodeType && 11 !== t.nodeType) ||
                            _.isXMLDoc(t)
                        )
                    )
                        for (
                            r = bt(a), s = 0, n = (o = bt(t)).length;
                            s < n;
                            s++
                        )
                            qt(o[s], r[s]);
                    if (e)
                        if (i)
                            for (
                                o = o || bt(t),
                                    r = r || bt(a),
                                    s = 0,
                                    n = o.length;
                                s < n;
                                s++
                            )
                                Nt(o[s], r[s]);
                        else Nt(t, a);
                    return (
                        (r = bt(a, "script")).length > 0 &&
                            wt(r, !l && bt(t, "script")),
                        a
                    );
                },
                cleanData: function (t) {
                    for (
                        var e, i, s, n = _.event.special, o = 0;
                        void 0 !== (i = t[o]);
                        o++
                    )
                        if (Z(i)) {
                            if ((e = i[J.expando])) {
                                if (e.events)
                                    for (s in e.events)
                                        n[s]
                                            ? _.event.remove(i, s)
                                            : _.removeEvent(i, s, e.handle);
                                i[J.expando] = void 0;
                            }
                            i[Q.expando] && (i[Q.expando] = void 0);
                        }
                },
            }),
                _.fn.extend({
                    detach: function (t) {
                        return Wt(this, t, !0);
                    },
                    remove: function (t) {
                        return Wt(this, t);
                    },
                    text: function (t) {
                        return V(
                            this,
                            function (t) {
                                return void 0 === t
                                    ? _.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType &&
                                              11 !== this.nodeType &&
                                              9 !== this.nodeType) ||
                                              (this.textContent = t);
                                      });
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    append: function () {
                        return Ft(this, arguments, function (t) {
                            (1 !== this.nodeType &&
                                11 !== this.nodeType &&
                                9 !== this.nodeType) ||
                                jt(this, t).appendChild(t);
                        });
                    },
                    prepend: function () {
                        return Ft(this, arguments, function (t) {
                            if (
                                1 === this.nodeType ||
                                11 === this.nodeType ||
                                9 === this.nodeType
                            ) {
                                var e = jt(this, t);
                                e.insertBefore(t, e.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return Ft(this, arguments, function (t) {
                            this.parentNode &&
                                this.parentNode.insertBefore(t, this);
                        });
                    },
                    after: function () {
                        return Ft(this, arguments, function (t) {
                            this.parentNode &&
                                this.parentNode.insertBefore(
                                    t,
                                    this.nextSibling
                                );
                        });
                    },
                    empty: function () {
                        for (var t, e = 0; null != (t = this[e]); e++)
                            1 === t.nodeType &&
                                (_.cleanData(bt(t, !1)), (t.textContent = ""));
                        return this;
                    },
                    clone: function (t, e) {
                        return (
                            (t = null != t && t),
                            (e = null == e ? t : e),
                            this.map(function () {
                                return _.clone(this, t, e);
                            })
                        );
                    },
                    html: function (t) {
                        return V(
                            this,
                            function (t) {
                                var e = this[0] || {},
                                    i = 0,
                                    s = this.length;
                                if (void 0 === t && 1 === e.nodeType)
                                    return e.innerHTML;
                                if (
                                    "string" == typeof t &&
                                    !Lt.test(t) &&
                                    !yt[
                                        (mt.exec(t) || [
                                            "",
                                            "",
                                        ])[1].toLowerCase()
                                    ]
                                ) {
                                    t = _.htmlPrefilter(t);
                                    try {
                                        for (; i < s; i++)
                                            1 ===
                                                (e = this[i] || {}).nodeType &&
                                                (_.cleanData(bt(e, !1)),
                                                (e.innerHTML = t));
                                        e = 0;
                                    } catch (t) {}
                                }
                                e && this.empty().append(t);
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var t = [];
                        return Ft(
                            this,
                            arguments,
                            function (e) {
                                var i = this.parentNode;
                                _.inArray(this, t) < 0 &&
                                    (_.cleanData(bt(this)),
                                    i && i.replaceChild(e, this));
                            },
                            t
                        );
                    },
                }),
                _.each(
                    {
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith",
                    },
                    function (t, e) {
                        _.fn[t] = function (t) {
                            for (
                                var i,
                                    s = [],
                                    n = _(t),
                                    o = n.length - 1,
                                    r = 0;
                                r <= o;
                                r++
                            )
                                (i = r === o ? this : this.clone(!0)),
                                    _(n[r])[e](i),
                                    d.apply(s, i.get());
                            return this.pushStack(s);
                        };
                    }
                );
            var Bt = new RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
                Vt = function (t) {
                    var e = t.ownerDocument.defaultView;
                    return (e && e.opener) || (e = i), e.getComputedStyle(t);
                },
                Ut = new RegExp(ot.join("|"), "i");
            function Gt(t, e, i) {
                var s,
                    n,
                    o,
                    r,
                    a = t.style;
                return (
                    (i = i || Vt(t)) &&
                        ("" !== (r = i.getPropertyValue(e) || i[e]) ||
                            at(t) ||
                            (r = _.style(t, e)),
                        !v.pixelBoxStyles() &&
                            Bt.test(r) &&
                            Ut.test(e) &&
                            ((s = a.width),
                            (n = a.minWidth),
                            (o = a.maxWidth),
                            (a.minWidth = a.maxWidth = a.width = r),
                            (r = i.width),
                            (a.width = s),
                            (a.minWidth = n),
                            (a.maxWidth = o))),
                    void 0 !== r ? r + "" : r
                );
            }
            function Xt(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            !(function () {
                function t() {
                    if (d) {
                        (h.style.cssText =
                            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (d.style.cssText =
                                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            rt.appendChild(h).appendChild(d);
                        var t = i.getComputedStyle(d);
                        (s = "1%" !== t.top),
                            (l = 12 === e(t.marginLeft)),
                            (d.style.right = "60%"),
                            (a = 36 === e(t.right)),
                            (n = 36 === e(t.width)),
                            (d.style.position = "absolute"),
                            (o = 12 === e(d.offsetWidth / 3)),
                            rt.removeChild(h),
                            (d = null);
                    }
                }
                function e(t) {
                    return Math.round(parseFloat(t));
                }
                var s,
                    n,
                    o,
                    a,
                    l,
                    h = r.createElement("div"),
                    d = r.createElement("div");
                d.style &&
                    ((d.style.backgroundClip = "content-box"),
                    (d.cloneNode(!0).style.backgroundClip = ""),
                    (v.clearCloneStyle =
                        "content-box" === d.style.backgroundClip),
                    _.extend(v, {
                        boxSizingReliable: function () {
                            return t(), n;
                        },
                        pixelBoxStyles: function () {
                            return t(), a;
                        },
                        pixelPosition: function () {
                            return t(), s;
                        },
                        reliableMarginLeft: function () {
                            return t(), l;
                        },
                        scrollboxSize: function () {
                            return t(), o;
                        },
                    }));
            })();
            var Yt = ["Webkit", "Moz", "ms"],
                Zt = r.createElement("div").style,
                Kt = {};
            function Jt(t) {
                var e = _.cssProps[t] || Kt[t];
                return (
                    e ||
                    (t in Zt
                        ? t
                        : (Kt[t] =
                              (function (t) {
                                  for (
                                      var e = t[0].toUpperCase() + t.slice(1),
                                          i = Yt.length;
                                      i--;

                                  )
                                      if ((t = Yt[i] + e) in Zt) return t;
                              })(t) || t))
                );
            }
            var Qt = /^(none|table(?!-c[ea]).+)/,
                te = /^--/,
                ee = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block",
                },
                ie = { letterSpacing: "0", fontWeight: "400" };
            function se(t, e, i) {
                var s = nt.exec(e);
                return s ? Math.max(0, s[2] - (i || 0)) + (s[3] || "px") : e;
            }
            function ne(t, e, i, s, n, o) {
                var r = "width" === e ? 1 : 0,
                    a = 0,
                    l = 0;
                if (i === (s ? "border" : "content")) return 0;
                for (; r < 4; r += 2)
                    "margin" === i && (l += _.css(t, i + ot[r], !0, n)),
                        s
                            ? ("content" === i &&
                                  (l -= _.css(t, "padding" + ot[r], !0, n)),
                              "margin" !== i &&
                                  (l -= _.css(
                                      t,
                                      "border" + ot[r] + "Width",
                                      !0,
                                      n
                                  )))
                            : ((l += _.css(t, "padding" + ot[r], !0, n)),
                              "padding" !== i
                                  ? (l += _.css(
                                        t,
                                        "border" + ot[r] + "Width",
                                        !0,
                                        n
                                    ))
                                  : (a += _.css(
                                        t,
                                        "border" + ot[r] + "Width",
                                        !0,
                                        n
                                    )));
                return (
                    !s &&
                        o >= 0 &&
                        (l +=
                            Math.max(
                                0,
                                Math.ceil(
                                    t[
                                        "offset" +
                                            e[0].toUpperCase() +
                                            e.slice(1)
                                    ] -
                                        o -
                                        l -
                                        a -
                                        0.5
                                )
                            ) || 0),
                    l
                );
            }
            function oe(t, e, i) {
                var s = Vt(t),
                    n =
                        (!v.boxSizingReliable() || i) &&
                        "border-box" === _.css(t, "boxSizing", !1, s),
                    o = n,
                    r = Gt(t, e, s),
                    a = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Bt.test(r)) {
                    if (!i) return r;
                    r = "auto";
                }
                return (
                    ((!v.boxSizingReliable() && n) ||
                        "auto" === r ||
                        (!parseFloat(r) &&
                            "inline" === _.css(t, "display", !1, s))) &&
                        t.getClientRects().length &&
                        ((n = "border-box" === _.css(t, "boxSizing", !1, s)),
                        (o = a in t) && (r = t[a])),
                    (r = parseFloat(r) || 0) +
                        ne(t, e, i || (n ? "border" : "content"), o, s, r) +
                        "px"
                );
            }
            function re(t, e, i, s, n) {
                return new re.prototype.init(t, e, i, s, n);
            }
            _.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var i = Gt(t, "opacity");
                                return "" === i ? "1" : i;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (t, e, i, s) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var n,
                            o,
                            r,
                            a = Y(e),
                            l = te.test(e),
                            h = t.style;
                        if (
                            (l || (e = Jt(a)),
                            (r = _.cssHooks[e] || _.cssHooks[a]),
                            void 0 === i)
                        )
                            return r &&
                                "get" in r &&
                                void 0 !== (n = r.get(t, !1, s))
                                ? n
                                : h[e];
                        "string" === (o = typeof i) &&
                            (n = nt.exec(i)) &&
                            n[1] &&
                            ((i = ut(t, e, n)), (o = "number")),
                            null != i &&
                                i == i &&
                                ("number" !== o ||
                                    l ||
                                    (i +=
                                        (n && n[3]) ||
                                        (_.cssNumber[a] ? "" : "px")),
                                v.clearCloneStyle ||
                                    "" !== i ||
                                    0 !== e.indexOf("background") ||
                                    (h[e] = "inherit"),
                                (r &&
                                    "set" in r &&
                                    void 0 === (i = r.set(t, i, s))) ||
                                    (l ? h.setProperty(e, i) : (h[e] = i)));
                    }
                },
                css: function (t, e, i, s) {
                    var n,
                        o,
                        r,
                        a = Y(e);
                    return (
                        te.test(e) || (e = Jt(a)),
                        (r = _.cssHooks[e] || _.cssHooks[a]) &&
                            "get" in r &&
                            (n = r.get(t, !0, i)),
                        void 0 === n && (n = Gt(t, e, s)),
                        "normal" === n && e in ie && (n = ie[e]),
                        "" === i || i
                            ? ((o = parseFloat(n)),
                              !0 === i || isFinite(o) ? o || 0 : n)
                            : n
                    );
                },
            }),
                _.each(["height", "width"], function (t, e) {
                    _.cssHooks[e] = {
                        get: function (t, i, s) {
                            if (i)
                                return !Qt.test(_.css(t, "display")) ||
                                    (t.getClientRects().length &&
                                        t.getBoundingClientRect().width)
                                    ? oe(t, e, s)
                                    : dt(t, ee, function () {
                                          return oe(t, e, s);
                                      });
                        },
                        set: function (t, i, s) {
                            var n,
                                o = Vt(t),
                                r =
                                    !v.scrollboxSize() &&
                                    "absolute" === o.position,
                                a =
                                    (r || s) &&
                                    "border-box" ===
                                        _.css(t, "boxSizing", !1, o),
                                l = s ? ne(t, e, s, a, o) : 0;
                            return (
                                a &&
                                    r &&
                                    (l -= Math.ceil(
                                        t[
                                            "offset" +
                                                e[0].toUpperCase() +
                                                e.slice(1)
                                        ] -
                                            parseFloat(o[e]) -
                                            ne(t, e, "border", !1, o) -
                                            0.5
                                    )),
                                l &&
                                    (n = nt.exec(i)) &&
                                    "px" !== (n[3] || "px") &&
                                    ((t.style[e] = i), (i = _.css(t, e))),
                                se(0, i, l)
                            );
                        },
                    };
                }),
                (_.cssHooks.marginLeft = Xt(
                    v.reliableMarginLeft,
                    function (t, e) {
                        if (e)
                            return (
                                (parseFloat(Gt(t, "marginLeft")) ||
                                    t.getBoundingClientRect().left -
                                        dt(t, { marginLeft: 0 }, function () {
                                            return t.getBoundingClientRect().left;
                                        })) + "px"
                            );
                    }
                )),
                _.each(
                    { margin: "", padding: "", border: "Width" },
                    function (t, e) {
                        (_.cssHooks[t + e] = {
                            expand: function (i) {
                                for (
                                    var s = 0,
                                        n = {},
                                        o =
                                            "string" == typeof i
                                                ? i.split(" ")
                                                : [i];
                                    s < 4;
                                    s++
                                )
                                    n[t + ot[s] + e] = o[s] || o[s - 2] || o[0];
                                return n;
                            },
                        }),
                            "margin" !== t && (_.cssHooks[t + e].set = se);
                    }
                ),
                _.fn.extend({
                    css: function (t, e) {
                        return V(
                            this,
                            function (t, e, i) {
                                var s,
                                    n,
                                    o = {},
                                    r = 0;
                                if (Array.isArray(e)) {
                                    for (s = Vt(t), n = e.length; r < n; r++)
                                        o[e[r]] = _.css(t, e[r], !1, s);
                                    return o;
                                }
                                return void 0 !== i
                                    ? _.style(t, e, i)
                                    : _.css(t, e);
                            },
                            t,
                            e,
                            arguments.length > 1
                        );
                    },
                }),
                (_.Tween = re),
                (re.prototype = {
                    constructor: re,
                    init: function (t, e, i, s, n, o) {
                        (this.elem = t),
                            (this.prop = i),
                            (this.easing = n || _.easing._default),
                            (this.options = e),
                            (this.start = this.now = this.cur()),
                            (this.end = s),
                            (this.unit = o || (_.cssNumber[i] ? "" : "px"));
                    },
                    cur: function () {
                        var t = re.propHooks[this.prop];
                        return t && t.get
                            ? t.get(this)
                            : re.propHooks._default.get(this);
                    },
                    run: function (t) {
                        var e,
                            i = re.propHooks[this.prop];
                        return (
                            this.options.duration
                                ? (this.pos = e =
                                      _.easing[this.easing](
                                          t,
                                          this.options.duration * t,
                                          0,
                                          1,
                                          this.options.duration
                                      ))
                                : (this.pos = e = t),
                            (this.now =
                                (this.end - this.start) * e + this.start),
                            this.options.step &&
                                this.options.step.call(
                                    this.elem,
                                    this.now,
                                    this
                                ),
                            i && i.set
                                ? i.set(this)
                                : re.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (re.prototype.init.prototype = re.prototype),
                (re.propHooks = {
                    _default: {
                        get: function (t) {
                            var e;
                            return 1 !== t.elem.nodeType ||
                                (null != t.elem[t.prop] &&
                                    null == t.elem.style[t.prop])
                                ? t.elem[t.prop]
                                : (e = _.css(t.elem, t.prop, "")) &&
                                  "auto" !== e
                                ? e
                                : 0;
                        },
                        set: function (t) {
                            _.fx.step[t.prop]
                                ? _.fx.step[t.prop](t)
                                : 1 !== t.elem.nodeType ||
                                  (!_.cssHooks[t.prop] &&
                                      null == t.elem.style[Jt(t.prop)])
                                ? (t.elem[t.prop] = t.now)
                                : _.style(t.elem, t.prop, t.now + t.unit);
                        },
                    },
                }),
                (re.propHooks.scrollTop = re.propHooks.scrollLeft =
                    {
                        set: function (t) {
                            t.elem.nodeType &&
                                t.elem.parentNode &&
                                (t.elem[t.prop] = t.now);
                        },
                    }),
                (_.easing = {
                    linear: function (t) {
                        return t;
                    },
                    swing: function (t) {
                        return 0.5 - Math.cos(t * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (_.fx = re.prototype.init),
                (_.fx.step = {});
            var ae,
                le,
                he = /^(?:toggle|show|hide)$/,
                de = /queueHooks$/;
            function ue() {
                le &&
                    (!1 === r.hidden && i.requestAnimationFrame
                        ? i.requestAnimationFrame(ue)
                        : i.setTimeout(ue, _.fx.interval),
                    _.fx.tick());
            }
            function ce() {
                return (
                    i.setTimeout(function () {
                        ae = void 0;
                    }),
                    (ae = Date.now())
                );
            }
            function pe(t, e) {
                var i,
                    s = 0,
                    n = { height: t };
                for (e = e ? 1 : 0; s < 4; s += 2 - e)
                    n["margin" + (i = ot[s])] = n["padding" + i] = t;
                return e && (n.opacity = n.width = t), n;
            }
            function fe(t, e, i) {
                for (
                    var s,
                        n = (ge.tweeners[e] || []).concat(ge.tweeners["*"]),
                        o = 0,
                        r = n.length;
                    o < r;
                    o++
                )
                    if ((s = n[o].call(i, e, t))) return s;
            }
            function ge(t, e, i) {
                var s,
                    n,
                    o = 0,
                    r = ge.prefilters.length,
                    a = _.Deferred().always(function () {
                        delete l.elem;
                    }),
                    l = function () {
                        if (n) return !1;
                        for (
                            var e = ae || ce(),
                                i = Math.max(0, h.startTime + h.duration - e),
                                s = 1 - (i / h.duration || 0),
                                o = 0,
                                r = h.tweens.length;
                            o < r;
                            o++
                        )
                            h.tweens[o].run(s);
                        return (
                            a.notifyWith(t, [h, s, i]),
                            s < 1 && r
                                ? i
                                : (r || a.notifyWith(t, [h, 1, 0]),
                                  a.resolveWith(t, [h]),
                                  !1)
                        );
                    },
                    h = a.promise({
                        elem: t,
                        props: _.extend({}, e),
                        opts: _.extend(
                            !0,
                            { specialEasing: {}, easing: _.easing._default },
                            i
                        ),
                        originalProperties: e,
                        originalOptions: i,
                        startTime: ae || ce(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function (e, i) {
                            var s = _.Tween(
                                t,
                                h.opts,
                                e,
                                i,
                                h.opts.specialEasing[e] || h.opts.easing
                            );
                            return h.tweens.push(s), s;
                        },
                        stop: function (e) {
                            var i = 0,
                                s = e ? h.tweens.length : 0;
                            if (n) return this;
                            for (n = !0; i < s; i++) h.tweens[i].run(1);
                            return (
                                e
                                    ? (a.notifyWith(t, [h, 1, 0]),
                                      a.resolveWith(t, [h, e]))
                                    : a.rejectWith(t, [h, e]),
                                this
                            );
                        },
                    }),
                    d = h.props;
                for (
                    !(function (t, e) {
                        var i, s, n, o, r;
                        for (i in t)
                            if (
                                ((n = e[(s = Y(i))]),
                                (o = t[i]),
                                Array.isArray(o) &&
                                    ((n = o[1]), (o = t[i] = o[0])),
                                i !== s && ((t[s] = o), delete t[i]),
                                (r = _.cssHooks[s]) && ("expand" in r))
                            )
                                for (i in ((o = r.expand(o)), delete t[s], o))
                                    (i in t) || ((t[i] = o[i]), (e[i] = n));
                            else e[s] = n;
                    })(d, h.opts.specialEasing);
                    o < r;
                    o++
                )
                    if ((s = ge.prefilters[o].call(h, t, d, h.opts)))
                        return (
                            y(s.stop) &&
                                (_._queueHooks(h.elem, h.opts.queue).stop =
                                    s.stop.bind(s)),
                            s
                        );
                return (
                    _.map(d, fe, h),
                    y(h.opts.start) && h.opts.start.call(t, h),
                    h
                        .progress(h.opts.progress)
                        .done(h.opts.done, h.opts.complete)
                        .fail(h.opts.fail)
                        .always(h.opts.always),
                    _.fx.timer(
                        _.extend(l, { elem: t, anim: h, queue: h.opts.queue })
                    ),
                    h
                );
            }
            (_.Animation = _.extend(ge, {
                tweeners: {
                    "*": [
                        function (t, e) {
                            var i = this.createTween(t, e);
                            return ut(i.elem, t, nt.exec(e), i), i;
                        },
                    ],
                },
                tweener: function (t, e) {
                    y(t) ? ((e = t), (t = ["*"])) : (t = t.match(R));
                    for (var i, s = 0, n = t.length; s < n; s++)
                        (i = t[s]),
                            (ge.tweeners[i] = ge.tweeners[i] || []),
                            ge.tweeners[i].unshift(e);
                },
                prefilters: [
                    function (t, e, i) {
                        var s,
                            n,
                            o,
                            r,
                            a,
                            l,
                            h,
                            d,
                            u = "width" in e || "height" in e,
                            c = this,
                            p = {},
                            f = t.style,
                            g = t.nodeType && ht(t),
                            m = J.get(t, "fxshow");
                        for (s in (i.queue ||
                            (null == (r = _._queueHooks(t, "fx")).unqueued &&
                                ((r.unqueued = 0),
                                (a = r.empty.fire),
                                (r.empty.fire = function () {
                                    r.unqueued || a();
                                })),
                            r.unqueued++,
                            c.always(function () {
                                c.always(function () {
                                    r.unqueued--,
                                        _.queue(t, "fx").length ||
                                            r.empty.fire();
                                });
                            })),
                        e))
                            if (((n = e[s]), he.test(n))) {
                                if (
                                    (delete e[s],
                                    (o = o || "toggle" === n),
                                    n === (g ? "hide" : "show"))
                                ) {
                                    if ("show" !== n || !m || void 0 === m[s])
                                        continue;
                                    g = !0;
                                }
                                p[s] = (m && m[s]) || _.style(t, s);
                            }
                        if ((l = !_.isEmptyObject(e)) || !_.isEmptyObject(p))
                            for (s in (u &&
                                1 === t.nodeType &&
                                ((i.overflow = [
                                    f.overflow,
                                    f.overflowX,
                                    f.overflowY,
                                ]),
                                null == (h = m && m.display) &&
                                    (h = J.get(t, "display")),
                                "none" === (d = _.css(t, "display")) &&
                                    (h
                                        ? (d = h)
                                        : (ft([t], !0),
                                          (h = t.style.display || h),
                                          (d = _.css(t, "display")),
                                          ft([t]))),
                                ("inline" === d ||
                                    ("inline-block" === d && null != h)) &&
                                    "none" === _.css(t, "float") &&
                                    (l ||
                                        (c.done(function () {
                                            f.display = h;
                                        }),
                                        null == h &&
                                            ((d = f.display),
                                            (h = "none" === d ? "" : d))),
                                    (f.display = "inline-block"))),
                            i.overflow &&
                                ((f.overflow = "hidden"),
                                c.always(function () {
                                    (f.overflow = i.overflow[0]),
                                        (f.overflowX = i.overflow[1]),
                                        (f.overflowY = i.overflow[2]);
                                })),
                            (l = !1),
                            p))
                                l ||
                                    (m
                                        ? "hidden" in m && (g = m.hidden)
                                        : (m = J.access(t, "fxshow", {
                                              display: h,
                                          })),
                                    o && (m.hidden = !g),
                                    g && ft([t], !0),
                                    c.done(function () {
                                        for (s in (g || ft([t]),
                                        J.remove(t, "fxshow"),
                                        p))
                                            _.style(t, s, p[s]);
                                    })),
                                    (l = fe(g ? m[s] : 0, s, c)),
                                    s in m ||
                                        ((m[s] = l.start),
                                        g &&
                                            ((l.end = l.start), (l.start = 0)));
                    },
                ],
                prefilter: function (t, e) {
                    e ? ge.prefilters.unshift(t) : ge.prefilters.push(t);
                },
            })),
                (_.speed = function (t, e, i) {
                    var s =
                        t && "object" == typeof t
                            ? _.extend({}, t)
                            : {
                                  complete: i || (!i && e) || (y(t) && t),
                                  duration: t,
                                  easing: (i && e) || (e && !y(e) && e),
                              };
                    return (
                        _.fx.off
                            ? (s.duration = 0)
                            : "number" != typeof s.duration &&
                              (s.duration in _.fx.speeds
                                  ? (s.duration = _.fx.speeds[s.duration])
                                  : (s.duration = _.fx.speeds._default)),
                        (null != s.queue && !0 !== s.queue) || (s.queue = "fx"),
                        (s.old = s.complete),
                        (s.complete = function () {
                            y(s.old) && s.old.call(this),
                                s.queue && _.dequeue(this, s.queue);
                        }),
                        s
                    );
                }),
                _.fn.extend({
                    fadeTo: function (t, e, i, s) {
                        return this.filter(ht)
                            .css("opacity", 0)
                            .show()
                            .end()
                            .animate({ opacity: e }, t, i, s);
                    },
                    animate: function (t, e, i, s) {
                        var n = _.isEmptyObject(t),
                            o = _.speed(e, i, s),
                            r = function () {
                                var e = ge(this, _.extend({}, t), o);
                                (n || J.get(this, "finish")) && e.stop(!0);
                            };
                        return (
                            (r.finish = r),
                            n || !1 === o.queue
                                ? this.each(r)
                                : this.queue(o.queue, r)
                        );
                    },
                    stop: function (t, e, i) {
                        var s = function (t) {
                            var e = t.stop;
                            delete t.stop, e(i);
                        };
                        return (
                            "string" != typeof t &&
                                ((i = e), (e = t), (t = void 0)),
                            e && !1 !== t && this.queue(t || "fx", []),
                            this.each(function () {
                                var e = !0,
                                    n = null != t && t + "queueHooks",
                                    o = _.timers,
                                    r = J.get(this);
                                if (n) r[n] && r[n].stop && s(r[n]);
                                else
                                    for (n in r)
                                        r[n] &&
                                            r[n].stop &&
                                            de.test(n) &&
                                            s(r[n]);
                                for (n = o.length; n--; )
                                    o[n].elem !== this ||
                                        (null != t && o[n].queue !== t) ||
                                        (o[n].anim.stop(i),
                                        (e = !1),
                                        o.splice(n, 1));
                                (!e && i) || _.dequeue(this, t);
                            })
                        );
                    },
                    finish: function (t) {
                        return (
                            !1 !== t && (t = t || "fx"),
                            this.each(function () {
                                var e,
                                    i = J.get(this),
                                    s = i[t + "queue"],
                                    n = i[t + "queueHooks"],
                                    o = _.timers,
                                    r = s ? s.length : 0;
                                for (
                                    i.finish = !0,
                                        _.queue(this, t, []),
                                        n && n.stop && n.stop.call(this, !0),
                                        e = o.length;
                                    e--;

                                )
                                    o[e].elem === this &&
                                        o[e].queue === t &&
                                        (o[e].anim.stop(!0), o.splice(e, 1));
                                for (e = 0; e < r; e++)
                                    s[e] &&
                                        s[e].finish &&
                                        s[e].finish.call(this);
                                delete i.finish;
                            })
                        );
                    },
                }),
                _.each(["toggle", "show", "hide"], function (t, e) {
                    var i = _.fn[e];
                    _.fn[e] = function (t, s, n) {
                        return null == t || "boolean" == typeof t
                            ? i.apply(this, arguments)
                            : this.animate(pe(e, !0), t, s, n);
                    };
                }),
                _.each(
                    {
                        slideDown: pe("show"),
                        slideUp: pe("hide"),
                        slideToggle: pe("toggle"),
                        fadeIn: { opacity: "show" },
                        fadeOut: { opacity: "hide" },
                        fadeToggle: { opacity: "toggle" },
                    },
                    function (t, e) {
                        _.fn[t] = function (t, i, s) {
                            return this.animate(e, t, i, s);
                        };
                    }
                ),
                (_.timers = []),
                (_.fx.tick = function () {
                    var t,
                        e = 0,
                        i = _.timers;
                    for (ae = Date.now(); e < i.length; e++)
                        (t = i[e])() || i[e] !== t || i.splice(e--, 1);
                    i.length || _.fx.stop(), (ae = void 0);
                }),
                (_.fx.timer = function (t) {
                    _.timers.push(t), _.fx.start();
                }),
                (_.fx.interval = 13),
                (_.fx.start = function () {
                    le || ((le = !0), ue());
                }),
                (_.fx.stop = function () {
                    le = null;
                }),
                (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (_.fn.delay = function (t, e) {
                    return (
                        (t = (_.fx && _.fx.speeds[t]) || t),
                        (e = e || "fx"),
                        this.queue(e, function (e, s) {
                            var n = i.setTimeout(e, t);
                            s.stop = function () {
                                i.clearTimeout(n);
                            };
                        })
                    );
                }),
                (function () {
                    var t = r.createElement("input"),
                        e = r
                            .createElement("select")
                            .appendChild(r.createElement("option"));
                    (t.type = "checkbox"),
                        (v.checkOn = "" !== t.value),
                        (v.optSelected = e.selected),
                        ((t = r.createElement("input")).value = "t"),
                        (t.type = "radio"),
                        (v.radioValue = "t" === t.value);
                })();
            var me,
                ve = _.expr.attrHandle;
            _.fn.extend({
                attr: function (t, e) {
                    return V(this, _.attr, t, e, arguments.length > 1);
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        _.removeAttr(this, t);
                    });
                },
            }),
                _.extend({
                    attr: function (t, e, i) {
                        var s,
                            n,
                            o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === t.getAttribute
                                ? _.prop(t, e, i)
                                : ((1 === o && _.isXMLDoc(t)) ||
                                      (n =
                                          _.attrHooks[e.toLowerCase()] ||
                                          (_.expr.match.bool.test(e)
                                              ? me
                                              : void 0)),
                                  void 0 !== i
                                      ? null === i
                                          ? void _.removeAttr(t, e)
                                          : n &&
                                            "set" in n &&
                                            void 0 !== (s = n.set(t, i, e))
                                          ? s
                                          : (t.setAttribute(e, i + ""), i)
                                      : n &&
                                        "get" in n &&
                                        null !== (s = n.get(t, e))
                                      ? s
                                      : null == (s = _.find.attr(t, e))
                                      ? void 0
                                      : s);
                    },
                    attrHooks: {
                        type: {
                            set: function (t, e) {
                                if (
                                    !v.radioValue &&
                                    "radio" === e &&
                                    z(t, "input")
                                ) {
                                    var i = t.value;
                                    return (
                                        t.setAttribute("type", e),
                                        i && (t.value = i),
                                        e
                                    );
                                }
                            },
                        },
                    },
                    removeAttr: function (t, e) {
                        var i,
                            s = 0,
                            n = e && e.match(R);
                        if (n && 1 === t.nodeType)
                            for (; (i = n[s++]); ) t.removeAttribute(i);
                    },
                }),
                (me = {
                    set: function (t, e, i) {
                        return (
                            !1 === e
                                ? _.removeAttr(t, i)
                                : t.setAttribute(i, i),
                            i
                        );
                    },
                }),
                _.each(_.expr.match.bool.source.match(/\w+/g), function (t, e) {
                    var i = ve[e] || _.find.attr;
                    ve[e] = function (t, e, s) {
                        var n,
                            o,
                            r = e.toLowerCase();
                        return (
                            s ||
                                ((o = ve[r]),
                                (ve[r] = n),
                                (n = null != i(t, e, s) ? r : null),
                                (ve[r] = o)),
                            n
                        );
                    };
                });
            var ye = /^(?:input|select|textarea|button)$/i,
                be = /^(?:a|area)$/i;
            function we(t) {
                return (t.match(R) || []).join(" ");
            }
            function xe(t) {
                return (t.getAttribute && t.getAttribute("class")) || "";
            }
            function Se(t) {
                return Array.isArray(t)
                    ? t
                    : ("string" == typeof t && t.match(R)) || [];
            }
            _.fn.extend({
                prop: function (t, e) {
                    return V(this, _.prop, t, e, arguments.length > 1);
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[_.propFix[t] || t];
                    });
                },
            }),
                _.extend({
                    prop: function (t, e, i) {
                        var s,
                            n,
                            o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return (
                                (1 === o && _.isXMLDoc(t)) ||
                                    ((e = _.propFix[e] || e),
                                    (n = _.propHooks[e])),
                                void 0 !== i
                                    ? n &&
                                      "set" in n &&
                                      void 0 !== (s = n.set(t, i, e))
                                        ? s
                                        : (t[e] = i)
                                    : n &&
                                      "get" in n &&
                                      null !== (s = n.get(t, e))
                                    ? s
                                    : t[e]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (t) {
                                var e = _.find.attr(t, "tabindex");
                                return e
                                    ? parseInt(e, 10)
                                    : ye.test(t.nodeName) ||
                                      (be.test(t.nodeName) && t.href)
                                    ? 0
                                    : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                v.optSelected ||
                    (_.propHooks.selected = {
                        get: function (t) {
                            var e = t.parentNode;
                            return (
                                e && e.parentNode && e.parentNode.selectedIndex,
                                null
                            );
                        },
                        set: function (t) {
                            var e = t.parentNode;
                            e &&
                                (e.selectedIndex,
                                e.parentNode && e.parentNode.selectedIndex);
                        },
                    }),
                _.each(
                    [
                        "tabIndex",
                        "readOnly",
                        "maxLength",
                        "cellSpacing",
                        "cellPadding",
                        "rowSpan",
                        "colSpan",
                        "useMap",
                        "frameBorder",
                        "contentEditable",
                    ],
                    function () {
                        _.propFix[this.toLowerCase()] = this;
                    }
                ),
                _.fn.extend({
                    addClass: function (t) {
                        var e,
                            i,
                            s,
                            n,
                            o,
                            r,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function (e) {
                                _(this).addClass(t.call(this, e, xe(this)));
                            });
                        if ((e = Se(t)).length)
                            for (; (i = this[l++]); )
                                if (
                                    ((n = xe(i)),
                                    (s = 1 === i.nodeType && " " + we(n) + " "))
                                ) {
                                    for (r = 0; (o = e[r++]); )
                                        s.indexOf(" " + o + " ") < 0 &&
                                            (s += o + " ");
                                    n !== (a = we(s)) &&
                                        i.setAttribute("class", a);
                                }
                        return this;
                    },
                    removeClass: function (t) {
                        var e,
                            i,
                            s,
                            n,
                            o,
                            r,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function (e) {
                                _(this).removeClass(t.call(this, e, xe(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = Se(t)).length)
                            for (; (i = this[l++]); )
                                if (
                                    ((n = xe(i)),
                                    (s = 1 === i.nodeType && " " + we(n) + " "))
                                ) {
                                    for (r = 0; (o = e[r++]); )
                                        for (; s.indexOf(" " + o + " ") > -1; )
                                            s = s.replace(" " + o + " ", " ");
                                    n !== (a = we(s)) &&
                                        i.setAttribute("class", a);
                                }
                        return this;
                    },
                    toggleClass: function (t, e) {
                        var i = typeof t,
                            s = "string" === i || Array.isArray(t);
                        return "boolean" == typeof e && s
                            ? e
                                ? this.addClass(t)
                                : this.removeClass(t)
                            : y(t)
                            ? this.each(function (i) {
                                  _(this).toggleClass(
                                      t.call(this, i, xe(this), e),
                                      e
                                  );
                              })
                            : this.each(function () {
                                  var e, n, o, r;
                                  if (s)
                                      for (
                                          n = 0, o = _(this), r = Se(t);
                                          (e = r[n++]);

                                      )
                                          o.hasClass(e)
                                              ? o.removeClass(e)
                                              : o.addClass(e);
                                  else
                                      (void 0 !== t && "boolean" !== i) ||
                                          ((e = xe(this)) &&
                                              J.set(this, "__className__", e),
                                          this.setAttribute &&
                                              this.setAttribute(
                                                  "class",
                                                  e || !1 === t
                                                      ? ""
                                                      : J.get(
                                                            this,
                                                            "__className__"
                                                        ) || ""
                                              ));
                              });
                    },
                    hasClass: function (t) {
                        var e,
                            i,
                            s = 0;
                        for (e = " " + t + " "; (i = this[s++]); )
                            if (
                                1 === i.nodeType &&
                                (" " + we(xe(i)) + " ").indexOf(e) > -1
                            )
                                return !0;
                        return !1;
                    },
                });
            var _e = /\r/g;
            _.fn.extend({
                val: function (t) {
                    var e,
                        i,
                        s,
                        n = this[0];
                    return arguments.length
                        ? ((s = y(t)),
                          this.each(function (i) {
                              var n;
                              1 === this.nodeType &&
                                  (null ==
                                  (n = s ? t.call(this, i, _(this).val()) : t)
                                      ? (n = "")
                                      : "number" == typeof n
                                      ? (n += "")
                                      : Array.isArray(n) &&
                                        (n = _.map(n, function (t) {
                                            return null == t ? "" : t + "";
                                        })),
                                  ((e =
                                      _.valHooks[this.type] ||
                                      _.valHooks[
                                          this.nodeName.toLowerCase()
                                      ]) &&
                                      "set" in e &&
                                      void 0 !== e.set(this, n, "value")) ||
                                      (this.value = n));
                          }))
                        : n
                        ? (e =
                              _.valHooks[n.type] ||
                              _.valHooks[n.nodeName.toLowerCase()]) &&
                          "get" in e &&
                          void 0 !== (i = e.get(n, "value"))
                            ? i
                            : "string" == typeof (i = n.value)
                            ? i.replace(_e, "")
                            : null == i
                            ? ""
                            : i
                        : void 0;
                },
            }),
                _.extend({
                    valHooks: {
                        option: {
                            get: function (t) {
                                var e = _.find.attr(t, "value");
                                return null != e ? e : we(_.text(t));
                            },
                        },
                        select: {
                            get: function (t) {
                                var e,
                                    i,
                                    s,
                                    n = t.options,
                                    o = t.selectedIndex,
                                    r = "select-one" === t.type,
                                    a = r ? null : [],
                                    l = r ? o + 1 : n.length;
                                for (s = o < 0 ? l : r ? o : 0; s < l; s++)
                                    if (
                                        ((i = n[s]).selected || s === o) &&
                                        !i.disabled &&
                                        (!i.parentNode.disabled ||
                                            !z(i.parentNode, "optgroup"))
                                    ) {
                                        if (((e = _(i).val()), r)) return e;
                                        a.push(e);
                                    }
                                return a;
                            },
                            set: function (t, e) {
                                for (
                                    var i,
                                        s,
                                        n = t.options,
                                        o = _.makeArray(e),
                                        r = n.length;
                                    r--;

                                )
                                    ((s = n[r]).selected =
                                        _.inArray(_.valHooks.option.get(s), o) >
                                        -1) && (i = !0);
                                return i || (t.selectedIndex = -1), o;
                            },
                        },
                    },
                }),
                _.each(["radio", "checkbox"], function () {
                    (_.valHooks[this] = {
                        set: function (t, e) {
                            if (Array.isArray(e))
                                return (t.checked =
                                    _.inArray(_(t).val(), e) > -1);
                        },
                    }),
                        v.checkOn ||
                            (_.valHooks[this].get = function (t) {
                                return null === t.getAttribute("value")
                                    ? "on"
                                    : t.value;
                            });
                }),
                (v.focusin = "onfocusin" in i);
            var Ce = /^(?:focusinfocus|focusoutblur)$/,
                Te = function (t) {
                    t.stopPropagation();
                };
            _.extend(_.event, {
                trigger: function (t, e, s, n) {
                    var o,
                        a,
                        l,
                        h,
                        d,
                        u,
                        c,
                        p,
                        g = [s || r],
                        m = f.call(t, "type") ? t.type : t,
                        v = f.call(t, "namespace")
                            ? t.namespace.split(".")
                            : [];
                    if (
                        ((a = p = l = s = s || r),
                        3 !== s.nodeType &&
                            8 !== s.nodeType &&
                            !Ce.test(m + _.event.triggered) &&
                            (m.indexOf(".") > -1 &&
                                ((v = m.split(".")), (m = v.shift()), v.sort()),
                            (d = m.indexOf(":") < 0 && "on" + m),
                            ((t = t[_.expando]
                                ? t
                                : new _.Event(
                                      m,
                                      "object" == typeof t && t
                                  )).isTrigger = n ? 2 : 3),
                            (t.namespace = v.join(".")),
                            (t.rnamespace = t.namespace
                                ? new RegExp(
                                      "(^|\\.)" +
                                          v.join("\\.(?:.*\\.|)") +
                                          "(\\.|$)"
                                  )
                                : null),
                            (t.result = void 0),
                            t.target || (t.target = s),
                            (e = null == e ? [t] : _.makeArray(e, [t])),
                            (c = _.event.special[m] || {}),
                            n || !c.trigger || !1 !== c.trigger.apply(s, e)))
                    ) {
                        if (!n && !c.noBubble && !b(s)) {
                            for (
                                h = c.delegateType || m,
                                    Ce.test(h + m) || (a = a.parentNode);
                                a;
                                a = a.parentNode
                            )
                                g.push(a), (l = a);
                            l === (s.ownerDocument || r) &&
                                g.push(l.defaultView || l.parentWindow || i);
                        }
                        for (o = 0; (a = g[o++]) && !t.isPropagationStopped(); )
                            (p = a),
                                (t.type = o > 1 ? h : c.bindType || m),
                                (u =
                                    (J.get(a, "events") || {})[t.type] &&
                                    J.get(a, "handle")) && u.apply(a, e),
                                (u = d && a[d]) &&
                                    u.apply &&
                                    Z(a) &&
                                    ((t.result = u.apply(a, e)),
                                    !1 === t.result && t.preventDefault());
                        return (
                            (t.type = m),
                            n ||
                                t.isDefaultPrevented() ||
                                (c._default &&
                                    !1 !== c._default.apply(g.pop(), e)) ||
                                !Z(s) ||
                                (d &&
                                    y(s[m]) &&
                                    !b(s) &&
                                    ((l = s[d]) && (s[d] = null),
                                    (_.event.triggered = m),
                                    t.isPropagationStopped() &&
                                        p.addEventListener(m, Te),
                                    s[m](),
                                    t.isPropagationStopped() &&
                                        p.removeEventListener(m, Te),
                                    (_.event.triggered = void 0),
                                    l && (s[d] = l))),
                            t.result
                        );
                    }
                },
                simulate: function (t, e, i) {
                    var s = _.extend(new _.Event(), i, {
                        type: t,
                        isSimulated: !0,
                    });
                    _.event.trigger(s, null, e);
                },
            }),
                _.fn.extend({
                    trigger: function (t, e) {
                        return this.each(function () {
                            _.event.trigger(t, e, this);
                        });
                    },
                    triggerHandler: function (t, e) {
                        var i = this[0];
                        if (i) return _.event.trigger(t, e, i, !0);
                    },
                }),
                v.focusin ||
                    _.each(
                        { focus: "focusin", blur: "focusout" },
                        function (t, e) {
                            var i = function (t) {
                                _.event.simulate(e, t.target, _.event.fix(t));
                            };
                            _.event.special[e] = {
                                setup: function () {
                                    var s = this.ownerDocument || this,
                                        n = J.access(s, e);
                                    n || s.addEventListener(t, i, !0),
                                        J.access(s, e, (n || 0) + 1);
                                },
                                teardown: function () {
                                    var s = this.ownerDocument || this,
                                        n = J.access(s, e) - 1;
                                    n
                                        ? J.access(s, e, n)
                                        : (s.removeEventListener(t, i, !0),
                                          J.remove(s, e));
                                },
                            };
                        }
                    );
            var $e = i.location,
                Pe = Date.now(),
                Ee = /\?/;
            _.parseXML = function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = new i.DOMParser().parseFromString(t, "text/xml");
                } catch (t) {
                    e = void 0;
                }
                return (
                    (e && !e.getElementsByTagName("parsererror").length) ||
                        _.error("Invalid XML: " + t),
                    e
                );
            };
            var Ie = /\[\]$/,
                ze = /\r?\n/g,
                Ae = /^(?:submit|button|image|reset|file)$/i,
                ke = /^(?:input|select|textarea|keygen)/i;
            function De(t, e, i, s) {
                var n;
                if (Array.isArray(e))
                    _.each(e, function (e, n) {
                        i || Ie.test(t)
                            ? s(t, n)
                            : De(
                                  t +
                                      "[" +
                                      ("object" == typeof n && null != n
                                          ? e
                                          : "") +
                                      "]",
                                  n,
                                  i,
                                  s
                              );
                    });
                else if (i || "object" !== S(e)) s(t, e);
                else for (n in e) De(t + "[" + n + "]", e[n], i, s);
            }
            (_.param = function (t, e) {
                var i,
                    s = [],
                    n = function (t, e) {
                        var i = y(e) ? e() : e;
                        s[s.length] =
                            encodeURIComponent(t) +
                            "=" +
                            encodeURIComponent(null == i ? "" : i);
                    };
                if (null == t) return "";
                if (Array.isArray(t) || (t.jquery && !_.isPlainObject(t)))
                    _.each(t, function () {
                        n(this.name, this.value);
                    });
                else for (i in t) De(i, t[i], e, n);
                return s.join("&");
            }),
                _.fn.extend({
                    serialize: function () {
                        return _.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var t = _.prop(this, "elements");
                            return t ? _.makeArray(t) : this;
                        })
                            .filter(function () {
                                var t = this.type;
                                return (
                                    this.name &&
                                    !_(this).is(":disabled") &&
                                    ke.test(this.nodeName) &&
                                    !Ae.test(t) &&
                                    (this.checked || !gt.test(t))
                                );
                            })
                            .map(function (t, e) {
                                var i = _(this).val();
                                return null == i
                                    ? null
                                    : Array.isArray(i)
                                    ? _.map(i, function (t) {
                                          return {
                                              name: e.name,
                                              value: t.replace(ze, "\r\n"),
                                          };
                                      })
                                    : {
                                          name: e.name,
                                          value: i.replace(ze, "\r\n"),
                                      };
                            })
                            .get();
                    },
                });
            var Le = /%20/g,
                Oe = /#.*$/,
                Me = /([?&])_=[^&]*/,
                je = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Re = /^(?:GET|HEAD)$/,
                He = /^\/\//,
                Ne = {},
                qe = {},
                Fe = "*/".concat("*"),
                We = r.createElement("a");
            function Be(t) {
                return function (e, i) {
                    "string" != typeof e && ((i = e), (e = "*"));
                    var s,
                        n = 0,
                        o = e.toLowerCase().match(R) || [];
                    if (y(i))
                        for (; (s = o[n++]); )
                            "+" === s[0]
                                ? ((s = s.slice(1) || "*"),
                                  (t[s] = t[s] || []).unshift(i))
                                : (t[s] = t[s] || []).push(i);
                };
            }
            function Ve(t, e, i, s) {
                var n = {},
                    o = t === qe;
                function r(a) {
                    var l;
                    return (
                        (n[a] = !0),
                        _.each(t[a] || [], function (t, a) {
                            var h = a(e, i, s);
                            return "string" != typeof h || o || n[h]
                                ? o
                                    ? !(l = h)
                                    : void 0
                                : (e.dataTypes.unshift(h), r(h), !1);
                        }),
                        l
                    );
                }
                return r(e.dataTypes[0]) || (!n["*"] && r("*"));
            }
            function Ue(t, e) {
                var i,
                    s,
                    n = _.ajaxSettings.flatOptions || {};
                for (i in e)
                    void 0 !== e[i] && ((n[i] ? t : s || (s = {}))[i] = e[i]);
                return s && _.extend(!0, t, s), t;
            }
            (We.href = $e.href),
                _.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: $e.href,
                        type: "GET",
                        isLocal:
                            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                                $e.protocol
                            ),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType:
                            "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Fe,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript",
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/,
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON",
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": _.parseXML,
                        },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (t, e) {
                        return e
                            ? Ue(Ue(t, _.ajaxSettings), e)
                            : Ue(_.ajaxSettings, t);
                    },
                    ajaxPrefilter: Be(Ne),
                    ajaxTransport: Be(qe),
                    ajax: function (t, e) {
                        "object" == typeof t && ((e = t), (t = void 0)),
                            (e = e || {});
                        var s,
                            n,
                            o,
                            a,
                            l,
                            h,
                            d,
                            u,
                            c,
                            p,
                            f = _.ajaxSetup({}, e),
                            g = f.context || f,
                            m =
                                f.context && (g.nodeType || g.jquery)
                                    ? _(g)
                                    : _.event,
                            v = _.Deferred(),
                            y = _.Callbacks("once memory"),
                            b = f.statusCode || {},
                            w = {},
                            x = {},
                            S = "canceled",
                            C = {
                                readyState: 0,
                                getResponseHeader: function (t) {
                                    var e;
                                    if (d) {
                                        if (!a)
                                            for (a = {}; (e = je.exec(o)); )
                                                a[e[1].toLowerCase() + " "] = (
                                                    a[
                                                        e[1].toLowerCase() + " "
                                                    ] || []
                                                ).concat(e[2]);
                                        e = a[t.toLowerCase() + " "];
                                    }
                                    return null == e ? null : e.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return d ? o : null;
                                },
                                setRequestHeader: function (t, e) {
                                    return (
                                        null == d &&
                                            ((t = x[t.toLowerCase()] =
                                                x[t.toLowerCase()] || t),
                                            (w[t] = e)),
                                        this
                                    );
                                },
                                overrideMimeType: function (t) {
                                    return null == d && (f.mimeType = t), this;
                                },
                                statusCode: function (t) {
                                    var e;
                                    if (t)
                                        if (d) C.always(t[C.status]);
                                        else for (e in t) b[e] = [b[e], t[e]];
                                    return this;
                                },
                                abort: function (t) {
                                    var e = t || S;
                                    return s && s.abort(e), T(0, e), this;
                                },
                            };
                        if (
                            (v.promise(C),
                            (f.url = ((t || f.url || $e.href) + "").replace(
                                He,
                                $e.protocol + "//"
                            )),
                            (f.type = e.method || e.type || f.method || f.type),
                            (f.dataTypes = (f.dataType || "*")
                                .toLowerCase()
                                .match(R) || [""]),
                            null == f.crossDomain)
                        ) {
                            h = r.createElement("a");
                            try {
                                (h.href = f.url),
                                    (h.href = h.href),
                                    (f.crossDomain =
                                        We.protocol + "//" + We.host !=
                                        h.protocol + "//" + h.host);
                            } catch (t) {
                                f.crossDomain = !0;
                            }
                        }
                        if (
                            (f.data &&
                                f.processData &&
                                "string" != typeof f.data &&
                                (f.data = _.param(f.data, f.traditional)),
                            Ve(Ne, f, e, C),
                            d)
                        )
                            return C;
                        for (c in ((u = _.event && f.global) &&
                            0 == _.active++ &&
                            _.event.trigger("ajaxStart"),
                        (f.type = f.type.toUpperCase()),
                        (f.hasContent = !Re.test(f.type)),
                        (n = f.url.replace(Oe, "")),
                        f.hasContent
                            ? f.data &&
                              f.processData &&
                              0 ===
                                  (f.contentType || "").indexOf(
                                      "application/x-www-form-urlencoded"
                                  ) &&
                              (f.data = f.data.replace(Le, "+"))
                            : ((p = f.url.slice(n.length)),
                              f.data &&
                                  (f.processData ||
                                      "string" == typeof f.data) &&
                                  ((n += (Ee.test(n) ? "&" : "?") + f.data),
                                  delete f.data),
                              !1 === f.cache &&
                                  ((n = n.replace(Me, "$1")),
                                  (p =
                                      (Ee.test(n) ? "&" : "?") +
                                      "_=" +
                                      Pe++ +
                                      p)),
                              (f.url = n + p)),
                        f.ifModified &&
                            (_.lastModified[n] &&
                                C.setRequestHeader(
                                    "If-Modified-Since",
                                    _.lastModified[n]
                                ),
                            _.etag[n] &&
                                C.setRequestHeader("If-None-Match", _.etag[n])),
                        ((f.data && f.hasContent && !1 !== f.contentType) ||
                            e.contentType) &&
                            C.setRequestHeader("Content-Type", f.contentType),
                        C.setRequestHeader(
                            "Accept",
                            f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                                ? f.accepts[f.dataTypes[0]] +
                                      ("*" !== f.dataTypes[0]
                                          ? ", " + Fe + "; q=0.01"
                                          : "")
                                : f.accepts["*"]
                        ),
                        f.headers))
                            C.setRequestHeader(c, f.headers[c]);
                        if (
                            f.beforeSend &&
                            (!1 === f.beforeSend.call(g, C, f) || d)
                        )
                            return C.abort();
                        if (
                            ((S = "abort"),
                            y.add(f.complete),
                            C.done(f.success),
                            C.fail(f.error),
                            (s = Ve(qe, f, e, C)))
                        ) {
                            if (
                                ((C.readyState = 1),
                                u && m.trigger("ajaxSend", [C, f]),
                                d)
                            )
                                return C;
                            f.async &&
                                f.timeout > 0 &&
                                (l = i.setTimeout(function () {
                                    C.abort("timeout");
                                }, f.timeout));
                            try {
                                (d = !1), s.send(w, T);
                            } catch (t) {
                                if (d) throw t;
                                T(-1, t);
                            }
                        } else T(-1, "No Transport");
                        function T(t, e, r, a) {
                            var h,
                                c,
                                p,
                                w,
                                x,
                                S = e;
                            d ||
                                ((d = !0),
                                l && i.clearTimeout(l),
                                (s = void 0),
                                (o = a || ""),
                                (C.readyState = t > 0 ? 4 : 0),
                                (h = (t >= 200 && t < 300) || 304 === t),
                                r &&
                                    (w = (function (t, e, i) {
                                        for (
                                            var s,
                                                n,
                                                o,
                                                r,
                                                a = t.contents,
                                                l = t.dataTypes;
                                            "*" === l[0];

                                        )
                                            l.shift(),
                                                void 0 === s &&
                                                    (s =
                                                        t.mimeType ||
                                                        e.getResponseHeader(
                                                            "Content-Type"
                                                        ));
                                        if (s)
                                            for (n in a)
                                                if (a[n] && a[n].test(s)) {
                                                    l.unshift(n);
                                                    break;
                                                }
                                        if (l[0] in i) o = l[0];
                                        else {
                                            for (n in i) {
                                                if (
                                                    !l[0] ||
                                                    t.converters[n + " " + l[0]]
                                                ) {
                                                    o = n;
                                                    break;
                                                }
                                                r || (r = n);
                                            }
                                            o = o || r;
                                        }
                                        if (o)
                                            return (
                                                o !== l[0] && l.unshift(o), i[o]
                                            );
                                    })(f, C, r)),
                                (w = (function (t, e, i, s) {
                                    var n,
                                        o,
                                        r,
                                        a,
                                        l,
                                        h = {},
                                        d = t.dataTypes.slice();
                                    if (d[1])
                                        for (r in t.converters)
                                            h[r.toLowerCase()] =
                                                t.converters[r];
                                    for (o = d.shift(); o; )
                                        if (
                                            (t.responseFields[o] &&
                                                (i[t.responseFields[o]] = e),
                                            !l &&
                                                s &&
                                                t.dataFilter &&
                                                (e = t.dataFilter(
                                                    e,
                                                    t.dataType
                                                )),
                                            (l = o),
                                            (o = d.shift()))
                                        )
                                            if ("*" === o) o = l;
                                            else if ("*" !== l && l !== o) {
                                                if (
                                                    !(r =
                                                        h[l + " " + o] ||
                                                        h["* " + o])
                                                )
                                                    for (n in h)
                                                        if (
                                                            (a =
                                                                n.split(
                                                                    " "
                                                                ))[1] === o &&
                                                            (r =
                                                                h[
                                                                    l +
                                                                        " " +
                                                                        a[0]
                                                                ] ||
                                                                h["* " + a[0]])
                                                        ) {
                                                            !0 === r
                                                                ? (r = h[n])
                                                                : !0 !== h[n] &&
                                                                  ((o = a[0]),
                                                                  d.unshift(
                                                                      a[1]
                                                                  ));
                                                            break;
                                                        }
                                                if (!0 !== r)
                                                    if (r && t.throws) e = r(e);
                                                    else
                                                        try {
                                                            e = r(e);
                                                        } catch (t) {
                                                            return {
                                                                state: "parsererror",
                                                                error: r
                                                                    ? t
                                                                    : "No conversion from " +
                                                                      l +
                                                                      " to " +
                                                                      o,
                                                            };
                                                        }
                                            }
                                    return { state: "success", data: e };
                                })(f, w, C, h)),
                                h
                                    ? (f.ifModified &&
                                          ((x =
                                              C.getResponseHeader(
                                                  "Last-Modified"
                                              )) && (_.lastModified[n] = x),
                                          (x = C.getResponseHeader("etag")) &&
                                              (_.etag[n] = x)),
                                      204 === t || "HEAD" === f.type
                                          ? (S = "nocontent")
                                          : 304 === t
                                          ? (S = "notmodified")
                                          : ((S = w.state),
                                            (c = w.data),
                                            (h = !(p = w.error))))
                                    : ((p = S),
                                      (!t && S) ||
                                          ((S = "error"), t < 0 && (t = 0))),
                                (C.status = t),
                                (C.statusText = (e || S) + ""),
                                h
                                    ? v.resolveWith(g, [c, S, C])
                                    : v.rejectWith(g, [C, S, p]),
                                C.statusCode(b),
                                (b = void 0),
                                u &&
                                    m.trigger(h ? "ajaxSuccess" : "ajaxError", [
                                        C,
                                        f,
                                        h ? c : p,
                                    ]),
                                y.fireWith(g, [C, S]),
                                u &&
                                    (m.trigger("ajaxComplete", [C, f]),
                                    --_.active || _.event.trigger("ajaxStop")));
                        }
                        return C;
                    },
                    getJSON: function (t, e, i) {
                        return _.get(t, e, i, "json");
                    },
                    getScript: function (t, e) {
                        return _.get(t, void 0, e, "script");
                    },
                }),
                _.each(["get", "post"], function (t, e) {
                    _[e] = function (t, i, s, n) {
                        return (
                            y(i) && ((n = n || s), (s = i), (i = void 0)),
                            _.ajax(
                                _.extend(
                                    {
                                        url: t,
                                        type: e,
                                        dataType: n,
                                        data: i,
                                        success: s,
                                    },
                                    _.isPlainObject(t) && t
                                )
                            )
                        );
                    };
                }),
                (_._evalUrl = function (t, e) {
                    return _.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function () {} },
                        dataFilter: function (t) {
                            _.globalEval(t, e);
                        },
                    });
                }),
                _.fn.extend({
                    wrapAll: function (t) {
                        var e;
                        return (
                            this[0] &&
                                (y(t) && (t = t.call(this[0])),
                                (e = _(t, this[0].ownerDocument)
                                    .eq(0)
                                    .clone(!0)),
                                this[0].parentNode && e.insertBefore(this[0]),
                                e
                                    .map(function () {
                                        for (
                                            var t = this;
                                            t.firstElementChild;

                                        )
                                            t = t.firstElementChild;
                                        return t;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (t) {
                        return y(t)
                            ? this.each(function (e) {
                                  _(this).wrapInner(t.call(this, e));
                              })
                            : this.each(function () {
                                  var e = _(this),
                                      i = e.contents();
                                  i.length ? i.wrapAll(t) : e.append(t);
                              });
                    },
                    wrap: function (t) {
                        var e = y(t);
                        return this.each(function (i) {
                            _(this).wrapAll(e ? t.call(this, i) : t);
                        });
                    },
                    unwrap: function (t) {
                        return (
                            this.parent(t)
                                .not("body")
                                .each(function () {
                                    _(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (_.expr.pseudos.hidden = function (t) {
                    return !_.expr.pseudos.visible(t);
                }),
                (_.expr.pseudos.visible = function (t) {
                    return !!(
                        t.offsetWidth ||
                        t.offsetHeight ||
                        t.getClientRects().length
                    );
                }),
                (_.ajaxSettings.xhr = function () {
                    try {
                        return new i.XMLHttpRequest();
                    } catch (t) {}
                });
            var Ge = { 0: 200, 1223: 204 },
                Xe = _.ajaxSettings.xhr();
            (v.cors = !!Xe && "withCredentials" in Xe),
                (v.ajax = Xe = !!Xe),
                _.ajaxTransport(function (t) {
                    var e, s;
                    if (v.cors || (Xe && !t.crossDomain))
                        return {
                            send: function (n, o) {
                                var r,
                                    a = t.xhr();
                                if (
                                    (a.open(
                                        t.type,
                                        t.url,
                                        t.async,
                                        t.username,
                                        t.password
                                    ),
                                    t.xhrFields)
                                )
                                    for (r in t.xhrFields)
                                        a[r] = t.xhrFields[r];
                                for (r in (t.mimeType &&
                                    a.overrideMimeType &&
                                    a.overrideMimeType(t.mimeType),
                                t.crossDomain ||
                                    n["X-Requested-With"] ||
                                    (n["X-Requested-With"] = "XMLHttpRequest"),
                                n))
                                    a.setRequestHeader(r, n[r]);
                                (e = function (t) {
                                    return function () {
                                        e &&
                                            ((e =
                                                s =
                                                a.onload =
                                                a.onerror =
                                                a.onabort =
                                                a.ontimeout =
                                                a.onreadystatechange =
                                                    null),
                                            "abort" === t
                                                ? a.abort()
                                                : "error" === t
                                                ? "number" != typeof a.status
                                                    ? o(0, "error")
                                                    : o(a.status, a.statusText)
                                                : o(
                                                      Ge[a.status] || a.status,
                                                      a.statusText,
                                                      "text" !==
                                                          (a.responseType ||
                                                              "text") ||
                                                          "string" !=
                                                              typeof a.responseText
                                                          ? {
                                                                binary: a.response,
                                                            }
                                                          : {
                                                                text: a.responseText,
                                                            },
                                                      a.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (a.onload = e()),
                                    (s = a.onerror = a.ontimeout = e("error")),
                                    void 0 !== a.onabort
                                        ? (a.onabort = s)
                                        : (a.onreadystatechange = function () {
                                              4 === a.readyState &&
                                                  i.setTimeout(function () {
                                                      e && s();
                                                  });
                                          }),
                                    (e = e("abort"));
                                try {
                                    a.send((t.hasContent && t.data) || null);
                                } catch (t) {
                                    if (e) throw t;
                                }
                            },
                            abort: function () {
                                e && e();
                            },
                        };
                }),
                _.ajaxPrefilter(function (t) {
                    t.crossDomain && (t.contents.script = !1);
                }),
                _.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                    },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (t) {
                            return _.globalEval(t), t;
                        },
                    },
                }),
                _.ajaxPrefilter("script", function (t) {
                    void 0 === t.cache && (t.cache = !1),
                        t.crossDomain && (t.type = "GET");
                }),
                _.ajaxTransport("script", function (t) {
                    var e, i;
                    if (t.crossDomain || t.scriptAttrs)
                        return {
                            send: function (s, n) {
                                (e = _("<script>")
                                    .attr(t.scriptAttrs || {})
                                    .prop({
                                        charset: t.scriptCharset,
                                        src: t.url,
                                    })
                                    .on(
                                        "load error",
                                        (i = function (t) {
                                            e.remove(),
                                                (i = null),
                                                t &&
                                                    n(
                                                        "error" === t.type
                                                            ? 404
                                                            : 200,
                                                        t.type
                                                    );
                                        })
                                    )),
                                    r.head.appendChild(e[0]);
                            },
                            abort: function () {
                                i && i();
                            },
                        };
                });
            var Ye,
                Ze = [],
                Ke = /(=)\?(?=&|$)|\?\?/;
            _.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var t = Ze.pop() || _.expando + "_" + Pe++;
                    return (this[t] = !0), t;
                },
            }),
                _.ajaxPrefilter("json jsonp", function (t, e, s) {
                    var n,
                        o,
                        r,
                        a =
                            !1 !== t.jsonp &&
                            (Ke.test(t.url)
                                ? "url"
                                : "string" == typeof t.data &&
                                  0 ===
                                      (t.contentType || "").indexOf(
                                          "application/x-www-form-urlencoded"
                                      ) &&
                                  Ke.test(t.data) &&
                                  "data");
                    if (a || "jsonp" === t.dataTypes[0])
                        return (
                            (n = t.jsonpCallback =
                                y(t.jsonpCallback)
                                    ? t.jsonpCallback()
                                    : t.jsonpCallback),
                            a
                                ? (t[a] = t[a].replace(Ke, "$1" + n))
                                : !1 !== t.jsonp &&
                                  (t.url +=
                                      (Ee.test(t.url) ? "&" : "?") +
                                      t.jsonp +
                                      "=" +
                                      n),
                            (t.converters["script json"] = function () {
                                return (
                                    r || _.error(n + " was not called"), r[0]
                                );
                            }),
                            (t.dataTypes[0] = "json"),
                            (o = i[n]),
                            (i[n] = function () {
                                r = arguments;
                            }),
                            s.always(function () {
                                void 0 === o ? _(i).removeProp(n) : (i[n] = o),
                                    t[n] &&
                                        ((t.jsonpCallback = e.jsonpCallback),
                                        Ze.push(n)),
                                    r && y(o) && o(r[0]),
                                    (r = o = void 0);
                            }),
                            "script"
                        );
                }),
                (v.createHTMLDocument =
                    (((Ye =
                        r.implementation.createHTMLDocument(
                            ""
                        ).body).innerHTML = "<form></form><form></form>"),
                    2 === Ye.childNodes.length)),
                (_.parseHTML = function (t, e, i) {
                    return "string" != typeof t
                        ? []
                        : ("boolean" == typeof e && ((i = e), (e = !1)),
                          e ||
                              (v.createHTMLDocument
                                  ? (((s = (e =
                                        r.implementation.createHTMLDocument(
                                            ""
                                        )).createElement("base")).href =
                                        r.location.href),
                                    e.head.appendChild(s))
                                  : (e = r)),
                          (o = !i && []),
                          (n = A.exec(t))
                              ? [e.createElement(n[1])]
                              : ((n = Ct([t], e, o)),
                                o && o.length && _(o).remove(),
                                _.merge([], n.childNodes)));
                    var s, n, o;
                }),
                (_.fn.load = function (t, e, i) {
                    var s,
                        n,
                        o,
                        r = this,
                        a = t.indexOf(" ");
                    return (
                        a > -1 && ((s = we(t.slice(a))), (t = t.slice(0, a))),
                        y(e)
                            ? ((i = e), (e = void 0))
                            : e && "object" == typeof e && (n = "POST"),
                        r.length > 0 &&
                            _.ajax({
                                url: t,
                                type: n || "GET",
                                dataType: "html",
                                data: e,
                            })
                                .done(function (t) {
                                    (o = arguments),
                                        r.html(
                                            s
                                                ? _("<div>")
                                                      .append(_.parseHTML(t))
                                                      .find(s)
                                                : t
                                        );
                                })
                                .always(
                                    i &&
                                        function (t, e) {
                                            r.each(function () {
                                                i.apply(
                                                    this,
                                                    o || [t.responseText, e, t]
                                                );
                                            });
                                        }
                                ),
                        this
                    );
                }),
                _.each(
                    [
                        "ajaxStart",
                        "ajaxStop",
                        "ajaxComplete",
                        "ajaxError",
                        "ajaxSuccess",
                        "ajaxSend",
                    ],
                    function (t, e) {
                        _.fn[e] = function (t) {
                            return this.on(e, t);
                        };
                    }
                ),
                (_.expr.pseudos.animated = function (t) {
                    return _.grep(_.timers, function (e) {
                        return t === e.elem;
                    }).length;
                }),
                (_.offset = {
                    setOffset: function (t, e, i) {
                        var s,
                            n,
                            o,
                            r,
                            a,
                            l,
                            h = _.css(t, "position"),
                            d = _(t),
                            u = {};
                        "static" === h && (t.style.position = "relative"),
                            (a = d.offset()),
                            (o = _.css(t, "top")),
                            (l = _.css(t, "left")),
                            ("absolute" === h || "fixed" === h) &&
                            (o + l).indexOf("auto") > -1
                                ? ((r = (s = d.position()).top), (n = s.left))
                                : ((r = parseFloat(o) || 0),
                                  (n = parseFloat(l) || 0)),
                            y(e) && (e = e.call(t, i, _.extend({}, a))),
                            null != e.top && (u.top = e.top - a.top + r),
                            null != e.left && (u.left = e.left - a.left + n),
                            "using" in e ? e.using.call(t, u) : d.css(u);
                    },
                }),
                _.fn.extend({
                    offset: function (t) {
                        if (arguments.length)
                            return void 0 === t
                                ? this
                                : this.each(function (e) {
                                      _.offset.setOffset(this, t, e);
                                  });
                        var e,
                            i,
                            s = this[0];
                        return s
                            ? s.getClientRects().length
                                ? ((e = s.getBoundingClientRect()),
                                  (i = s.ownerDocument.defaultView),
                                  {
                                      top: e.top + i.pageYOffset,
                                      left: e.left + i.pageXOffset,
                                  })
                                : { top: 0, left: 0 }
                            : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var t,
                                e,
                                i,
                                s = this[0],
                                n = { top: 0, left: 0 };
                            if ("fixed" === _.css(s, "position"))
                                e = s.getBoundingClientRect();
                            else {
                                for (
                                    e = this.offset(),
                                        i = s.ownerDocument,
                                        t = s.offsetParent || i.documentElement;
                                    t &&
                                    (t === i.body || t === i.documentElement) &&
                                    "static" === _.css(t, "position");

                                )
                                    t = t.parentNode;
                                t &&
                                    t !== s &&
                                    1 === t.nodeType &&
                                    (((n = _(t).offset()).top += _.css(
                                        t,
                                        "borderTopWidth",
                                        !0
                                    )),
                                    (n.left += _.css(
                                        t,
                                        "borderLeftWidth",
                                        !0
                                    )));
                            }
                            return {
                                top: e.top - n.top - _.css(s, "marginTop", !0),
                                left:
                                    e.left -
                                    n.left -
                                    _.css(s, "marginLeft", !0),
                            };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (
                                var t = this.offsetParent;
                                t && "static" === _.css(t, "position");

                            )
                                t = t.offsetParent;
                            return t || rt;
                        });
                    },
                }),
                _.each(
                    { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                    function (t, e) {
                        var i = "pageYOffset" === e;
                        _.fn[t] = function (s) {
                            return V(
                                this,
                                function (t, s, n) {
                                    var o;
                                    if (
                                        (b(t)
                                            ? (o = t)
                                            : 9 === t.nodeType &&
                                              (o = t.defaultView),
                                        void 0 === n)
                                    )
                                        return o ? o[e] : t[s];
                                    o
                                        ? o.scrollTo(
                                              i ? o.pageXOffset : n,
                                              i ? n : o.pageYOffset
                                          )
                                        : (t[s] = n);
                                },
                                t,
                                s,
                                arguments.length
                            );
                        };
                    }
                ),
                _.each(["top", "left"], function (t, e) {
                    _.cssHooks[e] = Xt(v.pixelPosition, function (t, i) {
                        if (i)
                            return (
                                (i = Gt(t, e)),
                                Bt.test(i) ? _(t).position()[e] + "px" : i
                            );
                    });
                }),
                _.each({ Height: "height", Width: "width" }, function (t, e) {
                    _.each(
                        { padding: "inner" + t, content: e, "": "outer" + t },
                        function (i, s) {
                            _.fn[s] = function (n, o) {
                                var r =
                                        arguments.length &&
                                        (i || "boolean" != typeof n),
                                    a =
                                        i ||
                                        (!0 === n || !0 === o
                                            ? "margin"
                                            : "border");
                                return V(
                                    this,
                                    function (e, i, n) {
                                        var o;
                                        return b(e)
                                            ? 0 === s.indexOf("outer")
                                                ? e["inner" + t]
                                                : e.document.documentElement[
                                                      "client" + t
                                                  ]
                                            : 9 === e.nodeType
                                            ? ((o = e.documentElement),
                                              Math.max(
                                                  e.body["scroll" + t],
                                                  o["scroll" + t],
                                                  e.body["offset" + t],
                                                  o["offset" + t],
                                                  o["client" + t]
                                              ))
                                            : void 0 === n
                                            ? _.css(e, i, a)
                                            : _.style(e, i, n, a);
                                    },
                                    e,
                                    r ? n : void 0,
                                    r
                                );
                            };
                        }
                    );
                }),
                _.each(
                    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                        " "
                    ),
                    function (t, e) {
                        _.fn[e] = function (t, i) {
                            return arguments.length > 0
                                ? this.on(e, null, t, i)
                                : this.trigger(e);
                        };
                    }
                ),
                _.fn.extend({
                    hover: function (t, e) {
                        return this.mouseenter(t).mouseleave(e || t);
                    },
                }),
                _.fn.extend({
                    bind: function (t, e, i) {
                        return this.on(t, null, e, i);
                    },
                    unbind: function (t, e) {
                        return this.off(t, null, e);
                    },
                    delegate: function (t, e, i, s) {
                        return this.on(e, t, i, s);
                    },
                    undelegate: function (t, e, i) {
                        return 1 === arguments.length
                            ? this.off(t, "**")
                            : this.off(e, t || "**", i);
                    },
                }),
                (_.proxy = function (t, e) {
                    var i, s, n;
                    if (
                        ("string" == typeof e && ((i = t[e]), (e = t), (t = i)),
                        y(t))
                    )
                        return (
                            (s = l.call(arguments, 2)),
                            ((n = function () {
                                return t.apply(
                                    e || this,
                                    s.concat(l.call(arguments))
                                );
                            }).guid = t.guid =
                                t.guid || _.guid++),
                            n
                        );
                }),
                (_.holdReady = function (t) {
                    t ? _.readyWait++ : _.ready(!0);
                }),
                (_.isArray = Array.isArray),
                (_.parseJSON = JSON.parse),
                (_.nodeName = z),
                (_.isFunction = y),
                (_.isWindow = b),
                (_.camelCase = Y),
                (_.type = S),
                (_.now = Date.now),
                (_.isNumeric = function (t) {
                    var e = _.type(t);
                    return (
                        ("number" === e || "string" === e) &&
                        !isNaN(t - parseFloat(t))
                    );
                }),
                void 0 ===
                    (s = function () {
                        return _;
                    }.apply(e, [])) || (t.exports = s);
            var Je = i.jQuery,
                Qe = i.$;
            return (
                (_.noConflict = function (t) {
                    return (
                        i.$ === _ && (i.$ = Qe),
                        t && i.jQuery === _ && (i.jQuery = Je),
                        _
                    );
                }),
                n || (i.jQuery = i.$ = _),
                _
            );
        });
    },
    "KDh+": function (t, e, i) {
        "use strict";
        (function (t) {
            i("z1bI");
            var s = i("Zg5M"),
                n = i.n(s),
                o = i("hUol"),
                r = i.n(o),
                a = {
                    init: function () {
                        this.lazyLoadImage(),
                            this.runToken(),
                            this.runMessages(),
                            this.messagesLogin(),
                            this.showCategory(),
                            this.fixTopMenu();
                    },
                    runToken: function () {
                        t.ajaxSetup({
                            headers: {
                                "X-CSRF-TOKEN": t(
                                    'meta[name="csrf-token"]'
                                ).attr("content"),
                            },
                        });
                    },
                    runMessages: function () {
                        if ("undefined" != typeof TYPE_MESSAGE)
                            switch (TYPE_MESSAGE) {
                                case "success":
                                    r.a.success(MESSAGE);
                                    break;
                                case "error":
                                    r.a.error(MESSAGE);
                            }
                    },
                    lazyLoadImage: function () {
                        !(function () {
                            function e(t, e) {
                                Date.now(), e.getAttribute("data-src");
                            }
                            new n.a({
                                elements_selector: ".lazy",
                                load_delay: 500,
                                threshold: 0,
                                callback_enter: function (t) {
                                    e(0, t);
                                },
                                callback_load: function (t) {
                                    e(0, t);
                                },
                                callback_set: function (t) {
                                    e(0, t);
                                },
                                callback_error: function (t) {
                                    e(0, t);
                                },
                            });
                            t(".card-img-top").show();
                        })();
                    },
                    messagesLogin: function () {
                        t(".js-show-login").click(function (t) {
                            return (
                                t.preventDefault(),
                                r.a.warning(
                                    "Bạn phải đăng nhập để thực hiện tính năng này"
                                ),
                                !1
                            );
                        }),
                            t(".js-maintain").click(function (t) {
                                return (
                                    t.preventDefault(),
                                    r.a.warning(
                                        "Tính năng này đang phát triển. Mời bạn quay lại sau"
                                    ),
                                    !1
                                );
                            });
                    },
                    showCategory: function () {
                        t(".js-menu-cate").mouseenter(function () {
                            t("#menu-main").show();
                        }),
                            t("#menu-main").mouseleave(function () {
                                t("#menu-main").hide();
                            });
                    },
                    fixTopMenu: function () {
                        t(document).on("scroll", function () {
                            var e = t(".commonTop");
                            t(window).scrollTop() >= 40
                                ? (console.log("fix Top"),
                                  e.hasClass("fix-top") ||
                                      e.addClass("fix-top"))
                                : e.hasClass("fix-top") &&
                                  e.removeClass("fix-top");
                        });
                    },
                };
            e.a = a;
        }).call(this, i("EVdn"));
    },
    UYrX: function (t, e, i) {
        (function (t, e) {
            var i, s, n;
            !(function (t, i, s, n) {
                function o(e, i) {
                    (this.settings = null),
                        (this.options = t.extend({}, o.Defaults, i)),
                        (this.$element = t(e)),
                        (this._handlers = {}),
                        (this._plugins = {}),
                        (this._supress = {}),
                        (this._current = null),
                        (this._speed = null),
                        (this._coordinates = []),
                        (this._breakpoint = null),
                        (this._width = null),
                        (this._items = []),
                        (this._clones = []),
                        (this._mergers = []),
                        (this._widths = []),
                        (this._invalidated = {}),
                        (this._pipe = []),
                        (this._drag = {
                            time: null,
                            target: null,
                            pointer: null,
                            stage: { start: null, current: null },
                            direction: null,
                        }),
                        (this._states = {
                            current: {},
                            tags: {
                                initializing: ["busy"],
                                animating: ["busy"],
                                dragging: ["interacting"],
                            },
                        }),
                        t.each(
                            ["onResize", "onThrottledResize"],
                            t.proxy(function (e, i) {
                                this._handlers[i] = t.proxy(this[i], this);
                            }, this)
                        ),
                        t.each(
                            o.Plugins,
                            t.proxy(function (t, e) {
                                this._plugins[
                                    t.charAt(0).toLowerCase() + t.slice(1)
                                ] = new e(this);
                            }, this)
                        ),
                        t.each(
                            o.Workers,
                            t.proxy(function (e, i) {
                                this._pipe.push({
                                    filter: i.filter,
                                    run: t.proxy(i.run, this),
                                });
                            }, this)
                        ),
                        this.setup(),
                        this.initialize();
                }
                (o.Defaults = {
                    items: 3,
                    loop: !1,
                    center: !1,
                    rewind: !1,
                    checkVisibility: !0,
                    mouseDrag: !0,
                    touchDrag: !0,
                    pullDrag: !0,
                    freeDrag: !1,
                    margin: 0,
                    stagePadding: 0,
                    merge: !1,
                    mergeFit: !0,
                    autoWidth: !1,
                    startPosition: 0,
                    rtl: !1,
                    smartSpeed: 250,
                    fluidSpeed: !1,
                    dragEndSpeed: !1,
                    responsive: {},
                    responsiveRefreshRate: 200,
                    responsiveBaseElement: i,
                    fallbackEasing: "swing",
                    slideTransition: "",
                    info: !1,
                    nestedItemSelector: !1,
                    itemElement: "div",
                    stageElement: "div",
                    refreshClass: "owl-refresh",
                    loadedClass: "owl-loaded",
                    loadingClass: "owl-loading",
                    rtlClass: "owl-rtl",
                    responsiveClass: "owl-responsive",
                    dragClass: "owl-drag",
                    itemClass: "owl-item",
                    stageClass: "owl-stage",
                    stageOuterClass: "owl-stage-outer",
                    grabClass: "owl-grab",
                }),
                    (o.Width = {
                        Default: "default",
                        Inner: "inner",
                        Outer: "outer",
                    }),
                    (o.Type = { Event: "event", State: "state" }),
                    (o.Plugins = {}),
                    (o.Workers = [
                        {
                            filter: ["width", "settings"],
                            run: function () {
                                this._width = this.$element.width();
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                t.current =
                                    this._items &&
                                    this._items[this.relative(this._current)];
                            },
                        },
                        {
                            filter: ["items", "settings"],
                            run: function () {
                                this.$stage.children(".cloned").remove();
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                var e = this.settings.margin || "",
                                    i = !this.settings.autoWidth,
                                    s = this.settings.rtl,
                                    n = {
                                        width: "auto",
                                        "margin-left": s ? e : "",
                                        "margin-right": s ? "" : e,
                                    };
                                !i && this.$stage.children().css(n),
                                    (t.css = n);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                var e =
                                        (
                                            this.width() / this.settings.items
                                        ).toFixed(3) - this.settings.margin,
                                    i = null,
                                    s = this._items.length,
                                    n = !this.settings.autoWidth,
                                    o = [];
                                for (t.items = { merge: !1, width: e }; s--; )
                                    (i = this._mergers[s]),
                                        (i =
                                            (this.settings.mergeFit &&
                                                Math.min(
                                                    i,
                                                    this.settings.items
                                                )) ||
                                            i),
                                        (t.items.merge =
                                            i > 1 || t.items.merge),
                                        (o[s] = n
                                            ? e * i
                                            : this._items[s].width());
                                this._widths = o;
                            },
                        },
                        {
                            filter: ["items", "settings"],
                            run: function () {
                                var e = [],
                                    i = this._items,
                                    s = this.settings,
                                    n = Math.max(2 * s.items, 4),
                                    o = 2 * Math.ceil(i.length / 2),
                                    r =
                                        s.loop && i.length
                                            ? s.rewind
                                                ? n
                                                : Math.max(n, o)
                                            : 0,
                                    a = "",
                                    l = "";
                                for (r /= 2; r > 0; )
                                    e.push(this.normalize(e.length / 2, !0)),
                                        (a += i[e[e.length - 1]][0].outerHTML),
                                        e.push(
                                            this.normalize(
                                                i.length -
                                                    1 -
                                                    (e.length - 1) / 2,
                                                !0
                                            )
                                        ),
                                        (l =
                                            i[e[e.length - 1]][0].outerHTML +
                                            l),
                                        (r -= 1);
                                (this._clones = e),
                                    t(a)
                                        .addClass("cloned")
                                        .appendTo(this.$stage),
                                    t(l)
                                        .addClass("cloned")
                                        .prependTo(this.$stage);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function () {
                                for (
                                    var t = this.settings.rtl ? 1 : -1,
                                        e =
                                            this._clones.length +
                                            this._items.length,
                                        i = -1,
                                        s = 0,
                                        n = 0,
                                        o = [];
                                    ++i < e;

                                )
                                    (s = o[i - 1] || 0),
                                        (n =
                                            this._widths[this.relative(i)] +
                                            this.settings.margin),
                                        o.push(s + n * t);
                                this._coordinates = o;
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function () {
                                var t = this.settings.stagePadding,
                                    e = this._coordinates,
                                    i = {
                                        width:
                                            Math.ceil(
                                                Math.abs(e[e.length - 1])
                                            ) +
                                            2 * t,
                                        "padding-left": t || "",
                                        "padding-right": t || "",
                                    };
                                this.$stage.css(i);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                var e = this._coordinates.length,
                                    i = !this.settings.autoWidth,
                                    s = this.$stage.children();
                                if (i && t.items.merge)
                                    for (; e--; )
                                        (t.css.width =
                                            this._widths[this.relative(e)]),
                                            s.eq(e).css(t.css);
                                else
                                    i &&
                                        ((t.css.width = t.items.width),
                                        s.css(t.css));
                            },
                        },
                        {
                            filter: ["items"],
                            run: function () {
                                this._coordinates.length < 1 &&
                                    this.$stage.removeAttr("style");
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (t) {
                                (t.current = t.current
                                    ? this.$stage.children().index(t.current)
                                    : 0),
                                    (t.current = Math.max(
                                        this.minimum(),
                                        Math.min(this.maximum(), t.current)
                                    )),
                                    this.reset(t.current);
                            },
                        },
                        {
                            filter: ["position"],
                            run: function () {
                                this.animate(this.coordinates(this._current));
                            },
                        },
                        {
                            filter: ["width", "position", "items", "settings"],
                            run: function () {
                                var t,
                                    e,
                                    i,
                                    s,
                                    n = this.settings.rtl ? 1 : -1,
                                    o = 2 * this.settings.stagePadding,
                                    r = this.coordinates(this.current()) + o,
                                    a = r + this.width() * n,
                                    l = [];
                                for (
                                    i = 0, s = this._coordinates.length;
                                    i < s;
                                    i++
                                )
                                    (t = this._coordinates[i - 1] || 0),
                                        (e =
                                            Math.abs(this._coordinates[i]) +
                                            o * n),
                                        ((this.op(t, "<=", r) &&
                                            this.op(t, ">", a)) ||
                                            (this.op(e, "<", r) &&
                                                this.op(e, ">", a))) &&
                                            l.push(i);
                                this.$stage
                                    .children(".active")
                                    .removeClass("active"),
                                    this.$stage
                                        .children(
                                            ":eq(" + l.join("), :eq(") + ")"
                                        )
                                        .addClass("active"),
                                    this.$stage
                                        .children(".center")
                                        .removeClass("center"),
                                    this.settings.center &&
                                        this.$stage
                                            .children()
                                            .eq(this.current())
                                            .addClass("center");
                            },
                        },
                    ]),
                    (o.prototype.initializeStage = function () {
                        (this.$stage = this.$element.find(
                            "." + this.settings.stageClass
                        )),
                            this.$stage.length ||
                                (this.$element.addClass(
                                    this.options.loadingClass
                                ),
                                (this.$stage = t(
                                    "<" + this.settings.stageElement + ">",
                                    { class: this.settings.stageClass }
                                ).wrap(
                                    t("<div/>", {
                                        class: this.settings.stageOuterClass,
                                    })
                                )),
                                this.$element.append(this.$stage.parent()));
                    }),
                    (o.prototype.initializeItems = function () {
                        var e = this.$element.find(".owl-item");
                        if (e.length)
                            return (
                                (this._items = e.get().map(function (e) {
                                    return t(e);
                                })),
                                (this._mergers = this._items.map(function () {
                                    return 1;
                                })),
                                void this.refresh()
                            );
                        this.replace(
                            this.$element.children().not(this.$stage.parent())
                        ),
                            this.isVisible()
                                ? this.refresh()
                                : this.invalidate("width"),
                            this.$element
                                .removeClass(this.options.loadingClass)
                                .addClass(this.options.loadedClass);
                    }),
                    (o.prototype.initialize = function () {
                        var t, e, i;
                        (this.enter("initializing"),
                        this.trigger("initialize"),
                        this.$element.toggleClass(
                            this.settings.rtlClass,
                            this.settings.rtl
                        ),
                        this.settings.autoWidth && !this.is("pre-loading")) &&
                            ((t = this.$element.find("img")),
                            (e = this.settings.nestedItemSelector
                                ? "." + this.settings.nestedItemSelector
                                : n),
                            (i = this.$element.children(e).width()),
                            t.length &&
                                i <= 0 &&
                                this.preloadAutoWidthImages(t));
                        this.initializeStage(),
                            this.initializeItems(),
                            this.registerEventHandlers(),
                            this.leave("initializing"),
                            this.trigger("initialized");
                    }),
                    (o.prototype.isVisible = function () {
                        return (
                            !this.settings.checkVisibility ||
                            this.$element.is(":visible")
                        );
                    }),
                    (o.prototype.setup = function () {
                        var e = this.viewport(),
                            i = this.options.responsive,
                            s = -1,
                            n = null;
                        i
                            ? (t.each(i, function (t) {
                                  t <= e && t > s && (s = Number(t));
                              }),
                              "function" ==
                                  typeof (n = t.extend({}, this.options, i[s]))
                                      .stagePadding &&
                                  (n.stagePadding = n.stagePadding()),
                              delete n.responsive,
                              n.responsiveClass &&
                                  this.$element.attr(
                                      "class",
                                      this.$element
                                          .attr("class")
                                          .replace(
                                              new RegExp(
                                                  "(" +
                                                      this.options
                                                          .responsiveClass +
                                                      "-)\\S+\\s",
                                                  "g"
                                              ),
                                              "$1" + s
                                          )
                                  ))
                            : (n = t.extend({}, this.options)),
                            this.trigger("change", {
                                property: { name: "settings", value: n },
                            }),
                            (this._breakpoint = s),
                            (this.settings = n),
                            this.invalidate("settings"),
                            this.trigger("changed", {
                                property: {
                                    name: "settings",
                                    value: this.settings,
                                },
                            });
                    }),
                    (o.prototype.optionsLogic = function () {
                        this.settings.autoWidth &&
                            ((this.settings.stagePadding = !1),
                            (this.settings.merge = !1));
                    }),
                    (o.prototype.prepare = function (e) {
                        var i = this.trigger("prepare", { content: e });
                        return (
                            i.data ||
                                (i.data = t(
                                    "<" + this.settings.itemElement + "/>"
                                )
                                    .addClass(this.options.itemClass)
                                    .append(e)),
                            this.trigger("prepared", { content: i.data }),
                            i.data
                        );
                    }),
                    (o.prototype.update = function () {
                        for (
                            var e = 0,
                                i = this._pipe.length,
                                s = t.proxy(function (t) {
                                    return this[t];
                                }, this._invalidated),
                                n = {};
                            e < i;

                        )
                            (this._invalidated.all ||
                                t.grep(this._pipe[e].filter, s).length > 0) &&
                                this._pipe[e].run(n),
                                e++;
                        (this._invalidated = {}),
                            !this.is("valid") && this.enter("valid");
                    }),
                    (o.prototype.width = function (t) {
                        switch ((t = t || o.Width.Default)) {
                            case o.Width.Inner:
                            case o.Width.Outer:
                                return this._width;
                            default:
                                return (
                                    this._width -
                                    2 * this.settings.stagePadding +
                                    this.settings.margin
                                );
                        }
                    }),
                    (o.prototype.refresh = function () {
                        this.enter("refreshing"),
                            this.trigger("refresh"),
                            this.setup(),
                            this.optionsLogic(),
                            this.$element.addClass(this.options.refreshClass),
                            this.update(),
                            this.$element.removeClass(
                                this.options.refreshClass
                            ),
                            this.leave("refreshing"),
                            this.trigger("refreshed");
                    }),
                    (o.prototype.onThrottledResize = function () {
                        i.clearTimeout(this.resizeTimer),
                            (this.resizeTimer = i.setTimeout(
                                this._handlers.onResize,
                                this.settings.responsiveRefreshRate
                            ));
                    }),
                    (o.prototype.onResize = function () {
                        return (
                            !!this._items.length &&
                            this._width !== this.$element.width() &&
                            !!this.isVisible() &&
                            (this.enter("resizing"),
                            this.trigger("resize").isDefaultPrevented()
                                ? (this.leave("resizing"), !1)
                                : (this.invalidate("width"),
                                  this.refresh(),
                                  this.leave("resizing"),
                                  void this.trigger("resized")))
                        );
                    }),
                    (o.prototype.registerEventHandlers = function () {
                        t.support.transition &&
                            this.$stage.on(
                                t.support.transition.end + ".owl.core",
                                t.proxy(this.onTransitionEnd, this)
                            ),
                            !1 !== this.settings.responsive &&
                                this.on(
                                    i,
                                    "resize",
                                    this._handlers.onThrottledResize
                                ),
                            this.settings.mouseDrag &&
                                (this.$element.addClass(this.options.dragClass),
                                this.$stage.on(
                                    "mousedown.owl.core",
                                    t.proxy(this.onDragStart, this)
                                ),
                                this.$stage.on(
                                    "dragstart.owl.core selectstart.owl.core",
                                    function () {
                                        return !1;
                                    }
                                )),
                            this.settings.touchDrag &&
                                (this.$stage.on(
                                    "touchstart.owl.core",
                                    t.proxy(this.onDragStart, this)
                                ),
                                this.$stage.on(
                                    "touchcancel.owl.core",
                                    t.proxy(this.onDragEnd, this)
                                ));
                    }),
                    (o.prototype.onDragStart = function (e) {
                        var i = null;
                        3 !== e.which &&
                            (t.support.transform
                                ? (i = {
                                      x: (i = this.$stage
                                          .css("transform")
                                          .replace(/.*\(|\)| /g, "")
                                          .split(","))[
                                          16 === i.length ? 12 : 4
                                      ],
                                      y: i[16 === i.length ? 13 : 5],
                                  })
                                : ((i = this.$stage.position()),
                                  (i = {
                                      x: this.settings.rtl
                                          ? i.left +
                                            this.$stage.width() -
                                            this.width() +
                                            this.settings.margin
                                          : i.left,
                                      y: i.top,
                                  })),
                            this.is("animating") &&
                                (t.support.transform
                                    ? this.animate(i.x)
                                    : this.$stage.stop(),
                                this.invalidate("position")),
                            this.$element.toggleClass(
                                this.options.grabClass,
                                "mousedown" === e.type
                            ),
                            this.speed(0),
                            (this._drag.time = new Date().getTime()),
                            (this._drag.target = t(e.target)),
                            (this._drag.stage.start = i),
                            (this._drag.stage.current = i),
                            (this._drag.pointer = this.pointer(e)),
                            t(s).on(
                                "mouseup.owl.core touchend.owl.core",
                                t.proxy(this.onDragEnd, this)
                            ),
                            t(s).one(
                                "mousemove.owl.core touchmove.owl.core",
                                t.proxy(function (e) {
                                    var i = this.difference(
                                        this._drag.pointer,
                                        this.pointer(e)
                                    );
                                    t(s).on(
                                        "mousemove.owl.core touchmove.owl.core",
                                        t.proxy(this.onDragMove, this)
                                    ),
                                        (Math.abs(i.x) < Math.abs(i.y) &&
                                            this.is("valid")) ||
                                            (e.preventDefault(),
                                            this.enter("dragging"),
                                            this.trigger("drag"));
                                }, this)
                            ));
                    }),
                    (o.prototype.onDragMove = function (t) {
                        var e = null,
                            i = null,
                            s = null,
                            n = this.difference(
                                this._drag.pointer,
                                this.pointer(t)
                            ),
                            o = this.difference(this._drag.stage.start, n);
                        this.is("dragging") &&
                            (t.preventDefault(),
                            this.settings.loop
                                ? ((e = this.coordinates(this.minimum())),
                                  (i =
                                      this.coordinates(this.maximum() + 1) - e),
                                  (o.x = ((((o.x - e) % i) + i) % i) + e))
                                : ((e = this.settings.rtl
                                      ? this.coordinates(this.maximum())
                                      : this.coordinates(this.minimum())),
                                  (i = this.settings.rtl
                                      ? this.coordinates(this.minimum())
                                      : this.coordinates(this.maximum())),
                                  (s = this.settings.pullDrag
                                      ? (-1 * n.x) / 5
                                      : 0),
                                  (o.x = Math.max(
                                      Math.min(o.x, e + s),
                                      i + s
                                  ))),
                            (this._drag.stage.current = o),
                            this.animate(o.x));
                    }),
                    (o.prototype.onDragEnd = function (e) {
                        var i = this.difference(
                                this._drag.pointer,
                                this.pointer(e)
                            ),
                            n = this._drag.stage.current,
                            o =
                                (i.x > 0) ^ this.settings.rtl
                                    ? "left"
                                    : "right";
                        t(s).off(".owl.core"),
                            this.$element.removeClass(this.options.grabClass),
                            ((0 !== i.x && this.is("dragging")) ||
                                !this.is("valid")) &&
                                (this.speed(
                                    this.settings.dragEndSpeed ||
                                        this.settings.smartSpeed
                                ),
                                this.current(
                                    this.closest(
                                        n.x,
                                        0 !== i.x ? o : this._drag.direction
                                    )
                                ),
                                this.invalidate("position"),
                                this.update(),
                                (this._drag.direction = o),
                                (Math.abs(i.x) > 3 ||
                                    new Date().getTime() - this._drag.time >
                                        300) &&
                                    this._drag.target.one(
                                        "click.owl.core",
                                        function () {
                                            return !1;
                                        }
                                    )),
                            this.is("dragging") &&
                                (this.leave("dragging"),
                                this.trigger("dragged"));
                    }),
                    (o.prototype.closest = function (e, i) {
                        var s = -1,
                            o = this.width(),
                            r = this.coordinates();
                        return (
                            this.settings.freeDrag ||
                                t.each(
                                    r,
                                    t.proxy(function (t, a) {
                                        return (
                                            "left" === i &&
                                            e > a - 30 &&
                                            e < a + 30
                                                ? (s = t)
                                                : "right" === i &&
                                                  e > a - o - 30 &&
                                                  e < a - o + 30
                                                ? (s = t + 1)
                                                : this.op(e, "<", a) &&
                                                  this.op(
                                                      e,
                                                      ">",
                                                      r[t + 1] !== n
                                                          ? r[t + 1]
                                                          : a - o
                                                  ) &&
                                                  (s =
                                                      "left" === i ? t + 1 : t),
                                            -1 === s
                                        );
                                    }, this)
                                ),
                            this.settings.loop ||
                                (this.op(e, ">", r[this.minimum()])
                                    ? (s = e = this.minimum())
                                    : this.op(e, "<", r[this.maximum()]) &&
                                      (s = e = this.maximum())),
                            s
                        );
                    }),
                    (o.prototype.animate = function (e) {
                        var i = this.speed() > 0;
                        this.is("animating") && this.onTransitionEnd(),
                            i &&
                                (this.enter("animating"),
                                this.trigger("translate")),
                            t.support.transform3d && t.support.transition
                                ? this.$stage.css({
                                      transform:
                                          "translate3d(" + e + "px,0px,0px)",
                                      transition:
                                          this.speed() / 1e3 +
                                          "s" +
                                          (this.settings.slideTransition
                                              ? " " +
                                                this.settings.slideTransition
                                              : ""),
                                  })
                                : i
                                ? this.$stage.animate(
                                      { left: e + "px" },
                                      this.speed(),
                                      this.settings.fallbackEasing,
                                      t.proxy(this.onTransitionEnd, this)
                                  )
                                : this.$stage.css({ left: e + "px" });
                    }),
                    (o.prototype.is = function (t) {
                        return (
                            this._states.current[t] &&
                            this._states.current[t] > 0
                        );
                    }),
                    (o.prototype.current = function (t) {
                        if (t === n) return this._current;
                        if (0 === this._items.length) return n;
                        if (((t = this.normalize(t)), this._current !== t)) {
                            var e = this.trigger("change", {
                                property: { name: "position", value: t },
                            });
                            e.data !== n && (t = this.normalize(e.data)),
                                (this._current = t),
                                this.invalidate("position"),
                                this.trigger("changed", {
                                    property: {
                                        name: "position",
                                        value: this._current,
                                    },
                                });
                        }
                        return this._current;
                    }),
                    (o.prototype.invalidate = function (e) {
                        return (
                            "string" === t.type(e) &&
                                ((this._invalidated[e] = !0),
                                this.is("valid") && this.leave("valid")),
                            t.map(this._invalidated, function (t, e) {
                                return e;
                            })
                        );
                    }),
                    (o.prototype.reset = function (t) {
                        (t = this.normalize(t)) !== n &&
                            ((this._speed = 0),
                            (this._current = t),
                            this.suppress(["translate", "translated"]),
                            this.animate(this.coordinates(t)),
                            this.release(["translate", "translated"]));
                    }),
                    (o.prototype.normalize = function (t, e) {
                        var i = this._items.length,
                            s = e ? 0 : this._clones.length;
                        return (
                            !this.isNumeric(t) || i < 1
                                ? (t = n)
                                : (t < 0 || t >= i + s) &&
                                  (t = ((((t - s / 2) % i) + i) % i) + s / 2),
                            t
                        );
                    }),
                    (o.prototype.relative = function (t) {
                        return (
                            (t -= this._clones.length / 2),
                            this.normalize(t, !0)
                        );
                    }),
                    (o.prototype.maximum = function (t) {
                        var e,
                            i,
                            s,
                            n = this.settings,
                            o = this._coordinates.length;
                        if (n.loop)
                            o =
                                this._clones.length / 2 +
                                this._items.length -
                                1;
                        else if (n.autoWidth || n.merge) {
                            if ((e = this._items.length))
                                for (
                                    i = this._items[--e].width(),
                                        s = this.$element.width();
                                    e-- &&
                                    !(
                                        (i +=
                                            this._items[e].width() +
                                            this.settings.margin) > s
                                    );

                                );
                            o = e + 1;
                        } else
                            o = n.center
                                ? this._items.length - 1
                                : this._items.length - n.items;
                        return (
                            t && (o -= this._clones.length / 2), Math.max(o, 0)
                        );
                    }),
                    (o.prototype.minimum = function (t) {
                        return t ? 0 : this._clones.length / 2;
                    }),
                    (o.prototype.items = function (t) {
                        return t === n
                            ? this._items.slice()
                            : ((t = this.normalize(t, !0)), this._items[t]);
                    }),
                    (o.prototype.mergers = function (t) {
                        return t === n
                            ? this._mergers.slice()
                            : ((t = this.normalize(t, !0)), this._mergers[t]);
                    }),
                    (o.prototype.clones = function (e) {
                        var i = this._clones.length / 2,
                            s = i + this._items.length,
                            o = function (t) {
                                return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2;
                            };
                        return e === n
                            ? t.map(this._clones, function (t, e) {
                                  return o(e);
                              })
                            : t.map(this._clones, function (t, i) {
                                  return t === e ? o(i) : null;
                              });
                    }),
                    (o.prototype.speed = function (t) {
                        return t !== n && (this._speed = t), this._speed;
                    }),
                    (o.prototype.coordinates = function (e) {
                        var i,
                            s = 1,
                            o = e - 1;
                        return e === n
                            ? t.map(
                                  this._coordinates,
                                  t.proxy(function (t, e) {
                                      return this.coordinates(e);
                                  }, this)
                              )
                            : (this.settings.center
                                  ? (this.settings.rtl &&
                                        ((s = -1), (o = e + 1)),
                                    (i = this._coordinates[e]),
                                    (i +=
                                        ((this.width() -
                                            i +
                                            (this._coordinates[o] || 0)) /
                                            2) *
                                        s))
                                  : (i = this._coordinates[o] || 0),
                              (i = Math.ceil(i)));
                    }),
                    (o.prototype.duration = function (t, e, i) {
                        return 0 === i
                            ? 0
                            : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                                  Math.abs(i || this.settings.smartSpeed);
                    }),
                    (o.prototype.to = function (t, e) {
                        var i = this.current(),
                            s = null,
                            n = t - this.relative(i),
                            o = (n > 0) - (n < 0),
                            r = this._items.length,
                            a = this.minimum(),
                            l = this.maximum();
                        this.settings.loop
                            ? (!this.settings.rewind &&
                                  Math.abs(n) > r / 2 &&
                                  (n += -1 * o * r),
                              (s = (((((t = i + n) - a) % r) + r) % r) + a) !==
                                  t &&
                                  s - n <= l &&
                                  s - n > 0 &&
                                  ((i = s - n), (t = s), this.reset(i)))
                            : this.settings.rewind
                            ? (t = ((t % (l += 1)) + l) % l)
                            : (t = Math.max(a, Math.min(l, t))),
                            this.speed(this.duration(i, t, e)),
                            this.current(t),
                            this.isVisible() && this.update();
                    }),
                    (o.prototype.next = function (t) {
                        (t = t || !1),
                            this.to(this.relative(this.current()) + 1, t);
                    }),
                    (o.prototype.prev = function (t) {
                        (t = t || !1),
                            this.to(this.relative(this.current()) - 1, t);
                    }),
                    (o.prototype.onTransitionEnd = function (t) {
                        if (
                            t !== n &&
                            (t.stopPropagation(),
                            (t.target || t.srcElement || t.originalTarget) !==
                                this.$stage.get(0))
                        )
                            return !1;
                        this.leave("animating"), this.trigger("translated");
                    }),
                    (o.prototype.viewport = function () {
                        var e;
                        return (
                            this.options.responsiveBaseElement !== i
                                ? (e = t(
                                      this.options.responsiveBaseElement
                                  ).width())
                                : i.innerWidth
                                ? (e = i.innerWidth)
                                : s.documentElement &&
                                  s.documentElement.clientWidth
                                ? (e = s.documentElement.clientWidth)
                                : console.warn(
                                      "Can not detect viewport width."
                                  ),
                            e
                        );
                    }),
                    (o.prototype.replace = function (i) {
                        this.$stage.empty(),
                            (this._items = []),
                            i && (i = i instanceof e ? i : t(i)),
                            this.settings.nestedItemSelector &&
                                (i = i.find(
                                    "." + this.settings.nestedItemSelector
                                )),
                            i
                                .filter(function () {
                                    return 1 === this.nodeType;
                                })
                                .each(
                                    t.proxy(function (t, e) {
                                        (e = this.prepare(e)),
                                            this.$stage.append(e),
                                            this._items.push(e),
                                            this._mergers.push(
                                                1 *
                                                    e
                                                        .find("[data-merge]")
                                                        .addBack("[data-merge]")
                                                        .attr("data-merge") || 1
                                            );
                                    }, this)
                                ),
                            this.reset(
                                this.isNumeric(this.settings.startPosition)
                                    ? this.settings.startPosition
                                    : 0
                            ),
                            this.invalidate("items");
                    }),
                    (o.prototype.add = function (i, s) {
                        var o = this.relative(this._current);
                        (s =
                            s === n
                                ? this._items.length
                                : this.normalize(s, !0)),
                            (i = i instanceof e ? i : t(i)),
                            this.trigger("add", { content: i, position: s }),
                            (i = this.prepare(i)),
                            0 === this._items.length || s === this._items.length
                                ? (0 === this._items.length &&
                                      this.$stage.append(i),
                                  0 !== this._items.length &&
                                      this._items[s - 1].after(i),
                                  this._items.push(i),
                                  this._mergers.push(
                                      1 *
                                          i
                                              .find("[data-merge]")
                                              .addBack("[data-merge]")
                                              .attr("data-merge") || 1
                                  ))
                                : (this._items[s].before(i),
                                  this._items.splice(s, 0, i),
                                  this._mergers.splice(
                                      s,
                                      0,
                                      1 *
                                          i
                                              .find("[data-merge]")
                                              .addBack("[data-merge]")
                                              .attr("data-merge") || 1
                                  )),
                            this._items[o] &&
                                this.reset(this._items[o].index()),
                            this.invalidate("items"),
                            this.trigger("added", { content: i, position: s });
                    }),
                    (o.prototype.remove = function (t) {
                        (t = this.normalize(t, !0)) !== n &&
                            (this.trigger("remove", {
                                content: this._items[t],
                                position: t,
                            }),
                            this._items[t].remove(),
                            this._items.splice(t, 1),
                            this._mergers.splice(t, 1),
                            this.invalidate("items"),
                            this.trigger("removed", {
                                content: null,
                                position: t,
                            }));
                    }),
                    (o.prototype.preloadAutoWidthImages = function (e) {
                        e.each(
                            t.proxy(function (e, i) {
                                this.enter("pre-loading"),
                                    (i = t(i)),
                                    t(new Image())
                                        .one(
                                            "load",
                                            t.proxy(function (t) {
                                                i.attr("src", t.target.src),
                                                    i.css("opacity", 1),
                                                    this.leave("pre-loading"),
                                                    !this.is("pre-loading") &&
                                                        !this.is(
                                                            "initializing"
                                                        ) &&
                                                        this.refresh();
                                            }, this)
                                        )
                                        .attr(
                                            "src",
                                            i.attr("src") ||
                                                i.attr("data-src") ||
                                                i.attr("data-src-retina")
                                        );
                            }, this)
                        );
                    }),
                    (o.prototype.destroy = function () {
                        for (var e in (this.$element.off(".owl.core"),
                        this.$stage.off(".owl.core"),
                        t(s).off(".owl.core"),
                        !1 !== this.settings.responsive &&
                            (i.clearTimeout(this.resizeTimer),
                            this.off(
                                i,
                                "resize",
                                this._handlers.onThrottledResize
                            )),
                        this._plugins))
                            this._plugins[e].destroy();
                        this.$stage.children(".cloned").remove(),
                            this.$stage.unwrap(),
                            this.$stage.children().contents().unwrap(),
                            this.$stage.children().unwrap(),
                            this.$stage.remove(),
                            this.$element
                                .removeClass(this.options.refreshClass)
                                .removeClass(this.options.loadingClass)
                                .removeClass(this.options.loadedClass)
                                .removeClass(this.options.rtlClass)
                                .removeClass(this.options.dragClass)
                                .removeClass(this.options.grabClass)
                                .attr(
                                    "class",
                                    this.$element
                                        .attr("class")
                                        .replace(
                                            new RegExp(
                                                this.options.responsiveClass +
                                                    "-\\S+\\s",
                                                "g"
                                            ),
                                            ""
                                        )
                                )
                                .removeData("owl.carousel");
                    }),
                    (o.prototype.op = function (t, e, i) {
                        var s = this.settings.rtl;
                        switch (e) {
                            case "<":
                                return s ? t > i : t < i;
                            case ">":
                                return s ? t < i : t > i;
                            case ">=":
                                return s ? t <= i : t >= i;
                            case "<=":
                                return s ? t >= i : t <= i;
                        }
                    }),
                    (o.prototype.on = function (t, e, i, s) {
                        t.addEventListener
                            ? t.addEventListener(e, i, s)
                            : t.attachEvent && t.attachEvent("on" + e, i);
                    }),
                    (o.prototype.off = function (t, e, i, s) {
                        t.removeEventListener
                            ? t.removeEventListener(e, i, s)
                            : t.detachEvent && t.detachEvent("on" + e, i);
                    }),
                    (o.prototype.trigger = function (e, i, s, n, r) {
                        var a = {
                                item: {
                                    count: this._items.length,
                                    index: this.current(),
                                },
                            },
                            l = t.camelCase(
                                t
                                    .grep(["on", e, s], function (t) {
                                        return t;
                                    })
                                    .join("-")
                                    .toLowerCase()
                            ),
                            h = t.Event(
                                [e, "owl", s || "carousel"]
                                    .join(".")
                                    .toLowerCase(),
                                t.extend({ relatedTarget: this }, a, i)
                            );
                        return (
                            this._supress[e] ||
                                (t.each(this._plugins, function (t, e) {
                                    e.onTrigger && e.onTrigger(h);
                                }),
                                this.register({ type: o.Type.Event, name: e }),
                                this.$element.trigger(h),
                                this.settings &&
                                    "function" == typeof this.settings[l] &&
                                    this.settings[l].call(this, h)),
                            h
                        );
                    }),
                    (o.prototype.enter = function (e) {
                        t.each(
                            [e].concat(this._states.tags[e] || []),
                            t.proxy(function (t, e) {
                                this._states.current[e] === n &&
                                    (this._states.current[e] = 0),
                                    this._states.current[e]++;
                            }, this)
                        );
                    }),
                    (o.prototype.leave = function (e) {
                        t.each(
                            [e].concat(this._states.tags[e] || []),
                            t.proxy(function (t, e) {
                                this._states.current[e]--;
                            }, this)
                        );
                    }),
                    (o.prototype.register = function (e) {
                        if (e.type === o.Type.Event) {
                            if (
                                (t.event.special[e.name] ||
                                    (t.event.special[e.name] = {}),
                                !t.event.special[e.name].owl)
                            ) {
                                var i = t.event.special[e.name]._default;
                                (t.event.special[e.name]._default = function (
                                    t
                                ) {
                                    return !i ||
                                        !i.apply ||
                                        (t.namespace &&
                                            -1 !== t.namespace.indexOf("owl"))
                                        ? t.namespace &&
                                              t.namespace.indexOf("owl") > -1
                                        : i.apply(this, arguments);
                                }),
                                    (t.event.special[e.name].owl = !0);
                            }
                        } else
                            e.type === o.Type.State &&
                                (this._states.tags[e.name]
                                    ? (this._states.tags[e.name] =
                                          this._states.tags[e.name].concat(
                                              e.tags
                                          ))
                                    : (this._states.tags[e.name] = e.tags),
                                (this._states.tags[e.name] = t.grep(
                                    this._states.tags[e.name],
                                    t.proxy(function (i, s) {
                                        return (
                                            t.inArray(
                                                i,
                                                this._states.tags[e.name]
                                            ) === s
                                        );
                                    }, this)
                                )));
                    }),
                    (o.prototype.suppress = function (e) {
                        t.each(
                            e,
                            t.proxy(function (t, e) {
                                this._supress[e] = !0;
                            }, this)
                        );
                    }),
                    (o.prototype.release = function (e) {
                        t.each(
                            e,
                            t.proxy(function (t, e) {
                                delete this._supress[e];
                            }, this)
                        );
                    }),
                    (o.prototype.pointer = function (t) {
                        var e = { x: null, y: null };
                        return (
                            (t =
                                (t = t.originalEvent || t || i.event).touches &&
                                t.touches.length
                                    ? t.touches[0]
                                    : t.changedTouches &&
                                      t.changedTouches.length
                                    ? t.changedTouches[0]
                                    : t).pageX
                                ? ((e.x = t.pageX), (e.y = t.pageY))
                                : ((e.x = t.clientX), (e.y = t.clientY)),
                            e
                        );
                    }),
                    (o.prototype.isNumeric = function (t) {
                        return !isNaN(parseFloat(t));
                    }),
                    (o.prototype.difference = function (t, e) {
                        return { x: t.x - e.x, y: t.y - e.y };
                    }),
                    (t.fn.owlCarousel = function (e) {
                        var i = Array.prototype.slice.call(arguments, 1);
                        return this.each(function () {
                            var s = t(this),
                                n = s.data("owl.carousel");
                            n ||
                                ((n = new o(this, "object" == typeof e && e)),
                                s.data("owl.carousel", n),
                                t.each(
                                    [
                                        "next",
                                        "prev",
                                        "to",
                                        "destroy",
                                        "refresh",
                                        "replace",
                                        "add",
                                        "remove",
                                    ],
                                    function (e, i) {
                                        n.register({
                                            type: o.Type.Event,
                                            name: i,
                                        }),
                                            n.$element.on(
                                                i + ".owl.carousel.core",
                                                t.proxy(function (t) {
                                                    t.namespace &&
                                                        t.relatedTarget !==
                                                            this &&
                                                        (this.suppress([i]),
                                                        n[i].apply(
                                                            this,
                                                            [].slice.call(
                                                                arguments,
                                                                1
                                                            )
                                                        ),
                                                        this.release([i]));
                                                }, n)
                                            );
                                    }
                                )),
                                "string" == typeof e &&
                                    "_" !== e.charAt(0) &&
                                    n[e].apply(n, i);
                        });
                    }),
                    (t.fn.owlCarousel.Constructor = o);
            })(window.Zepto || t, window, document),
                (i = window.Zepto || t),
                (s = window),
                document,
                ((n = function (t) {
                    (this._core = t),
                        (this._interval = null),
                        (this._visible = null),
                        (this._handlers = {
                            "initialized.owl.carousel": i.proxy(function (t) {
                                t.namespace &&
                                    this._core.settings.autoRefresh &&
                                    this.watch();
                            }, this),
                        }),
                        (this._core.options = i.extend(
                            {},
                            n.Defaults,
                            this._core.options
                        )),
                        this._core.$element.on(this._handlers);
                }).Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
                (n.prototype.watch = function () {
                    this._interval ||
                        ((this._visible = this._core.isVisible()),
                        (this._interval = s.setInterval(
                            i.proxy(this.refresh, this),
                            this._core.settings.autoRefreshInterval
                        )));
                }),
                (n.prototype.refresh = function () {
                    this._core.isVisible() !== this._visible &&
                        ((this._visible = !this._visible),
                        this._core.$element.toggleClass(
                            "owl-hidden",
                            !this._visible
                        ),
                        this._visible &&
                            this._core.invalidate("width") &&
                            this._core.refresh());
                }),
                (n.prototype.destroy = function () {
                    var t, e;
                    for (t in (s.clearInterval(this._interval), this._handlers))
                        this._core.$element.off(t, this._handlers[t]);
                    for (e in Object.getOwnPropertyNames(this))
                        "function" != typeof this[e] && (this[e] = null);
                }),
                (i.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n),
                (function (t, e, i, s) {
                    var n = function (e) {
                        (this._core = e),
                            (this._loaded = []),
                            (this._handlers = {
                                "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                                    t.proxy(function (e) {
                                        if (
                                            e.namespace &&
                                            this._core.settings &&
                                            this._core.settings.lazyLoad &&
                                            ((e.property &&
                                                "position" ==
                                                    e.property.name) ||
                                                "initialized" == e.type)
                                        ) {
                                            var i = this._core.settings,
                                                s =
                                                    (i.center &&
                                                        Math.ceil(
                                                            i.items / 2
                                                        )) ||
                                                    i.items,
                                                n = (i.center && -1 * s) || 0,
                                                o =
                                                    (e.property &&
                                                    void 0 !== e.property.value
                                                        ? e.property.value
                                                        : this._core.current()) +
                                                    n,
                                                r = this._core.clones().length,
                                                a = t.proxy(function (t, e) {
                                                    this.load(e);
                                                }, this);
                                            for (
                                                i.lazyLoadEager > 0 &&
                                                ((s += i.lazyLoadEager),
                                                i.loop &&
                                                    ((o -= i.lazyLoadEager),
                                                    s++));
                                                n++ < s;

                                            )
                                                this.load(
                                                    r / 2 +
                                                        this._core.relative(o)
                                                ),
                                                    r &&
                                                        t.each(
                                                            this._core.clones(
                                                                this._core.relative(
                                                                    o
                                                                )
                                                            ),
                                                            a
                                                        ),
                                                    o++;
                                        }
                                    }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                n.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers);
                    };
                    (n.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
                        (n.prototype.load = function (i) {
                            var s = this._core.$stage.children().eq(i),
                                n = s && s.find(".owl-lazy");
                            !n ||
                                t.inArray(s.get(0), this._loaded) > -1 ||
                                (n.each(
                                    t.proxy(function (i, s) {
                                        var n,
                                            o = t(s),
                                            r =
                                                (e.devicePixelRatio > 1 &&
                                                    o.attr(
                                                        "data-src-retina"
                                                    )) ||
                                                o.attr("data-src") ||
                                                o.attr("data-srcset");
                                        this._core.trigger(
                                            "load",
                                            { element: o, url: r },
                                            "lazy"
                                        ),
                                            o.is("img")
                                                ? o
                                                      .one(
                                                          "load.owl.lazy",
                                                          t.proxy(function () {
                                                              o.css(
                                                                  "opacity",
                                                                  1
                                                              ),
                                                                  this._core.trigger(
                                                                      "loaded",
                                                                      {
                                                                          element:
                                                                              o,
                                                                          url: r,
                                                                      },
                                                                      "lazy"
                                                                  );
                                                          }, this)
                                                      )
                                                      .attr("src", r)
                                                : o.is("source")
                                                ? o
                                                      .one(
                                                          "load.owl.lazy",
                                                          t.proxy(function () {
                                                              this._core.trigger(
                                                                  "loaded",
                                                                  {
                                                                      element:
                                                                          o,
                                                                      url: r,
                                                                  },
                                                                  "lazy"
                                                              );
                                                          }, this)
                                                      )
                                                      .attr("srcset", r)
                                                : (((n = new Image()).onload =
                                                      t.proxy(function () {
                                                          o.css({
                                                              "background-image":
                                                                  'url("' +
                                                                  r +
                                                                  '")',
                                                              opacity: "1",
                                                          }),
                                                              this._core.trigger(
                                                                  "loaded",
                                                                  {
                                                                      element:
                                                                          o,
                                                                      url: r,
                                                                  },
                                                                  "lazy"
                                                              );
                                                      }, this)),
                                                  (n.src = r));
                                    }, this)
                                ),
                                this._loaded.push(s.get(0)));
                        }),
                        (n.prototype.destroy = function () {
                            var t, e;
                            for (t in this.handlers)
                                this._core.$element.off(t, this.handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Lazy = n);
                })(window.Zepto || t, window, document),
                (function (t, e, i, s) {
                    var n = function (i) {
                        (this._core = i),
                            (this._previousHeight = null),
                            (this._handlers = {
                                "initialized.owl.carousel refreshed.owl.carousel":
                                    t.proxy(function (t) {
                                        t.namespace &&
                                            this._core.settings.autoHeight &&
                                            this.update();
                                    }, this),
                                "changed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.autoHeight &&
                                        "position" === t.property.name &&
                                        this.update();
                                }, this),
                                "loaded.owl.lazy": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.autoHeight &&
                                        t.element
                                            .closest(
                                                "." +
                                                    this._core.settings
                                                        .itemClass
                                            )
                                            .index() === this._core.current() &&
                                        this.update();
                                }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                n.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers),
                            (this._intervalId = null);
                        var s = this;
                        t(e).on("load", function () {
                            s._core.settings.autoHeight && s.update();
                        }),
                            t(e).resize(function () {
                                s._core.settings.autoHeight &&
                                    (null != s._intervalId &&
                                        clearTimeout(s._intervalId),
                                    (s._intervalId = setTimeout(function () {
                                        s.update();
                                    }, 250)));
                            });
                    };
                    (n.Defaults = {
                        autoHeight: !1,
                        autoHeightClass: "owl-height",
                    }),
                        (n.prototype.update = function () {
                            var e = this._core._current,
                                i = e + this._core.settings.items,
                                s = this._core.settings.lazyLoad,
                                n = this._core.$stage
                                    .children()
                                    .toArray()
                                    .slice(e, i),
                                o = [],
                                r = 0;
                            t.each(n, function (e, i) {
                                o.push(t(i).height());
                            }),
                                (r = Math.max.apply(null, o)) <= 1 &&
                                    s &&
                                    this._previousHeight &&
                                    (r = this._previousHeight),
                                (this._previousHeight = r),
                                this._core.$stage
                                    .parent()
                                    .height(r)
                                    .addClass(
                                        this._core.settings.autoHeightClass
                                    );
                        }),
                        (n.prototype.destroy = function () {
                            var t, e;
                            for (t in this._handlers)
                                this._core.$element.off(t, this._handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n);
                })(window.Zepto || t, window, document),
                (function (t, e, i, s) {
                    var n = function (e) {
                        (this._core = e),
                            (this._videos = {}),
                            (this._playing = null),
                            (this._handlers = {
                                "initialized.owl.carousel": t.proxy(function (
                                    t
                                ) {
                                    t.namespace &&
                                        this._core.register({
                                            type: "state",
                                            name: "playing",
                                            tags: ["interacting"],
                                        });
                                },
                                this),
                                "resize.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.video &&
                                        this.isInFullScreen() &&
                                        t.preventDefault();
                                }, this),
                                "refreshed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.is("resizing") &&
                                        this._core.$stage
                                            .find(".cloned .owl-video-frame")
                                            .remove();
                                }, this),
                                "changed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        "position" === t.property.name &&
                                        this._playing &&
                                        this.stop();
                                }, this),
                                "prepared.owl.carousel": t.proxy(function (e) {
                                    if (e.namespace) {
                                        var i = t(e.content).find(".owl-video");
                                        i.length &&
                                            (i.css("display", "none"),
                                            this.fetch(i, t(e.content)));
                                    }
                                }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                n.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers),
                            this._core.$element.on(
                                "click.owl.video",
                                ".owl-video-play-icon",
                                t.proxy(function (t) {
                                    this.play(t);
                                }, this)
                            );
                    };
                    (n.Defaults = {
                        video: !1,
                        videoHeight: !1,
                        videoWidth: !1,
                    }),
                        (n.prototype.fetch = function (t, e) {
                            var i = t.attr("data-vimeo-id")
                                    ? "vimeo"
                                    : t.attr("data-vzaar-id")
                                    ? "vzaar"
                                    : "youtube",
                                s =
                                    t.attr("data-vimeo-id") ||
                                    t.attr("data-youtube-id") ||
                                    t.attr("data-vzaar-id"),
                                n =
                                    t.attr("data-width") ||
                                    this._core.settings.videoWidth,
                                o =
                                    t.attr("data-height") ||
                                    this._core.settings.videoHeight,
                                r = t.attr("href");
                            if (!r) throw new Error("Missing video URL.");
                            if (
                                (s = r.match(
                                    /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                                ))[3].indexOf("youtu") > -1
                            )
                                i = "youtube";
                            else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
                            else {
                                if (!(s[3].indexOf("vzaar") > -1))
                                    throw new Error("Video URL not supported.");
                                i = "vzaar";
                            }
                            (s = s[6]),
                                (this._videos[r] = {
                                    type: i,
                                    id: s,
                                    width: n,
                                    height: o,
                                }),
                                e.attr("data-video", r),
                                this.thumbnail(t, this._videos[r]);
                        }),
                        (n.prototype.thumbnail = function (e, i) {
                            var s,
                                n,
                                o =
                                    i.width && i.height
                                        ? "width:" +
                                          i.width +
                                          "px;height:" +
                                          i.height +
                                          "px;"
                                        : "",
                                r = e.find("img"),
                                a = "src",
                                l = "",
                                h = this._core.settings,
                                d = function (i) {
                                    '<div class="owl-video-play-icon"></div>',
                                        (s = h.lazyLoad
                                            ? t("<div/>", {
                                                  class: "owl-video-tn " + l,
                                                  srcType: i,
                                              })
                                            : t("<div/>", {
                                                  class: "owl-video-tn",
                                                  style:
                                                      "opacity:1;background-image:url(" +
                                                      i +
                                                      ")",
                                              })),
                                        e.after(s),
                                        e.after(
                                            '<div class="owl-video-play-icon"></div>'
                                        );
                                };
                            if (
                                (e.wrap(
                                    t("<div/>", {
                                        class: "owl-video-wrapper",
                                        style: o,
                                    })
                                ),
                                this._core.settings.lazyLoad &&
                                    ((a = "data-src"), (l = "owl-lazy")),
                                r.length)
                            )
                                return d(r.attr(a)), r.remove(), !1;
                            "youtube" === i.type
                                ? ((n =
                                      "//img.youtube.com/vi/" +
                                      i.id +
                                      "/hqdefault.jpg"),
                                  d(n))
                                : "vimeo" === i.type
                                ? t.ajax({
                                      type: "GET",
                                      url:
                                          "//vimeo.com/api/v2/video/" +
                                          i.id +
                                          ".json",
                                      jsonp: "callback",
                                      dataType: "jsonp",
                                      success: function (t) {
                                          (n = t[0].thumbnail_large), d(n);
                                      },
                                  })
                                : "vzaar" === i.type &&
                                  t.ajax({
                                      type: "GET",
                                      url:
                                          "//vzaar.com/api/videos/" +
                                          i.id +
                                          ".json",
                                      jsonp: "callback",
                                      dataType: "jsonp",
                                      success: function (t) {
                                          (n = t.framegrab_url), d(n);
                                      },
                                  });
                        }),
                        (n.prototype.stop = function () {
                            this._core.trigger("stop", null, "video"),
                                this._playing.find(".owl-video-frame").remove(),
                                this._playing.removeClass("owl-video-playing"),
                                (this._playing = null),
                                this._core.leave("playing"),
                                this._core.trigger("stopped", null, "video");
                        }),
                        (n.prototype.play = function (e) {
                            var i,
                                s = t(e.target).closest(
                                    "." + this._core.settings.itemClass
                                ),
                                n = this._videos[s.attr("data-video")],
                                o = n.width || "100%",
                                r = n.height || this._core.$stage.height();
                            this._playing ||
                                (this._core.enter("playing"),
                                this._core.trigger("play", null, "video"),
                                (s = this._core.items(
                                    this._core.relative(s.index())
                                )),
                                this._core.reset(s.index()),
                                (i = t(
                                    '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                                )).attr("height", r),
                                i.attr("width", o),
                                "youtube" === n.type
                                    ? i.attr(
                                          "src",
                                          "//www.youtube.com/embed/" +
                                              n.id +
                                              "?autoplay=1&rel=0&v=" +
                                              n.id
                                      )
                                    : "vimeo" === n.type
                                    ? i.attr(
                                          "src",
                                          "//player.vimeo.com/video/" +
                                              n.id +
                                              "?autoplay=1"
                                      )
                                    : "vzaar" === n.type &&
                                      i.attr(
                                          "src",
                                          "//view.vzaar.com/" +
                                              n.id +
                                              "/player?autoplay=true"
                                      ),
                                t(i)
                                    .wrap('<div class="owl-video-frame" />')
                                    .insertAfter(s.find(".owl-video")),
                                (this._playing =
                                    s.addClass("owl-video-playing")));
                        }),
                        (n.prototype.isInFullScreen = function () {
                            var e =
                                i.fullscreenElement ||
                                i.mozFullScreenElement ||
                                i.webkitFullscreenElement;
                            return (
                                e && t(e).parent().hasClass("owl-video-frame")
                            );
                        }),
                        (n.prototype.destroy = function () {
                            var t, e;
                            for (t in (this._core.$element.off(
                                "click.owl.video"
                            ),
                            this._handlers))
                                this._core.$element.off(t, this._handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Video = n);
                })(window.Zepto || t, window, document),
                (function (t, e, i, s) {
                    var n = function (e) {
                        (this.core = e),
                            (this.core.options = t.extend(
                                {},
                                n.Defaults,
                                this.core.options
                            )),
                            (this.swapping = !0),
                            (this.previous = s),
                            (this.next = s),
                            (this.handlers = {
                                "change.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        "position" == t.property.name &&
                                        ((this.previous = this.core.current()),
                                        (this.next = t.property.value));
                                }, this),
                                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                                    t.proxy(function (t) {
                                        t.namespace &&
                                            (this.swapping =
                                                "translated" == t.type);
                                    }, this),
                                "translate.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this.swapping &&
                                        (this.core.options.animateOut ||
                                            this.core.options.animateIn) &&
                                        this.swap();
                                }, this),
                            }),
                            this.core.$element.on(this.handlers);
                    };
                    (n.Defaults = { animateOut: !1, animateIn: !1 }),
                        (n.prototype.swap = function () {
                            if (
                                1 === this.core.settings.items &&
                                t.support.animation &&
                                t.support.transition
                            ) {
                                this.core.speed(0);
                                var e,
                                    i = t.proxy(this.clear, this),
                                    s = this.core.$stage
                                        .children()
                                        .eq(this.previous),
                                    n = this.core.$stage
                                        .children()
                                        .eq(this.next),
                                    o = this.core.settings.animateIn,
                                    r = this.core.settings.animateOut;
                                this.core.current() !== this.previous &&
                                    (r &&
                                        ((e =
                                            this.core.coordinates(
                                                this.previous
                                            ) -
                                            this.core.coordinates(this.next)),
                                        s
                                            .one(t.support.animation.end, i)
                                            .css({ left: e + "px" })
                                            .addClass(
                                                "animated owl-animated-out"
                                            )
                                            .addClass(r)),
                                    o &&
                                        n
                                            .one(t.support.animation.end, i)
                                            .addClass(
                                                "animated owl-animated-in"
                                            )
                                            .addClass(o));
                            }
                        }),
                        (n.prototype.clear = function (e) {
                            t(e.target)
                                .css({ left: "" })
                                .removeClass(
                                    "animated owl-animated-out owl-animated-in"
                                )
                                .removeClass(this.core.settings.animateIn)
                                .removeClass(this.core.settings.animateOut),
                                this.core.onTransitionEnd();
                        }),
                        (n.prototype.destroy = function () {
                            var t, e;
                            for (t in this.handlers)
                                this.core.$element.off(t, this.handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Animate = n);
                })(window.Zepto || t, window, document),
                (function (t, e, i, s) {
                    var n = function (e) {
                        (this._core = e),
                            (this._call = null),
                            (this._time = 0),
                            (this._timeout = 0),
                            (this._paused = !0),
                            (this._handlers = {
                                "changed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                    "settings" === t.property.name
                                        ? this._core.settings.autoplay
                                            ? this.play()
                                            : this.stop()
                                        : t.namespace &&
                                          "position" === t.property.name &&
                                          this._paused &&
                                          (this._time = 0);
                                }, this),
                                "initialized.owl.carousel": t.proxy(function (
                                    t
                                ) {
                                    t.namespace &&
                                        this._core.settings.autoplay &&
                                        this.play();
                                },
                                this),
                                "play.owl.autoplay": t.proxy(function (
                                    t,
                                    e,
                                    i
                                ) {
                                    t.namespace && this.play(e, i);
                                },
                                this),
                                "stop.owl.autoplay": t.proxy(function (t) {
                                    t.namespace && this.stop();
                                }, this),
                                "mouseover.owl.autoplay": t.proxy(function () {
                                    this._core.settings.autoplayHoverPause &&
                                        this._core.is("rotating") &&
                                        this.pause();
                                }, this),
                                "mouseleave.owl.autoplay": t.proxy(function () {
                                    this._core.settings.autoplayHoverPause &&
                                        this._core.is("rotating") &&
                                        this.play();
                                }, this),
                                "touchstart.owl.core": t.proxy(function () {
                                    this._core.settings.autoplayHoverPause &&
                                        this._core.is("rotating") &&
                                        this.pause();
                                }, this),
                                "touchend.owl.core": t.proxy(function () {
                                    this._core.settings.autoplayHoverPause &&
                                        this.play();
                                }, this),
                            }),
                            this._core.$element.on(this._handlers),
                            (this._core.options = t.extend(
                                {},
                                n.Defaults,
                                this._core.options
                            ));
                    };
                    (n.Defaults = {
                        autoplay: !1,
                        autoplayTimeout: 5e3,
                        autoplayHoverPause: !1,
                        autoplaySpeed: !1,
                    }),
                        (n.prototype._next = function (s) {
                            (this._call = e.setTimeout(
                                t.proxy(this._next, this, s),
                                this._timeout *
                                    (Math.round(this.read() / this._timeout) +
                                        1) -
                                    this.read()
                            )),
                                this._core.is("interacting") ||
                                    i.hidden ||
                                    this._core.next(
                                        s || this._core.settings.autoplaySpeed
                                    );
                        }),
                        (n.prototype.read = function () {
                            return new Date().getTime() - this._time;
                        }),
                        (n.prototype.play = function (i, s) {
                            var n;
                            this._core.is("rotating") ||
                                this._core.enter("rotating"),
                                (i = i || this._core.settings.autoplayTimeout),
                                (n = Math.min(
                                    this._time % (this._timeout || i),
                                    i
                                )),
                                this._paused
                                    ? ((this._time = this.read()),
                                      (this._paused = !1))
                                    : e.clearTimeout(this._call),
                                (this._time += (this.read() % i) - n),
                                (this._timeout = i),
                                (this._call = e.setTimeout(
                                    t.proxy(this._next, this, s),
                                    i - n
                                ));
                        }),
                        (n.prototype.stop = function () {
                            this._core.is("rotating") &&
                                ((this._time = 0),
                                (this._paused = !0),
                                e.clearTimeout(this._call),
                                this._core.leave("rotating"));
                        }),
                        (n.prototype.pause = function () {
                            this._core.is("rotating") &&
                                !this._paused &&
                                ((this._time = this.read()),
                                (this._paused = !0),
                                e.clearTimeout(this._call));
                        }),
                        (n.prototype.destroy = function () {
                            var t, e;
                            for (t in (this.stop(), this._handlers))
                                this._core.$element.off(t, this._handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.autoplay = n);
                })(window.Zepto || t, window, document),
                (function (t, e, i, s) {
                    "use strict";
                    var n = function (e) {
                        (this._core = e),
                            (this._initialized = !1),
                            (this._pages = []),
                            (this._controls = {}),
                            (this._templates = []),
                            (this.$element = this._core.$element),
                            (this._overrides = {
                                next: this._core.next,
                                prev: this._core.prev,
                                to: this._core.to,
                            }),
                            (this._handlers = {
                                "prepared.owl.carousel": t.proxy(function (e) {
                                    e.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.push(
                                            '<div class="' +
                                                this._core.settings.dotClass +
                                                '">' +
                                                t(e.content)
                                                    .find("[data-dot]")
                                                    .addBack("[data-dot]")
                                                    .attr("data-dot") +
                                                "</div>"
                                        );
                                }, this),
                                "added.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.splice(
                                            t.position,
                                            0,
                                            this._templates.pop()
                                        );
                                }, this),
                                "remove.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.splice(t.position, 1);
                                }, this),
                                "changed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        "position" == t.property.name &&
                                        this.draw();
                                }, this),
                                "initialized.owl.carousel": t.proxy(function (
                                    t
                                ) {
                                    t.namespace &&
                                        !this._initialized &&
                                        (this._core.trigger(
                                            "initialize",
                                            null,
                                            "navigation"
                                        ),
                                        this.initialize(),
                                        this.update(),
                                        this.draw(),
                                        (this._initialized = !0),
                                        this._core.trigger(
                                            "initialized",
                                            null,
                                            "navigation"
                                        ));
                                },
                                this),
                                "refreshed.owl.carousel": t.proxy(function (t) {
                                    t.namespace &&
                                        this._initialized &&
                                        (this._core.trigger(
                                            "refresh",
                                            null,
                                            "navigation"
                                        ),
                                        this.update(),
                                        this.draw(),
                                        this._core.trigger(
                                            "refreshed",
                                            null,
                                            "navigation"
                                        ));
                                }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                n.Defaults,
                                this._core.options
                            )),
                            this.$element.on(this._handlers);
                    };
                    (n.Defaults = {
                        nav: !1,
                        navText: [
                            '<span aria-label="Previous">&#x2039;</span>',
                            '<span aria-label="Next">&#x203a;</span>',
                        ],
                        navSpeed: !1,
                        navElement: 'button type="button" role="presentation"',
                        navContainer: !1,
                        navContainerClass: "owl-nav",
                        navClass: ["owl-prev", "owl-next"],
                        slideBy: 1,
                        dotClass: "owl-dot",
                        dotsClass: "owl-dots",
                        dots: !0,
                        dotsEach: !1,
                        dotsData: !1,
                        dotsSpeed: !1,
                        dotsContainer: !1,
                    }),
                        (n.prototype.initialize = function () {
                            var e,
                                i = this._core.settings;
                            for (e in ((this._controls.$relative = (
                                i.navContainer
                                    ? t(i.navContainer)
                                    : t("<div>")
                                          .addClass(i.navContainerClass)
                                          .appendTo(this.$element)
                            ).addClass("disabled")),
                            (this._controls.$previous = t(
                                "<" + i.navElement + ">"
                            )
                                .addClass(i.navClass[0])
                                .html(i.navText[0])
                                .prependTo(this._controls.$relative)
                                .on(
                                    "click",
                                    t.proxy(function (t) {
                                        this.prev(i.navSpeed);
                                    }, this)
                                )),
                            (this._controls.$next = t("<" + i.navElement + ">")
                                .addClass(i.navClass[1])
                                .html(i.navText[1])
                                .appendTo(this._controls.$relative)
                                .on(
                                    "click",
                                    t.proxy(function (t) {
                                        this.next(i.navSpeed);
                                    }, this)
                                )),
                            i.dotsData ||
                                (this._templates = [
                                    t('<button role="button">')
                                        .addClass(i.dotClass)
                                        .append(t("<span>"))
                                        .prop("outerHTML"),
                                ]),
                            (this._controls.$absolute = (
                                i.dotsContainer
                                    ? t(i.dotsContainer)
                                    : t("<div>")
                                          .addClass(i.dotsClass)
                                          .appendTo(this.$element)
                            ).addClass("disabled")),
                            this._controls.$absolute.on(
                                "click",
                                "button",
                                t.proxy(function (e) {
                                    var s = t(e.target)
                                        .parent()
                                        .is(this._controls.$absolute)
                                        ? t(e.target).index()
                                        : t(e.target).parent().index();
                                    e.preventDefault(), this.to(s, i.dotsSpeed);
                                }, this)
                            ),
                            this._overrides))
                                this._core[e] = t.proxy(this[e], this);
                        }),
                        (n.prototype.destroy = function () {
                            var t, e, i, s, n;
                            for (t in ((n = this._core.settings),
                            this._handlers))
                                this.$element.off(t, this._handlers[t]);
                            for (e in this._controls)
                                "$relative" === e && n.navContainer
                                    ? this._controls[e].html("")
                                    : this._controls[e].remove();
                            for (s in this.overides)
                                this._core[s] = this._overrides[s];
                            for (i in Object.getOwnPropertyNames(this))
                                "function" != typeof this[i] &&
                                    (this[i] = null);
                        }),
                        (n.prototype.update = function () {
                            var t,
                                e,
                                i = this._core.clones().length / 2,
                                s = i + this._core.items().length,
                                n = this._core.maximum(!0),
                                o = this._core.settings,
                                r =
                                    o.center || o.autoWidth || o.dotsData
                                        ? 1
                                        : o.dotsEach || o.items;
                            if (
                                ("page" !== o.slideBy &&
                                    (o.slideBy = Math.min(o.slideBy, o.items)),
                                o.dots || "page" == o.slideBy)
                            )
                                for (
                                    this._pages = [], t = i, e = 0, 0;
                                    t < s;
                                    t++
                                ) {
                                    if (e >= r || 0 === e) {
                                        if (
                                            (this._pages.push({
                                                start: Math.min(n, t - i),
                                                end: t - i + r - 1,
                                            }),
                                            Math.min(n, t - i) === n)
                                        )
                                            break;
                                        e = 0;
                                    }
                                    e += this._core.mergers(
                                        this._core.relative(t)
                                    );
                                }
                        }),
                        (n.prototype.draw = function () {
                            var e,
                                i = this._core.settings,
                                s = this._core.items().length <= i.items,
                                n = this._core.relative(this._core.current()),
                                o = i.loop || i.rewind;
                            this._controls.$relative.toggleClass(
                                "disabled",
                                !i.nav || s
                            ),
                                i.nav &&
                                    (this._controls.$previous.toggleClass(
                                        "disabled",
                                        !o && n <= this._core.minimum(!0)
                                    ),
                                    this._controls.$next.toggleClass(
                                        "disabled",
                                        !o && n >= this._core.maximum(!0)
                                    )),
                                this._controls.$absolute.toggleClass(
                                    "disabled",
                                    !i.dots || s
                                ),
                                i.dots &&
                                    ((e =
                                        this._pages.length -
                                        this._controls.$absolute.children()
                                            .length),
                                    i.dotsData && 0 !== e
                                        ? this._controls.$absolute.html(
                                              this._templates.join("")
                                          )
                                        : e > 0
                                        ? this._controls.$absolute.append(
                                              new Array(e + 1).join(
                                                  this._templates[0]
                                              )
                                          )
                                        : e < 0 &&
                                          this._controls.$absolute
                                              .children()
                                              .slice(e)
                                              .remove(),
                                    this._controls.$absolute
                                        .find(".active")
                                        .removeClass("active"),
                                    this._controls.$absolute
                                        .children()
                                        .eq(
                                            t.inArray(
                                                this.current(),
                                                this._pages
                                            )
                                        )
                                        .addClass("active"));
                        }),
                        (n.prototype.onTrigger = function (e) {
                            var i = this._core.settings;
                            e.page = {
                                index: t.inArray(this.current(), this._pages),
                                count: this._pages.length,
                                size:
                                    i &&
                                    (i.center || i.autoWidth || i.dotsData
                                        ? 1
                                        : i.dotsEach || i.items),
                            };
                        }),
                        (n.prototype.current = function () {
                            var e = this._core.relative(this._core.current());
                            return t
                                .grep(
                                    this._pages,
                                    t.proxy(function (t, i) {
                                        return t.start <= e && t.end >= e;
                                    }, this)
                                )
                                .pop();
                        }),
                        (n.prototype.getPosition = function (e) {
                            var i,
                                s,
                                n = this._core.settings;
                            return (
                                "page" == n.slideBy
                                    ? ((i = t.inArray(
                                          this.current(),
                                          this._pages
                                      )),
                                      (s = this._pages.length),
                                      e ? ++i : --i,
                                      (i =
                                          this._pages[((i % s) + s) % s].start))
                                    : ((i = this._core.relative(
                                          this._core.current()
                                      )),
                                      (s = this._core.items().length),
                                      e ? (i += n.slideBy) : (i -= n.slideBy)),
                                i
                            );
                        }),
                        (n.prototype.next = function (e) {
                            t.proxy(this._overrides.to, this._core)(
                                this.getPosition(!0),
                                e
                            );
                        }),
                        (n.prototype.prev = function (e) {
                            t.proxy(this._overrides.to, this._core)(
                                this.getPosition(!1),
                                e
                            );
                        }),
                        (n.prototype.to = function (e, i, s) {
                            var n;
                            !s && this._pages.length
                                ? ((n = this._pages.length),
                                  t.proxy(this._overrides.to, this._core)(
                                      this._pages[((e % n) + n) % n].start,
                                      i
                                  ))
                                : t.proxy(this._overrides.to, this._core)(e, i);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Navigation = n);
                })(window.Zepto || t, window, document),
                (function (t, e, i, s) {
                    "use strict";
                    var n = function (i) {
                        (this._core = i),
                            (this._hashes = {}),
                            (this.$element = this._core.$element),
                            (this._handlers = {
                                "initialized.owl.carousel": t.proxy(function (
                                    i
                                ) {
                                    i.namespace &&
                                        "URLHash" ===
                                            this._core.settings.startPosition &&
                                        t(e).trigger(
                                            "hashchange.owl.navigation"
                                        );
                                },
                                this),
                                "prepared.owl.carousel": t.proxy(function (e) {
                                    if (e.namespace) {
                                        var i = t(e.content)
                                            .find("[data-hash]")
                                            .addBack("[data-hash]")
                                            .attr("data-hash");
                                        if (!i) return;
                                        this._hashes[i] = e.content;
                                    }
                                }, this),
                                "changed.owl.carousel": t.proxy(function (i) {
                                    if (
                                        i.namespace &&
                                        "position" === i.property.name
                                    ) {
                                        var s = this._core.items(
                                                this._core.relative(
                                                    this._core.current()
                                                )
                                            ),
                                            n = t
                                                .map(
                                                    this._hashes,
                                                    function (t, e) {
                                                        return t === s
                                                            ? e
                                                            : null;
                                                    }
                                                )
                                                .join();
                                        if (
                                            !n ||
                                            e.location.hash.slice(1) === n
                                        )
                                            return;
                                        e.location.hash = n;
                                    }
                                }, this),
                            }),
                            (this._core.options = t.extend(
                                {},
                                n.Defaults,
                                this._core.options
                            )),
                            this.$element.on(this._handlers),
                            t(e).on(
                                "hashchange.owl.navigation",
                                t.proxy(function (t) {
                                    var i = e.location.hash.substring(1),
                                        s = this._core.$stage.children(),
                                        n =
                                            this._hashes[i] &&
                                            s.index(this._hashes[i]);
                                    void 0 !== n &&
                                        n !== this._core.current() &&
                                        this._core.to(
                                            this._core.relative(n),
                                            !1,
                                            !0
                                        );
                                }, this)
                            );
                    };
                    (n.Defaults = { URLhashListener: !1 }),
                        (n.prototype.destroy = function () {
                            var i, s;
                            for (i in (t(e).off("hashchange.owl.navigation"),
                            this._handlers))
                                this._core.$element.off(i, this._handlers[i]);
                            for (s in Object.getOwnPropertyNames(this))
                                "function" != typeof this[s] &&
                                    (this[s] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Hash = n);
                })(window.Zepto || t, window, document),
                (function (t, e, i, s) {
                    function n(e, i) {
                        var s = !1,
                            n = e.charAt(0).toUpperCase() + e.slice(1);
                        return (
                            t.each(
                                (e + " " + a.join(n + " ") + n).split(" "),
                                function (t, e) {
                                    if (void 0 !== r[e])
                                        return (s = !i || e), !1;
                                }
                            ),
                            s
                        );
                    }
                    function o(t) {
                        return n(t, !0);
                    }
                    var r = t("<support>").get(0).style,
                        a = "Webkit Moz O ms".split(" "),
                        l = {
                            transition: {
                                end: {
                                    WebkitTransition: "webkitTransitionEnd",
                                    MozTransition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    transition: "transitionend",
                                },
                            },
                            animation: {
                                end: {
                                    WebkitAnimation: "webkitAnimationEnd",
                                    MozAnimation: "animationend",
                                    OAnimation: "oAnimationEnd",
                                    animation: "animationend",
                                },
                            },
                        },
                        h = function () {
                            return !!n("transform");
                        },
                        d = function () {
                            return !!n("perspective");
                        },
                        u = function () {
                            return !!n("animation");
                        };
                    (function () {
                        return !!n("transition");
                    })() &&
                        ((t.support.transition = new String(o("transition"))),
                        (t.support.transition.end =
                            l.transition.end[t.support.transition])),
                        u() &&
                            ((t.support.animation = new String(o("animation"))),
                            (t.support.animation.end =
                                l.animation.end[t.support.animation])),
                        h() &&
                            ((t.support.transform = new String(o("transform"))),
                            (t.support.transform3d = d()));
                })(window.Zepto || t, window, document);
        }).call(this, i("EVdn"), i("EVdn"));
    },
    WkSt: function (t, e, i) {
        "use strict";
        i.d(e, "a", function () {
            return s;
        });
        var s = function (t) {
            var e = function () {
                    var e = document.createElement("link");
                    (e.rel = "stylesheet"),
                        (e.href = t),
                        document.getElementsByTagName("head")[0].append(e);
                },
                i =
                    requestAnimationFrame ||
                    mozRequestAnimationFrame ||
                    webkitRequestAnimationFrame ||
                    msRequestAnimationFrame;
            i ? i(e) : window.addEventListener("load", e);
        };
    },
    Zg5M: function (t, e, i) {
        var s, n;
        function o(t) {
            return (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                      })(t);
        }
        var r =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var s in i)
                            Object.prototype.hasOwnProperty.call(i, s) &&
                                (t[s] = i[s]);
                    }
                    return t;
                },
            a =
                "function" == typeof Symbol && "symbol" == o(Symbol.iterator)
                    ? function (t) {
                          return o(t);
                      }
                    : function (t) {
                          return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : o(t);
                      };
        !(function (o, r) {
            "object" === a(e) && void 0 !== t
                ? (t.exports = r())
                : void 0 ===
                      (n =
                          "function" == typeof (s = r)
                              ? s.call(e, i, e, t)
                              : s) || (t.exports = n);
        })(0, function () {
            "use strict";
            function t(t, e, i) {
                var s = e._settings;
                (!i && a(t)) ||
                    (_(s.callback_enter, t),
                    I.indexOf(t.tagName) > -1 &&
                        (E(t, e), S(t, s.class_loading)),
                    x(t, e),
                    o(t),
                    _(s.callback_set, t));
            }
            var e = {
                    elements_selector: "img",
                    container: document,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    load_delay: 0,
                    callback_load: null,
                    callback_error: null,
                    callback_set: null,
                    callback_enter: null,
                    callback_finish: null,
                    to_webp: !1,
                },
                i = function (t) {
                    return r({}, e, t);
                },
                s = function (t, e) {
                    return t.getAttribute("data-" + e);
                },
                n = function (t, e, i) {
                    var s = "data-" + e;
                    null !== i ? t.setAttribute(s, i) : t.removeAttribute(s);
                },
                o = function (t) {
                    return n(t, "was-processed", "true");
                },
                a = function (t) {
                    return "true" === s(t, "was-processed");
                },
                l = function (t, e) {
                    return n(t, "ll-timeout", e);
                },
                h = function (t) {
                    return s(t, "ll-timeout");
                },
                d = function (t, e) {
                    var i,
                        s = new t(e);
                    try {
                        i = new CustomEvent("LazyLoad::Initialized", {
                            detail: { instance: s },
                        });
                    } catch (t) {
                        (i =
                            document.createEvent(
                                "CustomEvent"
                            )).initCustomEvent(
                            "LazyLoad::Initialized",
                            !1,
                            !1,
                            {
                                instance: s,
                            }
                        );
                    }
                    window.dispatchEvent(i);
                },
                u = function (t, e) {
                    return e ? t.replace(/\.(jpe?g|png)/gi, ".webp") : t;
                },
                c = "undefined" != typeof window,
                p =
                    (c && !("onscroll" in window)) ||
                    /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
                f = c && "IntersectionObserver" in window,
                g = c && "classList" in document.createElement("p"),
                m =
                    c &&
                    (function () {
                        var t = document.createElement("canvas");
                        return (
                            !(!t.getContext || !t.getContext("2d")) &&
                            0 ===
                                t
                                    .toDataURL("image/webp")
                                    .indexOf("data:image/webp")
                        );
                    })(),
                v = function (t, e, i, n) {
                    for (var o, r = 0; (o = t.children[r]); r += 1)
                        if ("SOURCE" === o.tagName) {
                            var a = s(o, i);
                            y(o, e, a, n);
                        }
                },
                y = function (t, e, i, s) {
                    i && t.setAttribute(e, u(i, s));
                },
                b = function (t, e) {
                    var i = m && e.to_webp,
                        n = s(t, e.data_src),
                        o = s(t, e.data_bg);
                    if (n) {
                        var r = u(n, i);
                        t.style.backgroundImage = 'url("' + r + '")';
                    }
                    if (o) {
                        var a = u(o, i);
                        t.style.backgroundImage = a;
                    }
                },
                w = {
                    IMG: function (t, e) {
                        var i = m && e.to_webp,
                            n = e.data_srcset,
                            o = t.parentNode;
                        o && "PICTURE" === o.tagName && v(o, "srcset", n, i);
                        var r = s(t, e.data_sizes);
                        y(t, "sizes", r);
                        var a = s(t, n);
                        y(t, "srcset", a, i);
                        var l = s(t, e.data_src);
                        y(t, "src", l, i);
                    },
                    IFRAME: function (t, e) {
                        var i = s(t, e.data_src);
                        y(t, "src", i);
                    },
                    VIDEO: function (t, e) {
                        var i = e.data_src,
                            n = s(t, i);
                        v(t, "src", i), y(t, "src", n), t.load();
                    },
                },
                x = function (t, e) {
                    var i = e._settings,
                        s = t.tagName,
                        n = w[s];
                    if (n)
                        return (
                            n(t, i),
                            e._updateLoadingCount(1),
                            void (e._elements = (function (t, e) {
                                return t.filter(function (t) {
                                    return t !== e;
                                });
                            })(e._elements, t))
                        );
                    b(t, i);
                },
                S = function (t, e) {
                    g
                        ? t.classList.add(e)
                        : (t.className += (t.className ? " " : "") + e);
                },
                _ = function (t, e) {
                    t && t(e);
                },
                C = function (t, e, i) {
                    t.addEventListener(e, i);
                },
                T = function (t, e, i) {
                    t.removeEventListener(e, i);
                },
                $ = function (t, e, i) {
                    T(t, "load", e), T(t, "loadeddata", e), T(t, "error", i);
                },
                P = function (t, e, i) {
                    var s = i._settings,
                        n = e ? s.class_loaded : s.class_error,
                        o = e ? s.callback_load : s.callback_error,
                        r = t.target;
                    (function (t, e) {
                        g
                            ? t.classList.remove(e)
                            : (t.className = t.className
                                  .replace(
                                      new RegExp("(^|\\s+)" + e + "(\\s+|$)"),
                                      " "
                                  )
                                  .replace(/^\s+/, "")
                                  .replace(/\s+$/, ""));
                    })(r, s.class_loading),
                        S(r, n),
                        _(o, r),
                        i._updateLoadingCount(-1);
                },
                E = function (t, e) {
                    var i = function i(n) {
                            P(n, !0, e), $(t, i, s);
                        },
                        s = function s(n) {
                            P(n, !1, e), $(t, i, s);
                        };
                    !(function (t, e, i) {
                        C(t, "load", e),
                            C(t, "loadeddata", e),
                            C(t, "error", i);
                    })(t, i, s);
                },
                I = ["IMG", "IFRAME", "VIDEO"],
                z = function (e, i, s) {
                    t(e, s), i.unobserve(e);
                },
                A = function (t) {
                    var e = h(t);
                    e && (clearTimeout(e), l(t, null));
                },
                k = function (t) {
                    return t.isIntersecting || t.intersectionRatio > 0;
                },
                D = function (t, e) {
                    (this._settings = i(t)),
                        this._setObserver(),
                        (this._loadingCount = 0),
                        this.update(e);
                };
            return (
                (D.prototype = {
                    _manageIntersection: function (t) {
                        var e = this._observer,
                            i = this._settings.load_delay,
                            s = t.target;
                        i
                            ? k(t)
                                ? (function (t, e, i) {
                                      var s = i._settings.load_delay,
                                          n = h(t);
                                      n ||
                                          ((n = setTimeout(function () {
                                              z(t, e, i), A(t);
                                          }, s)),
                                          l(t, n));
                                  })(s, e, this)
                                : A(s)
                            : k(t) && z(s, e, this);
                    },
                    _onIntersection: function (t) {
                        t.forEach(this._manageIntersection.bind(this));
                    },
                    _setObserver: function () {
                        f &&
                            (this._observer = new IntersectionObserver(
                                this._onIntersection.bind(this),
                                (function (t) {
                                    return {
                                        root:
                                            t.container === document
                                                ? null
                                                : t.container,
                                        rootMargin:
                                            t.thresholds || t.threshold + "px",
                                    };
                                })(this._settings)
                            ));
                    },
                    _updateLoadingCount: function (t) {
                        (this._loadingCount += t),
                            0 === this._elements.length &&
                                0 === this._loadingCount &&
                                _(this._settings.callback_finish);
                    },
                    update: function (t) {
                        var e = this,
                            i = this._settings,
                            s =
                                t ||
                                i.container.querySelectorAll(
                                    i.elements_selector
                                );
                        (this._elements = (function (t) {
                            return t.filter(function (t) {
                                return !a(t);
                            });
                        })(Array.prototype.slice.call(s))),
                            !p && this._observer
                                ? this._elements.forEach(function (t) {
                                      e._observer.observe(t);
                                  })
                                : this.loadAll();
                    },
                    destroy: function () {
                        var t = this;
                        this._observer &&
                            (this._elements.forEach(function (e) {
                                t._observer.unobserve(e);
                            }),
                            (this._observer = null)),
                            (this._elements = null),
                            (this._settings = null);
                    },
                    load: function (e, i) {
                        t(e, this, i);
                    },
                    loadAll: function () {
                        var t = this;
                        this._elements.forEach(function (e) {
                            t.load(e);
                        });
                    },
                }),
                c &&
                    (function (t, e) {
                        if (e)
                            if (e.length)
                                for (var i, s = 0; (i = e[s]); s += 1) d(t, i);
                            else d(t, e);
                    })(D, window.lazyLoadOptions),
                D
            );
        });
    },
    aWfg: function (t, e, i) {
        "use strict";
        i.r(e),
            function (t) {
                i("835U"), i("UYrX");
                var e = i("KDh+"),
                    s = i("WkSt"),
                    n = {
                        init: function () {
                            this.checkHideActiveParam(),
                                this.showSort(),
                                this.loadCssLazy(),
                                this.getListProductView();
                        },
                        loadCssLazy: function () {
                            "undefined" != typeof CSS && Object(s.a)(CSS);
                        },
                        checkHideActiveParam: function () {
                            t(".js-param-search").click(function (e) {
                                e.preventDefault();
                                var i = t(this),
                                    s = i.attr("data-param"),
                                    n = i.find("a").attr("href");
                                i.hasClass("active") && (n = n.replace(s, "")),
                                    (window.location.href = n);
                            });
                        },
                        showSort: function () {
                            t(".js-show-sort").click(function (e) {
                                e.preventDefault(),
                                    t(this).next().slideToggle();
                            });
                        },
                        getListProductView: function () {
                            if ("undefined" != typeof LOADPRODUCTVIEW) {
                                var i = localStorage.getItem("products");
                                (i = t.parseJSON(i)),
                                    t.ajax({
                                        url: LOADPRODUCTVIEW,
                                        method: "GET",
                                        data: { id: i },
                                        success: function (i) {
                                            t("#user-product-view").html(
                                                i.data
                                            ),
                                                e.a.init();
                                        },
                                    });
                            }
                        },
                    };
                t(function () {
                    n.init(), e.a.init();
                });
            }.call(this, i("EVdn"));
    },
    hUol: function (t, e, i) {
        var s, n;
        i("B9Yq"),
            (s = [i("EVdn")]),
            void 0 ===
                (n = function (t) {
                    return (function () {
                        var e,
                            i,
                            s,
                            n = 0,
                            o = "error",
                            r = "info",
                            a = "success",
                            l = "warning",
                            h = {
                                clear: function (i, s) {
                                    var n = f();
                                    e || d(n),
                                        u(i, n, s) ||
                                            (function (i) {
                                                for (
                                                    var s = e.children(),
                                                        n = s.length - 1;
                                                    n >= 0;
                                                    n--
                                                )
                                                    u(t(s[n]), i);
                                            })(n);
                                },
                                remove: function (i) {
                                    var s = f();
                                    e || d(s),
                                        i && 0 === t(":focus", i).length
                                            ? g(i)
                                            : e.children().length && e.remove();
                                },
                                error: function (t, e, i) {
                                    return p({
                                        type: o,
                                        iconClass: f().iconClasses.error,
                                        message: t,
                                        optionsOverride: i,
                                        title: e,
                                    });
                                },
                                getContainer: d,
                                info: function (t, e, i) {
                                    return p({
                                        type: r,
                                        iconClass: f().iconClasses.info,
                                        message: t,
                                        optionsOverride: i,
                                        title: e,
                                    });
                                },
                                options: {},
                                subscribe: function (t) {
                                    i = t;
                                },
                                success: function (t, e, i) {
                                    return p({
                                        type: a,
                                        iconClass: f().iconClasses.success,
                                        message: t,
                                        optionsOverride: i,
                                        title: e,
                                    });
                                },
                                version: "2.1.4",
                                warning: function (t, e, i) {
                                    return p({
                                        type: l,
                                        iconClass: f().iconClasses.warning,
                                        message: t,
                                        optionsOverride: i,
                                        title: e,
                                    });
                                },
                            };
                        return h;
                        function d(i, s) {
                            return (
                                i || (i = f()),
                                (e = t("#" + i.containerId)).length
                                    ? e
                                    : (s &&
                                          (e = (function (i) {
                                              return (
                                                  (e = t("<div/>")
                                                      .attr("id", i.containerId)
                                                      .addClass(
                                                          i.positionClass
                                                      )).appendTo(t(i.target)),
                                                  e
                                              );
                                          })(i)),
                                      e)
                            );
                        }
                        function u(e, i, s) {
                            var n = !(!s || !s.force) && s.force;
                            return !(
                                !e ||
                                (!n && 0 !== t(":focus", e).length) ||
                                (e[i.hideMethod]({
                                    duration: i.hideDuration,
                                    easing: i.hideEasing,
                                    complete: function () {
                                        g(e);
                                    },
                                }),
                                0)
                            );
                        }
                        function c(t) {
                            i && i(t);
                        }
                        function p(i) {
                            var o = f(),
                                r = i.iconClass || o.iconClass;
                            if (
                                (void 0 !== i.optionsOverride &&
                                    ((o = t.extend(o, i.optionsOverride)),
                                    (r = i.optionsOverride.iconClass || r)),
                                !(function (t, e) {
                                    if (t.preventDuplicates) {
                                        if (e.message === s) return !0;
                                        s = e.message;
                                    }
                                    return !1;
                                })(o, i))
                            ) {
                                n++, (e = d(o, !0));
                                var a = null,
                                    l = t("<div/>"),
                                    h = t("<div/>"),
                                    u = t("<div/>"),
                                    p = t("<div/>"),
                                    m = t(o.closeHtml),
                                    v = {
                                        intervalId: null,
                                        hideEta: null,
                                        maxHideTime: null,
                                    },
                                    y = {
                                        toastId: n,
                                        state: "visible",
                                        startTime: new Date(),
                                        options: o,
                                        map: i,
                                    };
                                return (
                                    i.iconClass &&
                                        l.addClass(o.toastClass).addClass(r),
                                    (function () {
                                        if (i.title) {
                                            var t = i.title;
                                            o.escapeHtml && (t = b(i.title)),
                                                h
                                                    .append(t)
                                                    .addClass(o.titleClass),
                                                l.append(h);
                                        }
                                    })(),
                                    (function () {
                                        if (i.message) {
                                            var t = i.message;
                                            o.escapeHtml && (t = b(i.message)),
                                                u
                                                    .append(t)
                                                    .addClass(o.messageClass),
                                                l.append(u);
                                        }
                                    })(),
                                    o.closeButton &&
                                        (m
                                            .addClass(o.closeClass)
                                            .attr("role", "button"),
                                        l.prepend(m)),
                                    o.progressBar &&
                                        (p.addClass(o.progressClass),
                                        l.prepend(p)),
                                    o.rtl && l.addClass("rtl"),
                                    o.newestOnTop ? e.prepend(l) : e.append(l),
                                    (function () {
                                        var t = "";
                                        switch (i.iconClass) {
                                            case "toast-success":
                                            case "toast-info":
                                                t = "polite";
                                                break;
                                            default:
                                                t = "assertive";
                                        }
                                        l.attr("aria-live", t);
                                    })(),
                                    l.hide(),
                                    l[o.showMethod]({
                                        duration: o.showDuration,
                                        easing: o.showEasing,
                                        complete: o.onShown,
                                    }),
                                    o.timeOut > 0 &&
                                        ((a = setTimeout(w, o.timeOut)),
                                        (v.maxHideTime = parseFloat(o.timeOut)),
                                        (v.hideEta =
                                            new Date().getTime() +
                                            v.maxHideTime),
                                        o.progressBar &&
                                            (v.intervalId = setInterval(
                                                _,
                                                10
                                            ))),
                                    o.closeOnHover && l.hover(S, x),
                                    !o.onclick && o.tapToDismiss && l.click(w),
                                    o.closeButton &&
                                        m &&
                                        m.click(function (t) {
                                            t.stopPropagation
                                                ? t.stopPropagation()
                                                : void 0 !== t.cancelBubble &&
                                                  !0 !== t.cancelBubble &&
                                                  (t.cancelBubble = !0),
                                                o.onCloseClick &&
                                                    o.onCloseClick(t),
                                                w(!0);
                                        }),
                                    o.onclick &&
                                        l.click(function (t) {
                                            o.onclick(t), w();
                                        }),
                                    c(y),
                                    o.debug && console && console.log(y),
                                    l
                                );
                            }
                            function b(t) {
                                return (
                                    null == t && (t = ""),
                                    t
                                        .replace(/&/g, "&amp;")
                                        .replace(/"/g, "&quot;")
                                        .replace(/'/g, "&#39;")
                                        .replace(/</g, "&lt;")
                                        .replace(/>/g, "&gt;")
                                );
                            }
                            function w(e) {
                                var i =
                                        e && !1 !== o.closeMethod
                                            ? o.closeMethod
                                            : o.hideMethod,
                                    s =
                                        e && !1 !== o.closeDuration
                                            ? o.closeDuration
                                            : o.hideDuration,
                                    n =
                                        e && !1 !== o.closeEasing
                                            ? o.closeEasing
                                            : o.hideEasing;
                                if (!t(":focus", l).length || e)
                                    return (
                                        clearTimeout(v.intervalId),
                                        l[i]({
                                            duration: s,
                                            easing: n,
                                            complete: function () {
                                                g(l),
                                                    clearTimeout(a),
                                                    o.onHidden &&
                                                        "hidden" !== y.state &&
                                                        o.onHidden(),
                                                    (y.state = "hidden"),
                                                    (y.endTime = new Date()),
                                                    c(y);
                                            },
                                        })
                                    );
                            }
                            function x() {
                                (o.timeOut > 0 || o.extendedTimeOut > 0) &&
                                    ((a = setTimeout(w, o.extendedTimeOut)),
                                    (v.maxHideTime = parseFloat(
                                        o.extendedTimeOut
                                    )),
                                    (v.hideEta =
                                        new Date().getTime() + v.maxHideTime));
                            }
                            function S() {
                                clearTimeout(a),
                                    (v.hideEta = 0),
                                    l.stop(!0, !0)[o.showMethod]({
                                        duration: o.showDuration,
                                        easing: o.showEasing,
                                    });
                            }
                            function _() {
                                var t =
                                    ((v.hideEta - new Date().getTime()) /
                                        v.maxHideTime) *
                                    100;
                                p.width(t + "%");
                            }
                        }
                        function f() {
                            return t.extend(
                                {},
                                {
                                    tapToDismiss: !0,
                                    toastClass: "toast",
                                    containerId: "toast-container",
                                    debug: !1,
                                    showMethod: "fadeIn",
                                    showDuration: 300,
                                    showEasing: "swing",
                                    onShown: void 0,
                                    hideMethod: "fadeOut",
                                    hideDuration: 1e3,
                                    hideEasing: "swing",
                                    onHidden: void 0,
                                    closeMethod: !1,
                                    closeDuration: !1,
                                    closeEasing: !1,
                                    closeOnHover: !0,
                                    extendedTimeOut: 1e3,
                                    iconClasses: {
                                        error: "toast-error",
                                        info: "toast-info",
                                        success: "toast-success",
                                        warning: "toast-warning",
                                    },
                                    iconClass: "toast-info",
                                    positionClass: "toast-top-right",
                                    timeOut: 5e3,
                                    titleClass: "toast-title",
                                    messageClass: "toast-message",
                                    escapeHtml: !1,
                                    target: "body",
                                    closeHtml:
                                        '<button type="button">&times;</button>',
                                    closeClass: "toast-close-button",
                                    newestOnTop: !0,
                                    preventDuplicates: !1,
                                    progressBar: !1,
                                    progressClass: "toast-progress",
                                    rtl: !1,
                                },
                                h.options
                            );
                        }
                        function g(t) {
                            e || (e = d()),
                                t.is(":visible") ||
                                    (t.remove(),
                                    (t = null),
                                    0 === e.children().length &&
                                        (e.remove(), (s = void 0)));
                        }
                    })();
                }.apply(e, s)) || (t.exports = n);
    },
    z1bI: function (t, e, i) {
        (function (t) {
            var e = {
                init: function () {
                    this.openSidebar();
                },
                openSidebar: function () {
                    t(".js-open-bar").on("click", function (e) {
                        e.preventDefault(), t(this).toggleClass("change");
                    });
                },
            };
            t(function () {
                e.init();
            });
        }).call(this, i("EVdn"));
    },
});
