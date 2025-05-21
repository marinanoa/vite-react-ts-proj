import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RegisterPage } from './presentation/pages/RegisterPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RegisterPage />
    </QueryClientProvider>
  );
}

export default App;
