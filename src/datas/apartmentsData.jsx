import Logements from './apartmentsList.json'

const getAll = () => {
  return Logements
}
const getOne = (id) => {
  return Logements.find((logement) => logement.id === id)
}

export const dataLogement = { getAll, getOne }
