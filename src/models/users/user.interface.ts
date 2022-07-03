interface GeoInterface {
  lat: string
  lng: string
}

interface AddressInterface {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoInterface
}

interface CompanyInterface {
  name: string
  catchPhrase: string
  bs: string
}

/**
 * Interface for the http reponse from the jsonplaceholder api
 */
export interface UserInterface {
  id: number
  name: string
  username: string
  email: string
  address: AddressInterface
  phone: string
  website: string
  company: CompanyInterface
}
