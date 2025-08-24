// カードの属性タイプ
export type CardElement = 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'fighting' | 'darkness' | 'metal' | 'fairy' | 'dragon' | 'colorless';

// わざの型定義
export interface Move {
  name: string;
  cost: number;
  damage: number;
  effect?: string; // 特殊効果の説明（オプション）
}

// カードの基本情報
export interface Card {
  name: string;
  element: CardElement;
  hp: number;
  moves: Move[];
  retreatCost?: number; // にげるコスト（オプション）
}

// カードデータベースの型（cardId -> Card のマッピング）
export interface CardDatabase {
  [cardId: string]: Card;
}

// カードIDと情報を含む拡張型
export interface CardWithId extends Card {
  id: string;
}
