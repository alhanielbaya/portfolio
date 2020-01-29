import React from 'react';
import styles from './App.module.css';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <>
      <div className={`${styles.root} container `}>
        <div className={`columns`}>
          <div className={`col-sm-12  col-3 col-mx-auto`}>
            <Profile></Profile>
          </div>

          <div className={`col-sm-12 col-6 col-mx-auto`}>
            <Projects></Projects>
            <Contact></Contact>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
