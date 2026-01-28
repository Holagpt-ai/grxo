'use client';

import { useCallback, useRef } from 'react';

interface UseCompositionOptions<T extends HTMLElement> {
  onCompositionStart?: (e: React.CompositionEvent<T>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<T>) => void;
  onKeyDown?: (e: React.KeyboardEvent<T>) => void;
}

export function useComposition<T extends HTMLElement>({
  onCompositionStart,
  onCompositionEnd,
  onKeyDown,
}: UseCompositionOptions<T>) {
  const isComposingRef = useRef(false);

  const handleCompositionStart = useCallback(
    (e: React.CompositionEvent<T>) => {
      isComposingRef.current = true;
      onCompositionStart?.(e);
    },
    [onCompositionStart]
  );

  const handleCompositionEnd = useCallback(
    (e: React.CompositionEvent<T>) => {
      isComposingRef.current = false;
      onCompositionEnd?.(e);
    },
    [onCompositionEnd]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<T>) => {
      onKeyDown?.(e);
    },
    [onKeyDown]
  );

  return {
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    onKeyDown: handleKeyDown,
  };
}
