var guest = ["Ayesha", "Bushra", "Cendrella", "Daniya"];
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",We invited you on Dinner tomorrow.\nThank you\n"));
});
var not_present = "Bushra";
var new_guest = "Babar Azam";
guest[1] = new_guest;
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",We invited you on Dinner tomorrow.\nThank you\n"));
});
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner."));
