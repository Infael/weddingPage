export interface Question {
  id: number;
  text: string;
  event: number;
  multichoice?: boolean;
  values: string[];
  guests: number[];
}
