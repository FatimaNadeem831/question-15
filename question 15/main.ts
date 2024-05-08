let guest: string[] =["Ayesha","Bushra","Cendrella","Daniya"];
guest.forEach(guest => {
    console.log(`Dear ${guest},We invited you on Dinner tomorrow.\nThank you\n`);
});
let not_present : string = `Bushra`;
let new_guest : string = `Babar Azam`;
guest[1] = new_guest;
guest.forEach(guest => {
    console.log(`Dear ${guest},We invited you on Dinner tomorrow.\nThank you\n`);
});
console.log(`Mr. ${not_present} will not coming tomorrow dinner.`);
