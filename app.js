// Importa a biblioteca para fazer perguntas no terminal (substituindo o prompt nativo por 'input')
const input = require('prompt-sync')({ sigint: true });

// ==========================================
// 1. SAUDAÇÃO INICIAL (Lucimar)
// ==========================================

// Usando crases (`) para manter a formatação exata do texto sem quebras manuais de \n
const mensagemInicial = [
`Bem-vindo(a) a PWR History Tour!
Conectamos você às cidades históricas de Minas Gerais 
através de pacotes de viagem completos. 
Encontre aqui sua próxima experiência cultural,
histórica e gastronômica de um jeito prático e organizado.`
];

// Função que limpa a tela e exibe a mensagem de recepção
function comecar() {
  console.clear();
  console.log(mensagemInicial[0]);
  console.log("\n--------------------------------------------------");
  input("Pressione ENTER para carregar o Menu Principal...");
}

// ==========================================
// 2. SELECIONAR DESTINOS (Manuella)
// ==========================================

// Função que força o usuário a escolher uma das 3 cidades válidas
function selecionar() {
  let a = true;
  while (a == true) {
    console.clear();
    console.log("=== Destinos Disponíveis === \n 1- Ouro Preto \n 2- São João Del Rey \n 3- Tiradentes");
    let opcaoDestino = Number(input("Selecione o seu destino (1, 2, 3): "));
    
    // O 'return' envia o número escolhido para fora da função, permitindo que o resto do sistema o utilize
    if (opcaoDestino === 1) {
      console.log("Ouro Preto selecionado com sucesso.");
      return 1;
    } else if (opcaoDestino === 2) {
      console.log("São João Del Rey selecionado com sucesso.");
      return 2;
    } else if (opcaoDestino === 3) {
      console.log("Tiradentes selecionado com sucesso.");
      return 3;
    } else {
      console.log("Destino inválido. Tente novamente.");
      input("Pressione ENTER para tentar novamente...");
    }
  }
}

// BANCO DE DADOS DA AGÊNCIA - Lucimar
// Catálogo contendo as informações detalhadas e os preços de cada pacote por cidade
const destinos = [
  {
    id: 1,
    lugar: "Ouro Preto",
    experiencia: "Histórica",
    pacotes: {
      normal: { idPacote: "PWR Uai, Sô! - 2 Pessoas", nome: "Normal", duracao: "3 dias", precoBase: 798.00, detalhes: "● Ônibus Leito\n● Hospedagem no Hotel Pousada do Arcanjo\n● Café da manhã e almoço inclusos" },
      medio: { idPacote: "PWR Trem Bão! - 3 Pessoas", nome: "Médio", duracao: "5 dias", precoBase: 3842.14, detalhes: "● Ônibus Leito\n● Hospedagem no Hotel Solar do Rosário\n● Café da manhã e almoço inclusos\n● Tour histórico pelas igrejas barrocas e casarões coloniais" },
      premium: { idPacote: "PWR Bom Demais da Conta! - 5 Pessoas", nome: "Premium", duracao: "7 dias", precoBase: 14035.00, detalhes: "● Ônibus Leito\n● Hospedagem na Pousada do Mondego – Suíte Premium\n● Café da manhã, almoço e janta inclusos\n● Tour histórico pelas igrejas barrocas e casarões coloniais\n● Visita guiada à Igreja de São Francisco de Assis\n● Entrada VIP no Museu da Inconfidência" }
    }
  },
  {
    id: 2,
    lugar: "São João del-Rei",
    experiencia: "Viagem em Família",
    pacotes: {
      normal: { idPacote: "PWR Uai, Sô! - 2 Pessoas", nome: "Normal", duracao: "3 dias", precoBase: 798.00, detalhes: "● Ônibus Leito\n● Hospedagem na Pousada Villa Magnólia\n● Café da manhã e almoço inclusos" },
      medio: { idPacote: "PWR Trem Bão! - 3 Pessoas", nome: "Médio", duracao: "5 dias", precoBase: 3842.14, detalhes: "● Ônibus Leito\n● Hospedagem no Garden Hill Hotel\n● Café da manhã e almoço inclusos\n● Passeio histórico completo\n● Guia turístico" },
      premium: { idPacote: "PWR Bom Demais da Conta! - 5 Pessoas", nome: "Premium", duracao: "7 dias", precoBase: 14035.00, detalhes: "● Ônibus Leito Cama\n● Hospedagem no Garden Hill Hotel – Suíte Premium\n● Café da manhã, almoço e janta inclusos\n● Passeio histórico completo\n● Passeio exclusivo de maria fumaça em cabine especial\n● Apresentação de música barroca mineira ao vivo\n● Oficina cultural de artesanato mineiro para famílias" }
    }
  },
  {
    id: 3,
    lugar: "Tiradentes",
    experiencia: "Gastronômica",
    pacotes: {
      normal: { idPacote: "PWR Uai, Sô! - 2 Pessoas", nome: "Normal", duracao: "3 dias", precoBase: 798.00, detalhes: "● Ônibus Leito\n● Hospedagem na Pousada Tesouro de Minas\n● Café da manhã e almoço inclusos" },
      medio: { idPacote: "PWR Trem Bão! - 3 Pessoas", nome: "Médio", duracao: "5 dias", precoBase: 3842.14, detalhes: "● Ônibus Leito\n● Hospedagem na Pousada Villa Allegra\n● Café da manhã e almoço inclusos\n● Passeio cultural completo\n● Experiência gastronômica no Tragaluz" },
      premium: { idPacote: "PWR Bom Demais da Conta! - 5 Pessoas", nome: "Premium", duracao: "7 dias", precoBase: 14035.00, detalhes: "● Ônibus Leito Cama\n● Hospedagem no Santíssimo Resort – Suíte Premium\n● Café da manhã, almoço e janta inclusos\n● Passeio cultural completo\n● Experiência gastronômica no Tragaluz\n● Degustação de vinhos e queijos mineiros artesanais\n● Jantar especial no Pacco & Bacco" }
    }
  }
];

