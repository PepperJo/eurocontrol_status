const puppeteer = require('puppeteer');

const url = 'https://www.public.nm.eurocontrol.int/PUBPORTAL/gateway/spec/PORTAL.23.0.0.5.19/gwt-detached-view.jsp?_portal_context=/gateway/spec/PORTAL.23.0.0.5.19:/PUBPORTAL/gateway/spec/PORTAL.23.0.0.5.19:TAC:1569974400000:0:1570036936742:0:undefined:undefined:&_view_id=STATUS_MAP_DETACHED_LIST&_parameter_set_id=&_dataset_info=';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 3500,
        height: 4000,
        deviceScaleFactor: 1
    });
    await page.goto('https://www.public.nm.eurocontrol.int/PUBPORTAL/gateway/spec/index.html', { waitUntil: 'networkidle0'});
    await page.goto(url, {waitUntil: 'networkidle0'});
    await page.screenshot({path: 'status.png'});
    await browser.close();
})();