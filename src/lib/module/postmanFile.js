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
    let dupCheck = {};
    let result = [];
    if(query === undefined) return []; 
    query = query?.filter(prev => prev.key !== "postman_description");
    query.map((data) => {
        if(dupCheck[data.key] === undefined) {
            dupCheck[data.key] = data.value
        } else {
            if(Array.isArray(dupCheck[data.key])) {
                dupCheck[data.key] = [
                    ...dupCheck[data.key],
                    data.value
                ]
            } else {
                dupCheck[data.key] = [
                    dupCheck[data.key],
                    data.value
                ]
            }
        }
    })

    Object.keys(dupCheck).map((data) => {
        result.push({
            key: data,
            value: dupCheck[data]
        })
    })

    return result;
}

const getHeader = (item) => {
    let header = item.item.request.header;
    return header;
}


const getParam = (item) => { 
    let path = item.item.request.url.path;
    let result = [];
    if(path === undefined) return result;
    path.map((item) => {
        if(item.includes("{") && item.includes("}")) {
            let data = item.replace(/{/g, "").replace(/}/g, "");
            result.push({
                key: data,
                value: ""
            });
        }
    })
    return result;
}

const getBody = (item) => {
    let body = item.item.request.body;

    if(body === undefined) return undefined;

    body = JSON.parse(body.raw);
    return body;
}

const methodStyling = (method) => {
    if(method === "GET") return styles.postman_folder_file_GET;
    else if(method === "POST") return styles.postman_folder_file_POST;
    else if(method === "DELETE") return styles.postman_folder_file_DELETE;
    else if(method === "PUT") return styles.postman_folder_file_PUT;
    else if(method === "PATCH") return styles.postman_folder_file_PATCH;
    else if(method === "OPTIONS") return styles.postman_folder_file_OPTIONS;
    else if(method === "HEAD") return styles.postman_folder_file_HEAD;
}


const methodStylingTitle = (method) => {
    if(method === "GET") return styles.postman_folder_method_GET;
    else if(method === "POST") return styles.postman_folder_method_POST;
    else if(method === "DELETE") return styles.postman_folder_method_DELETE;
    else if(method === "PUT") return styles.postman_folder_method_PUT;
    else if(method === "PATCH") return styles.postman_folder_method_PATCH;
    else if(method === "OPTIONS") return styles.postman_folder_method_OPTIONS;
    else if(method === "HEAD") return styles.postman_folder_method_HEAD;
}


const PostmanFile = (item) => {
    let [abortController, setAbortController] = useState(new AbortController())
    let [isClick, setIsClick] = useState(false);
    let method = item.item.request.method;
    let descript = findDescription(item);
    let query = getQuery(item);
    let header = getHeader(item);
    let param = getParam(item);
    let body = getBody(item);

    let fileRef = useRef(null);
    let path = item.item.request.url.path;
    
    if(path !== undefined){
        path = path.join("/").replace(/\{\w+\}/g, "").replace(/\/+/g,"/");
        if(path[path.length - 1] === "/") {
            path = path.slice(0, path.length - 1);
        }
    } else {
        path = "";
    }

        

    let url = item.item.request.url;
    let server = "";
    if(url.port === undefined) {
        server = `${url.protocol}://${url.host.join(".")}/${path}`
    } else {
        server = `${url.protocol}://${url.host.join(".")}:${url.port}/${path}`
    }
    
    //console.log(server);

    let [code, setCode] = useState(
        body === undefined ? `` : JSON.stringify(body, null, 2)
      );

    const [result, setResult] = useState(
        ``
    )
    
    return (
        <div ref={fileRef} className={`${isClick ? styles.postman_folder_file : styles.postman_folder_file_hidden} ${methodStyling(method)}`} >
            <div className={styles.postman_folder_file_title} onClick={() => {setIsClick(!isClick)}}>
                <div className={`${styles.postman_folder_method} ${methodStylingTitle(method)}`}>{method}</div>
                <div className={styles.postman_folder_file_url}>
                    
                {isClick ? "📖" : "📘"} {
                    Array.isArray(item.item.request.url.path) ? (
                        "/" + item.item.request.url.path?.join("/")
                    ) : (
                        "/"
                    )
                }
                </div>
                <div className={styles.postman_folder_file_descript}>{descript}</div>
                
            </div>

            <div className={styles.postman_folder_file_detail}>
                {
                    param.length === 0 && query.length === 0 && header.length === 0? (
                        <></>
                    ) : (
                        <>
                            <br></br>
                            <div className={styles.postman_folder_file_param}>
                                Parameters
                            </div>

                            <div className={styles.postman_folder_file_wrap}>
                                {
                                    header.map((data, index) => (
                                        <PostmanQuery key={`QueryHeader${index}`} kind={"Header"} data={data}></PostmanQuery>
                                    ))
                                }

                                {
                                    param.map((data, index) => (
                                        <PostmanQuery key={`QueryParam${index}`}  kind={"Param"} data={data}></PostmanQuery>
                                    ))
                                }

                                {
                                    query.map((data, index) => (
                                        <PostmanQuery key={`Queryquery${index}`} kind={"Query"} data={data}></PostmanQuery>
                                    ))
                                }
                            </div>
                        </>
                    )
                }
                
                {
                    body ? (
                        <>
                            <br/>
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
                        </>
                    ) : (
                        <></>
                    )
                }
               

                <div style={{marginBottom: "40px"}}></div>
                <div className={styles.postman_execute_wrap}>
                    <div onClick={() => {execute(method, server, fileRef, setResult, abortController, setAbortController)}}>Execute</div>
                    <div onClick={() => { cancel(fileRef, setResult, abortController, setAbortController)}}>Cancel</div>
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