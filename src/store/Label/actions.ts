import { TodoType, LabelType } from "../dataType";

export const LabelActionType = {
  READ_LABEL: "READ_LABEL" as const,
  ADD_LABEL: "ADD_LABEL" as const,
  UPDATE_LABEL: "UPDATE" as const,
  REMOVE_LABEL: "REMOVE_LABEL" as const
};

export const readLabels = (labels: LabelType[]) => ({
  type: LabelActionType.READ_LABEL,
  payload: {
    labels
  }
});

export const addLabel = (text: string) => ({
  type: LabelActionType.ADD_LABEL,
  payload: {
    text: text
  }
});

export type Actions =
  | ReturnType<typeof readLabels>
  | ReturnType<typeof addLabel>;
