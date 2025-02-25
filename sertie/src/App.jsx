import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '@/pages/Home';
import About from '@/pages/about/Page';
import OurMentors from '@/pages/our-mentors/Page';
import Pricing from '@/pages/pricing/Page';
import Register from '@/pages/register/Page';
import SignIn from '@/pages/sign-in/Page';

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PageWithTitle title="Home" component={<Home />} />}
          />
          <Route
            path="/about"
            element={<PageWithTitle title="About Us" component={<About />} />}
          />
          <Route
            path="/our-mentors"
            element={<PageWithTitle title="Our Mentors" component={<OurMentors />} />}
          />
          <Route
            path="/pricing"
            element={<PageWithTitle title="Pricing" component={<Pricing />} />}
          />
          <Route
            path="/register"
            element={<PageWithTitle title="Register" component={<Register />} />}
          />
          <Route
            path="/sign-in"
            element={<PageWithTitle title="Sign In" component={<SignIn />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

function PageWithTitle({ title, component }) {
  useEffect(() => {
    document.title = `${title} / Sertie`;
  }, [title]);

  return component;
}

export default App;
