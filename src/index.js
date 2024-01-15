import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from "./App";

// https://www.frontendly.dev/ihor-filippov/build-a-crud-app-in-react-with-tanstack-query-and-material-ui/6

const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);