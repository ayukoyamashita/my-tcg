import { useState, useEffect } from "react";

export const useTurnIndicator = (isPlayerTurn: boolean) => {
  const [showPlayerTurnIndicator, setShowPlayerTurnIndicator] = useState<boolean>(true);
  const [showOpponentTurnIndicator, setShowOpponentTurnIndicator] = useState<boolean>(false);

  useEffect(() => {
    if (isPlayerTurn) {
      setShowPlayerTurnIndicator(true);
      const timer = setTimeout(() => {
        setShowPlayerTurnIndicator(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowOpponentTurnIndicator(true);
      const timer = setTimeout(() => {
        setShowOpponentTurnIndicator(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn]);

  return {
    showPlayerTurnIndicator,
    showOpponentTurnIndicator,
  };
};
