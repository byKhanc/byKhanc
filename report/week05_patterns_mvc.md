프로그래밍 아키텍처 패턴은 소프트웨어 시스템의 구조와 구성 요소를 정의하고, 이들이 어떻게 상호작용하는지에 대한 청사진을 제공합니다. 이는 코드의 가독성, 유지보수성, 확장성, 테스트 용이성을 높이는 데 기여합니다.

대표적인 UI 아키텍처 패턴인 MVC, MVP, MVVM에 대해 비교해보겠습니다.

1. MVC (Model-View-Controller) 패턴
구조:

Model (모델):

애플리케이션이 사용하는 데이터와 해당 데이터를 처리하는 비즈니스 로직을 담당합니다.

데이터의 저장, 검색, 수정 등을 처리하며, View나 Controller에 대한 정보를 직접적으로 알지 못합니다.

데이터 변경 시 View에 알립니다.

View (뷰):

사용자에게 보여지는 UI를 담당합니다.

Model로부터 데이터를 전달받아 화면에 표시하며, 사용자의 입력을 감지하여 Controller에 전달합니다.

데이터 표시에만 집중하며, 비즈니스 로직은 포함하지 않습니다.

Controller (컨트롤러):

사용자의 입력을 받고 처리하는 부분입니다.

사용자의 요청을 해석하고, 적절한 Model 함수를 호출하여 데이터를 처리한 후 결과를 View에 전달합니다.

Model과 View 사이의 중개자 역할을 합니다.

특징:

가장 널리 사용되고 보편적인 디자인 패턴입니다.

로직과 UI가 명확하게 분리되어 구조화된 코드를 제공합니다.

각 구성 요소가 독립적으로 개발, 테스트될 수 있어 유지보수성이 좋습니다.

단일 진입점(예: 서블릿)에서 모든 웹 브라우저 요청을 처리하는 MVC2 패턴이 흔히 사용됩니다.

장점:

코드의 구조화와 유지보수성이 좋습니다.

각 부분의 책임이 명확하여 재사용성을 높일 수 있습니다.

개발자가 코드를 쉽게 예측하고 이해할 수 있습니다.

단점:

View와 Model 사이의 의존성이 높을 수 있습니다. 애플리케이션 규모가 커질수록 복잡해지고 유지보수가 어려워질 수 있습니다.

Controller의 역할이 비대해질 수 있습니다 (Fat Controller 문제).

View와 Model의 직접적인 상호작용으로 인해 테스트가 어려울 수 있습니다.

2. MVP (Model-View-Presenter) 패턴
구조:

Model (모델):

MVC의 Model과 동일하게 데이터와 비즈니스 로직을 담당합니다.

다른 어떤 요소에도 의존적이지 않은 독립적인 영역입니다.

View (뷰):

UI를 담당하며, Presenter를 통해 Model에서 처리된 데이터를 전달받아 사용자에게 보여줍니다.

사용자의 행동(Action) 및 생명 주기 상태 변경을 주시하며 Presenter에 전달하는 역할을 합니다.

Presenter에 매우 의존적이며, 수동적인 역할(Passive View)을 합니다.

Presenter (프레젠터):

Model과 View 사이의 매개체 역할을 합니다.

View에서 요청한 데이터로 Model을 가공하여 View에 전달합니다.

View의 이벤트를 처리하고, Model을 조작하여 View를 업데이트합니다.

View와 직접 연결되는 대신 인터페이스를 통해 상호작용하여 테스트 용이성과 모듈화/유연성을 높입니다.

특징:

MVC의 단점인 View와 Model 간의 의존성을 해결하기 위해 Presenter를 도입했습니다.

View는 Presenter의 지시에 따라 UI를 업데이트하므로, View는 비즈니스 로직으로부터 분리되어 단순해집니다.

테스트 용이성이 좋습니다 (특히 Presenter 로직에 대한 단위 테스트).

장점:

View와 Model 간의 의존성이 없습니다.

각 요소의 책임이 명확하게 분리되어 코드의 가독성과 유지보수성이 향상됩니다.

인터페이스를 활용하여 단위 테스트가 용이합니다.

단점:

