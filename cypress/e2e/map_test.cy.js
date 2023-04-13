/// <reference types="cypress" />

describe('test google maps', () => {
	beforeEach(() => {
        //acessa a baseURL no seu caminho padrão configurada no config.js
		cy.visit('/')
	});

	it('exists map', () => {		
        // clica no link "Pra Você"
        cy.xpath("//li/a[@href='/onde-aceita.htm']").click() 
        // valida que está na página correta
        cy.url().should('eq', 'https://www.vr.com.br/onde-aceita.htm')
        // clica no botão "Onde usar meu cartão"
        cy.xpath("//div[@class='vr-hero__actions']/a[@href='#rede-credenciada']").click()
        // valida que o mapa está aberto
        cy.xpath("//div[@id='map']/div/div/iframe[@aria-hidden='true']").should('exist')
	});

});