export const NodeService = {
    getTreeNodesData(tabs, currentTab) {
        return [
          {
            label: 'Attachments',
            icon: 'pi pi-folder',
            items: [
              {
                label: 'image-1.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-1.png","path": "Attachments/image-1.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-2.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-2.png","path": "Attachments/image-2.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-3.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-3.png","path": "Attachments/image-3.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-4.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-4.png","path": "Attachments/image-4.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-5.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-5.png","path": "Attachments/image-5.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image-6.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image-6.png","path": "Attachments/image-6.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'image.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "image.png","path": "Attachments/image.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Major7th.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Major7th.png","path": "Attachments/Major7th.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Minor_7th.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Minor_7th.png","path": "Attachments/Minor_7th.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20220903180503.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20220903180503.png","path": "Attachments/Pasted_image_20220903180503.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20220924191142.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20220924191142.png","path": "Attachments/Pasted_image_20220924191142.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327024214.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327024214.png","path": "Attachments/Pasted_image_20230327024214.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327024311.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327024311.png","path": "Attachments/Pasted_image_20230327024311.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327024657.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327024657.png","path": "Attachments/Pasted_image_20230327024657.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327024946.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327024946.png","path": "Attachments/Pasted_image_20230327024946.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327025125.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327025125.png","path": "Attachments/Pasted_image_20230327025125.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327025554.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327025554.png","path": "Attachments/Pasted_image_20230327025554.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327025654.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327025654.png","path": "Attachments/Pasted_image_20230327025654.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327030416.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327030416.png","path": "Attachments/Pasted_image_20230327030416.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327030748.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327030748.png","path": "Attachments/Pasted_image_20230327030748.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327030929.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327030929.png","path": "Attachments/Pasted_image_20230327030929.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327031127.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327031127.png","path": "Attachments/Pasted_image_20230327031127.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327031728.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327031728.png","path": "Attachments/Pasted_image_20230327031728.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327031825.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327031825.png","path": "Attachments/Pasted_image_20230327031825.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327031929.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327031929.png","path": "Attachments/Pasted_image_20230327031929.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327032236.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327032236.png","path": "Attachments/Pasted_image_20230327032236.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327032505.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327032505.png","path": "Attachments/Pasted_image_20230327032505.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'Pasted_image_20230327032742.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "Pasted_image_20230327032742.png","path": "Attachments/Pasted_image_20230327032742.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'repetition.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "repetition.png","path": "Attachments/repetition.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-1.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-1.png","path": "Attachments/s7image-1.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-2.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-2.png","path": "Attachments/s7image-2.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-3.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-3.png","path": "Attachments/s7image-3.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-4.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-4.png","path": "Attachments/s7image-4.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-5.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-5.png","path": "Attachments/s7image-5.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image-6.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image-6.png","path": "Attachments/s7image-6.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 's7image.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "s7image.png","path": "Attachments/s7image.png"});currentTab.value = tabs.value.length - 1;},
              },
              {
                label: 'timing.png',
                icon: 'pi pi-image',
                command: () => {tabs.value.push({"type": "image","label": "timing.png","path": "Attachments/timing.png"});currentTab.value = tabs.value.length - 1;},
              },
            ],
          },
          {
            label: 'LEI 1º Ano',
            icon: 'pi pi-folder',
            items: [
              {
                label: '1º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Programação Funcional',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Classes e Tipos.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Classes e Tipos.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Classes e Tipos.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Funções de ordem superior.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Funções de ordem superior.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Funções de ordem superior.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Input Output.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Input Output.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Input Output.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Listas por compreensão.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Listas por compreensão.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Listas por compreensão.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Tipos algébricos e árvores.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Tipos algébricos e árvores.pdf","path": "LEI 1º Ano/1º Semestre/Programação Funcional/Tipos algébricos e árvores.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
              {
                label: 'GitHub Links.md',
                icon: 'pi pi-file',
                command: () => {tabs.value.push({"type": "markdown","label": "GitHub Links.md","path": "LEI 1º Ano/GitHub Links.md","content": "<h1>1º ano</h1> <h2>1º semestre</h2> <ul> <li> <p>Programação funcional</p> <ul> <li><a href=\"https://github.com/rodrigo72/Programacao-Funcional-Haskell\">Teoria e exercícios - 50 questões e fichas</a></li> </ul> </li> <li> <p>Laboratórios de informática I</p> <ul> <li><a href=\"https://github.com/rodrigo72/Block-Dude\">Block Dude (Undertale)</a></li> </ul> </li> </ul> <h2>2º semestre</h2> <ul> <li>Programação Imperativa<ul> <li><a href=\"https://github.com/rodrigo72/Programacao-Imperativa-C\">Exercícios - 100 questões e fichas</a></li> </ul> </li> <li>Laboratórios de Informática II<ul> <li><a href=\"https://github.com/rodrigo72/Programacao-Imperativa-C/tree/main/Programa%C3%A7%C3%A3o%20Imperativa/Exerc%C3%ADcios%20de%20LI%20II\">Exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/Stack-Machine\">Stack Machine</a></li> </ul> </li> </ul>"});currentTab.value = tabs.value.length - 1;},
              },
            ],
          },
          {
            label: 'LEI 2º Ano',
            icon: 'pi pi-folder',
            items: [
              {
                label: '1º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Algoritmos e Complexidade',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Graph notes.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Graph notes.pdf","path": "LEI 2º Ano/1º Semestre/Algoritmos e Complexidade/Graph notes.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Regras dos Somatórios.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Regras dos Somatórios.pdf","path": "LEI 2º Ano/1º Semestre/Algoritmos e Complexidade/Regras dos Somatórios.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Stylus_write_algc.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Stylus_write_algc.pdf","path": "LEI 2º Ano/1º Semestre/Algoritmos e Complexidade/Stylus_write_algc.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Why3 - Ficha 1.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Why3 - Ficha 1.pdf","path": "LEI 2º Ano/1º Semestre/Algoritmos e Complexidade/Why3 - Ficha 1.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Arquitetura de Computadores',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'OpenMP book notes.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "OpenMP book notes.pdf","path": "LEI 2º Ano/1º Semestre/Arquitetura de Computadores/OpenMP book notes.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'OpenMP.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "OpenMP.pdf","path": "LEI 2º Ano/1º Semestre/Arquitetura de Computadores/OpenMP.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Processamento Vetorial.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Processamento Vetorial.pdf","path": "LEI 2º Ano/1º Semestre/Arquitetura de Computadores/Processamento Vetorial.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Stylus_write_ArqC.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Stylus_write_ArqC.pdf","path": "LEI 2º Ano/1º Semestre/Arquitetura de Computadores/Stylus_write_ArqC.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Estatística Aplicada',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Classificação de Dados.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Classificação de Dados.md","path": "LEI 2º Ano/1º Semestre/Estatística Aplicada/Classificação de Dados.md","content": "<h1>Classificação dos dados segundo a escala em que são expressos</h1> <p>Os dados podem ser expressos em quatro escalas distintas: <strong>nominal, ordinal, de intervalo/ intervalar, e absoluta</strong>.<br /> Os dados expressos numa das duas primeiras escalas dizem-se <strong>qualitativos</strong>, enquanto que os que forem expressos numa das duas últimas se dizem <strong>quantitativos</strong>.</p> <h1>Dados qualitativos: Escala Nominal e Escala Ordinal</h1> <p>Os dados dizem-se expressos numa escala nominal quando cada um deles dor identificado apenas pela atribuição de um nome que designa uma classe.</p> <p>As classes devem ser exaustivas (qualquer dado pertence a uma das classes), mutuamente exclusivas (cada dado pertence a uma só classe) e não ordenáveis (não existe nenhum critério relevante que permita estabelecer preferência por qualquer classe em relação às restantes).</p> <p><em>Exemplos</em>:<br /> - Classificação de pessoas pela cor do cabelo: preto, castanho, loiro, etc.<br /> - Classificação dos consumidores de bens pelo sexo: masculino ou feminino.</p> <p>Em relação aos dados expressos numa escala nominal, deve observar-se que as classes podem ser designadas, em particular, por números. Neste caso, para que a escala seja nominal, não se poderá estabelecer qualquer relação de ordem entre tais números.</p> <p><em>Exemplos</em>:<br /> - Classificação dos consumidores pelo sexo, no âmbito de um programa de computador: 0 (feminino) ou 1 (masculino)</p> <p>Aquilo que distingue a escala ordinal da escala nominal é a possibilidade de se estabelecer uma ordenação das classes nas quais os dados são classificados, segundo algum critério relevante.</p> <p>Exemplos:<br /> - Classificações obtidas pelos alunos num teste de Estatística: mau, medíocre, suficiente, bom ou muito bom.<br /> - Classificação dos clientes segundo o volume de encomendas que colocam: clientes A (muito importantes), B (importantes), ou C (menos importantes).</p> <h1>Dados Quantitativos: Escala de intervalo e Escala Absoluta</h1> <p>No caso da <strong>escala de intervalo</strong>/ intervalar, os dados são diferenciados e ordenados por números expressos numa escala cuja <strong>origem é arbitrária</strong>. Neste caso pode-se atribuir um significado à diferença entre esses números, mas não à razão entre eles. (Nota: Provavelmente devido aos axiomas da adição e principalmente da multiplicação, em que o conceito de 0 é bastante importante.)</p> <p><em>Exemplo</em>:<br /> Temperaturas registadas, em ºC, às 8 horas de dias sucessivos. Note-se que, neste caso, se em três dias consecutivos a temperatura atingir 5ºC, 10ºC e 20ºC, não faz sentido dizer-se que no terceiro dia esteve duas vezes mais quente do que no segundo.<br /> De facto, se a temperatura fosse expressa noutra escala, a razão entre as temperaturas registadas naqueles dias seria diferente (por exemplo, na escala Fahrenheit, aquela razão seria 68/50 = 1.36). Já em relação à variação de temperatura entre o segundo e o terceiro dia se pode afirmar, qualquer que seja a escala de temperaturas, que foi dupla da variação de temperatura entre o primeiro e o segundo dia.</p> <p>Contrariamente ao que sucede com a escala de intervalo, a escala absoluta tem uma origem fixa. Nesta escala, zero significa nada (note-se que, anteriormente, dizer que a temperatura era 0ºC não significava que não havia temperatura). Como consequência do facto de a origem ser fixa, a razão entre dados expressos numa escala absoluta passa a ter significado, tal como sucede com o intervalo entre tais dados.</p> <p><em>Exemplos</em>:<br /> - Pesos de pessoas, expressos em kg.<br /> - Volumes de investimento, expressos em contos</p> <h1>Resumo</h1> <ul> <li>Escala Nominal: Dados classificados por categorias não ordenadas</li> <li>Escala Ordinal: Dados classificados por categorias ordenadas</li> <li>Escala de Intervalo: Dados expressos numa escala numérica com origem arbitrária</li> <li>Escala absoluta: Dados expressos numa escala numérica com origem fixa</li> </ul>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Conceção de um procedimento adequado para a seleção de uma ou mais amostras.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "Conceção de um procedimento adequado para a seleção de uma ou mais amostras.md","path": "LEI 2º Ano/1º Semestre/Estatística Aplicada/Conceção de um procedimento adequado para a seleção de uma ou mais amostras.md","content": "<p>O processo de seleção de uma amostra a partir de uma população designa-se por <strong>amostragem</strong>.<br /> Para se poderem fazer inferências a partir de uma amostra e medir o rigor de tais inferências, esta deve ser selecionada de acordo com um processo de <strong>amostragem probabilística</strong>. Para este tipo de amostragem, cada um dos elementos da população tem hipóteses de ser incluído na amostra, sendo possível medir com rigor qual a possibilidade de tal suceder, através do cálculo da respetiva probabilidade.</p> <p>De todos os processos de amostragem probabilistica, o mais importante é o de <strong>amostragem aleatória</strong>. Este processo garante que todos os elementos da população têm as mesmas hipóteses de ser integrados na amostra. Através dele, consegue evitar-se qualquer <strong>enviesamento de seleção</strong>, isto é, afasta-se qualquer tendência sistemática para sub-representar ou sobrerrepresentar na amostra alguns elementos da população.</p>"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'FCD',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Análise de Sinais.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Análise de Sinais.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Análise de Sinais.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Análise de Sistemas.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Análise de Sistemas.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Análise de Sistemas.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Conversão analógico a digital.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Conversão analógico a digital.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Conversão analógico a digital.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Espectro de um sinal.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Espectro de um sinal.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Espectro de um sinal.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Multiplexagem.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Multiplexagem.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Multiplexagem.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Quantização.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Quantização.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Quantização.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'stylus_write_fcd.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "stylus_write_fcd.pdf","path": "LEI 2º Ano/1º Semestre/FCD/stylus_write_fcd.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Teorema da Amostragem.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Teorema da Amostragem.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Teorema da Amostragem.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Teoria da Informação - Parte 1.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Teoria da Informação - Parte 1.pdf","path": "LEI 2º Ano/1º Semestre/FCD/Teoria da Informação - Parte 1.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Física Moderna',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Relatividade - Resoluções.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatividade - Resoluções.pdf","path": "LEI 2º Ano/1º Semestre/Física Moderna/Relatividade - Resoluções.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'LI3',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Relatório - 1º Fase.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatório - 1º Fase.pdf","path": "LEI 2º Ano/1º Semestre/LI3/Relatório - 1º Fase.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Relatório - 2ª Fase.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatório - 2ª Fase.pdf","path": "LEI 2º Ano/1º Semestre/LI3/Relatório - 2ª Fase.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
              {
                label: '2º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Bases de Dados',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Anotações aleatórias.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações aleatórias.pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/Anotações aleatórias.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'ApresentaçãoFinal.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "ApresentaçãoFinal.pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/ApresentaçãoFinal.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Exercícios do teste modelo 2023.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Exercícios do teste modelo 2023.pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/Exercícios do teste modelo 2023.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Rabiscos (alguma teoria e exercícios).pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Rabiscos (alguma teoria e exercícios).pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/Rabiscos (alguma teoria e exercícios).pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Relatório.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatório.pdf","path": "LEI 2º Ano/2º Semestre/Bases de Dados/Relatório.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Investigação Operacional',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Teoria e Exercícios',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'exercicios_grafos.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "exercicios_grafos.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/exercicios_grafos.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'exercicios_tp6.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "exercicios_tp6.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/exercicios_tp6.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'exercicios_tp7.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "exercicios_tp7.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/exercicios_tp7.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Problemas-de-transportes-Grafos-Bipartidos.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "Problemas-de-transportes-Grafos-Bipartidos.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/Problemas-de-transportes-Grafos-Bipartidos.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Problemas-de-transportes-Introdução.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "Problemas-de-transportes-Introdução.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/Problemas-de-transportes-Introdução.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Problemas-de-transportes-Redes-com-capacidade.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "Problemas-de-transportes-Redes-com-capacidade.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/Problemas-de-transportes-Redes-com-capacidade.png"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Problemas-de-transportes-Redes-sem-capacidade.png',
                            icon: 'pi pi-image',
                            command: () => {tabs.value.push({"type": "image","label": "Problemas-de-transportes-Redes-sem-capacidade.png","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/Teoria e Exercícios/Problemas-de-transportes-Redes-sem-capacidade.png"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'TPs',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'tp1_enunciado.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "tp1_enunciado.pdf","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/TPs/tp1_enunciado.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'tp1_relatorio.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "tp1_relatorio.pdf","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/TPs/tp1_relatorio.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'tp2_enunciado.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "tp2_enunciado.pdf","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/TPs/tp2_enunciado.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'tp2_relatorio.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "tp2_relatorio.pdf","path": "LEI 2º Ano/2º Semestre/Investigação Operacional/TPs/tp2_relatorio.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'MNOnL',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Aproximação dos mínimos quadrados.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Aproximação dos mínimos quadrados.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Aproximação dos mínimos quadrados.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Integração numérica.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Integração numérica.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Integração numérica.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Interpolação polinomial.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Interpolação polinomial.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Interpolação polinomial.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Métodos iterativos de Newton e da Secante - Exercícios.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Métodos iterativos de Newton e da Secante - Exercícios.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Métodos iterativos de Newton e da Secante - Exercícios.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Rotinas Matlab.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Rotinas Matlab.pdf","path": "LEI 2º Ano/2º Semestre/MNOnL/Rotinas Matlab.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Sistemas de equações não lineares.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Sistemas de equações não lineares.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Sistemas de equações não lineares.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Sistemas de euqações lineares - exercícios.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Sistemas de euqações lineares - exercícios.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Sistemas de euqações lineares - exercícios.png"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Zeros de equações não lineares.png',
                        icon: 'pi pi-image',
                        command: () => {tabs.value.push({"type": "image","label": "Zeros de equações não lineares.png","path": "LEI 2º Ano/2º Semestre/MNOnL/Zeros de equações não lineares.png"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Programação Orientada a Objetos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Java Program Design - Anotações Ch. 1.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 1.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 1.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Java Program Design - Anotações Ch. 2.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 2.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 2.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Java Program Design - Anotações Ch. 3.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 3.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 3.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Java Program Design - Anotações Ch. 4.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 4.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 4.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Java Program Design - Anotações Ch. 5.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Java Program Design - Anotações Ch. 5.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Java Program Design - Anotações Ch. 5.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Relatório_TP.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Relatório_TP.pdf","path": "LEI 2º Ano/2º Semestre/Programação Orientada a Objetos/Relatório_TP.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Redes de Computadores',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Resumos RC 2023.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Resumos RC 2023.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/Resumos RC 2023.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'TPs',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'RC-TP1-Resumo-PL106.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "RC-TP1-Resumo-PL106.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/TPs/RC-TP1-Resumo-PL106.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'RC-TP2-PL106.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "RC-TP2-PL106.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/TPs/RC-TP2-PL106.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'RC-TP3-PL106.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "RC-TP3-PL106.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/TPs/RC-TP3-PL106.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'RC-TP4-PL106.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "RC-TP4-PL106.pdf","path": "LEI 2º Ano/2º Semestre/Redes de Computadores/TPs/RC-TP4-PL106.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Sistemas Operativos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Anotações - Guião 1.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Guião 1.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Anotações - Guião 1.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Anotações - Guião 2.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Guião 2.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Anotações - Guião 2.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Anotações - Guião 3.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Guião 3.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Anotações - Guião 3.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Anotações - Guião 4.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Guião 4.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Anotações - Guião 4.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'AnotaçõesTeoria.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "AnotaçõesTeoria.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/AnotaçõesTeoria.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Efficient struct storage.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Efficient struct storage.pdf","path": "LEI 2º Ano/2º Semestre/Sistemas Operativos/Efficient struct storage.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
              {
                label: 'GitHub Links.md',
                icon: 'pi pi-file',
                command: () => {tabs.value.push({"type": "markdown","label": "GitHub Links.md","path": "LEI 2º Ano/GitHub Links.md","content": "<h1>2º ano</h1> <h2>1º semestre</h2> <ul> <li>Algoritmos e Complexidade<ul> <li><a href=\"https://github.com/rodrigo72/UC-AlgC\">Teoria e exercícios (c/ backtracking)</a></li> </ul> </li> <li>Fundamentos de Comunicação de Dados<ul> <li><a href=\"https://github.com/rodrigo72/UC-FCD\">Teoria e algoritmo Shannon-Fano</a></li> </ul> </li> <li>Laboratórios de Informática III<ul> <li><a href=\"https://github.com/rodrigo72/LI3-Exercicios\">Exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/LI3\">Projeto</a></li> </ul> </li> </ul> <h2>2º semestre</h2> <ul> <li>Bases de dados<ul> <li><a href=\"https://github.com/rodrigo72/UC-Bases-de-Dados/tree/main/Other\">Teoria e exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/UC-Bases-de-Dados/tree/main/Projeto\">Bookstore</a></li> </ul> </li> <li>Investigação Operacional<ul> <li><a href=\"https://github.com/rodrigo72/UC-IO/tree/main/Other\">Teoria e exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/UC-IO\">Trabalhos práticos</a></li> </ul> </li> <li>Métodos Numéricos e Otimização não Linear<ul> <li><a href=\"https://github.com/rodrigo72/UC-MNOnL\">Teoria e exercícios (c/ Matlab)</a></li> </ul> </li> <li>Redes de Computadores<ul> <li><a href=\"https://github.com/rodrigo72/UC-RC/blob/main/Resumos%20RC%202023.pdf\">Resumos</a></li> <li><a href=\"https://github.com/rodrigo72/UC-RC/tree/main/TPs\">Trabalhos práticos</a></li> </ul> </li> <li>Sistemas Operativos<ul> <li><a href=\"https://github.com/rodrigo72/SO-exercicios\">Guiões</a></li> <li><a href=\"https://github.com/rodrigo72/Projeto-SO\">Projeto</a></li> </ul> </li> <li>Programação Orientada a Objetos<ul> <li><a href=\"https://github.com/rodrigo72/Vinted-OOP-Project\">Vinted</a></li> </ul> </li> </ul>"});currentTab.value = tabs.value.length - 1;},
              },
            ],
          },
          {
            label: 'LEI 3º Ano',
            icon: 'pi pi-folder',
            items: [
              {
                label: '1º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Comunicações por Computador',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Teoria',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'DNS.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "DNS.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/DNS.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Encaminhamento.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Encaminhamento.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/Encaminhamento.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'HTTP (continuação).pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "HTTP (continuação).pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/HTTP (continuação).pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'HTTP.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "HTTP.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/HTTP.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Nível de transporte.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Nível de transporte.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/Nível de transporte.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Segurança em Redes.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Segurança em Redes.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/Teoria/Segurança em Redes.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'TP1',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'CC - TP1 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "CC - TP1 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP1/CC - TP1 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'CC-Enunciado-TP1-2023-2024.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "CC-Enunciado-TP1-2023-2024.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP1/CC-Enunciado-TP1-2023-2024.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'CC-TP1-PL7-G9.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "CC-TP1-PL7-G9.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP1/CC-TP1-PL7-G9.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'TP2',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'CC-Enunciado-TP2-2023-2024.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "CC-Enunciado-TP2-2023-2024.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP2/CC-Enunciado-TP2-2023-2024.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Draft dos protocolos.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Draft dos protocolos.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP2/Draft dos protocolos.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'relatorio_tp2.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "relatorio_tp2.pdf","path": "LEI 3º Ano/1º Semestre/Comunicações por Computador/TP2/relatorio_tp2.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Cálculo de Programas',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Fichas',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Aula PL 01.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 01.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 01.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 02.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 02.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 02.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 03.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 03.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 03.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 04.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 04.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 04.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 05.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 05.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 05.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 06.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 06.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula PL 06.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula Pl 07.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula Pl 07.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Fichas/Aula Pl 07.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Teoria',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Aula T2 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula T2 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Aula T2 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula T3 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula T3 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Aula T3 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula T4 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula T4 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Aula T4 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula T5 - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula T5 - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Aula T5 - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Is abstraction key to computing.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Is abstraction key to computing.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Teoria/Is abstraction key to computing.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Testes',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Preparação - o outro documento estava muito grande.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Preparação - o outro documento estava muito grande.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Testes/Preparação - o outro documento estava muito grande.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Preparação para o teste.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Preparação para o teste.pdf","path": "LEI 3º Ano/1º Semestre/Cálculo de Programas/Testes/Preparação para o teste.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'DSS',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Fichas',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Aula PL 01.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 01.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Aula PL 01.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Aula PL 02.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 02.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Aula PL 02.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 04.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 04.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 04.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 05 pt.2.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 05 pt.2.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 05 pt.2.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 05.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 05.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 05.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 06.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 06.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 06.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 07.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 07.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 07.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Ficha 3.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Ficha 3.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Fichas/Ficha 3.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Projeto',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Enunciado - Anotações.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Enunciado - Anotações.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Projeto/Enunciado - Anotações.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Projeto DSS - Documento técnico.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Projeto DSS - Documento técnico.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Projeto/Projeto DSS - Documento técnico.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Teoria',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Anotações de teoria - Use cases.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Anotações de teoria - Use cases.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/Anotações de teoria - Use cases.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'T09 - APIs e subsistemas.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "T09 - APIs e subsistemas.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/T09 - APIs e subsistemas.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'T10 - Modelação comportamental.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "T10 - Modelação comportamental.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/T10 - Modelação comportamental.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'T11-12 - Modelação estrutural.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "T11-12 - Modelação estrutural.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/T11-12 - Modelação estrutural.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'T13-14 - Modelação comportamental.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "T13-14 - Modelação comportamental.pdf","path": "LEI 3º Ano/1º Semestre/DSS/Teoria/T13-14 - Modelação comportamental.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Inteligência Artificial',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Anotações - teoria 01.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - teoria 01.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Anotações - teoria 01.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Aula PL 02.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 02.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Aula PL 02.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Aula PL 04.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Aula PL 04.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Aula PL 04.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Fichas.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Fichas.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Fichas.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Lógica.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Lógica.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Lógica.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Population based.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Population based.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Population based.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Procura local e otimização.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Procura local e otimização.pdf","path": "LEI 3º Ano/1º Semestre/Inteligência Artificial/Procura local e otimização.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'LI4',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'asp.net.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "asp.net.pdf","path": "LEI 3º Ano/1º Semestre/LI4/asp.net.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'casos_de_uso_draft.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "casos_de_uso_draft.md","path": "LEI 3º Ano/1º Semestre/LI4/casos_de_uso_draft.md","content": "<p>Template:</p> <p>Use Case:<br />     Descrição:<br />     Pré-condição:<br />     Pós-condição:<br />     Fluxo normal:</p> <hr /> <ul> <li>criar conta</li> <li>fazer login</li> <li>editar o perfil</li> <li>consultar</li> <li>pesquisar</li> <li>adicionar</li> <li>criar</li> <li> <p>apagar</p> </li> <li> <p>criar conta</p> </li> <li>login</li> <li>editar conta</li> <li>pesquisar</li> <li>consulta de um lote</li> <li>consulta de um leilão</li> <li>consulta das listas de favoritos</li> <li>consulta das notificações</li> <li>consulta das categorias</li> <li>consulta dos lotes ganhos</li> <li>consulta dos lotes submetidos</li> <li>submeter um item ou conjunto de itens</li> <li>criar um lote</li> <li>aprovar um lote</li> <li>editar um lote</li> <li>remover um lote</li> <li>entrar num leilão</li> <li>sair de um leilão</li> <li>criar um leilão</li> <li>editar um leilão</li> <li>remover um leilão</li> </ul> <p>Use Case: Criar conta <br />     Descrição:<br />     Pré-condição:<br />     Pós-condição:<br />     Fluxo normal:</p>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'ideias_para_requisitos.md',
                        icon: 'pi pi-file',
                        command: () => {tabs.value.push({"type": "markdown","label": "ideias_para_requisitos.md","path": "LEI 3º Ano/1º Semestre/LI4/ideias_para_requisitos.md","content": "<p>registo do utilizador DONE<br /> autenticação na aplicação DONE<br /> terminar sessão DONE<br /> editar conta DONE<br /> pesquisar item / por artista    DONE<br /> notificações DONE<br /> consulta de um item DONE<br /> consulta das categorias DONE<br /> adicionar item à lista de favoritos DONE<br /> adicionar categoria à lista de favoritos DONE<br /> adicionar vendedor à lista de favoritos DONE<br /> avaliar um vendedor &ndash; DEIXOU DE EXISTIR (VENDEDORES SAO ABSTRAIDOS PELA EMPRESA)<br /> consulta do perfil do vendedor &ndash; DEIXOU DE EXISTIR<br /> remoção dos favoritos DONE<br /> consult<br /> ar lista de itens favoritos DONE<br /> consultar lista de vendedores favoritos DONE<br /> consultar lista de categorias favoritas DONE<br /> avaliar um vendedor depois de uma compra &ndash; DEIXOU DE EXISTIR<br /> lista de itens ganhos DONE<br /> lista de itens vendidos DONE<br /> lista de itens por vender (agendados e não agendados) DONE<br /> utilizador: submeter item DONE<br /> utilizador: pedido de remoção do leilão (?)<br /> administrador: iniciar ou parar leilão/ eventos<br /> administrador: adicionar e agendar item, editar, apagar<br /> administrador: enviar notificações para outros utilizadores<br /> colocar uma licitação <br /> registo como administrador<br /> entrar no leilao DONE<br /> sair do leilao DONE</p> <p>pagina de gestao de leilões<br />     - registo como administrador DONE<br />     - opçao de o leilao começar automaticamente DONE<br />     - criação de um leilão DONE<br />     - opção de começar manualmente DONE<br />     - lista de submissoes de items<br />     - aprovar ou nao um item<br />     - adicionar item a leilao DONE<br />     - remover item do leilao DONE<br />     - envio de notificaçoes para utilizadores</p> <hr /> <p>é obrigatório registar antes de poder licitar ou vender<br /> é possível assistir ao progresso de leilões públicos disponíveis sem estar registado<br /> um utilizador deve conseguir fazer login e registar<br /> payment method<br /> name on the card, card number, expiration, cvv, billing address (option: same as shipping address)<br /> Bank Account (ACH)<br /> morada de envio<br /> address, apt/suit, company (optional), country, state/province, city, zip/postal-code<br /> two-factor authentication: phone number<br /> é enviado um resultado da avaliação do registo por email<br /> um utilizador pode vender um produto submetendo um formulário que será avaliado e aprovado ou não aprovado pelos administradores<br /> o formulário deve conter informação detalhada acerca do produto:<br /> verificar identidade do utilizador, caso ainda não tenha sido feito<br /> foto que identifique a pessoa, foto(s) de um documento de identificação<br /> histórico: se foi comprado previamente e por que valor; como foi obtido; comprado/ herdado/ encontrado/ presente/ outro<br /> diversas fotos do produto<br /> dimensões do produto<br /> artista(s) a que está associado<br /> ano de criação/ de uso <br /> estado: excelentes condições, péssimas condições, etc.<br /> tipo de artigo e as suas características: vinil, instrumento, vestuário, etc.<br /> comprovação de originalidade/ assinatura/ etc. se necessário/ possível<br /> em geral a comissão de comprador é de 15% e a  comissão de vendedor de 20% (apenas quando é vendido), mas pode variar de item para item e de acordo com o price range da licitação final<br /> o utilizador tem um histórico de participação em leilões<br /> o utilizador tem um histórico de itens comprados<br /> cada item ou conjunto selecionado de itens a leiloar é anunciado previamente, existindo um respectivo countdown e starting price<br /> um utilizador pode escolher seguir determinadas categorias de itens<br /> um utilizador pode escolher ser notificado quando um determinado auction irá começar<br /> o item que o vendedor quer vender depois de aprovado tem de ser enviado para a empresa, e a empresa irá confirmar a receção do item por email ou pelo sistema/app/website<br /> o tipo de leilão será um ascending-clock-auction, com um primeiro desempate de second-price sealed-bid e um segundo desempate com base no tempo de saída.<br /> tanto vendedores como compradores pagam por transporte, com exceção de casos específicos<br /> lista de produtos favoritos<br /> schedule global/ individual<br /> vendedor não pode licitar num produto próprio</p> <p>&ndash; Divisão dos casos de uso por categorias</p> <ul> <li>Conta do utilizador</li> </ul> <p>Criar conta<br /> Login<br /> Redefinir palavra passe<br /> Adicionar novo método de pagamento<br /> Adicionar nova morada</p> <ul> <li>Consultas</li> </ul> <p>Pesquisar<br /> Consulta de um lote<br /> Consulta de um leilão<br /> Consulta das listas de favoritos<br /> Consulta das notificações<br /> Consulta das categorias<br /> Consulta de uma categoria<br /> Consulta dos lotes ganhos<br /> Consulta dos lotes submetidos<br /> Remoção de um item da lista de favoritos</p> <ul> <li>Funcionamento dos lotes</li> </ul> <p>Submeter lote<br /> Aprovar submissão<br /> Criar um lote<br /> Editar um lote</p> <ul> <li>Funcionamento dos leilões<br /> Entrar num leilão<br /> Sair de um leilão<br /> Ganhar um lote<br /> Criar um leilão<br /> Editar um leilão<br /> Remover um leilão</li> </ul>"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Online Auctions - Theory and Examples.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Online Auctions - Theory and Examples.pdf","path": "LEI 3º Ano/1º Semestre/LI4/Online Auctions - Theory and Examples.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'relatorio-li4-g19.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "relatorio-li4-g19.pdf","path": "LEI 3º Ano/1º Semestre/LI4/relatorio-li4-g19.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Requirements.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Requirements.pdf","path": "LEI 3º Ano/1º Semestre/LI4/Requirements.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Sistemas Distribuídos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Perterson\'s, & Bakery Algorithm.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Perterson\'s, & Bakery Algorithm.pdf","path": "LEI 3º Ano/1º Semestre/Sistemas Distribuídos/Perterson's, & Bakery Algorithm.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'report.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "report.pdf","path": "LEI 3º Ano/1º Semestre/Sistemas Distribuídos/report.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                ],
              },
              {
                label: '2º Semestre',
                icon: 'pi pi-folder',
                items: [
                  {
                    label: 'Análise de Projetos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Plano de Negócios.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Plano de Negócios.pdf","path": "LEI 3º Ano/2º Semestre/Análise de Projetos/Plano de Negócios.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'relatorio.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "relatorio.pdf","path": "LEI 3º Ano/2º Semestre/Análise de Projetos/relatorio.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Aprendizagem e Decisão Inteligentes',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'ADI-teoria.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "ADI-teoria.pdf","path": "LEI 3º Ano/2º Semestre/Aprendizagem e Decisão Inteligentes/ADI-teoria.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Anotações - Religious Affiliation in the Twenty-First Century.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Anotações - Religious Affiliation in the Twenty-First Century.pdf","path": "LEI 3º Ano/2º Semestre/Aprendizagem e Decisão Inteligentes/Anotações - Religious Affiliation in the Twenty-First Century.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'relatorio-g21.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "relatorio-g21.pdf","path": "LEI 3º Ano/2º Semestre/Aprendizagem e Decisão Inteligentes/relatorio-g21.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Computação Gráfica',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Relatórios',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Relatório CG - Fase 1.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Relatório CG - Fase 1.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Relatórios/Relatório CG - Fase 1.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Relatório CG - Fase 2.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Relatório CG - Fase 2.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Relatórios/Relatório CG - Fase 2.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Relatório CG - Fase 4.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Relatório CG - Fase 4.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Relatórios/Relatório CG - Fase 4.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Relatório CG -Fase 3.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Relatório CG -Fase 3.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Relatórios/Relatório CG -Fase 3.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Resolução de testes',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Teste 20122013.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Teste 20122013.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Resolução de testes/Teste 20122013.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Teste 2021.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Teste 2021.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Resolução de testes/Teste 2021.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Teste 2122.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Teste 2122.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Resolução de testes/Teste 2122.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'Teste 2223.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Teste 2223.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Resolução de testes/Teste 2223.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'Teoria',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'Desenhar um boneco de neve & Camera.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "Desenhar um boneco de neve & Camera.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Teoria/Desenhar um boneco de neve & Camera.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'The Geometric Pipeline.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "The Geometric Pipeline.pdf","path": "LEI 3º Ano/2º Semestre/Computação Gráfica/Teoria/The Geometric Pipeline.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Interface Pessoa-Máquina',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Apresentação IPM.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Apresentação IPM.pdf","path": "LEI 3º Ano/2º Semestre/Interface Pessoa-Máquina/Apresentação IPM.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'proposta_de_interface.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "proposta_de_interface.pdf","path": "LEI 3º Ano/2º Semestre/Interface Pessoa-Máquina/proposta_de_interface.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Processamento de Linguagens',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Análise sintática descendente.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Análise sintática descendente.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Análise sintática descendente.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'First & Follow function - solved problems (set 1 & 2).pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "First & Follow function - solved problems (set 1 & 2).pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/First & Follow function - solved problems (set 1 & 2).pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'FIRST() and FOLLOW() functions.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "FIRST() and FOLLOW() functions.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/FIRST() and FOLLOW() functions.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Linguagens - 1 e 2.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Linguagens - 1 e 2.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Linguagens - 1 e 2.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Linguagens - 3 e 4.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Linguagens - 3 e 4.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Linguagens - 3 e 4.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'LL(1) Parsing - Solved Problems (set 1 & 2).pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "LL(1) Parsing - Solved Problems (set 1 & 2).pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/LL(1) Parsing - Solved Problems (set 1 & 2).pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'LL(1) Parsing Table & Parsing.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "LL(1) Parsing Table & Parsing.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/LL(1) Parsing Table & Parsing.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'LR(0) & SLR(1) Automaton & Parsing Table.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "LR(0) & SLR(1) Automaton & Parsing Table.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/LR(0) & SLR(1) Automaton & Parsing Table.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'LR(0) & SLR(1) Parsing.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "LR(0) & SLR(1) Parsing.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/LR(0) & SLR(1) Parsing.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Regex crossword.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Regex crossword.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Regex crossword.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Resolução - Teste PL 2023.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Resolução - Teste PL 2023.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Resolução - Teste PL 2023.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                      {
                        label: 'Resolução - Teste PL 2024.pdf',
                        icon: 'pi pi-file-pdf',
                        command: () => {tabs.value.push({"type": "pdf","label": "Resolução - Teste PL 2024.pdf","path": "LEI 3º Ano/2º Semestre/Processamento de Linguagens/Resolução - Teste PL 2024.pdf"});currentTab.value = tabs.value.length - 1;},
                      },
                    ],
                  },
                  {
                    label: 'Segurança de Sistemas Informáticos',
                    icon: 'pi pi-folder',
                    items: [
                      {
                        label: 'Guioes',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'guiao2.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao2.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao2.md","content": "<h1>Respostas das Questões</h1> <h2>Q1</h2> <p>Depois de instalada, a biblioteca <code>cryptography</code> foi atualizada com o seguinte comando:</p> <pre class=\"codehilite\"><code class=\"language-bash\">pip install --upgrade cryptography </code></pre>  <p><img alt=\"Alt text\" src=\"g1-1.png\" /></p> <h1>Relatório do Guião da Semana 2</h1>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao3.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao3.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao3.md","content": "<h1>Respostas das Questões</h1> <h2>Q1</h2> <blockquote> <p>Consegue observar diferenças no comportamento dos programas otp.py e bad_otp.py? Se sim, quais?</p> </blockquote> <p>A diferença entre os dois programas está no modo de gerar uma sequência de bytes aleatórios.</p> <p>O <code>otp.py</code> utiliza <code>return os.urandom(n_bytes)</code>, enquanto que o <code>bad_otp.py</code> utiliza <code>random.seed(random.randbytes(2)); random.randbytes(n)</code> &mdash; $2^{16} = 65536$ combinações possíveis. Eventualmente, para um $n$ grande, poderá haver repetições na sequência de bytes gerados.</p> <h2>Q2</h2> <blockquote> <p>O ataque realizado no ponto anterior não entra em contradição com o resultado que estabelece a &ldquo;segurança absoluta&rdquo; da cifra one-time pad? Justifique.</p> </blockquote> <p>Em teoria o OTP é seguro (possui &ldquo;segurança absoluta&rdquo;), no entanto, surgem problemas de segurança quando a geração da chave não é verdadeiramente aleatória.</p> <p>Neste caso, sabendo a seed e método de geração utilizado, é possível, através de um certo número de iterações &mdash; dependente do tamanho da seed &mdash; decifrar a mensagem. Para além disso, também não assegura integrididade.</p> <h1>Relatório do Guião da Semana 3</h1> <h2>Utils</h2> <p>Contém algumas constantes (alfabeto, frequências das letras da língua portuguesa, letra de base para as cifras, etc.), e funções genéricas/ utilizadas por mais do que um ficheiro, como:<br /> - <code>read_file_as_bytes</code>;<br /> - <code>write_bytes_to_file</code>;<br /> - <code>check_words</code> - verifica se uma das palavras da lista está presente num texto;<br /> - <code>calculate_score</code> - Retorna a média dos scores de cada letra;<br /> - <code>preprocess_message</code> - converte letras para maiúsculas, &lsquo;filtra&rsquo; todos os outros caracteres e remove acentos.</p> <h2>César</h2> <p>Nesta cifra, cada letra avança, circularmente, um certo número de vezes no alfabeto. A chave é dada pela letra para qual uma letra <code>BASE</code> avança quando cifrada. (<a href=\"https://cryptii.com/pipes/caesar-cipher\">Website utilizado para verificação</a>).</p> <p>No ataque, tentamos decifrar um texto com todas a letras do alfabeto, e, para cada uma, é dado um score que verifica se as frequências das letras do texto decifrado estão próximas das frequências &ldquo;tabeladas&rdquo; através do cálculo $(\sum_{i=1}^{26} |f_{e} - f_{i}|) / 26$.</p> <p>Também foi feita uma função que tenta encontrar a chave usada para cifrar um texto, caso se saiba da existência de uma palavra nesse texto (não foi pedida no guião).</p> <h2>Vigenère</h2> <p>A lógica é semelhante à utilizada na cifra de César, mas utiliza uma <em>keyword</em>/ sequência de letras em vez de apenas uma letra como chave. Por exemplo, caso <code>len(texto) == 10</code> e <code>len(chave) == 3</code>, as posições 0, 3, 6 e 9 do texto serão cifradas com a letra na posição 0 da chave.</p> <ul> <li><a href=\"https://cryptii.com/pipes/vigenere-cipher\">Verificação</a></li> <li><a href=\"https://youtu.be/rccRQcyKB5g?si=UMLCAKBgeUWRDTfP\">Visualização</a></li> </ul> <p>No ataque, encontra-se uma cifra que minimiza o score do texto decifrado. Para isso, é utilizada a mesma lógica do ataque da cifra de césar, mas por intervalos de posições, <code>cryptogram[idx::key_size]</code> &mdash; tendo em conta que se sabe o tamanho da chave.</p> <h2>OTP</h2> <p>A encriptação OTP requer que a chave tenha comprimento igual ou superior à mensagem de modo a aplicar a operação XOR a cada byte da chave com o byte correspondente da mensagem, <code>[b1 ^ b2 for b1, b2 in zip(key, message)]</code>.</p> <p>O programa <code>bad_otp.py</code> utiliza &ldquo;an INSECURE pseudo-random number generator&rdquo;.</p> <p>No ataque ao <code>bad_otp</code>, são percorridas todas as seeds (65536) até se verificar <code>check_words(result_str, words)</code>. (Caso essas iterações não consigam decifrar, estas serão executadas novamente com um incremento no tamanho da chave &mdash; assume-se que pode ser maior do que o tamanho da mensagem).</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao4.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao4.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao4.md","content": "<h1>Respostas das Questões</h1> <h2>Q2</h2> <blockquote> <p>Qual o impacto de se considerar um <em>NONCE</em> fixo (e.g. tudo 0)? Que implicações terá essa prática na segurança da cifra?</p> </blockquote> <p>Considerar um NONCE fixo, como um valor de todos os bits igual a zero, pode comprometer seriamente a segurança da cifra. Isso pode levar à reutilização do NONCE, vazamento de informações, vulnerabilidade a ataques criptográficos e comprometimento da confidencialidade dos dados cifrados. Isso permite que um atacante aplique um ataque de repetição, onde o mesmo texto cifrado é retransmitido.</p> <h2>Q3</h2> <blockquote> <p>Qual o impacto de utilizar o programa chacha20_int_attck.py nos criptogramas produzidos pelos programas cfich_aes_cbc.py e cfich_aes_ctr.py? Comente/justifique a resposta.</p> </blockquote> <p>O programa <code>chacha20_int_attck.py</code> é projetado para realizar um ataque de integridade em arquivos criptografados usando o algoritmo <code>ChaCha20</code>. Ele explora a propriedade do algoritmo <code>ChaCha20</code> em que o texto cifrado pode ser manipulado sem a necessidade da chave de criptografia, apenas conhecendo parte do texto original e sua posição no arquivo.</p> <p>Os programas <code>cfich_aes_cbc.py</code> e <code>cfich_aes_ctr.py</code>, por outro lado, utilizam os modos de operação <code>CBC (Cipher Block Chaining)</code> e <code>CTR (Counter)</code>, respectivamente, do algoritmo AES para criptografar arquivos. Esses modos de operação têm propriedades diferentes em comparação com o <code>ChaCha20</code>, e o ataque proposto pelo <code>chacha20_int_attck.py</code> não seria aplicável a eles da mesma maneira.</p> <h1>Relatório do Guião da Semana 4</h1> <h2>Utils</h2> <p>Contém algumas constantes (alfabeto, frequências das letras da língua portuguesa, letra de base para as cifras, etc.), e funções genéricas/ utilizadas por mais do que um ficheiro, como:<br /> - <code>read_file_as_bytes</code>;<br /> - <code>write_bytes_to_file</code>;</p> <h2>cfich_chacha20.py</h2> <ul> <li> <p>encrypt_file: Recebe o nome do arquivo, o texto a ser criptografado e a chave de criptografia. Gera um nonce aleatório, inicializa um objeto Cipher com o algoritmo ChaCha20 e o nonce gerado, cifra o texto usando o encryptor do objeto Cipher e escreve o nonce concatenado com o texto cifrado em um novo arquivo com a extensão &ldquo;.enc&rdquo;.</p> </li> <li> <p>decrypt_file: Recebe o nome do arquivo, o texto cifrado e a chave de descriptografia. Extrai o nonce e o texto cifrado do texto fornecido, inicializa um objeto Cipher com o algoritmo ChaCha20 e o nonce extraído, decifra o texto usando o decryptor do objeto Cipher e escreve o texto decifrado em um novo arquivo com a extensão &ldquo;.dec&rdquo;.</p> </li> </ul> <p>A função main determina o modo de operação de acordo com uma das seguintes opções:</p> <ul> <li> <p>No modo &lsquo;setup&rsquo;, gera uma chave de criptografia aleatória e a escreve em um arquivo especificado.</p> </li> <li> <p>No modo &lsquo;enc&rsquo; (criptografia), lê o texto do arquivo e a chave de criptografia de arquivos especificados, e então chama a função encrypt_file.</p> </li> <li> <p>No modo &lsquo;dec&rsquo; (descriptografia), lê o texto cifrado do arquivo e a chave de descriptografia de arquivos especificados, e então chama a função decrypt_file.</p> </li> </ul> <h2>chacha20_int_attck.py</h2> <p>O arquivo criptografado é lido como uma sequência de bytes. A posição em que a alteração será feita é ajustada para levar em conta o comprimento do nonce.</p> <p>Depois, se não existir nenhum erro, calcula a chave utilizada para criptografar o texto original. Isso é feito através de um XOR entre o texto original e o texto cifrado na posição especificada. Como o XOR é reversível, isso nos dá a chave utilizada na cifração.</p> <p>Com a chave calculada, o script realiza um XOR entre o novo texto e a chave para obter o novo texto cifrado.</p> <p>O novo texto cifrado é substituído na posição especificada no arquivo original. O arquivo resultante é então gravado em disco com uma extensão adicional &ldquo;.attck&rdquo; para indicar que foi alvo de um ataque de integridade.</p> <h2>pbenc_chacha20.py</h2> <ul> <li> <p>encrypt_file: Esta função recebe o nome do arquivo, o texto a ser criptografado e a chave de criptografia. Ele gera um nonce aleatório, inicializa um objeto Cipher com o algoritmo ChaCha20 e o nonce fornecido, e então cifra o texto usando o encryptor do objeto Cipher. Por fim, ele escreve o nonce concatenado com o texto cifrado em um novo arquivo com a extensão &ldquo;.enc&rdquo;.</p> </li> <li> <p>decrypt_file: Esta função recebe o nome do arquivo, o texto cifrado e a chave de descriptografia. Ela extrai o nonce e o texto cifrado do texto fornecido, inicializa um objeto Cipher com o algoritmo ChaCha20 e o nonce extraído, e então decifra o texto usando o decryptor do objeto Cipher. Por fim, ele escreve o texto decifrado em um novo arquivo com a extensão &ldquo;.dec&rdquo;.</p> </li> </ul> <p>A função main trata de realizar as seguintes operações:</p> <ul> <li> <p>Para enc (criptografia), ele gera um <em>salt</em> (um valor aleatório usado como entrada para o processo de derivação de chave PBKDF2), cria uma chave derivada da senha usando PBKDF2, cifra o arquivo usando essa chave e escreve o <em>salt</em> e a chave em arquivos separados.</p> </li> <li> <p>Para dec (descriptografia), ele lê o <em>salt</em> do arquivo, gera a chave derivada da senha usando o mesmo processo, verifica se a chave coincide com a chave armazenada anteriormente, e depois decifra o arquivo usando a chave recuperada.</p> </li> </ul>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao5.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao5.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao5.md","content": "<h1>Respostas das Questões</h1> <h2>Q1</h2> <blockquote> <p>Qual o impacto de executar o programa chacha20_int_attck.py sobre um criptograma produzido por pbenc_chacha20_poly1305.py? Justifique.</p> </blockquote> <p>Não é possível atacar com sucesso um criptograma produzido por <code>pbenc_chacha20_poly1305.py</code> com <code>chacha20_int_attck.py</code>, visto que oferece integridade e confidencialidade (combinação de ChaCha20 e <a href=\"https://en.wikipedia.org/wiki/Poly1305\">Poly1305</a>).</p> <p><img alt=\"alt text\" src=\"image-5.png\" /><br /> <img alt=\"alt text\" src=\"image-6.png\" /></p> <h2>Q2</h2> <blockquote> <p>Qual o motivo da sugestão de usar m2 com mais de 16 byte? Será possível contornar essa limitação?</p> </blockquote> <p>Primeiramente, é necessário perceber como funciona o <code>symmetric padding</code> utilizado:</p> <blockquote> <p><a href=\"https://cryptography.io/en/latest/hazmat/primitives/padding/\">PKCS7</a> padding works by appending N bytes with the value of chr(N), where N is the number of bytes required to make the final block of data the same size as the block size. </p> </blockquote> <p>Portanto, o padding é feito com N bytes com o valor <code>char(N)</code>, e não apenas <code>0</code>, o que faz com que a operação XOR entre o padding e a tag seja também significativa.</p> <p>Exemplo de um caso simples:</p> <p><img alt=\"alt text\" src=\"image.png\" /></p> <pre class=\"codehilite\"><code class=\"language-python\">padder = padding.PKCS7(128).padder() padded_m1 = padder.update(m1) + padder.finalize()  padder = padding.PKCS7(128).padder() padded_m2 = padder.update(m2) + padder.finalize()  new_m2 = bytes(x ^ y for x, y in zip(padded_m2[:16], tag1)) + m2[16:]  m3 = padded_m1 + new_m2 </code></pre>  <p>No entanto, desta forma o comprimento de <code>m3</code> aumenta para um múltiplo de 16, o que faz com que a função <code>cbcmac_verify</code> adicione mais 16 bytes de padding, acabando por diferir com <code>m2</code> e portanto resultará em <code>False</code>:</p> <p><img alt=\"alt text\" src=\"image-1.png\" /></p> <p>Caso se impeça que essa adição de padding aconteça, já retornará <code>True</code>.</p> <pre class=\"codehilite\"><code class=\"language-python\">def cbcmac_verify(tag, m_bytes, k):     # padder = padding.PKCS7(128).padder()     # padded_m = padder.update(m_bytes) + padder.finalize()     iv = bytearray(16)     cipher = Cipher(algorithms.AES(k), modes.CBC(iv))     encryptor = cipher.encryptor()     ct = encryptor.update(m_bytes) + encryptor.finalize()     newtag = ct[-16:]     return tag == newtag </code></pre>  <p><img alt=\"alt text\" src=\"image-2.png\" /></p> <p>Apesar disso, reconhecemos que esta não é melhor forma de contornar a limitação - é muito provável que exista uma melhor.</p> <h1>Relatório do Guião da Semana 5</h1> <h2>Ataque CBC-MAC</h2> <p>Lógica utilizada para o ataque ao CBC-MAC:</p> <p><img alt=\"alt text\" src=\"image-3.png\" /></p> <p><img alt=\"alt text\" src=\"image-4.png\" /></p> <p>Primeiramente, é preciso ter um MAC <code>t</code> para uma mensagem <code>m</code>, e um MAC <code>t\'</code> para uma mensagem <code>m\'</code>. Depois, faz-se uma concatenação de <code>m</code> (com padding) com o XOR entre o primeiro bloco de <code>m\'</code> e a tag <code>t</code>, e, finalmente, com o resto de <code>m\'</code>. A tag <code>t\'</code> seŕa válida para o resultado dessa concatenação.</p> <h2>Encrypt-then-MAC</h2> <p>Solicitamos mais bytes à KDF utilizada para derivar a chave:</p> <pre class=\"codehilite\"><code class=\"language-python\">h = hmac.HMAC(key[32:], hashes.SHA256()) ... algorithm = algorithms.AES(key[:32]) </code></pre>  <p>Os primeiros 16 bytes do ciphertext são o nonce, os restantes são o texto encriptado, exceto os últimos 32 que são a <em>signature</em> (verificada pelo HMAC).</p> <p>(O HMAC recebe o nonce e o texto encriptado juntos, mas a cifra AES no modo CTR recebe esses dois separadamente).</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao6.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao6.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao6.md","content": "<h1>Relatório do Guião da Semana 6</h1> <h2>PROG: Client_sec.py e Server_sec.py</h2> <blockquote> <p>Pretende-se modificar os programas fornecidos por forma a protegeram a comunicação entre Cliente/Servidor. Para isso deverá fazer uso de uma cifra autenticada como as utilizadas no último guião (e.g. AES-GCM).</p> </blockquote> <p>O server e o cliente têm de ter conhecimento de uma chave combinada de modo a conseguirem comunicar com mensagens cifradas. Para além disso, têm de enviar também o nonce criado, para além da mensagem cifrada:</p> <pre class=\"codehilite\"><code class=\"language-py\">aesgcm = AESGCM(key) nonce = os.urandom(12) ct = aesgcm.encrypt(nonce, msg, password) writer.write(nonce + ct) </code></pre>  <h2>PROG: Client_dh.py e Server_dh.py</h2> <blockquote> <p>Pretende-se adaptar os programas realizados no ponto anterior para que a chave por eles utilizada resulte da execução do protocolo de acordo de chaves Diffie-Hellman.</p> </blockquote> <p>Para isso, foi necessário alterar os programas de modo a que fosse efetuado um &ldquo;handshake inicial&rdquo; em qua cada um partilha a sua chave pública.<br /> E assim cada um fica com mesma shared key: <code>shared_key = private_key.exchange(peer_public_key)</code>. (p e g são fixos).<br /> O segredo criptográfico utilizado para cifrar e decifrar é derivado a partir dessa shared key <code>key = hkdf.derive(shared_key)</code>.</p> <p>As public keys têm de ser serializadas (para <code>bytes</code>) antes de serem enviadas, e têm de ser deserializadas, quando recebidas, para os tipos de objetos correspondentes. Assim, utilizamos o enconding <code>PEM</code>: <code>pem = public_key.public_bytes( encoding=serialization.Encoding.PEM, ...)</code>, e para deconding utilizamos a função <code>load_pem_public_key(...)</code>.</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                          {
                            label: 'guiao7.md',
                            icon: 'pi pi-file',
                            command: () => {tabs.value.push({"type": "markdown","label": "guiao7.md","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/Guioes/guiao7.md","content": "<h1>Respostas das Questões</h1> <h2>Q1</h2> <blockquote> <p>Como pode verificar que as chaves fornecidas nos ficheiros mencionados (por exemplo, em MSG_SERVER.key e MSG_SERVER.crt) constituem de facto um par de chaves RSA válido?</p> </blockquote> <p>Contéudo:<br /> - <code>openssl rsa -text -noout -in MSG_SERVER.key</code> com a password &lsquo;1234&rsquo;</p> <p><img alt=\"alt text\" src=\"s7image-1.png\" /></p> <ul> <li><code>openssl x509 -text -noout -in MSG_SERVER.crt</code></li> </ul> <p><img alt=\"alt text\" src=\"s7image.png\" /></p> <p>Para verificar que um par de chaves RSA é válido (<em>private key matches with public key in the certificate</em>), é preciso comparar o <em>modulus</em> da chave pública no certificado com o da chave privada.</p> <p><code>openssl rsa -modulus -noout -in MSG_SERVER.key | openssl md5</code><br /> <img alt=\"alt text\" src=\"s7image-2.png\" /></p> <p>Verificar consistência e validade da chave privada:<br /> <code>openssl rsa -check -noout -in MSG_SERVER.key</code><br /> <img alt=\"alt text\" src=\"s7image-3.png\" /></p> <p><code>openssl x509 -modulus -noout -in MSG_SERVER.crt | openssl md5</code><br /> <img alt=\"alt text\" src=\"s7image-4.png\" /></p> <p>Ou:</p> <pre class=\"codehilite\"><code class=\"language-bash\">openssl x509 -noout -modulus -in MSG_SERVER.crt &gt; crt-mod.txt openssl rsa -noout -modulus -in MSG_SERVER.key &gt; key-mod.txt diff3 crt-mod.txt key-mod.txt </code></pre>  <h2>Q2</h2> <blockquote> <p>Visualize o conteúdo dos certificados fornecidos, e refira quais dos campos lhe parecem que devam ser objecto de atenção no procedimento de verificação.</p> </blockquote> <p><img alt=\"alt text\" src=\"s7image-5.png\" /></p> <h1>Relatório do Guião da Semana 7</h1> <p><img alt=\"alt text\" src=\"s7image-6.png\" /></p> <p>Notes:<br /> - Pode-se confiar na chave pública do Server, por exemplo, pois esta está no certificado enviado que é comprovado por uma <em>trusted third party</em>, CA.<br /> - Caso, por exemplo, a chave pública do servidor (DL) for modificada no caminho, esta não será igual à que está na assinatura e, portanto, não será possível validar a assinatura.<br /> - Assim, para além de um <em>intruder</em> nunca conseguir saber qual é a chave partilhada, também não conseguirá realizar ataques de man-in-the-middle.</p>"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                      {
                        label: 'TPs',
                        icon: 'pi pi-folder',
                        items: [
                          {
                            label: 'SSI - TP1 - G21 - Relatório.pdf',
                            icon: 'pi pi-file-pdf',
                            command: () => {tabs.value.push({"type": "pdf","label": "SSI - TP1 - G21 - Relatório.pdf","path": "LEI 3º Ano/2º Semestre/Segurança de Sistemas Informáticos/TPs/SSI - TP1 - G21 - Relatório.pdf"});currentTab.value = tabs.value.length - 1;},
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                label: 'GitHub Links.md',
                icon: 'pi pi-file',
                command: () => {tabs.value.push({"type": "markdown","label": "GitHub Links.md","path": "LEI 3º Ano/GitHub Links.md","content": "<h1>3º ano</h1> <h2>1º semestre</h2> <ul> <li>Cálculo de Programas<ul> <li><a href=\"https://github.com/rodrigo72/CP-exercicios\">Teoria e exercícios</a></li> </ul> </li> <li>Comunicações por Computador<ul> <li><a href=\"https://github.com/rodrigo72/CC/tree/main/Teoria\">Teoria</a></li> <li><a href=\"https://github.com/rodrigo72/CC\">Trabalhos práticos</a></li> </ul> </li> <li>Desenvolvimento de Sistemas de Software<ul> <li><a href=\"https://github.com/rodrigo72/DSS-exercicios\">Teoria e exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/DSS\">Projeto</a></li> </ul> </li> <li>Inteligência Artificial<ul> <li><a href=\"https://github.com/rodrigo72/IA-exercicios\">Exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/IA\">Projeto</a></li> </ul> </li> <li>Laboratórios de Informática IV<ul> <li><a href=\"https://github.com/rodrigo72/LI4\">ASP.NET Web App</a></li> </ul> </li> <li>Sistemas Distribuídos<ul> <li><a href=\"https://github.com/rodrigo72/SD-exercicios\">Guiões</a></li> <li><a href=\"https://github.com/rodrigo72/SD\">Cloud Computing</a></li> </ul> </li> </ul> <h2>2º semestre</h2> <ul> <li>Processamento de Linguagens <ul> <li><a href=\"https://github.com/rodrigo72/PL2024\">TPCs</a></li> <li><a href=\"https://github.com/rodrigo72/PL-Project\">Forth Compiler</a></li> </ul> </li> <li>Computação Gráfica<ul> <li><a href=\"https://github.com/rodrigo72/CG-exercicios\">Exercícios</a></li> <li><a href=\"https://github.com/rodrigo72/CG\">3D Rendering Engine</a></li> </ul> </li> <li>Aprendizagem e Decisão Inteligentes<ul> <li><a href=\"https://github.com/rodrigo72/ADI-exercicios\">Fichas</a></li> <li><a href=\"https://github.com/rodrigo72/ADI\">Projeto KNIME</a></li> </ul> </li> <li>Interface Pessoa-Máquina<ul> <li><a href=\"https://github.com/rodrigo72/IPM-exercicios\">Fichas</a></li> <li><a href=\"https://github.com/rodrigo72/IPM\">Vue.js website</a></li> </ul> </li> <li>Análise de Projetos<ul> <li><a href=\"https://github.com/rodrigo72/AP\">TP</a></li> </ul> </li> <li>Segurança de Sistemas Informáticos<ul> <li><a href=\"https://github.com/rodrigo72/SSI-guioes\">Guiões</a></li> <li><a href=\"https://github.com/rodrigo72/SSI-TPs\">TPs</a></li> </ul> </li> </ul>"});currentTab.value = tabs.value.length - 1;},
              },
            ],
          },
        ]
    },

    getTreeNodes(tabs, currentTab) {
        return Promise.resolve(this.getTreeNodesData(tabs, currentTab));
    }
};
