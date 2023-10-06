import axios from "axios";

export const execute = (method, server, ref, setCode,  cancleToken) => {
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
    setCode("Receiving data...");

    if(method === "GET") {
        axios.get(requestURL, {
            cancelToken: cancleToken.token,
            headers: header
        }).then((res) => {
            let result = res.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "POST") {
        axios.post(requestURL, body, {
            cancelToken: cancleToken.token,
            headers: header
        }).then((res) => {
            let result = res.data;
            result = JSON.stringify(result, null, 2);
            //console.log("axios res : ",result)
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "DELETE") {
        axios.delete(requestURL, body, {
            cancelToken: cancleToken.token,
            headers: header
        }).then((res) => {
            let result = res.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "PUT") {
        axios.delete(requestURL, body, {
            cancelToken: cancleToken.token,
            headers: header
        }).then((res) => {
            let result = res.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "PATCH") {
        axios.patch(requestURL, body, {
            cancelToken: cancleToken.token,
            headers: header
        }).then((res) => {
            let result = res.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "OPTIONS") {
        axios.options(requestURL, body, {
            cancelToken: cancleToken.token,
            headers: header
        }).then((res) => {
            let result = res.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "HEAD") {
        axios.head(requestURL, body, {
            cancelToken: cancleToken.token,
            headers: header
        }).then((res) => {
            let result = res.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    }
    
}

export const cancel = (ref,  cancleToken, setCancleToken) => {
    cancleToken.cancel()
    setCancleToken(axios.CancelToken.source())
}