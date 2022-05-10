# 개인 프로젝트 ( 학습 ) 02 : 미니 메모장

<p align="center"><img src="https://us.123rf.com/450wm/djvstock/djvstock1612/djvstock161201561/67263022-%EB%A9%94%EB%AA%A8%EC%9E%A5-%EB%B0%8F-%EC%97%B0%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%EB%94%94%EC%9E%90%EC%9D%B8.jpg?ver=6"></p>

&nbsp;
&nbsp;

## 학습 목표
자바스크립트 기본 문법과 DOM 제어 HTML 과 CSS 활용 숙련

&nbsp;
&nbsp;

## 설명
자바스크립트 기본 문법을 공부하고 HTML과 CSS로 구조화되어 있는 웹 페이지에 자바스크립트의 DOM 제어 문법을 적용해보면서 자바스크립트를 활용하여 웹 브라우저를 제어하는 방법을 공부하기 위해 만든 학습용 개인 프로젝트입니다. 많은 개발자들이 자바스크립트의 기본 문법을 공부하기 위해서 만들어 보면 좋을 미니 프로젝트로 투두리스트 앱을 추천하고 있고 이에 따라 투두리스트 기능에서 좀 더 추가된 기능이 필요한 메모장 기능을 이번 미니 프로젝트로 선정 했습니다. 노마드코더 바닐라 JS로 크롬앱 만들기 강의 ( https://nomadcoders.co/javascript-for-beginners ) 를 참고하여 프로젝트를 진행하였고 자바스크립트를 활용하여 웹 페이지가 좀 더 똑똑해지는 과정을 학습했습니다.

&nbsp;
&nbsp;

## 기능
1. 간단한 메모 추가 기능
2. 로컬 스토리지를 활용한 메모 저장
3. 저장된 메모 삭제 기능
4. 시계 기능
5. 오늘의 날씨와 현재 위치 측정 기능
6. 랜덤 배경 화면과 랜덤 명언 기능

&nbsp;
&nbsp;

## 활용 스택

<div style="display:flex;flex-wrap:wrap">
 <img src="https://img.shields.io/badge/html5-E34F26?&logo=html5&logoColor=white"> 
 <img src="https://img.shields.io/badge/css-1572B6?&logo=css3&logoColor=white"> 
 <img src="https://img.shields.io/badge/javascript-F7DF1E?&logo=javascript&logoColor=white">
</div>

&nbsp;
&nbsp;

## 프로젝트 소개

### 1. 메인 UI ( 메모장 기능 )
#### 간단한 메모의 제목과 내용을 작성하고 작성완료 버튼을 누르면 해당 메모가 하단 메모리스트 박스에 추가됩니다. 해당 메모리스트를 클릭하면 모달 형식으로 디테일 창을 띄워 메모의 내용을 확인 할 수 있습니다. 또한 UI의 좌측에는 시계 기능, 브라우저를 새로 고침하거나 브라우저를 끄고 다음에 다시 접속할 때 마다 랜덤으로 모두 다른 배경 화면과 세계 위인들의 명언을 보여줍니다. 날씨와 현재 디바이스의 위치를 측정해주는 오픈 API (https://openweathermap.org/api) 를 사용하여 접속한 디바이스의 위치 그리고 현재의 날씨를 텍스트로 유저에게 알려줍니다.
![로그인 페이지에서 친구목록 페이지로 이동](https://user-images.githubusercontent.com/82381946/164914798-69b86db6-9bea-4557-b7cf-0ede270cf533.gif)
&nbsp;
&nbsp;

### 2. 로컬 스토리지를 사용한 메모 저장
#### 메모를 작성하고 삭제할 때 마다 브라우저의 로컬 스토리지에 데이터로써 생성되고 삭제될 수 있도록 해주면서 해당 디바이스에서 만큼은 페이지를 새로고침하거나 껐다 켜도 작성되어 있는 메모는 그대로 보존되어 있도록 했습니다. 
![로그인 페이지에서 친구목록 페이지로 이동](https://user-images.githubusercontent.com/82381946/164914630-866d81d7-6a76-4851-8149-f30126333cdb.gif)

&nbsp;
&nbsp;

## 프로젝트 후 결과 ( 배운 내용 )
1. 자바스크립트의 기본 문법과 HTML,CSS 숙련도 향상
2. 자바스크립트로 DOM을 제어하는 방법
3. 필요에 따른 오픈 API 탐색 및 선정, 활용하기 위한 문서 해독 능력

