# 📘 3계층 구조와 CRUD 작동 흐름 조사

---

## 📌 3-Tier Architecture (3계층 아키텍처)

### 🔎 개요
3-Tier Architecture는 **웹 애플리케이션의 구조를 세 가지 계층으로 나누어 구성**한 방식입니다. 각 계층은 **역할이 분리**되어 유지보수, 확장, 보안 측면에서 유리합니다.

### 🧱 구성 요소

1. **Presentation Layer (표현 계층)**  
   - 사용자 인터페이스(UI)를 담당
   - 웹 브라우저에서 보이는 화면
   - HTML, CSS, JavaScript 등으로 구성
   - 예: React, Vue.js, JSP, Thymeleaf 등

2. **Business Logic Layer (비즈니스 계층)**  
   - 사용자 요청 처리 및 로직 수행
   - 데이터 가공, 처리, 검증 등의 기능 수행
   - 예: Java(Spring), Python(Django), Node.js 등

3. **Data Layer (데이터 계층)**  
   - 데이터 저장 및 관리
   - 데이터베이스와의 연결
   - 예: MySQL, Oracle, MongoDB 등

### 🔄 데이터 흐름 예시
1. 사용자가 웹 브라우저에서 버튼 클릭 (Presentation)
2. 서버에서 요청을 받아 처리 (Business Logic)
3. 필요한 데이터베이스 쿼리 수행 (Data)
4. 결과를 로직 처리 후 웹 페이지로 반환

---

## 📌 CRUD 개념과 웹 흐름

### 🔤 CRUD란?
CRUD는 데이터 처리의 4가지 기본 기능을 뜻합니다:

| 기능  | 의미           | HTTP 메서드 | 예시 URI          |
|-------|----------------|--------------|-------------------|
| C     | Create (생성)   | POST         | /users            |
| R     | Read (조회)     | GET          | /users, /users/1  |
| U     | Update (수정)   | PUT / PATCH  | /users/1          |
| D     | Delete (삭제)   | DELETE       | /users/1          |

### 🌐 웹에서의 작동 흐름

#### 예: 사용자 정보 수정

1. **사용자 입력 (브라우저)**  
   - 사용자가 폼에 수정할 정보를 입력하고 "수정" 버튼 클릭

2. **HTTP 요청 전송 (Client → Server)**  
   - `PUT /users/1` 형식의 요청 전송 (ID가 1번인 사용자 수정)

3. **서버 처리 (Business Logic)**  
   - 요청을 받아 검증하고 데이터베이스에 업데이트 수행

4. **DB 갱신 (Data Layer)**  
   - UPDATE 쿼리 수행

5. **응답 반환**  
   - 처리 결과에 따라 성공/실패 응답을 브라우저로 반환

### 🛠 CRUD 흐름을 표현하는 도식

```plaintext
[Client] → [Controller (API 요청 처리)]
         → [Service (로직 처리)]
         → [Repository (DB 접근)]
         → [DB] → ← 결과 반환
