import React, { useEffect, useState } from "react";
import styles from "./css/postman2React.module.css";
import PostmanFolder from "./module/postmanFolder";

const Postman2React = ({postmanJson, url}) => {
    console.log(postmanJson);
    let [postman, setPostman] = useState(null);

    useEffect(() => {
        let result = {};
        postmanJson.item.map((item, index) => {
            if(url === "*") {
                result[item.name] = item.item;
            } else {
                let filter = item.item.filter(prev => prev.request.url.path.join("/") + "/" === url);
                if(filter.length > 0) {
                    result[item.name] = filter;
                }
            }
            
        })
        setPostman(result);
    }, [])

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