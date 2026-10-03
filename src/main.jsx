import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SWRConfig } from 'swr'
import './index.css'
import App from './App.jsx'
import { apiFetcherForJSONPlaceholder } from './api/fetcher.js'
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SWRConfig value={{
        fetcher: apiFetcherForJSONPlaceholder,
        revalidateOnFocus: false
    }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </SWRConfig>
  </StrictMode>,
)
