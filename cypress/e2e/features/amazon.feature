Feature: Ecommerce Amazon

    Como usuário, desejo colocar um produto no carrinho e
    excluí-lo

Scenario: Realizar login no site da Amazon
    Given que eu desejo acessar o site da Amazon
    When escolho o produto
    And coloco no carrinho
    Then excluo o produto do mesmo
