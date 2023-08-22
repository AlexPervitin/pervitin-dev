import { useRef } from 'react';

export const useTestHook = () => {
  const projectRef = useRef(null);
  return { projectRef };
};
