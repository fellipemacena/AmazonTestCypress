/// <reference types = "cypress"/>  

export class OpenAmazonAPI {
  static acessarAmazon() {
      cy.request({
        method: 'GET',
        url: 'https://amazon.com.br',        
      }).its('status').should('be.equal', 200)

  }

  static acessarLoginPage() {
    cy.request({
      method: 'GET',
      url: 'https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https://www.amazon.com.br/?ref_=nav_signin&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.ns=http://specs.openid.net/auth/2.0&',
    }).its('status').should('be.equal', 200)
  }

  static entrarEmail() {
    cy.request({
      method: 'POST',
      url: 'https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https://www.amazon.com.br/?ref_=nav_signin&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.ns=http://specs.openid.net/auth/2.0&',
      body: {
        email: 'testfafm@gmail.com',
    }
  }).its('status').should('be.equal', 200) 
}
static entrarSenha(){
cy.request({
  method: 'POST',
  url: 'https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https://www.amazon.com.br/?ref_=nav_signin&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.ns=http://specs.openid.net/auth/2.0&',
  body: {
    password: 'qazxsw12',
    }
  }).its('status').should('be.equal', 200)
}    


  static Pesquisa() {
    cy.request({
      method: 'POST',
      url: 'https://amazon.com.br',
      body: {
        fieldkeywords: 'notebook',  
        }
    }).its('status').should('be.equal', 200)//.then(res => console.log(res))

    cy.request({
      method: 'POST',
      url: 'https://www.amazon.com.br/s?k=notebook&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss',
      body: {
        name: 'Notebook Dell Vostro V15-3515-M40T 15.6" FHD AMD Ryzen™ 7 8GB 256GB SSD Windows 11 Cinza Chumbo',  
        }
    }).its('status').should('be.equal', 200)
  }

  static addCarrinho() {
    cy.request({
      method: 'POST',
      url: 'https://www.amazon.com.br/Notebook-Lenovo-IdeaPad-3i-Microsoft/dp/B09VCW5X56/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=notebook&qid=1675696644&sr=8-6&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147',
      body: {
        name: 'Adicionar ao carrinho',  
        }
    }).its('status').should('be.equal', 200)

    cy.request({
      method: 'POST',
      url: 'https://www.amazon.com.br/cart/smart-wagon?newItems=Cd5b2b9d3-337e-4bc8-9c45-c60f8ed88e16,1',
      body: {
        name: 'Ir para o carrinho',  
        }
    }).its('status').should('be.equal', 200)
  }

  static excluiCarrinho() {
    cy.request({
      method: 'POST',
      url: 'https://www.amazon.com.br/gp/cart/view.html?ref_=sw_gtc',
      body: {
        name: 'Excluir',  
        }
    }).its('status').should('be.equal', 200)
  }

}
export default OpenAmazonAPI;
