describe('Cadastro simples de usuário', () => {
  
  it('Cadastrar usuário',() => {
    cy.request({
      method: 'POST',
      url: '/usuarios',
      headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      },
      body: {
        nome: 'fulando da silva',
        email: 'fulano@gmail.com',
        password: '123',
        administrador: 'true'
      },
    }).should((resp) => {
      expect(resp.status).to.eq(201);
      expect(resp).to.have.property('message','Cadastro realizado com sucesso');
    })
  })
})