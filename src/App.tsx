import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./pages/Root";

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>

        <Root />

      </Router>
    </QueryClientProvider>
  );
}

export default App;
