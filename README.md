
# React Vite Todo App

A React Vite application featuring user authentication and a Todo List. This application uses Redux Toolkit for state management, React Router for routing, and includes protected routes to ensure that certain pages are only accessible to authenticated users.

## Features

* User Authentication:
    * User registration (sign up)
    * User login
    * Authentication managed via local state
* Todo List:
    * Add, edit, delete, and toggle completion of todo items
    * Each todo item includes a title and description
* Routing:
    * Client-side routing with React Router
    * Protected routes to restrict access based on authentication

## Technologies
* React: Frontend library
* Vite: Build tool
* Redux Toolkit: State management
* React Router: Routing
* Redux Persist: State persistence (optional)
* Formik: Form handling
* Yup: Form validation
* Styling: Tailwind CSS
* Icons: React Icons

## File Structure

    src/
    |-- app/
    |   |-- store.js
    |
    |-- assets/
    |   |-- react.svg
    |
    |--components/
    |   |-- AuthForm.jsx
    |   |-- Button.jsx
    |   |-- Checkbox.jsx
    |   |-- TextArea.jsx
    |   |-- TextInput.jsx
    |   |-- TodoItem.jsx
    |   |-- TodoList.jsx
    |
    |-- features/
    |   |-- auth/
    |   |   |-- authSlice.js
    |   |   |-- registerSlice.js
    |   |-- todos/
    |       |-- todosSlice.js
    |
    |-- hooks/
    |  |-- useForm.js
    |
    |-- pages/
    |   |-- HomePage.jsx
    |   |-- LoginPage.jsx
    |   |-- RegisterPage.jsx
    |   |-- TodoCreatePage.jsx
    |   |-- TodoEditPage.jsx
    |   |-- TodoPage.jsx
    |
    |-- routes/
    |   |-- AppRoutes.jsx
    |   |-- ProtectedRoute.jsx
    |   |-- routePaths.js
    |   |-- Layout.jsx
    |
    |-- App.jsx
    |-- main.jsx

## Setup

### Prerequisites

* Node.js (version 16 or higher)
* npm or yarn

### Installation

#### 1. Clone the repository:

    git clone https://github.com/ihakalanka/Frontend-Grading-Assessment.git
    cd Frontend-Grading-Assessment

#### 2. Install dependencies:

    npm install

#### 3. Start the development server:

    npm run dev 

This will start the application on http://localhost:5173.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.