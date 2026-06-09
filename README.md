# meu-curriculo
<h3>Trabalho de Desenvolvimento de um Currículo usando HTML, CSS, JavaScript, PHP e JSON.</h3>

index.html:
- O Cabeçalho de Configuração ("head")
  - "meta name="viewport" ...": Garante que o site seja responsivo, ou seja, que se ajuste bem a telas de celulares e computadores.
  - "link rel="stylesheet" href="style.css"": Faz a ponte com aquele arquivo de estilos CSS que analisamos, aplicando o visual moderno (as cores roxas, os cartões brancos e a foto redonda).
- Topo da Página e Menu (header)
  - "img class="foto-perfil" ...": Carrega a sua foto de perfil (que o CSS vai transformar em um círculo).
  - "h1": O título principal com o seu nome (Vinícius Pimentel).
  - "nav" e "ul": Criam o menu de navegação. Repare que os links usam o formato href="#sobre". Isso se chama link âncora: quando o usuário clica em "Contato" ou "Habilidades", a página rola suavemente direto para aquela seção, sem precisar recarregar.
- As Seções Estáticas (section)
  - São os blocos de texto fixos que você escreveu direto no código
  - #sobre: Uma breve introdução sobre quem você é, seus objetivos e suas experiências prévias em vendas e segurança eletrônica.
  - #informacoes: Seus dados de contato (E-mail, Telefone de DDD 27 e endereço em Vila Velha). O link do LinkedIn usa target="_blank", o que faz o perfil abrir em uma nova aba do navegador para o usuário não sair do seu site.
  - #formacao: Seu histórico acadêmico, listando o ensino médio, o curso de Python e a sua faculdade atual de Análise e Desenvolvimento de Sistemas na Estácio.
- As Seções Dinâmicas (Conectadas ao JavaScript)
  - "ul id="skill-list"></ul" ----  "ul id="experience-list"></ul": Elas estão vazias porque o seu arquivo script.js vai ler o arquivo data.json e injetar as suas habilidades e experiências aqui dentro automaticamente assim que a página carregar. É por isso que elas têm os IDs skill-list e experience-list.
