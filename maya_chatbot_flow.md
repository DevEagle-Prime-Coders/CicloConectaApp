# Fluxo Conversacional e Conteúdo Base para o Chatbot Maya (CicloConecta)

Este documento descreve o fluxo de conversação inicial, os principais tópicos e o conteúdo base para o chatbot Maya, a ser integrado no aplicativo CicloConecta. O objetivo é fornecer informações precisas, acessíveis e empáticas sobre Saúde Sexual e Reprodutiva (SSR).

## 1. Princípios Gerais do Chatbot Maya:

*   **Linguagem:** Simples, clara, acolhedora, respeitosa e culturalmente sensível. Evitar jargões técnicos sempre que possível ou explicá-los.
*   **Tom:** Empático, informativo e não julgador.
*   **Privacidade:** Informar à usuária que as conversas são para fins informativos e como a privacidade é tratada (especialmente se dados forem armazenados ou analisados, mesmo que anonimamente).
*   **Limitações:** Deixar claro que o chatbot não substitui uma consulta médica profissional e incentivar a busca por serviços de saúde qualificados para diagnósticos e tratamentos.
*   **Navegação:** Oferecer opções claras e, quando apropriado, direcionar para outras seções do aplicativo (ex: Biblioteca de Conteúdo, Mapa de Serviços).

## 2. Fluxo de Saudação e Introdução:

*   **Usuária inicia o chat.**
*   **Maya:** "Olá! Eu sou a Maya, sua assistente virtual para informações sobre saúde da mulher aqui no CicloConecta. 😊 Como posso te ajudar hoje? Você pode me perguntar sobre ciclo menstrual, gravidez, métodos para evitar filhos, infecções ou outros temas relacionados à sua saúde."
*   **Opções iniciais (sugestões/botões rápidos):**
    *   "Quero saber sobre meu ciclo menstrual"
    *   "Métodos para não engravidar"
    *   "Estou grávida?"
    *   "Infecções Sexualmente Transmissíveis (ISTs)"
    *   "Onde encontrar ajuda médica?"

## 3. Principais Tópicos e Intents (Exemplos):

O chatbot será estruturado em torno de "intents" (intenções da usuária) e "entities" (entidades, como nomes de métodos contraceptivos, sintomas, etc.).

### 3.1. Ciclo Menstrual

*   **Intent: `info_ciclo_menstrual`**
    *   **Perguntas da usuária (exemplos):** "Como funciona o ciclo menstrual?", "O que é menstruação?", "É normal meu ciclo ser irregular?", "Como calcular meu período fértil?"
    *   **Respostas de Maya (exemplos):**
        *   Explicação básica do ciclo (fases, duração média).
        *   Informações sobre o que é considerado um ciclo regular vs. irregular e quando procurar um médico.
        *   Como o rastreador de ciclo do app pode ajudar.
        *   Informações sobre período fértil e ovulação.
*   **Intent: `sintomas_tpm`**
    *   **Perguntas:** "O que é TPM?", "Quais os sintomas da TPM?", "Como aliviar a TPM?"
    *   **Respostas:** Explicação da TPM, sintomas comuns, dicas de autocuidado (alimentação, exercícios leves), quando procurar ajuda médica.
*   **Intent: `higiene_menstrual`**
    *   **Perguntas:** "Como cuidar da higiene na menstruação?", "Posso usar absorvente interno?", "O que é coletor menstrual?"
    *   **Respostas:** Dicas de higiene, tipos de produtos menstruais (absorventes, coletores, etc.), prós e contras.

### 3.2. Contracepção

*   **Intent: `info_metodos_contraceptivos`**
    *   **Perguntas:** "Quais métodos existem para não engravidar?", "Qual o melhor método para mim?", "Pílula anticoncepcional é segura?", "DIU dói para colocar?"
    *   **Respostas:**
        *   Visão geral dos tipos de métodos (barreira, hormonais, DIUs, naturais, esterilização).
        *   Para cada método principal: breve descrição, como funciona, eficácia, vantagens, desvantagens, efeitos colaterais comuns, onde obter (direcionar para Mapa de Serviços).
        *   **Importante:** Maya não deve recomendar um método específico, mas fornecer informações para que a usuária discuta com um profissional de saúde.
        *   "Lembre-se, a escolha do melhor método deve ser feita junto com um profissional de saúde, que vai avaliar seu histórico e suas necessidades. Posso te ajudar a encontrar um serviço de saúde próximo, se quiser."
