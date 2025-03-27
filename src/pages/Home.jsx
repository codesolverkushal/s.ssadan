import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X, 
  GraduationCap, 
  Calendar, 
  Book, 
  Award, 
  Bell, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Users, 
  ChevronDown,
  Search,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SchoolHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef(null);
  
  // Enhanced color scheme
  const colors = {
    primary: '#1e3a8a', // Deeper blue for better contrast
    secondary: '#3b82f6', // Bright blue
    accent: '#f59e0b', // Amber
    dark: '#0f172a', // Darker slate for better contrast
    light: '#f8fafc', // Slate light
  };
  
  // Carousel images with enhanced content
  const carouselItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Welcome to S.S.Sadan",
      subtitle: "Nurturing Minds, Shaping Futures Since 1985",
      cta: "Discover Our Programs"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sfGVufDB8fDB8fHww",
      title: "Excellence in Education",
      subtitle: "Where Knowledge Meets Character Development",
      cta: "Our Approach"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sfGVufDB8fDB8fHww",
      title: "Discover Your Potential",
      subtitle: "Learn, Grow, Succeed in a Supportive Environment",
      cta: "Student Life"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1532716377393-5ffbea548d05?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Building Tomorrow's Leaders",
      subtitle: "Innovation, Integrity, Excellence in Everything We Do",
      cta: "Our Achievements"
    }
  ];

  // Navigation items (keeping as in original code)
  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#", submenu: [
      { name: "Our History", link: "#" },
      { name: "Mission & Vision", link: "#" },
      { name: "Leadership", link: "#" },
    ]},
    { name: "Academics", link: "#", submenu: [
      { name: "Curriculum", link: "#" },
      { name: "Departments", link: "#" },
      { name: "Faculty", link: "#" },
    ]},
    { name: "Admissions", link: "#" },
    { name: "Campus Life", link: "#" },
    { name: "News & Events", link: "#" },
    { name: "Contact", link: "#" }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Sticky header functionality
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  // Enhanced features section data
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12" style={{ color: colors.primary }} />,
      title: "Academic Excellence",
      description: "Our rigorous curriculum and dedicated faculty prepare students for future success in a competitive world."
    },
    {
      icon: <Award className="w-12 h-12" style={{ color: colors.primary }} />,
      title: "Holistic Development",
      description: "We focus on character building, leadership, and extracurricular activities alongside academic achievement."
    },
    {
      icon: <Book className="w-12 h-12" style={{ color: colors.primary }} />,
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure including advanced labs, library, sports facilities, and digital classrooms."
    },
    {
      icon: <Users className="w-12 h-12" style={{ color: colors.primary }} />,
      title: "Diverse Community",
      description: "A welcoming environment that celebrates diversity and encourages global citizenship and cultural awareness."
    }
  ];

  // News & Events enhanced data
  const newsEvents = [
    {
      id: 1,
      image: "/api/placeholder/600/400",
      date: "March 15, 2025",
      title: "Annual Science Exhibition",
      description: "Our students showcased their innovative projects at the annual science exhibition, demonstrating critical thinking and creativity."
    },
    {
      id: 2,
      image: "/api/placeholder/600/400",
      date: "March 10, 2025",
      title: "Sports Day Celebration",
      description: "Students participated enthusiastically in various sports activities during our annual sports day, promoting teamwork and physical fitness."
    },
    {
      id: 3,
      image: "/api/placeholder/600/400",
      date: "March 5, 2025",
      title: "Cultural Festival",
      description: "Our annual cultural festival celebrated the diversity and talents of our students through performances, exhibitions, and workshops."
    },
    {
      id: 4,
      image: "/api/placeholder/600/400",
      date: "February 28, 2025",
      title: "International Education Conference",
      description: "Our school hosted an international education conference with speakers from various countries sharing innovative teaching methodologies."
    }
  ];

  // Upcoming events data with enhanced styling
  const upcomingEvents = [
    {
      date: "April 5, 2025",
      title: "Parent-Teacher Meeting",
      time: "9:00 AM - 2:00 PM"
    },
    {
      date: "April 12, 2025",
      title: "Career Guidance Workshop",
      time: "11:00 AM - 1:00 PM"
    },
    {
      date: "April 20, 2025",
      title: "Annual Sports Competition",
      time: "8:30 AM - 4:00 PM"
    }
  ];

  // Enhanced testimonials data
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      image: "/api/placeholder/100/100",
      quote: "S.S.Sadan has provided my child with not just academic excellence but also valuable life skills. The teachers are dedicated and caring, and the school's approach to education is holistic and progressive."
    },
    {
      name: "Rahul Patel",
      role: "Alumni, Class of 2020",
      image: "/api/placeholder/100/100",
      quote: "My years at S.S.Sadan shaped me into who I am today. The school's focus on both academics and extracurricular activities gave me a well-rounded education that prepared me for university and beyond."
    },
    {
      name: "Dr. Anita Singh",
      role: "Parent & Education Expert",
      image: "/api/placeholder/100/100",
      quote: "As both a parent and an education professional, I appreciate S.S.Sadan's innovative teaching methods and commitment to individual student growth. The faculty truly understands modern educational needs."
    },
    {
      name: "Vikram Mehta",
      role: "Alumni, Class of 2018",
      image: "/api/placeholder/100/100",
      quote: "The values instilled in me during my time at S.S.Sadan have been instrumental in my career success. The school teaches not just subjects but how to be a thoughtful and responsible citizen."
    }
  ];

  // Achievement tabs with enhanced content
  const achievementTabs = [
    {
      title: "Academic",
      content: [
        "100% graduation rate for the past 10 years",
        "25% of graduates receive scholarships to prestigious universities",
        "National Science Olympiad winners for 3 consecutive years",
        "Regional Mathematics Competition champions"
      ]
    },
    {
      title: "Sports",
      content: [
        "State Football Champions 2024",
        "National Swimming Competition - 5 gold medals",
        "Regional Athletics Meet - Overall Champions",
        "National Cricket Tournament runners-up"
      ]
    },
    {
      title: "Arts",
      content: [
        "National Youth Theatre Award winners",
        "International Art Exhibition participants",
        "State Music Festival - 1st place in choir",
        "National Dance Competition finalists"
      ]
    },
    {
      title: "Innovation",
      content: [
        "Smart School Innovation Award 2024",
        "Student startup incubation program",
        "Renewable energy campus project",
        "National Robotics Competition winners"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
    {/* Top header with contact info */}
    
    
    {/* Main Navigation */}
    <header className={`bg-white shadow-md transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 animate-slideDown' : ''}`}>
           
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a 
                    href={item.link} 
                    className="flex items-center justify-between text-gray-700 py-2"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </a>
                  
                  {item.submenu && (
                    <div className="pl-4 mt-1 border-l-2 border-gray-200 space-y-1">
                      {item.submenu.map((subitem, subindex) => (
                        <a 
                          key={subindex} 
                          href={subitem.link}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-900"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
    
    {/* Enhanced Hero Carousel */}
    <div className="relative h-96 md:h-128 lg:h-screen/3 xl:h-screen/2 overflow-hidden" ref={carouselRef}>
      {/* Carousel slides with enhanced styling */}
      {carouselItems.map((item, index) => (
        <div 
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
            transition: 'transform 6s ease-in-out, opacity 1s ease-in-out',
          }}
        >
          <img 
            src={item.image} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div 
            className="absolute inset-0 flex flex-col items-start justify-center text-white p-8 md:p-16 lg:p-24"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s',
            }}
          >
            <div className="max-w-3xl">
              <div className="w-16 h-1 bg-blue-500 mb-6 rounded"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fadeInUp">{item.title}</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">{item.subtitle}</p>
              <button className="px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-md shadow-lg transition-colors flex items-center group">
                {item.cta}
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Enhanced carousel controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all z-20 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all z-20 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Enhanced carousel indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-10' 
                : 'bg-white bg-opacity-50 w-3 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
      
      {/* Enhanced Announcement Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <Bell className="h-5 w-5 mr-2 animate-pulse" />
            <span className="font-medium">Admissions Open for 2025-26 Academic Year</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Welcome Section with Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-16">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Campus" 
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-xl font-bold">38+ Years</p>
                  <p>of Educational Excellence</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome to S.S.Sadan</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At S.S.Sadan, we believe in providing a nurturing environment where students can discover their potential and develop into confident, responsible citizens. Founded in 1985, our institution has established itself as a center of academic excellence and character development.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our mission is to inspire and empower students to become lifelong learners and global citizens who contribute positively to society. Through a balanced approach to education, we focus on academic excellence, character development, and social responsibility.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-md transition-colors flex items-center group">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors flex items-center">
                  Virtual Tour
               
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Quick Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">1985</div>
              <div className="text-blue-200">Established</div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">1500+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Faculty</div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose S.S.Sadan?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing a supportive and enriching environment where students can develop academically, socially, and emotionally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300 border-t-4" style={{ borderColor: colors.primary }}>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3" style={{ color: colors.primary }}>{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-md transition-colors flex items-center mx-auto group">
              Explore Our Facilities
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Enhanced Achievements Section with Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in our students' accomplishments across various domains.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            {/* Tab Navigation */}
            <div className="flex border-b">
              {achievementTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 text-center py-4 font-medium transition-colors ${
                    activeTab === index 
                      ? 'border-b-2 border-blue-600 text-blue-900 bg-blue-50' 
                      : 'text-gray-500 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            
            {/* Tab Content with enhanced styling */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievementTabs[activeTab].content.map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 p-1">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-blue-400 transition-colors"></div>
                    </div>
                    <p className="ml-4 text-gray-700 group-hover:text-blue-900 transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </div>
  );
}

  export default SchoolHomepage;
            
        
      