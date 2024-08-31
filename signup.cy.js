describe("Signup", () => {
    it("with valid data", () => {
        // ke url https://www.demoblaze.com/index.html
        // pastikan homepage muncul
        // klik sigup menu
        // pastikan modal signup mucul
        // isi username
        // isi password
        // click signup


        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#nava').should('be.visible');
        cy.get('#signin2').click();
        cy.get('#signInModal > .modal-dialog > .modal-content >.modal-header').should('be.visible');
        cy.wait(10000);
        cy.get('#sign-username').type('el12');
        cy.get('#sign-password').type('123');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('user already exist'); 
        })
    })
})


describe("Login", () => {
    it("with valid data", () => {
        // ke url https://www.demoblaze.com/index.html
        // pastikan homepage muncul
        // klik sigup menu
        // pastikan modal Login mucul
        // isi username
        // isi password
        // click login


        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#login2').click();
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header')
        cy.wait(10000);
        cy.get('#loginusername').type('el12');
        cy.get('#loginpassword').type('123');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('user already exist'); 
        })
    })
})


describe("Checkout Product", () => {
    it("with valid data", () => {
        // //ke url https://www.demoblaze.com/index.html
            // berhasil login
            // click categories product
            // pilih product yang dinginkan
            // click product phone
            // pilih tipe phone Samsung galaxy s6
            // click add to cart
            // pastikan modal Product mucul
            // passtikan product yang dipilih muncul
            // click place order
            // pastikan modal place order mucul
            // isi name
            // isi county
            // isi city
            // isi credit card
            // isi month
            // isi year
            // click purchase
            // pastikan sukses pembelian

            cy.visit('https://www.demoblaze.com/index.html');
            
        
    })
})