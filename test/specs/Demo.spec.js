import landing from '../pageobjects/index/landingPage.js';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export { __dirname };


describe(`Demo Automation page`, ()=>{
    it(`Should load URL`, async ()=>{
        await landing.loadUrlPage();
        expect(await landing.$downloadButton().isDisplayed())
                .withContext('Should load page')
                .toBeTrue();
    })

    it('Should click download button',async ()=>{
        await landing.clickDownload();
    })

    it('Should download a file', async ()=>{
        await landing.downloadFile();
    })
})