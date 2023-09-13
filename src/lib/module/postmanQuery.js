import React from "react";
import styles from "../css/postman2React.module.css";

const PostmanQuery = ({kind, data}) => {
    return (
        <div className={styles.postman_folder_file_query}>
            <div>
                <div>( {kind} )</div>
                <div>{kind === "Param" ? data : data.key}</div>
            </div>

            <div>
                <input spellCheck={false} data-type={kind} data-key={kind === "Param" ? data : data.key}></input>
            </div>
        </div>
    )
}

export default PostmanQuery;