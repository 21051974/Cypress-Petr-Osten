/// <reference types="cypress" />

it.only('vytvorenie nového boardu', () => {     //spusteni jednoho  testu

cy.visit('/')                                   //domovska stranka
  
cy.get('#new-board')                            //oznaceni elementu
  .click()                                      //pokyn kliknout

cy.get('#new-board input')                      
  
});

it('označenie boardu hviezdičkou', () => {

cy
  .visit('/')               //domovska stranka
  
cy
  .get('.Star')             //oznaceni hvezdicky v elementu
  .click({force: true})     //prikaz nebude kontrolovat viditelnost elementu v Cypress, nastaveni vynuceni kliknuti

  

});

it.only('označenie tasku', () => {

    cy.visit('/board/27683392454')     //zkopirovat URL pozadovaneho
    
    cy.get('.Task input')              //zavolat input/vstup
      .check()                         //zaskrtnuti elementu

});