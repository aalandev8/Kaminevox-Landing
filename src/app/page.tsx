'use client'

import MainContent from './components/Main/MainContent';
import AboutSection from './components/Main/AboutSection';
import WatchSection from './components/Main/WatchSection';
import ListenSection from './components/Main/ListenSection';

export default function Home() {

  return (
    <>
    <MainContent/>
    <AboutSection />
    <WatchSection />
    <ListenSection />
    </>

  );
}