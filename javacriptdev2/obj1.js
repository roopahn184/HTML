const band = {
    vocal: "robert plant",
    guitar: "jimmy page",
    bass: "johhn"
};
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
   console.log(`on ${job}, its ${band[job]}!`);
}