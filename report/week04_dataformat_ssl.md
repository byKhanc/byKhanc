데이터 교환 포맷 및 시리얼라이징 이해
데이터 교환 포맷은 서로 다른 시스템이나 애플리케이션 간에 데이터를 주고받을 때 사용하는 약속된 형식입니다. 시리얼라이징(Serialization)은 이러한 데이터 구조를 직렬화된(sequential) 바이트 스트림이나 문자열 형태로 변환하여 저장하거나 전송할 수 있도록 하는 과정을 의미합니다. 역으로 시리얼라이즈된 데이터를 원래의 데이터 구조로 복원하는 과정을 역직렬화(Deserialization)라고 함.

JSON, XML, YAML 비교
특징

JSON (JavaScript Object Notation)

XML (Extensible Markup Language)

YAML (YAML Ain't Markup Language)

개념

JavaScript 객체 리터럴에서 파생된 경량 데이터 교환 포맷

SGML(Standard Generalized Markup Language)에서 파생된 마크업 언어

사람이 읽기 쉬운 데이터 직렬화 포맷

가독성

매우 좋음 (간결하고 직관적)

보통 (태그가 많아 다소 장황할 수 있음)

매우 좋음 (공백과 들여쓰기로 구조 표현)

구조

키-값 쌍(객체)과 배열 기반의 트리 구조

태그(Tag)와 속성(Attribute) 기반의 트리 구조

들여쓰기(Indentation)와 콜론(:) 기반의 계층 구조

데이터 타입

문자열, 숫자, 불리언, 배열, 객체, null 지원

모든 데이터를 문자열로 취급 (스키마를 통해 타입 정의)

문자열, 숫자, 불리언, null, 날짜, 시간 등 다양한 타입 지원

주요 용도

웹 API, 모바일 앱, 비동기 통신, NoSQL 데이터베이스

웹 서비스(SOAP), 문서 마크업, 데이터 저장 및 교환

설정 파일(Configuration), 데이터 직렬화, 로그 파일

장점

- 가볍고 빠름
- 파싱 용이
- 대부분의 프로그래밍 언어에서 지원

- 강력한 확장성
- 엄격한 유효성 검사(DTD, XML Schema) 가능
- 문서 지향적

- 뛰어난 가독성
- 간결한 문법
- 다양한 데이터 타입 지원

단점

- 주석 지원 미흡
- 복잡한 문서 표현에는 부적합

- 태그 중복으로 인한 파일 크기 증대
- 파싱 복잡성

- 들여쓰기 오류에 민감
- 파싱 속도가 다른 포맷에 비해 느림

예시

json<br>{<br>  "name": "홍길동",<br>  "age": 30,<br>  "isStudent": false,<br>  "courses": ["컴퓨터 과학", "데이터베이스"]<br>}<br>

xml<br><person><br>  <name>홍길동</name><br>  <age>30</age><br>  <isStudent>false</isStudent><br>  <courses><br>    <course>컴퓨터 과학</course><br>    <course>데이터베이스</course><br>  </courses><br></person><br>

yaml<br>name: 홍길동<br>age: 30<br>isStudent: false<br>courses:<br>  - 컴퓨터 과학<br>  - 데이터베이스<br>


Sheets로 내보내기
요약:

JSON: 웹 API에서 가장 널리 사용되는 가볍고 빠른 포맷

XML: 과거 웹 서비스에서 많이 사용되었으며, 문서 지향적인 데이터 표현에 적합

YAML: 설정 파일이나 사람이 읽기 쉬운 데이터 저장에 탁월한 포맷

HTTPS, SSL 인증서 기초
HTTPS (Hypertext Transfer Protocol Secure)

HTTPS는 HTTP에 보안 기능이 추가된 프로토콜입니다. 웹 브라우저와 웹 서버 간의 통신을 암호화하여 데이터의 기밀성, 무결성, 그리고 사용자 인증을 보장

기밀성 (Confidentiality): 전송되는 데이터가 암호화되어 중간에 가로채더라도 내용을 알 수 없음

무결성 (Integrity): 전송되는 데이터가 변조되지 않았음을 보장

인증 (Authentication): 클라이언트가 접속하려는 서버가 진짜 서버임을 보장하여 피싱 공격 등을 방지

HTTPS는 이러한 보안 기능을 SSL/TLS 프로토콜을 통해 구현

SSL (Secure Sockets Layer) / TLS (Transport Layer Security) 인증서

SSL과 TLS는 웹 서버와 웹 브라우저 간의 암호화된 통신을 위한 프로토콜입니다. TLS는 SSL의 후속 버전이며, 현재는 TLS가 주로 사용되지만, "SSL 인증서"라는 용어는 일반적으로 TLS 인증서를 포함하여 사용됨.

SSL/TLS 인증서는 웹 사이트의 신원을 증명하고, 서버와 클라이언트 간의 통신을 암호화하기 위해 사용되는 디지털 파일입니다. 이 인증서는 공신력 있는 기관인 **CA (Certificate Authority, 인증기관)**에 의해 발급

SSL/TLS 인증서의 주요 역할:

서버 신원 확인: 웹 사이트를 방문하는 사용자에게 해당 웹 사이트가 합법적이고 신뢰할 수 있는 곳임을 증명

데이터 암호화: 서버와 클라이언트 간의 모든 통신(사용자 ID, 비밀번호, 결제 정보 등)을 암호화하여 중간에서 데이터가 유출되거나 변조되는 것을 방지

SSL/TLS 인증서의 작동 방식 (간략히):

핸드셰이크 (Handshake): 클라이언트가 HTTPS 웹 사이트에 접속하면, 서버는 자신의 SSL/TLS 인증서를 클라이언트에게 보냄.

인증서 검증: 클라이언트는 받은 인증서가 신뢰할 수 있는 CA에 의해 발급되었는지, 유효 기간은 지나지 않았는지 등을 확인

세션 키 생성: 인증서 검증이 성공하면, 클라이언트와 서버는 서로에게만 알려진 암호화 키(세션 키)를 안전하게 생성하고 교환

데이터 암호화 통신: 이후의 모든 통신은 이 세션 키를 사용하여 암호화되고 복호화 됨.

SSL/TLS 인증서의 중요성:

사용자 신뢰 확보: HTTPS를 사용하는 웹 사이트는 브라우저 주소창에 자물쇠 아이콘과 "보안 연결" 메시지가 표시되어 사용자에게 신뢰를 줌.

데이터 보안 강화: 민감한 정보(개인 정보, 금융 정보 등)를 안전하게 전송

SEO (검색 엔진 최적화) 유리: Google을 비롯한 주요 검색 엔진은 HTTPS를 사용하는 웹 사이트에 더 높은 순위를 부여

HTTP/2 활성화: HTTP/2 프로토콜은 HTTPS 위에서만 동작

결론적으로, HTTPS와 SSL/TLS 인증서는 현대 웹 환경에서 사용자 데이터 보호와 웹 사이트의 신뢰도를 높이는 데 필수적인 요소임을 알 수 있음.
