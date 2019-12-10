import React from 'react';
import TodoPane from './Todo/TodoPane';
import LabelPane from './Label/LabelPane';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoPane/>
      <LabelPane/>
    </div>
  );
}

export default App;
