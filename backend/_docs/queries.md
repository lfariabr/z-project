# Get Users
curl -s -X POST http://localhost:4000/graphql \
  -H 'content-type: application/json' \
  -d '{"query":"{ listUsers(limit: 10) { _id email isExplicit subscribed createdAt } }"}'

# Get User by ID
curl -s -X POST http://localhost:4000/graphql \
  -H 'content-type: application/json' \
  -d '{"query":"query($id: ID!){ getUserById(id: $id) { _id email isExplicit subscribed createdAt } }","variables":{"id":"<paste_id_here>"}}'

# Register User
curl -s -X POST http://localhost:4000/graphql \
  -H 'content-type: application/json' \
  -d '{"query":"mutation($input:RegisterInput!){registerUser(input:$input){_id email isExplicit subscribed createdAt}}","variables":{"input":{"email":"test@example.com","isExplicit":true}}}'