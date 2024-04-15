import { Accordion } from "@/components/atoms";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-10 lg:py-[96px]">
      <div className="container">
        <h2 className="text-h1 mb-[12px] font-bold text-core-blue">
          Frequently Asked Questions
        </h2>

        <div className="mt-10">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
};

const items = [
  {
    title: "What is CAMARA?",
    content: `
CAMARA is an open-source project within Linux Foundation to define, develop and test the APIs. CAMARA works in close collaboration with the GSMA Operator Platform Group to align API requirements and publish API definitions and APIs. Harmonization of APIs is achieved through fast and agile created working code with developer-friendly documentation. API definitions and reference implementations are free to use (Apache2.0 license). Availability across telco networks and countries is necessary:

- To ensure seamless customer experience
- To accelerate technology development and commercial
- To accelerate education and promotion

To support application portability with CAMARA Open APIs enterprise software developers can plug in to network capabilities once, and it’s already working. Now imagine those APIs being put into the stacks of the cloud providers. And whenever somebody’s developing code for a new business model, they can drop lines of code not just from the cloud provider’s side but also from global telecommunication standard stacks. This could include identity, cybersecurity, billing, signalling, geolocation and other services.
![CAMARA](/oda/open-apis/images/faq-1.png)

The image above illustrates a graphical representation of an Open Gateway NaaS system architecture. As shown, CAMARA APIs have implications in the third-party domain (how APIs are made available for consumption) and CSP domain (how APIs are implemented based on the operators’ internal capabilities).
    `,
  },
  {
    title: "Who will use the Open Gateway APIs, and what for?",
    content: `
- The Open Gateway APIs will be consumed by ‘end-user’ developers i.e., developers consuming connectivity capabilities, without requiring any knowledge of how the underlying network technologies work. 
- For example, a CPaaS provider (such as Zoom or Teams), cloud gaming or immersive content provider could offer its customers a ‘boost’ button to temporarily deliver higher bandwidth and lower latency for a particular service. Using the CAMARA Open Gateway Quality on Demand API, the developer could access this capability for all their users worldwide, even though they will be connected on different networks. This is the use case explored in our CAMARA Catalyst, [5G Enablement through industry standardized APIs](https://myaccount.tmforum.org/networks/23-5-451/index.html). 
- The primary users are application developers / content and gaming developers / software developers (i.e, the mobile industry’s direct and indirect B2B customers).
- Secondary users are MNO enterprise customers who have exposure to more value-add services which can be sold to their end consumer, therefore improving end user service experiences.
    `,
  },
  {
    title: "What is the relationship between GSMA and TM Forum?",
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
  {
    title: "How do the different Open APIs work together?",
    content: `
#### How do these different types of APIs work together?
- The Service APIs are the APIs exposed by the Operate API as API Products. The Service APIs are used by Applications. For example, a Service API (Camara API) might be a Device Location API exposed as a Product by the Operate API.
- The ASP (Application Service Provider) registers with the Aggregator. As a consequence, the Aggregator presents the list of available APIs to the ASP. Those APIs can be provided by different Operators since the Aggregator can have previous business agreements with several CSP.
    `,
  },
  {
    title: "What are Service APIs and Service Management APIs?",
    content: `Interface between MNO and end customer; these are the APIs exposed to customers, directly or through aggregators. Depending on their semantic scope, CAMARA APIs can be clustered into two groups: 
- Service APIs:  APIs intended for end consumers and integrated by developers to invoke a certain telco capability.
- Service Management APIs:  APIs intended for end consumers to manage or get data about offered Service APIs in application runtime, e.g., check service availability or performance information. 

The requirements for these APIs are intended to be defined in the CAMARA Commonalities Workstream. These APIs may be contributed by CAMARA partners from TM Forum and are typically designed and tested, in partnership with application developers. The design and development of Service Management APIs follow the same guidelines and scale, reach and simplicity principles that are applied for the Service APIs. `,
  },
  {
    title: "What are Operate APIs?",
    content: `
Operate APIs: offering programmable access to Operation, Administration and Management (OAM) capabilities to facilitate the integration of the Open Gateway NaaS Platform with portals, marketplaces and other aggregator platforms.
- They provide all the transversal/non-service specific functionality that is required to make a commercial product out of the Service APIs, making them operable and monetizable. Examples of functions provided by the Operate APIs include ordering, monitoring, trouble ticketing, accounting, billing, payment, etc, but also API discovery, user registration and consent management, etc. 
- They are made available by the operator’s IT stacks, which typically includes operating and business support systems, and on-line charging systems, now structured following a new digital architecture. 
-  Operational and maintenance APIs provided by a telco to channel partners for the purpose of service fulfillment and assurance to their [channel partner] customers. This may include service provisioning for a mobile user, technical API performance monitoring, fault ticketing, information exchange such as product catalog, pricing, settlement, etc.

TM Forum is the body leading the definition and development of these APIs, with over 70 Open APIs available and widely implemented today under the Apache 2.0 license. TM Forum is assisted by 3GPP SA5 for those cases where OAM APIs trigger FCAPS management operations on 5G configurable resources (e.g., network functions, network slices). 
- Because of the extensible design of TM Forum Open APIs, these Operate APIs may make use of a TM Forum approach called Domain Context Specialization to create targeted APIs focused on facilitating the integration with non-telco environments (aggregators, third-party marketplaces and portals) by defining a simplified, restricted API payload for specific scenarios, and taking into consideration the third-party requirements and way of working. 
- These APIs are typically contributed by GSMA Open Gateway partners from TM Forum and are developed and validated in collaboration with aggregators and marketplaces.

#### Why are Operate APIs needed as part of Open Gateway?
The GSMA Open Gateway initiative aims to establish standardized Service APIs but also homogeneous mechanisms for the integration of aggregators, enabling seamless integration and interoperability across various platforms and telecommunications service providers.

#### Are the Operate APIs officially part of the Open Gateway standard?
Yes. Operate APIs will be verified using a TM Forum Certification Test Kit (CTK) which will be available from TM Forum’s Open API table.
#### How do the Operate APIs work alongside the CAMARA Service APIs?
The TM Forum Operate APIs are not dependent on a version of the CAMARA Service API. The Product definitions for the CAMARA APIs are stored in an open-source registry. This means you can upgrade a CAMARA Service API, and this has no impact on the Operate API.

#### Who is building the Operate APIs, where and how?
- The Operate APIs are being built as part of a collaboration between GSMA, CAMARA, and TM Forum, and include some of the world’s largest and most innovative CSPs.
- The Operate APIs are developed under the governance of the TM Forum Open API project, ensuring the adherence to industry standards throughout the development process.

#### What Operate APIs has TM Forum published?
The Open Gateway Onboarding and Ordering Component Suite (TMF931 BETA) is currently available on the TM Forum's Open API Table.  It focuses on the operations between Channel Partners and Operators, enabling subscription to Service APIs, management of subscriptions; lifecycle management of Developers; and lifecycle management of Applications for Developers.  It offers a consolidation of multiple TM Forum-based APIs into a single endpoint.

#### Where can the Operate APIs be downloaded?
The Open Gateway Onboarding and Ordering Component Suite (TMF931) can be download directly from TM Forum’s Open API Production table [here](https://www.tmforum.org/oda/open-apis/table). 

#### What other Operate APIs are planned, and when will they be available?
The TM Forum Open API Project is working on a roadmap of Operate APIs, with Catalog Management and Usage Management next in line.  Catalog Management should be available in Beta summer 2024.
    `,
  },
];
