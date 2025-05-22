import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RegisterPage } from './presentation/pages/RegisterPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <RegisterPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
