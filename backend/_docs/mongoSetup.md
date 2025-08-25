1. Use Docker for MongoDB (Recommended in Dev Containers)
You can run MongoDB as a Docker container, which is simple and avoids OS compatibility issues:

docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo:7

if error
docker stop mongodb
docker rm mongodb

2. Test mongoDB connection
docker exec -it mongodb mongosh -u mongoadmin -p secret --authenticationDatabase admin

3. Run
use conci
db.getCollectionNames()

4. Create a test
db.questions.insertOne({ modelUsed: "test", text: "Hello?", userEmail: "test@example.com" })


---

Localhost:
brew services start mongodb-community@6.0