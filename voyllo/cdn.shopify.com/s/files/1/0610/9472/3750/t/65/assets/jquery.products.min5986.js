Shopify.Products = function() {
    var e = { howManyToShow: 3, howManyToStoreInMemory: 10, wrapperId: "recently-viewed-products", templateId: "recently-viewed-product-template", onComplete: null },
        n = [],
        t = null,
        o = null,
        r = 0,
        i = {
            configuration: { expires: 90, path: "/", domain: window.location.hostname },
            name: "shopify_recently_viewed",
            write: function(e) { jQuery.cookie(this.name, e.join(" "), this.configuration) },
            read: function() {
                var e = [],
                    n = jQuery.cookie(this.name);
                return null !== n && null != n && (e = n.split(" ")), e
            },
            destroy: function() { jQuery.cookie(this.name, null, this.configuration) },
            remove: function(e) {
                var n = this.read(),
                    t = jQuery.inArray(e, n); - 1 !== t && (n.splice(t, 1), this.write(n))
            }
        },
        a = function() { n.length && r < e.howManyToShow ? jQuery.ajax({ dataType: "json", url: window.router + "/products/" + n[0] + ".js", cache: !1, success: function(e) { o.tmpl(e).appendTo(t), n.shift(), r++, a() }, error: function() { i.remove(n[0]), n.shift(), a() } }) : function() { if (t.show(), e.onComplete) try { e.onComplete() } catch (e) {} }() };
    return {
        resizeImage: function(e, n) {
            if (null == n) return e;
            if ("master" == n) return e.replace(/http(s)?:/, "");
            var t = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?/i);
            if (null != t && null != t) {
                var o = e.split(t[0]),
                    r = t[0];
                return (o[0] + "_" + n + r).replace(/http(s)?:/, "")
            }
            return null
        },
        showRecentlyViewed: function(r) { r = r || {}, jQuery.extend(e, r), n = i.read(), o = jQuery("#" + e.templateId), t = jQuery("#" + e.wrapperId), e.howManyToShow = Math.min(n.length, e.howManyToShow), e.howManyToShow && o.length && t.length && a() },
        getConfig: function() { return e },
        clearList: function() { i.destroy() },
        recordRecentlyViewed: function(n) {
            n = n || {}, jQuery.extend(e, n);
            var t = i.read();
            if (-1 !== window.location.pathname.indexOf("/products/")) {
                var o = $('[data-main-product-handle]').attr('data-main-product-handle'),
                    r = jQuery.inArray(o, t); - 1 === r ? (t.unshift(o), t = t.splice(0, e.howManyToStoreInMemory)) : (t.splice(r, 1), t.unshift(o)), i.write(t)
            }
        }
    }
}();
