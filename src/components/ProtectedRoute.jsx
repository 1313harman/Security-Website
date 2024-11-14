import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase'; // Import Firebase auth instance
import { ClipLoader } from 'react-spinners'



const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <div className='flex justify-center items-center mt-80'><ClipLoader color="#ffffff" loading={true} size={200} /></div>; // Show loading while checking authentication
  }

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
