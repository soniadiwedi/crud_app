# Crud Application
The CRUD application is a web-based platform that allows users to perform basic CRUD operations (Create, Read, Update, Delete) on posts. The application includes user authentication with login and signup functionality to ensure secure access.

Users can create an account by providing their username, email, and password. The signup process includes validation checks to ensure that the entered data meets the required criteria. Once registered, users can log in using their credentials to access the application.

Once logged in, users have the ability to create new posts by providing a title, content, and any additional information. The created posts are saved and associated with the user's account.

Users can view all the posts available in the application and read their content. They can also edit and update their existing posts, allowing them to modify the post's title, content, or any other relevant information. The changes made to the posts are saved and reflected in the application.

Additionally, users have the option to delete their own posts if they no longer wish to keep them. Upon deletion, the post is permanently removed from the application.

The CRUD application provides a user-friendly interface and a seamless experience for managing posts, allowing users to create, read, update, and delete their own posts efficiently.

## API Endpoints
1.`POST /api/register`- User registration endpoint
2.`POST /api/login`- User login endpoint 
3.`POST /api/posts`- Create a new post
4.`GET /api/posts`- Retrieve all posts
5.`PATCH /api/posts/:id`- Update a post
6.`DELETE /api/posts/:id`- Delete a post

## Getting Started
How to start locally 
1.Clone the repository: git clone `https://github.com/soniadiwedi/crud_app.git`

2.Install the dependencies: `npm install`

3.Start the frontend development server: `npm run start`

4.Start the backend development server: `npm run server`

## Login Page
![image](https://github.com/soniadiwedi/crud_app/assets/112754761/a9ac7e96-c58c-4a96-9022-5be909345593)

## SignUP Page
![image](https://github.com/soniadiwedi/crud_app/assets/112754761/182104e0-0e30-4c26-9bdc-8769a93dae05)

## Post Page
![image](https://github.com/soniadiwedi/crud_app/assets/112754761/b845d395-2cb8-447c-9f18-729b4655f450)


