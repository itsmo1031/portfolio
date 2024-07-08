import { useMousePositionStore } from '@/stores/useMousePositionStore';
import { useRef, useEffect } from 'react';

const useMousePosition = () => {
  const setMousePosition = useMousePositionStore((state) => state.setPosition);
  const isListenerAdded = useRef(false);

  useEffect(() => {
    if (isListenerAdded.current) {
      console.log("already added listener");
      return;
    }

    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    isListenerAdded.current = true;

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      isListenerAdded.current = false;
    };
  }, [setMousePosition]);
};

export default useMousePosition;
