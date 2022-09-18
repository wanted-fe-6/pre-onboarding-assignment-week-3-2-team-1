## <img src='https://user-images.githubusercontent.com/85447054/190890328-ba527a9c-6216-46e9-8e7e-45437174f0f6.png' width='240'/>

## ❓ 개요

#### API 서버와 통신해서 [댓글 프로젝트](https://younuk.notion.site/a8d75feeb90040a1b64bef5944664969)를  Redux를 사용해구현합니다.

---

## 📜 목차

### 🔗 데모 페이지

#### 👉 바로 가기

#### ⚙️ 설치 실행

### 💁‍♂️ 프로젝트 소개

#### 🤝 팀원 소개

#### 💻 구현 기능

#### ⚒️ 개발 스택

#### 🌲 폴더 구조

---

### 🔗 데모 페이지

#### 👉 [바로 가기](https://wanted-pre-onboarding-fe-6-3-1.vercel.app/)

#### ⚙️ 설치 실행

```bash
# 설치
> git clone https://github.com/wanted-fe-6/pre-onboarding-assignment-week-3-2-team-1.git
> cd pre-onboarding-assignment-week-3-2-team-1
> npm install

# 실행
> npm start
```

---
  <br/>
  
### 💁‍♂️ 프로젝트 소개 및 진행 방식

  <br/>

  **댓글 기능에 Redux를 통하여 상태관리 및 CRUD를 구현하는 과제입니다.**

  - 팀원들 각자 브랜치를 만들어 리덕스를 사용해 댓글 프로젝트를 구현합니다.
  
    - 시간을 정해놓고 각자 리덕스를 이용해 과제 진행했습니다.
    - 대부분 리덕스를 처음 사용해봐서 생각보다 좀 더 시간이 걸렸습니다.
  
  - 구현 후 각자 어떻게 구현 했는지 코드 리뷰를 합니다.
  
    - 각자 어떤 방식으로 개발했는지 Redux를 중심으로 코드리뷰 진행했습니다.
    - 팀원 마다 리덕스 사용 방식과 사용 라이브러리가 조금씩 달랐고(redux-thunk, redux-saga, redux-toolkit 등) 각자 어떻게 사용했는지 설명하는 시간을 가졌습니다.
  
  - 코드 리뷰 후 제일 구현이 잘 된 사람의 브랜치를 master로 머지한 후 리펙토링 합니다.(리뷰 후 투표로 진행)  
    - 투표 결과
     <img src="https://user-images.githubusercontent.com/77873651/190910947-49d00d18-e06f-4bd1-a68d-199e93a393d7.png"  width="400" />


  
  - 다른 팀원에 참고하기 좋은 코드나 이슈에 작성된 개선 방향을 통해 리펙토링합니다.
    - 추후 [#8] 이슈에 개선 사항 등록해서 리펙토링 진행하고 있습니다.
  
  
  
  
  
  <br/>
  
#### 🤝 팀원 소개

  <br/>

| 이름                                          | 개발 내용                       | 브랜치 이름        |
| --------------------------------------------- | ------------------------------- |-------------- |
| [최홍규(팀장)](https://github.com/gomgun-lab) | Redux를 사용하여 댓글 CRUD 개발 |  feat/#6/최홍규
| [강민규](https://github.com/kagrin97)         | Redux를 사용하여 댓글 CRUD 개발 | feat/#2/강민규
| [백승전](https://github.com/BaikSeungJeon)    | Redux를 사용하여 댓글 CRUD 개발 | feat/#4/백승전, master
| [김정수](https://github.com/sunpl13)          | 개인 사정으로 인한 불참         |   
| [류웅선](https://github.com/unsnruu)          | Redux를 사용하여 댓글 CRUD 개발 | feat/#7/류웅선
| [윤여건](https://github.com/kunnyCode)        | Redux를 사용하여 댓글 CRUD 개발 | feat/#1/윤여건

  <br/>
  
#### 💻 구현 기능  

- #### 과제 범위

  ***

  - [x] 1. 과제 예시 영상과 같이 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현

  - [x] 2. 페이지네이션
  - [x] 3. 댓글 작성, 수정, 삭제 후 동작
    - [x] 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
    - [x] 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
    - [x] 삭제하고 난 뒤: 1페이지로 이동  

- #### 요구 사항

  ***

  - [x] Redux 환경설정은 자유롭게 진행
    - [x] Redux-saga or Redux-thunk 자유롭게 선택 가능 &rarr; <b>saga로 구현</br>
    - [x] 미들웨어 사용안하는 것도 가능 &rarr; <b>사용함</br>

  - [x] Redux logger, Redux-Devtools 설정 필수
  - [x] Redux를 이용한 비동기 처리 필수

---
  <br/>
  
#### ⚒️ 개발 스택  

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux saga-999999?style=for-the-badge&logo=reduxsaga&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
</div>

#### 🌲 폴더 구조  
  <br/>

<pre>
폴더 구조 넣어주세요~
</pre>
