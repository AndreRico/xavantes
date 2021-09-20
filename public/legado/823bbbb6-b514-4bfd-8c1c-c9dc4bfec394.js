var OneTrust = OneTrust || {},
    geolocationAPi = "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/countries/EU?callback\x3d?",
    containerName = "geoswitch",
    geolocationSwitcherFileName = "823bbbb6-b514-4bfd-8c1c-c9dc4bfec394.js",
    geolocationSwitcherFilePathPart = containerName + "/" + geolocationSwitcherFileName;
OneTrust.Banners = { eu: "4616edc5-8400-4d81-aa40-ac467211b3e1", other: "df16b03d-5deb-48e5-8e25-08aa0d4ab6ac" };
var jsonFeed = function (a) {
    a = getGeolocationSwitcherScriptPath().replace(geolocationSwitcherFilePathPart, "consent/" + OneTrust.Banners[a.displayPopup ? "eu" : "other"] + ".js");
    var b = document.createElement("script");
    b.setAttribute("src", a);
    b.setAttribute("charset", "utf-8");
    b.async = !0;
    document.head.appendChild(b);
},
    jsonp = document.createElement("script");
jsonp.setAttribute("src", geolocationAPi);
document.head.appendChild(jsonp);
function getGeolocationSwitcherScriptPath() {
    for (var a = document.getElementsByTagName("script"), b = "", c = 0; c < a.length; ++c)
        if (isGeolocationSwitcherFile(a[c], geolocationSwitcherFilePathPart)) {
            b = a[c].src;
            break;
        }
    return b;
}
function isGeolocationSwitcherFile(a, b) {
    return a.getAttribute("src") ? -1 !== a.getAttribute("src").indexOf(b) : !1;
}
