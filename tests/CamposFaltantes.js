module.exports = {
    "Sin Name": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=last_name]", "Garcia")
        .setValue("input[name=phone]", "099112233")
        .setValue("input[name=email]", "JuanGar@gmail.com")
        .setValue("input[name=password]", "123456")
        .pause(3000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .pause(2000)

        .end()
    },
    
    "Sin LastName": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=first_name]", "Juan")
        .setValue("input[name=phone]", "099112233")
        .setValue("input[name=email]", "JuanGar@gmail.com")
        .setValue("input[name=password]", "123456")
        .pause(3000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .pause(2000)

        .end()
    },

    "Sin Phone": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=first_name]", "Juan")
        .setValue("input[name=last_name]", "Garcia")
        .setValue("input[name=email]", "JuanGar@gmail.com")
        .setValue("input[name=password]", "123456")
        .pause(3000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .pause(2000)

        .end()
    },

    "Sin Email": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=first_name]", "Juan")
        .setValue("input[name=last_name]", "Garcia")
        .setValue("input[name=phone]", "099112233")
        .setValue("input[name=password]", "123456")
        .pause(3000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .pause(2000)

        .end()
    },

    "Sin Password": browser => {
        browser
        .url("https://www.phptravels.net/signup")
        .windowMaximize()
        .setValue("input[name=first_name]", "Juan")
        .setValue("input[name=last_name]", "Garcia")
        .setValue("input[name=phone]", "099112233")
        .setValue("input[name=email]", "JuanGar@gmail.com")
        .pause(3000)
        .click("#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button")
        .pause(2000)

        .end()
    },
}