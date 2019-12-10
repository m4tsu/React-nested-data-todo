import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { LabelActionType } from "../store/Label/actions";
import { AppState } from "../store/store";
import { TodoType, LabelType } from "../store/dataType";
import { LabelFormState } from "../component/Label/LabelForm";

const useLabel = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const labelState = useSelector((state: AppState) => state.labelState);
  const dispatch = useDispatch();
  console.log("useLabel");

  const postLabel = useCallback((labelFormValue: LabelFormState) => {
    dispatch({
      type: LabelActionType.ADD_LABEL,
      payload: { text: labelFormValue.text }
    });
  }, []);
  return { labelState, postLabel };
};

export default useLabel;
