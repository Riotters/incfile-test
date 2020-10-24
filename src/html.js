import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}

                {process.env.ENABLE_GTM && (
                    <script
                    key="google_tag_manager"
                    defer
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-5H3C8TJ');
                        `
                    }}
                    />
                )}

            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}

                {/* <noscript
                    dangerouslySetInnerHTML={{
                        __html: `
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5H3C8TJ"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>
                        `
                    }}
                /> */}

                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
                    
                {/* clickAttributionData */}
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        var clickAttributionData = clickAttributionData || {};
                        clickAttributionData.MerchantId = "8d7e83c4-7a78-4116-9866-d7de1274330c";
                        `
                    }}
                />
                <script
                    defer 
                    src="https://clickattribution.com/scripts/v2/path-to-purchase.min.js"
                /> */}

                {/* Hotjar Tracking Code */}
                {process.env.ENABLE_HOTJAR && (
                    <script
                        key="hotjar_function"
                        defer
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function(h,o,t,j,a,r){
                                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                h._hjSettings={hjid:1629203,hjsv:6};
                                a=o.getElementsByTagName('head')[0];
                                r=o.createElement('script');r.async=1;
                                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                            `
                        }}
                    />
                )}

                {/* Visual Website Optimizer Asynchronous Code */}
                {process.env.ENABLE_VWO && (
                    <script
                        key="vwo_function"
                        defer
                        dangerouslySetInnerHTML={{
                            __html: `
                            var _vwo_code = (function () {
                                var account_id = 326263,
                                    settings_tolerance = 2000,
                                    library_tolerance = 2500,
                                    use_existing_jquery = false,
                                    
                                    f = false, d = document;
                                return {
                                    use_existing_jquery: function () {
                                        return use_existing_jquery;
                                    }, library_tolerance: function () {
                                        return library_tolerance;
                                    }, finish: function () {
                                        if (!f) {
                                            f = true;
                                            var a = d.getElementById('_vis_opt_path_hides');
                                            if (a) a.parentNode.removeChild(a);
                                        }
                                    }, finished: function () {
                                        return f;
                                    }, load: function (a) {
                                        var b = d.createElement('script');
                                        b.src = a;
                                        b.type = 'text/javascript';
                                        b.innerText;
                                        b.onerror = function () {
                                            _vwo_code.finish();
                                        };
                                        d.getElementsByTagName('head')[0].appendChild(b);
                                    }, init: function () {
                                        settings_timer = setTimeout('_vwo_code.finish()', settings_tolerance);
                                        var a = d.createElement('style'),
                                            b = 'body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',
                                            h = d.getElementsByTagName('head')[0];
                                        a.setAttribute('id', '_vis_opt_path_hides');
                                        a.setAttribute('type', 'text/css');
                                        if (a.styleSheet) a.styleSheet.cssText = b; else a.appendChild(d.createTextNode(b));
                                        h.appendChild(a);
                                        this.load('//dev.visualwebsiteoptimizer.com/j.php?a=' + account_id + '&u=' + encodeURIComponent(d.URL) + '&r=' + Math.random());
                                        return settings_timer;
                                    }
                                };
                            }());
                            _vwo_settings_timer = _vwo_code.init();
                            `
                        }}
                    />
                )}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
