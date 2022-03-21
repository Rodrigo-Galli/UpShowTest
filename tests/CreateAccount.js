module.exports = {
    "Crear cuenta Customer": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=first_name]", "Juan")
        .setValue("input[name=last_name]", "Garcia")
        .setValue("input[name=phone]", "099112233")
        .setValue("input[name=email]", "JuanGar@gmail.com")
        .setValue("input[name=password]", "123456")
        .pause(3000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .pause(5000)
        .end()
    },
    
    "Crear una cuenta existente con un Account Type diferente": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=first_name]", "Juan")
        .setValue("input[name=last_name]", "Garcia")
        .setValue("input[name=phone]", "099112233")
        .setValue("input[name=email]", "JuanGar@gmail.com")
        .setValue("input[name=password]", "123456")
        .click("#select2-account_type-container")
        .click('select[id=account_type] option[value="supplier"]')
        .pause(3000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .pause(5000)
        .end()
    },
        
    "Crear una cuenta con diferente Account Type - Supplier": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=first_name]", "Juan")
        .setValue("input[name=last_name]", "Garcia")
        .setValue("input[name=phone]", "099112233")
        .setValue("input[name=email]", "Garciajuan@gmail.com")
        .setValue("input[name=password]", "123456")
        .click("#select2-account_type-container")
        .click('select[id=account_type] option[value="supplier"]')
        .pause(5000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .pause(5000)
        .end()
    },

    "Crear una cuenta con diferente Account Type - Agent": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=first_name]", "Juan")
        .setValue("input[name=last_name]", "Garcia")
        .setValue("input[name=phone]", "099112233")
        .setValue("input[name=email]", "JuaGar@gmail.com")
        .setValue("input[name=password]", "123456")
        .click("#select2-account_type-container")
        .click('select[id=account_type] option[value="agent"]')
        .pause(5000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .pause(5000)
        .end()
    },

    "Crear cuenta con datos existentes": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=first_name]", "Juan")
        .setValue("input[name=last_name]", "Garcia")
        .setValue("input[name=phone]", "099112233")
        .setValue("input[name=email]", "JuanGar@gmail.com")
        .setValue("input[name=password]", "123456")
        .pause(3000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .waitForElementVisible("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > div.message > div")
        .assert.containsText("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > div.message > div", "Email already exist!")
        .end()
    },      

    "Crear una cuenta con datos incorrectos":  browser => {
        browser
        .url("https://www.phptravels.net/")
        .windowMaximize()
        .click("#fadein > header > div.header-top-bar.padding-right-100px.padding-left-100px > div > div > div:nth-child(2) > div > div > a:nth-child(5)")
        .setValue("input[name=first_name]", "Pedro")
        .setValue("input[name=last_name]", "Gimenez")
        .setValue("input[name=phone]", "099223344")
        .setValue("input[name=email]", "123")
        .setValue("input[name=password]", "123")
        .pause(5000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")

        .pause(5000)
        .end()
    },
}