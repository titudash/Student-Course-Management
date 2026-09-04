# Practical 3: React Router & Context API

## What is React Router?
React Router is the standard routing library for React. It enables navigation between different views or components in a React application without requiring a full page reload, allowing for single-page application (SPA) experiences.

## What is a Dynamic Route?
A dynamic route allows you to pass parameters in the URL, like `/course/:id`. The `:id` part acts as a variable. Inside the component, we use the `useParams()` hook from React Router to read this value and display specific data based on it.

## What is Context API?
The Context API provides a way to pass data through the component tree without having to pass props down manually at every single level ("prop drilling"). In this project, the StudentContext shares student details across the Home, Navbar, and About components seamlessly.

## Project Routes
- `/` → Home
- `/courses` → Courses List
- `/course/:id` → Dynamic Course Details
- `/about` → About Page