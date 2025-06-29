1️⃣ HTTP의 request/response 구조
HTTP (HyperText Transfer Protocol): 웹에서 **클라이언트(브라우저)**와 서버가 통신하는 약속된 규약.

Request (요청):

클라이언트가 서버에 데이터를 요청할 때 사용.

예) URL, 요청 메서드(GET, POST), 헤더, 요청 바디(POST/PUT).

Response (응답):

서버가 클라이언트에게 요청에 대한 결과를 돌려줌.

상태코드(200, 404, 500), 헤더, 응답 바디(HTML, JSON 등) 포함.

즉, 클라이언트가 Request → 서버가 처리 → Response 반환 흐름으로 작동.

2️⃣ Ajax
Asynchronous JavaScript and XML의 줄임말.

페이지 전체를 새로고침하지 않고 서버와 비동기 통신해 일부 데이터만 갱신 가능.

예) 댓글 입력 후 화면 일부만 갱신, 무한 스크롤.

XMLHttpRequest, fetch, axios 등을 사용.

3️⃣ Forward vs Redirect
✅ Forward (서버 내부 이동)
서버 내부에서 다른 자원(JSP, 서블릿 등)으로 요청을 전달.

URL이 변경되지 않음.

Request, Response 객체가 그대로 전달되어 데이터 공유 가능.

서버 측 이동으로 사용자의 새로운 요청이 발생하지 않음.

예) 로그인 후 내부 JSP로 이동 시 사용.

✅ Redirect (클라이언트 재요청)
서버가 클라이언트에게 다른 URL로 이동하라는 응답을 전달.

클라이언트가 해당 URL로 다시 요청함.

URL이 변경됨.

Request와 Response가 새로 생성됨.

주로 POST-Redirect-GET 패턴 사용 시(새로고침 중복 방지).

📌 요약 비교
구분	Forward	Redirect
동작	서버 내부에서 이동	클라이언트에게 다른 URL 요청 명령
URL	변경되지 않음	변경됨
요청/응답	같은 Request/Response	새로운 Request/Response
사용	내부 데이터 전달	URL 변경, 새 요청 유도

✅ 결론
HTTP는 클라이언트-서버 간의 요청과 응답 구조 기반.

Ajax는 페이지 전체를 새로고침하지 않고 데이터를 갱신해 사용자 경험을 향상.

Forward는 서버 내부 이동, Redirect는 클라이언트에게 다른 URL 요청을 유도하여 처리 흐름을 분기.
