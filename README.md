# 미션

## 배포링크

- [배포링크](https://react-messenger-19th-tawny.vercel.app/)

## 피그마 링크

- [피그마 링크](https://www.figma.com/file/W7XzAbakNIOQxwiza0wLIo/CEOS-Messenger-Redesign?type=design&node-id=5-3617&mode=design&t=ic7kPkFW1UIT5FiD-11)

![image](https://github.com/CEOS-Developers/react-messenger-19th/assets/126255206/c1bbe729-7ada-4da0-84fb-4aced07614da)

## 디자이너 분께 받은 QA

- 입력창 폼 안에 양옆으로 10px 패딩 추가
- 한줄짜리 채팅 버블 추가
- 챗을 보내면 생성되는 ‘날짜 인디케이터’의 상하너비 수정
- contact-info 페이지에서 이름 축약

## Key Questions

**1. Routing이란?**

Routing이란 경로를 선택하면 웹의 URL을 변경하여 사용자가 선택한 해당 경로로 이동하게 해주며 새로 페이지를 로드하지 않고도 변경 가능합니다. React 자체에는 Routing 기능이 내장되어 있지 않습니다. 따라서 React 애플리케이션에서 Routing을 구현하기 위해 react-router-dom과 같은 외부 라이브러리를 사용합니다. react-router-dom은 React에서 SPA를 구현할 때 널리 사용되는 Routing 라이브러리입니다.

이번 과제를 진행하며 react router에서 제공하는 여러 hook을 사용하였습니다. 가장 기본 경로를 채팅 목록 chats page로 지정하였고 이외에도 다른 페이지들은 각각의 URL에 맞는 컴포넌트를 정의하였습니다. URL 이동을 해야할 때에는 useNavigate을 사용해서 경로 이동을 하였습니다. useParams를 사용해서 url에서 채팅방 ID를 추출하기도 하고 useLocation을 사용하여 이전 페이지로부터 전달받은 userId 정보를 컴포넌트 내에서 사용할 수 있게 하기도 하였습니다.

**2. SPA란?**

SPA는 Single Page Application의 약자로 하나의 페이지로 이루어진 웹 애플리케이션을 말합니다. 새로 페이지를 로드하지 않고 필요한 부분만 수정합니다. SPA는 클라이언트 사이드 렌더링(Client Side Rendering, CSR) 방식을 취하고 있습니다. 이는 빠른 페이지 로딩과 부드러운 페이지 전환, 그리고 사용자 화면에 높은 반응성을 유지할 수 있도록 합니다. 하지만 검색 엔진 최적화에 제한이 있으며 첫 페이지 로딩 속도가 느리다는 단점이 있습니다.

**3. 상태관리란?**

리액트의 가장 큰 특징은 부모 요소에서 자식 요소로 데이터를 전달한다는 것입니다. 컴포넌트 간에 상태를 공유하려면 이처럼 상위 컴포넌트에서 하위 컴포넌트로 porp을 넘겨 전달합니다. 이런 prop 전달 과정이 복잡해지면 계속해서 추적하고 관리하기 어렵기 때문에 전역 상태 관리를 합니다.

전역 상태 관리는 여러 방법이 있는데 그중에서도 Context API, Redux, React Query가 많이 쓰입니다.
제가 이번 과제에서 사용한 redux toolkit에 대해 간단히 설명을 해보면 . . .

리액트는 컴포넌트 자신이 개별적으로 상태관리를 하는데 redux를 쓰면 전용 장소 store에서 상태를 관리하고, 리액트 컴포넌트는 그걸 보여주기만 하는 용도로 쓰입니다. 리액트 컴포넌트가 store에 접근하고 싶으면 action을 발행해야합니다. 여기서 reducer는 이전 상태와 action을 합쳐서 새로운 상태를 state을 만드는 조작을 말합니다. redux 사용시 저장소 구성의 복잡성, 많은 패키지 필요성, 한 작업 시 필요한 수 많은 코드양 등의 문제점을 보완하여 redux toolkit은 redux를 더 사용하기 쉽게 만들었습니다. 여기서 createSlice는 action과 reducer를 전부 가진 함수로 기존에는 액션생성함수와 액션 타입을 선언해 사용했다면 createSlice는 액션을 선언하고 해당 액션이 dispatch되면 바로 해당 액션을 처리합니다.

## 링크 및 참고자료

- [React에서 상태 관리하기](https://mingule.tistory.com/74)
- [React - Router, useLocation 를 통해 상세페이지 구현](https://bmy1320.tistory.com/entry/React-Router-useLocation-%EB%A5%BC-%ED%86%B5%ED%95%B4-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%ED%98%84)
- [SPA란](https://www.elancer.co.kr/blog/view?seq=214)
