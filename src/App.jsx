// eslint-disable-next-line
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './layouts/PageLayout/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/:username" element={<ProfilePage />}></Route>
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