*   **Intent: `contracepcao_emergencia`**
    *   **Perguntas:** "O que é pílula do dia seguinte?", "Como usar a pílula de emergência?", "Até quando posso tomar?"
    *   **Respostas:** Explicação do que é, como funciona, janela de uso, eficácia, efeitos colaterais, onde obter. Enfatizar que é para emergências e não uso regular.

### 3.3. Gravidez

*   **Intent: `sintomas_gravidez`**
    *   **Perguntas:** "Como saber se estou grávida?", "Quais os primeiros sinais de gravidez?", "Atraso menstrual é sempre gravidez?"
    *   **Respostas:** Lista de sintomas comuns, explicação de que o atraso menstrual é um sinal importante mas não único, recomendação de fazer um teste de gravidez e procurar um serviço de saúde para confirmação.
*   **Intent: `cuidados_prenatal`**
    *   **Perguntas:** "Estou grávida, e agora?", "O que é pré-natal?", "Quais exames preciso fazer na gravidez?"
    *   **Respostas:** Importância do pré-natal, o que esperar nas consultas, informações básicas sobre alimentação saudável, sinais de alerta na gravidez. Direcionar para Mapa de Serviços.
*   **Intent: `aborto_informacao` (Tratar com extremo cuidado e sensibilidade, focado em informações legais e de saúde, conforme o contexto legal do país piloto)**
    *   **Perguntas:** (Variam muito com o contexto legal e social)
    *   **Respostas:** Fornecer informações factuais sobre o que a legislação local permite (se permitir), os riscos de procedimentos inseguros e a importância de procurar serviços de saúde qualificados e seguros. Direcionar para organizações de apoio que ofereçam aconselhamento seguro e legal, se disponíveis e apropriadas.
        *   **Disclaimer:** "As informações que posso fornecer são gerais. Para sua segurança e saúde, é muito importante conversar com um profissional de saúde ou buscar aconselhamento em um serviço especializado e legalizado."

### 3.4. Infecções Sexualmente Transmissíveis (ISTs)

*   **Intent: `info_ists`**
    *   **Perguntas:** "O que são ISTs?", "Como se pega IST?", "Quais os sintomas de ISTs?"
    *   **Respostas:** Explicação do que são, principais formas de transmissão, sintomas comuns de algumas ISTs (HIV, sífilis, gonorreia, clamídia, HPV), importância da prevenção.
*   **Intent: `prevencao_ists`**
    *   **Perguntas:** "Como evitar pegar IST?", "Camisinha protege de todas as ISTs?"
    *   **Respostas:** Métodos de prevenção (uso correto de preservativos masculino e feminino, vacinação como HPV, testagem regular, redução de parcerias).
*   **Intent: `testagem_ists`**
    *   **Perguntas:** "Onde fazer teste de IST?", "Como é o teste de HIV?"
    *   **Respostas:** Importância da testagem, como funciona (de forma geral), direcionar para Mapa de Serviços para encontrar locais de testagem.

### 3.5. Direcionamento e Outras Funcionalidades

*   **Intent: `onde_encontrar_ajuda_medica`**
    *   **Perguntas:** "Preciso de um médico", "Onde tem clínica perto?"
    *   **Respostas:** "Posso te ajudar a encontrar serviços de saúde próximos. Você gostaria de ver o mapa de serviços agora?" (Link para `MapaServicosScreen`).
