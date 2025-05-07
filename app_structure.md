## Estrutura do Aplicativo Móvel CicloConecta e Mapeamento de Conteúdo

Este documento descreve a estrutura de telas e navegação para o aplicativo móvel do projeto CicloConecta, baseado no conteúdo da proposta original (`cicloconecta_proposta.md`). A tecnologia escolhida é React Native com Expo.

**Navegação Principal (Provavelmente Tab Navigator):**

*   Início (Home)
*   Saúde (Módulo Saúde Reprodutiva)
*   Serviços (Módulo Conexão com Serviços)
*   Empoderamento (Módulo Empoderamento Socioeconômico)
*   Comunidade (Módulo Comunidade e Suporte)
*   Mais (Menu para Sobre, Configurações, etc.)

**Detalhamento das Telas e Funcionalidades:**

1.  **Tela Inicial (`HomeScreen`)
    *   **Conteúdo:**
        *   Saudação personalizada (se houver login/perfil).
        *   Resumo do ciclo menstrual atual (se o rastreador estiver ativo e com dados).
        *   Atalhos rápidos para os principais módulos (Saúde, Serviços, Empoderamento, Comunidade).
        *   Notificações/Alertas importantes.
        *   Dica do dia ou conteúdo em destaque da Biblioteca.

2.  **Módulo: Saúde Reprodutiva (`SaudeReprodutivaStack`)
    *   **Tela Principal do Módulo (`SaudeReprodutivaScreen`):
        *   Acesso às sub-funcionalidades:
            *   Rastreador de Ciclo Menstrual
            *   Chatbot Educacional (Maya)
            *   Biblioteca de Conteúdo
    *   **Tela: Rastreador de Ciclo (`CicloScreen`):
        *   Visualização do calendário menstrual, previsão de ciclo, janela fértil, sintomas.
        *   Entrada de dados (início/fim da menstruação, sintomas, humor, etc.).
        *   Insights e dicas personalizadas baseadas nos dados.
    *   **Tela: Chatbot Maya (`ChatbotScreen`):
        *   Interface de chat para interagir com o chatbot Maya.
        *   Respostas a perguntas sobre SSR, contracepção, gravidez, etc.
    *   **Tela: Biblioteca de Conteúdo (`BibliotecaScreen`):
        *   Listagem de artigos, vídeos, infográficos categorizados por tema (SSR, bem-estar, direitos).
        *   Funcionalidade de busca.
        *   Visualização do conteúdo selecionado.

3.  **Módulo: Conexão com Serviços (`ConexaoServicosStack`)
    *   **Tela Principal do Módulo (`ConexaoServicosScreen`):
        *   Acesso às sub-funcionalidades:
            *   Mapa de Serviços
            *   Agendamento de Consultas
            *   Teleconsulta
            *   Alertas e Lembretes de Saúde
    *   **Tela: Mapa de Serviços (`MapaServicosScreen`):
        *   Mapa interativo exibindo clínicas, hospitais, farmácias parceiras.
        *   Filtros por tipo de serviço, localização.
        *   Detalhes do serviço (horários, contato, avaliações).
    *   **Tela: Agendamento de Consultas (`AgendamentoScreen`):
        *   Busca por profissionais/clínicas.
        *   Seleção de data/horário.
        *   Confirmação do agendamento (presencial ou telemedicina).
    *   **Tela: Teleconsulta (`TeleconsultaScreen`):
        *   Interface para realizar consultas virtuais (vídeo/chat) com profissionais de saúde.
        *   (Requer integração com plataforma de telemedicina)
    *   **Tela: Alertas e Lembretes (`AlertasScreen`):
        *   Configuração e visualização de lembretes (contraceptivos, vacinas, consultas).

4.  **Módulo: Empoderamento Socioeconômico (`EmpoderamentoStack`)
    *   **Tela Principal do Módulo (`EmpoderamentoScreen`):
        *   Acesso às sub-funcionalidades:
            *   Educação Financeira
            *   Capacitação Profissional
            *   Conexão com Oportunidades
    *   **Tela: Educação Financeira (`EducacaoFinanceiraScreen`):
        *   Listagem de cursos/módulos sobre orçamento, poupança, crédito.
        *   Conteúdo interativo.
    *   **Tela: Capacitação Profissional (`CapacitacaoProfissionalScreen`):
        *   Listagem de cursos/módulos sobre habilidades digitais, empreendedorismo.
    *   **Tela: Conexão com Oportunidades (`OportunidadesScreen`):
        *   Listagem de programas de microcrédito, vagas de emprego, feiras, cooperativas.

5.  **Módulo: Comunidade e Suporte (`ComunidadeStack`)
    *   **Tela Principal do Módulo (`ComunidadeScreen`):
        *   Acesso às sub-funcionalidades:
            *   Fórum Seguro
            *   Grupos de Apoio
    *   **Tela: Fórum (`ForumScreen`):
        *   Listagem de tópicos de discussão.
        *   Criação e participação em discussões.
        *   Moderação.
    *   **Tela: Grupos de Apoio (`GruposApoioScreen`):
        *   Listagem de grupos temáticos (mães adolescentes, empreendedoras).
        *   Entrada e participação nos grupos.

6.  **Menu "Mais" (`MaisStack` ou similar)
    *   **Tela: Sobre o Projeto (`SobreAppScreen`):
        *   Conteúdo: Seções "Introdução e Justificativa", "Conceito do Projeto" e "Objetivos do Projeto" da proposta original, adaptadas para o formato de app.
    *   **Tela: Configurações (`ConfiguracoesScreen`):
        *   Configurações do aplicativo (notificações, idioma, tema).
        *   Gerenciamento de perfil do usuário (se aplicável).
        *   Privacidade e Termos de Uso.
        *   Logout (se aplicável).
    *   **Tela: Ajuda/FAQ (`AjudaScreen`):
        *   Perguntas frequentes sobre o uso do app.
        *   Contato para suporte.

**Considerações Adicionais para a Estrutura:**

*   **Autenticação/Perfil do Usuário:** Decidir se haverá login. Se sim, adicionar telas de Login, Cadastro, Recuperação de Senha e Perfil do Usuário.
*   **Acessibilidade:** Garantir que o design e a navegação sejam acessíveis (fontes legíveis, contraste, navegação por gestos/voz, se possível).
*   **Modo Offline:** Planejar quais funcionalidades e conteúdos estarão disponíveis offline (ex: conteúdo da biblioteca, dados do rastreador de ciclo).
*   **Idiomas:** Suporte a múltiplos idiomas locais, conforme definido na proposta.
*   **Design System/Componentes Reutilizáveis:** Definir um conjunto de componentes visuais reutilizáveis para manter a consistência.

Esta estrutura servirá como base para a criação das pastas de componentes, telas e a configuração da navegação no projeto React Native/Expo.

