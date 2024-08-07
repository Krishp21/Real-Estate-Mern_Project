This project is a comprehensive full stack real estate marketplace website developed using the MERN stack (MongoDB, Express, React, and Node.js). The platform allows users to list and browse property options, ensuring seamless interaction through a responsive and user-friendly interface.

Features:
Property Listings and Browsing: Users can list their properties and browse through various property options available on the platform.
User Authentication: Robust authentication mechanisms including traditional sign-in and sign-up pages as well as Google OAuth integration for easy access.
Security: Enhanced security through salting and hashing for password storage, ensuring user data protection and integrity.
Profile Management: Users can upload and manage their profile photos, providing a personalized experience.
RESTful API: The API design follows RESTful principles, promoting scalable and maintainable code.

Technologies Used:
1. MongoDB: Database to store user and property information.
2. Express: Backend framework to handle server-side logic.
3. React: Frontend library to build a responsive user interface.
4. Node.js: Runtime environment to execute server-side JavaScript.

Installation:
To run this project locally, follow these steps:

Clone the repository:


`git clone https://github.com/Krishp21/real-estate-marketplace.git`

`cd Real-Estate-Mern_Project`

Install dependencies:

`npm install express mongoose bcryptjs jsonwebtoken config express-validator cors nodemailer`

Set up environment variables:
Create a .env file in the root directory and add the following:

env

`MONGO_URI=your_mongo_database_uri`
`JWT_SECRET=your_jwt_secret`
`GOOGLE_CLIENT_ID=your_google_client_id`
`GOOGLE_CLIENT_SECRET=your_google_client_secret`
`EMAIL_SERVICE=your_email_service`
`EMAIL_USER=your_email_user`
`EMAIL_PASS=your_email_password`

Run the application:
`npm run dev`


