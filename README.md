# Postman2React

### 🤔 이것은 무엇인가요?
postman2react를 사용하게 되면 postman에서 추출된 json을 UI로 깔끔하게 보여줍니다.
React로 작성이 되었으며, npm으로 다운로드 하여 사용할 수 있습니다.

현재 더 쉬운 예시를 위해 데모 사이트와 도커를 준비 중 입니다.
버그가 발생할 수 있으니 유의 바랍니다

<br/>

### 📖 사용 방법
사용방법은 간단합니다.
1. npm으로 postman2react를 다운받아 줍니다.

```shell
npm i postman2react
```

<br/>

2. postman에서 json을 추출 합니다.
   
![postman](https://github.com/hdev1004/postman2react/assets/59737252/1b15b88c-63bd-4c90-80bc-feb852e657b6)

<br/>

3. 추출 된 json 데이터를 import 시켜준 후 Postman2React로 데이터를 넘겨줍니다.
Postman2React에는 두 개의 속성이 있습니다.

|속성|설명|
|------|---|
|postmanJson|postman에서 추출된 json 데이터|
|url|찾고자 하는 URL, 전체의 경우는 '*'로 표기|

```jsx
import { Postman2React } from 'postman2react';
import postmanJson from "./Babble.postman_collection.json"; //postman에서 추출된 json

function App() {
  return (
    <div style={{width: "100%", height: "800px"}}>
        <Postman2React postmanJson={postmanJson} url={"*"}></Postman2React>
    </div>
  );
}
```

<br/>

4. 결과 확인

![스크린샷](https://github.com/hdev1004/postman2react/assets/59737252/7d7e24e4-77eb-41a3-bcce-d53497ce564e)

<br/>

## 🤔 What is This? (English)
When you use postman2react, you can clearly see the json extracted from postman with the UI.
It was created as React and can be downloaded at npm for use.

now preparing demo sites and dockers for easier examples.
Please note that bugs may occur

<br/>

### How to use 📖
It's simple to use.
1. Download postman2react with npm.

```shell
npm i postman2react
```

<br/>

2. postman에서 json을 추출 합니다.
   
![postman](https://github.com/hdev1004/postman2react/assets/59737252/1b15b88c-63bd-4c90-80bc-feb852e657b6)

<br/>

3. Import the extracted json data and hand it over to Postman2React.
Postman2React has two properties.

|Property|Description|
|------|---|
|postmanJson|json data extracted from postman|
|url|URL you want to find, marked as '*' for all|


```jsx
import { Postman2React } from 'postman2react';
import postmanJson from "./Babble.postman_collection.json"; //postman에서 추출된 json

function App() {
  return (
    <div style={{width: "100%", height: "800px"}}>
        <Postman2React postmanJson={postmanJson} url={"*"}></Postman2React>
    </div>
  );
}
```

<br/>

4. Check results

![스크린샷](https://github.com/hdev1004/postman2react/assets/59737252/7d7e24e4-77eb-41a3-bcce-d53497ce564e)

<br/>
