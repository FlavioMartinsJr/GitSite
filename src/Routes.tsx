import { Home } from './pages/Home';
import { Menu } from './components/Menu/index'
import { Navbar } from './components/Navbar/index'
import { Footer } from './components/Footer/index'
import { Private } from './pages/Private';
import { RequireAuth } from './controllers/Auth/RequireAuth';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {QueryClient,QueryClientProvider,} from "@tanstack/react-query";
import "./assets/scss/global.scss";


const queryClient = new QueryClient();

export function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="Container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth><Layout /></RequireAuth>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Private",
          element: <Private />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

