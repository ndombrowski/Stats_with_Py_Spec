/* Polyfill Injector */
(function(main) {
    if(/* Intl */!('Intl' in this)) {
        var js = document.createElement('script');
        js.src = "https://d3njjcbhbojbot.cloudfront.net/web/bundles/vendor/Intl.js.v0-1-4/Intl.en-US.js?features=Intl";
        js.onload = main;
        js.onerror = function() {
            console.error('Could not load polyfills script!');
            main();
        };
        document.head.appendChild(js);
    } else {
        main();
    }
})(function() {
/*! For license information please see app.b3404b069c8c273c3d46.js.LICENSE.txt */
});
//# sourceMappingURL=en.app.b3404b069c8c273c3d46.js.map