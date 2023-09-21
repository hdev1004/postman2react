import React from "react";
import styles from "../css/postman2React.module.css";

const PostmanQuery = ({kind, data}) => {
    return (
        <div className={styles.postman_folder_file_query}>
            <div>
                <div style={{textAlign: "center"}}>( {kind} )</div>
                <div style={{textAlign: "center"}}>
                    {kind === "Param" ? 
                        data : data.key}</div>
            </div>

            <div style={{maxWidth: "500px", width: "50%"}}>
                <input spellCheck={false} data-type={kind} data-key={kind === "Param" ? data : data.key} value={kind === "" ? data :  data.value}></input>
            </div>
        </div>
    )
}

export default PostmanQuery;