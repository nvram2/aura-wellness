/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Outcomes from './components/Outcomes';
import RetreatTypes from './components/RetreatTypes';
import Locations from './components/Locations';
import Coaches from './components/Coaches';
import UpcomingRetreats from './components/UpcomingRetreats';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg font-sans text-white selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <Outcomes />
        <UpcomingRetreats />
        <RetreatTypes />
        <Locations />
        <Coaches />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
