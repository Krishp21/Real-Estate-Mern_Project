# Real Estate Marketplace

This project is a full-stack real estate marketplace web application built using the MERN stack (MongoDB, Express, React, and Node.js). The platform allows users to buy, sell, and rent properties, providing features such as user authentication, property listings, and profile management. The application is designed with a responsive and user-friendly interface, making it easy for users to navigate and interact with the platform.

## Project Description

The Real Estate Marketplace project includes the following key features:

- **User Authentication:** Secure user authentication with traditional sign-in/sign-up and Google OAuth integration using Firebase. Passwords are stored securely with salting and hashing.
- **Property Listings:** Users can browse, add, update, and delete property listings. Listings include images, descriptions, prices, and contact details.
- **Profile Management:** Users can create and manage their profiles, including uploading profile photos.
- **Responsive Design:** The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

## Installation Instructions

Follow these steps to set up the project locally:

1. **Clone the repository:**

   Open your terminal and run:

   ```bash
   git clone https://github.com/Krishp21/Real-Estate-Mern_Project.git
   cd Real-Estate-Mern_Project
   ```
2. **Set up the backend (Node.js/Express):**

    Navigate to the backend directory:

    ```bash
    cd backend
    ```

3. **Install the required dependencies:**

    ```bash
    npm install
    ```
4. **Create a .env file in the backend directory and add your environment variables (e.g., MongoDB connection string, Firebase credentials):**
    ```
    MONGO_URI=your_mongodb_connection_string
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    ```

5. **Start the backend server:**

    ```bash
    npm run server
    ```
6. **Set up the frontend (React):**

    Open a new terminal window/tab and navigate to the frontend directory:
    ```
    bash
    cd ../frontend
    ```

7. **Install the required dependencies:**
    ```bash
    npm install
    ```
8. **Start the frontend development server:**

    ```bash
    npm start
    ```

