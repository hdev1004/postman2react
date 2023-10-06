# Postman2React

<br/>

### 📕 데모(Demo) 사이트
[Demo](https://postman2react.web.app/)

<br/>

### 🤔 이것은 무엇인가요?
postman2react를 사용하게 되면 postman에서 추출된 json을 UI로 깔끔하게 보여줍니다.
React로 작성이 되었으며, npm으로 다운로드 하여 사용할 수 있습니다.

<br/>

### 📖 사용 방법
사용방법은 간단합니다.

<b>1. npm으로 postman2react를 다운받아 줍니다.</b>

```shell
npm i postman2react
```

<br/>

<b>2. postman에서 json을 추출 합니다.</b>
   
![postman](https://github.com/hdev1004/postman2react/assets/59737252/1b15b88c-63bd-4c90-80bc-feb852e657b6)

또는 [예시 데이터](https://github.com/hdev1004/postman2react/raw/master/src/postman_collection.json)를 다운하여 사용할 수 있습니다.

<br/>

<b>3. 추출 된 json 데이터를 import 시켜준 후 Postman2React로 데이터를 넘겨줍니다.</b>

Postman2React에는 세 개의 속성이 있습니다.

|속성|설명|
|------|---|
|postmanJson|postman에서 추출된 json 데이터|
|url|찾고자 하는 URL, 전체의 경우는 '*'로 표기|
|equalize|true : 완벽일치, false : 문자열 포함|

```jsx
import { Postman2React } from 'postman2react';
import postmanJson from "./postman_collection.json"; //postman에서 추출된 json

function App() {
  return (
      <div>
        <Postman2React postmanJson={postmanJson} url={"*"} equalize={true}></Postman2React>
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

<b>1. Download postman2react with npm.</b>

```shell
npm i postman2react
```

<br/>

<b>2. Extract json from postman.</b>
   
![postman](https://github.com/hdev1004/postman2react/assets/59737252/1b15b88c-63bd-4c90-80bc-feb852e657b6)

Alternatively, [example data](https://github.com/hdev1004/postman2react/raw/master/src/postman_collection.json) can be downloaded and used.

<br/>

<b>3. Import the extracted json data and hand it over to Postman2React.</b>

Postman2React has three properties.

|Property|Description|
|------|---|
|postmanJson|json data extracted from postman|
|url|URL you want to find, marked as '*' for all|
|equalize|true : perfect match, false : contains string|


```jsx
import { Postman2React } from 'postman2react';
import postmanJson from "./postman_collection.json"; //postman에서 추출된 json

function App() {
  return (
      <div>
        <Postman2React postmanJson={postmanJson} url={"*"} equalize={true}></Postman2React>
      </div>
  );
}
```

<br/>

4. Check results

![스크린샷](https://github.com/hdev1004/postman2react/assets/59737252/7d7e24e4-77eb-41a3-bcce-d53497ce564e)

<br/>
