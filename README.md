Bookstore app

for this app to work in your local computer, you need to create a mongo database and create an environment variable and add the connection string with the name **MONGO_URI** and uncomment the localhost from the files in the **pages** folder 


then run the app.js in the Backend folder 

    node app.js 
now as the backend is running you can you can start the frontend in the root folder 

    npm start 

if you want to run the backend on HEROKU 

[Backend repo](https://github.com/zadigg/Bookstore-Heroku-backend-)
clone the above repo and do the following(**Note:** the heroku app.js file is not the same with this one, there are some minor changes to make it compatable with heroku )
install heroku cli 
**Usage:** https://devcenter.heroku.com/articles/heroku-cli

    npm install -g heroku
```
heroku login // this will coonect us to our heroku credential 
heroku create // created a new heroku app 
```
after you create the heroku app, you use the new created API url as an environment variable either on vercel or netlify with the name 
**REACT_APP_HEROKU_URI** : your_herokuapp_string

we need to configure some environment varibale for the server side in this case we need to set the  **MONGO_URI**

```
heroku config:set MONGO_URI=your_mongo_db_connection_string  
```
then push it to your heroku

```
git add .
git commit -m "any msg u want" 
git push heroku master 
```

then push the client side and deploy it either on  **Vercel**  or  **Netlify**

Author: Abel Kibebe

Gmail:  [abelkibebe5@gmail.com](mailto:abelkibebe5@gmail.com)

Phone: 251924029960

