import React, { FC, useState } from 'react';
import LabelList from './LabelList';
import LabelForm from './LabelForm';
// import { todos, labels } from '../../store/sample';
import useLabel from '../../containers/Label';

const LabelPane: FC = () => {
  const { labelState } = useLabel();
  const { labels } = labelState;
  return (
    <div>
      <h2>Labels</h2>
      <LabelForm/>
      <LabelList labels={labels}/>
    </div>
  )
}

export default LabelPane;