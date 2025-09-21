import { useState, useEffect } from "react";

export const useTurnIndicator = (isPlayerTurn: boolean) => {
  const [showPlayerTurnIndicator, setShowPlayerTurnIndicator] = useState<boolean>(true);
  const [showOpponentTurnIndicator, setShowOpponentTurnIndicator] = useState<boolean>(false);

  useEffect(() => {
    if (isPlayerTurn) {
      setShowPlayerTurnIndicator(true);
			setShowOpponentTurnIndicator(false);
    } else {
      setShowOpponentTurnIndicator(true);
			setShowPlayerTurnIndicator(false);
    }
  }, [isPlayerTurn]);

  return {
    showPlayerTurnIndicator,
    showOpponentTurnIndicator,
  };
};
