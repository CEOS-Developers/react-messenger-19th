declare module '*.svg' {
  import React = require('react');

  // SVGProps를 확장하고 alt 속성을 추가하는 새로운 인터페이스 정의
  interface SVGProps extends React.SVGProps<SVGElement> {
    alt: string; // alt 속성을 필수로 지정
  }

  export const ReactComponent: React.FC<SVGProps>;
}
