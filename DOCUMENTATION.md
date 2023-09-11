Introduction:
This is a simple REST API that allows CRUD operations on a "person" resource using MongoDB. It provides endpoints to create, retrieve, update, and delete person records.
Setup Instructions:
=> MongoDB Installation: Ensure MongoDB is installed on your system. You can download it from MongoDB's official website.
=> Start MongoDB Server: Open your terminal and start the MongoDB server using the following command: "mongod".
=> Testing with Postman: Install Postman if you haven't already. You'll use Postman to test the API.
API Endpoints:
=> Create a New Person
Endpoint: /api/createuser
Method: POST
Description: Create a new person with a name. The name is a required parameter in the request body.
Request Format:{
    "name": "Boluwatife"
}
Response Format: {
    "_id": "123abc456",
    "name": "Boluwatife"
}
=> Get a Person by id
Endpoint: /api/getuser/:id
Method: GET
Description: Retrieve a specific person by their ID.
Response Format: {
     "_id": "123abc456",
    "name": "Boluwatife"
}
=> Update a Person's Name by id
Endpoint: /api/updateuser/:id
Method: PUT
Description: Update a person's name by their ID. Provide the new name in the request body.
Request Format: {
     "name": "Boluwatife Honour"
}
Response Format: {
    "_id": "123abc456",
    "name": "Boluwatife Honour"
}
=> Delete a Person
Endpoint: /api/deleteuser/:id
Method: DELETE
Description: Delete a person by their ID.
Response Format: {
    message: {
        'name deleted successfully'
    }
}
Sample Usage
=> Create a new person
POST /api/createuser
{
  "name": "Olasoji Anuoluwapo"
}
=> Get a person by id
GET /api/getuser/12345
=> Update user by id
PUT /api/updateuser/12345 
{
    "name": "Olasoji Favour Anuoluwapo"
}
=> Delete user by id
DELETE /api/deleteuser/12345 
Known limitations: 
=> Only string values are allowed for the "name" field.