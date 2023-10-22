

export const execute = async(method, server, ref, setCode, abortController, setAbortController) => {
    let file = ref.current;
    let inputs = Array.from(file.querySelectorAll("input"));
    let textAreas = Array.from(file.querySelectorAll("textArea"));
    let body = {};
    if(textAreas.length === 2) {
        body = JSON.parse(textAreas[0].value);   
    }
    let params = {};

    inputs.map((item) => {
        if(params[item.dataset.type] === undefined) params[item.dataset.type] = [];
        params[item.dataset.type].push({
            [item.dataset.key]: item.value
        })
    })

    let param = "";
    let query = "";
    let header = {};

    Object.keys(params).map((type) => {
        if(type === "Param") {
            params[type].map((value) => {
                let key = Object.keys(value)[0]
                param += value[key] + "/"
            })
        } else if(type === "Query") {
            params[type].map((value) => {
                let key = Object.keys(value)[0]
                query += key + "=" + value[key] + "&"
            })
        } else if(type === "Header") {
            params[type].map((value) => {
                let key = Object.keys(value)[0]; 
                header = {
                    ...header,
                    [key]:value[key]
                }
            })
        }
    })
    param = param.slice(0, param.length - 1);
    query = query.slice(0, query.length - 1);

    let requestURL = server + "/" + param + "?" + query;
    
    
    try {
        setCode("Receiving data...");
            if(method === "GET") {
                const response = await fetch(requestURL, {
                    method: method,
                    signal: abortController.signal,
                    headers: header
                })
                let text = await response.text();
                text = JSON.parse(text);
                setCode(JSON.stringify(text.data, null, 2));
            } else {
                const response = await fetch(requestURL, {
                    method: method,
                    signal: abortController.signal,
                    headers: header
                })
                let text = await response.text();
                text = JSON.parse(text);
                setCode(JSON.stringify(text.data, null, 2));
            }
       
       
    } catch(err) {
        console.error(err)
    } 
}

export const cancel = (ref, setResult, abortController, setAbortController) => {
    abortController.abort();
    setAbortController(new AbortController())
    setResult("Canceld")
}