import { useRef } from 'react';

//hook
function useMoveScrool() {
  const element = useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement};
}

export default useMoveScrool;

/*cosnt {element, onMoveToElement} = useMoveScrool()

return (
<>
    <div onClick={onMoveToElement}>
        이걸 누르면?
    </div>
    <div ref={element}>
    	여기로 옵니다.
    </div>
</>
)*/

