import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import SchoolOverview from './pages/about/SchoolOverview';
import MissionVision from './pages/about/MissionVision';
import PrincipalsMessage from './pages/about/PrincipalsMessage';
import History from './pages/about/History';
import SchoolStaff from './pages/about/SchoolStaff';
import Admissions from './pages/admissions/Admissions';
import AdmissionForm from './pages/admissions/AdmissionForm';
import FeeStructure from './pages/admissions/FeeStructure';
import Academics from './pages/academics/Academics';
import ClassSchedules from './pages/academics/ClassSchedules';
import Curriculum from './pages/academics/Curriculum';
import Examination from './pages/academics/Examination';
import Homework from './pages/academics/Homework';
import StudyMaterial from './pages/academics/StudyMaterial';
import Activities from './pages/activities/Activities';
import Contact from './pages/contact/Contact';
import Header from './components/Header';
import Footer from './components/common/Footer';
import Scholarship from './pages/admissions/Scholarship';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Add a container with top padding to create space below the header */}
        <main className="mt-4 pt-16 md:pt-20"> {/* Adjust pt value based on your header height */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />}> {/* Changed to About */}
              <Route index element={<SchoolOverview />} /> {/* Default route */}
              <Route path="school-overview" element={<SchoolOverview />} />
              <Route path="mission-vision" element={<MissionVision />} />
              <Route path="principals-message" element={<PrincipalsMessage />} />
              <Route path="history" element={<History />} />
              <Route path="school-staff" element={<SchoolStaff />} />
            </Route>
            <Route path="/admissions/*" element={<Admissions />}> {/* Changed to Admissions */}
              <Route index element={<AdmissionForm />} /> {/* Default route */}
              <Route path="admission-form" element={<AdmissionForm />} />
              <Route path="fee-structure" element={<FeeStructure />} />
              <Route path='scholarships' element={<Scholarship/>}/>
            </Route>
            <Route path="/academics/*" element={<Academics />}> {/* Changed to Academics */}
              <Route index element={<ClassSchedules />} /> {/* Default route */}
              <Route path="class-schedules" element={<ClassSchedules />} />
              <Route path="curriculum" element={<Curriculum />} />
              <Route path="examination" element={<Examination />} />
              <Route path="homework" element={<Homework />} />
              <Route path="study-material" element={<StudyMaterial />} />
            </Route>
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;