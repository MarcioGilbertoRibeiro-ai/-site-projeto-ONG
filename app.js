// app.js - Versão unificada com o Formulário de Inscrição Completo

const homeView = () => `
    <main>
        <section id="causas">
            <h2>Projetos de Impacto Urgente</h2>
            <article>
                <h3>Apoio à Educação Comunitária</h3>
                <img src="../imagens/criancas-estudando.jpg" alt="Crianças estudando" width="300">
                <p>O trabalho voluntário focado em reforço escolar e oficinas culturais tem transformado a realidade de jovens na periferia...</p>
                <a href="/cadastro" data-link>Quero ser voluntário</a>
            </article>
            <article>
                <h3>Arrecadação e Distribuição de Alimentos</h3>
                <img src="../imagens/alimentos.jpg" alt="Caixa com alimentos para doação" width="400">
                <p>Nossa força-tarefa atua no combate à fome, recolhendo doações e organizando a logística de entrega para famílias vulneráveis...</p>
                <a href="/cadastro" data-link>Doar agora</a>
            </article>
        </section>
        <aside id="como-ajudar-aside">
            <h2>Transparência e Editais</h2>
            <ul>
                <li><a href="#">Relatório de Impacto 2025</a></li>
                <li><a href="/cadastro" data-link>Vagas de Voluntariado Abertas</a></li>
            </ul>
        </aside>
    </main>
`;

const sobreView = () => `
    <main>
        <section>
            <h2>Quem Somos</h2>
            <h3>Mãos que Transformam</h3>
            <p>Fundada com o propósito de unir pessoas, nossa ONG atua diretamente em comunidades vulneráveis, desenvolvendo projetos sociais focados em dignidade, educação e alimentação.</p>
        </section>
    </main>
`;

const causasView = () => `
    <main>
        <section>
            <h2>Nossas Causas</h2>
            <p>Atuamos em diversas frentes para mitigar a desigualdade e levar esperança para quem mais precisa.</p>
        </section>
    </main>
`;

const comoAjudarView = () => `
    <main>
        <section>
            <h2>Como Ajudar</h2>
            <p>Existem muitas formas de apoiar o nosso trabalho, mesmo se você tiver pouco tempo livre.</p>
        </section>
    </main>
`;

// SEU FORMULÁRIO COMPLETO INTEGRADO DIRETAMENTE NA SPA
const cadastroView = () => `
    <main>
        <section class="form-container">
            <h2>Formulário de Inscrição</h2>
            <p>Escolha como você gostaria de atuar. Nossa equipe entrará em contato em breve.</p>
            
            <form id="form-cadastro">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" required placeholder="Digite seu nome completo">
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail de Contato</label>
                        <input type="email" id="email" name="email" required placeholder="exemplo@email.com">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="cep">CEP</label>
                        <input type="text" id="cep" name="cep" required placeholder="00000-000" maxlength="9">
                    </div>
                    <div class="form-group">
                        <label for="logradouro">Rua / Avenida</label>
                        <input type="text" id="logradouro" name="logradouro" required placeholder="Nome da rua, avenida, etc.">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="numero">Número</label>
                        <input type="text" id="numero" name="numero" required placeholder="Nº">
                    </div>
                    <div class="form-group">
                        <label for="complemento">Complemento (Opcional)</label>
                        <input type="text" id="complemento" name="complemento" placeholder="Apto, Bloco, Casa, etc.">
                    </div>
                    <div class="form-group">
                        <label for="bairro">Bairro</label>
                        <input type="text" id="bairro" name="bairro" required placeholder="Digite seu bairro">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade" name="cidade" required placeholder="Digite sua cidade">
                    </div>
                    <div class="form-group">
                        <label for="estado">Estado (UF)</label>
                        <select id="estado" name="estado" required>
                            <option value="" disabled selected>UF</option>
                            <option value="SP">SP</option><option value="RJ">RJ</option><option value="MG">MG</option>
                            <option value="RS">RS</option><option value="PR">PR</option><option value="SC">SC</option>
                            <!-- Adicione mais opções se necessário -->
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="atuacao">Frente de Ação Preferencial</label>
                        <select id="atuacao" name="atuacao" required>
                            <option value="" disabled selected>Selecione uma opção</option>
                            <option value="educacao">Apoio à Educação Comunitária</option>
                            <option value="alimentos">Arrecadação e Logística de Alimentos</option>
                            <option value="divulgacao">Comunicação e Divulgação das Causas</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="tipo-apoio">Modalidade de Colaboração</label>
                        <select id="tipo-apoio" name="tipo-apoio" required>
                            <option value="" disabled selected>Como deseja ajudar?</option>
                            <option value="voluntario">Trabalho Voluntário (Doação de Tempo)</option>
                            <option value="doador">Doador de Recursos/Insumos</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="mensagem">Fale um pouco sobre você (Opcional)</label>
                    <textarea id="mensagem" name="mensagem" rows="5" placeholder="Conte-nos sobre suas experiências anteriores ou motivações..."></textarea>
                </div>

                <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
                    <button type="submit" class="btn-submit" style="padding: 12px; background-color: #28a745; color: white; border: none; font-weight: bold; cursor: pointer;">Enviar Cadastro</button>
                    <a href="/" data-link style="text-align: center; color: #6c757d; text-decoration: none; font-weight: 600;">Voltar para a Página Inicial</a>
                </div>
            </form>
        </section>
    </main>
`;

const routes = {
    '/': homeView,
    '/sobre': sobreView,
    '/causas': causasView,
    '/como-ajudar': comoAjudarView,
    '/cadastro': cadastroView // Vinculado diretamente à função interna estável
};

document.addEventListener('DOMContentLoaded', () => {
    new SpaRouter(routes, 'app');
});
