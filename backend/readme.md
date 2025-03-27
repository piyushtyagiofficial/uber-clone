## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token


## `/users/login` Endpoint

### Description
Authenticates a user using the provided credentials.

### HTTP Method
`POST`

### Request Body
- `email` (string, required): Must be a valid email
- `password` (string, required): Must be at least 5 characters long

### Possible Responses
- **200**: Returns `{ token, user }`
- **401**: Invalid credentials
- **400**: Validation errors

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token


## `/users/profile` Endpoint

### Description
Retrieves the authenticated user's profile.

### HTTP Method
`GET`

### Authentication
Requires a valid user session (JWT token in cookie).

### Possible Responses
- **200**: Returns `{ user }`
- **401**: Unauthorized access

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).

## `/users/logout` Endpoint

### Description
Logs the user out by clearing the authentication token cookie.

### HTTP Method
`GET`

### Authentication
Requires a valid user session (JWT token in cookie or Authorization Header).

### Possible Responses
- **200**: Cookie cleared successfully
- **401**: Unauthorized access

## CAptain Routes

## `/captains/register` Endpoint

### Description
Registers a new captain with associated vehicle details.

### HTTP Method
`POST`

### Request Body
- `fullname.firstname` (string, required): Minimum 3 characters
- `fullname.lastname` (string, optional)
- `email` (string, required): Must be a valid email
- `password` (string, required): Minimum 5 characters
- `vehicle.color` (string, required): Minimum 3 characters
- `vehicle.plate` (string, required): Minimum 3 characters
- `vehicle.capacity` (number, required): Must be at least 1
- `vehicle.type` (string, required): Must be one of `car`, `auto`, or `motorcycle`

### Possible Responses
- **201**: Captain created
- **400**: Validation errors
- **500**: Server error

### Example Response

- `captain` (object):
  - `fullname` (object).
    - `firstname` (string): CAptain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).   
  - `email` (string): Captain's email address (must be a valid email).
  - `password` (string): User's password.
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle capacity (must be at least 1).
    - `type` (string): Must be one of `car`, `auto`, or `motorcycle`.
  - `token` (String): JWT Token


## `/captains/login` Endpoint

### Description
Authenticates a captain using the provided credentials.

### HTTP Method
`POST`

### Request Body
- `email` (string, required): Must be a valid email
- `password` (string, required): Minimum 5 characters

### Possible Responses
- **200**: Returns `{ token, captain }`
- **400**: Invalid credentials or validation error
- **500**: Server error

### Example Response
- `token` (string): JWT Token  
- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).   
  - `email` (string): Captain's email address (must be a valid email).
  - `password` (string): Captain's password.
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle capacity (must be at least 1).
    - `type` (string): Vehicle type (`car`, `auto`, `motorcycle`)

## `/captains/profile` Endpoint

### Description
Retrieves the authenticated captain's profile.

### HTTP Method
`GET`

### Authentication
Requires a valid user session (JWT token in cookie or Authorization header).

### Possible Responses
- **200**: Returns `{ captain }`
- **401**: Unauthorized access

### Example Response
- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address
  - `vehicle` (object):
    - `color` (string): Vehicle color
    - `plate` (string): Vehicle plate
    - `capacity` (number): Vehicle capacity
    - `type` (string): Vehicle type

## `/captains/logout` Endpoint

### Description
Logs the captain out by clearing the authentication token cookie.

### HTTP Method
`GET`

### Authentication
Requires a valid user session (JWT token in cookie or Authorization header).

### Possible Responses
- **200**: Cookie cleared successfully
- **401**: Unauthorized access

### Example Response
- A JSON message: `{ "message": "Logged out successfully" }`

  
