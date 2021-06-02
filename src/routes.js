import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "home-page" */),
);
const PhonebookPage = lazy(() =>
  import('./views/PhonebookPage' /*webpackChunkName: "phonebook-page" */),
);
const SignInPage = lazy(() =>
  import('./views/SignInPage' /*webpackChunkName: "sign-in-page" */),
);
const SignUpPage = lazy(() =>
  import('./views/SignUpPage' /*webpackChunkName: "sign-up-page" */),
);
const ErrorPage = lazy(() =>
  import('./views/ErrorPage' /*webpackChunkName: "error-page" */),
);

const ContactPage = lazy(() =>
  import('./views/ContactPage' /*webpackChunkName: "contact-page" */),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    exact: true,
    userNav: true,
    authNav: true,
  },
  {
    path: '/contacts',
    label: 'Phonebook',
    component: PhonebookPage,
    exact: true,
    logged: true,
    restricted: false,
    userNav: true,
    authNav: false,
  },
  {
    path: '/login',
    label: 'SignIn',
    component: SignInPage,
    exact: false,
    logged: false,
    restricted: true,
    userNav: false,
    authNav: true,
  },
  {
    path: '/register',
    label: 'SignUp',
    component: SignUpPage,
    exact: false,
    logged: false,
    restricted: true,
    userNav: false,
    authNav: false,
  },
  {
    path: '/error404',
    label: 'Error',
    component: ErrorPage,
    exact: false,
    userNav: false,
    authNav: false,
  },
  {
    path: '/contacts/:contactId',
    label: 'Contact',
    component: ContactPage,
    logged: true,
    exact: false,
    userNav: false,
    authNav: false,
  },
];
