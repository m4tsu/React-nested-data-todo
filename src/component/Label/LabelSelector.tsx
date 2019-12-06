import React, { FC, ChangeEvent } from 'react';
import { LabelType } from '../../store/dataType';

interface LabelSelectorProps {
  labels: LabelType[];
  onChange: any;
  value: null | LabelType;
}


const LabelSelector: FC<LabelSelectorProps> = ({labels, onChange, value}) => {
  const handleSlected = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange( event.target.value ==='' ? null : labels.find((label) => label.id === parseInt(event.target.value, 10)));
  }
  return (
    <select  value={value ? value.id : ''} onChange={handleSlected}>
      <option value=""></option>
      {labels.map((label) => <option key={label.id} value={label.id}>{label.text}</option>)}
    </select>
  )
};

export default LabelSelector;