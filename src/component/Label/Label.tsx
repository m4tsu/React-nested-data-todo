import React, { FC, useState } from 'react';
import { LabelType } from '../../store/dataType';

interface LabelProps {
  label: LabelType;
  editable: boolean;
}

const Label: FC<LabelProps> = ({ label, editable })=> {
  const handleClick = () => {
    const updateLabel = window.prompt('Label Update', label.text);
    if(updateLabel) {
      const nextLabel = {...label, text: updateLabel};
      console.log(nextLabel);
    }
  };

  return (
    <label onClick={ editable ? handleClick : undefined}>{label.text}</label>
  );
}

export default Label;