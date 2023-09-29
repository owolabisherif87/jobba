export interface Location {
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
  business: Business
  title: string
  summary: string,
  location: Location[]
  description: string
  permit: string
  level: JobLevel[]
  salary?: string,
  url: string,
}