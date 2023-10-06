import React, { useEffect, useState } from "react";
import styles from "./css/postman2React.module.css";
import PostmanFolder from "./module/postmanFolder";

const Postman2React = ({postmanJson, url, equalize}) => {
    let [postman, setPostman] = useState(null);

    useEffect(() => {
        let result = {};
        postmanJson.item && postmanJson.item.map((item, index) => {
            if(url === "*") {
                result[item.name] = item.item;
            } else {
                if(url === "/") {
                    let filter = item.item.filter(prev => prev.request.url.path === undefined);
                        if(filter.length > 0) {
                            result[item.name] = filter;
                    }
                } else {
                    if(!equalize) { //포함이 될 때
                        let filter = item.item.filter(prev => prev.request.url.path && ("/" + prev.request.url.path.join("/")).includes(url));
                        if(filter.length > 0) {
                            result[item.name] = filter;
                        }
                    } else { //완전히 같게
                        let filter = item.item.filter(prev => prev.request.url.path && ("/" + prev.request.url.path.join("/") === url));
                        if(filter.length > 0) {
                            result[item.name] = filter;
                        }
                    }
                }
                
            }
            
        })
        setPostman(result);
    }, [postmanJson])

    return (
        <div className={styles.postman_form}>
            {
                postman && Object.keys(postman).map((item) => (
                    <PostmanFolder title={item} item={postman[item]}></PostmanFolder>
                ))
            }
        </div>
    )
};

export default Postman2React;