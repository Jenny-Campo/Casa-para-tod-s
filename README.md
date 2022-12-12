### CASA PARA TOD@S

Home sharing app (BACKEND)

Project Full Stack

Authors:  @Jenny-Campo https://https://github.com/Jenny-Campo    AND    @AlbertoMG91 https://https://github.com/AlbertoMG91

### ENDPOINTS:

### ANONYMOUS USER

METHOD | ENDPOINT                    | TOKEN | ROLE           | DESCRIPTION               | POST PARAMS                                   | RETURNS
-------|-----------------------------|-------|----------------|---------------------------|-----------------------------------------------|--------------------
GET    | /appUseInfo                 | -     | Anonymous user | See app use information   |                                               | { msg: string }
GET    | /houseShareAds              | -     | Anonymous user | See all shared house ads  | query params ??                               | [{shared houses Ads}]
GET    | /houseShareAd/:houseId      | -     | Anonymous user | See one shared house ad   | id                                            | {share house ad}
GET    | /ownerProfile/:ownerId      | -     | Anonymous user | (in the ad) See the owner profile | id                                    | {owner profile}

### AUTH Signup/Login


METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                   | RETURNS
-------|-----------------------------|-------|------|-----------------------|-----------------------------------------------|--------------------
POST   | /auth/signup                | -     | user | User Signup           | Name, age, direcction, location, phoneNumber, email, password, role| {msg: string, token: token }
POST   | /auth/login                 | -     | user | Login                 | email, password                           | {msg: string, token: token }
GET**  | /auth/logout                | YES   | user | Logout                |                                               | {msg: string}
GET**  | /auth/logOff                | YES   | user | LogOff                |                                               | {msg: string}
POST   | /auth/signup                | YES   | ADMIN| Create an user Signup | Name, age, direcction, location, phoneNumber, email, password, role| {msg: string, token: token }
POST   | /auth/login                 | YES   | ADMIN| Login                 | email, password            | {msg: string, token: token }
GET**  | /auth/logout                | YES   | ADMIN| Logout                |                                               | {msg: string}
GET**  | /auth/logOff                | YES   | ADMIN| LogOff                |                                               | {msg: string}


### User

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|-----------------------------|-------|--------|-----------------------|----------------------------------------------|--------------------
GET    | /user/profile               | YES   | user   | see own profile       | id                                           | {own profile}
PUT    | /user/profile               | YES   | user   | update own profile    | Name, age, direcction, location, phoneNumber, email, password, role                          | {own profile}
PUT    | /user/profile               | YES   | user   | update own profile    | Name, age, direcction, location, phoneNumber, email, password                          | {own profile}
DELETE | /user/profile               | YES   | user   | delete own profile    |                                              | { msg: string }


### HouseAd

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|-----------------------------|-------|--------|-----------------------|----------------------------------------------|--------------------
POST   | /user/ad                    | YES   | user   | Create own ad for share own home | visibleAddress, houseType, totalRooms, totalWc, houseState, direcction, visibleDirecction, location, rentalPrice, desciption   | { msg: string }
GET    | /user/ad                    | YES   | user   | See own ad            |                                              | {own ad}
PUT    | /user/ad                    | YES   | user   | Update own ad         | visibleAddress, houseType, totalRooms, totalWc, houseState, direcction, visibleDirecction, location, rentalPrice, desciption    | {own ad}
DELETE | /user/ad                    | YES   | user   | Delete own ad         |                                              | { msg: string }


### Province

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|-----------------------------|-------|--------|-----------------------|----------------------------------------------|--------------------
POST   | /province                   | YES   | user   | Create one province   | provinceName                                 | { msg: string }


### ADMIN

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|-----------------------------|-------|--------|-----------------------|----------------------------------------------|--------------------
GET    | /profiles                   | YES   | ADMIN  | see all profiles      |                                              | {profiles}
GET    | /profile/:profileId         | YES   | ADMIN  | see one profile       | id                                           | {profile}
PUT    | /profile/:profileId         | YES   | ADMIN  | update one profile    | id                                           | {profile}
DELETE | /profile/:profileId         | YES   | ADMIN  | delete one profile    | id                                           | { msg: string }
GET    | /ads                        | YES   | ADMIN  | See all ads           |                                              | {ads}
GET    | /ad/:adId                   | YES   | ADMIN  | See one ad            | id                                            | {ad}
POST   | /ad                         | YES   | ADMIN  | Create one ad         | visibleAddress, houseType, totalRooms, totalWc, houseState, direcction, visibleDirecction, location, rentalPrice, desciption                            | { msg: string }
PUT    | /ad/:adId                   | YES   | ADMIN  | Update one ad         | visibleAddress, houseType, totalRooms, totalWc, houseState, direcction, visibleDirecction, location, rentalPrice, desciption                            | {ad}
DELETE | /ad/:adId                   | YES   | ADMIN  | Delete one ad         |                                              | { msg: string }



GET** = we are not sure we can get this endpoint into the first version

