// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Notfound from './pages/Notfound';
// import Signup from './pages/signup';
// import Signin from './pages/signin';
// import Dashboard from './pages/dashboard';
// import ProtectedRoute from './ProtectedRoute';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Signup />,
//   },
//   {
//     path: '/signup',
//     element: <Signup />,
//   },
//   {
//     path: '/signin',
//     element: <Signin />,
//   },
//   {
//     path: '/notfound',
//     element: <Notfound />,
//   },
//   {
//     path: '/dashboard',
//     element: (
//       <ProtectedRoute>
//         <Dashboard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '*',
//     element: <Notfound />,
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;
// import  { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import React from "react";
import { ThemeContext } from "./context/theme";
import { Suspense, useContext } from "react";
// To do that, first I'll import the `ProjectsProvider` in the `App` component.

import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
// Then I'll wrap the RouterProvider component with the <ProjectsProvider> component.
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-full w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}
    >
      <ProjectsProvider>
        <MembersProvider>
          <Suspense fallback={<>Loading...</>}>
            <RouterProvider router={router} />
          </Suspense>
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};
export default App;