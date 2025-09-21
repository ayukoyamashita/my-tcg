import { useState } from "react";

export const useMomentState = <T>(initialState: T | null): [T | null, (value: T | null, moment: number) => Promise<void>] => {
  const [state, setState] = useState<T | null>(initialState);

	const setMomentState = (value: T | null, moment: number = 0): Promise<void> => {
		setState(value);
		return new Promise((resolve) => {
			setTimeout(() => {
				setState(null);
				resolve();
			}, moment);
		});
	};

  return [state, setMomentState];
};
