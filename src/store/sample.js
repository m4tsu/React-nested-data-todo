export const labels = [
  {
    id: 1,
    text: 'frontend'
  },
  {
    id: 2,
    text: 'api'
  }
];

export const todos = [
  {
    id: 1,
    text: 'create-react-app でプロジェクト作成',
    label: null,
    completed: true
  },
  {
    id: 2,
    text: 'Todo コンポーネント実装',
    label: {
      id: 1,
      text: 'frontend'
    },
    completed: false
  },
  {
    id: 3,
    text: 'Todo crud APIの実装',
    label: {
      id: 2,
      text: 'api'
    },
    completed: false
  },
];