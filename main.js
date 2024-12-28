
import CryptoJS from 'crypto-js';

import { jzAxios } from "./lib.js"
import { main as huoshan_main } from "./trans-huoshan-plugin/main.js"

global.CryptoJS = CryptoJS
global.jzAxios = jzAxios


function TestTranslate() {
    console.log("start...");
    let text = "你的名字"
    let kwargs = {"sl": "auto", "tl": "en"}
    let form = {}
    let res = huoshan_main(text, kwargs, form).then((res) => {
        console.log("res:", res);
    });
}

function callback(engineName, text, kwargs) {
    console.log(engineName, text, kwargs)
}

console.log("start...");
TestTranslate()

// function testSEE2() {
//     let url = "https://www.baichuan-ai.com/api/chat/v1/chat"
//     let source = new SSE(url);
//     source.addEventListener('message', function(e) {
//         // Assuming we receive JSON-encoded data payloads:
//         var payload = JSON.parse(e.data);
//         console.log(payload);
//     });
// }
// for (let i = 0; i < 1; i++) {
//     console.log(i);
//     TestTranslate()
// }
// TestCaiyunTranslate()
// TestFittenTranslate()
// testSEE().then(r => {})
// testSEE()