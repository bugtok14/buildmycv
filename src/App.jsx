import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [isEditable, setIsEditable] = React.useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Header isEditable={isEditable} setIsEditable={setIsEditable} />
      <div id="resume" className="max-w-4xl mx-auto py-1 px-4 md:px-0">
        <div className="pt-11 pb-8">
          <Profile isEditable={isEditable} />
          <Education isEditable={isEditable} />
          <Skills isEditable={isEditable} />
          <Experience isEditable={isEditable} />
          <Portfolio isEditable={isEditable} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;