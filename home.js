var coundown = document.getElementById('coundown');
var waitingTime = 5;

setInterval(function() {
    console.log("🚀 ~ file: home.js:8 ~ setInterval ~ waitingTime:", waitingTime)
    // coundown.innerHTML = waitingTime;
    if(waitingTime > 0) waitingTime--;
    else RedirectSite();
}, 1000);

const RedirectSite = () => {
    const currentUrl = window.location.href;
    console.log("🚀 ~ file: home.js:11 ~ RedirectSite ~ currentUrl:", currentUrl)
    
    // Standardlize url
    const baseUrl = currentUrl.split('?')[0];
    console.log("🚀 ~ file: home.js:15 ~ RedirectSite ~ baseUrl:", baseUrl)

    if(baseUrl.includes('test1')) {
        window.location.replace('https://shopee.vn/B%E1%BB%99-%C4%90%E1%BB%93-Nam-AVIANO-C%E1%BB%95-Tr%C3%B2n-Tay-Ng%E1%BA%AFn-B%E1%BB%99-Th%E1%BB%83-Thao-Nam-Ch%E1%BA%A5t-Li%E1%BB%87u-Poly-Coolmax-Th%E1%BA%A5m-H%C3%BAt-M%E1%BB%93-H%C3%B4i-i.40342563.3015403040')
    } else if(baseUrl.includes('test2')) {
        window.location.replace('https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage')
    } else {
        window.location.replace('https://google.com')
    }
}