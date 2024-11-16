import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WelcomePopup from '@/components/common/WelcomePopup';
import AppRoutes from '@/routes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
        <WelcomePopup />
      </div>
    </Router>
  );
}

export default App;