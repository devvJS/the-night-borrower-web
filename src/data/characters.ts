export interface Character {
  id: string
  name: string
  role: string
  description: string
  portrait: string
}

export const characters: Character[] = [
  {
    id: 'borrower',
    name: 'The Borrower',
    role: 'The presence in the walls',
    description:
      'Never seen directly. Known only by what goes missing — a phrase from a page, a name from a spine, the sound of your own breathing returned a half-second late.',
    portrait: 'shadow',
  },
  {
    id: 'shopkeeper',
    name: 'The Shopkeeper',
    role: 'Owner of the store',
    description:
      'Left detailed instructions but no forwarding address. His handwriting appears in places it shouldn\'t, and some of his notes contradict each other.',
    portrait: 'glasses',
  },
  {
    id: 'observer',
    name: 'The Observer',
    role: 'A recurring visitor',
    description:
      'Arrives before closing. Never buys anything. Asks questions about books that aren\'t in the catalog — and seems unsurprised when you can\'t find them.',
    portrait: 'eye',
  },
  {
    id: 'sleeper',
    name: 'The Sleeper',
    role: 'Found in the back room',
    description:
      'A figure seated in the reading chair near the boiler. You are not sure when they arrived. They do not appear to be breathing, but the book in their lap is open to a different page each night.',
    portrait: 'moon',
  },
]
