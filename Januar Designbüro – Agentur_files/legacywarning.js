/*
 UA detector ------------------------------------------------------------------------------------
 */


navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null)
            return 'Opera ' + tem[1];
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null)
        M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

var downloadLinkChrome = 'http://www.google.com/chrome/';
var downloadLinkSafari = 'https://www.apple.com/safari';
var downloadLinkFirefox = 'https://www.mozilla.org/en-US/firefox/new/?utm_source=firefox-com&utm_medium=referral';
var downloadLinkOpera = 'http://opera.no';
var downloadLinkIE = 'http://www.microsoft.com/en-us/download/internet-explorer.aspx';

var browser = new Object();
var x = 0;

browser[++x] = new Array();
browser[x]['shortName'] = 'MSIE 6';
browser[x]['globalShortName'] = 'ie';
browser[x]['version'] = '6';
browser[x]['outdated'] = true;
browser[x]['longName'] = 'Microsoft Internet Explorer 6';
browser[x]['dlUrl'] = 'http://www.microsoft.com/en-us/download/internet-explorer.aspx';

browser[++x] = new Array();
browser[x]['shortName'] = 'MSIE 7';
browser[x]['globalShortName'] = 'ie';
browser[x]['version'] = '7';
browser[x]['outdated'] = true;
browser[x]['longName'] = 'Microsoft Internet Explorer 7';
browser[x]['dlUrl'] = 'http://www.microsoft.com/en-us/download/internet-explorer.aspx';

browser[++x] = new Array();
browser[x]['shortName'] = 'MSIE 8';
browser[x]['globalShortName'] = 'ie';
browser[x]['version'] = '8';
browser[x]['outdated'] = true;
browser[x]['longName'] = 'Microsoft Internet Explorer 8';
browser[x]['dlUrl'] = 'http://www.microsoft.com/en-us/download/internet-explorer.aspx';

browser[++x] = new Array();
browser[x]['shortName'] = 'MSIE 9';
browser[x]['globalShortName'] = 'ie';
browser[x]['version'] = '9';
browser[x]['outdated'] = false;
browser[x]['longName'] = 'Microsoft Internet Explorer 9';
browser[x]['dlUrl'] = 'http://www.microsoft.com/en-us/download/internet-explorer.aspx';

browser[++x] = new Array();
browser[x]['shortName'] = 'MSIE 10';
browser[x]['globalShortName'] = 'ie';
browser[x]['version'] = '10';
browser[x]['outdated'] = false;
browser[x]['longName'] = 'Microsoft Internet Explorer 10';
browser[x]['dlUrl'] = 'http://www.microsoft.com/en-us/download/internet-explorer.aspx';

browser[++x] = new Array();
browser[x]['shortName'] = 'IE 11';
browser[x]['globalShortName'] = 'ie';
browser[x]['version'] = '11';
browser[x]['outdated'] = false;
browser[x]['longName'] = 'Microsoft Internet Explorer 11';
browser[x]['dlUrl'] = 'http://www.microsoft.com/en-us/download/internet-explorer.aspx';

browser[++x] = new Array();
browser[x]['shortName'] = 'IE 12';
browser[x]['globalShortName'] = 'ie';
browser[x]['version'] = '12';
browser[x]['outdated'] = false;
browser[x]['longName'] = 'Microsoft Internet Explorer 12';
browser[x]['dlUrl'] = 'http://www.microsoft.com/en-us/download/internet-explorer.aspx';

browser[++x] = new Array();
browser[x]['shortName'] = 'Firefox 6';
browser[x]['globalShortName'] = 'firefox';
browser[x]['version'] = '6';
browser[x]['outdated'] = true;
browser[x]['longName'] = 'Mozilla Firefox 6';
browser[x]['dlUrl'] = 'https://www.mozilla.org/en-US/firefox/new/?utm_source=firefox-com&utm_medium=referral';

