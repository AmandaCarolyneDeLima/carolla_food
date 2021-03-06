# Carolla Food

### APK: https://easyupload.io/tu7qhe

## O Carolla Food tem como finalidade a inserção e visualização de receitas culinárias. Ele contará com 4 telas:

### Home

#### Tela de inicio do aplicativo, onde contará com uma imagem principal relacionada á culinária. (Imagem em anexo).

![This is a alt text.](wireframes/Home.png "Tela home.")

![This is a alt text.](src/components/Main/receita.webp "Imagem principal.")

### Cadastro de receitas

#### Essa tela tem como finalidade possibilitar a inserção de alguma receita no aplicativo, com os seguintes campos:

##### Categoria

- Permite ao usuário informar a categoria da receita, ou seja, se é doce ou salgada.

##### Nome da receita

- Campo para especificar o nome dado a receita.

##### Ingredientes

- Campo de inserção dos ingredientes da receita.

##### Modo de preparo

- Permite adicionar o passo a passo para aquela receita ser realizada.

![This is a alt text.](wireframes/Register.png "Tela para cadastrar receitas.")

### Listagem das receitas

#### Tela especifica para a listagem das receitas já inseridas no aplicativo, mostrado da seguinte forma com o nome da receita em negrito, e a categoria (se é doce ou salgada).

_Essa página conta também com um botão **Return**, que quando clicado, volta para a página principal._

![This is a alt text.](wireframes/Listing.png "Tela para listagem das receitas.")

### Receita

#### Na tela anterior, quando clicado em uma determinada receita, o aplicativo abrirá uma nova tela, com os dados que o criador da mesma inseriu.

_Essa página conta também com um botão **Return**, que quando clicado, volta para a página da listagem das receitas._

![This is a alt text.](wireframes/Recipe.png "Tela da receita.")

_Todas as páginas contarão com ícones especificos no Footer. As "estrelinhas" foram usadas apenas para representá-los._

## Cronograma de desenvolvimento

**1. AA1**

- Wireframes - até 18/04/2022 - OK
- Criação do git para o projeto - até 18/04/2022 - OK
- Desenvolvimento das telas **Home** e **Cadastro de receitas** - até 20/04/2022 - OK
- Desenvolvimento das telas **Listagem de receitas**, **Receitas** - até 25/04/2022 - OK

**2. AA2**

- Criação da base de dados para o projeto - até 28/05/2022 - OK
- Inserção de imagens como anexo junto das receitas - até 28/05/2022 (_verificar aqui para fazer com a API_)
- ActionSheet para "confirmação" dos dados, se estão inseridos corretamente - até 29/05/2022 - OK

**3. PROJETO FINAL**

- Notificações ao usuário de que ele pode inserir e buscar por receitas no aplicativo - até 15/06/2022
- Ver a questão da API - até 20/06/2022
- Caso precise de alguma atualização no aplicativo para a entrega final, ajustar até 23/06/2022

# Backlog (questões teóricas da AA2)

## 4

### No começo da atividade, efetuei a pequena correção da AA1, onde inclui uma ScrollView na página principal (Home), pois o texto de baixo não apareceria em telas menores. Alterei também a forma de como é usada a SectionList, usando a header para mostrar a categoria das receitas. Foi usado a propria callback da SectionList para desenhar a header.

### Usei o SQLite para a persistência de dados do meu projeto. Por ser mais prático e acessível, o SQLite é mais recomendado para aplicativos desktop ou mobile mais simples (sem muitas funcionalidades e consumo de dados), e também sites mais leves e sem muitos recursos, com páginas estáticas, por exemplo. Usei apenas uma model no projeto, que foi Recipe.js.. tabela usada para o cadastro das receitas no meu aplicativo, e usei a operações mais simples de um crud, que cria, pesquisa e deleta receitas. Usei esse modo por ser um aplicativo mais simples, como se fosse apenas um diário do proprio usuário, onde ele pode adicionar receitas que gostaria de fazer em casa, ou seja, não teria necessidade de edição, por exemplo.

### Foi usado também a ActionSheet que quando clicado em "Register", no formulário de cadastro de receitas, ela é chamada como forma de pergunta "Os dados estão corretos?", e as opções "Não, voltar e revisar." que volta para a página de Registrar, e a ultima opção "Sim, registrar receita!", que cadastra a receita e redimensiona para a página principal (Home).

## 5

### A API já pronta, que mais se encaixa com o meu projeto, é a seguinte " _https://github.com/surhud004/Foodish#readme_ ", ela é uma API REST Node.js/Express.js que permite obter imagem aleatória de pratos de comida.

#### Rota _GET /api/_ (Prato de comida aleatória de categoria aleatória.).

#### Exemplo de solicitação: _GET /api/_

#### Exemplo de resposta: _{"image":"https://foodish-api.herokuapp.com/images/burger/burger101.jpg"}_

#### Rota _GET /api/images/:food_ (Imagem aleatória da foodcategoria.).

#### Exemplo de solicitação: _GET /api/images/biryani_

#### Exemplo de resposta: _{"image":"https://foodish-api.herokuapp.com/images/biryani/biryani32.jpg"}_

## 6

### Pretendo até o final do projeto implementar _Notificações_ no aplicativo. A idéia é - sempre que o aplicativo for aberto, ou seja, a primeira questão a ser executada - gerar uma notificação só para lembrar o usuário que ele pode buscar por receitas, ou até mesmo cadastrar receitas novas. Lembrando que a idéia do aplicativo é ser um diário mesmo, onde o usuário pode cadastrar receitas que julgar interessante, e buscar por elas caso deseja faze-lá em sua casa.

## 7

### Cronograma ajustado!

## Resultado Final (Capturas de Tela)

### Icone do app:

![This is a alt text.](captures/Icon.jpg "Icon.")

### Tela Principal:

![This is a alt text.](captures/Home.jpg "Home.")

### Registro de Receitas:

![This is a alt text.](captures/Register.jpg "Register.")

### Action Sheet:

![This is a alt text.](captures/ActionSheet.jpg "ActionSheet.")

### Listagem das Receitas:

![This is a alt text.](captures/Listing.jpg "Listing.")

![This is a alt text.](captures/Listing2.jpg "Listing.")

### Descrição de receitas:

![This is a alt text.](captures/Description.jpg "Description.")
