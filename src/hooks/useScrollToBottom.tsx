import { useRecoilState } from 'recoil';
import { scrollToBottomState } from '@context/state/atom';
import { voidFunction } from '@_type/type';

export default function useScrollToBottom() {
  const [scrollToBottom, setScrollToBottom] =
    useRecoilState(scrollToBottomState);

  function setScrollFunction(scrollFunction: voidFunction) {
    setScrollToBottom(() => scrollFunction);
  }

  return [scrollToBottom, setScrollFunction];
}
