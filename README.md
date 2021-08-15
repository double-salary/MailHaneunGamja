<img src="https://img.shields.io/badge/AzureStaticWebApp-00599C?style=flat-square&logo=microsoftazure&logoColor=white"/> &nbsp; 
<img src="https://img.shields.io/badge/MongoDB-65A456?style=flat-square&logo=mongodb&logoColor=white"/> &nbsp;
<img src="https://img.shields.io/badge/Svelte-FF633E?style=flat-square&logo=svelte&logoColor=white"/> &nbsp;
<img src="https://img.shields.io/badge/GitHubActions-0E1117?style=flat-square&logo=githubactions&logoColor=white"/>

# `말하는 감자🥔` - made by `월급두배받는법`

![ServiceMain](https://user-images.githubusercontent.com/57657135/129477887-0d8ea662-7cbe-4eed-9938-6ee005c9d482.gif)

# 멜하는 감자의 기획 의도
---
예기치 못하게 길어진 코로나 사태로 인해 가시밭길 대학생활을 하고 있는 대학생들이 점점 늘어나는 요즘😢 서비스 `멜하는 감자`는 교수님께 메일을 보내려고 창만 열면 말하는 감자가 되어버리는 수많은 대학생들을 위해 만들어졌습니다. `멜하는 감자` 는 제작자 @subeenpark-io , @HoYoungChun, @ksiyeon27, @seoljiwon 와 그 주변인들의 눈물젖은 메일들을 기반으로 만들어졌으며, 
최소한의 입력을 통해 `교수님에게 보낼 수 있는 예의바른 메일✉️`을 뚝딱! 만들어주는 웹서비스입니다. 수업, 성적, 면담 문의 등 교수님께 보낼 다양한 메일을 쉽게 작성해보세요!

# 사용된 기술들
---
\* Server - <img src="https://img.shields.io/badge/AzureStaticWebApp-00599C?style=flat-square&logo=microsoftazure&logoColor=white"/>&nbsp; <img src="https://img.shields.io/badge/MongoDB-65A456?style=flat-square&logo=mongodb&logoColor=white"/>

\* Client - <img src="https://img.shields.io/badge/Svelte-FF633E?style=flat-square&logo=svelte&logoColor=white"/> 

\* 그리고... <img src="https://img.shields.io/badge/GitHubActions-0E1117?style=flat-square&logo=githubactions&logoColor=white"/>

# 실행 방법
## 준비 사항
* `NodeJS` - v14.17.4
* `Azure Functions Core Tools` : v3.0.3477
* `npm` - v6.14.14
* `Azure Static Web App CLI` - v0.6.1
* `Azure` 계정
* `GitHub` 계정
* VSCode `Azure Static Web App` & `Azure Functions` extension 
* `Azure Cosmos DB Instance` [참고](https://docs.microsoft.com/en-us/azure/static-web-apps/add-mongoose) 와 그 `PRIMARY CONNECTION STRING`


## 로컬에서 실행하는 법
### settings(DB setting)
#### {BASE_DIR}/api/local.settings.json
```
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "DATABASE_CONNECTION_STRING": {YOUR AZURE DB PRIMARY CONNECT STRING}
  },
  "Host": {
    "CORS": "*"
  }
}
```

### shell1 - svelte 실행
```shell
git clone https://github.com/double-salary/MailHaneunGamja.git
cd MailHaneunGamja
cd svelte-app
npm install
npm run dev
```
### shell2 - api 실행 (시작 directory : MailHaneunGamja)
```shell
cd api
npm install
func start
````


### shell3 - swa 실행 (시작 directory : MailHaneunGamja)
```shell
cd api
swa start http://localhost:5000 --api ./api 
````
### 접속
`http://localhost:4280/`로 접속

## GitHub Actions를 위한 배포
### 
1. Azure 계정에 로그인 
2. [포탈](https://portal.azure.com/#home)에 접속, `create a resource`를 누른다. 
3. `Static Web App`을 검색해 선택 후 `create`을 누른다.
4. 각종 옵션을 선택한 후 `Sign in with GitHub`를 눌러 인증을 진행한다.
    * Subscription - {본인 계정},
    * **Resource Group - {CosmosDB와 같은 그룹}**
    * Plan type - {free}
    * Azure Functions and staging details - {West US 2}
    * Source - {GitHub}
5. 인스턴스 접속 후 Configuration에서 DATABASE_CONNECTION_STRING을 등록한다.  


* 이 레포지토리는 [2021 HackaLearn](https://github.com/devrel-kr/HackaLearn) 참가를 위해 만들어진 서비스 **말하는 감자**의 코드를 담고 있습니다. 
* This repository is about 'MailingPotato', the web service for [2021 HackaLearn](https://github.com/devrel-kr/HackaLearn).
* 이 레포지토리는 [Azure Static Web App Template](https://github.com/MicrosoftDocs/mslearn-staticwebapp-authentication)을 이용해 만들어졌습니다.