View와 Presenter가 1:1 관계를 가지는 경우가 많아, View가 늘어날 때마다 Presenter도 같이 늘어나 클래스가 많아지고 비대해질 수 있습니다.

Presenter가 모든 로직을 담당하게 되어 Presenter가 비대해질 수 있습니다.

애플리케이션이 복잡해질수록 View와 Presenter 사이의 의존성이 강해질 수 있습니다.

3. MVVM (Model-View-ViewModel) 패턴
구조:

Model (모델):

MVC의 Model과 동일하게 애플리케이션의 데이터와 비즈니스 로직을 담당합니다.

데이터 변경 시 "이벤트"를 발생시켜 ViewModel에 알립니다.

View (뷰):

사용자 인터페이스를 담당합니다.

데이터 바인딩(Data Binding)을 통해 ViewModel의 데이터가 변경되면 자동으로 화면에 반영됩니다.

사용자의 입력을 ViewModel에 전달합니다. UI 변경과 관련된 일부 로직은 포함될 수 있습니다.

ViewModel (뷰모델):

View와 Model 사이의 매개체 역할을 합니다.

View를 표현하기 위해 만든 View를 위한 Model입니다.

View와 관련된 비즈니스 로직을 포함하고, Model에서 데이터를 가져와 View에서 뿌리기 쉬운 형태로 가공합니다.

데이터 바인딩을 통해 View와 상호작용하며, Command 패턴을 사용하여 View의 동작을 처리합니다.

View와 ViewModel은 1:n 관계를 가질 수 있습니다 (여러 개의 View가 하나의 ViewModel을 공유).

특징:

데이터 바인딩과 Command 패턴을 사용하여 View와 ViewModel 사이의 의존성을 제거했습니다.

View와 ViewModel 간의 의존성이 낮아 유닛 테스트 작성이 매우 용이합니다.

디자이너와 개발자가 독립적으로 작업할 수 있는 환경을 제공합니다.

WPF, Angular, React 등 데이터 바인딩을 강력하게 지원하는 프레임워크에서 특히 유용합니다.

장점:

View와 Model 간의 의존성이 없습니다.

데이터 바인딩을 통해 View와 ViewModel 간의 의존성도 낮습니다.

각 부분이 독립적이므로 모듈화하여 개발할 수 있고, 코드 재사용성이 높습니다.

테스트 용이성이 매우 뛰어납니다.

UI 코드와 비즈니스 로직이 명확하게 분리되어 유지보수가 용이합니다.

단점:

초기 학습 곡선이 높을 수 있으며, 복잡한 데이터 바인딩 설정을 필요로 할 수 있습니다.

간단한 애플리케이션에서는 오버헤드가 발생할 수 있습니다.

ViewModel의 설계가 복잡해질 수 있습니다.

요약 비교:

특징

MVC

MVP

MVVM

구성 요소

Model, View, Controller

Model, View, Presenter

Model, View, ViewModel

View 역할

Controller와 Model의 정보를 표시하고 사용자 입력 감지

Presenter의 지시에 따라 화면 업데이트 (수동적 View)

ViewModel과 데이터 바인딩 (수동적에 가까움)

중개자

Controller

Presenter

ViewModel

View-Model 관계

Controller를 통해 간접적 상호작용 (의존성 존재)

Presenter를 통해 간접적 상호작용 (의존성 없음)

데이터 바인딩을 통해 간접적 상호작용 (의존성 없음)

테스트 용이성

View와 Model 결합으로 인해 어려울 수 있음

Presenter 단위 테스트 용이

ViewModel 단위 테스트 매우 용이

주요 특징

가장 보편적, 단순한 구조

View와 Model의 의존성 해결, 테스트 용이성

데이터 바인딩, Command 패턴, 높은 재사용성

단점

View-Model 의존성, Fat Controller

Presenter-View 1:1 관계, Fat Presenter

학습 곡선, 초기 설정 복잡, ViewModel 복잡도


Sheets로 내보내기
각 패턴은 장단점을 가지고 있으며, 프로젝트의 특성, 규모, 사용되는 기술 스택에 따라 적절한 패턴을 선택하는 것이 중요합니다.
