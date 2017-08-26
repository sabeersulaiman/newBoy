# /v1/User

*Common Headers*

Property  | Value
--------- | -------------
API-KEY   | API Key Provided

## 1. /signUp

Used to login or sign up using a mobile number specified by ```phone```.

### Properties
Property  | Value
------------- | -------------
METHOD  | POST

### Body (JSON)
```json
{
	"phone": "8893979247"
}
```

### Responses
#### 1. Success (MUA100)
```json
{
    "statusCode": "MUA100",
    "message": "Sign Up Success",
    "data": null
}
```

#### 2. Invalid number
```json
{
    "statusCode": "MUA200",
    "message": "Invalid Phone number.",
    "data": null
}
```


#### 3. Unknown errors
```json
{
    "statusCode": "MUA300",
    "message": "Saving user failed.",
    "data": null
}
```

## 2. /otpSignUp

Sign Up to the system by verifying the otp and adding a password. Password is expected to be at least 8 character long.

### Properties
Property  | Value
------------- | -------------
METHOD  | POST

### Body (JSON)
```json
{
	"phone": "8893979247",
    "password": "some8charpassword",
    "otp": "78223"
}
```

### Responses
#### 1. Success
```json
{
    "statusCode": "MUB100",
    "message": "Sign Up Success",
    "data": {
        "_id": "5992862941dca1305023fc25",
        "phone": "8893979247",
        "access": [],
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTkyODYyOTQxZGNhMTMwNTAyM2ZjMjUiLCJhY2Nlc3MiOltdLCJpc3N1ZWRBdCI6MTUwMjc3NTQzMjQ5NiwiaWF0IjoxNTAyNzc1NDMyLCJleHAiOjE1MDMzODAyMzJ9.AAOjGevmnW8KHRN59QcoJ6SI_Lbo9Q_UsRIuukwYeYE"
    }
}
```

#### 2. Invalid Phone
```json
{
    "statusCode": "MUB200",
    "message": "Invalid Phone, failed",
    "data": null
}
```

#### 3. Invalid Otp
```json
{
    "statusCode": "MUB400",
    "message": "Invalid Otp.",
    "data": null
}
```

#### 4. Invalid password
```json
{
    "statusCode": "MUB300",
    "message": "Invalid Password.",
    "data": null
}
```

#### 5. Otp verification failed
```json
{
    "statusCode": "MUB800",
    "message": "The Otp verification failed",
    "data": null
}
```

#### 6. User already registered
```json
{
    "statusCode": "MUB700",
    "message": "The user is already registered.",
    "data": null
}
```

## 3. /phone

This end point can be used to send an otp for login or resetting a password.

### Properties
Property  | Value
------------- | -------------
METHOD  | POST

### Body (JSON)
```json
{
	"phone": "8893979247"
}
```

### Responses
#### 1. Success
```json
{
    "statusCode": "MUC100",
    "message": "An OTP is send successfully.",
    "data": null
}
```

#### 2. Phone number invalid
```json
{
    "statusCode": "MUC300",
    "message": "The Phone number is invalid.",
    "data": null
}
```

#### 3. User is not registered yet
```json
{
    "statusCode": "MUC200",
    "message": "The user is not registered yet.",
    "data": null
}
```

#### 4. MUC400 when unexpected error occures
```json
{
    "statusCode": "MUC400",
    "message": "Failed.",
    "data": null
}
```

### 4. /otpLogin

Login with otp endpoint for logging in a user using just otp.

### Properties
Property  | Value
------------- | -------------
METHOD  | POST

### Body (JSON)
```json
{
	"phone": "8893979247",
    "otp": "78223"
}
```

#### 1. Success
```json
{
    "statusCode": "MUD100",
    "message": "Login SUccess",
    "data": {
        "_id": "5992862941dca1305023fc25",
        "phone": "8893979247",
        "access": [],
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTkyODYyOTQxZGNhMTMwNTAyM2ZjMjUiLCJhY2Nlc3MiOltdLCJpc3N1ZWRBdCI6MTUwMjgzNzcwNTUwMSwiaWF0IjoxNTAyODM3NzA1LCJleHAiOjE1MDM0NDI1MDV9.AQBG8XOkx8yix5MJxiRYH__APnGEclABezJtrK-iHuU"
    }
}
```

#### 2. User not registered
```json
{
    "statusCode": "MUD200",
    "message": "User is not registered yet.",
    "data": null
}
```

#### 3. Invalid Data
```json
{
    "statusCode": "MUD400",
    "message": "Invalid data values",
    "data": null
}
```

#### 4. Otp verification failed
```json
{
    "statusCode": "MUD300",
    "message": "User Otp Verification failed.",
    "data": null
}
```

## 5. /passwordLogin

Login to account using password and phone number.

### Properties
Property  | Value
------------- | -------------
METHOD  | POST

### Body (JSON)
```json
{
	"phone": "8893979247",
    "password": "somepassword" 
}
```

### Responses
#### 1. Success (MUE100)
```json
{
    "statusCode": "MUE100",
    "message": "Successfully logged in user.",
    "data": {
        "_id": "599ab13bb7eab503a8b89bc9",
        "phone": "8893979247",
        "access": [],
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTlhYjEzYmI3ZWFiNTAzYThiODliYzkiLCJhY2Nlc3MiOltdLCJpc3N1ZWRBdCI6MTUwMzMxMTUwMzk1MywiaWF0IjoxNTAzMzExNTAzLCJleHAiOjE1MDM5MTYzMDN9.kMoPo9dSDOHglWtQ3I-9VxknG6-rdLsgs6cikjeSDlQ"
    }
}
```

#### 2. Incomplete Data
```json
{
    "statusCode": "MUE500",
    "message": "Incomplete Data",
    "data": null
}
```

#### 3. Authentication Failed
```json
{
    "statusCode": "MUE300",
    "message": "Authentication Failed",
    "data": null
}
```

#### 4. User not registered yet
```json
{
    "statusCode": "MUE200",
    "message": "User not registered yet.",
    "data": null
}
```

## 6. /resetPassword

Reset your password. Use ``/phone``` endpoint to send an OTP when password is forgot.

### Properties
Property  | Value
------------- | -------------
METHOD  | POST

### Body (JSON)
```json
{
	"phone": "8893979247",
    "password": "somepassword", //new password
    "otp": "45156"
}
```

### Responses

#### 1. Success
```json
{
    "statusCode": "MUF100",
    "message": "Successfully changed the password.",
    "data": null
}
```

#### 2. Invalid Data
```json
{
    "statusCode": "MUF200",
    "message": "Invalid Data",
    "data": null
}
```

#### 3. Not registered
```json
{
    "statusCode": "MUF300",
    "message": "User is not registered.",
    "data": null
}
```

#### 4. Authentication Failed
```json
{
    "statusCode": "MUF400",
    "message": "Authentication of the OTP failed.",
    "data": null
}
```