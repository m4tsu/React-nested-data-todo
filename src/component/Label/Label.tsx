import React, { FC, useState } from 'react';
import { LabelType } from '../../store/dataType';
import styled from 'styled-components';

const StyledLabel = styled.label`
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  // background-color: #def;
  // border-radius: 5px;
  // padding: .5rem;
`;

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
    <StyledLabel onClick={ editable ? handleClick : undefined}>{label.text}</StyledLabel>
  );
}

export default Label;