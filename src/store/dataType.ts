export interface TodoType {
  id: number;
  text: string;
  label: null | LabelType;
  completed: boolean;
}

export interface LabelType {
  id: number;
  text: string;
}