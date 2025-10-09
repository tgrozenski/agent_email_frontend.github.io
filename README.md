# Agent Email Frontend

This is the frontend for the Agent Email cloud application. It provides a user interface for users to authenticate with their Google account and manage their documents.

## Features

*   **Google OAuth 2.0 Integration**: Users can log in securely with their Google account.
*   **Document Management**:
    *   Create, view, edit, and delete documents.
    *   A simple and intuitive interface for managing documents.
    *   Pagination for easy navigation through a large number of documents.

## How it Works

1.  **Authentication**:
    *   The user clicks the "Log In With Google" button on the main page (`index.html`).
    *   They are redirected to Google's OAuth 2.0 consent screen to authorize the application.
    *   After authorization, the user is redirected to the `callback.html` page.
    *   The `callback.html` page extracts the authorization code, sends it to the backend to exchange it for an ID token, and stores the token in the browser's session storage.

2.  **Document Management**:
    *   The user is then redirected to the `documents.html` page, where they can see a list of their documents.
    *   The application uses the ID token to authenticate with the backend API to perform CRUD (Create, Read, Update, Delete) operations on the documents.

## Tech Stack

*   **Frontend**: HTML, JavaScript, Tailwind CSS
*   **Backend API**: The frontend communicates with a backend service hosted on Google Cloud Run (`https://email-service-592589126466.us-west2.run.app`).

## Pages

*   **`index.html`**: The landing and login page.
*   **`callback.html`**: Handles the OAuth 2.0 callback from Google.
*   **`documents.html`**: The main page for document management.