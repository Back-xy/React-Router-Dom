import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

// Layouts
import RootLayout from './Layouts/RootLayout';
import HelpLayout from './Layouts/HelpLayout';
import CareersLayout from './Layouts/CareersLayout';

// Pages
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import Careers, { careersLoader } from './pages/careers/Careers';
import Career, { careerLoader } from './pages/careers/Career';
import CareersError from './pages/careers/CareersError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path='careers'
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=':id' element={<Career />} loader={careerLoader} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
