import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRefs = useRef({});
  const searchInputRef = useRef(null);
  const headerRef = useRef(null);

  // Handle scroll effect for navbar with throttling
  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality - you can replace with actual implementation
      console.log('Searching for:', searchQuery);
      // Close search after submission
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleToggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleClickOutside = (event) => {
    // Close dropdown if clicked outside
    if (
      activeDropdown && 
      dropdownRefs.current[activeDropdown] && 
      !dropdownRefs.current[activeDropdown].contains(event.target)
    ) {
      setActiveDropdown(null);
    }
    
    // Close search if clicked outside
    if (
      isSearchOpen &&
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target) &&
      event.target.id !== 'search-toggle'
    ) {
      setIsSearchOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
    if (prev) setSearchQuery('');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown, isSearchOpen]);

  // Function to set ref for a dropdown
  const setDropdownRef = (dropdownName) => (element) => {
    dropdownRefs.current[dropdownName] = element;
  };

  // Check if current path matches item path or any of its dropdown paths
  const isActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.hasDropdown && item.dropdownItems) {
      return item.dropdownItems.some(dropdownItem => 
        location.pathname === dropdownItem.path
      );
    }
    return false;
  };

  // Enhanced dropdown menu with animation and arrow
  const DropdownMenu = ({ children, align = 'left' }) => (
    <div className={`absolute z-10 mt-2 ${align === 'right' ? 'right-0' : 'left-0'} w-64 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top-right animate-dropdown border border-gray-100`}>
      <div className="absolute top-0 left-6 -mt-2 w-3 h-3 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
      <div className="relative z-10 py-2 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );

  // Navigation items with their dropdowns
  const navItems = [
    {
      name: 'Home',
      path: '/',
      hasDropdown: false,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'About Us',
      path: '/about',
      hasDropdown: true,
      dropdownName: 'about',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      dropdownItems: [
        { 
          name: 'School Overview', 
          path: '/about/school-overview',
          description: 'Learn about our educational philosophy and approach'
        },
        { 
          name: 'Mission & Vision', 
          path: '/about/mission-vision',
          description: 'Our guiding principles and future goals'
        },
        { 
          name: 'Principal\'s Message', 
          path: '/about/principals-message',
          description: 'A welcome from our school leader'
        },
        { 
          name: 'History', 
          path: '/about/history',
          description: 'Our journey since establishment in 1985'
        },
        { 
          name: 'School Staff', 
          path: '/about/school-staff',
          description: 'Meet our dedicated teaching and administrative team'
        }
      ]
    },
    {
      name: 'Admissions',
      path: '/admissions',
      hasDropdown: true,
      dropdownName: 'admissions',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      dropdownItems: [
        { 
          name: 'Admission Form', 
          path: '/admissions/admission-form',
          description: 'Download and complete our application form'
        },
        { 
          name: 'Admission Process', 

          description: 'Step-by-step guide to joining our school'
        },
        { 
          name: 'Fee Structure', 
          path: '/admissions/fee-structure',
          description: 'Transparent information about tuition and other costs'
        },
        { 
          name: 'Scholarships', 
          path: '/admissions/scholarships',
          description: 'Financial aid opportunities for qualifying students'
        }
      ]
    },
    {
      name: 'Academics',
      path: '/academics',
      hasDropdown: true,
      dropdownName: 'academics',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      dropdownItems: [
        { 
          name: 'Class Schedules', 
          path: '/academics/class-schedules',
          description: 'Daily and weekly timetables for all grades'
        },
        { 
          name: 'Curriculum', 
          path: '/academics/curriculum',
          description: 'Our comprehensive educational programs'
        },
        { 
          name: 'Examination', 
          path: '/academics/examination',
          description: 'Assessment patterns and evaluation criteria'
        },
        { 
          name: 'Homework', 
          path: '/academics/homework',
          description: 'Guidelines and resources for assignments'
        },
        { 
          name: 'Study Material', 
          path: '/academics/study-material',
          description: 'Download curriculum resources and supplements'
        }
      ]
    },
    {
      name: 'Activities',
      path: '/activities',
      hasDropdown: true,
      dropdownName: 'activities',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      dropdownItems: [
        { 
          name: 'Sports', 
          path: '/activities/sports',
          description: 'Physical education and competitive programs'
        },
        { 
          name: 'Arts & Culture', 
          path: '/activities/arts-culture',
          description: 'Music, dance, drama and visual arts'
        },
        { 
          name: 'Clubs', 
          path: '/activities/clubs',
          description: 'Special interest groups and student societies'
        },
        { 
          name: 'Events Calendar', 
          path: '/activities/events-calendar',
          description: 'Upcoming school events and celebrations'
        }
      ]
    },
    {
      name: 'Contact Us',
      path: '/contact',
      hasDropdown: false,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <header 
      ref={headerRef}
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled 
          ? 'bg-white/95 text-blue-700 shadow-lg py-2' 
          : 'bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md' 
                  : 'bg-white text-blue-700 shadow-lg'
              } font-bold text-xl`}>
                SS
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">S.S.Sadan</h1>
                <p className={`text-xs font-medium tracking-wider ${
                  isScrolled ? 'text-blue-600' : 'text-blue-100'
                }`}>Excellence in Education Since 1985</p>
              </div>
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <button
              id="search-toggle"
              onClick={handleSearchToggle}
              className={`p-2 rounded-full transition-all duration-200 ${
                isScrolled
                  ? 'hover:bg-blue-50 text-blue-700'
                  : 'hover:bg-blue-700/50 text-white'
              }`}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Language Selector */}
            <div className="relative" ref={setDropdownRef('language')}>
              <button
                onClick={() => handleToggleDropdown('language')}
                className={`flex items-center space-x-1 p-2 rounded-full transition-all duration-200 ${
                  isScrolled
                    ? 'hover:bg-blue-50 text-blue-700'
                    : 'hover:bg-blue-700/50 text-white'
                }`}
                aria-label="Select Language"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-sm font-medium">EN</span>
              </button>

              {activeDropdown === 'language' && (
                <DropdownMenu align="right">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium">English</button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">हिन्दी (Hindi)</button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">বাংলা (Bengali)</button>
                </DropdownMenu>
              )}
            </div>

           

        
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Search Button (Mobile) */}
            <button
              id="search-toggle"
              onClick={handleSearchToggle}
              className={`p-2 rounded-full ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Menu Toggle Button */}
            <button
              onClick={handleMobileMenuToggle}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name} className="relative" ref={item.hasDropdown ? setDropdownRef(item.dropdownName) : null}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-md inline-flex items-center space-x-1 transition-all duration-200 ${
                      isActive(item) 
                        ? isScrolled 
                          ? 'bg-blue-50 text-blue-700 font-medium' 
                          : 'bg-blue-700/30 text-white font-medium' 
                        : isScrolled 
                          ? 'hover:bg-blue-50 hover:text-blue-700' 
                          : 'hover:bg-blue-700/20 hover:text-white'
                    }`}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        handleToggleDropdown(item.dropdownName);
                      }
                    }}
                  >
                    <span className="flex items-center">
                      {item.icon && <span className="mr-1">{item.icon}</span>}
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.dropdownName ? 'transform rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Enhanced Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.dropdownName && (
                    <DropdownMenu>
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-l-2 border-transparent hover:border-blue-500"
                        >
                          <div className="font-medium">{dropdownItem.name}</div>
                          {dropdownItem.description && (
                            <p className="text-xs text-gray-500 mt-0.5">{dropdownItem.description}</p>
                          )}
                        </Link>
                      ))}
                    </DropdownMenu>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Search Bar Overlay */}
        <div 
          className={`${
            isSearchOpen ? 'opacity-100 pointer-events-auto max-h-20' : 'opacity-0 pointer-events-none max-h-0'
          } transition-all duration-300 ease-in-out mt-4 relative`}
        >
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for anything..."
              className={`w-full p-3 pl-10 pr-12 rounded-lg border ${
                isScrolled ? 'border-gray-200 bg-white' : 'border-blue-400 bg-blue-800/30 text-white placeholder-blue-200'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <div className="absolute left-3 top-3 text-gray-400">
              <svg className={`w-5 h-5 ${isScrolled ? 'text-gray-400' : 'text-blue-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              type="submit"
              className={`absolute right-3 top-2 p-1 rounded-md ${
                isScrolled 
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                  : 'bg-blue-700/30 text-white hover:bg-blue-700/50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>

        {/* Enhanced Mobile Navigation with Animations */}
        <div
          className={`${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-5'
          } lg:hidden overflow-hidden transition-all duration-300 ease-in-out transform`}
        >
          <nav className="mt-4 pb-4">
            <ul className="space-y-1 divide-y divide-opacity-10 divide-current">
              {navItems.map((item) => (
                <li key={item.name} className="pt-1 first:pt-0">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <Link
                        to={item.path}
                        className={`py-2.5 px-2 rounded-md flex items-center space-x-3 ${
                          isActive(item)
                            ? isScrolled 
                              ? 'bg-blue-50 text-blue-700 font-medium' 
                              : 'bg-blue-700/30 text-white font-medium'
                            : ''
                        }`}
                        onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center justify-center w-8 h-8">
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                      {item.hasDropdown && (
                        <button
                          onClick={() => handleToggleDropdown(item.dropdownName)}
                          className={`p-2 rounded-full ${isScrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-blue-700/20'}`}
                          aria-label={`Toggle ${item.name} dropdown`}
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${
                              activeDropdown === item.dropdownName ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {item.hasDropdown && activeDropdown === item.dropdownName && (
                      <div className={`pl-12 pr-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                        activeDropdown === item.dropdownName ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className={`block py-2 px-3 rounded-md text-sm ${
                              location.pathname === dropdownItem.path
                                ? isScrolled 
                                  ? 'bg-blue-50 text-blue-700 font-medium' 
                                  : 'bg-blue-700/20 text-white font-medium'
                                : isScrolled 
                                  ? 'text-blue-600 hover:bg-blue-50' 
                                  : 'text-blue-100 hover:bg-blue-700/20 hover:text-white'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
            {/* Mobile Action Buttons */}
            <nav className="mt-6 space-y-3 px-2">
  <Link
    to="/login"
    className={`flex items-center justify-center space-x-2 py-2.5 rounded-lg text-center ${
      isScrolled
        ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
        : 'bg-blue-700/20 text-white hover:bg-blue-700/30'
    }`}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
    <span>Login</span>
  </Link>
</nav>
  <Link
    to="/admissions/apply-now"
    className={`block py-3 rounded-lg text-center font-semibold ${
      isScrolled
        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow'
        : 'bg-white text-blue-700 shadow-md'
    }`}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Apply Now
  </Link>

  <div className="flex items-center justify-center pt-3 pb-1 border-t border-opacity-10 border-current">
    <button className="px-4 py-2 text-sm rounded-md">
      English
    </button>
    <button className="px-4 py-2 text-sm rounded-md opacity-70">
      हिन्दी
    </button>
    <button className="px-4 py-2 text-sm rounded-md opacity-70">
      বাংলা
    </button>
  </div>
</div>
</div>

</header>
    
  );
}

export default Header;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//   const location = useLocation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const searchInputRef = useRef(null);
//   const headerRef = useRef(null);

//   // Handle scroll effect for navbar with throttling
//   useEffect(() => {
//     let lastScrollY = 0;
//     let ticking = false;

//     const handleScroll = () => {
//       lastScrollY = window.scrollY;
      
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setIsScrolled(lastScrollY > 50);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close menu when route changes
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     setHoveredItem(null);
//   }, [location.pathname]);

//   // Focus search input when search is opened
//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [isSearchOpen]);

//   // Handle search submission
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       console.log('Searching for:', searchQuery);
//       setIsSearchOpen(false);
//       setSearchQuery('');
//     }
//   };

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(prev => !prev);
//     if (isSearchOpen) setIsSearchOpen(false);
//   };

//   const handleSearchToggle = () => {
//     setIsSearchOpen(prev => !prev);
//     if (prev) setSearchQuery('');
//   };

//   // Check if current path matches item path or any of its dropdown paths
//   const isActive = (item) => {
//     if (location.pathname === item.path) return true;
//     if (item.dropdownItems) {
//       return item.dropdownItems.some(dropdownItem => 
//         location.pathname === dropdownItem.path
//       );
//     }
//     return false;
//   };

//   // Navigation items with their dropdowns
//   const navItems = [
//     {
//       name: 'Home',
//       path: '/',
//       icon: (
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//         </svg>
//       )
//     },
//     {
//       name: 'About Us',
//       path: '/about',
//       icon: (
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       dropdownItems: [
//         { name: 'School Overview', path: '/about/school-overview' },
//         { name: 'Mission & Vision', path: '/about/mission-vision' },
//         { name: 'Principal\'s Message', path: '/about/principals-message' },
//         { name: 'History', path: '/about/history' },
//         { name: 'School Staff', path: '/about/school-staff' }
//       ]
//     },
//     {
//       name: 'Admissions',
//       path: '/admissions',
//       icon: (
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//         </svg>
//       ),
//       dropdownItems: [
//         { name: 'Admission Form', path: '/admissions/admission-form' },
//         { name: 'Admission Process', path: '/admissions/admission-process' },
//         { name: 'Fee Structure', path: '/admissions/fee-structure' },
//         { name: 'Scholarships', path: '/admissions/scholarships' }
//       ]
//     },
//     {
//       name: 'Academics',
//       path: '/academics',
//       icon: (
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//         </svg>
//       ),
//       dropdownItems: [
//         { name: 'Class Schedules', path: '/academics/class-schedules' },
//         { name: 'Curriculum', path: '/academics/curriculum' },
//         { name: 'Examination', path: '/academics/examination' },
//         { name: 'Homework', path: '/academics/homework' },
//         { name: 'Study Material', path: '/academics/study-material' }
//       ]
//     },
//     {
//       name: 'Activities',
//       path: '/activities',
//       icon: (
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       dropdownItems: [
//         { name: 'Sports', path: '/activities/sports' },
//         { name: 'Arts & Culture', path: '/activities/arts-culture' },
//         { name: 'Clubs', path: '/activities/clubs' },
//         { name: 'Events Calendar', path: '/activities/events-calendar' }
//       ]
//     },
//     {
//       name: 'Contact Us',
//       path: '/contact',
//       icon: (
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <header 
//       ref={headerRef}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/95 text-blue-700 shadow-md py-2' 
//           : 'bg-blue-700 text-white py-3'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//               isScrolled 
//                 ? 'bg-blue-600 text-white' 
//                 : 'bg-white text-blue-700'
//             } font-bold text-lg`}>
//               SS
//             </div>
//             <div>
//               <h1 className="text-xl font-bold">S.S.Sadan</h1>
//               <p className={`text-xs ${isScrolled ? 'text-blue-500' : 'text-blue-100'}`}>
//                 Est. 1985
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:block">
//             <ul className="flex">
//               {navItems.map((item) => (
//                 <li 
//                   key={item.name} 
//                   className="relative"
//                   onMouseEnter={() => item.dropdownItems && setHoveredItem(item.name)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   <Link
//                     to={item.path}
//                     className={`px-3 py-2 mx-1 rounded-md flex items-center transition-all duration-200 ${
//                       isActive(item) 
//                         ? isScrolled 
//                           ? 'bg-blue-50 text-blue-700 font-medium' 
//                           : 'bg-blue-600 text-white font-medium' 
//                         : ''
//                     }`}
//                   >
//                     <span className="mr-1">{item.icon}</span>
//                     {item.name}
//                     {item.dropdownItems && (
//                       <svg 
//                         className="ml-1 w-4 h-4" 
//                         fill="none" 
//                         stroke="currentColor" 
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     )}
//                   </Link>

//                   {/* Dropdown Menu */}
//                   {item.dropdownItems && hoveredItem === item.name && (
//                     <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg overflow-hidden border border-gray-100 animate-fadeIn">
//                       <div className="py-1">
//                         {item.dropdownItems.map((dropdownItem) => (
//                           <Link
//                             key={dropdownItem.path}
//                             to={dropdownItem.path}
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
//                           >
//                             {dropdownItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Desktop Action Buttons */}
//           <div className="hidden lg:flex items-center space-x-2">
//             {/* Search Button */}
//             <button
//               onClick={handleSearchToggle}
//               className={`p-2 rounded-full ${
//                 isScrolled ? 'hover:bg-blue-50' : 'hover:bg-blue-600'
//               }`}
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>

//             {/* Login Button */}
//             <Link
//               to="/login"
//               className={`px-3 py-1.5 rounded-md flex items-center ${
//                 isScrolled ? 'border border-blue-100 hover:bg-blue-50' : 'border border-blue-600 hover:bg-blue-600'
//               }`}
//             >
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//               </svg>
//               <span className="text-sm">Login</span>
//             </Link>

//             {/* Apply Button */}
//             <Link
//               to="/admissions/apply-now"
//               className={`px-4 py-1.5 rounded-md font-medium ${
//                 isScrolled
//                   ? 'bg-blue-600 text-white hover:bg-blue-700'
//                   : 'bg-white text-blue-700 hover:bg-blue-50'
//               }`}
//             >
//               Apply Now
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center space-x-2">
//             <button
//               onClick={handleSearchToggle}
//               className="p-2"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//             <button
//               onClick={handleMobileMenuToggle}
//               className="p-2"
//             >
//               {isMobileMenuOpen ? (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Search Bar */}
//         {isSearchOpen && (
//           <div className="mt-3 transition-all duration-200">
//             <form onSubmit={handleSearchSubmit} className="relative">
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search..."
//                 className={`w-full p-2 pl-10 rounded-md ${
//                   isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white placeholder-blue-200'
//                 } focus:outline-none`}
//               />
//               <div className="absolute left-3 top-2.5">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <nav className="mt-3 lg:hidden">
//             <ul className="space-y-1 pb-3">
//               {navItems.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.path}
//                     className={`flex justify-between items-center p-2 rounded-md ${
//                       isActive(item) 
//                         ? isScrolled 
//                           ? 'bg-blue-50 text-blue-700' 
//                           : 'bg-blue-600 text-white' 
//                         : ''
//                     }`}
//                     onClick={() => !item.dropdownItems && setIsMobileMenuOpen(false)}
//                   >
//                     <div className="flex items-center">
//                       <span className="mr-2">{item.icon}</span>
//                       <span>{item.name}</span>
//                     </div>
//                     {item.dropdownItems && (
//                       <button
//                         onClick={(e) => {
//                           e.preventDefault();
//                           e.stopPropagation();
//                           setHoveredItem(hoveredItem === item.name ? null : item.name);
//                         }}
//                       >
//                         <svg 
//                           className={`w-4 h-4 transform ${hoveredItem === item.name ? 'rotate-180' : ''}`} 
//                           fill="none" 
//                           stroke="currentColor" 
//                           viewBox="0 0 24 24"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </button>
//                     )}
//                   </Link>
                  
//                   {/* Mobile Dropdown */}
//                   {item.dropdownItems && hoveredItem === item.name && (
//                     <div className="ml-8 mt-1 space-y-1">
//                       {item.dropdownItems.map((dropdownItem) => (
//                         <Link
//                           key={dropdownItem.path}
//                           to={dropdownItem.path}
//                           className={`block p-2 rounded-md text-sm ${
//                             location.pathname === dropdownItem.path
//                               ? isScrolled 
//                                 ? 'bg-blue-50 text-blue-700' 
//                                 : 'bg-blue-600 text-white' 
//                               : ''
//                           }`}
//                           onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                           {dropdownItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </li>
//               ))}
//               <li className="pt-2 mt-2 border-t border-gray-200 border-opacity-20">
//                 <Link
//                   to="/login"
//                   className={`flex items-center p-2 rounded-md ${
//                     isScrolled ? 'bg-blue-50 text-blue-700' : 'bg-blue-600 text-white'
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//                   </svg>
//                   Login
//                 </Link>
//               </li>
//               <li className="mt-2">
//                 <Link
//                   to="/admissions/apply-now"
//                   className={`block text-center p-2 rounded-md font-medium ${
//                     isScrolled 
//                       ? 'bg-blue-600 text-white' 
//                       : 'bg-white text-blue-700'
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Apply Now
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;