import cards from '../constants/cards';
import type { Card } from '../types/card';

/**
 * カードIDからカード情報を取得する
 * @param cardId - カードID（例: "nyaoha"）
 * @returns カード情報。存在しない場合はnull
 */
export const getCardById = (cardId: string): Card | null => {
  if (!cardId || typeof cardId !== 'string') return null;
  return cards[cardId] || null;
};

