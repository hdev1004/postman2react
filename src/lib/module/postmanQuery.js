import React, { useEffect, useState } from "react";
import styles from "../css/postman2React.module.css";
import TrashWhite from "../images/recycle-bin_white.png";
import TrashRed from "../images/recycle-bin_red.png";

const PostmanQuery = ({kind, data}) => {
    let [addParam, setAddParam] = useState([]);
    let [queryData, setQueryData] = useState({...data});
    
    const addParamClick = () => {
        let data = [...addParam];
        data.push("")
        setAddParam(data);
    }

    return (
        <>
            {
                Array.isArray(queryData.value) ? (
                    <>
                        <div className={styles.postman_folder_file_query} style={{height: "auto"}}>
                            <div>
                                <div style={{textAlign: "center"}}>( {kind} )</div>
                                <div style={{textAlign: "center"}}>
                                    {queryData.key}</div>
                            </div>
                            <div style={{maxWidth: "500px", width: "50%"}}>
                                <>
                                {
                                    queryData.value.map((array_data, index) => (
                                        <div className={styles.input_wrap}>
                                            <input spellCheck={false} data-type={kind} data-key={queryData.key} value={array_data} style={{marginTop: "9px", marginBottom: "7px"}} onChange={(e) => {
                                                let data = queryData.value;
                                                data[index] = e.target.value;
                                                setQueryData({
                                                    ...queryData,
                                                    value: data
                                                })
                                            }}></input>
                                            <div className={styles.input_delete} onClick={() => {
                                                let tempData = queryData.value;
                                                tempData.splice(index, 1);
                                                console.log(tempData);
                                                setQueryData({
                                                    ...queryData,
                                                    value: tempData
                                                })
                                            }}>
                                                <img src={TrashWhite}></img>
                                            </div>
                                        </div>
                                        
                                    ))
                                }
                                {
                                    addParam.map((array_data, index) => (
                                        <div className={styles.input_wrap}>
                                        <input spellCheck={false} data-type={kind} data-key={data.key} style={{marginTop: "9px", marginBottom: "7px"}} value={array_data} onChange={(e) => {
                                            let tempData = [...addParam];
                                            tempData[index] = e.target.value;
                                            setAddParam(tempData);
                                        }}></input>
                                            <div className={styles.input_delete} onClick={() => {
                                                let tempData = [...addParam];
                                                tempData.splice(index, 1);
                                                setAddParam(tempData);
                                            }}>
                                                
                                                <img src={TrashWhite}></img>
                                            </div>
                                        </div>
                                        
                                    ))
                                }
                                </>
                                <button className={styles.postman_folder_btn} onClick={addParamClick}>Add Query</button>
                            </div>
                        </div>

                    </>
                   
                ) : (
                    <div className={styles.postman_folder_file_query}>
                        <div>
                            <div style={{textAlign: "center"}}>( {kind} )</div>
                            <div style={{textAlign: "center"}}>
                                {data.key}</div>
                        </div>
                        <div style={{maxWidth: "500px", width: "50%"}}>    
                            <input spellCheck={false} data-type={kind} data-key={data.key} defaultValue={data.value}></input>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default PostmanQuery;