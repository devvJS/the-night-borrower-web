export interface Screenshot {
  id: string
  alt: string
  caption: string
}

export const screenshots: Screenshot[] = [
  {
    id: 'aisle',
    alt: 'A narrow bookstore aisle lit by a single overhead lamp',
    caption: 'The aisles feel longer after midnight',
  },
  {
    id: 'desk',
    alt: 'The front desk with an open logbook and a dim lamp',
    caption: 'Someone has been writing in the margins',
  },
  {
    id: 'hallway',
    alt: 'A dark hallway stretching beyond the back office',
    caption: 'The hallway was not this long yesterday',
  },
  {
    id: 'window',
    alt: 'Rain on a storefront window reflecting interior light',
    caption: 'Nothing moves outside — but the reflections do',
  },
  {
    id: 'chair',
    alt: 'An empty reading chair beneath a flickering sconce',
    caption: 'The chair is still warm',
  },
  {
    id: 'shelf',
    alt: 'A high shelf with books arranged in an unfamiliar order',
    caption: 'These titles were not here this morning',
  },
]
