# CORS 정책과 웹 보안 기본 개념

## 1. 웹 보안 기본 개념

### (1) 동일 출처 정책(Same-Origin Policy, SOP)
- **목적**: 악성 스크립트가 다른 사이트의 민감한 데이터에 무단 접근하지 못하도록 막기.
- **동일 출처(Origin)**:

- 예시:
  - `https://example.com:443` → **Origin**
  - `https://example.com:443/page1` 와 `/page2` → 동일 출처
  - `https://api.example.com` → 다른 출처 (서브도메인 다름)
  - `http://example.com` → 다른 출처 (프로토콜 다름)

---

## 2. CORS(Cross-Origin Resource Sharing)

### (1) 개념
- 다른 출처의 리소스에 접근할 수 있도록 **서버**가 허용하는 메커니즘.
- 브라우저가 기본적으로 **동일 출처 정책**을 따르지만, 서버가 특정 조건을 만족하면 허용.

### (2) 동작 방식
1. **Simple Request**:  
 - 특정 조건을 만족하는 요청(GET, POST with simple headers) → 바로 요청/응답.
2. **Preflight Request**:  
 - OPTIONS 메서드로 브라우저가 먼저 서버에 "이 요청 보내도 되나요?"라고 물어봄.
 - 서버가 허용하면 실제 요청을 전송.

---

## 3. Origin

### 정의
- `scheme://hostname:port` 형태의 식별자.
- 예시:
- `https://example.com:443`
- `http://localhost:3000`

### 비교 규칙
- **프로토콜**, **호스트**, **포트** 중 하나라도 다르면 다른 Origin.

---

## 4. CORS 관련 주요 Header

### 요청(Request) 헤더
- **Origin**: 요청이 발생한 출처 표시.
- **Access-Control-Request-Method**: Preflight에서 어떤 HTTP 메서드로 요청할지 알려줌.
- **Access-Control-Request-Headers**: Preflight에서 어떤 커스텀 헤더를 사용할지 알려줌.

### 응답(Response) 헤더
- **Access-Control-Allow-Origin**: 허용할 Origin (`*` 또는 특정 도메인).
- **Access-Control-Allow-Methods**: 허용할 HTTP 메서드.
- **Access-Control-Allow-Headers**: 허용할 커스텀 헤더.
- **Access-Control-Allow-Credentials**: 쿠키·인증정보 포함 허용 여부.
- **Access-Control-Max-Age**: Preflight 결과 캐시 시간.

---

## 5. Preflight 요청(OPTIONS)

### 특징
- 브라우저가 자동으로 보냄.
- 본 요청 전에, 서버가 해당 Origin·메서드·헤더를 허용하는지 확인.
- 서버가 허용하면 본 요청 진행.

### 예시
```http
OPTIONS /api/data HTTP/1.1
Origin: https://myapp.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
