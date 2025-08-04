RESTful API 개념 및 설계
1. REST(Representational State Transfer)란?
REST는 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일로, HTTP URI를 통해 자원(Resource)을 명시하고, HTTP 메서드(GET, POST, PUT, DELETE 등)를 이용해 해당 자원에 대한 CRUD(Create, Read, Update, Delete) 연산을 적용하는 것을 의미합니다.

즉, 웹 상의 자원을 이름(URI)으로 구분하고, 그 자원의 상태(State)를 주고받는 모든 것을 의미합니다.

2. REST의 핵심 원칙
RESTful API를 설계할 때는 다음과 같은 원칙을 지키는 것이 중요합니다.

자원(Resource): 모든 것을 자원으로 간주합니다. 예를 들어, 사용자, 게시글, 댓글 등이 될 수 있습니다.

URI(Uniform Resource Identifier): 자원을 고유하게 식별하는 데 사용됩니다. URI는 명사를 사용하고, 복수형으로 표현하는 것이 관례입니다.

HTTP 메서드: 자원에 대한 행위(CRUD 연산)를 나타냅니다. GET, POST, PUT, DELETE와 같은 표준 HTTP 메서드를 사용해 자원의 상태를 조작합니다.

표현(Representation): 자원의 상태를 표현하는 방식입니다. 주로 JSON이나 XML 형식을 사용합니다.

3. HTTP 메서드 활용
RESTful API에서 HTTP 메서드는 다음과 같이 사용됩니다.

GET: 자원을 조회할 때 사용합니다. 데이터를 서버로부터 읽을 때 사용합니다. (Read)

POST: 새로운 자원을 생성할 때 사용합니다. 서버에 데이터를 보낼 때 사용합니다. (Create)

PUT: 기존 자원을 갱신하거나 교체할 때 사용합니다. 자원의 전체를 업데이트합니다. (Update)

PATCH: 기존 자원의 일부를 부분적으로 갱신할 때 사용합니다. (Update)

DELETE: 특정 자원을 삭제할 때 사용합니다. (Delete)

4. RESTful 엔드포인트 설계 방법
RESTful API는 엔드포인트를 명확하고 예측 가능하게 설계해야 합니다. 다음은 좋은 엔드포인트 설계의 가이드라인입니다.

규칙 1: URI에 동사 대신 명사를 사용하세요.
URI는 자원을 나타내므로, 행위를 나타내는 동사(get, create, update)는 사용하지 않습니다. 행위는 HTTP 메서드로 표현합니다.

❌ 나쁜 예: /getUsers, /createUser

✅ 좋은 예: /users

규칙 2: URI는 자원명을 복수형으로 표현하세요.
자원 컬렉션(Collection)을 나타낼 때는 복수형 명사를 사용하는 것이 일반적입니다.

❌ 나쁜 예: /user, /post

✅ 좋은 예: /users, /posts

규칙 3: 자원 간의 관계를 표현하세요.
자원 간의 종속 관계가 있다면, URI에 표현하여 계층 구조를 명확히 합니다.

{자원명}/{자원ID}/{하위 자원명} 형식으로 사용합니다.

예시: 특정 게시글에 달린 모든 댓글을 조회할 경우 /posts/1/comments

규칙 4: URI에 하이픈(-)은 가독성을 위해 사용하세요.
단어와 단어를 구분할 때는 하이픈을 사용하여 가독성을 높입니다.

❌ 나쁜 예: /productlist, /my-account-profile

✅ 좋은 예: /product-list, /my-account/profile

설계 예시
사용자(Users) 엔드포인트

모든 사용자 조회: GET /users

특정 사용자 조회: GET /users/{id}

새로운 사용자 생성: POST /users

특정 사용자 정보 수정: PUT /users/{id}

특정 사용자 삭제: DELETE /users/{id}

게시글(Posts) 엔드포인트

모든 게시글 조회: GET /posts

특정 게시글 조회: GET /posts/{id}

새로운 게시글 생성: POST /posts

특정 게시글 내용 수정: PUT /posts/{id}

특정 게시글 삭제: DELETE /posts/{id}

게시글에 속한 댓글(Comments) 엔드포인트

특정 게시글의 모든 댓글 조회: GET /posts/{post_id}/comments

특정 게시글에 새로운 댓글 생성: POST /posts/{post_id}/comments

이러한 규칙들을 따르면, API를 사용하는 개발자가 URI만 보고도 어떤 작업을 수행할지 쉽게 예측할 수 있어 생산성과 유지보수성이 크게 향상됩니다.
