import React, { FC, useState } from "react";
import useLabel from "../../containers/Label";

export interface LabelFormState {
  text: string;
}

const LabelForm: FC = () => {
  const [formLabel, setFormLabel] = useState<LabelFormState>({ text: "" });
  const { postLabel } = useLabel();

  const clickHangder = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (formLabel.text === "") {
      return;
    }
    postLabel({ text: formLabel.text });
    console.log(formLabel.text);
    setFormLabel({ text: "" });
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormLabel({ text: event.target.value });
  };

  return (
    <div>
      <input value={formLabel.text} onChange={handleChangeText} />
      <button onClick={clickHangder}>Add</button>
    </div>
  );
};

export default LabelForm;
