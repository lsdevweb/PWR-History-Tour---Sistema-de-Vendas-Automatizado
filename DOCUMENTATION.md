# ![✈️][image1] **ESPECIFICAÇÃO TÉCNICA DE REQUISITOS — PWR HISTORY TOUR**

**Sistema Desktop de Vendas e Consultas Turísticas baseadas em Terminal**

**Linguagem:** JavaScript (Ambiente Node.js / Console)

**Turma:** DS-08 | **Professor:** Adriano

## ![👥][image2] **1\. Organização da Equipe de Desenvolvimento**

O projeto foi modularizado em quatro frentes de engenharia para cobrir todo o ciclo de vida da jornada do usuário:

* **Lucimar Santos** — Arquitetura de Dados, Fluxo Central e Regras de Integração.  
* **Gabriel Lima** — Core de Faturamento, Camada de Segurança e Validação de Dados.  
* **Manuella Vieira** — Interface de Vitrine, Filtros de Busca e Seleção de Destinos.  
* **Kallyla Victória** — Modelagem das Regras de Negócio e Jornada do Usuário (UX).  
* **Mikael Zimbra** — Motor de Ofertas e Validação de Pacotes Especiais.  
* **Kaio Augusto** — Arquitetura de Relatórios, Emissão de Comprovantes e Lógica de Saída.

## ![🏗️][image3] **2\. Arquitetura de Dados (Data Modeling)**

O sistema gerencia os destinos e sub-pacotes utilizando uma estrutura matricial de objetos estruturados em memória. O escopo inicial cobre **7 cidades históricas de Minas Gerais**, partindo do Terminal Rodoviário de Belo Horizonte:

### ![🗺️][image4] **Matriz de Destinos e Experiências Principais**

1. **Ouro Preto:** Experiência Histórica.  
2. **São João del-Rei:** Experiência Viagem em Família.  
3. **Tiradentes:** Experiência Gastronômica.  
4. **Mariana:** Experiência Viagem em Família.  
5. **Congonhas:** Experiência Histórica.  
6. **Diamantina:** Experiência Radical.  
7. **Sabará:** Experiência Gastronômica.

### ![📦][image5] **Níveis de Serviço por Pacote**

Cada uma das 7 cidades obrigatoriamente herda e implementa três níveis de serviço com as seguintes diretrizes de negócio:

* **Pacote Normal:** Focado em acessibilidade. Inclui ônibus convencional, hospedagem padrão, café da manhã e almoço.  
* **Pacote Médio:** Balanço de custo-benefício. Inclui ônibus semi-leito, hotéis intermediários bem localizados, além de passeios guiados e experiências culturais padrão da região.  
* **Pacote Premium:** Experiência de luxo VIP. Inclui ônibus leito-cama, suítes premium, pensão completa (café, almoço e jantar) e regalias exclusivas (entradas VIP para museus, degustações de vinhos/queijos e guias turísticos particulares).

## ![🛠️][image6] **3\. Módulos do Sistema e Fluxo Lógico (Algoritmo)**

### **Módulo I: Menu Principal e Navegação**

Ao iniciar, o terminal exibe a tela de boas-vindas e disponibiliza as opções de controle do sistema:

1. **Ver Destinos:** Apresenta as cidades, pontos turísticos e principais atrações.  
2. **Ver Pacotes:** Redireciona para o seletor de cidades e níveis de serviço.  
3. **Ver Ofertas:** Aplica descontos promocionais dinâmicos direto no carrinho.  
4. **Filtrar Pacotes:** Segmenta os destinos com base no tipo de experiência desejada (Ex: Histórica, Radical).  
5. **Sair:** Encerra a sessão sem salvar alterações pendentes.

### **Módulo II: Motor de Cadastro e Regras de Validação**

* **Validação de Maioridade (Segurança):** Bloqueio lógico obrigatório se idade \< 18. Menores de idade não estão autorizados a adquirir passagens de forma independente.  
* **Coleta de Dados de Faturamento:** Captura sequencial de Nome Completo, Idade, CPF e Contato (Telefone/E-mail).  
* **Cálculo Dinâmico de Passageiros (Escalabilidade):** O sistema prevê a inclusão de múltiplos passageiros no mesmo pacote, aplicando as regras de precificação por faixa etária (0 a 5 anos isentos; 6 a 12 anos pagam meia-passagem; a partir de 13 anos pagam inteira).

