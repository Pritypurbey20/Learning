const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('./dummy.pdf');
 
pdfDoc
    .encrypt({
        userPassword: '123',
        ownerPassword: '123',
        userProtectionFlag: 4
    })
    .endPDF();