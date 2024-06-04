// eslint-disable-next-line
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './layouts/PageLayout/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import useAuthStore from './store/authStore';

function App() {
  const authUser = useAuthStore((state) => state.user);

  console.log({ authUser });

  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to={'/auth'} />}></Route>
          <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to={'/'} />}></Route>
          <Route path="/:username" element={<ProfilePage />}></Route>
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
