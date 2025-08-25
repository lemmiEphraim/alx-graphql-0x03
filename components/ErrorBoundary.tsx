import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      {/* Your app content here */}
    </ErrorBoundary>Objective: Integrate the ErrorBoundary component into your Next.js application by wrapping the main component.

Instructions:

Open thepages/_app.tsx file.

Import the ErrorBoundary component.

Wrap the Component prop in the ErrorBoundary:

import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;

Save and close your files
Run npm run dev from the terminal
From a tab in your browser type http://localhost:3000 to see the changes made.
Repo:

GitHub repository: alx-graphql-0x03
Directory: alx-rick-and-morty-app
File: README.md, pages/_app.tsx
  );
}
