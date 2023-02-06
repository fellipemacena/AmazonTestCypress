Feature: Ecommerce Amazon API

    Como usuário, desejo colocar um produto no carrinho e
    excluí-lo

Scenario: Realizar login no site da Amazon via API
    Given que eu desejo acessar o site da Amazon API
    When que via API escolho o produto
    And coloco no carrinho via API
    Then excluo o produto do mesmo via API
