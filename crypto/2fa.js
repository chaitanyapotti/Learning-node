/* Factors of authentication
 Layer 1
 - Something you know (password)
 - Something you have (badge, id card, token)
 - Something you are (biometrics)
*/

/*
TOTP - Time based Otp
A secret is shared between the user and the server
The secret is used to generate a number
The generated number is input with the password
*/


/*
In general,
login + 2fa is used for authenticating a user
App server and database server must communicate using https (asymmetric encryption)
Data store in file and db is encrypted using keys from a KMS (symmetric encryption)

*/