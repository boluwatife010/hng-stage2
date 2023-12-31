## Table of Contents
- [Introduction](Introduction)
- [Setup Instructions](#Setup-Instruction)
- [Api endpoints](#Api-endpoints)
- [Sample usage](#Sample-usage)
- [Known limitations](#Known-limitations)
- [Notes](Notes)
## Introduction:
This is a simple REST API that allows CRUD operations on a "person" resource using MongoDB. It provides endpoints to create, retrieve, update, and delete person records.
## Setup Instructions:
- MongoDB Installation: Ensure MongoDB is installed on your system. You can download it from MongoDB's official website.
- Start MongoDB Server: Open your terminal and start the MongoDB server using the following command: "mongod".
- Testing with Postman: Install Postman if you haven't already. You'll use Postman to test the API.
### API Endpoints:
 ### Create a New Person
- **Endpoint**: /api
- **Method**: POST
- **Description**: Create a new person with a name. The name is a required parameter in the request body.
- **Request Format**:
``` json
{
    "name": "Boluwatife"
}
```
- **Response Format**: 
``` json
{
    "_id": "123abc456",
    "name": "Boluwatife"
}
```
### Get a Person by id
- **Endpoint**: /api/:id
- **Method**: GET
- **Description**: Retrieve a specific person by their ID.
- **Response Format**:
``` json
{
     "_id": "123abc456",
    "name": "Boluwatife"
}
```
### Update a Person's Name by id
- **Endpoint**: /api/:id
- **Method**: PUT
- **Description**: Update a person's name by their ID. Provide the new name in the request body.
- **Request Format**: 
``` json
{
     "name": "Boluwatife Honour"
}
```
- **Response Format**: 
``` json
{
    "_id": "123abc456",
    "name": "Boluwatife Honour"
}
```
### Delete a Person
- **Endpoint**: /api/:id
- **Method**: DELETE
- **Description**: Delete a person by their ID.
- **Response Format**: 
``` json
{
    "message":"name deleted successfully "
}
```
## Sample Usage
1. Create a new person
**POST** /api
``` json
{
  "name": "Olasoji Anuoluwapo"
}
```
2. Get a person by id
**GET** /api/12345

3. Update user by id
**PUT** /api/12345 
``` json
{
    "name": "Olasoji Favour Anuoluwapo"
}
```
4. Delete user by id
**DELETE** /api/12345

### Known limitations: 
=> Only string values are allowed for the "name" field.
### Notes
This API uses MongoDB as it's backend database.