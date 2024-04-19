

export interface ICatalystProjects{
    title: string
    slug: string
    info: string
    image: string
    tag: string
}

export interface IImageProps {
    blurDataURL: string
    blurHeight: number
    blurWidth: number
    height: number
    src: string
    width:number
  }
  

  export interface IComponentMapCardProps {
    data: {
      name: string
      tag: string
    }[]
  }