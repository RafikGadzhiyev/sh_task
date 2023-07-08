import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {css, Global} from "@emotion/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Global styles={css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
        }
          
          html,
          body {
              box-sizing: border-box;
              width: 100%;
              min-height: 100vh;
          }
      `}/>
    <App />
  </React.StrictMode>,
)