// Função que varre o catálogo para encontrar a cidade correspondente ao ID numérico
function buscarCidade(idDigitado) {
  for (let i = 0; i < destinos.length; i++) {
    if (destinos[i].id === idDigitado) {
      return destinos[i];
    }
  }
  return null;
}

// Função estruturada para formatar visualmente a vitrine de opções na tela
function exibirOpcoesDaCidade(objetoCidade) {
  let textoVitrine = "--------------------------------------------------\n" +
                     "Cidade Selecionada: " + objetoCidade.lugar + "\n" +
                     "Experiência principal da cidade: " + objetoCidade.experiencia + "\n" +
                     "--------------------------------------------------\n\n" +
                     "VEJA OS PACOTES DISPONÍVEIS PARA ESTA CIDADE:\n\n" +
                     "● PACOTE NORMAL (" + objetoCidade.pacotes.normal.idPacote + ")\n" +
                     "  Preço: R$ " + objetoCidade.pacotes.normal.precoBase.toFixed(2) + " | " + objetoCidade.pacotes.normal.duracao + "\n" +
                     objetoCidade.pacotes.normal.detalhes + "\n\n" +
                     "● PACOTE MÉDIO (" + objetoCidade.pacotes.medio.idPacote + ")\n" +
                     "  Preço: R$ " + objetoCidade.pacotes.medio.precoBase.toFixed(2) + " | " + objetoCidade.pacotes.medio.duracao + "\n" +
                     objetoCidade.pacotes.medio.detalhes + "\n\n" +
                     "● PACOTE PREMIUM (" + objetoCidade.pacotes.premium.idPacote + ")\n" +
                     "  Preço: R$ " + objetoCidade.pacotes.premium.precoBase.toFixed(2) + " | " + objetoCidade.pacotes.premium.duracao + "\n" +
                     objetoCidade.pacotes.premium.detalhes + "\n" +
                     "--------------------------------------------------";
  return textoVitrine;
}

