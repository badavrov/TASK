#Run the project

**-Install all dependencies**
`$ npm install `

**-run DB**
` $ C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath c:\path-to-db*`
*database exported in project directory*

**-run webpack and nodemon**
`npm run run`


#API
MONGODB, NODEJS, EXPRESS.

#USERS
##USER-POST
| Title | User |
| --- | --- |
| **URL** | /users/register |
| **Method** | POST |
| **URL Params** | none |

**Data Params:**

```
Required:
 name: <string>,
 picture: <string>,
 big: <boolean>
***!IMPORTANT!***
** big is false by default
** picture must be string /picture.jpg and the picture must exist in /assets folder
```

**Response Example:**
```
{
    "deleted": false,
    "_id": "5b2b84c924c5302a401c301a",
    "name": "John Doe",
    "picture": "/john.jpg",
    "big": false,
    "__v": 0
}
```

##USER-GETALL if deleted: false. (no hard delete)
| Title | User |
| --- | --- |
| **URL** | /users |
| **Method** | GET |
| **URL Params** | none |

**Response Example:**
```
[
    {
        "deleted": false,
        "_id": "5b266eb7a817eb1c4c3fbe92",
        "name": "Don Bass",
        "picture": "/don.jpg",
        "big": false,
        "__v": 0
    },
    {
        "deleted": false,
        "_id": "5b28bddf7d09f30b9cc713a2",
        "name": "Hugo Fisher",
        "picture": "/hugo.jpg",
        "big": true,
        "__v": 0
    }
]
```
##USER-GET BIG
| Title | User |
| --- | --- |
| **URL** | /users/big |
| **Method** | GET |
| **URL Params** | none |

**Get all bosses**

**Response Example:**
```
[
    {
        "deleted": false,
        "_id": "5b28bddf7d09f30b9cc713a2",
        "name": "Hugo Fisher",
        "picture": "/hugo.jpg",
        "big": true,
        "__v": 0
    }
]
```
##USER-GET SMALL
| Title | User |
| --- | --- |
| **URL** | /users/small |
| **Method** | GET |
| **URL Params** | none |

**Get all small guys**

**Response Example:**
```
[
   {
        "deleted": false,
        "_id": "5b266eb7a817eb1c4c3fbe92",
        "name": "Don Bass",
        "picture": "/don.jpg",
        "big": false,
        "__v": 0
]
```

##USER-Edit/delete
| Title | User |
| --- | --- |
| **URL** | /users/edit |
| **Method** | PUT |
| **URL Params** | none |

**Data Params:**

```
You choose one or more:
 name: <string>,
 picture: <string>,
 big: <boolean>,
 deleted: <boolean>
```

**Response Example:**
```
{
    "deleted": true,
    "_id": "5b2690c8d8d9d208a09e5e85",
    "name": "Hello",
    "picture": "picture.png",
    "big": true,
    "__v": 0
}
```

#POSITIONS

##Position-POST
| Title | POSITION |
| --- | --- |
| **URL** | /positions/register |
| **Method** | POST |
| **URL Params** | none |

**Data Params:**

```
Required:
 title: <string>
```

**Response Example:**
```
{
    "deleted": false,
    "_id": "5b2b8bdf4f89e71f4c9efa25",
    "title": "Coffee guy",
    "__v": 0
}
```


##POSITIONS-GET
| Title | POSITION |
| --- | --- |
| **URL** | /positions |
| **Method** | GET |
| **URL Params** | none |


**Response Example:**
```
[
    {
        "deleted": false,
        "_id": "5b2b8b7610614914dcebe9b0",
        "title": "Janitor",
        "__v": 0
    },
    {
        "deleted": false,
        "_id": "5b2b8bae4f89e71f4c9efa24",
        "title": "Drone",
        "__v": 0
    },
    {
        "deleted": false,
        "_id": "5b2b8bdf4f89e71f4c9efa25",
        "title": "Coffee guy",
        "__v": 0
    }
]
```


##Position-Edit/delete
| Title | Position |
| --- | --- |
| **URL** | /positions/edit |
| **Method** | PUT |
| **URL Params** | none |

**Data Params:**

```
You choose one or more:
 title: <string>,
 deleted: <boolean>
```

**Response Example:**
```
{
    "deleted": true,
    "_id": "5b2b8bdf4f89e71f4c9efa25",
    "title": "Coffee guy",
    "__v": 0
}
```


#Front

![](https://i.imgur.com/yXgsfC6.png)


                
----
###End