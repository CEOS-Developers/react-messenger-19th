# 문서 목적

> 본 문서는 전체적인 웹 페이지의 레이아웃에 대한 이해를 돕고자 작성되었습니다.

## 상단 고정

1. ChatHead => 채팅방 페이지. 내부에 `IphoneStatusBar` 컴포넌트가 위치하며 고정적으로 47px의 높이를 가짐. 그 다음에 `ChatHeadNav` 컴포넌트가 위치함(이건 flex-grow를 다 먹어버림)

## 하단 고정

1. 매번 나타나는 것은 `HomeIndicator`임. 이는 부모 컴포넌트인 main이 relative에 맞춰 `position: absolute` 속성을 가지며 그 위에 와야하는 것들은 기존의 문서 흐름에 고대로 있기에 `HomeIndicator` 높이 만큼의 padding-bottom 속성을 부여받는다.
2. `HomeIndicator`위에 바로 오는 것은 Input이 될 수도 있고 tab Bar가 될 수도 있다. 따라서 이때에는 유도리있게 1의 논리를 적용하여 padding-bottom을 적극 활용한다(홈 인디케이터 바는 계속 고정적으로 있으니까).

## 중앙에 위치하는 컨텐츠

1. 일단 main 부모 컴포넌트의 문서 흐름에 맞추어 생각해보았을 때 `flex-grow: 1`로서 본인이 남은 칸을 모두 먹어버리고 `overflow-y: scroll` 속성을 통해 넘치면 스크롤 될 수 있게 만든다.
2. 나머지 속성들은 margin을 계산해서 넣어준다.

##
