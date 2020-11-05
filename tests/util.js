import { ClientFunction } from 'testcafe';

var Utils = {
	baseUrl: "http://0.0.0.0:8000/",
	galleryPath :"gallery",
	newsPath : "news",
	aboutPath : "about",
	instaWebPath : 'www.instagram.com/vera_z/',
	emailPath : "mailto:verazhangsite@gmail.com?Subject=From%20www.verazhang.com",
	supportPath : 'support',
	adsPath: 'ads',
	privacyPath: 'https://www.freeprivacypolicy.com/live/dccb9a51-748e-4ab8-933a-00e372b3ee1c'
}

Utils.stripTrailingSlash = function (site){return site.replace(/\/$/, "");};
Utils.getLocation  = ClientFunction(() => document.location.href.toString());
Utils.goBack = ClientFunction(() => window.history.back());
Utils.getRequestResult = ClientFunction(url => {
        return new Promise(resolve => {
            var xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            xhr.onload = function () {
                resolve(xhr.status);
            };

            xhr.send(null);
        });
    });

export { Utils };