import axios from "axios";

export const execute = (method, server, ref, setCode) => {
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

    console.log(params);
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

    console.log("PARAM : ", param, "QUERY : ", query, "HEADER : ", header);
    let requestURL = server + "/" + param + "?" + query;
    console.log(requestURL);

    if(method === "GET") {
        axios.get(requestURL, {
            headers: header
        }).then((res) => {
            let result = res.data.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "POST") {
        axios.post(requestURL, body, {
            headers: header
        }).then((res) => {
            let result = res.data.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "DELETE") {
        axios.delete(requestURL, body, {
            headers: header
        }).then((res) => {
            let result = res.data.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "PUT") {
        axios.delete(requestURL, body, {
            headers: header
        }).then((res) => {
            let result = res.data.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "PATCH") {
        axios.patch(requestURL, body, {
            headers: header
        }).then((res) => {
            let result = res.data.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "OPTIONS") {
        axios.options(requestURL, body, {
            headers: header
        }).then((res) => {
            let result = res.data.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    } else if(method === "HEAD") {
        axios.head(requestURL, body, {
            headers: header
        }).then((res) => {
            let result = res.data.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }).catch((err) => {
            setCode(err.message);
        })
    }
    
}

export const cancel = (ref) => {
    alert("Cancel");
    console.log(ref);
}