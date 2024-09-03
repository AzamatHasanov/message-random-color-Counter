// kodun Ishlemesi clcik vaitesi ile function ishe dusur 
// ve Math random 16  (HEX formatında 6 rəqəmdən ibarətdir).
// toString ile herife cevrilir ve # ile kod yazilir
// misal: #RRGGBB


// step 1
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const rdnm = `#${Math.floor(Math.random() * 16777124).toString(16) }`
    document.body.style.backgroundColor = rdnm
});

// step 2

// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// document.body.style.backgroundColor = getRandomColor();