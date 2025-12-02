describe("Página da Pokédex - Poke+", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/pokedex.html");
  });

  it("deve exibir título, texto e caixa de busca", () => {
    cy.contains("Pokédex").should("be.visible");
    cy.get("#buscaPokemon").should("be.visible");
    cy.get("#btnBuscar").should("be.visible");
  });

  it("deve permitir digitar na caixa de busca", () => {
    cy.get("#buscaPokemon")
      .type("pikachu")
      .should("have.value", "pikachu");
  });

  it("deve mostrar a lista de pokémons carregados", () => {
    cy.get("#listaPokemons").should("exist");
  });

  it("deve realizar a busca quando clicar no botão", () => {
    cy.get("#buscaPokemon").type("pichu");
    cy.get("#btnBuscar").click();

    cy.get("#listaPokemons").should("exist");
  });
});
