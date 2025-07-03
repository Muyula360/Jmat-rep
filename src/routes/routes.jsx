import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/home-page';
import Publiclayout from '../layouts/public';
import Notfound from '../components/notfound'
import ContactUs from '../pages/contact_us';
import ScrollToTop from '../components/scroll';
import Login from '../pages/login';
import JmatHistory from '../pages/history';
import Leadership from '../pages/leadership';
import Membership from '../pages/membership';
import Newslist from '../pages/newslist';
import EventsGallery from '../pages/events';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Publiclayout />}>
          <Route index element={<Home />} />
          <Route path='/contacts_us' element={<ContactUs />} />
          <Route path='/history' element={<JmatHistory />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/news' element={<Newslist />} />
          <Route path='/events' element={<EventsGallery />} />
          <Route path="/login" element={<Login key={location.key} />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
