# RESTful API의 개념과 설계

---

## 📌 1. REST란?

REST (Representational State Transfer)는 웹의 장점을 최대한 활용할 수 있도록 설계된 아키텍처 스타일입니다.  
HTTP URI를 통해 **자원(Resource)** 을 식별하고, **HTTP 메서드**를 사용해 자원에 대한 **CRUD 연산**을 수행합니다.

- 자원을 **이름(URI)** 으로 구분
- 자원의 상태(Representation)를 주고받음 (JSON, XML 등 사용)

---

## 📘 2. REST의 원칙 및 HTTP 메서드

### ✅ REST 핵심 원칙

| 원칙         | 설명 |
|--------------|------|
| **자원(Resource)** | 모든 것을 자원으로 간주 (ex. 사용자, 게시글, 댓글 등) |
| **URI** | 자원을 고유하게 식별, 명사 사용, 복수형 권장 |
| **HTTP 메서드** | 자원에 대한 CRUD 연산 표현 (GET, POST, PUT, DELETE 등) |
| **표현(Representation)** | 자원의 상태를 JSON/XML 등으로 주고받음 |
| **무상태성(Stateless)** | 각 요청은 독립적이며, 상태를 서버에 저장하지 않음 |

### ✅ HTTP 메서드 요약

| 메서드 | 설명 | 용도 |
|--------|------|------|
| `GET` | 자원 조회 | Read |
| `POST` | 자원 생성 | Create |
| `PUT` | 자원 전체 수정/교체 | Update (전체) |
| `PATCH` | 자원 일부 수정 | Update (부분) |
| `DELETE` | 자원 삭제 | Delete |

---

## 📘 3. RESTful 엔드포인트 설계 방법

### 🔹 규칙 1: URI는 **동사 대신 명사**를 사용
- ❌ 잘못된 예: `/getUsers`, `/createUser`  
- ✅ 올바른 예: `/users`

### 🔹 규칙 2: 자원명은 **복수형**으로
- ❌ 잘못된 예: `/user`, `/post`  
- ✅ 올바른 예: `/users`, `/posts`

### 🔹 규칙 3: **계층 관계**를 명확히 표현
- 자원 간 관계는 URI 경로로 표현  
  예: `/posts/1/comments`

### 🔹 규칙 4: **하이픈(-)** 으로 가독성 향상
- ❌ 잘못된 예: `/productlist`, `/my-account-profile`  
- ✅ 올바른 예: `/product-list`, `/my-account/profile`

---

## 📘 4. RESTful API 설계 예시

### 🧑 사용자(Users) API

| 작업 | 메서드 | 엔드포인트 |
|------|--------|-------------|
| 모든 사용자 조회 | GET | `/users` |
| 특정 사용자 조회 | GET | `/users/{id}` |
| 사용자 생성 | POST | `/users` |
| 사용자 정보 수정 | PUT | `/users/{id}` |
| 사용자 삭제 | DELETE | `/users/{id}` |

### 📝 게시글(Posts) API

| 작업 | 메서드 | 엔드포인트 |
|------|--------|-------------|
| 모든 게시글 조회 | GET | `/posts` |
| 특정 게시글 조회 | GET | `/posts/{id}` |
| 게시글 생성 | POST | `/posts` |
| 게시글 수정 | PUT | `/posts/{id}` |
| 게시글 삭제 | DELETE | `/posts/{id}` |

### 💬 댓글(Comments) API (게시글 내 댓글)

| 작업 | 메서드 | 엔드포인트 |
|------|--------|-----------------------------|
| 게시글의 모든 댓글 조회 | GET | `/posts/{post_id}/comments` |
| 게시글에 댓글 추가 | POST | `/posts/{post_id}/comments` |

---

## ✅ 결론

RESTful API는 직관적이며, 예측 가능한 방식으로 자원에 접근하고 조작할 수 있는 웹 아키텍처 설계 방식입니다.  
이 원칙과 규칙을 따르면 유지보수성과 확장성이 뛰어난 API를 만들 수 있습니다.
