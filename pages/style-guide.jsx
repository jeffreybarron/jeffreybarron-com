import React from "react"
import PagesLayout from "../Layout/PagesLayout";

export default function StyleGuidePage() {
  return (
    <PagesLayout>
      <div className="bg-primary-contrast sm:p-6 rounded-t-2xl">
        <h1 className="text-primary">Colour Pallette</h1>
        <ul>
          <li className="p-2 bg-primary text-primary-contrast"><p>primary</p></li>
          <ul>
            <li className="w-full p-2 bg-primary-contrast text-primary">bg-primary-contrast text-primary</li>
            <li className="w-full p-2 bg-primary-50 text-primary">bg-primary-50 text-primary</li>
            <li className="w-full p-2 bg-primary-100 text-primary">bg-primary-100 text-primary</li>
            <li className="w-full p-2 bg-primary-200 text-primary">bg-primary-200 text-primary</li>
            <li className="w-full p-2 bg-primary-300 text-primary">bg-primary-300 text-primary</li>
            <li className="w-full p-2 bg-primary-400 text-primary">bg-primary-400 text-primary</li>
            <li className="w-full p-2 bg-primary-500 text-primary">bg-primary-500 text-primary</li>
            <li className="w-full p-2 bg-primary-light text-primary-contrast">bg-primary-light text-primary-contrast</li>
            <li className="w-full p-2 bg-primary-600 text-primary-contrast">bg-primary-600 text-primary-contrast</li>
            <li className="w-full p-2 bg-primary-700 text-primary-contrast">bg-primary-700 text-primary-contrast</li>
            <li className="w-full p-2 bg-primary-800 text-primary-contrast">bg-primary-800 text-primary-contrast</li>
            <li className="w-full p-2 bg-primary text-primary-contrast">DEFAULT-900: bg-primary text-primary-contrast</li>
            <li className="w-full p-2 bg-primary-900 text-primary-contrast">bg-primary-900 text-primary-contrast</li>
            <li className="w-full p-2 bg-primary-dark text-primary-contrast">bg-primary-dark text-primary-contrast</li>
          </ul>
          
          <li className="mt-4 p-2 bg-secondary text-secondary-contrast"><p>secondary</p></li>
          <ul>
            <li className="w-full p-2 bg-secondary-contrast text-primary">CONTRAST: bg-secondary-contrast text-primary</li>
            <li className="w-full p-2 bg-secondary-50 text-primary">bg-secondary-50 text-primary</li>
            <li className="w-full p-2 bg-secondary-100 text-primary">bg-secondary-100 text-primary</li>
            <li className="w-full p-2 bg-secondary-200 text-primary">bg-secondary-200 text-primary</li>
            <li className="w-full p-2 bg-secondary-light text-primary">LIGHT: bg-secondary-light text-primary</li>
            <li className="w-full p-2 bg-secondary-300 text-primary">bg-secondary-300 text-primary</li>
            <li className="w-full p-2 bg-secondary-400 text-primary">bg-secondary-400 text-primary</li>
            <li className="w-full p-2 bg-secondary-500 text-primary">bg-secondary-500 text-primary</li>
            <li className="w-full p-2 bg-secondary-600 text-primary">bg-secondary-600 text-primary</li>
            <li className="w-full p-2 bg-secondary-700 text-primary">bg-secondary-700 text-primary</li>
            <li className="w-full p-2 bg-secondary-800 text-primary">bg-secondary-800 text-primary</li>
            <li className="w-full p-2 bg-secondary text-primary">DEFAULT-900: bg-secondary text-primary</li>
            <li className="w-full p-2 bg-secondary-900 text-primary">bg-secondary-900 text-primary</li>
            <li className="w-full p-2 bg-secondary-dark text-primary-contrast">DARK: bg-secondary-dark text-primary-contrast</li>
          </ul>

          <li className="mt-4 p-2 bg-tertiary text-primary"><p>tertiary text-primary</p></li>
          <ul>
            <li className="w-full p-2 bg-tertiary-contrast text-primary-contrast">CONTRAST: bg-tertiary-contrast text-primary-contrast</li>
            <li className="w-full p-2 bg-tertiary-50 text-primary">bg-tertiary-50 text-primary</li>
            <li className="w-full p-2 bg-tertiary-light text-primary">LIGHT: bg-tertiary-light text-primary</li>
            <li className="w-full p-2 bg-tertiary-100 text-primary">bg-tertiary-100 text-primary</li>
            <li className="w-full p-2 bg-tertiary-200 text-primary">bg-tertiary-200 text-primary</li>
            <li className="w-full p-2 bg-tertiary text-primary">DEFAULT: bg-tertiary text-primary</li>
            <li className="w-full p-2 bg-tertiary-300 text-primary">bg-tertiary-300 text-primary</li>
            <li className="w-full p-2 bg-tertiary-400 text-primary">bg-tertiary-400 text-primary</li>
            <li className="w-full p-2 bg-tertiary-dark text-primary">DARK: bg-tertiary-dark text-primary</li>
            <li className="w-full p-2 bg-tertiary-500 text-primary">bg-tertiary-500 text-primary</li>
            <li className="w-full p-2 bg-tertiary-600 text-primary-contrast">bg-tertiary-600 text-primary-contrast</li>
            <li className="w-full p-2 bg-tertiary-700 text-primary-contrast">bg-tertiary-700 text-primary-contrast</li>
            <li className="w-full p-2 bg-tertiary-800 text-primary-contrast">bg-tertiary-800 text-primary-contrast</li>
          </ul>

          <li className="mt-4 p-2 bg-accent text-accent-contrast"><p>accent</p></li>
          <ul>
            <li className="w-full p-2 bg-accent-contrast text-primary-contrast">CONTRAST: bg-accent-contrast text-primary-contrast</li>
            <li className="w-full p-2 bg-accent-light text-primary">LIGHT: bg-accent-light text-primary</li>
            <li className="w-full p-2 bg-accent text-primary">DEFAULT: bg-accent text-primary</li>
            <li className="w-full p-2 bg-accent-dark text-primary-contrast">DARK: bg-accent-dark text-primary-contrast</li>
            <li className="w-full p-2 bg-accent-700 text-primary-contrast">bg-accent-700 text-primary-contrast</li>
            <li className="w-full p-2 bg-accent-800 text-primary-contrast">bg-accent-800 text-primary-contrast</li>
            <li className="w-full p-2 bg-accent-900 text-primary-contrast">bg-accent-900 text-primary-contrast</li>
          </ul>

          <li className="mt-4 p-2 bg-success text-success-contrast"><p>success</p></li>
          <ul>
            <li className="w-full p-2 bg-success-contrast text-primary-contrast">CONTAST: bg-success-contrast text-primary</li>
            <li className="w-full p-2 bg-success-light text-primary">LIGHT: bg-success-light text-primary</li>
            <li className="w-full p-2 bg-success-200 text-primary">bg-success-200 text-primary</li>
            <li className="w-full p-2 bg-success-400 text-primary-contrast">bg-success-400 text-primary-contrast</li>
            <li className="w-full p-2 bg-success text-primary-contrast">DEFAULT-500: bg-success text-primary-contrast</li>
            <li className="w-full p-2 bg-success-500 text-primary-contrast">bg-success-500 text-primary-contrast</li>
            <li className="w-full p-2 bg-success-dark text-primary-contrast">DARK: bg-success-dark text-primary-contrast</li>
            <li className="w-full p-2 bg-success-600 text-primary-contrast">bg-success-600 text-primary-contrast</li>
            <li className="w-full p-2 bg-success-800 text-primary-contrast">bg-success-800 text-primary-contrast</li>
          </ul>
 
          <li className="mt-4 p-2 bg-danger text-danger-contrast"><p>danger</p></li>
          <ul>
            <li className="w-full p-2 bg-danger-contrast text-primary-contrast">CONTAST: bg-danger-contrast text-primary</li>
            <li className="w-full p-2 bg-danger-200 text-primary">bg-danger-200 text-primary</li>
            <li className="w-full p-2 bg-danger-light text-primary">LIGHT-300: bg-danger-light text-primary</li>
            <li className="w-full p-2 bg-danger-300 text-primary">bg-danger-300 text-primary</li>
            <li className="w-full p-2 bg-danger-400 text-primary">bg-danger-400 text-primary</li>
            <li className="w-full p-2 bg-danger-500 text-primary-contrast">bg-danger-500 text-primary-contrast</li>
            <li className="w-full p-2 bg-danger text-primary-contrast">DEFAULT-600: bg-danger text-primary-contrast</li>
            <li className="w-full p-2 bg-danger-600 text-primary-contrast">bg-danger-600 text-primary-contrast</li>
            <li className="w-full p-2 bg-danger-dark text-primary-contrast">DARK-700: bg-danger-dark text-primary-contrast</li>
            <li className="w-full p-2 bg-danger-700 text-primary-contrast">bg-danger-700 text-primary-contrast</li>
            <li className="w-full p-2 bg-danger-800 text-primary-contrast">bg-danger-800 text-primary-contrast</li>
            <li className="w-full p-2 bg-danger-900 text-primary-contrast">bg-danger-900 text-primary-contrast</li>
          </ul>         
          
          </ul>
      </div>
    </PagesLayout>
  )
}
