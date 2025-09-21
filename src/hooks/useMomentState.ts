import { useState } from "react";

export const useMomentState = <T>(initialState: T | null): [T | null, (value: T | null, moment: number) => void] => {
  const [state, setState] = useState<T | null>(initialState);

	const setMomentState = (value: T | null, moment: number = 0) => {
		setState(value);
		setTimeout(() => {
			setState(null);
		}, moment);
	};

  return [state, setMomentState];
};
