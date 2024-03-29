# 미션

## 배포링크

[배포링크]!(https://react-messenger-19th-tawny.vercel.app/)

## Key Questions

1. JavaScript를 사용할때에 비해 TypeScript를 사용할 때의 장점은 무엇인가요?
   타입스크립트는 개발자가 변수, 함수 매개변수, 반환 값 등에 대해 명시적으로 타입을 선언할 수 있어 코드의 의도를 명확하게 전달할 수 있습니다. 타입스크립트를 처음 써봐서 아직 미숙한 부분이 많았는데 익숙해지면 자바스크립트보다 개발의 효율성과 유지 보수 측면에서 더 나을 것 같습니다. 특히 타입스크립트는 다른 파일에서 작업할 때 자동 완성 기능을 통해 props 종류를 보여줘서 해당 props의 이름과 타입을 확인할 수 있습니다. 또한 타입이 맞지 않는 경우에 오류로 확인할 수 있어 문제를 해결하는 데 편리하다고 느껴졌습니다.

2. 디자이너로부터 전달받은 피그마 링크 혹은, 피그마 캡처본
   [피그마 링크]!(https://www.figma.com/file/W7XzAbakNIOQxwiza0wLIo/CEOS-Messenger-Redesign?type=design&node-id=5-3617&mode=design&t=ic7kPkFW1UIT5FiD-11)

[피그마 이미지]!(image-1.png)

3. 컴포넌트를 분리한 기준은 무엇인가요?
   src 폴더 안에 크게 assets, components, features, pages, style로 나눠 assets 폴더 안에는 data와 img 폴더로 data 폴더 안에는 userData.json과 chatData.json을 포함시켰습니다. img 폴더 안에는 svg 이미지들을 저장했습니다. 4주차 과제 때 채팅방 이외에 추가로 구현할 것을 염두에 두고 components 폴더 안에 Chat 폴더를 생성해 작업했습니다. features 폴더 안에 Redux Toolkit 관련하여 chatSlice.ts 파일과 userSlice.ts 파일을 저장했습니다. pages 폴더 안에 ChattingPage.tsx 파일을 생성하여 채팅방 페이지를 구현했습니다.

4. 디자인 시스템을 적용하면서 느낀 점은 무엇인가요?
   디자이너 분께서 그룹화를 꼼꼼하게 해주셔서 이를 바탕으로 고민 없이 스타일을 지정해줄 수 있어 편리하다고 느꼈습니다. 코드를 작성하고 즉각적으로 시각적 결과물을 확인하며 피그마 디자인과 맞춰가는 재미도 있었습니다.

5. 디자이너와 소통하며 느낀점은 무엇인가요?
   디자이너 분께 질문이 있어 피그마에 코멘트를 남기거나 연락을 드렸을 때 항상 빠르게 답장을 주셔서 편하게 작업할 수 있었습니다. 추가로 요구를 드리더라도 이에 대해 바로바로 피드백을 주셔서 빠른 소통의 중요성을 느낄 수 있었습니다.

## 미션 목표

- TypeScript를 사용해봅시다.
- useState로 컴포넌트의 상태를 관리합니다.
- useEffect와 useRef의 사용법을 이해합니다.
- styled-components를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법에 익숙해집니다.

## 링크 및 참고자료

- [React docs - Hook](https://ko.reactjs.org/docs/hooks-intro.html)
- [React의 Hooks 완벽 정복하기](https://velog.io/@velopert/react-hooks#1-usestate)
- [useEffect 완벽 가이드](https://overreacted.io/ko/a-complete-guide-to-useeffect/)
- [코딩 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- [타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)
- [리액트 프로젝트에서 타입스크립트 사용하기 (시리즈)](https://velog.io/@velopert/series/react-with-typescript)
- [디자인 시스템 구축기](https://yozm.wishket.com/magazine/detail/1830/)
- [[영상] : 컴포넌트에 대한 이해](https://www.youtube.com/watch?v=21eiJc90ggo)
- [Styled Component로 디자인 시스템 구축하기](https://zaat.dev/blog/building-a-design-system-in-react-with-styled-components/)
- [ts 절대경로 설정하기](https://tesseractjh.tistory.com/232)
