import React, { useState } from "react";
import styles from "../css/postman2React.module.css";
import PostmanFile from "./postmanFile";

const PostmanFolder = ({title, item}) => {
    let [isClick, setIsClick] = useState(true);

    return (
        <>
        <div className={styles.postman_folder} onClick={() => {setIsClick(!isClick)}}>
            <div className={styles.postman_folder_title}>
                <div>📂 { title }</div>
                <div>이것은 설명입니다이것은 설명입니다이것은 설명입니다이것은 설명입니다이것은 설명입니다</div>
            </div>
        </div>


        <div className={isClick ? styles.postman_folder_docs : styles.postman_folder_docs_hidden}>
            {
                item.map((doc) => ( 
                    <PostmanFile item={doc}></PostmanFile>
                ))
            }
            </div>
        </>
    )
}

export default PostmanFolder;