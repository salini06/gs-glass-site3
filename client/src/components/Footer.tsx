import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-2">GS Glass</h3>
            <p className="text-primary-foreground/80">Soluções Profissionais em Vidro</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511934275767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span>11 93427-5767</span>
              </a>
              <a
                href="mailto:orcamento.gsglass@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={18} />
                <span>orcamento.gsglass@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Atendimento Regional</h4>
            <p className="text-primary-foreground/80">
              Granja Viana e regiões adjacentes
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} GS Glass. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
