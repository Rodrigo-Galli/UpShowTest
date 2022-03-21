module.exports = {
    "Login Customer": browser => {
        browser
        .url("https://www.phptravels.net/login")
        .windowMaximize()      
        .setValue("input[name=email]", "JuanGar@gmail.com")
        .setValue("input[name=password]", "123456")
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button")
        .pause (5000)
        .end()        
     
    },
    
    "Login Supplier": browser => {
        browser
        .url("https://www.phptravels.net/login")
        .windowMaximize()      
        .setValue("input[name=email]", "Garciajuan@gmail.com")
        .setValue("input[name=password]", "123456")
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button")
        .pause (5000)
        .end()
        
    },

    "Login Agent": browser => {
        browser
        .url("https://www.phptravels.net/login")
        .windowMaximize()      
        .setValue("input[name=email]", "JuaGar@gmail.com")
        .setValue("input[name=password]", "123456")
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button")
        .pause (5000)
        .end()
        
    }
}