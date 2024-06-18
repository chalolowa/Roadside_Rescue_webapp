# Roadside Rescue Assistance

Roadside Rescue Assistance is a web application designed to connect stranded motorists with reliable mechanics efficiently, ensuring prompt assistance during emergencies on Kenyan highways. The app uses GPS to pinpoint the user's location and displays nearby mechanics registered with the platform.

## Features

- User registration and authentication
- Real-time GPS location tracking
- List and view nearby mechanics
- Request assistance from selected mechanic
- Email and SMS notifications to mechanics
- Dashboard for user and mechanic profiles
- Firebase for backend services (authentication and database)
- Mapbox for mapping services

## Tech Stack

- **Frontend:** React, React Router
- **Backend:** Node.js, Express
- **Database:** Firestore (Firebase)
- **Authentication:** Firebase Auth
- **Notifications:** Email and SMS (using external services)
- **Mapping:** Mapbox
- **Containerization:** Docker

## Getting Started

### Prerequisites

- Node.js
- Docker
- Firebase account
- Mapbox account

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/roadside-rescue-assistance.git
    cd roadside-rescue-assistance
    ```

2. Set up Firebase:

    - Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Firestore and Authentication.
    - Get your Firebase config object and add it to `utils/firebase.js`.

3. Set up Mapbox:

    - Create an account at [Mapbox](https://www.mapbox.com/).
    - Get your access token and add it to your environment variables.

4. Create a `.env` file in the root directory and add the following:

    ```env
    REACT_APP_MAPBOX_GL_TOKEN=your_mapbox_token
    ```

5. Install dependencies for both frontend and backend:

    ```sh
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

6. Run the application using Docker:

    ```sh
    docker-compose up --build
    ```

7. The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:4000`.

### Firebase Configuration

Make sure your `firebase.js` looks like this:

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'your_api_key',
  authDomain: 'your_auth_domain',
  projectId: 'your_project_id',
  storageBucket: 'your_storage_bucket',
  messagingSenderId: 'your_messaging_sender_id',
  appId: 'your_app_id',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
