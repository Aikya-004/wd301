// import './App.css'
// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";
// import HomePage from './pages/HomePage';
// import TaskListPage from './pages/TaskListPage';
// import TaskDetailsPage from "./pages/TaskDetailsPage";
// import Form from './Form';
// import ReactPlayground from './ReactPlayground';
// import Layout from "./Layout";
// import Signin from "./pages/Signin";
// import ProtectedRoute from "./ProtectedRoute";
// import Notfound from "./pages/Notfound"
// // import TaskApp from "./TaskApp";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/signin" replace />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     element: (
//       <ProtectedRoute>
//         <Layout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "home",
//         element: <HomePage />,
//       },
//       {
//         path: "tasks",
//         element: <TaskListPage />,
//       },
//       {
//         path: "tasks/:id",
//         element: <TaskDetailsPage />,
//       },
//     ],
//   },
//   { 
//     path: "/notfound", 
//     element: <Notfound /> 
//   },
//   { 
//     path: "*", 
//     element: <Navigate to="/notfound" replace />,
//   },
// ]);

// const App = () => {
//   return (
//     <>
//       <ReactPlayground />
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Notfound from "./pages/Notfound";
import Signup from './pages/signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "*",
    element: <Notfound />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App