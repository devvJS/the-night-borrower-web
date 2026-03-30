export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export const features: Feature[] = [
  {
    id: 'observe',
    title: 'Observe Subtle Changes',
    description:
      'The store shifts between visits. Books rearrange, shadows lengthen, and details you trusted begin to contradict themselves.',
    icon: 'eye',
  },
  {
    id: 'record',
    title: 'Record What Matters',
    description:
      'Document anomalies in your journal. What you choose to write down may be the only proof that anything changed at all.',
    icon: 'pencil',
  },
  {
    id: 'light',
    title: 'Maintain the Light',
    description:
      'Darkness is not empty. Manage your limited light sources carefully — what you cannot see can still see you.',
    icon: 'flame',
  },
  {
    id: 'survive',
    title: 'Survive the Night',
    description:
      'Each shift pushes closer to something irreversible. Endure until morning, or become part of the collection.',
    icon: 'moon',
  },
]
