# Inventify - Frontend

## Visão Geral

O **Inventify** é um Sistema de Controle de Inventário Inteligente que utiliza machine learning para prever demandas, gerenciar estoques com eficiência e fornecer análises em tempo real. O frontend da aplicação foi desenvolvido utilizando **Angular**, proporcionando uma interface intuitiva e responsiva para os usuários.

## Tecnologias Utilizadas

- **Frontend:** Angular
- **Backend:** C#
- **Banco de Dados:** Sql Server, MongoDB
- **Machine Learning:** TensorFlow/PyTorch
- **Infraestrutura:** Docker, Kubernetes
- **CI/CD:** GitHub Actions
- **Monitoramento:** Prometheus, Grafana

## Funcionalidades Principais

1. **Dashboard Interativo**
   - Exibição de estatísticas, gráficos e indicadores-chave do inventário.
2. **Gestão de Produtos e Estoque**
   - Cadastro, edição e exclusão de produtos.
   - Atualização automática do estoque.
3. **Alertas de Estoque Baixo**
   - Notificações em tempo real quando um produto estiver com estoque crítico.
4. **Histórico de Movimentações**
   - Registros detalhados de todas as movimentações de entrada e saída.
5. **Integração com Machine Learning**
   - Previsão de demanda com base no histórico de vendas.
6. **Autenticação e Controle de Acessos**
   - Login seguro com JWT / OAuth.
   - Perfis de usuários e permissões diferenciadas.

## Configuração do Ambiente

### Pré-requisitos

- **Node.js** (v16 ou superior)
- **Angular CLI** (v15 ou superior)
- **Docker** (para execução em containers)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/inventify-frontend.git
   cd inventify-frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` com as configurações necessárias (exemplo no `.env.example`).

4. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm start
   ```

### Build para Produção

```bash
npm run build
```

## Testes

Para rodar os testes unitários:
```bash
npm run test
```
Para rodar os testes end-to-end (E2E):
```bash
npm run e2e
```

## Deployment

Para rodar o projeto com Docker:
```bash
docker build -t inventify-frontend .
docker run -p 4200:80 inventify-frontend
```

## Contribuição

1. Faça um **fork** do repositório.
2. Crie uma **branch** para a sua feature (`git checkout -b feature-nova`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova funcionalidade'`)
4. Envie para o repositório (`git push origin feature-nova`)
5. Abra um **Pull Request**

## Contato

Se precisar de suporte ou tiver alguma dúvida, entre em contato

---

**Inventify - Sistema de Controle de Inventário Inteligente** 🚀

