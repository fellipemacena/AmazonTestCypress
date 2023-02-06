import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import OpenAmazonAPI from '../pages/page_actions/acessar_amazon_api';


Given('que eu desejo acessar o site da Amazon API', function () {
        OpenAmazonAPI.acessarAmazon();
        OpenAmazonAPI.acessarLoginPage();
        OpenAmazonAPI.entrarEmail();
        OpenAmazonAPI.entrarSenha();
});

When('que via API escolho o produto', function () {
        OpenAmazonAPI.Pesquisa();
});

When('coloco no carrinho via API',function () {
        OpenAmazonAPI.addCarrinho();
});   

Then('excluo o produto do mesmo via API', function () {
        OpenAmazonAPI.excluiCarrinho();
});