import React, { useEffect, useRef, useState } from "react";
import styles from "../css/postman2React.module.css";
import PostmanQuery from "./postmanQuery";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { cancel, execute } from "../utils/Status";


const findDescription = (item) => {
    let query = item.item.request.url.query; 
    let descript = "";

    query?.map((data) => {
        if(data.key === "postman_description") {
            descript = data.description;
        }
    })

    return descript;
}

const getQuery = (item) => {
    let query = item.item.request.url.query;
    if(query === undefined) return []; 
    query = query?.filter(prev => prev.key !== "postman_description");
    return query;
}

const getParam = (item) => {
    let path = item.item.request.url.path;
    let result = [];

    path.map((item) => {
        if(item.includes("{") && item.includes("}")) {
            let data = item.replace(/{/g, "").replace(/}/g, "");
            result.push(data);
        }
    })
    return result;
}

const methodStyling = (method) => {
    if(method === "GET") return styles.postman_folder_file_GET;
    else if(method === "POST") return styles.postman_folder_file_POST;
}


const methodStylingTitle = (method) => {
    if(method === "GET") return styles.postman_folder_method_GET;
    else if(method === "POST") return styles.postman_folder_method_POST;
}


const PostmanFile = (item) => {
    let [isClick, setIsClick] = useState(false);
    let method = item.item.request.method;
    let descript = findDescription(item);
    let query = getQuery(item);
    let param = getParam(item);
    let fileRef = useRef(null);
    let path = item.item.request.url.path;
    path = path.join("/").replace(/\{\w+\}/g, "").replace(/\/+/g,"/");
    if(path[path.length - 1] === "/") {
        path = path.slice(0, path.length - 1);
    }

    let url = item.item.request.url;
    let server = `${url.protocol}://${url.host.join(".")}:${url.port}/${path}`
    //console.log(server);

    const [code, setCode] = React.useState(
        ``
      );

    const [result, setResult] = useState(
        ``
    )

    return (
        <div ref={fileRef} className={`${isClick ? styles.postman_folder_file : styles.postman_folder_file_hidden} ${methodStyling(method)}`} >
            <div className={styles.postman_folder_file_title} onClick={() => {setIsClick(!isClick)}}>
                <div className={`${styles.postman_folder_method} ${methodStylingTitle(method)}`}>{method}</div>
                <div className={styles.postman_folder_file_url}>
                {isClick ? "📖" : "📘"} {"/" + item.item.request.url.path.join("/")}
                </div>
                <div className={styles.postman_folder_file_descript}>{descript}</div>
                
            </div>

            <div className={styles.postman_folder_file_detail}>
                <br></br>

                <div className={styles.postman_folder_file_param}>
                    Parameters
                </div>

                <div className={styles.postman_folder_file_wrap}>
                    {
                        param.map((data) => (
                            <PostmanQuery kind={"Param"} data={data}></PostmanQuery>
                        ))
                    }

                    {
                        query.map((data) => (
                            <PostmanQuery kind={"Query"} data={data}></PostmanQuery>
                        ))
                    }
                </div>
                

                <div style={{marginBottom: "80px"}}></div>
                <div className={styles.postman_folder_file_param}>
                    Body
                </div>
                <CodeEditor
                    value={code}
                    language="json"
                    placeholder="Body Input"
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 15,
                        backgroundColor: "white",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                      }}
                />

                <div style={{marginBottom: "40px"}}></div>
                <div className={styles.postman_execute_wrap}>
                    <div onClick={() => {execute(method, server, fileRef, setResult)}}>Execute</div>
                    <div onClick={() => {cancel(fileRef)}}>Cancle</div>
                </div>


                <div style={{marginBottom: "80px"}}></div>
                <div className={styles.postman_folder_file_param}>
                    Result
                </div>

                <div className={styles.postman_scroll} style={{maxHeight: "400px",  overflow: "auto"}}>

                    <CodeEditor
                        disabled={true}
                        value={result}
                        language="json"
                        placeholder="result"
                        padding={15}
                        style={{
                            fontSize: 15,
                            backgroundColor: "white",
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        }}
                    />
                </div>
                

            </div>
        </div>
    )
}

export default PostmanFile;