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
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    isOpen: false,
  },
  {
    id: 5,
    title: 'Services',
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    isOpen: false,
  },
  {
    id: 6,
    title: 'Sécurité',
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    isOpen: false,
  },
]
