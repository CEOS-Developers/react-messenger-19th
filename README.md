# 배포링크

# 후기 및 구현기능

# Key Questions

## Routing이란?

라우팅이란 하나의 `URL`에 하나의 페이지를 맵핑해주는 것을 말한다. 네트워크에서도 라우팅이라는 단어가 있는데 이는 다른 개념이다. 네트워킹에서는 출발지에서 목적지까지 라우터간 이동의 최적경로를 찾는 방법을 라우팅이라 하고, 리액트에서 라우팅은 `URL`에 따른 데이터를 받아와 화면에 렌더링 해주는 것이다.

라우팅을 사용하면 페이지가 새로고침되지 않고 흐름을 유지하면서 필요한 부분이 렌더링되어 화면이 전환된다.

### 흐름 유지

흐름을 유지한다는 것은 상태가 유지된다는 것이다. 기존 js에서 사용하는 <a>를 사용하면 화면은 새로고침된다. 그러면 이전 페이지에서 가지고 있던 상태를 잊어버려 초기화된다.

### UX 향상

새로운 페이지를 여는게 아니고 필요한 UI만 업데이트 하기 때문에 더 나은 UX를 제공한다.

리액트에서는 `react-router-dom`을 사용해 라우팅을 구현한다.

기본적으로 다음 구조를 사용해 라우팅을 구현한다.

```js
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/link1" element={<Component1 />} />
        <Route path="/link2" element={<Component2 />} />
        ...
      </Routes>
    </BrowserRouter>
  );
};
```

하지만 `React Router v6.4`에서는 `RouterProvider`와 `CreateBrowerRouter`를 사용하여 다른 방식으로도 라우팅이 가능하다.

```js
//routes.js
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'path1',
        element: <Component1 />,
      },
    ],
  },
  ...
]);

//App.js
import { RouterProvider } from 'react-router-dom';
import { router } from '@util/routes';

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
```
페이지가 많아지면 이 방법이 가독성이 좋아보여 이 방법을 사용해서 개발했다.

### Link

라우터 내에서 페이지 간 이동을 위해 <a>대신 사용된다.

```js
<Link to="/"> ... </Link>
```

### useNavigate

태그를 감싸는 용도로 사용되는 `Link`와 달리 특정상황에 호출해 사용할 수 있다.

```js
const navigate = useNavigate();

const onClick = () => {
  navigate('/');
};
```

### 중첩라우팅

다음과 같이 `outlet`을 활용해 사용할 수 있다.

```ts
//App.js
<Route path="/first" element={<First />}>
  <Route path="second" element={<Second />}></Route>
</Route>;

//Second.js
function About() {
  return (
    <div>
      ...
      <Outlet />
    </div>
  );
}
```

중첩된 라우팅의 `path`에는 `/`를 사용하지 않는다. `/first`에서 `/first/second`페이로 이동하면 <Second /> 컴포넌트가 <Outlet />자리에 렌더링 될 것이다. 하지만 나는 비슷한 상황에서 중첩라우팅을 사용하지 않고 분기처리를 사용해 `display:none`을 부여하거나 부여하지 않는 방식으로 해결했었다. 그래서 중첩라우팅을 어떻게 활용할 수 있을까 찾아보았다.

페이지는 동일한데 사용자가 고객인지 관리자인지에 따라 다른 사이드바를 표기해야 할 수 있다. 사이드바를 열기 위해 새로운 변수를 선언할 수도 있지만 대신 중첩라우팅을 활요해 고객이면 고객맞춤 사이드바가, 관리자라면 관리자맞춤 사이드바가 나오게 할 수 있다. 두 방법 다 가능하기 때문에 개발하면서 상황에 맞춰 활용할 수 있을 것 같다.

### 파라미터

- url 파라미터
  주소경로 내부에 특정한 매개변수를 집어넣어 사용한다. `useParams()`를 사용해 값을 파라미터를 꺼내온다.
