// Feature-based lazy loading with webpackChunkName comments for better chunk organization
import { lazy } from 'react';

// Heavy components with explicit chunk names
export const About = lazy(() => 
  import(/* webpackChunkName: "about-page" */ '../../pages/About')
);

export const Services = lazy(() => 
  import(/* webpackChunkName: "services-page" */ '../../pages/Services')
);

export const Portfolio = lazy(() => 
  import(/* webpackChunkName: "portfolio-page" */ '../../pages/Portfolio')
);

export const Contact = lazy(() => 
  import(/* webpackChunkName: "contact-page" */ '../../pages/Contact')
);

// Heavy utility components
export const AboutMe = lazy(() => 
  import(/* webpackChunkName: "about-me-component" */ '../AboutMe')
);

export const CardImage = lazy(() => 
  import(/* webpackChunkName: "card-image-component" */ '../atom/CardImage')
);

// Third-party libraries that can be split
export const FormspreeForm = lazy(() => 
  import(/* webpackChunkName: "formspree-integration" */ '../atom/ChatInput')
);
