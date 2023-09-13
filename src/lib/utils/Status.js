import axios from "axios";

export const execute = (method, server, ref, setCode) => {
    let file = ref.current;
    let inputs = Array.from(file.querySelectorAll("input"));
    let params = {};

    inputs.map((item) => {
        if(params[item.dataset.type] === undefined) params[item.dataset.type] = [];
        params[item.dataset.type].push({
            [item.dataset.key]: item.value
        })
    })

    let param = "";
    let query = "";

    console.log(params);
    Object.keys(params).map((type) => {
        if(type === "Param") {
            console.log(params[type]);
            params[type].map((value) => {
                let key = Object.keys(value)[0]
                param += value[key] + "/"
            })
        } else if(type === "Query") {
            console.log(params[type]);
            params[type].map((value) => {
                let key = Object.keys(value)[0]
                query += value[key] + "&"
            })
        }
    })
    param = param.slice(0, param.length - 1);
    query = query.slice(0, query.length - 1);

    console.log("PARAM : ", param, "QUERY : ", query);
    let requestURL = server + "/" + param + "?" + query;
    console.log(requestURL);

    if(method === "GET") {
        axios.get(requestURL).then((res) => {
            let result = res.data.data;
            result = JSON.stringify(result, null, 2);
            setCode(result);
        }). catch((err) => {

        })
        
    }
    
}

export const cancel = (ref) => {
    alert("Cancel");
    console.log(ref);
}