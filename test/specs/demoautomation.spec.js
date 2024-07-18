import login from "../pageobjects/demo_automation/login.js"
import register from "../pageobjects/demo_automation/register.js"

describe('End to End flow for demo automation website',()=>{
    it('Launch URL',async()=>{
        await login.launchURL()
    })
    it('Login',async()=>{
        await login.login()
    })
    it('Register',async()=>{
        await register.register()
       
    });
    it('Upload file and submit', async() =>{
        await register.upload()
    })
})