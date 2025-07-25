📌 1. MVC (Model - View - Controller)
🔷 구조
Model: 데이터, 비즈니스 로직 담당

View: 사용자 인터페이스(UI)

Controller: 사용자 입력을 받아 처리하고, Model과 View를 연결

🔷 특징
Controller가 중심 역할: 사용자의 입력을 받아서 Model을 업데이트하고, View를 갱신

View는 직접 Model에 접근할 수 있음

데이터 흐름: View ⇄ Model ← Controller

🔷 장점
구조가 단순하고 구현이 비교적 쉬움

소규모 프로젝트나 초기 설계에 적합

🔷 단점
규모가 커지면 Controller가 복잡해짐 (Fat Controller)

View와 Model 간의 결합도가 높음

📌 2. MVP (Model - View - Presenter)
🔷 구조
Model: 데이터, 비즈니스 로직

View: 사용자 인터페이스, UI 요소 (인터페이스로 추상화)

Presenter: View와 Model을 연결하며 모든 로직을 담당

🔷 특징
View는 Presenter와만 통신하고, 직접 Model을 다루지 않음

Presenter는 View 인터페이스를 통해 UI를 제어함

테스트 용이성↑

🔷 데이터 흐름
View ↔ Presenter ↔ Model

🔷 장점
View와 Model이 완전히 분리됨

Presenter 로직을 쉽게 테스트할 수 있음 (단위 테스트 용이)

🔷 단점
Presenter의 코드량 증가 (Fat Presenter)

UI 이벤트가 많을 경우 처리 복잡도 증가

📌 3. MVVM (Model - View - ViewModel)
🔷 구조
Model: 데이터, 비즈니스 로직

View: 사용자 인터페이스(UI)

ViewModel: View를 위한 데이터와 상태를 보관하며, Model과의 중재 역할

🔷 특징
ViewModel은 View에 데이터 바인딩을 통해 자동 갱신

View는 ViewModel을 구독하고 데이터 바뀜에 따라 자동 업데이트됨

플랫폼의 바인딩 기술 필요 (예: SwiftUI, Android DataBinding, WPF 등)

🔷 데이터 흐름
View ↔ (Binding) ↔ ViewModel ↔ Model

🔷 장점
View와 Model이 완전히 분리됨

양방향 바인딩으로 UI 코드를 줄일 수 있음

테스트 용이성 매우 좋음

🔷 단점
데이터 바인딩 구현 복잡성

과도한 바인딩 사용 시 디버깅 어려움

📊 비교 요약
패턴	  View-Model 연결	  테스트 용이성	  복잡도 	데이터 바인딩
MVC	     직접 접근	            낮음	       낮음	      없음
MVP	  Presenter를 통해   	    높음	       중간	      없음
MVVM	 바인딩으로 연결	      매우 높음	     높음	      있음 (양방향)
