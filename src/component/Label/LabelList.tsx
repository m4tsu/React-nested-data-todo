import React, { FC, useState } from 'react';
import { labels } from '../../store/sample';
import { link } from 'fs';
import Label from './Label';
import { LabelType } from '../../store/dataType';

interface LabelListProps {
  labels: LabelType[]
}

const LabelList: FC<LabelListProps> = ({ labels }) => {
  return (
    <ul>
      {labels.map((label) => <li key={label.id}><Label label={label} editable={true}/></li>)}
    </ul>
  )
}

export default LabelList;