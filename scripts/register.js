let petSalon={
    name:"The Fashion Pet",
    phone: "555-555-555",
    workingHours: {
        open:"9:00 am",
        close:"9:00 pm",
    },
address:{
    street:"Palm ave",
    zip:"22345",
    city:"San Diego", 
},
pets:[
    {
        name:"Scooby",
        age:"60",
        gender:"Male",
        breed:"Dane",
        service:"Grooming",
    },
    {    
        name:"Bella",
        age:"5",
        gender:"Female",
        breed:"Pomeranian",
        service:"Grooming",
    },
    {
        name:"Luna",
        age:"8",
        gender:"Female",
        breed:"Chihuahua",
        service:"Nail Trimming",
    },
    {
        name:"Charlie",
        age:"10",
        gender: "Male",
        breed:"German Shepherd",
        service:"Bath",
    },
    {
        name:"Copper",
        age:"9",
        gender:"Male",
        breed:"Bulldog",
        service:"Nail Trimming",

    }

]
}

function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`${petSalon.name} it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}`;
}


displayFooterInfo();

console.log(petSalon.pets.lenght);
console.log(petSalon.pets[0].Scooby);
console.log(petSalon.pets[1].Bella);
console.log(petSalon.pets[2].Luna);
console.log(petSalon.pets[3].Charlie);
console.log(petSalon.pets[4].Cooper);



