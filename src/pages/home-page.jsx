import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeadersSection from '../components/leaderssection';
import PostersCarousel from '../components/postercarousel';
import EventsAndNews from '../components/events&news';
import MissionVisionCore from '../components/visionmision&coresection';
import EventsGallery from '../components/eventsgallery';
import MembersAndVisits from '../components/members&visits';

const Home = () => {
  return (
    <div>
        <PostersCarousel />
        <LeadersSection />
        <EventsAndNews />
        <MissionVisionCore />
        <EventsGallery />
        <MembersAndVisits />
    </div>
 
    
  );
};

export default Home;