- O Formulário de Atualização (#add-data)
  - Esta é a interface que permite interagir com o sistema
  - em dois campos de texto (input) com os IDs novaHabilidade e novaExperiencia.
  - Quando você digita algo neles e clica no botão "Adicionar Dados", o formulário dispara o evento que o JavaScript captura para enviar as informações ao add_data.php.
  - A (div id="responseMessage") fica ali embaixo esperando o JavaScript colocar o texto verde de "Sucesso" ou vermelho de "Erro".
- O Script (script)
  - (script src="script.js"></script): Colocá-lo no final é uma boa prática, pois garante que o navegador primeiro desenhe toda a estrutura da página na tela e só depois execute as funções lógicas do script.

style.css:
- Variáveis Globais (:root):
  - O :root define variáveis de CSS. Elas funcionam como "paletas de cores" centralizadas. Se você quiser mudar o tom de roxo do site inteiro, basta alterar aqui.
  - --primary-color e --primary-hover: Tons de roxo usados para botões, bordas e títulos.
  - --bg-color e --card-bg: Cores de fundo (um cinza bem claro para a página e branco puro para os cartões).
  - --text-color e --text-light: Tons de cinza escuro para os textos, garantindo boa leitura.
- Estrutura Base e Corpo da Página (body)
  - Define uma fonte moderna e limpa (Segoe UI, etc.).
  - Zera as margens e espaçamentos padrão do navegador (margin: 0; padding: 0).
  - Aplica a cor de fundo cinza clara e define uma altura de linha confortável (line-height: 1.6) para o texto não ficar espremido.
- O Cabeçalho (header e .foto-perfil)
  - Estiliza o topo do site, provavelmente o cabeçalho de um portfólio ou currículo.
  - header: Fundo quase preto (#1a1a1a), texto branco, centralizado e com um bom espaçamento interno (padding: 40px).
  - .foto-perfil: Transforma a foto do usuário em um círculo perfeito (border-radius: 50%), adiciona uma borda roxa de 4px, uma sombra estilosa para dar profundidade (box-shadow) e garante que a imagem não distorça (object-fit: cover).
- Menu de Navegação (nav)
  - Estiliza os links que ficam no topo da página.
  - display: inline-block: Alinha os itens do menu um ao lado do outro na horizontal.
  - transition: color 0.3s ease: Faz com que, ao passar o mouse sobre o link, a cor mude de cinza para branco de forma suave (efeito de transição), em vez de piscar de uma vez.
- Conteúdo Principal e Cartões (main, .container, section)
  - max-width: 800px: Limita a largura máxima do conteúdo para o texto não esticar demais em telas muito grandes, mantendo-o centralizado (margin: 30px auto).
  - section: Cria o efeito de "card" (cartão). Cada seção do site ganha um fundo branco, bordas arredondadas (border-radius: 8px), um espaçamento interno confortável e uma sombra bem sutil nas bordas (box-shadow) para parecer que está flutuando sobre o fundo cinza.
- Títulos e Listas (h2, ul, li)
  - h2: Os títulos das seções ficam roxos, ganham uma linha fina decorativa por baixo (border-bottom) e uma fonte ligeiramente maior.
  - Garante um recuo padrão para as listas (ul) e um espaçamento agradável entre cada item (li).
- O Formulário (form, input, button)
  - Design moderno para a área onde o usuário digita os dados.
  - display: flex; flex-direction: column; gap: 12px;: Organiza os campos do formulário um abaixo do outro na vertical e cria um espaço automático de 12px entre eles.
  - input:focus: Quando o usuário clica dentro de uma caixa de texto para digitar, a borda dela muda de cinza para roxa (var(--primary-color)), indicando onde ele está mexendo.
  - form button: Estiliza o botão de envio. Ele fica roxo com letras brancas e em negrito. Ao passar o mouse (:hover), ele assume uma cor roxa mais escura (var(--primary-hover)) e o cursor do mouse vira uma "mãozinha" de clique (cursor: pointer).
- Mensagem de Feedback (#responseMessage)
  - Aquele elemento que o JavaScript usava para exibir "Sucesso" ou "Erro" ganha um espaçamento superior e o texto em negrito, destacando a resposta para o usuário.

script.js:
- Fiz primeiro um envio de formulário:
  - event.preventDefault(): Impede o comportamento padrão do navegador de recarregar a página inteira ao enviar o formulário.

  - FormData(this): Captura automaticamente todos os campos preenchidos no formulário de forma simples.

  - fetch('add_data.php', ...): Dispara uma requisição em segundo plano para o arquivo PHP que vai processar e salvar esses dados no servidor.

  - loadData(): Se o PHP disser que deu certo (data.success), essa função (explicada abaixo) é chamada para renderizar as novidades na tela na hora.
- Atualização dos Dados na Tela (loadData):
  - Esta função busca as informações atualizadas no servidor e reconstrói as listas de Habilidades (Skills) e Experiências na página HTML.
  - cacheBuster: Adiciona o timestamp atual na URL (ex: data.json?t=1717968000). Isso força o navegador a buscar sempre a versão mais recente do arquivo direto do servidor, em vez de usar uma versão salva no cache local.
  - skillList.innerHTML = '': Remove tudo o que estava escrito na tela antes de desenhar a lista nova.
  - document.createElement('li'): Cria novos elementos de lista HTML dinamicamente para cada item encontrado dentro do arquivo data.json.
- Inicialização Automática:
  - No final do código "window.onload = loadData;" Ela garante que, assim que a página terminar de carregar pela primeira vez no navegador do usuário, a função loadData() seja executada automaticamente, preenchendo as listas com os dados que já estão salvos no servidor.

app_data.php:
- Preparando a Resposta (header)
  - header(...): Informa ao navegador e ao JavaScript que a resposta que este arquivo vai dar será no formato JSON (e não uma página HTML normal).
  - $dataFile: Cria uma variável para guardar o nome do arquivo onde os dados serão salvos.
- Filtro de Segurança e Validação
  - O código verifica se os dados estão vindo do jeito certo e se não estão vazios
  - $_SERVER['REQUEST_METHOD'] === 'POST': Garante que o arquivo só processe dados se eles forem enviados pelo método POST (o método seguro usado pelo formulário). Se alguém tentar acessar esse arquivo direto pelo navegador, vai cair no else lá do final, dizendo "Método não suportado".
- Gerenciamento do Arquivo JSON
  - Antes de salvar, o PHP precisa ler o que já existe no arquivo para não apagar as habilidades e experiências antigas
  - Logo em seguida, o código faz checagens (as chamadas "defesas") para garantir que a estrutura do array possui as chaves skills e experiences, evitando bugs caso o arquivo JSON tenha sido corrompido ou modificado manualmente
- Inserindo os Novos Dados
  - Agora que o arquivo foi lido e o PHP já sabe o que tinha lá dentro, ele adiciona os novos dados no final das listas correspondentes.
- Salvando e Respondendo ao JavaScript
  - Finalmente, o PHP faz o caminho inverso: transforma o array atualizado de volta em texto JSON e salva no arquivo.
  - JSON_PRETTY_PRINT: Deixa o arquivo .json que é salvo no servidor organizado e bonito de ler por humanos (com quebras de linha e espaçamentos).
  - JSON_UNESCAPED_UNICODE: Garante que acentos e caracteres especiais (como "Açougue", "Informática" ou o próprio nome "Vinícius") sejam salvos corretamente sem virar códigos estranhos (como \u00ed).
 
data.json:
- Este é o arquivo data.json, escrito em formato JSON (JavaScript Object Notation). Ele funciona como o Banco de Dados simplificado da sua aplicação.

\img:
- Coloquei minha foto para passar pro site
