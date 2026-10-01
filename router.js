// router.js - Versão Leve e Ultra Estável Baseada em Funções Nativas
class SpaRouter {
    constructor(routes, containerId = 'app') {
        this.routes = routes;
        this.container = document.getElementById(containerId);
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRouting());

        document.body.addEventListener('click', (event) => {
            const link = event.target.closest('[data-link]');
            if (link) {
                event.preventDefault();
                const href = link.getAttribute('href');
                window.location.hash = href;
            }
        });

        if (!window.location.hash) {
            window.location.hash = '#/';
        } else {
            this.handleRouting();
        }
    }

    handleRouting() {
        let path = window.location.hash.replace('#', '') || '/';
        path = path.replace('/meu-site-projeto', '');

        const routeRenderFn = this.routes[path];

        if (routeRenderFn) {
            this.container.innerHTML = routeRenderFn();
            
            // Conecta o evento de escuta se o formulário acabou de entrar na tela
            if (path === '/cadastro') {
                setTimeout(() => this.conectarFormularioCadastro(), 50);
            }
        } else {
            this.container.innerHTML = '<h2>Erro 404: Página não encontrada</h2>';
        }

        this.updateActiveLink(path);
    }

    updateActiveLink(currentPath) {
        const links = document.querySelectorAll('[data-link]');
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    conectarFormularioCadastro() {
        const form = document.getElementById('form-cadastro');
        
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();

                const nome = document.getElementById('nome').value;
                const email = document.getElementById('email').value;

                // Mostra a tela de sucesso instantânea
                this.container.innerHTML = `
                    <main>
                        <section style="text-align: center; padding: 40px 20px;">
                            <h2 style="color: #28a745;">✓ Inscrição Concluída!</h2>
                            <p>Obrigado, <strong>${nome}</strong>! Os dados da sua preferência foram registrados. Entraremos em contato através do e-mail <em>${email}</em>.</p>
                            <br>
                            <a href="/" data-link style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px;">Voltar para o Início</a>
                        </section>
                    </main>
                `;
            });
        }
    }
}
