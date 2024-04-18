import { Accordion } from "@/components/atoms";

export const UseCaseSection = () => {
  return (
    <section id="use-case" className="py-10 lg:py-[96px]">
      <div className="container">
        <h2 className="text-h2 font-bold text-core-blue mb-[12px]">
          Use cases
        </h2>
        <p className="text-p1 text-core-blue">
          Lorem ipsum dolor sit amet consectetur. Quisque sit a pulvinar velit
          nec dui id. Auctor morbi purus sed sit. At fames imperdiet amet
          elementum imperdiet. Lobortis curabitur mi arcu consectetur ac egestas
          urna
        </p>
        <div className="mt-10">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
};

const items = [
  {
    title: "Use case 1 (UC1): Acquisition",
    content: `This UC illustrates a modification of the coverage option.
    ![UseCase](/oda/open-apis/images/faq-2.png)`,
  },
  {
    title: "Use case 2 (UC2): Modification",
    content: `
- The Open Gateway APIs will be consumed by ‘end-user’ developers i.e., developers consuming connectivity capabilities, without requiring any knowledge of how the underlying network technologies work. 
- For example, a CPaaS provider (such as Zoom or Teams), cloud gaming or immersive content provider could offer its customers a ‘boost’ button to temporarily deliver higher bandwidth and lower latency for a particular service. Using the CAMARA Open Gateway Quality on Demand API, the developer could access this capability for all their users worldwide, even though they will be connected on different networks. This is the use case explored in our CAMARA Catalyst, [5G Enablement through industry standardized APIs](https://myaccount.tmforum.org/networks/23-5-451/index.html). 
- The primary users are application developers / content and gaming developers / software developers (i.e, the mobile industry’s direct and indirect B2B customers).
- Secondary users are MNO enterprise customers who have exposure to more value-add services which can be sold to their end consumer, therefore improving end user service experiences.
    `,
  },
  {
    title: "Use case 3 (UC1): Lorum ipsum dolor sit",
    content: `
#### What is GSMA Open Gateway?
- GSMA Open Gateway is a framework of Application Programmable Interfaces (APIs), playbooks and business templates, designed to provide universal access to operator networks for developers and hyperscalers.
- This initiative enables developers to break into new markets, offering new services and functionality to customers.  It also facilitates faster and more efficient negotiations between Mobile Network Operators (MNOs) and third parties by removing the risk of contradictory terms and conditions from different MNOs.
- The GSMA Open Gateway global initiative aims to build on GSMA’s expertise to support its members in the exposure and monetisation of telecommunication network capabilities through Open APIs and universal federation.

#### How is TM Forum involved in Open Gateway?

- TM Forum's Open API Project is building and publishing Open Gateway's Operate APIs (see below), providing Operation, Administration and Management (OAM) capabilities for the Open Gateway initiative.
- The engine for Open Gateway API development is an open source project within Linux Foundation called CAMARA.  TM Forum, represented by our CTO on the CAMARA Steering Committee, collaborates closely with CAMARAs architects. A sub-team of leading architects from TM Forum's Open API member collaboration project are also working with the CAMARA team to help design and specify the patterns for the APIs, leveraging TM Forum Open APIs to address operations and management needs, and to leverage our experience.  
- TM Forum is also taking a practical approach, testing Open APIs and CAMARA APIs using the Catalyst rapid innovation program. The first CAMARA Catalyst project was launched in December 2022, supported by 20 TM Forum member companies (including the leading players in CAMARA and Open Gateway). 
    `,
  },
];
