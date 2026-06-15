import { ChevronLeft, Calendar, User, Share2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRoute, Link } from 'wouter';
import { useState, useEffect } from 'react';

const blogArticles: Record<string, any> = {
  'vidro-laminado-vs-temperado-completo': {
    title: 'Vidro Laminado vs. Temperado: Qual Escolher? Guia Completo com Segurança, Preço e Aplicações',
    metaDescription: 'Comparação completa entre vidro laminado e temperado. Aprenda sobre segurança, cores, preços, aplicações e cuidados na logística.',
    date: '2026-06-14',
    author: 'GS Glass Brasil',
    category: 'Vidro Temperado',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/blog-esquadrias-aluminio-L7UypcbbStsLkmQDmwtmhT.webp',
    readTime: '12 min',
    relatedPosts: ['guia-box-vidro', 'manutencao-box-vidro'],
    content: `
      <h1>Vidro Laminado vs. Temperado: Qual Escolher? Guia Completo com Segurança, Preço e Aplicações</h1>
      
      <p>Quando se trata de escolher vidro para seu projeto residencial, comercial ou industrial, uma das decisões mais importantes é entre vidro laminado e vidro temperado. Ambos são excelentes opções, mas cada um possui características específicas que os tornam ideais para diferentes situações.</p>

      <p>Neste guia completo, a GS Glass Brasil — com mais de 20 anos de experiência em vidraçaria profissional — explica em detalhes as diferenças entre esses dois tipos de vidro, quando usar cada um, questões de segurança, variações de cor, preços e cuidados essenciais na logística.</p>

      <h2>1. O Que é Vidro Temperado?</h2>
      
      <h3>Definição e Processo de Fabricação</h3>
      <p>O vidro temperado é um vidro que passa por um processo de aquecimento e resfriamento rápido em temperaturas controladas. Este processo cria tensões internas no vidro, tornando-o 4 a 5 vezes mais resistente que o vidro comum.</p>

      <p>Processo de Fabricação:</p>
      <ul>
        <li>Vidro comum é aquecido a ~650°C</li>
        <li>Resfriamento rápido (choque térmico) em câmaras especiais</li>
        <li>Cria camadas de compressão na superfície</li>
        <li>Resultado: vidro muito mais resistente</li>
      </ul>

      <h3>Características Principais do Vidro Temperado</h3>
      <ul>
        <li>Resistência: 4-5x mais resistente que vidro comum</li>
        <li>Quebra: Quebra em pequenos pedaços (cubos)</li>
        <li>Segurança: Muito seguro - pedaços pequenos não cortam</li>
        <li>Temperatura: Resiste a variações de -40°C a +250°C</li>
        <li>Peso: Leve (ideal para grandes áreas)</li>
        <li>Transparência: 100% transparente</li>
        <li>Reversibilidade: Não pode ser cortado após temperado</li>
      </ul>

      <h3>Quando o Vidro Quebra</h3>
      <p>Quando o vidro temperado quebra, ele se desintegra em pequenos cubos arredondados (aproximadamente 1-2 cm), semelhantes a cubos de açúcar. Isso é extremamente seguro porque:</p>
      <ul>
        <li>Não há bordas afiadas</li>
        <li>Não causa ferimentos graves</li>
        <li>Fácil de limpar</li>
      </ul>

      <h2>2. O Que é Vidro Laminado?</h2>
      
      <h3>Definição e Processo de Fabricação</h3>
      <p>O vidro laminado é composto por duas ou mais camadas de vidro unidas por uma película de polivinil butiral (PVB) ou resina. Esta película atua como um "adesivo" que mantém os pedaços juntos quando o vidro quebra.</p>

      <p>Processo de Fabricação:</p>
      <ul>
        <li>Duas folhas de vidro são posicionadas</li>
        <li>Película de PVB é colocada entre elas</li>
        <li>Aquecimento e pressão aplicados</li>
        <li>Resultado: vidro resistente que mantém integridade estrutural</li>
      </ul>

      <h3>Características Principais do Vidro Laminado</h3>
      <ul>
        <li>Resistência: Resistente a impactos moderados</li>
        <li>Quebra: Quebra mas mantém pedaços juntos (como vidro de carro)</li>
        <li>Segurança: Seguro - pedaços não se desprendem</li>
        <li>Isolamento: Excelente isolamento acústico e térmico</li>
        <li>Transparência: Pode ter tonalidades (verde, bronze, cinza)</li>
        <li>Reversibilidade: Pode ser cortado antes da laminação</li>
        <li>Proteção UV: Bloqueia até 99% dos raios UV</li>
        <li>Durabilidade: Vida útil: 20+ anos</li>
      </ul>

      <h3>Quando o Vidro Quebra</h3>
      <p>Quando o vidro laminado quebra, a película de PVB mantém os pedaços juntos, criando um efeito semelhante ao vidro de um carro. O vidro fica com uma teia de trincas, mas não se desintegra.</p>

      <h2>3. Comparação Direta: Vidro Laminado vs. Temperado</h2>
      
      <p>Veja a tabela comparativa completa:</p>

      <table>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Vidro Temperado</th>
            <th>Vidro Laminado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Resistência a Impacto</td>
            <td>Muito alta (4-5x)</td>
            <td>Alta (resistente)</td>
          </tr>
          <tr>
            <td>Tipo de Quebra</td>
            <td>Cubos pequenos</td>
            <td>Mantém integridade</td>
          </tr>
          <tr>
            <td>Segurança</td>
            <td>Excelente (sem cortes)</td>
            <td>Excelente (sem desprendimento)</td>
          </tr>
          <tr>
            <td>Isolamento Acústico</td>
            <td>Baixo</td>
            <td>Excelente</td>
          </tr>
          <tr>
            <td>Isolamento Térmico</td>
            <td>Baixo</td>
            <td>Excelente</td>
          </tr>
          <tr>
            <td>Proteção UV</td>
            <td>Não</td>
            <td>Sim (99%)</td>
          </tr>
          <tr>
            <td>Flexibilidade</td>
            <td>Rígido</td>
            <td>Ligeiramente flexível</td>
          </tr>
          <tr>
            <td>Custo</td>
            <td>Moderado</td>
            <td>Mais alto (20-40% a mais)</td>
          </tr>
          <tr>
            <td>Aplicações Ideais</td>
            <td>Banheiros, portas</td>
            <td>Fachadas, sacadas, vidros de carro</td>
          </tr>
          <tr>
            <td>Pode ser Cortado</td>
            <td>Não (após temperado)</td>
            <td>Sim (antes de laminar)</td>
          </tr>
          <tr>
            <td>Tonalidades</td>
            <td>Apenas incolor</td>
            <td>Verde, bronze, cinza, fumê</td>
          </tr>
          <tr>
            <td>Manutenção</td>
            <td>Fácil</td>
            <td>Fácil</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Segurança: Qual é Mais Seguro?</h2>
      
      <h3>Ambos São Seguros, Mas de Formas Diferentes</h3>
      <p>Vidro Temperado é mais seguro quando:</p>
      <ul>
        <li>Há risco de impacto direto (portas, box de banheiro)</li>
        <li>Crianças podem bater contra o vidro</li>
        <li>Ambiente com movimento intenso</li>
        <li>Segurança é prioridade máxima</li>
      </ul>

      <p>Por quê? Quando quebra, não deixa bordas afiadas que cortam.</p>

      <p>Vidro Laminado é mais seguro quando:</p>
      <ul>
        <li>Há risco de queda de altura (sacadas, fachadas)</li>
        <li>Segurança contra intrusão é importante</li>
        <li>Proteção UV é necessária</li>
        <li>Isolamento acústico é crítico</li>
      </ul>

      <p>Por quê? Quando quebra, mantém a estrutura intacta, evitando quedas.</p>

      <h3>Normas Técnicas Brasileiras</h3>
      <p>Ambos os vidros devem atender às normas:</p>
      <ul>
        <li>NBR 7199 - Vidro Temperado (Segurança)</li>
        <li>NBR 7208 - Vidro Laminado (Segurança)</li>
      </ul>

      <p>A GS Glass Brasil utiliza vidro certificado conforme essas normas, garantindo qualidade e segurança em todos os projetos.</p>

      <h2>5. Cor: Disponibilidades e Diferenças</h2>
      
      <h3>Vidro Temperado - Cores Disponíveis</h3>
      <p>O vidro temperado é disponível principalmente em:</p>
      <ul>
        <li>Incolor (Transparente): Transparência máxima, aspecto limpo</li>
        <li>Fumê (Cinza Escuro): Reduz ofuscamento, aspecto moderno</li>
        <li>Verde Claro: Toque de cor, transparência mantida</li>
        <li>Bronze: Aspecto quente, reduz claridade</li>
      </ul>

      <p>Limitação: Vidro temperado tem opções de cor mais limitadas porque o processo de temperamento afeta a absorção de cor.</p>

      <h3>Vidro Laminado - Cores Disponíveis</h3>
      <p>O vidro laminado oferece muito mais variedade de cores:</p>
      <ul>
        <li>Incolor: Transparência máxima - Uso geral</li>
        <li>Verde Claro: Aspecto natural, reduz reflexo - Fachadas</li>
        <li>Verde Escuro: Aspecto sofisticado - Comercial</li>
        <li>Bronze: Quente, elegante - Residencial</li>
        <li>Cinza/Fumê: Moderno, reduz calor - Fachadas</li>
        <li>Azul: Aspecto premium - Comercial</li>
        <li>Espelhado: Reflexivo, privacidade - Fachadas</li>
      </ul>

      <p>Vantagem: Laminado oferece maior liberdade de design e cores sofisticadas.</p>

      <h3>Impacto da Cor no Preço</h3>
      <p>Cores especiais (bronze, verde escuro, espelhado) aumentam o preço em 10-20% comparado ao incolor.</p>

      <h2>6. Preço: Qual é Mais Caro?</h2>
      
      <h3>Tabela de Preços Referenciais (São Paulo - 2026)</h3>
      <p>Vidro Temperado 8mm (m²):</p>
      <ul>
        <li>Incolor: R$ 180 - R$ 250</li>
        <li>Fumê: R$ 200 - R$ 280</li>
        <li>Verde Claro: R$ 200 - R$ 280</li>
        <li>Bronze: R$ 220 - R$ 300</li>
      </ul>

      <p>Vidro Laminado 6mm + 6mm (m²):</p>
      <ul>
        <li>Incolor: R$ 280 - R$ 380</li>
        <li>Verde Claro: R$ 300 - R$ 400</li>
        <li>Verde Escuro: R$ 320 - R$ 420</li>
        <li>Bronze: R$ 320 - R$ 420</li>
        <li>Espelhado: R$ 400 - R$ 500</li>
      </ul>

      <h3>Análise de Custo-Benefício</h3>
      <p>Vidro Temperado:</p>
      <ul>
        <li>Mais barato (30-40% menos)</li>
        <li>Ideal para orçamentos limitados</li>
        <li>Menos isolamento</li>
        <li>Menos opções de cor</li>
      </ul>

      <p>Vidro Laminado:</p>
      <ul>
        <li>Melhor isolamento (acústico + térmico)</li>
        <li>Mais opções de design</li>
        <li>Mais caro</li>
        <li>Mais pesado (requer estrutura mais robusta)</li>
      </ul>

      <h3>Exemplo Prático: Box de Banheiro 1,5m x 2m</h3>
      <p>Vidro Temperado Incolor:</p>
      <ul>
        <li>Área: 3m²</li>
        <li>Custo vidro: 3m² × R$ 200 = R$ 600</li>
        <li>Instalação: R$ 400-600</li>
        <li>Total: R$ 1.000 - R$ 1.200</li>
      </ul>

      <p>Vidro Laminado Incolor:</p>
      <ul>
        <li>Área: 3m²</li>
        <li>Custo vidro: 3m² × R$ 330 = R$ 990</li>
        <li>Instalação: R$ 400-600</li>
        <li>Total: R$ 1.390 - R$ 1.590</li>
      </ul>

      <p>Diferença: Laminado custa ~30% a mais, mas oferece isolamento acústico e proteção UV.</p>

      <h2>7. Aplicações: Quando Usar Cada Um</h2>
      
      <h3>Vidro Temperado - Aplicações Ideais</h3>
      <p>Box de Banheiro</p>
      <ul>
        <li>Resistência a impacto</li>
        <li>Segurança (quebra em cubos)</li>
        <li>Fácil limpeza</li>
        <li>Custo-benefício</li>
      </ul>

      <p>Portas Internas</p>
      <ul>
        <li>Segurança em caso de queda</li>
        <li>Transparência total</li>
        <li>Durabilidade</li>
      </ul>

      <p>Prateleiras e Nichos</p>
      <ul>
        <li>Suporta peso</li>
        <li>Aspecto limpo</li>
        <li>Resistência</li>
      </ul>

      <p>Divisórias Internas</p>
      <ul>
        <li>Leveza</li>
        <li>Transparência</li>
        <li>Segurança</li>
      </ul>

      <h3>Vidro Laminado - Aplicações Ideais</h3>
      <p>Fachadas e Cortinas de Vidro</p>
      <ul>
        <li>Isolamento acústico (reduz ruído de rua)</li>
        <li>Isolamento térmico (economia de energia)</li>
        <li>Segurança estrutural</li>
      </ul>

      <p>Sacadas e Guarda-Corpos</p>
      <ul>
        <li>Mantém integridade quando quebra</li>
        <li>Evita quedas</li>
        <li>Segurança máxima</li>
      </ul>

      <p>Vidros de Cobertura (Pergolado)</p>
      <ul>
        <li>Proteção contra quedas</li>
        <li>Isolamento</li>
        <li>Durabilidade</li>
      </ul>

      <p>Ambientes com Ruído Externo</p>
      <ul>
        <li>Reduz ruído em até 30-40%</li>
        <li>Conforto acústico</li>
        <li>Bem-estar</li>
      </ul>

      <h2>8. ⚠️ Cuidados Essenciais na Logística: O Caso do Vidro Laminado Trincado</h2>
      
      <h3>INFORMAÇÃO CRÍTICA: Vidro Laminado Trincado Deve Ser Descartado</h3>
      <p>Este é um ponto extremamente importante que muitos clientes desconhecem:</p>

      <h3>Por Que Vidro Laminado Trincado Não Pode Ser Reparado?</h3>
      <p>Quando um vidro laminado é trincado durante o transporte ou manuseio, a película de PVB (que une as camadas) é comprometida. Isso significa:</p>

      <p>Não pode ser reparado</p>
      <ul>
        <li>A película não pode ser "colada" novamente</li>
        <li>Não há como restaurar a integridade estrutural</li>
        <li>Qualquer tentativa de reparo é ineficaz</li>
      </ul>

      <p>Não é seguro usar</p>
      <ul>
        <li>Perde resistência estrutural</li>
        <li>Risco de desprendimento de vidro</li>
        <li>Falha em caso de impacto</li>
        <li>Não atende normas de segurança (NBR 7208)</li>
      </ul>

      <p>Deve ser descartado completamente</p>
      <ul>
        <li>Não pode ser reaproveitado</li>
        <li>Não pode ser laminado novamente</li>
        <li>Deve ser reciclado como vidro comum</li>
      </ul>

      <h3>Consequências de Usar Vidro Laminado Trincado</h3>
      <ul>
        <li>Segurança: Vidro pode se desintegrar em impacto</li>
        <li>Responsabilidade Legal: Empresa fica responsável por acidentes</li>
        <li>Garantia: Produto não tem garantia</li>
        <li>Normas: Viola NBR 7208</li>
      </ul>

      <h3>Cuidados na Logística para Evitar Trincas</h3>
      <p>1. Transporte Adequado</p>
      <ul>
        <li>Embalagem Profissional: Vidro envolvido em plástico bolha (mínimo 5cm), caixa de papelão reforçada, separadores de espuma entre placas, etiqueta "FRÁGIL" visível</li>
        <li>Veículo Apropriado: Caminhão com suspensão suave, piso antiderrapante, amarração segura (não apertar demais), sem vibrações excessivas</li>
        <li>Rota e Velocidade: Evitar ruas com buracos, velocidade moderada (máximo 60 km/h em ruas), evitar freadas bruscas</li>
      </ul>

      <p>2. Armazenamento Correto</p>
      <ul>
        <li>No Depósito: Vidro em posição vertical (nunca horizontal), apoiado em cavaletes de madeira, distância mínima de 10cm entre placas, proteção contra umidade, temperatura controlada (15-25°C)</li>
        <li>Proteção: Coberto com lona, longe de fontes de vibração, sem peso sobre o vidro, acesso fácil para inspeção</li>
      </ul>

      <p>3. Inspeção Antes da Entrega</p>
      <ul>
        <li>Vidro está íntegro (sem trincas)</li>
        <li>Sem bolhas de ar na laminação</li>
        <li>Sem descolamento nas bordas</li>
        <li>Cores e dimensões corretas</li>
        <li>Documentação em ordem</li>
      </ul>

      <h3>O Que Fazer Se Vidro Laminado Chegar Trincado</h3>
      <p>Passo 1: Documentar Imediatamente</p>
      <ul>
        <li>Fotografar a trinca</li>
        <li>Anotar data e hora</li>
        <li>Guardar embalagem</li>
      </ul>

      <p>Passo 2: Comunicar ao Fornecedor</p>
      <ul>
        <li>Enviar fotos em até 24 horas</li>
        <li>Descrever como chegou</li>
        <li>Solicitar substituição</li>
      </ul>

      <p>Passo 3: Não Usar o Vidro</p>
      <ul>
        <li>Nunca instale vidro trincado</li>
        <li>Não tente "aproveitar" parte dele</li>
        <li>Não tente reparar</li>
      </ul>

      <p>Passo 4: Descarte Correto</p>
      <ul>
        <li>Vidro deve ser reciclado</li>
        <li>Contatar empresa de reciclagem</li>
        <li>Manter documentação</li>
      </ul>

      <h2>9. Recomendações da GS Glass Brasil</h2>
      
      <p>Banheiro Residencial:</p>
      <ul>
        <li>Vidro Temperado 8mm Incolor</li>
        <li>Motivo: Segurança, custo-benefício, fácil limpeza</li>
        <li>Preço: R$ 1.000 - R$ 1.200</li>
      </ul>

      <p>Sacada Residencial:</p>
      <ul>
        <li>Vidro Laminado 6mm + 6mm Incolor</li>
        <li>Motivo: Segurança estrutural, isolamento acústico</li>
        <li>Preço: R$ 1.500 - R$ 2.000</li>
      </ul>

      <p>Fachada Comercial:</p>
      <ul>
        <li>Vidro Laminado 8mm + 8mm Verde ou Bronze</li>
        <li>Motivo: Isolamento, design, durabilidade</li>
        <li>Preço: R$ 2.500 - R$ 4.000</li>
      </ul>

      <p>Divisória Interna:</p>
      <ul>
        <li>Vidro Temperado 10mm Incolor ou Fumê</li>
        <li>Motivo: Transparência, segurança, leveza</li>
        <li>Preço: R$ 1.200 - R$ 1.800</li>
      </ul>

      <p>Pergolado/Cobertura:</p>
      <ul>
        <li>Vidro Laminado 6mm + 6mm Incolor</li>
        <li>Motivo: Segurança contra quedas, isolamento</li>
        <li>Preço: R$ 1.800 - R$ 2.500</li>
      </ul>

      <h2>10. Perguntas Frequentes</h2>
      
      <p>P: Posso cortar vidro temperado após o temperamento?</p>
      <p>R: Não. Vidro temperado não pode ser cortado após o processo de temperamento. Se precisar de dimensões específicas, o corte deve ser feito antes do temperamento. Por isso, é importante fornecer medidas precisas.</p>

      <p>P: Vidro laminado oferece proteção contra roubo?</p>
      <p>R: Sim, parcialmente. Vidro laminado é mais resistente a tentativas de arrombamento porque mantém integridade estrutural. Para máxima segurança contra roubo, recomenda-se laminado com espessura 8mm + 8mm ou com película de segurança adicional.</p>

      <p>P: Qual vidro é melhor para clima quente como São Paulo?</p>
      <p>R: Vidro laminado é superior porque:</p>
      <ul>
        <li>Bloqueia até 99% de raios UV</li>
        <li>Reduz calor em até 40%</li>
        <li>Economia de energia (ar-condicionado)</li>
        <li>Proteção contra desbotamento de móveis</li>
      </ul>

      <p>P: Vidro temperado pode ser reparado se trincar?</p>
      <p>R: Não. Vidro temperado não pode ser reparado. Se trincar, deve ser totalmente substituído. Não há como "colar" ou restaurar vidro temperado.</p>

      <p>P: Qual é a vida útil de cada um?</p>
      <p>R:</p>
      <ul>
        <li>Vidro Temperado: 20-30 anos (com manutenção)</li>
        <li>Vidro Laminado: 20-30 anos (com manutenção)</li>
      </ul>
      <p>Ambos duram décadas se mantidos corretamente.</p>

      <p>P: Posso misturar vidro temperado e laminado no mesmo projeto?</p>
      <p>R: Sim! É comum usar:</p>
      <ul>
        <li>Temperado em portas e divisórias internas</li>
        <li>Laminado em fachadas e sacadas</li>
      </ul>
      <p>Cada um no seu lugar ideal.</p>

      <p>P: O vidro laminado fica amarelado com o tempo?</p>
      <p>R: Não significativamente. Vidro laminado de qualidade mantém transparência por 20+ anos. Pequenas variações de cor são normais e não afetam funcionalidade.</p>

      <h2>11. Conclusão: Escolha Inteligente</h2>
      
      <p>Tanto vidro temperado quanto vidro laminado são excelentes opções. A escolha correta depende de:</p>

      <ul>
        <li>Aplicação: Onde será usado?</li>
        <li>Segurança: Qual nível de proteção é necessário?</li>
        <li>Isolamento: Precisa reduzir ruído ou calor?</li>
        <li>Design: Qual cor e aspecto deseja?</li>
        <li>Orçamento: Qual é o investimento disponível?</li>
      </ul>

      <p>Resumo Executivo:</p>
      <ul>
        <li>Vidro Temperado: Melhor para banheiros, portas, interiores. Preço mais baixo. Segurança excelente (sem cortes).</li>
        <li>Vidro Laminado: Melhor para fachadas, sacadas, isolamento. Preço mais alto. Segurança excelente (estrutural).</li>
      </ul>

      <p>A GS Glass Brasil está pronta para ajudar você a escolher o vidro ideal para seu projeto. Com mais de 20 anos de experiência, nossa equipe oferece consultoria técnica gratuita, análise de seu projeto, recomendação personalizada, orçamento transparente, instalação profissional e garantia de qualidade.</p>
    `
  },
  'guia-box-vidro': {
    title: 'Como Escolher o Melhor Box para o Seu Banheiro: Tipos, Modelos e Cores de Alumínio',
    date: '2026-06-14',
    author: 'GS Glass Brasil',
    category: 'Box de Vidro',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323771497/Uhd6pDGkHbqnUZLoGMBmqL/box-vidro-realista-artigo-4vjacHKRvGFWYqCtewfhrh.webp',
    readTime: '20 min',
    relatedPosts: ['vidro-laminado-vs-temperado-completo'],
    content: `
      <h1>Guia Completo: Os 6 Tipos de Box de Vidro - Como Funcionam, Materiais e Qual Escolher para Seu Banheiro</h1>

      <h2>Introdução</h2>

      <p>Escolher o tipo de box de vidro ideal para seu banheiro é uma decisão importante. Cada tipo funciona de forma diferente, utiliza materiais específicos e é ideal para situações diferentes. Neste guia completo, vamos explicar os 6 tipos de box disponíveis, como funcionam, quais materiais utilizam e por que cada um é ideal para um modelo de banheiro específico.</p>


      <h2>1. BOX SEM TRANSPASSE (PADRÃO) - O Clássico Funcional</h2>

      <h3>Como Funciona</h3>

      <p>O box sem transpasse é o modelo mais comum e tradicional. O vidro temperado é instalado sem ultrapassar a borda da banheira, criando um fechamento simples e direto. A vedação é feita com silicone na base, onde o vidro encontra a banheira.</p>

Funcionamento técnico:
      <ul>
      <li>Vidro temperado 8mm é fixado com dobradiças na parede</li>
      <li>A base do vidro fica no mesmo nível da borda da banheira</li>
      <li>Silicone premium selaciona a junção vidro-banheira</li>
      <li>Abertura pivotante para entrada e saída</li>

      </ul>
      <h3>Materiais Utilizados</h3>

      <ul>
      <li>Vidro: Temperado 8mm (4-5x mais resistente que vidro comum)</li>
      <li>Dobradiças: Aço inox polido ou cromado (suporta peso do vidro)</li>
      <li>Vedação: Silicone de qualidade premium (resiste a mofo e umidade)</li>
      <li>Perfil: Alumínio anodizado prata (acabamento clássico)</li>
      <li>Película: Transparente com proteção UV</li>

      </ul>
      <h3>Por Que Serve Para Seu Banheiro</h3>

Ideal para:
      <ul>
      <li>Banheiros pequenos a médios (até 2m²)</li>
      <li>Banheiras padrão com altura regular</li>
      <li>Orçamento limitado</li>
      <li>Quem quer simplicidade e funcionalidade</li>
      <li>Instalação rápida (pronta entrega em 3-5 dias)</li>

      </ul>
Não é ideal para:
      <ul>
      <li>Banheiros com vazamento frequente</li>
      <li>Banheiras muito altas</li>
      <li>Quem quer máxima privacidade</li>

      </ul>
      <h3>Vantagens</h3>

      <ul>
      <li>✅Mais barato - Melhor custo-benefício do mercado</li>
      <li>✅Fácil de limpar - Sem cantos complexos</li>
      <li>✅Pronta entrega - Disponível em estoque</li>
      <li>✅Instalação simples - Qualquer profissional consegue instalar</li>
      <li>✅Transparência total - Amplia visualmente o banheiro</li>
      <li>✅Durável - 15-20 anos de uso</li>

      </ul>
      <h3>Desvantagens</h3>

      <ul>
      <li>❌Vazamento possível - Água pode vazar na base se o silicone envelhecer</li>
      <li>❌Manutenção de silicone - Precisa trocar silicone a cada 5-7 anos</li>
      <li>❌Sem privacidade visual - Vidro transparente</li>
      <li>❌Sem isolamento acústico - Barulho do chuveiro ecoa</li>

      </ul>
      <h3>Comentários e Recomendações</h3>

      <p>Este é o box mais popular no Brasil. É perfeito para quem quer qualidade sem gastar muito. A chave para durabilidade é manter o silicone em bom estado. Se você limpa regularmente e troca o silicone quando necessário, este box dura 15-20 anos sem problemas.</p>

Exemplo de cliente ideal: Maria, 35 anos, apartamento 70m² em São Paulo. Banheiro pequeno, orçamento limitado, quer algo funcional. Escolheu box sem transpasse com perfil prata. "Ficou perfeito, fácil de limpar e o banheiro parece maior."


      <h2>2. BOX COM TRANSPASSE - A Solução Premium Contra Vazamentos</h2>

      <h3>Como Funciona</h3>

      <p>O box com transpasse é uma evolução do modelo anterior. O vidro ultrapassa a borda da banheira em 5-10cm, criando um sistema de vedação muito mais eficiente. A água que escapa do vidro principal é capturada pelo transpasse e volta para a banheira.</p>

Funcionamento técnico:
      <ul>
      <li>Vidro temperado 8mm é instalado com dobradiças</li>
      <li>Uma segunda aba de vidro (transpasse) ultrapassa a borda da banheira</li>
      <li>Sistema de vedação dupla (silicone na base + silicone no transpasse)</li>
      <li>Qualquer água que escapa é redirecionada para a banheira</li>

      </ul>
      <h3>Materiais Utilizados</h3>

      <ul>
      <li>Vidro: Temperado 8mm + aba de transpasse (vidro adicional)</li>
      <li>Dobradiças: Aço inox polido premium (suporta peso maior)</li>
      <li>Vedação: Silicone de qualidade superior (dupla vedação)</li>
      <li>Perfil: Alumínio anodizado (prata, preto ou dourado)</li>
      <li>Película: Transparente com proteção UV</li>

      </ul>
      <h3>Por Que Serve Para Seu Banheiro</h3>

Ideal para:
      <ul>
      <li>Banheiros com histórico de vazamento</li>
      <li>Banheiras padrão com altura variável</li>
      <li>Quem quer máxima proteção contra água</li>
      <li>Banheiros em apartamentos (protege o vizinho de baixo)</li>
      <li>Quem quer design mais sofisticado</li>
      <li>Investimento de longo prazo</li>

      </ul>
Não é ideal para:
      <ul>
      <li>Orçamento muito limitado</li>
      <li>Espaços muito pequenos (transpasse ocupa espaço)</li>

      </ul>
      <h3>Vantagens</h3>

      <ul>
      <li>✅Evita vazamentos - Transpasse redireciona água para banheira</li>
      <li>✅Proteção do imóvel - Protege parede e apartamento de baixo</li>
      <li>✅Mais sofisticado - Design mais elegante e profissional</li>
      <li>✅Melhor acabamento - Vedação dupla garante durabilidade</li>
      <li>✅Pronta entrega - Disponível em estoque</li>
      <li>✅Durável - 15-20 anos com manutenção adequada</li>

      </ul>
      <h3>Desvantagens</h3>

      <ul>
      <li>❌Mais caro - 20-30% mais que sem transpasse</li>
      <li>❌Instalação mais complexa - Requer profissional experiente</li>
      <li>❌Manutenção de silicone - Duas linhas de silicone para manter</li>
      <li>❌Sem privacidade visual - Vidro transparente</li>

      </ul>
      <h3>Comentários e Recomendações</h3>

      <p>Este é o box recomendado para a maioria das pessoas. Custa um pouco mais, mas economiza muito em problemas futuros. Se você mora em apartamento ou tem histórico de vazamento, este é o modelo ideal. A vedação dupla garante que nenhuma gota de água escape.</p>

Exemplo de cliente ideal: João, 42 anos, apartamento em prédio antigo. Banheiro com histórico de vazamento. Escolheu box com transpasse + perfil preto. "Resolveu completamente o problema. Nenhuma gota vaza mais."


      <h2>3. BOX DE CANTO - Aproveita o Espaço Inteligentemente</h2>

      <h3>Como Funciona</h3>

      <p>O box de canto é instalado no canto do banheiro, ocupando dois lados (parede + parede). Funciona como dois vidros que se encontram em um ângulo de 90 graus, criando uma solução compacta e moderna.</p>

Funcionamento técnico:
      <ul>
      <li>Dois vidros temperados 8mm se encontram em ângulo de 90°</li>
      <li>Vedação especial no canto (perfil de alumínio em L)</li>
      <li>Dobradiças permitem abertura em um dos lados</li>
      <li>Banheira de canto é essencial para este modelo</li>

      </ul>
      <h3>Materiais Utilizados</h3>

      <ul>
      <li>Vidro: Temperado 8mm (dois painéis em ângulo)</li>
      <li>Perfil de canto: Alumínio anodizado em L (reforçado)</li>
      <li>Dobradiças: Aço inox polido (suporta peso duplo)</li>
      <li>Vedação: Silicone premium duplo (canto + base)</li>
      <li>Película: Transparente com proteção UV</li>

      </ul>
      <h3>Por Que Serve Para Seu Banheiro</h3>

Ideal para:
      <ul>
      <li>Banheiros pequenos (até 2m²)</li>
      <li>Banheiras de canto</li>
      <li>Quem quer aproveitar espaço</li>
      <li>Design moderno e minimalista</li>
      <li>Facilita circulação no banheiro</li>
      <li>Pronta entrega em estoque</li>

      </ul>
Não é ideal para:
      <ul>
      <li>Banheiras retangulares padrão</li>
      <li>Banheiros muito pequenos (menos de 1,5m²)</li>
      <li>Quem quer máxima privacidade</li>

      </ul>
      <h3>Vantagens</h3>

      <ul>
      <li>✅Aproveita espaço - Usa o canto que normalmente é vazio</li>
      <li>✅Design moderno - Muito procurado em projetos contemporâneos</li>
      <li>✅Facilita circulação - Deixa o banheiro mais aberto</li>
      <li>✅Pronta entrega - Disponível em estoque</li>
      <li>✅Amplia visualmente - Vidro em canto faz banheiro parecer maior</li>
      <li>✅Instalação rápida - 1-2 dias</li>

      </ul>
      <h3>Desvantagens</h3>

      <ul>
      <li>❌Requer banheira de canto - Não funciona com banheira retangular</li>
      <li>❌Instalação mais complexa - Requer profissional especializado</li>
      <li>❌Vedação em canto - Ponto crítico que precisa manutenção</li>
      <li>❌Sem privacidade visual - Vidro transparente</li>
      <li>❌Custo um pouco maior - Mais caro que sem transpasse</li>

      </ul>
      <h3>Comentários e Recomendações</h3>

      <p>Este é o box ideal para banheiros pequenos. Se você tem espaço limitado e uma banheira de canto, este é o modelo perfeito. Economiza espaço, fica lindo e moderno. A chave é escolher um profissional que saiba instalar corretamente o perfil de canto.</p>

Exemplo de cliente ideal: Ana, 28 anos, apartamento pequeno em São Paulo. Banheiro 1,5m x 1,5m com banheira de canto. Escolheu box de canto com perfil preto. "Transformou meu banheiro. Ficou muito maior e moderno."


      <h2>4. BOX CORREDIÇO (DESLIZANTE) - Máxima Economia de Espaço</h2>

      <h3>Como Funciona</h3>

      <p>O box corrediço funciona como uma porta de correr. Dois vidros temperados deslizam um sobre o outro horizontalmente. Um vidro fica fixo e o outro desliza sobre trilhos de alumínio. Ideal para espaços muito pequenos onde não há espaço para abrir portas.</p>

Funcionamento técnico:
      <ul>
      <li>Dois vidros temperados 8mm (um fixo, um móvel)</li>
      <li>Trilhos de alumínio superior e inferior</li>
      <li>Rodas de nylon especiais para deslizamento suave</li>
      <li>Vedação com silicone nos trilhos</li>
      <li>Abertura horizontal (não precisa de espaço para abrir)</li>

      </ul>
      <h3>Materiais Utilizados</h3>

      <ul>
      <li>Vidro: Temperado 8mm (dois painéis)</li>
      <li>Trilhos: Alumínio anodizado (superior + inferior)</li>
      <li>Rodas: Nylon de alta resistência com rolamentos</li>
      <li>Vedação: Silicone premium nos trilhos</li>
      <li>Perfil: Alumínio anodizado (prata, preto ou dourado)</li>

      </ul>
      <h3>Por Que Serve Para Seu Banheiro</h3>

Ideal para:
      <ul>
      <li>Banheiros muito pequenos (menos de 1,5m²)</li>
      <li>Espaço limitado para abrir portas</li>
      <li>Apartamentos compactos</li>
      <li>Quem quer design moderno</li>
      <li>Facilita limpeza (sem dobradiças)</li>
      <li>Pronta entrega em estoque</li>

      </ul>
Não é ideal para:
      <ul>
      <li>Banheiros com espaço adequado (melhor usar dobradiça)</li>
      <li>Quem não quer manutenção de trilhos</li>
      <li>Banheiros com muita umidade (trilhos podem entupir)</li>

      </ul>
      <h3>Vantagens</h3>

      <ul>
      <li>✅Economiza espaço - Não precisa de espaço para abrir</li>
      <li>✅Design moderno - Muito procurado em projetos minimalistas</li>
      <li>✅Fácil de limpar - Sem dobradiças complexas</li>
      <li>✅Pronta entrega - Disponível em estoque</li>
      <li>✅Abertura suave - Rodas de qualidade garantem deslizamento perfeito</li>
      <li>✅Muito procurado - Diferencial real no mercado</li>

      </ul>
      <h3>Desvantagens</h3>

      <ul>
      <li>❌Mais caro - 40-50% mais que sem transpasse</li>
      <li>❌Manutenção de trilhos - Precisa limpar trilhos regularmente</li>
      <li>❌Pode acumular sujeira - Trilhos inferior pode acumular água</li>
      <li>❌Sem privacidade visual - Vidro transparente</li>
      <li>❌Requer profissional especializado - Instalação mais complexa</li>

      </ul>
      <h3>Comentários e Recomendações</h3>

      <p>Este é o box ideal para apartamentos muito pequenos. Economiza espaço real e fica muito moderno. A chave é manter os trilhos limpos. Se você limpar os trilhos uma vez por mês, não terá problemas. Muito procurado em projetos de arquitetura contemporânea.</p>

Exemplo de cliente ideal: Lucas, 32 anos, apartamento pequeno em São Paulo (45m²). Banheiro 1,2m x 1,8m. Escolheu box corrediço com perfil preto. "Perfeito para meu espaço. Ficou moderno e economiza muito espaço."


      <h2>5. BOX COM DOBRADIÇA (PIVOTANTE) - O Clássico Elegante</h2>

      <h3>Como Funciona</h3>

      <p>O box com dobradiça é o modelo clássico e elegante. Um vidro temperado é fixado com dobradiças na parede, funcionando como uma porta que abre e fecha. As dobradiças permitem abertura de até 180°, facilitando muito a limpeza e o acesso.</p>

Funcionamento técnico:
      <ul>
      <li>Vidro temperado 8mm é fixado com dobradiças na parede</li>
      <li>Dobradiças de aço inox suportam todo o peso do vidro</li>
      <li>Abertura pivotante (até 180°)</li>
      <li>Vedação com silicone na base</li>
      <li>Fechamento suave com amortecedor opcional</li>

      </ul>
      <h3>Materiais Utilizados</h3>

      <ul>
      <li>Vidro: Temperado 8mm (espessura padrão)</li>
      <li>Dobradiças: Aço inox polido ou cromado (2-3 dobradiças)</li>
      <li>Vedação: Silicone de qualidade premium</li>
      <li>Perfil: Alumínio anodizado (prata, preto ou dourado)</li>
      <li>Película: Transparente com proteção UV</li>
      <li>Amortecedor: Opcional (fecha suavemente)</li>

      </ul>
      <h3>Por Que Serve Para Seu Banheiro</h3>

Ideal para:
      <ul>
      <li>Banheiros médios a grandes (acima de 2m²)</li>
      <li>Espaço adequado para abrir portas</li>
      <li>Quem quer design clássico e elegante</li>
      <li>Fácil limpeza (abre totalmente)</li>
      <li>Pronta entrega em estoque</li>
      <li>Quem quer durabilidade máxima</li>

      </ul>
Não é ideal para:
      <ul>
      <li>Banheiros muito pequenos (menos de 1,5m²)</li>
      <li>Espaço limitado para abrir portas</li>
      <li>Quem quer máxima privacidade</li>

      </ul>
      <h3>Vantagens</h3>

      <ul>
      <li>✅Fácil de limpar - Abre 180°, acesso total</li>
      <li>✅Design clássico - Elegante e sofisticado</li>
      <li>✅Durável - Dobradiças de qualidade duram 20+ anos</li>
      <li>✅Pronta entrega - Disponível em estoque</li>
      <li>✅Abertura suave - Amortecedor opcional</li>
      <li>✅Manutenção simples - Apenas lubrificar dobradiças anualmente</li>

      </ul>
      <h3>Desvantagens</h3>

      <ul>
      <li>❌Precisa de espaço - Requer espaço para abrir a porta</li>
      <li>❌Sem privacidade visual - Vidro transparente</li>
      <li>❌Manutenção de dobradiças - Precisa lubrificar anualmente</li>
      <li>❌Sem isolamento acústico - Barulho do chuveiro ecoa</li>

      </ul>
      <h3>Comentários e Recomendações</h3>

      <p>Este é o box mais popular mundialmente. É clássico, elegante, durável e fácil de limpar. Se você tem espaço adequado no banheiro, este é o modelo recomendado. As dobradiças de qualidade duram 20+ anos sem problemas. Muito procurado em banheiros de luxo e hotéis.</p>

Exemplo de cliente ideal: Pedro, 50 anos, casa em condomínio fechado. Banheiro 3m x 2,5m. Escolheu box com dobradiça + perfil dourado. "Ficou elegante e sofisticado. Muito fácil de limpar. Recomendo para todos."


      <h2>6. BOX ATÉ O TETO - Máxima Privacidade e Sofisticação</h2>

      <h3>Como Funciona</h3>

      <p>O box até o teto é a solução premium para máxima privacidade. O vidro temperado vai do piso até o teto, criando um fechamento total do chuveiro. Funciona como uma cabine de chuveiro fechada, oferecendo privacidade máxima e evitando completamente vazamentos.</p>

Funcionamento técnico:
      <ul>
      <li>Vidro temperado 8mm vai do piso até o teto (altura 2,40-2,80m)</li>
      <li>Dobradiças reforçadas suportam vidro de altura total</li>
      <li>Vedação dupla (base + topo)</li>
      <li>Perfil de alumínio reforçado em toda altura</li>
      <li>Abertura pivotante ou corrediça</li>

      </ul>
      <h3>Materiais Utilizados</h3>

      <ul>
      <li>Vidro: Temperado 8mm (painéis de altura total)</li>
      <li>Dobradiças: Aço inox polido reforçado (suporta peso maior)</li>
      <li>Vedação: Silicone premium duplo (base + topo)</li>
      <li>Perfil: Alumínio anodizado reforçado (prata, preto, dourado ou aço inox)</li>
      <li>Película: Transparente com proteção UV</li>
      <li>Estrutura: Reforço de alumínio na altura total</li>

      </ul>
      <h3>Por Que Serve Para Seu Banheiro</h3>

Ideal para:
      <ul>
      <li>Banheiros grandes com pé-direito alto (acima de 2,40m)</li>
      <li>Quem quer máxima privacidade</li>
      <li>Banheiros de luxo e premium</li>
      <li>Quem quer evitar vazamentos completamente</li>
      <li>Projetos de arquitetura sofisticados</li>
      <li>Investimento de longo prazo</li>

      </ul>
Não é ideal para:
      <ul>
      <li>Banheiros com pé-direito baixo (menos de 2,40m)</li>
      <li>Orçamento limitado</li>
      <li>Banheiros pequenos</li>
      <li>Quem quer simplicidade</li>

      </ul>
      <h3>Vantagens</h3>

      <ul>
      <li>✅Máxima privacidade - Fechamento total</li>
      <li>✅Zero vazamentos - Vedação dupla garante proteção total</li>
      <li>✅Design sofisticado - Muito procurado em projetos premium</li>
      <li>✅Aumenta valor do imóvel - Diferencial real</li>
      <li>✅Durável - 20+ anos com manutenção adequada</li>
      <li>✅Isolamento acústico - Reduz ruído do chuveiro</li>

      </ul>
      <h3>Desvantagens</h3>

      <ul>
      <li>❌Muito caro - 80-120% mais que sem transpasse</li>
      <li>❌Instalação complexa - Requer profissional especializado</li>
      <li>❌Requer pé-direito alto - Mínimo 2,40m</li>
      <li>❌Manutenção especial - Vedação dupla requer cuidado</li>
      <li>❌Estrutura reforçada - Mais peso na parede</li>

      </ul>
      <h3>Comentários e Recomendações</h3>

      <p>Este é o box de luxo. Ideal para quem quer o melhor. Oferece privacidade máxima, zero vazamentos e design sofisticado. Muito procurado em casarões, casas de luxo e projetos de arquitetura premium. Se você tem espaço e orçamento, este é o modelo recomendado.</p>



      <h2>Comparação Rápida dos 6 Tipos</h2>

      <ul>
      <li>Sem Transpasse: Melhor custo-benefício, ideal para orçamento limitado</li>
      <li>Com Transpasse: Proteção contra vazamentos, recomendado para apartamentos</li>
      <li>Canto: Aproveita espaço, perfeito para banheiros pequenos</li>
      <li>Corrediço: Máxima economia de espaço, design moderno</li>
      <li>Dobradiça: Clássico elegante, fácil de limpar, uso geral</li>
      <li>Até o Teto: Luxo premium, máxima privacidade</li>
      </ul>


      <h2>COMO ESCOLHER O MELHOR BOX PARA SEU BANHEIRO</h2>

      <h3>Passo 1: Avalie o Tamanho do Seu Banheiro</h3>

Banheiro muito pequeno (menos de 1,5m²)?
      <p>→ Escolha: Box Corrediço (economiza espaço máximo)</p>

Banheiro pequeno (1,5m a 2m²)?
      <p>→ Escolha: Box de Canto ou Box Corrediço (aproveita espaço)</p>

Banheiro médio (2m a 3m²)?
      <p>→ Escolha: Box Sem Transpasse ou Box Com Transpasse (clássico)</p>

Banheiro grande (acima de 3m²)?
      <p>→ Escolha: Box Com Dobradiça ou Box Até o Teto (elegante)</p>

      <h3>Passo 2: Considere Seu Orçamento</h3>

Orçamento limitado?
      <p>→ Escolha: Box Sem Transpasse (melhor custo-benefício)</p>

Orçamento médio?
      <p>→ Escolha: Box Com Transpasse ou Box Com Dobradiça (recomendado)</p>

Orçamento premium?
      <p>→ Escolha: Box Até o Teto (luxo máximo)</p>

      <h3>Passo 3: Pense em Funcionalidade</h3>

Quer máxima privacidade?
      <p>→ Escolha: Box Até o Teto (fechamento total)</p>

Quer evitar vazamentos?
      <p>→ Escolha: Box Com Transpasse ou Box Até o Teto</p>

Quer fácil limpeza?
      <p>→ Escolha: Box Com Dobradiça (abre 180°)</p>

Quer economizar espaço?
      <p>→ Escolha: Box Corrediço ou Box de Canto</p>

      <h3>Passo 4: Verifique Disponibilidade</h3>

Precisa rápido (3-5 dias)?
      <p>→ Escolha: Modelo em Estoque (qualquer um com perfil prata)</p>

Pode esperar (10-15 dias)?
      <p>→ Escolha: Modelo Customizado (cores especiais, tamanhos)</p>


      <h2>CONCLUSÃO</h2>

      <p>Cada tipo de box tem sua função específica. A escolha correta depende do tamanho do seu banheiro, seu orçamento e suas prioridades. </p>

Nossa recomendação: Para a maioria das pessoas, o Box Com Transpasse é o melhor custo-benefício. Oferece proteção contra vazamentos, é durável, fácil de manter e tem preço justo.

Na GS Glass Brasil, oferecemos todos os 6 tipos de box com qualidade garantida, materiais premium e pronta entrega para modelos padrão.


      <h2>📞 Solicite Sua Consultoria Técnica Gratuita Agora!</h2>

      <p>Não sabe qual box escolher? Nossa equipe de especialistas pode ajudar!</p>

🔗 WhatsApp: [Clique aqui para conversar](https://wa.me/5511934275767)

📧 Email: orcamento.gsglass@gmail.com

☎️ Telefone: (11) 93427-5767

⏰ Horário: Segunda a sexta, 8h às 18h

      <h3>Próximos Passos:</h3>

      <p>1. Envie as dimensões do seu banheiro (altura, largura, profundidade)</p>
      <p>2. Descreva o tipo de box que prefere (sem transpasse, transpasse, canto, corrediço, dobradiça, até teto)</p>
      <p>3. Mencione suas prioridades (preço, privacidade, espaço, durabilidade)</p>
      <p>4. Receba recomendação personalizada em 24h</p>
      <p>5. Agende a consultoria técnica (gratuita e sem compromisso)</p>

Sua renovação começa aqui! 🚀

    `
  }
};

