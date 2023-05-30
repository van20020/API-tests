const fetch = require("node-fetch2");

it ("Should test validity of token", async ()=>{
    let token = "";

    const options = {
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            "userName":"Van20020@byui.edu",
            "password":"(Chris99)"
        })
    }
    const response = await fetch("https://dev.stedi.me/login",options);
    token = await response.text()
    const status = response.status;
    expect(status).toBe(200);
    expect(token.length).toBe(36);
});