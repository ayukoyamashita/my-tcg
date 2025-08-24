// カードの属性タイプ
export type CardElement = 'fire' | 'water' | 'grass';

// わざの型定義
export type Move = {
  name: string;
  cost: number;
  damage: number;
}

// カードの基本情報
export type Card = {
  name: string;
  element: CardElement;
  hp: number;
  moves: Move[];
}

// カードデータベースの型（cardId -> Card のマッピング）
export type CardDatabase = {
  [cardId: string]: Card;
}

// カードIDと情報を含む拡張型
export type CardWithId = Card & {
  id: string;
}
