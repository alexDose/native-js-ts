import {StudentType} from "./02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}
export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName
}
export const addMoneyToBudget = (obj: string, sum: number) => {
    city.governmentBuilding[0].budget += sum;
}
export const repairHouse = (city: Array[], info: boolean) => {
    return city.houses[1] === info;
}