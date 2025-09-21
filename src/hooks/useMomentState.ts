import { useState, useEffect } from "react";

export const useMomentState = <T>(initialState: T | null, moment: number): [T | null, (value: T | null) => void] => {
  const [state, setState] = useState<T | null>(initialState);

  useEffect(() => {
    setTimeout(() => {
      setState(null);
    }, moment);
  }, [initialState]);

  return [state, setState];
};
