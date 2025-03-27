import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  Home, 
  Info, 
  Book, 
  Globe, 
  Mail, 
  LogIn, 
  FileText, 
  Activity,
  ChevronRight
} from 'lucide-react';

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  const menuItems = [
    {
      name: 'Home',
      icon: Home,
      path: '/',
      submenu: []
    },
    {
      name: 'About Us',
      icon: Info,
      path: '/about',
      submenu: [
        { name: 'School Overview', path: '/about/school-overview' },
        { name: 'Mission & Vision', path: '/about/mission-vision' },
        { name: 'Principal\'s Message', path: '/about/principals-message' },
        { name: 'History', path: '/about/history' },
        { name: 'School Staff', path: '/about/school-staff' }
      ]
    },
    {
      name: 'Admissions',
      icon: FileText,
      path: '/admissions',
      submenu: [
        { name: 'Admission Form', path: '/admissions/admission-form' },
        { name: 'Admission Process', path: '/admissions/process' },
        { name: 'Fee Structure', path: '/admissions/fee-structure' },
        { name: 'Scholarships', path: '/admissions/scholarships' }
      ]
    },
    {
      name: 'Academics',
      icon: Book,
      path: '/academics',
      submenu: [
        { name: 'Class Schedules', path: '/academics/class-schedules' },
        { name: 'Curriculum', path: '/academics/curriculum' },
        { name: 'Examination', path: '/academics/examination' },
        { name: 'Homework', path: '/academics/homework' },
        { name: 'Study Material', path: '/academics/study-material' }
      ]
    },
    {
      name: 'Activities',
      icon: Activity,
      path: '/activities',
      submenu: [
        { name: 'Sports', path: '/activities/sports' },
        { name: 'Arts & Culture', path: '/activities/arts-culture' },
        { name: 'Clubs', path: '/activities/clubs' },
        { name: 'Events Calendar', path: '/activities/events-calendar' }
      ]
    },
    {
      name: 'Contact Us',
      icon: Mail,
      path: '/contact',
      submenu: []
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-4 flex justify-between items-center lg:hidden">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold">
            SS
          </div>
          <div>
            <h1 className="text-xl font-bold">S.S.Sadan</h1>
            <p className="text-xs text-blue-100">Excellence in Education</p>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => {/* Implement search functionality */}}
            className="p-2 rounded-full hover:bg-blue-700/50"
          >
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-blue-700/50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Slide-out Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          } transition-opacity duration-300`}
          onClick={toggleMenu}
        />

        {/* Menu Content */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-700">Menu</h2>
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="overflow-y-auto h-[calc(100vh-120px)]">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100">
                <div 
                  className={`flex justify-between items-center p-4 cursor-pointer ${
                    item.submenu.length > 0 ? 'hover:bg-blue-50' : ''
                  }`}
                  onClick={() => {
                    if (item.submenu.length > 0) {
                      toggleSubmenu(item.name);
                    } else {
                      toggleMenu();
                    }
                  }}
                >
                  <Link 
                    to={item.path} 
                    className="flex items-center space-x-3 w-full"
                  >
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-800 font-medium">{item.name}</span>
                  </Link>
                  {item.submenu.length > 0 && (
                    <ChevronRight 
                      className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                        activeSubmenu === item.name ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </div>

                {/* Submenu */}
                {item.submenu.length > 0 && activeSubmenu === item.name && (
                  <div className="bg-blue-50 py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        to={subitem.path}
                        className="block px-6 py-2.5 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                        onClick={toggleMenu}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 space-y-3">
            <Link
              to="/login"
              className="w-full py-3 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-100"
              onClick={toggleMenu}
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/admissions/apply-now"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-indigo-800"
              onClick={toggleMenu}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;