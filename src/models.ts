export interface JobType {
    name: string
}

export interface SocialLinks {
    name: string
}

export interface JobLevel {
    name: string
}

export interface Business {
  name: string
  website?: string
  socials?: SocialLinks[]
  logo?: string
  timezone?: string
}

export interface Job {
  id?: number,
  business: string
  title: string
  summary: string,
  type: string
  location: string
  description: string
  permit: string
  level: string
  salary?: string,
  url: string,
}


export interface JobForm {
  id?: string,
  business: string
  title: string
  type: string
  location: string
  description: string
  permit: string
  level: string
  salary?: number,
  url: string,
}


