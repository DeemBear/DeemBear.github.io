let cookies = [
    "_U=1w7djTOUYWY2_bME6URBm5JokK24eUUbAzYilpbrYu6eDXA6hdg9zwfoijjo3O_vfbN5uibb3y2xVRkEpPZNoTT1QQuG3PB0QISHt2ZQwnDrnaAe5FL1pw2jwausVSKufAXYie0wCs3fNBqa4cOZYgNU-aiAZomoV_vGf2l6Rd8ohN8pE_wcuM3kOCQKPAlTzofWUWbeN9b3OhnHk5DyhDCIdLvrVUwVKIAbbA-UMsGvPo49mkEJu_HfO9BNOpNAp",
    "_U=16TEcydBCBZAJsKO5H9YIQwddN4SXVxFzcJh0zvWe6k89mE7C76bS0x6hQHqjTmPZaAql0PGHJduKhST6bnA16SI2gmShmzShY3qQQBrfqGSUhUJNsCutbuJDRQ6QQnCT3Anz14eL8xz7V7_jEtTaaS2ndrx2dEHp_QavsdkvK68cs5tkJAqSbuyqVVUcVKZoTzFMIORCJmztoDrRrR9B_g",
    "_U=1PbO-ESzsyEwlvm1U21z3FZ8x9ubJv-X1Ctiy-0bH1ydJj_yB_aZllwmYk_YDmb1-PFazjOvr2PIX7WeOEddtmFVm8dwOf1az4tcpDwgVJbxgzR8ip7MM2TzwtaMs2XnHzAcjGOhHD09gY_FCASggagwVhNdhKtBtOBZEo0o6S93A3O0CGjh3nr8LtcCwn5qwau4d-dIKQ4jv2a3NhuVu1g"
]

export default {
    async fetch(request, _env) {
        return await handleRequest(request);
    }
}

/**
 * Respond to the request
 * @param {Request} request
 */
let startReg = new RegExp("^(https?://)([-a-zA-z0-9]+\\.)+([-a-zA-z0-9]+)+");
async function handleRequest(request) {
    if (isEquals(request, "/sydney/ChatHub")) { //ħ������
        return bingChatHub(request)
    }
    if (isEquals(request, "/turing/conversation/create")) { //��������
        return goUrl(request, "https://www.bing.com/turing/conversation/create");
    }
    if (isEquals(request, "/msrewards/api/v1/enroll\\?(.*)")) { //�����
        let a = request.url.split("?");
        return goUrl(request, "https://www.bing.com/msrewards/api/v1/enroll?" + a[1]);
    }
    if (isEquals(request, "/images/create\\?(.*)")) { //AI��ͼ
        let a = request.url.split("?");
        return goUrl(request, "https://www.bing.com/images/create?" + a[1], {
            "sec-fetch-site": "same-origin",
            "referer": "https://www.bing.com/search?q=bingAI"
        });
    }
    if (isEquals(request, "/images/create/async/results(.*)")) { //����AI��ͼͼƬ
        let reg = new RegExp("^(https?://)([-a-zA-z0-9]+\\.)+([-a-zA-z0-9]+)+(/images/create/async/results)");
        let a = request.url.replace(reg, "https://www.bing.com/images/create/async/results");
        return goUrl(request, a, {
            "sec-fetch-site": "same-origin",
            "referer": "https://www.bing.com/images/create?partner=sydney&showselective=1&sude=1&kseed=7000"
        });
    }
    //���ڲ���
    if (isEquals(request, "/test/(.*)")) {
        let reg = new RegExp(`^(https?://)([-a-zA-z0-9]+\\.)+([-a-zA-z0-9]+)+(${"/test/(.*)"})$`);
        let a = request.url.replace(reg, "$5");
        return goUrl(request, a);
    }
    if (isEquals(request, "/web/(.*)")||isEquals(request, "/favicon.ico")) { //web����
        let reg = new RegExp("^(https?://)([-a-zA-z0-9]+\\.)+([-a-zA-z0-9]+)+(/)");
        let a = request.url.replace(reg, "https://raw.githubusercontent.com/DeemBear/DeemBear.github.io/master/");
        return await goWeb(a);
    }
    return getRedirect('/ai/index.html');
}

//ƥ��url
function isEquals(request, path) {
    let reg = new RegExp(`^(https?://)([-a-zA-z0-9]+\\.)+([-a-zA-z0-9]+)+(${path})$`);
    return reg.test(request.url);
}

