import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';

import PrivateHeader from './components/PrivateHeader';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [verifiedUser, setVerifiedUser] = useState(false);
  return (
    <div>
      {verifiedUser ? <PrivateHeader /> : <Header /> }
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
