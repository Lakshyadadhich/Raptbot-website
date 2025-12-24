export type MegaMenuItem = {
  image: string
  items: {
    label: string
    url: string
  }[]
}

export type NavItem = {
  label: string
  url?: string
  children?: NavItem[]
  megaMenuItems?: MegaMenuItem[]
}
