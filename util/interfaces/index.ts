export interface ICatalystProjects {
  title: string;
  slug: string;
  info: string;
  image: string;
  tag: string;
}

export interface IComponentMapCardProps {
  data: {
    name: string;
    tag: string;
  }[];
}


export interface MainPageApi {
  title: string
  description: string
  inform_filter: any
  catalysts_filter: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  featuresSection: any[]
  whatItMeansSection: any
  textSections: any[]
  bundlesSection: any
  seo: any
}