const allPosts = [
  { id: 'vidro-laminado-vs-temperado-completo', title: 'Vidro Laminado vs. Temperado: Qual Escolher? Guia Completo' },
  { id: 'guia-box-vidro', title: 'Guia Completo: Como Escolher o Melhor Box de Vidro' }
];

export default function BlogPost() {
  const [match, params] = useRoute('/blog/:id');
  
  if (!match) return null;
  
  const article = blogArticles[params?.id];
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Artigo não encontrado</h1>
          <Link href="/blog" className="text-accent font-semibold hover:underline">Voltar ao Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = article.relatedPosts 
    ? allPosts.filter(p => article.relatedPosts.includes(p.id))
    : [];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-48 md:pb-20 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-primary-foreground/70 mb-8 text-sm">
            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary-foreground transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-primary-foreground font-semibold">{article.category}</span>
          </div>

          {/* Back Button */}
          <Link href="/blog" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ChevronLeft size={20} />
            Voltar ao Blog
          </Link>
          
          <h1 className="text-primary-foreground text-4xl md:text-5xl font-bold mb-6">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {new Date(article.date).toLocaleDateString('pt-BR')}
            </span>
            <span className="flex items-center gap-2">
              <User size={18} />
              {article.author}
            </span>
            <span className="text-accent font-semibold bg-accent/20 px-3 py-1 rounded">
              {article.category}
            </span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover rounded-lg mb-12 shadow-lg"
              />
              
              <div className="blog-article-wrapper">
                <article 
                  className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-strong:text-primary prose-p:leading-relaxed prose-p:text-foreground/80 prose-headings:mt-8 prose-headings:mb-4 prose-ul:my-6 prose-li:my-2 prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/70"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              {/* CTA Box */}
              <div className="my-16 p-8 md:p-12 bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Quer um Box de Vidro Personalizado?</h3>
                <p className="text-lg text-foreground/80 mb-6">
                  A GS Glass oferece boxes sob medida com qualidade premium. Solicite seu orçamento gratuito agora mesmo!
                </p>
                <a
                  href="https://wa.me/5511934275767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-primary px-8 py-3 rounded font-semibold hover:shadow-lg transition-all"
                >
                  Solicitar Orçamento via WhatsApp
                </a>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-primary mb-8">Artigos Relacionados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedArticles.map((post) => (
                      <Link key={post.id} href={`/blog/${post.id}`} className="group block bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all">
                        <h4 className="font-semibold text-primary group-hover:text-accent transition-colors mb-3 line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-accent font-semibold">
                          Ler artigo
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Table of Contents */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-accent p-8 rounded-lg">
                <h3 className="font-bold text-primary mb-6 text-lg flex items-center gap-2">
                  <span className="text-accent text-xl">📑</span> Índice
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-primary hover:text-accent font-medium transition-colors">1. Tipos de Vidro para Box</a></li>
                  <li><a href="#" className="text-primary hover:text-accent font-medium transition-colors">2. Acabamentos e Designs</a></li>
                  <li><a href="#" className="text-primary hover:text-accent font-medium transition-colors">3. Tamanhos e Medidas</a></li>
                  <li><a href="#" className="text-primary hover:text-accent font-medium transition-colors">4. Sistemas de Fechamento</a></li>
                  <li><a href="#" className="text-primary hover:text-accent font-medium transition-colors">5. Manutenção e Limpeza</a></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-accent/15 to-accent/5 border-l-4 border-accent p-8 rounded-lg">
                <h3 className="font-bold text-primary mb-4 text-lg flex items-center gap-2">
                  <span className="text-accent text-xl">✉️</span> Newsletter
                </h3>
                <p className="text-sm text-foreground/70 mb-6">
                  Receba dicas exclusivas sobre vidraçaria direto no seu e-mail.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 border-2 border-accent/30 rounded-lg focus:outline-none focus:border-accent bg-white text-sm font-medium transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                  >
                    Inscrever-se
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
