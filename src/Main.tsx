import './Styles/index.css'; // import css

import * as React from "react";
import { createRoot } from "react-dom/client";
import App from './Components/App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);