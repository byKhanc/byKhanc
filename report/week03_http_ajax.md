# HTTP 기초 개념 정리

## 1️⃣ HTTP의 Request / Response 구조
**HTTP (HyperText Transfer Protocol)**  
- 웹에서 **클라이언트(브라우저)**와 서버가 통신하는 약속된 규약

### Request (요청)
- 클라이언트가 서버에 데이터를 요청할 때 사용  
- 구성 요소: URL, 요청 메서드(GET, POST 등), 헤더, 요청 바디(POST/PUT 시)  

### Response (응답)
- 서버가 클라이언트에게 요청 처리 결과를 반환  
- 구성 요소: 상태 코드(200, 404, 500 등), 헤더, 응답 바디(HTML, JSON 등)  

### 동작 흐름  
클라이언트 → Request → 서버 → 처리 → Response → 클라이언트

---

## 2️⃣ Ajax (Asynchronous JavaScript and XML)
- 페이지 전체 새로고침 없이 서버와 비동기 통신 가능  
- 일부 데이터만 갱신하여 사용자 경험 향상  
- 예) 댓글 작성 후 화면 일부만 갱신, 무한 스크롤 구현 등  
- 사용 기술: `XMLHttpRequest`, `fetch API`, `axios` 등

---

## 3️⃣ Forward vs Redirect

| 구분     | Forward (서버 내부 이동)                         | Redirect (클라이언트 재요청)                     |
|----------|-----------------------------------------------|------------------------------------------------|
| 동작     | 서버 내부에서 다른 자원(JSP, 서블릿 등)으로 이동 | 클라이언트에게 다른 URL로 이동 명령 전달          |
| URL      | 변경되지 않음                                  | 변경됨                                          |
| 요청/응답 | 같은 Request / Response 객체 사용               | 새로운 Request / Response 객체 생성               |
| 사용 용도 | 서버 내부 데이터 전달, 페이지 전환               | URL 변경 필요 시, POST-Redirect-GET 패턴 등 사용 |

### 특징
- **Forward**:  
  - URL 유지  
  - 서버 내부에서만 이동  
  - 요청과 응답 객체 그대로 전달되어 데이터 공유 가능  
- **Redirect**:  
  - 클라이언트가 새 URL로 재요청  
  - URL 주소가 변경됨  
  - 주로 새로고침 중복 방지용 POST-Redirect-GET 패턴에 사용

---

## 📌 결론
- HTTP는 클라이언트-서버 간 요청과 응답 기반의 통신 프로토콜  
- Ajax는 페이지 전체 새로고침 없이 데이터만 갱신하여 UX 향상  
- Forward는 서버 내부 이동, Redirect는 클라이언트 재요청으로 흐름 분기 처리  
