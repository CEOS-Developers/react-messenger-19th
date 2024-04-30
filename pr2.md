> # 배포 링크
>
> [배포 링크](https://react-messenger-19th-seungwan-wg21.vercel.app/)

## 📌 구현 기능

1. 피그마에 나타난 화면 UI 구현 => `styled-components`의 `ThemeProvider`를 통해 디자인 시스템 구축
2. 기존의 **json** 파일에 나타난 데이터를 보여주거나 이미 데이터가 존재한다면 이를 보여주기
3. 사용자가 채팅을 입력하고, 기존의 데이터에 뒤이어 UI로 구현 => 채팅 입력 시, 채팅창의 최하단으로 포커스 이동
4. 사용자가 이미 보낸 상대방의 메시지를 더블 클릭하면 하트 UI가 생성되고, 다시 더블 클릭하면 사라짐
5. 채팅방 상단의 프로필을 클릭하면 상대방으로 사용자가 바뀜
6. 나머지 피그마 디자인 페이지 구현

## 🧠 느낀 점 및 시간 투자 부분

### 시간 투자 💪🏼

url 라우팅을 진행하는 데에 시간을 꽤 투자했던 것 같습니다. 3주차의 과제가 react로 채팅방까지를 구현하는 것이라, 이를 루트(/) 디렉터리로 설정했습니다.<br>
이번 과제는 친구 목록, 채팅 목록, 채팅방 입장, 개인 프로필 페이지를 모두 구현해야 함과 동시에 기존의 채팅방을 녹여내는 것까지라 프로젝트 url 설계를 먼저 진행했습니다.
공통적으로 많이 사용되는 header와 tabBar 같은 경우에는 `CommonLayout` 컴포넌트에 넣어주고, 주소에 따라서 바뀌는 부분을 `Outlet` 컴포넌트를 통해 유동적으로 바꿔주었습니다.<br>
또한 사용자가 입장한 채팅방에서 채팅을 입력한 후, 새로 고침을 하거나 퇴장한 후 다시 입장해도 기존의 메시지 데이터가 남아있어야 하기에 이를 `localStorage`에 넣어주는 방식을 이용했습니다.

### 느낀 점 ❗️

- 웹 애플리케이션의 전체적인 페이지 구조가 나와야 공통 레이아웃, 변화하는 Outlet 등을 적용하기 용이한 것 같습니다. 그 과정에서 기획자나 디자이너가 다른 페이지를 추가적으로 요구할 시를 위해 확장성 있는 설계가 필요할 것 같습니다.
- 현재 구현한 웹 애플리케이션은 사용자들의 이름이 서로 다름을 가정하고 있습니다. 하지만 실제 서비스에서는 동명이인이 존재할 가능성이 충분합니다. 이에 `localStorage`에 key 값으로 사용자명을 썼는데, 어떻게 하면 primary한 데이터로 바꿀 수 있을지 더 고민해보면 좋을 것 같습니다.
- 너무 세세한 상태까지 모두 `recoil`이나 `redux` 전역 상태 관리 라이브러리로 관리할 필요는 없을 것 같습니다. 사용자의 인터렉션에 따라 상태가 변화하고 관련 UI가 구현되는 정도라면 해당 상태는 컴포넌트에서 `useState()` 훅을 이용하는 것이 단일 책임의 원칙에도 더 맞을 것 같습니다.

## ❓ Key Questions

- Routing 이란? <br><br>
  라우팅이란, 프론트엔드에서 웹 애플리케이션 내의 다양한 페이지를 탐색할 수 있도록 도와주는 기술이다. 네이버, 다음, 쿠팡, 배달의 민족과 같이 우리가 자주 사용하는 웹 사이트는 랜딩 페이지 이외에도 여러 세부 페이지로 나뉘어져 있다. <br>
  기존의 html, css, vanilla Javascript 만을 이용하는 방식에서는 `a` 태그를 통해 특정 페이지로의 전환을 하고 해당 페이지에 알맞은 html 파일을 통해 사용자에게 적절한 UI를 렌더링한다.<br>
  요즘 많이 사용되는 AngularJS(인기가 좀 죽긴 했다), vueJS, reactJS에는 **Angular-router**, **vue-router**, **react-router** 등의 방식으로 라우팅을 지원하는데, 이를 사용하지 않았을 때와 비교해서 살펴보면 좋다.

```
import "./styles.css";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import NotFound from "./Not-found";

export default function App() {
  const [comp, setComp] = useState(Home);

  return (
    <header>
      <button onClick={() => setComp(Home)}>Home</button>
      <button onClick={() => setComp(About)}>About</button>
      <button onClick={() => setComp(NotFound)}>Not Found</button>
    </header>
    <main children={comp}/></main>
  );
}
```

위와 같은 방식은 react 코드 단에서 react-router-dom의 도움 없이 상태(state)만으로 라우팅을 진행하고 있다. 버튼을 누르면 상태가 변경되어 `main` 태그 내에서 렌더링되는 children 속성 컴포넌트가 바뀔 수 있게 한다. 하지만 이와 같은 로직은 페이지가 추가될 때마다 관련 핸들러 함수를 만드는 등 복잡도가 증가할 수 있다. 이를 위해 react는 `react-router-dom` 모듈의 Router 개념을 통해 해결한다
<br><br>

```
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<CommonLayout />}>
              <Route index={true} element={<Friends />}></Route>
              <Route path="messages" element={<Messages />}></Route>
              <Route path="profile" element={<Profile />}></Route>
            </Route>
            <Route path="/chat" index element={<ChatMain />}></Route>
            <Route path="/chat" element={<CommonLayout />}>
              <Route path=":username" element={<EmptyChat />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}
```

위의 코드는 react-router-dom 모듈의 `BrowserRouter`, `Routes`, `Route` 컴포넌트 들을 이용해 app.tsx 파일 내에서 라우팅을 진행해준 것이다(ThemeProvider와 RecoilRoot 컴포넌트는 각각 디자인 시스템, 전역 상태 관리를 위해 존재하는 wrapper 컴포넌트이니 신경 쓰지 않아도 된다).<br>
이와 같은 구조를 이용하면 웹 사이트의 도메인 주소의 특정 `url path`로 사용자가 접근하면 Route 컴포넌트의 element 속성으로 바인딩 된 컴포넌트가 렌더링 되는 구조인 것이다.<br>
하지만 이와 같은 라우팅 방식은 ReactJS 같은 CSR(클라이언트 사이드 렌더링) 방식의 웹 페이지에서 보이는 특성이고, nextJS나 Remix 같은 SSR(서버 사이드 렌더링), SSG(Static Site Generation)을 지원하는 풀스택 프레임워크에서는 주로 src 디렉터리 내부의 폴더 구조를 통해 라우팅을 진행한다. 즉, 디렉터리가 하나의 url path에 대응하는 것이다.

- SPA 란?<br><br>
  SPA는 **Single Page Application**의 약자로, 특정 웹 애플리케이션이 구동될 떄 하나의 html 파일만을 기반으로 하여 작동한다는 것이다. reactJS를 이용하여 프로젝트를 진행할 때, CRA이면 public 디렉터리 내에 index.html이, vite를 이용하면 루트 디렉터리에 index.html 파일 하나만이 존재하는 것을 볼 수 있다. 해당 파일을 들여다보면 `body` 컴포넌트 내에 **id가 root인 div 태그** 하나 만이 외롭게 있는 것일 알 수 있다. <br>
  이는 위에서 말한 react의 라우팅 방식에 의해 매 페이지에 해당하는 컨텐츠들이 id 가 root인 태그 내에 채워지며 상황마다 바뀌기 때문이다. [뉴진스의 홈페이지](https://newjeans.kr/)에서 [페이지 소스를 살펴보면](view-source:https://newjeans.kr/) 클라이언트(브라우저)에 전달된 리소스는 텅 빈 html 파일만이 전달된 것을 알 수 있다.<br>
  SPA는 세부 페이지마다 바뀌는 내용을 AJAX(Asnycronous Javascript and Xml)라는 기술을 통해 필요한 부분의 데이터에 대한 요청을 실행하여 렌더링하기 때문에 html 문서 자체가 바뀌면서 생기는 full page refresh와 같은 현상을 막을 수 있다. 이는 페이지 간의 부드러운 전환으로 사용자에게 더 나은 UX를 선사할 수 있다. 하지만 위에서 언급한 바와 같이 처음 클라이언트에게 전달되는 html 문서에는 아무런 컨텐츠가 존재하지 않기 때문에 검색 엔진 최적화(SEO)의 측면에서는 다소 불리하다고 할 수 있다. <br>
  react 같은 SPA 기술이 등장 이전에는 Java의 서블릿과 같은 개념, 여러 템플릿 엔진을 통해 사용자의 동적 요청에 따른 웹 페이지 반환 **SSR(Server Side Rendering)** 와 미리 만들어둔 컨텐츠가 자주 변하지 않는 정적 컨텐츠를 생성하는 **SSG(Static Site Generation)** 개념이 주를 이루었다. 이는 복수의 html 파일을 사용자에게 전달할 수 있다는 점에서 MPA(Multi Page Application)이라고 하며, 미리 컨텐츠가 채워져 있어 검색 엔진 최적화를 할 수 있지만 페이지 전환 시 뚝뚝 끊기는 현상이 발생한다는 단점이 있다. <br>

  위의 두 방식의 단점을 보완하고 장점을 챙기는 방식으로 나온 것들이 바로 nextJS와 nuxtJS 같은 풀스택 프레임워크 개념이다. 이들은 페이지, 컴포넌트 기반의 SSG, SSR 방식의 구현을 지원함과 동시에 웹 페이지의 변경되는 부분에 대한 추가적인 네트워크 데이터 요청으로 부드러운 페이지 전환 효과를 기대할 수 있다.

- 상태 관리란?<br><br>
  별도의 상태 관리 라이브러리를 사용하지 않아도 react 프로젝트를 진행할 수 있다. 이 경우에는 상태가 필요한 컴포넌트에서 `useState()` 훅을 통해 상태를 선언하여 UI를 렌더링 하면 된다. 하지만 복수의 컴포넌트에서 하나의 상태를 통해 렌더링 해야하는 로직이 존재한다면 상태 끌어올리기(state lifting)이 필요하다. 이는 해당 컴포넌트들이 공통적으로 가지는 부모 컴포넌트, 혹은 그 상위의 컴포넌트로 상태의 선언을 끌어올린 후,상태를 prop으로 계속해서 전달하여 사용하는 것이다. 단순한 프로젝트에서는 큰 상관이 없겠지만 이는 여러 문제점을 내포하고 있다.<br>

  1. 계속되는 **prop drilling**으로 프로그래머가 일일히 적어줘야 하고, 오타와 같은 human error가 발생할 수 있다.
  2. 상태가 변화할 때, 여러 컴포넌트를 통해 상태가 전달된다면, 그 중간에 있는 관련 없는 컴포넌트까지 리렌더링 되는 성능 비효율이 발생한다.
  3. 추후에 상태 관련 코드를 변경할 일이 생겼을 때, 하나의 상태에 여러 컴포넌트가 묶여있는 coupling 현상은 유지 보수를 어렵게 만든다 -> 단일 책임 원칙(SRP : Single Responsibility Principle)의 위반
     <br>

  이를 위해 contextAPI 같은 reactJS 자체의 방식, flux 패턴을 적용한 redux 라이브러리, atomic 패턴의 recoilJS와 그 이외의 mobx, zustand, jotai 등을 활용하면 보다 더 편리하게 상태 관리를 진행할 수 있다.