// Função que extrai o nível específico do pacote selecionado pelo cliente
function buscarPacote(objetoCidade, nivelDigitado) {
  if (nivelDigitado === 1) return objetoCidade.pacotes.normal;
  if (nivelDigitado === 2) return objetoCidade.pacotes.medio;
  if (nivelDigitado === 3) return objetoCidade.pacotes.premium;
  return null;
}

function pagamento() {
  let b = true;

  while (b === true) {
    console.clear(); // Limpa a tela a cada ciclo do loop, garantindo tela limpa
    
    // Deixamos o texto do prompt curto e direto para evitar que o buffer dobre a mensagem
    let menuTexto = "=== FORMA DE PAGAMENTO ===\n" +
                    "1 - Pix\n" +
                    "2 - Cartão de Débito\n" +
                    "3 - Cartão de Crédito\n\n" +
                    "Selecione a opção desejada: ";
                    
    let metodo = Number(input(menuTexto));

    if (metodo === 1) {
        console.log("Pagamento via Pix selecionado.");
        input("\nPressione ENTER para continuar...");
        return "Pix (À vista)";
    } else if (metodo === 2) {
        console.log("Pagamento via Cartão de Débito selecionado.");
        input("\nPressione ENTER para continuar...");
        return "Cartão de Débito";
    } else if (metodo === 3) {
        let parcelas = Number(input("Digite o número de parcelas (1 a 12): "));

        if (parcelas >= 1 && parcelas <= 12) {
            console.log("Pagamento em " + parcelas + "x no cartão de crédito.");
            input("\nPressione ENTER para continuar...");
            return "Cartão de Crédito (" + parcelas + "x)";
        } else {
            console.log("Número de parcelas inválido. Tente novamente.");
            input("Pressione ENTER para tentar novamente...");
        }
    } else {
        console.log("Forma de pagamento inválida. Tente novamente.");
        input("Pressione ENTER para tentar novamente...");
    }
  }
}
// Função do Comprovante impresso em tela
function gerarComprovante(nomeId, objetoCidade, objetoPacote, dataViagem, metodoPagamento) {
  console.clear();
  console.log("================================================");
  console.log("               PWR HISTORY TOUR                 ");
  console.log("================================================");
  console.log("         -- COMPROVANTE DA VIAGEM --            ");
  console.log("NOME DO CLIENTE: " + nomeId);
  console.log("DATA DA VIAGEM: " + dataViagem);
  console.log("________________________________________________");
  console.log("DESTINO ESCOLHIDO: " + objetoCidade.lugar);
  console.log("EXPERIÊNCIAS: " + objetoCidade.experiencia);
  console.log("PACOTE COMPRADO: " + objetoPacote.nome + " (" + objetoPacote.idPacote + ")");
  console.log("________________________________________________");
  console.log("FORMA DE PAGAMENTO: " + metodoPagamento);
  console.log("VALOR DO PACOTE: R$ " + objetoPacote.precoBase.toFixed(2));
  console.log("________________________________________________ \n");
  console.log("PWR HISTORY TOUR - Obrigado(a) por fazer parte da nossa história!");
  console.log("================================================");
}

