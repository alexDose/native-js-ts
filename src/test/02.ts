type TechnologiesType = {
    id: number
    title: string
}
type CityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    street: string
    city: CityType
}
export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>

}
export const student: StudentType = {
    name: "Oleg",
    age: 32,
    isActive: false,
    address: {
         street: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "JS"},

    ]
}