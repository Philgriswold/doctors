//this is a page of book3 chapter3

// const doctors = (name, specialty, address) => {
//     return {
//         "doctorName": name.name,
//         "doctorSpecialty": specialty.specialty,
//         "doctorAddress": address.address,
//     }
// }

const pets = function(name, breed) {
    return {
        "dogName": name,
        "dogBreed": breed,
    }
}
const BowWowKennels = []

BowWowKennels.push(pets("rowdy", "bulldog"),
    pets("frank", "pitbull"),
    pets("ranger", "lab"));

console.log(BowWowKennels)