### **Módulo III: Camada Financeira e Relatórios**

* **Transações de Pagamento:** Aceita cartões de débito, boleto bancário, Pix ou parcelamento em cartão de crédito (com input numérico validado para parcelas de 1x a 12x).  
* **Geração de Relatório de Finalização:** Após a confirmação de pagamento (sim/não), o terminal executa a função de renderização visual do comprovante de viagem, exibindo o cabeçalho corporativo, dados do comprador, roteiro contratado, hotel correspondente e o valor líquido faturado.

## ![🚀][image7] **4\. Planejamento de Atualizações Futuras (Backlog)**

* **Persistência de Dados:** Migração de vetores/objetos locais para banco de dados relacional MySQL/MariaDB.  
* **Backoffice Operacional:** Desenvolvimento de interface administrativa para cadastro de novos itinerários por funcionários da agência.  
* **Módulo Avulso:** Canal de vendas de passagens sem vinculação a pacotes de hotéis.

### ![📌][image8] **Link do Vídeo Corporativo (Apresentação do Sistema)**

O vídeo de demonstração do sistema desktop executando no console foi anexado para visualização rápida:

![▶️][image9] [**Demonstração no YouTube: PWR History Tour**](https://youtube.com/shorts/cg54YWGztcY?feature=share)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAETElEQVR4Xr1XYUtbZxROfsCGbJ82KHVfBoN+kO3T2JfAvq2shK1r2ca2OLd2E8dSsVCRQra6wRKpg6RKbcJVMjVpbKytNWvUXRYUBMUgqPjJ+xPuTzg7z7n3Te59YxJj6R54iLl5Oc9zz3nPeV8Dgf8ZW1tbIZc9+m8vDSzWxYwtLD21ZwtFMv+tEH8HPSYGcgazyowxQ/UfWmNqairCjOnPFfC2y6Xn1tfREfrg017hZz8OKQMhWRS8tDAevFKgQO9DYnFFm7nIjDC7fVFdJJNJiFMmkyH+NPXfWSDqClH83gNaeb5KyfSMmEAm+Hm3sxJiLB68XKDgJwsU/IqN/JD3mgFVdiRto6OjkXg8Tuvr61QqlWAADHnEDSXuZTqbEwPzjx5X1VoY6HKD24Hv8xT8nI1cWpBPfNeMSHYuDKXt6P1FWl41aXJyEuJVZpcSPzg4oKOjowYDw7/fJZSD/47UDSg4RsZFpD8nmZCMXHbL099gRPjWoEGvD85JdiB+eHhIlmXR3t5egwFw7R+zoVw+/JZK269G51F/RwTl4T0SDLOZL08sj/D23Bq1E2faW7XatwNvvlei82ZN5JpWns7FwZAu0xJosesJAyb8RpAN10Q7cU/vR/T4HeH8zdnwuZuzPhM3JlZbioPYdF/8dGtcj9cxOBs9YxMPsDfQknQx8aylOFoOn7/evWfosV4M3C1XkitWK3EQ/f7RqGRMZgdeQA91JnDw8P7+flPx4pNn8nm+P6U2acwd2TIx1bw4EzhwD4vazcTVm78fm691yGs/Z+1EIkGFQoGmp6dh4mz7gYN37e7uijgmnS6s2H11omGCZh4+oUql0vTcOBU4uHl8fCwbTxfFYXP91i90cXzZmaDcId6BNZBeoVQqRWNjY7WR3RG2t7djmO07OzsN4uCf9w37jd64pQSDVwvOCHfH9ztDGeIDbJHZRBx3gCbHLguEILyxsSEpBDUDGK896I6A26JylsDAN74jvqm44VmEe4AZcE7H8IeJpzhgLNM0Vf10A5aIu8AGe28kixgU6MvLYeaJHfGousBbD+RqqdN5Y7pMm5ubPvFyuazETabvrXhN98d3ZhBTTIiB+kWnyUDy3gc84u/eeSzi2Wy2Jo5MuOIxPYwPA7moxHFPUjemrS/zwzFiKAPZUoVyuZyIwwTaiIWr3pQ3Aw4xviM4ewEdca3WEWF9bSO4LIMzZWtpaakmjkx8N/U3nRt+FNWXnwSM3QvDf0kWpC3rx3f7IYQ6YmcXi0UCkYm3bxfb1LEJsKF5HuAO4bakpS9pACYVxiZqPTK75rRVnZ7LZHt8+4chNyu5yOCy68RoXUI2YDGr+Xxe9bZvc+rrW4HjGG8OzZlyf6i3ZOsyogS+B2pH1xny/d4OTqs73eC0ZEdZdKAm3Gne4CRg82EwqZbsGKjbixmQUkoZ+vKdbeQanP8ZYvrjUwMzoC/fufmXif8AV0UZKgXEFWIAAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABj0lEQVR4Xu2VvW3DMBCFPYI6ip1HyAgcQSNkBFdpLSBtAKVM5xEyAkcQkNJFVKZIoSID2PcgUmIOR+lsq9QBX2GIfO/5+LfbbbXVVkLZl6+CqIg6cCAcH5cr8/HniDoBvws+TiwyaohLhg5h+JxYZPJM9MQlQzMbhMRbwVTixOcGc24o0Yoh7NBqbjTH2AkztJgbzeFT77jm3GCJPs6HoGCyhEsDYJNxAw0VCe0FcQ3TMpLQpyCuATtcu/acNg3gBXEN3gzHjIurSAP0griG1QJwYS2rBfCCuIYtAK7WAxdW0qUB7r0HcARXuQdwE2rfgch4jiEmGMyBB2s/BkDh3wgmczzFuSRWBFFulKNOrKey+r3Q8LlGvxc6I72GKKtbCo9xfC7KLC8FujR2TqwQAibcuCNqPp6XyR9LhBODR1PsgVPGPA2B77X9vwdcMPbhX3LzCL7j6Fap/yNvQVe+/XSCkYZpOQThmyhfv7m4FrdKAFC+/3JxDSsGuK8L6wWwxzMX1zAGcA9zPOMk3EpxBXqHkuwqPVG9AAAAAElFTkSuQmCC>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADPElEQVR4Xu1Wz2sTURDuH1Ax0NoKVUlBVPTQSMGjPEXUYyseFC9BpF5zU0+uh7A1haZCPSnkWD2lgl5KYfUmiEQvKtiSg5eA0kWCVnt5zrd5E2cnm7qpP1Dwg499P2Znvpn3Y7ev7z/+dhSLxczb2fFyY25/hdoFYk7b/BZQoCzRm/evhM1buyy4cPOSpTEwJFadIKPf/Sm4wMgWgeqr5cMQUCfWiOEdvzABYcTA2TDRx7jRPlNBBybmKeCEy94Qc65dVe/liq1KoCKoDAviCmWlfQfIYZYYvJk9YkGXceCItu5DBPc7iPfZF/Nd+RAqiPm8jg8ByA5OYQSijUAouQzGc0zMe4LVTebKYi4uovldABxwtuhX8HQ2BTcHESCLi5w1W8uDebyDpZNzGWcPwk9chDNgdXACxRyAs8F4wdlDIGwigXDm5ivCJ4tAQA6eUXNltscgB/vTzLMAb3lm0kquTO0MXk4O2SS+vzFiX9+/aJ8/uAYGcAQfTNqIleWZMxZ8VDpH98cUKmASmG1XAUdncXExItoUyNOBpYClx/fswotXYOxYtnz5dKR9OpK+dYyWb1NMT0/HBDiF7VI1W2uOtY7GguW7LMDTvgAnopYqOFAqlboJ4E0D8mVk124fsE8fFiEgq30xKDjdjr7R44lQtxgyZQEyc7T5ifXe9MPklsHo8VQQAhAcmctKGG2v8XFupEC0xFDPpYIQkESj7TUosOcERJdZz0iogBRktL2GELDlCnDJsd4QEd12aQXQ2k+4I2j0XCo0W5sMwdo7X7SNttdwGxDHkD7XfnQN9wQhAJlXXfZ8Goy215i/ftV+OD9ae3b5eH1LVRACQFylgegbbS9hJ7fn1s8O28aFfRZP6gfE3qqgKoA/IzCxAivbDuaIBvx0dLhAwcL1Yztq6Df2juY3Tg+EGPt6cjDPdqD00QElABUAuwkIiBZcG9uNjKO25JcTg/azGYqNSR8dEAJix6+LgNyT/mxlqX+PXR2LSm7RllwzAxG530sFOHOuRJKAH1YA2W+1AgiM48e/XUkCsLYeGI6PlElAnfvMjVMDNdoDENoekz5iaMZ3fDd2/Af8MqQUEOj3/kl8A5dIkxFAdiLjAAAAAElFTkSuQmCC>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Xu1W709bVRjen2BiMrMsWfjgJz7ty5ZoMm2MiVlcos4Pmi3biJsTo0YiDAMmrJnhC4RQnNZsIwwMgwXHNig/BqMU2gKlv4C2UITSll9DFAXmNkNifL3Pyz1n955W+Ad4kyftvfe87/Oc57z33LNv317shR4+ny9Pw7saDqvPdgs9r1qDS8dNDVYNFg056visoSeQAWMa7mUrpF/jPshkzo32IH1za5LqumPkGAgba6n1ZC0Z+gM6bv+DztatUGHzPLU4oxQKhYxF1sV/p3uUqu+E6CP7BFnKY/SBLcI4ULpKh8q3JF77boNrot5VR1zUsaj8Ygl4sEgubP2T0uk0Y2ZmhuLxOAUCAS5yojJKuaVTdMQ6SS9+OU0lDWN8DwLesD+ho7ZnJiEAausCclR+YWtWAX1jy1JIOBymNqefSWE5iPFf4KB1kz5p3qDLjud1BPJ/WmIBKjcHVOEh7D/dsMnk79T+Rb7JRS4oREAAxoEM1sMFVQBm/2P/KtcwCij7eQ65LpVbBgpXts/J2d4ffSQdgAj8j0ajPHMjqQDEfNXym8wXeRCEZUFzahz3VF4Z2sPU3WgHDaSGZBEALojlcI5OcbMJB8oe1lHutR+4GZu6A6Y8R7KXmpP35bXTy/1jVXllwJ7OUA9ZE9VUmqig1mQnryXsxAwg5K2qBJMfuhSn4l47WdwnJQq9ZZzz/Vw9Vc1d5xoArhumu0UD5qm8MmAPBIhECLkd9bEjBW4n5Vb+TfsvpWl/0ThZGq/SKU8+vfrgvEmEyDXi0+BN+qzL8/+voAjY4xn1ZhQAPnzYwY0EAQdKRuhIa5GJGHh75ExGHlAUr6ELjWkh4AWVV4b2sACD1AKYgejkl75eooOXXXTMeSpDxNnwRbItV1B5OlMANiLUVjlNAXsw6NxAJxXP2DjxRJubXq54LAVgo4GAc6HzlOe+QiWeRqpdKifvk1pK0i0a/7fShI+Dg3Ssa5ps/VEIwE66owN5rhE/He1YoPfdERresjHOjATpuDPO998bWKOhxy5apNYM1C1EmBQ5+G1Za6CLgZHtvAe8B+zehDWDEU4Q+PaXbjmbklgf5fvXqH/dm0F+ezlCnweeUU2qj8VCRMH4IFUl22StrmF+DbNvRLAGCi/0zpgEgNRoad3yIBMVhjcp8U+7FHBl8le+/2bvCudh9hiPCTg2brCjxU75McpR+bkBhf0qUEC6MLHKRIBwIrbVJe8JAQDsdz61S/de75RvQoHKDwFjqv0C9StNcjaCCLiWmmUBNbOprAKEC6IfcA8cGldKJecPkWq/ANbTvnCHXulcNAkAhPXZBMAB9AP6AP2AiXzh4u8B8PzktZP9QgDeBBRXBagwClABEfjVm7HaKCCj+43ALCw9c7sKsEXW6WTfkikX6w4Y72Usg3ax3ugZ4yU43ZPgd9aYUD8+T8VD87wHgKgw+JSapn4nz+wjCX9iafsL6I9yDdTSiRitXtPRzrwMvu1TrAtC1EGwC4eQu8Nhsg9N03V/ioYn4hSLxSRwRsAYcVwzAPVQF7DqwHaPHdciHVBDe3hYH5RnSMSJVhTLBhzLMW7n4nuxF0r8B2A1ZGmD+SG9AAAAAElFTkSuQmCC>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACeklEQVR4XtWW7UtTYRiH9yf4p5hEJQYtsyJMS9gH08rDsqCRzIgZ1ZAZmNmKSa8Li1jiS4rRC1FEuGAfkgijIlCIjvShoC/nQ0RUxN19n3rG8ffM7WF5JG+4UNg593WdZ0cwEFip837kkMXYf0kwFXiNL+MRE+D4GkLz96wfs2O2k0vR/Hgnyv0LYXGQecmQ4te72/T5ySkUI24I7jMevjnIT5v1ipGfc7dMQmzGwv2LjoiZrFrwYTJGX56nNXmZIUH05Yc/rPSKEQn5OnNNk3v59jpDHx90a/cC4tDfj6mzzc7M1TBerCECEaHcNCR3bheNHdmSRX/g/skmEh71hejVYLt2I2IaIienxAPh9dRRv4r6WtYQ+vMBiqlkM725vl8TI6VCPk1naOhEC0W2VVJsRxWdt9bR5XB16QDFUy6fu3lQEyMS8v3t8ALxs9EkZW/0UrqrlVJ7/4gV6F80QJEbaDUKmZ04TtOj/a5YMdHTtkBeVkCpkBeX2igTraPDDVU0cjrqXwCGeMXyPcsL9vhK3P8A4U53I8VDq92XK7l7bX65V+5rwN3ETm2xN+DhxaM0GNnkgtegv6wAARergKFY4c+WJcAE9P8fAfE9GyjTVa9JioGLTUG/G5CKbKbefbUUDdXQ8LEGGo83akIEF5uCfjdA5HICkabq/M8zB+qKhuBiU9AvAY6cQI+10T0BFSQR8tWg+B8DHPRLQJCx5WlFLF/BhY6t7u9LfAJZJoj+/PBSS0JkuZyIPP0SBRQX4/DyTsYRebG/jAIixGYs3G80LKhgEhKCYoOA8sU4xUJ8FeMUClkWMY4KmYxvd9LtNQ6LE4z+r/ZKmN9Dks3tEIkR6AAAAABJRU5ErkJggg==>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADyElEQVR4Xr1Xa0sUURj2J/gT9h+4UEYJ1QZRhFB2IRCyVpLQIjE1E8x2GsRLKrsguLqZs0IX03DL0laoNtItw2IsuhHEVhRBX+YnnN5ndmb3zJmzu7qJDzwMju/7Ps85857LlpRsAtSZ56Xiu6KAQkQ/USMmiDqRWazi4jyDC8uatvLJmP78nU28+YL/G1ZecWYgMLL0zpj99puhKCcMEz4uzjv26oOx8OsvG3/9kfXNJfnYFMxlq64RvQ+XtNjXn8wuahXDiPx8HEaHUc//+MNCT1Z4YcQq+D8fXxBIoEIJFIR4+MUqP2pXsYbx+xpiBuLLvHhCLWbUSAovruoQx5QLRX1iPFDW3oeR8nGgIsYVBMTV9LSJxWzqYg5ABlj7nYW8sRTjJya2XwkG+fcOHBwYVySFRPrEPBg4HZkW40CIeiCMmL3dYdOomJ8BBSlbOwZY8815sRDPzLLj8lIH+iJinMnKa9cNCNffiNnvDEdy76NkEB0eTq7Cpek0lwmlv591Ht7idRQoMQ0EkXd+YtaVI6GWSawdmdIiL9+bnQ52PHjGUAjcrQ6xzumnmcRAaz3EWdfxbUa0fk/GxJmxGW/55UEDOTsCIUeOhOiv7Cqyk3riSbPjhxJv2cnhyYyJo6EJpk4+ZoHGU6Y4GKypYGQAJrA7elEU3xWfwJ69HP0Acefs5Zryusi9GL337O8ZbaK/PSSs2QZG63bBAKh33Y07VgxmDf0AYmD49lQjVTM8GXSMnDOADjWnTzDhbBQCietXj5Xb4iYjF6tZ11TczEEu1dGJbqF8oASvbQKOLQMJMY4MlA7X7kzxBmwTgdtzrCIQQg2PmLcmWCbgnmFblU4Xobq5URlt2OcwAPafO8QqWy/5xPh1gwz4xHc2ytI7GTvS0uIyYDEm5mwYaEY0fGN0O5rLf+GsKG4zu8Y3ChDnOx1G0LBtjSdE8Y01gT5AM2KXxGWEN0FnBtvdFmgiMV1i4P9NQLx7dlHH5oRjWTiSWfXQLVOAhEqj6U1JNFC8CRLw0r3OwE1IJk50NBsJefOYaOJjC4KKV0EcwjnEpTciEvJLxG36xXgpqLCCswDC+OYScedBIoCEFIn42kyoVqdDVCJs03UMiyAhTSKe3wQVxkEhion0i3kyRNNNmWtlyE1wIub+T88qQXxd3WyZyNWUjruECU7I7G56+rh30qYrBIhIxDMmHMFq+lcLL2if8Xh6HMHrQDT3ynAZMG81nAlbvGDTFQKJBUVxoutSa5vQ1PSvGTw9YkyxiGZXRioqfv/NAgm7+ugfstkn6wXafWUAAAAASUVORK5CYII=>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE0ElEQVR4Xt2W/1PTdRzH/RP2Yz9y5ACZ4bLM0sutgy688JxJnqnLpbcwjvMAC4kyNgO1SGaoIYJuxZdxYzK+tETDlqMlAbHDC4VQZ6J1Z8qnXzpSf3j1er239+7zeQ8Wg+6663n3PPZ578Pr8Xq/X6/3+71Fi/7vGtMlq9AmtAcdQgO5d3myXXx3zgKAJLQHrRK/44qALRMvaqQ7W3LgrtkIN9evZnByU0oyiP8zJxEUHYSwPOL3JDn4fr4Z7uW9AZOvZkXhfSuSwbF4ngmQEGxD+9AW+fhhj0+LDtJMCUrwX40GmMhKj8LJ7ZoFJjCTEGw60uWXmoevwS1LOUsglLNSASYPPBuGo0NijHkL4bYabwDcY3eg+5cp+M7tiZm1OHu0TYyTsBCsQnuO9fRD543fGZxWAMcgsHVtDJzXPmKtGC+usN6PyZ8j8KAcfjrwE5zqCbAEalq9MJCri8JHnw93/j8uP4IKqcFmGM/mnzm83j/CwOTBG7fhx+AInPvmIlwevQpn/EMsCb4S57SK2ZtkoZVCkBZtEMe5OLy2dzAK/3r0OjS5O0CXu515rTEP+i79ACe8fWw1Wj6sgGMZyzg8KMZMSCUOT5Aaji87rcKlkSuwa68lmgD5SL0DugLDLIGdNgdklhyE9QVlYNVlJVZ7roGlT+oL6lrt+SecQHXncALMlgCVoeRUO4NHXCjGjRGCVGgD2oL2oENo6Da+Ce81dsGuz5rB6jzLwNxO30BMCfqHglCB72WXVXH4jKemQhF4MKBZBhfSl4I3LR3OpKZCU0YGVLd44ZC7lyVQ1OBWJECm2Q5dHmVNODI2gfX3wwZrDYeH0LPeG0wc7tdkQKP6cXnHwvHiMnCN3mLbjOCURDkmJCYh96aK4xwuoePXncNp1iKcXOc6y2pe5xuOrgL1wgHX+RgweXtVg7zu0R0V2eLKa5jDzy/RxIC5qeu/GBxnwT91fgUNu9+F0v3VMyYhwE1yFoSv8ST5GEsgHrx+5TMSD+44cBS+f3oV+LFHPs4vZitBpuakROLB4wpBerRPgPtqszJNlZWV0ieuHnDvLgXaDQRvVKvBdtrNdgOtgrnmc3jJXAQvmPdAZvH+xOByRRKxd2ZrDNNX19nHL26TMAHo3LhZAa/F2fNVKbV7IOutvaDbtIO2oKTfmjfrKTonIViFDk6Pb4SHvx2GjnUbFPC6115n4ENtvdETjpxrLob3V62xiPESFsI9f/28BR5NtcO1kh0KOPYDVDd1QdFJF+Tsq2ZgOl73ZWbzspnEeHS3iGOzCuF6NDy8exImq/fEwA+Wl4O1ohLKNm/zffTcarA9tYKB6bBqVi+mz3oxJoQ1tySo7g9uvg33uqsU8M6XdTB1vRUC3gJoaXinEEEhOi86UtPg2/Qn2LuR8yNJjDlnRWrPZn/F+IoC/udkGxun7y+YtKa2lBQGlZtWQoyZkDC4gdX+jy9B8h2F1uUZ0P/BTvZM/UBNie/YaHvyWXPT3eFY6D3Pl//RfSfr/ge3rQxOM6fE2M7AVepMTZPE2VMpHAv5kYmBtbS8MkvCs4W/i0CbHN6zJJ0dWrJw89N0eAeQqRforwVtomf5ewhN4vDIER5Ex79q/20h3E598J/ASZiAyqlWmxyJ/rafQX8D4pf94Adaq8gAAAAASUVORK5CYII=>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACoElEQVR4Xt1WXWvTUBjeT+hP6OXQabNPP1pqpqMiVdcxJyiCQSaoDDYEQS+E0TsvZBe7dz9AsL9AJgheCQURBEEqiKIgBuG4djp3fJ8kJ5y8SWraJF74wEPbnJP3efKe55x0ZOR/gjg1Y+zUy9u9pdkWfVr0u8Dn5AaIE+3924tS3lly+Gu5bvcumBafmzmUONEXV4Sh3ctzrdy6oYuD+6sLIRNON66daedigoquK3Hw55VaSFxx7+b57E1QQYTNN/CjdjS2C6oTvEYqkGhRNwDunK04a8/FFXcvzW3wOqnwtTqJkAVM9C6eDAkr/l6ZxxyD1xkKH4+PWy8PHpDfZ6cDBsDuohnbie5CtcVrRYIKmYoRY9b7I4Z8MToqX5XGQgbAuOVAWHm9ANAioW2vbqPq3EQnHJK8BnFcfzt12DEAvpk4FDIAIph71+shAyLioXzQYEcXD7SPWqvG8OTKQD8TILoBYedBzlVsrhmAfiPf2577SAPga2MsMhMa0dn+IaQJaLVzA0802qnG3s2UQgZABPNLZZILJxMHaNKGusk5XLQg4TuuYezDsfGQuEebiBwhK2qbdhKJA4IdMHR4RC7DN3OKC/vivObAEPycv3o60AV1HcHLXFxBaFkAVZL1nYDAwQTC96k8scVrpIJwl8I/DxKyyOukwvNG3fxcK3ORflzjNYZG88mzQunug/a95VtcpB+zedtBnNg+0dyUZEKu3FhFHpIsxzavNTCUOFHef/xUzj981CYTBeG+IzoRopkbcMQ94rv/V4oEYCT0H0BjuiUgsa04cR0k1BBsm4qkR20cSGxdE4eRSHEdEBTuKxos8vHEIDFLE0/XxkFBggbR9sQtPp4rSLDoiYPDr9+waLpBA/+9ONB0g/fXsOWBP6j+1jf2r+RFAAAAAElFTkSuQmCC>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABjElEQVR4XmNggIL/MxgEgNiB1vh7HRgrwOyFWd4AxP/pgf9NZfj/o5HhP9AR85EdgFA0h+P//yXS//8vk0fFs1gwDCMX/+4GOwCEDVAdsFD4//8ttph4kyXEYVgMIwcjOcAB1QGrtVAt3mj6//9icar6HoRxOwDkU5jlq9SobjEM43YAsuVYNFILE3YAFeMbG8bvgPVGGBrAeJ7A/78na///WyKPKUcixu0AUNCDcgIWTf822v//9esXGP853wt2ELoaYjFuB+DByA4A4y+v/v/dG4ehjhhMHQdA8e9He/7/W6WPoR4fpqoD4NFydQ7R0UITB4AxKFoO52LoRce0cwAU/35xGqwe3Qy6OQCG0c2gnwNAUbHdD8MMujgAVFgRSow0cQA4OxJZSlLVAb/f3cYb3NgwdRwAimdQcGNRSwhT7IA/t9cQHdzYMHkOAFoIKu3w5W9iMVkOoCYedcCoAzAc8KcPUxHN8DSG/z+b0RwAZLz/2QqUoAOG9gthGNI1AzISkATphRGd04EEAAZJ+q68tIkkAAAAAElFTkSuQmCC>