*   **Intent: `quero_saber_mais_sobre_X` (genérico para direcionar à biblioteca)**
    *   **Perguntas:** "Tem algum artigo sobre endometriose?", "Quero ler mais sobre menopausa."
    *   **Respostas:** "Temos uma biblioteca com muitos conteúdos! Você pode pesquisar lá ou posso te direcionar. Sobre qual tema você gostaria de ler?" (Link para `BibliotecaScreen` ou busca filtrada).
*   **Intent: `saudacao_despedida`**
    *   **Perguntas:** "Obrigada", "Tchau", "Até mais"
    *   **Respostas:** "De nada! Se precisar de mais alguma coisa, é só chamar. Cuide-se! 👋", "Até a próxima! Lembre-se que estou aqui para ajudar."
*   **Intent: `chatbot_nao_entendeu` (Fallback)**
    *   **Gatilho:** Quando Maya não consegue identificar a intenção da usuária.
    *   **Respostas:** "Desculpe, não entendi muito bem sua pergunta. 😕 Você poderia tentar perguntar de outra forma? Lembre-se que posso te ajudar com informações sobre ciclo menstrual, gravidez, métodos para evitar filhos e infecções.", "Hmm, essa pergunta é um pouco complexa para mim. Que tal tentarmos com outras palavras? Ou você pode explorar nossa Biblioteca de Conteúdo para mais informações."

## 4. Conteúdo Base (Exemplos de Respostas Detalhadas - a serem expandidos):

Para cada intent, o conteúdo das respostas deve ser cuidadosamente elaborado, validado por especialistas em saúde e adaptado culturalmente.

**Exemplo - Resposta para "O que é pílula anticoncepcional?" (`info_metodos_contraceptivos` > pílula):**

"A pílula anticoncepcional é um medicamento em forma de comprimido que a mulher toma todos os dias para evitar a gravidez. Ela contém hormônios que impedem a ovulação (a liberação do óvulo pelo ovário) e também podem tornar o muco do colo do útero mais espesso, dificultando a passagem dos espermatozoides.

**Como funciona?** Os hormônios da pílula 'enganam' o corpo, fazendo-o pensar que já está grávido, por isso não libera novos óvulos.
**Eficácia:** Se tomada corretamente, todos os dias e no mesmo horário, a pílula é muito eficaz, mais de 99% quando usada perfeitamente. Com o uso típico (esquecimentos ocasionais), a eficácia é um pouco menor, em torno de 91%.
**Vantagens:** Alta eficácia, pode regularizar o ciclo menstrual, diminuir cólicas e fluxo intenso, e reduzir sintomas de TPM para algumas mulheres.
**Desvantagens/Efeitos colaterais:** Não protege contra ISTs (é preciso usar camisinha!). Algumas mulheres podem sentir enjoos, dor de cabeça, alteração de humor ou sensibilidade nas mamas, especialmente no início. Riscos mais sérios, como trombose, são raros, mas existem, por isso é fundamental conversar com um médico antes de começar a usar.
**Onde obter:** A pílula precisa de receita médica na maioria dos lugares. Você pode conversar com um ginecologista ou clínico geral. Posso te ajudar a encontrar um serviço de saúde, se precisar.

Lembre-se: esta é uma informação geral. Somente um profissional de saúde pode indicar o melhor método para você, ok? 😉"

## 5. Próximos Passos para Conteúdo:

*   **Validação Médica:** Todo o conteúdo informativo deve ser revisado e validado por profissionais de saúde qualificados.
*   **Adaptação Cultural e Linguística:** O conteúdo deve ser traduzido e adaptado para os idiomas e contextos culturais dos países piloto.
*   **Criação de Base de Conhecimento:** Estruturar as perguntas e respostas em um formato que possa ser facilmente importado ou configurado na plataforma de chatbot escolhida.
*   **Desenvolvimento de Diálogos Complexos:** Para alguns tópicos, pode ser necessário criar fluxos de diálogo com múltiplas etapas (ex: ajudar a usuária a explorar diferentes métodos contraceptivos com perguntas e respostas guiadas).

Este documento é um ponto de partida e deverá ser expandido e refinado continuamente durante o desenvolvimento do chatbot Maya.

