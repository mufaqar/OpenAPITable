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
