import React, { FC, ChangeEvent } from 'react';
import { LabelType } from '../../store/dataType';

interface LabelSelectorProps {
  labels: LabelType[];
  onChange(label_id: null | number): void;
  value: null | number;
}

const LabelSelector: FC<LabelSelectorProps> = ({labels, onChange, value}) => {
  const handleSlected = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange( event.target.value ==='' ? null : parseInt(event.target.value, 10));
  }
  return (
    <select  value={value ? value : ''} onChange={handleSlected}>
      <option value=""></option>
      {labels.map((label) => <option key={label.id} value={label.id}>{label.text}</option>)}
    </select>
  )
};

export default LabelSelector;