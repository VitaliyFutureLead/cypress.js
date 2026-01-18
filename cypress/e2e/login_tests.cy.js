describe('Проверка авторизации', function () {

    it('верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('забыли пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('testlogin123@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('qa_one_love111');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german123@dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('проверка валидации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german123dolnikov');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('баг авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
     })
 }) 

describe('Проверка покупки нового аватара', function () {                
    it('покупка нового аватара для тренера', function () {  
         cy.visit('https://pokemonbattle.ru/');                         
         cy.get('input[id="k_email"]').type('тут_логин');                  
         cy.get('input[id="k_password"]').type('тут_пароль');             
         cy.get('button[type="submit"]').click();               
         cy.wait(2000);
         cy.get('.header_card_trainer').click();          
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); 
         cy.get('.available > button').first().click();   
         cy.get('.card_number').type('номер_карты');                     
         cy.get('.card_csv').type('цвв_код_карты');                            
         cy.get('.card_date').type('дата_карты');                          
         cy.get('.card_name').type('имя_держателя_карты');                          
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     
         cy.get('.threeds_number').type('код_подтверждение_из_смс');                            
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   
         cy.contains('Покупка прошла успешно').should('be.visible');
         cy.get('.style_1_base_link_blue').click();  
     });
 });
