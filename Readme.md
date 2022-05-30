## Carolla Food

##### O Carolla Food tem como finalidade a inserção e visualização de receitas culinárias. Ele contará com 4 telas:

### Home

###### Tela de inicio do aplicativo, onde contará com uma imagem principal relacionada á culinária. (Imagem em anexo).

![This is a alt text.](/wireframes/Home.png "Tela home.")

![This is a alt text.](/src/components/Main/receita.webp "Imagem principal.")

### Cadastro de receitas

###### Essa tela tem como finalidade possibilitar a inserção de alguma receita no aplicativo, com os seguintes campos:

#### Categoria

- Permite ao usuário informar a categoria da receita, ou seja, se é doce ou salgada.

#### Nome da receita

- Campo para especificar o nome dado a receita.

#### Ingredientes

- Campo de inserção dos ingredientes da receita.

#### Modo de preparo

- Permite adicionar o passo a passo para aquela receita ser realizada.

#### Tem uma foto? Adicione aqui:

- Tem um botão **Search**, que mais tarde será usado para inserção de foto da receita.

_Essa página conta também com um botão **Register**, para que os dados inseridos fiquem salvos na base de dados._

_Ambos os botões estão apontando para a **Home** apenas para testes iniciais._

![This is a alt text.](/wireframes/Register.png "Tela para cadastrar receitas.")

### Listagem das receitas

###### Tela especifica para a listagem das receitas já inseridas no aplicativo, mostrado da seguinte forma com o nome da receita em negrito, e a categoria (se é doce ou salgada).

_Essa página conta também com um botão **Return**, que quando clicado, volta para a página principal._

![This is a alt text.](/wireframes/Listing.png "Tela para listagem das receitas.")

### Receita

###### Na tela anterior, quando clicado em uma determinada receita, o aplicativo abrirá uma nova tela, com os dados que o criador da mesma inseriu.

_Essa página conta também com um botão **Return**, que quando clicado, volta para a página da listagem das receitas._

![This is a alt text.](/wireframes/Recipe.png "Tela da receita.")

_Todas as páginas contarão com ícones especificos no Footer. As "estrelinhas" foram usadas apenas para representá-los._

## Cronograma de desenvolvimento

### AA1

###### Wireframes - até 18/04/2022 - OK

###### Criação do git para o projeto - até 18/04/2022 - OK

###### Desenvolvimento das telas **Home** e **Cadastro de receitas** - até 20/04/2022 - OK

###### Desenvolvimento das telas **Listagem de receitas**, **Receitas** - até 25/04/2022 - OK

### AA2

###### Criação da base de dados para o projeto - até 02/05/2022

###### Inserção de imagens como anexo junto das receitas - até 10/05/2022

###### Notificações aos usuários de que novas receitas foram inseridas no aplicativo - até 15/05/2022

###### Alertas que todos os campos do cadastro de receitas devem ser preenchidos - até 17/05/2022

### Projeto final

###### Caso precise de alguma atualização no aplicativo para a entrega final, ajustar até 23/06/2022

//------------------------------------------------------------------------------------------------------//

## Backlog

No começo da atividade, efetuei a pequena correção da AA1, que foi incluir uma ScrollView na página principal (Home), pois o texto de baixo não apareceria em telas menores. Alterei também a forma de como é usada a SectionList, usando a header para mostrar a categoria das receitas. Foi usado a propria callback da SectionList para desenhar a header.

Usei o SQLite para a persistência de dados do meu projeto. Por ser mais prático e acessível, o SQLite é mais recomendado para aplicativos desktop ou mobile mais simples (sem muitas funcionalidades e consumo de dados), e também sites mais leves e sem muitos recursos, com páginas estáticas, por exemplo. Usei apenas uma model no projeto, que foi Recipe.js.. tabela usada para o cadastro das receitas no meu aplicativo, e usei a operações mais simples, que cria receitas. Usei esse modo por ser um aplicativo mais simples, como se fosse apenas um diário do proprio usuário adicionar receitas que gostaria de fazer em casa, ou seja, não teria necessidade de edição ou exclusão.

Foi usado também a ActionSheet que quando clicado em "Register", no formulário de cadastro de receitas, ela é chamada como forma de pergunta "Os dados estão corretos?", e as opções "Não, voltar e revisar." que volta para a página de Registrar, e a ultima opção "Sim, registrar receita!", que cadastra a receita e redimensiona para a página principal (Home).

 


