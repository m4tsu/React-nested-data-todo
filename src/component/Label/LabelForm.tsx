import React, { FC, useState } from 'react';

const LabelForm: FC = () => {
  const [formLabel, setFormLabel] = useState({text: ''});

  const clickHangder = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(formLabel.text === '') {
      return;
    }
    console.log(formLabel.text);
    setFormLabel({text: ''});
  }

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormLabel({text: event.target.value});
  }

  return (
    <div>
      <input value={formLabel.text} onChange={handleChangeText}/>
      <button onClick={clickHangder}>Add</button>
    </div>
  )
}

export default LabelForm;