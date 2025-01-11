let crxApiUrl = "https://translate.volcengine.com/crx/translate/v1";
let targetLanName = {
    "auto": "detect", "zh": "zh", "zh-tr": "zh", "en": "en",
    "de": "de", "ja": "ja", "es": "es", "fr": "fr",
    "it": "it", "ko": "ko", "pt_pt": "pt", "pt_br": "pt", "ru": "ru",
}
let lastReqId = 1314
// let jzWindow  = typeof window !== "undefined" ? window : global

export function main(texts, config, form, jzObjects) {
    const { jzAxios, jzPluginServerUrl } = jzObjects;
    // console.log("translate", config);
    const proxyUrl = jzPluginServerUrl
    const body = {
        url: crxApiUrl,
        method: "post",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36",
            "Content-Type": "application/json",
        },
        data: {
            "source_language": "detect",
            "target_language": targetLanName[config["tl"]],
            "text":            texts[0],
        }
    }
    // console.log("body:", body)
    return jzAxios.post(proxyUrl, body, {}).then(result => {
        let data = result.data
        // console.log("hello world", result.data)
        return {
            code: 0,
            msg: "",
            data: {
                reqId: lastReqId++,
                texts: [data["translation"]]
            }
        }
    }).catch(err => {
        return "Error:" + JSON.stringify(err.response?.data)
    })
}