- 쿼리스트링(쿼리파라미터)
  URL 뒤에 물음표와 함께 붙는 `Key`-`Value` 쌍. `useLocation()`이나 `useSearchParams()`를 사용해 값을 꺼내온다.

아이디나 이름처럼 특정데이터만을 필요로한다면 url 파라미터를, 여러 개의 변수가 필요하다면 쿼리스트링을 사용하면 되겠다.

## SPA란?

Single Page Application의 약자로 직역하면 한 페이지에서 수행되는 어플리케이션이다.

전통적인 웹페이지는 다른 페이지로 넘어갈 때마다 새로운 html을 받아오는데, 리액트같은 라이브러리를 사용하여 뷰 렌더링은 브라우저에게 맡기고 주소변경이 이루어지면 필요한 부분을 자바스크립트를 사용하여 업데이트 해주는 것이다. 모든 작업이 한 페이지에서 이루어지기 때문에 `URL`(주소)를 통해 다른 페이지로 넘어가는 것은 사실 같은페이지에서 컴포넌트가 리렌더링 되는 것이다. 리액트 라우터는 SPA를 수행하기 위한 툴이다.

공부를 하다보니 궁금한 점이 생겼다. SPA를 사용하면 모든 파일들이 번들러를 통해 번들링 되어 하나의 파일로 만들어지고, 하나의 HTML에서 JS를 사용해 DOM을 수정하여 리렌더링 하는 방식으로 작동한다고 이해했다. 그렇게 되면 합쳐진 파일을 `URL`에 따라 관리하는 건 브라우저에서 할 일이고, 이게 CSR이다. 그렇다면 Next.js는 어떻게 SPA에서 SSR를 구현한거지? SPA는 CSR인거고, MPA가 SSR인거 아닌가?

CSR과 SSR는 렌더링 방식이고, SPA와 MPA는 웹페이지의 구성방식일 뿐 정확히 일치한다고 할수는 없다.

Next.js는 SSR과 `hydration`을 사용한다.

SSR방식을 사용하면 `pre-rendering`이 된다. `pre-rendering`이란 서버사이드에서 DOM 요소들을 `build`하여 HTML 문서를 렌더링하는 것이다. 이렇게 `pre-rendering`된 HTML이 먼저 뷰에 보이기 때문에 빈화면이 보이지 않고 HTML문서들을 볼 수 있다. 이후 `hydration`과정을 통해 미리 렌더링된 HTML에 JS가 결합된다.

SSR 방식은 크게 SSR방식과 SSG방식으로 구분된다. 상황에 따라 필요한 아키텍처를 사용한다.

- Server Side Rendering 방식
  사용자가 페이지를 요청할 때마다 새로운 HTML문서가 생성된다. 즉 클라이언트의 요청에 따라 `pre-rendering`이 진행된다.
- Static Site Generation 방식
  빌드 시 HTML이 생성되고 매 요청마다 HTML을 재사용한다. `pre-rendering`이 `build`될때 진행되고 이후 계속 재활용된다. 데이터가 변경되면 다시빌드해야되기 때문에 ISR을 사용해 일정시간마다 특정페이지만 다시 빌드해 페이지를 업데이트 할 수 있다.

Next.js는 자체 웹서버를 가지고 있기 때문에 서버에서 수행되는 로직들은 여기서(자체 웹서버에서) 수행되어 값이 다시 컴포넌트로 반환된다. 이렇게 하여 Next.js는 SPA에서 SSR방식을 수행한다.

## 상태관리란?

컴포넌트에는 현재 상태가 있고, `useState`을 통해 상태가 생성되고 관리된다. 하지만 `useState`를 사용한 상태관리는 본인 컴포넌트만 관리하여 다른 컴포넌트에서 무슨일이 일어나는지 알지 못한다. 여러 컴포넌트에서 동일한 상태를 공유할 때 이 상태들을 어떻게 해야할 지 관리해야한다.