// ==========================================
// 3. FLUXO DE EXECUÇÃO CENTRALIZADO (Lucimar)
// ==========================================
function executarSistema() {
  comecar(); // Exibe a tela de boas-vindas inicial

  // Obtém o destino escolhido através da Manuella e puxa os dados do catálogo
  let idCidadeEscolhida = selecionar();
  let cidadeLocalizada = buscarCidade(idCidadeEscolhida);

  console.clear();
  let vitrineInformativa = exibirOpcoesDaCidade(cidadeLocalizada);
  console.log(vitrineInformativa);

  let pacoteLocalizado = null;
  let querPersonalizado = false;

  // LOOP: Escolha do Pacote de Viagem (Lucimar e Kaio)
  while (true) {
    console.log("\nAgora selecione a opção desejada:");
    console.log("1 - Contratar Pacote Normal");
    console.log("2 - Contratar Pacote Médio");
    console.log("3 - Contratar Pacote Premium");
    console.log("4 - Solicitar Pacote Personalizado / Outro Pacote");
    let opcaoDigitadaPacote = input("Digite sua opção (1, 2, 3 ou 4): ");
    let menuPacote = Number(opcaoDigitadaPacote);

    // Se o cliente quiser algo customizado, ativa o sinalizador e interrompe o laço
    if (menuPacote === 4) {
      querPersonalizado = true;
      break;
    }
    pacoteLocalizado = buscarPacote(cidadeLocalizada, menuPacote);
    if (pacoteLocalizado !== null) {
      break;
    }
    console.log("\n[Opção Inválida] Nível de pacote incorreto.");
    input("Pressione ENTER para tentar escolher o pacote novamente...");
  }

  // DESVIO: Fluxo do Pacote Personalizado (Lucimar)
  if (querPersonalizado === true) {
    console.clear();
    console.log("=======================================================");
    console.log(" Os Pacotes acima não atendem às suas necessidades?");
    console.log("A PWR History Tour oferece opções de personalização exclusiva.\n");
    
    // Validação: Garante que o nome não seja um número
    let nomeCliente;
    while (true) {
      nomeCliente = input("Por favor, digite o seu nome completo: ");
      if (nomeCliente !== "" && isNaN(nomeCliente)) {
        break;
      }
      console.log("\n[Erro] Por favor, digite um nome válido (use apenas letras).");
    }
    
    // Validação: Garante que o telefone contenha apenas números
    let telefoneCliente;
    while (true) {
      telefoneCliente = input("Digite seu telefone de contato com DDD (apenas números): ");
      if (telefoneCliente !== "" && !isNaN(telefoneCliente)) {
        break;
      }
      console.log("\n[Erro] Por favor, digite um telefone válido (use apenas números).");
    }

    console.clear();
    console.log("==================================================");
    console.log("Obrigado, " + nomeCliente + "!");
    console.log("A equipe comercial da PWR History Tour entrará em");
    console.log("contato no número " + telefoneCliente + " dentro das próximas");
    console.log("2 horas para personalizar a sua viagem para " + cidadeLocalizada.lugar + ".");
    console.log("--------------------------------------------------");
    console.log("A PWR agradece a sua preferência. Atendimento encerrado.");
    console.log("==================================================");
    return; // Encerra o sistema imediatamente para pacotes personalizados
  }

  // ==========================================
  // 4. CADASTRO DE DADOS (Gabriel)
  // ==========================================
  console.clear();
  console.log("=== CADASTRO DE FATURAMENTO DA VIAGEM ===");
  
  let idade = Number(input("Digite a sua idade: "));
  
  // Criando as variáveis fora do IF para a futura função de relatório conseguir ler
  let nome = "";
  let dataViagem = "";

  // Regra de Negócio: Bloqueia a continuidade se for menor de idade
  if (idade >= 18) {
    nome = input("Digite o seu nome: ");
    let cpf = input("Digite o seu CPF: ");
    let contato = input("Digite o seu contato (Telefone ou E-mail): ");
    dataViagem = input("Digite a data pretendida para a viagem (DD/MM/AAAA): ");

    console.log("\nCadastro realizado com sucesso!");
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("CPF: " + cpf);
    console.log("Contato: " + contato);
    console.log("Data da Viagem: " + dataViagem);
    input("\nCadastro concluído! Pressione ENTER para prosseguir para o pagamento...");
  } else {
    // Trocado de alert() para console.log para rodar nativamente no terminal
    console.log("\n[ACESSO NEGADO] Cadastro não permitido para menores de 18 anos.");
    console.log("Cadastro recusado: Usuário menor de idade.");
    return; // Impede que o sistema continue para o pagamento se for menor
  }

  // Chamada da forma de pagamento (Mikael)
  let formaPagamento = pagamento();

  // Exibe o comprovante final da compra
  gerarComprovante(nome, cidadeLocalizada, pacoteLocalizado, dataViagem, formaPagamento);
}

//--------------------------------------------------------
// INICIALIZAÇÃO DO PROGRAMA
executarSistema();
