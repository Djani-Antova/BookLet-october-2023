# BookLet
This React-based web application serves as a platform for users to nominate books for an award prize. The back-end is supported by the SoftUni Practice server, providing the necessary server-side functionalities. The project is developed as part of the SoftUni React educational course.

## Steps for local instalation and review:
1. Clone the repository:  https://github.com/Djani-Antova/BookLet-october-2023
2. Navigate to the server folder (`cd server`):
   - Run `npm install` to install all package dependencies.
   - Run `node server.js` to start the back-end server.
3. Navigate to the client folder (`cd client`):
   - Run `npm install` to install all package dependencies.
   - Run `npm run dev` to run the app in development mode.
   - Open http://localhost:5173 to view it in the browser.
4. For convenience, preliminary seeded data comprising books and comments has been provided.

## Deployment
- Project deployed with Firebase - https://react-booklet-oct2023-b1365.web.app/

## Site overview 
### Every page contains navigation
- Guest users - see guest navigation
- Logged in users - see loggedin navigation
   
### Every page contains footer

### Home page
- Public page for all users. 

### Section showing all nominated books 
- Public page for all users. 

### Section showing latest 3 nominated books: 
- Public page for all users. 

### Section showing book details and comments for the book: 
- Public page for all users. 

### Section showing book details, comments for the book and option to add a comment: 
- Private page only for logged in users.

### Section showing book details, comments for the book, option to add a comment and options to edit and delete nomination: 
- Private page only for the creator of the book.

### Section displaying form for nominating a book
- Private page only for logged in users.

### Section displaying nominated books by a user
- Private page only for logged in users.

## CRUD Operations

### Read
An end point is revealed at `/data`, which grants access to information, stored on the service. `GET` requests to the service will return the following responses:
- `GET /data/:collection` - array of all entries in target collection; 
- `GET /data/:collection/:id` - entry matching the given ID; 

### Create
*This request requires authorization and content-type headers (see above).*

Send `POST` request to `/data/:collection` to create new entry. ID will be generated automatically and will be included in the returned object. If the collection does not exist, it will be created.

### Update
*This request requires authorization and content-type headers (see above). Only the owner of the resource can edit it.*

Send `PUT` request to `/data/:collection/:id` to update a single entry. Note that the existing entry will be replaced!

### Partial Update
*This request requires authorization and content-type headers (see above). Only the owner of the resource can edit it.*

Send `PATCH` request to `/data/:collection/:id` to partially update a single entry. The existing entry will be merged with the new data. System properties will **not** be affected.

### Delete
*This request requires authorization headers (see above). Only the owner of the resource can delete it.*

Send `DELETE` request to `/data/:collection/:id` to delete a single entry.

## Advanced Retrieval

By using **query parameters**, you can augment the returned results. Most of these parameters can be combined.

### Selecting Properties
Append `select={propList}` to the query parameters, where `{propList}` is a URL-encoded string of comma-separated property names. The returned entries will only have the selected properties, which may greatly reduce network traffic.

Note that system-generated properties, like `_id`, are **not** automatically included if you use this option and must be manually specified (if you need them).

**Example:** To retrieve only the fields `_id`, `name` and `img` from the `recipes` collection:
```
(unencoded) /data/recipes?select=_id,name,img
GET /data/recipes?select=_id%2Cname%2Cimg
```

### Collection Size
*This parameter **can** be combined with the `where` and `distinct` options. It **cannot** be combined with any of the other options.*

Append `count` to the query parameters. This changes the response from the service to be a single number, representing the number of entries in the collection (or number of matching entries, if combined with `where`). 

**Example:** To retrieve the number of entries in the `recipes` collection:
```
GET /data/recipes?count
```

### Sorting

Append `sortBy={propList}` to the query parameters, where `{propList}` is a URL-encoded string of comma-separated property names. Sorting is performed **by value**, where the first listed property is the primary criteria, and any other properties are secondary, tertiary, and so on.

The list will be sorted in **ascending order** by default - if you want descending order, add `desc` separated by space after the property name.

If the values are numbers, they will be comapared by size. Everything else is compared lexicographically (using `localeCompare`).

**Examples:**
* To sort by creation time, newest first (descending):
```
(unencoded) /data/recipes?sortBy=_createdOn desc
GET /data/recipes?sortBy=_createdOn%20desc
```

* To sort by the value of field `val` (descending), then by creation time (ascending):
```
(unencoded) /data/records?sortBy=val desc,_createdOn
GET /data/records?sortBy=val%20desc%2C_createdOn
```
   