가장 일반적인 방식으로 `props drilling`을 사용할 수 있다. 상태를 `props`로 전달해 다른 컴포넌트에서도 사용할 수 있게 한다. 하지만 `drilling`이 깊어 질수록 로직이 복잡해지고, 어디서부터 온 데이터인지 알 수 없기 때문에 전역상태관리를 사용한다.

전역상태관리는 말 그대로 상태를 모든 컴포넌트에서 접근 가능하게 만들어준다. 리액트는 기본적으로 `context API`를 제공한다.

### Context API

`createContext()`로 초기값을 선언하고 `context.provider`로 컴포넌트를 감싼다. `useContext()`를 통해 구독한 컴포넌트에서는 특정 값을 꺼내와 사용할 수 있다.

다만 값이 변경되면 무슨 값이든 구독중인 모든 컴포넌트가 리렌더링이 발생 불필요한 리렌더링이 발생한다. 이를 보안하기 위해 여러가지 대체 전역상태관리 라이브러리가 존재한다. 대표적으로 `redux`, `zustand`, `recoil`, `jotai`가 있다. 이들은 모두 구독중인 값이 바뀔때에만 변경되고, 구독중이지 않은 값이 변경될 때는 변경되지 않아 불필요한 리렌더링이 발생하지 않는다.

### redux

대중화된 라이브러리이다. FLUX패턴을 사용한다. FLUX패턴은 ACTION -> DISPATCHER -> MODEL(store) -> VIEW -> ACTION -> DISPATCHER -> MODEL(store) -> VIEW ... 방식으로 단방향 순환구조를 보여줘서 MODEL과 VIEW간 단방향 통신이 가능하게 도와준다. `redux`는 하나의 `store`공간을 사용하고 안에 상태(상태라는 것은 읽기 전용)와 리듀서를 정의한다. `ACTION`이 발생하면 `dispatcher`가 실행되어 액션과 이전 상태를 참조해 상태를 갱신한다.

`redux`는 많은 보일러플레이트를 사용하고, 비동기처리를 하기 쉽지 않다. 이를 위해 `redux toolkit`이 존재하고 미들웨어가 존재하지만 러닝커브가 있고 여전히 복잡하다.

### zuztand

redux의 복잡한 패턴을 해결하기 위해 만들어진 라이브러리 이다. 똑같이 FLUX패턴을 사용하는데 보일러플레이트가 없고 필요하다면 비동기 처리가 가능하다.

### recoil

각각의 상태를 쪼개어 `atom`이란 단위로 저장한다. 이후 `useState`처럼 `useRecoilState`를 사용해 `atom`을 사용할 수 있다. `selector`를 사용해 비동기처리를 할 수도 있다.

### jotai

recoil과 유사하게 `atom`단위를 사용한다. 이후 `useAtom`을 통해 `atom`을 사용할 수 있다.

`recoil`과의 차이점은 `key`값 없이도 그 자체만으로 구분이 된다는 것과 `selector()`를 사용하지 않고도 다른 `atom`을 만들 수 있다는 것, 즉 `jotai`가 더 미니멀리즘하게 구현할 수 있다는 것이다. 하지만 `recoil`은 SSR과 코드스플리팅을 내장지원하고, `jotai`에 비해 큰 지원과 커뮤니티를 가지고 있다.

### React Query

`React Query`는 서버와의 통신간 데이터 관리를 도와주는 상태관리 라이브러리이다. 소개했던 상태관리 라이브러리들에서도 비동기처리를 할 수 있지만, 캐싱, 동기화등은 직접 구현해줘야 한다. `React Query`는 데이터 fetching, 캐싱, 동기화, 서버쪽 데이터 업데이트 등을 쉽게 만들어 준다.

비동기처리를 할 때 다른 라이브러리에 비해 보일러플레이트가 적고, 빌트인 함수가 많아서 현재 로딩상태, 에러가 났는지 여부등을 쉽게 확인할 수 있다. 또한 캐시처리 기능도 지원해 주기적으로 최신데이터로 갱신해준다.
