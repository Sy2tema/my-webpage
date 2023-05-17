import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageRoutes from 'router/PageRoutes';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PageRoutes />
  </React.StrictMode>
);