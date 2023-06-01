import { apartmentList } from './apartmentList'

export const collapses = [
  {
    id: 1,
    title: 'Description',
    content: apartmentList[0].description,
    isOpen: false,
  },
  {
    id: 2,
    title: 'Equipment',
    content: apartmentList[0].equipments.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    )),
    isOpen: false,
  },
  {
    id: 3,
    title: 'Fiabilité',
    content: 'Texte',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Respect',
    content: 'Texte',
    isOpen: false,
  },
  {
    id: 5,
    title: 'Services',
    content: 'Texte',
    isOpen: false,
  },
  {
    id: 6,
    title: 'Sécurité',
    content: 'Texte',
    isOpen: false,
  },
]
