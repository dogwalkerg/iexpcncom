//	netwboy
// http://www.gaomingsong.com

var proxy = "PROXY abc.cydia8.cc:80;";

var domains = {
  "qq.wsxb8.cn": 1,
  "api.cydia8.cc": 1,
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    if (host == "www.haosou.com") {
        return "PROXY gaomingsong.com:80";
    }

    var suffix;
    var pos = host.lastIndexOf('.');
    while(1) {
        suffix = host.substring(pos + 1);
        if (suffix == "qq.wsxb8.cn")
            if (url.indexOf('http://') == 0)
                return "PROXY abc.cydia8.cc:80";
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        if (pos <= 0) {
            break;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
    return direct;
}