const nomClient = "Junior"
const nomProduit = "Ordinateur"
const prixUnitaire =  250000 
const quantite = 2
const fraisLivraison = 5000
const tva = 18
const montant_total_produit = prixUnitaire * quantite
const montant_tva_produit = montant_total_produit * 18 / 100
const montant_total_ttc = montant_total_produit + tva 
const montant_final_payer = montant_total_ttc + fraisLivraison
const prix_moyen_payer = montant_total_ttc / quantite

console.log("==== INFORMATION DE LA COMMANDE ====")
console.log ("Client :", nomClient)
console.log("Produit :", nomProduit)
console.log("Prix unitaire :", prixUnitaire)
console.log("Quantité :", quantite)

console.log("\n ==== TYPES DE DONNEES ====")
console.log("Type du nom :", typeof nomClient)
console.log("Type du produit :", typeof nomProduit)
console.log("Type du prix :", typeof prixUnitaire)
console.log("Type de la quantité :", typeof quantite)
console.log("Type des frais de livraison :", typeof typeof fraisLivraison)
console.log("Type du taux de TVA :", typeof tva)

console.log("\n ==== REçU DE COMMANDE ====")
console.log("Montant des produits :", montant_total_produit, "FCFA")
console.log("TVA (18%) :", montant_tva_produit, "FCFA")
console.log("Montant TTC :", montant_total_ttc, "FCFA")
console.log("Livraison :", fraisLivraison, "FCFA")
console.log("Total à payer :", montant_final_payer, "FCFA")
console.log("Prix moyen à payer :", prix_moyen_payer, "FCFA")