async function goWeb(path) {
    let res = await fetch(path);
    let mimeType;
    if (path.endsWith(".html")) {
        mimeType = "text/html; charset=utf-8";
    } else if (path.endsWith(".js")) {
        mimeType = "application/x-javascript; charset=utf-8";
    } else if (path.endsWith(".css")) {
        mimeType = "text/css; charset=utf-8";
    } else if (path.endsWith(".png")) {
        mimeType = "image/png";
    } else if (path.endsWith(".ico")) {
        mimeType = "image/png";
    }
    return new Response(res.body, {
        status: 200,
        statusText: 'ok',
        headers: {
            "content-type": mimeType
        }
    });
}

//����ĳ��ַ
async function goUrl(request, url, addHeaders) {
    //���� fetch ����
    let fp = {
        method: request.method,
        headers: {}
    }
    //����ͷ����Ϣ
    let reqHeaders = new Headers(request.headers);
    let dropHeaders = ["user-agent", "accept", "accept-language"];
    let he = reqHeaders.entries();
    for (let h of he) {
        let key = h[0],
            value = h[1];
        if (dropHeaders.includes(key)) {
            fp.headers[key] = value;
        }
    }
    if (addHeaders) {
        //���ͷ����Ϣ
        for (let h in addHeaders) {
            fp.headers[h] = addHeaders[h];
        }
    }

    //������õ����cookie
    if (cookies.length == 0) {
        return getReturnError("û���κο���cookie����ǰ�ڵ�һ�д���cookies���������cookie");
    }
    let cookieID =0;
    if(reqHeaders.get('NewBing')){//�����web��
        cookieID = Math.floor(Math.random() * cookies.length);
        let userCookieID = reqHeaders.get("cookieID");
        if (userCookieID) {
            if (userCookieID >= 0 && userCookieID < cookies.length) {
                cookieID = userCookieID;
            } else {
                return getReturnError("cookieID�����ڣ���ˢ��ҳ����ԣ�");
            }
        }
        fp.headers["cookie"] = cookies[cookieID];
    }else {//����ǲ����
        fp.headers["cookie"] = reqHeaders.get('cookie');
    }

    //���X-forwarded-for
    fp.headers['X-forwarded-for'] = `${getRndInteger(3,5)}.${getRndInteger(1,255)}.${getRndInteger(1,255)}.${getRndInteger(1,255)}`;

    let res = await fetch(url, fp);
    let headers = new Headers(res.headers);
    headers.set("cookieID",cookieID);
    return new Response(res.body,{
        status:res.status,
        statusText:res.statusText,
        headers:headers
    });
}

//���������
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//��ȡ���ڷ��صĴ�����Ϣ
function getReturnError(error) {
    return new Response(JSON.stringify({
        result: {
            value: 'error',
            message: error
        }
    }), {
        status: 200,
        statusText: 'ok',
        headers: {
            "content-type": "application/json"//,
            //"Access-Control-Allow-Origin": "*"
        }
    })
}

//�����ض���
function getRedirect(url) {
    return new Response("�����ض���" + url, {
        status: 302,
        statusText: 'redirect',
        headers: {
            "content-type": "text/html",
            "location": url
        }
    })
}

//websocket
function bingChatHub(request) {
    // ���������� Upgrade ͷ��˵���� WebSocket ����
    if (request.headers.get('Upgrade') === 'websocket') {
        const webSocketPair = new WebSocketPair()
        const serverWebSocket = webSocketPair[1]
        var bingws = new WebSocket('wss://sydney.bing.com/sydney/ChatHub')
        serverWebSocket.onmessage = event => {
            bingws.send(event.data);
        }
        bingws.onmessage = event => {
            serverWebSocket.send(event.data)
        }
        bingws.onopen = event => {
            serverWebSocket.accept();
        }
        bingws.onclose = event => {
            serverWebSocket.close(event.code, event.reason);
        }
        bingws.onerror = event => {
            serverWebSocket.send(JSON.stringify({
                type: 'error',
                mess: "workers�ӵ�bing����" + event
            }));
            serverWebSocket.close();
        }
        serverWebSocket.onerror = event => {
            serverWebSocket.close();
        }
        serverWebSocket.onclose = event => {
            bingws.close(event.code, event.reason);
        }

        return new Response(null, { status: 101, webSocket: webSocketPair[0] })
    } else {
        return new Response('�ⲻ��websocket����')
    }
}