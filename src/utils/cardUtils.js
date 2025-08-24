import cards from '../constants/cards';

/**
 * カードIDからカード情報を取得する
 * @param {string} cardId - カードID（例: "nyaoha"）
 * @returns {Object|null} カード情報。存在しない場合はnull
 */
export const getCardById = (cardId) => {
  if (!cardId || typeof cardId !== 'string') return null;
  return cards[cardId] || null;
};