browser[++x] = new Array();
browser[x]['shortName'] = 'Safari 4';
browser[x]['globalShortName'] = 'safari';
browser[x]['version'] = '4';
browser[x]['outdated'] = false;
browser[x]['longName'] = 'Apple Safari 4';
browser[x]['dlUrl'] = 'https://www.apple.com/safari';

browser[++x] = new Array();
browser[x]['shortName'] = 'Chrome 20';
browser[x]['globalShortName'] = 'chrome';
browser[x]['version'] = '20';
browser[x]['outdated'] = true;
browser[x]['longName'] = 'Google Chrome 20';
browser[x]['dlUrl'] = 'http://www.google.com/chrome/';


$(document).ready(function () {

    var os, clientStrings, myOs;
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var unknown = '-';
    os = unknown;

    clientStrings = [
        {s: 'Windows 3.11', r: /Win16/},
        {s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/},
        {s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/},
        {s: 'Windows 98', r: /(Windows 98|Win98)/},
        {s: 'Windows CE', r: /Windows CE/},
        {s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/},
        {s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/},
        {s: 'Windows Server 2003', r: /Windows NT 5.2/},
        {s: 'Windows Vista', r: /Windows NT 6.0/},
        {s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/},
        {s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/},
        {s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/},
        {s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s: 'Windows ME', r: /Windows ME/},
        {s: 'Android', r: /Android/},
        {s: 'Open BSD', r: /OpenBSD/},
        {s: 'Sun OS', r: /SunOS/},
        {s: 'Linux', r: /(Linux|X11)/},
        {s: 'iOS', r: /(iPhone|iPad|iPod)/},
        {s: 'Mac OS X', r: /Mac OS X/},
        {s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s: 'QNX', r: /QNX/},
        {s: 'UNIX', r: /UNIX/},
        {s: 'BeOS', r: /BeOS/},
        {s: 'OS/2', r: /OS\/2/},
        {s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    var osVersion = unknown;
    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;
        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;
        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    myOs = os + ' ' + osVersion;
    var myBrowser = navigator.sayswho;
        
    var legacyTextIntro = 'This Website requires a contemporary Webbrowser. You are using ';
    var legacyTextOutro = ' which ist too outdated to support such a smooth and highly enjoyable user exprience, as it is intended to be on this Website. Please, take a few minutes of your time to update to an actual version.';
    var legacyBrowser = '';
    var legacyHTML = '<section class="legacy_warning"><header><h1></h1></header><h2>Sorry, you are using an old Browser-Version</h2><p class="legacy_text"></p><a class="legacy_update_link" target="_blank" href=""></a><p>Or select a different one:</p><div class="legacy_browser_icons"><div class="chrome"><a href="" target="_blank"></a></div><div class="safari"><a href="" target="_blank"></a></div><div class="firefox"><a href="" target="_blank"></a></div><div class="opera"><a href="" target="_blank"></a></div><div class="ie"><a href="" target="_blank"></a></div></div><div class="legacy_footer"><a class="authorlink" href="http://www.januar.ch" target="_blank"></a></div></section>';

    for (var x in browser) {
        for (var i in browser[x]) {
            if (browser[x][i] === myBrowser) {
                console.log('got it: ' + browser[x]['longName']);
                if (browser[x]['outdated']) {
                    legacyBrowser = browser[x]['longName'];
                    $('body').append(legacyHTML);
                    $('.legacy_warning').css({display: 'block'});
                    $('.legacy_text').text(legacyTextIntro + legacyBrowser + ' on ' + myOs + legacyTextOutro);
                    $('.legacy_update_link').append('Update ' + browser[x]['longName'] + ' to the current version.').attr('href', browser[x]['dlUrl']);
                    $('.legacy_browser_icons').find('.' + browser[x]['globalShortName']).addClass('actual');

                    $('.chrome').find('a').attr('href', downloadLinkChrome);
                    $('.safari').find('a').attr('href', downloadLinkSafari);
                    $('.firefox').find('a').attr('href', downloadLinkFirefox);
                    $('.opera').find('a').attr('href', downloadLinkOpera);
                    $('.ie').find('a').attr('href', downloadLinkIE);
                }
            }
        }
    }
});