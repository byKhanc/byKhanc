import React, { useLayoutEffect, useRef } from 'react';

export default function LayoutEffectExample() {
  const boxRef = useRef<HTMLInputElement | null>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
        boxRef.current.style.background = 'yeollow';
        boxRef.current.style.width = '300px';
    }
  }, []);

  return <div ref={boxRef}>useLayoutEffect로 스타일 적용</div>;
}