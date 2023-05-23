import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import SubNavigation from './Navigation/SubNavigation';
import RelatedLink from './RelatedLink/RelatedLink';

const Layout = ({ children }) => {
  const logoSrc = '/oda/open-apis/table/images/tmf-logo.svg';

  const navigationLinks = [
    {
      name: 'Knowledge',
      children: [
        {
          name: 'Knowledge overview',
          href: 'https://www.tmforum.org/knowledge/',
          children: [],
        },
        {
          name: 'Research & insights',
          href: 'https://inform.tmforum.org/?_gl=1%2a7m32kn%2a_ga%2aMTc4NTI0MzkyLjE2NzMyNzI2OTM.%2a_ga_W21R8NVK4E%2aMTY4MTI5NjU5OS42NC4xLjE2ODEyOTkzNjIuMC4wLjA.%2a_ga_KQXXW9EY6Y%2aMTY4MTI5OTMwNy4zOS4xLjE2ODEyOTkzNjIuMC4wLjA.&_ga=2.125200778.1084475829.1681218920-178524392.1673272693',
          children: [],
        },
        {
          name: 'Themes',
          href: 'https://www.tmforum.org/',
          children: [
            {
              name: 'AI, Data + Insights',
              href: 'https://www.tmforum.org/themes-ai-data-insights/',
            },
            {
              name: 'Autonomous Operations',
              href: 'https://www.tmforum.org/themes-autonomous-operations/',
            },
            {
              name: 'Beyond Connectivity',
              href: 'https://www.tmforum.org/themes-beyond-connectivity/',
            },
            {
              name: 'Cloud Native IT + Networks',
              href: 'https://www.tmforum.org/themes-cloud-native-it-networks/',
            },
            {
              name: 'Customer Experience + Trust',
              href: 'https://www.tmforum.org/themes-customer-experience-trust/',
            },
            {
              name: 'The Human Factor',
              href: 'https://www.tmforum.org/themes-the-human-factor/',
            },
          ],
        },
      ],
    },
    {
      name: 'Labs',
      children: [
        {
          name: 'Labs overview',
          href: 'https://www.tmforum.org/labs/',
          children: [],
        },
        {
          name: 'Catalyst Program',
          href: 'https://www.tmforum.org/catalyst-program/',
          children: [
            {
              name: 'Open Innovation Catalyst',
              href: 'https://www.tmforum.org/catalyst-program/open-innovation-catalyst-program/',
            },
            {
              name: 'Moonshot Catalyst',
              href: 'https://www.tmforum.org/catalyst-program/moonshot-catalyst-program/',
            },
            {
              name: 'Catalyst projects',
              href: 'https://myaccount.tmforum.org/catalysts?_ga=2.197462447.1084475829.1681218920-178524392.1673272693&_gl=1*s61ihf*_ga*MTc4NTI0MzkyLjE2NzMyNzI2OTM.*_ga_W21R8NVK4E*MTY4MTI5NjU5OS42NC4xLjE2ODEyOTk4NjkuMC4wLjA.*_ga_KQXXW9EY6Y*MTY4MTI5OTMwNy4zOS4xLjE2ODEyOTk4NTguMC4wLjA.',
            },
          ],
        },
        {
          name: 'Member projects',
          href: 'https://myaccount.tmforum.org/joinproject',
          children: [],
        },
        {
          name: 'Global Architecture Forum (GAF)',
          href: 'https://www.tmforum.org/global-architecture-forum/',
          children: [],
        },
      ],
    },
    {
      name: 'Code + frameworks',
      children: [
        {
          name: 'Code + frameworks overview',
          href: 'https://www.tmforum.org/code-frameworks/',
          children: [],
        },
        {
          name: 'Open Digital Framework (ODF)',
          href: 'https://www.tmforum.org/opendigitalframework/',
          children: [
            {
              name: 'Member resources',
              href: 'https://www.tmforum.org/resources/',
            },
            {
              name: 'Member toolkits',
              href: 'https://www.tmforum.org/oda/how-to-use-oda/',
            },
            {
              name: 'Intent-based Automation',
              href: 'https://www.tmforum.org/opendigitalframework/intent-based-automation/',
            },
            {
              name: 'CaaS',
              href: 'https://www.tmforum.org/opendigitalframework/caas/',
            },
          ],
        },
        {
          name: 'Open APIs',
          href: 'https://www.tmforum.org/oda/about-open-apis/',
          children: [],
        },
        {
          name: 'Open Digital Architecture (ODA)',
          href: 'https://www.tmforum.org/oda/',
          children: [
            {
              name: 'ODA Interactive Map',
              href: 'https://www.tmforum.org/oda-interactive-map/',
            },
            {
              name: 'ODA for CSPs',
              href: 'https://www.tmforum.org/oda/oda-for-csps/',
            },
            {
              name: 'Governance',
              href: 'https://www.tmforum.org/oda/governance/',
            },
            {
              name: 'Business Architecture',
              href: 'https://www.tmforum.org/oda/business/',
            },
            {
              name: 'Information Systems',
              href: 'https://www.tmforum.org/oda/information-systems/',
            },
            {
              name: 'Implementation Architecture',
              href: 'https://www.tmforum.org/oda/implementation/',
            },
            {
              name: 'Deployment and Runtime',
              href: 'https://www.tmforum.org/oda/deployment-runtime/',
            },
          ],
        },
        {
          name: 'Business Process Framework (eTOM)',
          href: 'https://www.tmforum.org/oda/business/process-framework-etom/',
          children: [],
        },
        {
          name: 'Information Framework (SID)',
          href: 'https://www.tmforum.org/oda/information-systems/information-framework-sid/',
          children: [],
        },
      ],
    },
    {
      name: 'Training + accreditation',
      children: [
        {
          name: 'Training + accreditation overview',
          href: 'https://www.tmforum.org/training-accreditation/',
          children: [],
        },
        {
          name: 'Training',
          href: 'https://www.tmforum.org/training-certification/',
          children: [
            {
              name: 'Training course',
              href: 'https://www.tmforum.org/training-certification/course-catalog/',
            },
            {
              name: 'Enterprise training',
              href: 'https://www.tmforum.org/training-certification/enterprise-training/',
            },
            {
              name: 'Skill paths',
              href: 'https://www.tmforum.org/training-certification/skill-paths/',
            },
          ],
        },
        {
          name: 'Conformance',
          href: 'https://www.tmforum.org/conformance-certification/',
          children: [],
        },
        {
          name: 'Services',
          href: 'https://www.tmforum.org/services/',
          children: [],
        },
      ],
    },
    {
      name: 'Events',
      children: [
        {
          name: 'Upcoming events + webinars',
          href: 'https://www.tmforum.org/tm-forum-events/?upcoming=true',
        },
        {
          name: 'Sponsorship opportunities',
          href: 'https://www.tmforum.org/membership/getting-started/sponsorship-opportunities/',
        },
      ],
    },
    {
      name: 'Membership',
      children: [
        {
          name: 'About Membership',
          href: 'https://www.tmforum.org/membership/',
        },
        {
          name: 'Benefits',
          href: 'https://www.tmforum.org/membership/benefits/',
        },
        {
          name: 'Current members',
          href: 'https://www.tmforum.org/membership/current-members/',
        },
        {
          name: 'Become a member',
          href: 'https://www.tmforum.org/membership/how-to-join/',
        },
      ],
    },
  ];

  return (
    <>
      <Navigation logoSrc={logoSrc} navigationLinks={navigationLinks} />
      <SubNavigation />
      <main>{children}</main>
      <RelatedLink />
      <Footer />
    </>
  );
};

export default Layout;
