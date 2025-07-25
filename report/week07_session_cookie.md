✅ 세션(Session) vs 쿠키(Cookie) 기반 인증 흐름 비교
구분	            세션 기반 인증	                         쿠키 기반 인증 (토큰 기반 인증)
상태 관리	        서버가 사용자 상태를 기억함 (상태ful)	     서버는 사용자 상태를 기억하지 않음 (무상태)
데이터 저장 위치	    서버 (세션 저장소: 메모리, DB 등)	         클라이언트 (쿠키에 토큰 저장)
사용자 식별	        세션 ID (예: session_id)	                 JWT 등 토큰 자체가 사용자 정보 포함
확장성	            낮음 (세션 저장소 필요)	                 높음 (서버 상태 필요 없음)
보안성	            서버에 정보 있음 → 비교적 안전	         클라이언트에 정보 있음 → 탈취 시 위험
대표 사용 방식	    전통적인 웹 로그인	                     SPA, 모바일 API, OAuth 등

📌 세션(Session) 기반 인증 흐름
로그인 요청

사용자가 아이디/비밀번호를 서버로 전송

서버 인증 및 세션 생성

서버는 사용자 인증 성공 시 세션 ID를 생성하고 서버 메모리나 DB에 저장

클라이언트에는 Set-Cookie 헤더로 session_id 쿠키를 내려줌

요청 시 세션 ID 자동 포함

이후 요청마다 브라우저는 session_id 쿠키를 자동으로 전송

서버는 세션 저장소에서 해당 세션을 조회하여 사용자 인증 상태 유지

로그아웃 시 세션 삭제

🔐 장점: 서버가 세션을 직접 관리하므로 보안 우수
⚠ 단점: 확장성이 떨어짐 (서버가 세션 상태를 기억해야 함)

📌 쿠키 기반 토큰 인증 (JWT) 흐름
로그인 요청

사용자 ID/비밀번호를 서버에 전송

서버 인증 및 JWT 생성

서버는 인증 성공 시 사용자 정보를 담은 **JWT(Json Web Token)**를 생성

JWT는 암호화 or 서명되어 위조 방지됨

서버는 Set-Cookie 헤더 또는 JS에서 localStorage에 JWT 저장

요청 시 JWT 포함

클라이언트는 JWT를 Authorization: Bearer 헤더 또는 쿠키에 실어 전송

서버는 JWT를 복호화 및 검증하여 사용자 확인

로그아웃 시 토큰 삭제 (클라이언트 측에서)

🔐 장점: 서버 상태 불필요 → 스케일링 용이, API 서버에 적합
⚠ 단점: 토큰 탈취 시 위험, 토큰 만료 또는 갱신 정책 필수

🧪 로그인 구조 적용 예시 (Node.js + Express 기준)

🔸 세션 기반 예시
js
복사
편집
app.post('/login', (req, res) => {
  const { id, pw } = req.body;
  if (auth(id, pw)) {
    req.session.user = { id }; // 세션 저장
    res.send('Login success');
  } else {
    res.status(401).send('Unauthorized');
  }
});

🔸 JWT 기반 예시
js
복사
편집
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
  const { id, pw } = req.body;
  if (auth(id, pw)) {
    const token = jwt.sign({ id }, 'secretKey', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.send('Login success');
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/protected', (req, res) => {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, 'secretKey');
    res.send(`Hello ${user.id}`);
  } catch (e) {
    res.status(401).send('Invalid token');
  }
});

✅ 어떤 걸 써야 할까?
상황	                         추천 방식
전통적인 웹 사이트	             세션 기반 인증
SPA, 모바일 앱, REST API     	 JWT 기반 인증
분산 서버, 마이크로서비스	         JWT 기반 인증
보안이 최우선 (내부망 등)	         세션 + HTTPS

