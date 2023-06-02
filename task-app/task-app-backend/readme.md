# Task App Backend

## Start Up

```bash
npm start
```

## Smoke Test

```bash
# Retrieve all tasks
curl -H "Content-Type: application/json" -X GET http://localhost:3000/api/tasks
# Retrieves a user tasks
curl -H "Content-Type: application/json" -X GET http://localhost:3000/api/tasks/1
# Creates a new task
curl -d '{"title":"foo", "description":"foo", "userId": 1}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/tasks
# Delete a task
curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/tasks/1
# Update a task
curl -d '{"title":"foo", "description":"foo"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/tasks/2
```
