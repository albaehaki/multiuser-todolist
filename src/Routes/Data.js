import {
  Home,
  Login,
  SignUp,
  LupaPassword,
  PasswordBaru,
  Header,
  Contoh,
} from "../Pages/index";

const routesData = [
  {
    id: 0,
    element: <Home />,
    route: "/dasboard",
  },
  {
    id: 1,
    element: <Login />,
    route: "/",
  },
  {
    id: 2,
    element: <SignUp />,
    route: "/sign-up",
  },
  {
    id: 3,
    element: <LupaPassword />,
    route: "/lupa-password",
  },
  {
    id: 4,
    element: <PasswordBaru />,
    route: "/password-baru",
  },
  {
    id: 5,
    element: <Header />,
    route: "/header",
  },
  {
    id: 6,
    element: <Contoh />,
    route: "/contoh",
  },
];

export { routesData };
