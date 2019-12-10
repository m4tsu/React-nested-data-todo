# Sample App for Udemy Program

Sample App (Todo Application)
- data store only on memory.
- available routes
  - todos: index, create, read, update, delete
  - labels: index, create, update, delete
- resource structure
  - todo: {id: 'integer', text: 'string', label: 'Label or labelId', completed: boolean}
  - label: {id: 'integer', text: 'string'}

## requirement
- node v8.9.4
- npm v5.8.0

## install
```sh
% npm i
% node index.js
```

## example

```sh
curl http://localhost:3001/todos
curl http://localhost:3001/labels

curl -H 'Content-Type:application/json' -d "{\"text\":\"New Task 1\", \"label\":1}" http://localhost:3001/todos -X POST 

curl -H 'Content-Type:application/json' -d "{\"text\":\"New Label\"}" http://localhost:3001/labels -X POST

curl -H 'Content-Type:application/json' -d "{\"text\":\"Update Task 1\", \"label\":2}" http://localhost:3001/todos/1 -X PUT

curl http://localhost:3001/labels/1 -X DELETE 
curl http://localhost:3001/todos/2 -X DELETE 

curl http://localhost:3001/todos/1
```
