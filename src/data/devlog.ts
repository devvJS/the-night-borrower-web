export interface DevlogEntry {
  id: string
  date: string
  title: string
  summary: string
  body: string
}

export const devlogEntries: DevlogEntry[] = [
  {
    id: 'entry-004',
    date: '2026-03-22',
    title: 'The shelves remember what you moved',
    summary:
      'Persistent shelf state is in. Every book you relocate stays where you left it — until it doesn\'t.',
    body: 'We finished the inventory persistence layer this week. The bookstore tracks every object you touch — every spine you slide from one shelf to another, every note you pocket, every drawer you leave open. The data writes clean. What we did not plan for is that playtesters keep reporting items returning to their original positions overnight. We have not written that behavior. We are investigating.',
  },
  {
    id: 'entry-003',
    date: '2026-03-08',
    title: 'Ambient sound propagation through walls',
    summary:
      'Sound now bleeds between rooms. Footsteps in the back office reach you at the front desk, muffled but present.',
    body: 'The acoustic occlusion system is functional. Sounds attenuate through walls, doors, and shelving units based on material density. A door left ajar changes what you hear. The rain on the roof is louder in the attic, softer near the basement stairs, absent in places it should not be absent. We tuned the propagation curves by recording inside an actual bookstore in Astoria during a storm. The building has since closed. We kept the recordings.',
  },
  {
    id: 'entry-002',
    date: '2026-02-19',
    title: 'Lighting model: fluorescent flicker',
    summary:
      'The overhead tubes now degrade over time. Their rhythm is irregular. We did not make it irregular on purpose.',
    body: 'Each fluorescent fixture tracks its own wear state — hours of use, thermal stress, voltage fluctuation. The flicker patterns emerge from the simulation, not from hand-authored animation curves. During extended testing sessions, one of the basement lights developed a rhythm that matched the tester\'s breathing rate. This was coincidental. The system has no access to biometric data. We have added a note to the design document.',
  },
  {
    id: 'entry-001',
    date: '2026-02-03',
    title: 'First build: the bookstore stands',
    summary:
      'The initial environment is walkable. Three rooms, one hallway, no exits. The front door is modeled but will not open.',
    body: 'The first navigable build is complete. You can walk from the front entrance through the main floor, past the reading nook, and into the back office. The basement stairs exist but lead to an unfinished void. The geometry is based on a real floor plan we obtained from county records — a shop that operated from 1971 to 1998 in a small coastal town south of Cannon Beach. The owner\'s name is in the records. We will not use it. The building footprint is accurate to within six inches.',
  },
]
