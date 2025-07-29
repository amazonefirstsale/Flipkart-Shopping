import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecretToken from './SecretToken';

import Admin1Dashboard from './Admin1/Pages/Dashboard';
import Admin1Holdings from './Admin1/Pages/Holdings';
import Admin1Pavti from './Admin1/Pages/Pavti';
import Admin1Receipt from './Admin1/Pages/Receipt';
import Admin1PavtiForm from './Admin1/Pages/PavtiForm';
import Admin1Form from './Admin1/Pages/Form';
import Admin1FormTwo from './Admin1/Pages/FormTwo';
import Admin1TredBuyReceipt from './Admin1/Pages/TredBuyReceipt';
import Admin1AverageCalce from './Admin1/Pages/AverageCalce';

import Admin2Dashboard from './Admin2/Pages/Dashboard';
import Admin2Holdings from './Admin2/Pages/Holdings';
import Admin2Pavti from './Admin2/Pages/Pavti';
import Admin2Receipt from './Admin2/Pages/Receipt';
import Admin2PavtiForm from './Admin2/Pages/PavtiForm';
import Admin2Form from './Admin2/Pages/Form';
import Admin2FormTwo from './Admin2/Pages/FormTwo';
import Admin2TredBuyReceipt from './Admin2/Pages/TredBuyReceipt';
import Admin2AverageCalce from './Admin2/Pages/AverageCalce';

import Admin3Dashboard from './Admin3/Pages/Dashboard';
import Admin3Holdings from './Admin3/Pages/Holdings';
import Admin3Pavti from './Admin3/Pages/Pavti';
import Admin3Receipt from './Admin3/Pages/Receipt';
import Admin3PavtiForm from './Admin3/Pages/PavtiForm';
import Admin3Form from './Admin3/Pages/Form';
import Admin3FormTwo from './Admin3/Pages/FormTwo';
import Admin3TredBuyReceipt from './Admin3/Pages/TredBuyReceipt';
import Admin3AverageCalce from './Admin3/Pages/AverageCalce';

import Admin4Dashboard from './Admin4/Pages/Dashboard';
import Admin4Holdings from './Admin4/Pages/Holdings';
import Admin4Pavti from './Admin4/Pages/Pavti';
import Admin4Receipt from './Admin4/Pages/Receipt';
import Admin4PavtiForm from './Admin4/Pages/PavtiForm';
import Admin4Form from './Admin4/Pages/Form';
import Admin4FormTwo from './Admin4/Pages/FormTwo';
import Admin4TredBuyReceipt from './Admin4/Pages/TredBuyReceipt';
import Admin4AverageCalce from './Admin4/Pages/AverageCalce';



function Apps() {
  const token = localStorage.getItem('token'); // Token to identify admin

  return (
    <BrowserRouter>
      <Routes>
        {!token && <Route path="/*" element={<SecretToken />} />}
        {token === '1' && (
          <>
            <Route path="/dashboard" element={<Admin1Dashboard />} />
            <Route path="/holdings" element={<Admin1Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin1Pavti />} />
            <Route path="/receipt/:idCode" element={<Admin1Receipt />} />
            <Route path="/pavtiForm" element={<Admin1PavtiForm />} />
            <Route path="/form" element={<Admin1Form />} />
            <Route path="/formTwo" element={<Admin1FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin1TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin1AverageCalce />} />
          </>
        )}
        {token === '2' && (
          <>
   <Route path="/dashboard" element={<Admin2Dashboard />} />
            <Route path="/holdings" element={<Admin2Holdings />} />
            <Route path="/pavti/:idCode" element={<Admin2Pavti />} />
            <Route path="/receipt/:idCode" element={<Admin2Receipt />} />
            <Route path="/pavtiForm" element={<Admin2PavtiForm />} />
            <Route path="/form" element={<Admin2Form />} />
            <Route path="/formTwo" element={<Admin1FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin2TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin2AverageCalce />} />
          </>
        )}
        {token === '3' && (
          <>
            <Route path="/dashboard" element={<Admin3Dashboard />} />
            <Route path="/holdings" element={<Admin3Holdings />} />
            <Route path="/pavti" element={<Admin3Pavti />} />
            <Route path="/receipt" element={<Admin3Receipt />} />
            <Route path="/pavtiForm" element={<Admin3PavtiForm />} />
            <Route path="/form" element={<Admin3Form />} />
            <Route path="/formTwo" element={<Admin3FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin3TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin3AverageCalce />} />
          </>
        )}
        {token === '4' && (
          <>
            <Route path="/dashboard" element={<Admin4Dashboard />} />
            <Route path="/holdings" element={<Admin4Holdings />} />
            <Route path="/pavti" element={<Admin4Pavti />} />
            <Route path="/receipt" element={<Admin4Receipt />} />
            <Route path="/pavtiForm" element={<Admin4PavtiForm />} />
            <Route path="/form" element={<Admin4Form />} />
            <Route path="/formTwo" element={<Admin4FormTwo />} />
            <Route path="/tredBuyReceipt" element={<Admin4TredBuyReceipt />} />
            <Route path="/averageCalce" element={<Admin4AverageCalce />} />
          </>
        )}
        
        {token && !['1', '2', '3', '4'].includes(token) && (
          <Route path="/*" element={<div>Admin not found</div>} />
        )}
        <Route path="/*" element={<SecretToken />} /> {/* Fallback route */}
      </Routes>
    </BrowserRouter>
  );
}

export default Apps;
