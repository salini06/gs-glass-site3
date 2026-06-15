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

      <p>Neste guia completo, a GS Glass Brasil — com mais de 20 anos de experiência em vidraçaria profissional — explica em detalhes as diferenças entre esses dois tipos de vidro, quando usar cada um, questões de segurança, variações de cor e cuidados essenciais na logística.</p>

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
            <td>Mais alto</td>
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
              </ul>

      <p>Limitação: Vidro temperado tem opções de cor mais limitadas porque o processo de temperamento afeta a absorção de cor.</p>

      <h3>Vidro Laminado - Cores Disponíveis</h3>
      <p>O vidro laminado oferece muito mais variedade de cores:</p>
      <ul>
        <li>Incolor: Transparência máxima - Uso geral</li>
        <li>Verde Claro: Aspecto natural, reduz reflexo - Fachadas</li>
        <li>Verde Escuro: Aspecto sofisticado - Comercial</li>
                <li>Cinza/Fumê: Moderno, reduz calor - Fachadas</li>
        <li>Azul: Aspecto premium - Comercial</li>
        <li>Espelhado: Reflexivo, privacidade - Fachadas</li>
      </ul>

      <p>Vantagem: Laminado oferece maior liberdade de design e cores sofisticadas.</p>

      <h3>Impacto da Cor no Preço</h3>
      

      <h2>6. Aplicações: Quando Usar Cada Um</h2>
      
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

      <h2>7. ⚠️ Cuidados Essenciais na Logística: O Caso do Vidro Laminado Trincado</h2>
      
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

      <h2>8. Perguntas Frequentes</h2>
      
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

      <h2>9. Conclusão: Escolha Inteligente</h2>
      
      <p>Tanto vidro temperado quanto vidro laminado são excelentes opções. A escolha correta depende de:</p>

      <ul>
        <li>Aplicação: Onde será usado?</li>
        <li>Segurança: Qual nível de proteção é necessário?</li>
        <li>Isolamento: Precisa reduzir ruído ou calor?</li>
        <li>Design: Qual cor e aspecto deseja?</li>
        
      </ul>

      <p>Resumo Executivo:</p>
      <ul>
        <li>Vidro Temperado: Melhor para banheiros, portas, interiores. Segurança excelente (sem cortes).</li>
        <li>Vidro Laminado: Melhor para fachadas, sacadas, isolamento. Segurança excelente (estrutural).</li>
      </ul>

      <p>A GS Glass Brasil está pronta para ajudar você a escolher o vidro ideal para seu projeto. Com mais de 20 anos de experiência, nossa equipe oferece consultoria técnica gratuita, análise de seu projeto, recomendação personalizada, instalação profissional e garantia de qualidade.</p>
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
<h1>Como Escolher o Melhor Box para o Seu Banheiro: Tipos, Modelos e Cores de Alumínio</h1>

<h2>Introdução</h2>

<p>Escolher o tipo de box ideal para o seu banheiro é uma decisão importante. Cada tipo funciona de forma diferente, usa materiais específicos e é ideal para situações diferentes. Aqui na GS Glass Brasil, a gente trabalha com todos esses modelos há mais de 20 anos, então vou explicar os 6 tipos de box que temos disponíveis, como cada um funciona, quais materiais a gente usa e qual é o melhor para o seu caso.</p>

---

<h2>1. BOX SEM TRANSPASSE (PADRÃO) - O Clássico Funcional</h2>

<h3>Como Funciona</h3>

<p>O box sem transpasse é o modelo mais comum e tradicional que a gente faz aqui. É bem simples: o vidro temperado é instalado sem ultrapassar a borda do box, criando um fechamento direto. A vedação é feita com silicone na base, onde o vidro encontra o box.</p>

<p><strong>Funcionamento técnico:</strong></p>
<ul>
<li>Vidro temperado 8mm fixado com dobradiças na parede</li>
<li>A base do vidro fica no mesmo nível da borda do box</li>
<li>Silicone selaciona a junção vidro-box</li>
<li>Abertura pivotante para você entrar e sair</li>

</ul>
<h3>Materiais Utilizados</h3>

<ul>
<li><strong>Vidro:</strong> Temperado 8mm (4-5x mais resistente que vidro comum)</li>
<li><strong>Dobradiças:</strong> Aço inox polido ou cromado (suporta o peso do vidro)</li>
<li><strong>Vedação:</strong> Silicone de qualidade (resiste a mofo e umidade)</li>
<li><strong>Perfil:</strong> Alumínio anodizado prata (acabamento clássico)</li>
<li><strong>Película:</strong> Transparente com proteção UV</li>

</ul>
<h3>Por Que Serve Para Seu Banheiro</h3>

<p><strong>Ideal para:</strong></p>
<ul>
<li>Banheiros pequenos a médios (até 2m²)</li>
<li>Box padrão com altura regular</li>
<li>Orçamento limitado</li>
<li>Quem quer algo simples e funcional</li>
<li>Instalação rápida (a gente tem pronta entrega em 3-5 dias)</li>

</ul>
<p><strong>Não é ideal para:</strong></p>
<ul>
<li>Banheiros com vazamento frequente</li>
<li>Box muito altos</li>
<li>Quem quer máxima privacidade</li>

</ul>
<h3>Vantagens</h3>

<ul>
<li>✅ <strong>Mais barato</strong> - Melhor custo-benefício do mercado</li>
<li>✅ <strong>Fácil de limpar</strong> - Sem cantos complexos</li>
<li>✅ <strong>Pronta entrega</strong> - A gente tem em estoque</li>
<li>✅ <strong>Instalação simples</strong> - Qualquer profissional consegue instalar</li>
<li>✅ <strong>Transparência total</strong> - Amplia visualmente o banheiro</li>
<li>✅ <strong>Durável</strong> - 15-20 anos de uso</li>

</ul>
<h3>Desvantagens</h3>

<ul>
<li>❌ <strong>Vazamento possível</strong> - Água pode vazar na base se o silicone envelhecer</li>
<li>❌ <strong>Manutenção de silicone</strong> - Precisa trocar silicone a cada 5-7 anos</li>
<li>❌ <strong>Sem privacidade visual</strong> - Vidro transparente</li>
<li>❌ <strong>Sem isolamento acústico</strong> - Barulho do chuveiro ecoa</li>

</ul>
<h3>Comentários e Recomendações</h3>

<p>Este é o box mais popular que a gente vende. É perfeito para quem quer qualidade sem gastar muito. A chave para durabilidade é manter o silicone em bom estado. Se você limpa regularmente e troca o silicone quando necessário, este box dura 15-20 anos sem problemas.</p>

<p><strong>Exemplo de cliente:</strong> Maria, 35 anos, apartamento 70m² em São Paulo. Banheiro pequeno, orçamento limitado, queria algo funcional. Escolheu box sem transpasse com perfil prata. "Ficou perfeito, fácil de limpar e o banheiro parece maior."</p>

---

<h2>2. BOX COM TRANSPASSE - A Solução Premium Contra Vazamentos</h2>

<h3>Como Funciona</h3>

<p>O box com transpasse é uma evolução do modelo anterior. O vidro ultrapassa a borda do box em 5-10cm, criando um sistema de vedação muito mais eficiente. A água que escapa do vidro principal é capturada pelo transpasse e volta para o box.</p>

<p><strong>Funcionamento técnico:</strong></p>
<ul>
<li>Vidro temperado 8mm instalado com dobradiças</li>
<li>Uma segunda aba de vidro (transpasse) ultrapassa a borda do box</li>
<li>Sistema de vedação dupla (silicone na base + silicone no transpasse)</li>
<li>Qualquer água que escapa é redirecionada para o box</li>

</ul>
<h3>Materiais Utilizados</h3>

<ul>
<li><strong>Vidro:</strong> Temperado 8mm + aba de transpasse (vidro adicional)</li>
<li><strong>Dobradiças:</strong> Aço inox polido (suporta peso maior)</li>
<li><strong>Vedação:</strong> Silicone de qualidade superior (dupla vedação)</li>
<li><strong>Perfil:</strong> Alumínio anodizado (prata, preto ou dourado)</li>
<li><strong>Película:</strong> Transparente com proteção UV</li>

</ul>
<h3>Por Que Serve Para Seu Banheiro</h3>

<p><strong>Ideal para:</strong></p>
<ul>
<li>Banheiros com histórico de vazamento</li>
<li>Box com altura variável</li>
<li>Quem quer máxima proteção contra água</li>
<li>Banheiros em apartamentos (protege o vizinho de baixo)</li>
<li>Quem quer design mais sofisticado</li>
<li>Investimento de longo prazo</li>

</ul>
<p><strong>Não é ideal para:</strong></p>
<ul>
<li>Orçamento muito limitado</li>
<li>Espaços muito pequenos (transpasse ocupa espaço)</li>

</ul>
<h3>Vantagens</h3>

<ul>
<li>✅ <strong>Proteção máxima contra vazamento</strong> - A água não escapa</li>
<li>✅ <strong>Vedação dupla</strong> - Muito mais seguro</li>
<li>✅ <strong>Design sofisticado</strong> - Parece mais</li>
<li>✅ <strong>Durabilidade estendida</strong> - 20-25 anos</li>
<li>✅ <strong>Protege vizinhos</strong> - Em apartamentos, é muito importante</li>
<li>✅ <strong>Pronta entrega</strong> - A gente tem em estoque</li>

</ul>
<h3>Desvantagens</h3>

<ul>
<li>❌ <strong>Mais caro</strong> - Custa mais que o modelo sem transpasse</li>
<li>❌ <strong>Ocupa mais espaço</strong> - O transpasse reduz espaço útil</li>
<li>❌ <strong>Limpeza um pouco mais complexa</strong> - Mais áreas para limpar</li>

</ul>
<h3>Comentários e Recomendações</h3>

<p>Este é o box que a gente recomenda para apartamentos e para quem já teve problema de vazamento. É um investimento que vale a pena. A gente já viu muitos casos onde o transpasse salvou a vida do cliente, evitando infiltração no apartamento de baixo.</p>

<p><strong>Exemplo de cliente:</strong> João, 42 anos, apartamento em condomínio. Teve problema de vazamento no box anterior. Escolheu box com transpasse preto. "Desde que instalou, nunca mais tive problema. Deu paz de espírito."</p>

---

<h2>3. BOX DE CANTO - Aproveitando Cada Espaço</h2>

<h3>Como Funciona</h3>

<p>O box de canto é instalado no canto do banheiro, aproveitando o espaço de forma inteligente. Usa duas paredes como suporte, o que o torna muito estável. É ideal para banheiros pequenos onde cada centímetro conta.</p>

<p><strong>Funcionamento técnico:</strong></p>
<ul>
<li>Vidro temperado 8mm em formato de L</li>
<li>Fixado em duas paredes perpendiculares</li>
<li>Dobradiças especiais para canto</li>
<li>Vedação nas duas paredes + base</li>

</ul>
<h3>Materiais Utilizados</h3>

<ul>
<li><strong>Vidro:</strong> Temperado 8mm em formato de L</li>
<li><strong>Dobradiças:</strong> Aço inox especial para canto (suporta peso distribuído)</li>
<li><strong>Vedação:</strong> Silicone em duas paredes</li>
<li><strong>Perfil:</strong> Alumínio anodizado (prata, preto ou dourado)</li>
<li><strong>Película:</strong> Transparente com proteção UV</li>

</ul>
<h3>Por Que Serve Para Seu Banheiro</h3>

<p><strong>Ideal para:</strong></p>
<ul>
<li>Banheiros pequenos (até 1,5m²)</li>
<li>Espaços em L ou cantos disponíveis</li>
<li>Quem quer aproveitar cada espaço</li>
<li>Instalação em cantos de apartamentos</li>

</ul>
<p><strong>Não é ideal para:</strong></p>
<ul>
<li>Banheiros muito grandes</li>
<li>Quem quer máxima abertura</li>

</ul>
<h3>Vantagens</h3>

<ul>
<li>✅ <strong>Aproveita espaço</strong> - Usa o canto inteligentemente</li>
<li>✅ <strong>Muito estável</strong> - Fixado em duas paredes</li>
<li>✅ <strong>Pronta entrega</strong> - A gente tem em estoque</li>
<li>✅ <strong>Preço justo</strong> - Não é mais caro que o padrão</li>

</ul>
<h3>Desvantagens</h3>

<ul>
<li>❌ <strong>Instalação específica</strong> - Precisa de profissional experiente</li>
<li>❌ <strong>Menos flexível</strong> - Não pode ser movido facilmente</li>

</ul>
<h3>Comentários e Recomendações</h3>

<p>O box de canto é a solução perfeita para apartamentos pequenos. A gente vê muito isso em São Paulo, onde os banheiros são compactos. É uma forma inteligente de aproveitar o espaço sem sacrificar a qualidade.</p>

---

<h2>4. BOX CORREDIÇO - Máxima Economia de Espaço</h2>

<h3>Como Funciona</h3>

<p>O box corrediço tem vidros que deslizam um sobre o outro, como uma porta de guarda-roupa. Não precisa de espaço para abrir, o que o torna ideal para banheiros muito pequenos ou com espaço limitado.</p>

<p><strong>Funcionamento técnico:</strong></p>
<ul>
<li>Vidro temperado 8mm em trilhos</li>
<li>Desliza horizontalmente</li>
<li>Sistema de trilho superior e inferior</li>
<li>Vedação na base</li>

</ul>
<h3>Materiais Utilizados</h3>

<ul>
<li><strong>Vidro:</strong> Temperado 8mm em trilhos</li>
<li><strong>Trilhos:</strong> Alumínio anodizado com roletes de aço</li>
<li><strong>Vedação:</strong> Silicone na base</li>
<li><strong>Perfil:</strong> Alumínio anodizado (prata, preto ou dourado)</li>
<li><strong>Película:</strong> Transparente com proteção UV</li>

</ul>
<h3>Por Que Serve Para Seu Banheiro</h3>

<p><strong>Ideal para:</strong></p>
<ul>
<li>Banheiros muito pequenos (até 1m²)</li>
<li>Espaços sem espaço para abrir porta</li>
<li>Quem quer máxima economia de espaço</li>
<li>Banheiros em kitchenettes</li>

</ul>
<p><strong>Não é ideal para:</strong></p>
<ul>
<li>Quem quer facilidade de limpeza</li>
<li>Banheiros com muito movimento de pessoas</li>

</ul>
<h3>Vantagens</h3>

<ul>
<li>✅ <strong>Máxima economia de espaço</strong> - Não precisa de espaço para abrir</li>
<li>✅ <strong>Design moderno</strong> - Parece muito sofisticado</li>
<li>✅ <strong>Pronta entrega</strong> - A gente tem em estoque</li>
<li>✅ <strong>Fácil de usar</strong> - Desliza suavemente</li>

</ul>
<h3>Desvantagens</h3>

<ul>
<li>❌ <strong>Limpeza mais complexa</strong> - Trilhos precisam de limpeza regular</li>
<li>❌ <strong>Manutenção dos trilhos</strong> - Pode precisar de ajustes</li>
<li>❌ <strong>Vazamento possível</strong> - Se os trilhos não forem bem mantidos</li>

</ul>
<h3>Comentários e Recomendações</h3>

<p>O box corrediço é a solução para banheiros muito pequenos. A gente vê muito em estúdios e apartamentos compactos. A chave é manter os trilhos limpos. Se você fizer isso, o box dura 15-20 anos sem problemas.</p>

---

<h2>5. BOX COM DOBRADIÇA - O Clássico Elegante</h2>

<h3>Como Funciona</h3>

<p>O box com dobradiça é o modelo mais tradicional e elegante. O vidro abre como uma porta, com dobradiças na parede. É o modelo que a gente mais vê em casarões e apartamentos antigos.</p>

<p><strong>Funcionamento técnico:</strong></p>
<ul>
<li>Vidro temperado 8mm com dobradiças</li>
<li>Abre como uma porta tradicional</li>
<li>Vedação na base com silicone</li>
<li>Abertura total para limpeza</li>

</ul>
<h3>Materiais Utilizados</h3>

<ul>
<li><strong>Vidro:</strong> Temperado 8mm</li>
<li><strong>Dobradiças:</strong> Aço inox polido ou cromado (acabamento clássico)</li>
<li><strong>Vedação:</strong> Silicone</li>
<li><strong>Perfil:</strong> Alumínio anodizado (prata, preto ou dourado)</li>
<li><strong>Película:</strong> Transparente com proteção UV</li>

</ul>
<h3>Por Que Serve Para Seu Banheiro</h3>

<p><strong>Ideal para:</strong></p>
<ul>
<li>Banheiros médios a grandes</li>
<li>Quem quer design clássico e elegante</li>
<li>Fácil acesso para limpeza</li>
<li>Casarões e apartamentos antigos</li>

</ul>
<p><strong>Não é ideal para:</strong></p>
<ul>
<li>Banheiros muito pequenos</li>
<li>Espaços com pouco espaço para abrir</li>

</ul>
<h3>Vantagens</h3>

<ul>
<li>✅ <strong>Design elegante</strong> - Parece muito sofisticado</li>
<li>✅ <strong>Fácil de limpar</strong> - Abre totalmente</li>
<li>✅ <strong>Muito durável</strong> - 20-25 anos</li>
<li>✅ <strong>Pronta entrega</strong> - A gente tem em estoque</li>

</ul>
<h3>Desvantagens</h3>

<ul>
<li>❌ <strong>Precisa de espaço</strong> - Para abrir a porta</li>
<li>❌ <strong>Mais caro</strong> - Dobradiças de qualidade custam mais</li>
<li>❌ <strong>Vazamento possível</strong> - Se o silicone envelhecer</li>

</ul>
<h3>Comentários e Recomendações</h3>

<p>O box com dobradiça é para quem quer elegância. É o modelo que a gente vê em casarões e apartamentos de alto padrão. Se você tiver espaço, recomendo este modelo. Ele dura muito e fica muito bonito.</p>

---

<h2>6. BOX ATÉ O TETO - Máxima Privacidade</h2>

<h3>Como Funciona</h3>

<p>O box até o teto é instalado do chão até o teto do banheiro, criando um fechamento total. É o modelo mais e oferece máxima privacidade e isolamento.</p>

<p><strong>Funcionamento técnico:</strong></p>
<ul>
<li>Vidro temperado 8mm do chão ao teto</li>
<li>Fixação em parede + teto</li>
<li>Sistema de vedação completo</li>
<li>Abertura com dobradiça ou corrediço</li>

</ul>
<h3>Materiais Utilizados</h3>

<ul>
<li><strong>Vidro:</strong> Temperado 8mm (maior quantidade de vidro)</li>
<li><strong>Dobradiças:</strong> Aço inox (suporta peso maior)</li>
<li><strong>Vedação:</strong> Silicone em todas as junções</li>
<li><strong>Perfil:</strong> Alumínio anodizado (prata, preto ou dourado)</li>
<li><strong>Película:</strong> Transparente com proteção UV</li>

</ul>
<h3>Por Que Serve Para Seu Banheiro</h3>

<p><strong>Ideal para:</strong></p>
<ul>
<li>Banheiros grandes e modernos</li>
<li>Quem quer máxima privacidade</li>
<li>Casas de luxo e apartamentos de alto padrão</li>
<li>Quem quer isolamento acústico total</li>

</ul>
<p><strong>Não é ideal para:</strong></p>
<ul>
<li>Banheiros pequenos</li>
<li>Orçamento limitado</li>

</ul>
<h3>Vantagens</h3>

<ul>
<li>✅ <strong>Máxima privacidade</strong> - Fechamento total</li>
<li>✅ <strong>Isolamento acústico</strong> - Barulho não escapa</li>
<li>✅ <strong>Design muito sofisticado</strong> - Parece muito</li>
<li>✅ <strong>Durável</strong> - 20-25 anos</li>
<li>✅ <strong>Pronta entrega</strong> - A gente tem em estoque</li>

</ul>
<h3>Desvantagens</h3>

<ul>
<li>❌ <strong>Muito caro</strong> - É o modelo mais</li>
<li>❌ <strong>Instalação complexa</strong> - Precisa de profissional experiente</li>
<li>❌ <strong>Limpeza do teto</strong> - Mais áreas para limpar</li>

</ul>
<h3>Comentários e Recomendações</h3>

<p>O box até o teto é para quem quer o melhor. É o modelo que a gente vê em casas de luxo e apartamentos de alto padrão. Se você tiver orçamento e espaço, este é o modelo que recomendo. Fica muito bonito e dura muito tempo.</p>

---

<h2>Cores de Alumínio - Como Impactam o Preço</h2>

<p>A cor do alumínio influencia bastante no preço final do box. Aqui na GS Glass Brasil, a gente trabalha com 4 cores principais:</p>

<h3>1. Prata (Base)</h3>
<ul>
<li><strong>Preço:</strong> Base (referência)</li>
<li><strong>Acabamento:</strong> Clássico, neutro</li>
<li><strong>Recomendação:</strong> Para banheiros tradicionais</li>

</ul>
<h3>2. Preto</h3>
<ul>
<li><strong>Preço:</strong> +15-20% da prata</li>
<li><strong>Acabamento:</strong> Moderno, sofisticado</li>
<li><strong>Recomendação:</strong> Para banheiros modernos e minimalistas</li>

</ul>
<h3>3. Dourado</h3>
<ul>
<li><strong>Preço:</strong> +25-35% da prata</li>
<li><strong>Acabamento:</strong> Premium, elegante</li>
<li><strong>Recomendação:</strong> Para banheiros de luxo</li>

</ul>
<h3>4. Aço Inox</h3>
<ul>
<li><strong>Preço:</strong> +40-50% da prata</li>
<li><strong>Acabamento:</strong> Ultra, industrial</li>
<li><strong>Recomendação:</strong> Para banheiros de altíssimo padrão</li>

</ul>
<p>---</p>

<h2>Passo a Passo: Como Escolher o Melhor Box Para Você</h2>

<h3>Passo 1: Avalie o Tamanho do Seu Banheiro</h3>
<ul>
<li>Pequeno (até 1,5m²)? → Box corrediço ou de canto</li>
<li>Médio (1,5-3m²)? → Box sem transpasse ou com transpasse</li>
<li>Grande (acima de 3m²)? → Box com dobradiça ou até o teto</li>

</ul>
<h3>Passo 2: Considere o Histórico de Vazamento</h3>
<ul>
<li>Nunca teve vazamento? → Box sem transpasse</li>
<li>Já teve vazamento? → Box com transpasse</li>
<li>Quer máxima proteção? → Box com transpasse ou até o teto</li>

</ul>
<h3>Passo 3: Pense no Seu Orçamento</h3>
<ul>
<li>Orçamento limitado? → Box sem transpasse (prata)</li>
<li>Orçamento médio? → Box com transpasse (prata ou preto)</li>
<li>Orçamento alto? → Box até o teto (dourado ou aço inox)</li>

</ul>
<h3>Passo 4: Escolha a Cor do Alumínio</h3>
<ul>
<li>Tradicional? → Prata</li>
<li>Moderno? → Preto</li>
<li>Luxo? → Dourado</li>
<li>Ultra? → Aço inox</li>

</ul>
<h3>Passo 5: Solicite um Orçamento</h3>
<p>Aqui na GS Glass Brasil, a gente faz orçamento GRATUITO. É só entrar em contato pelo WhatsApp ou telefone que a gente te ajuda a escolher o melhor box para o seu banheiro.</p>

---

<h2>Comparação Simplificada dos 6 Tipos</h2>

<table>
<thead>
<tr>
<th>Tipo</th>
<th>Espaço</th>
<th>Preço</th>
<th>Durabilidade</th>
<th>Privacidade</th>
<th>Recomendação</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sem Transpasse</td>
<td>Médio</td>
<td>Baixo</td>
<td>15-20 anos</td>
<td>Média</td>
<td>Apartamentos pequenos</td>
</tr>
<tr>
<td>Com Transpasse</td>
<td>Médio</td>
<td>Médio</td>
<td>20-25 anos</td>
<td>Média</td>
<td>Proteção contra vazamento</td>
</tr>
<tr>
<td>De Canto</td>
<td>Pequeno</td>
<td>Baixo</td>
<td>15-20 anos</td>
<td>Média</td>
<td>Banheiros em L</td>
</tr>
<tr>
<td>Corrediço</td>
<td>Muito Pequeno</td>
<td>Médio</td>
<td>15-20 anos</td>
<td>Média</td>
<td>Espaços compactos</td>
</tr>
<tr>
<td>Com Dobradiça</td>
<td>Grande</td>
<td>Médio-Alto</td>
<td>20-25 anos</td>
<td>Alta</td>
<td>Design elegante</td>
</tr>
<tr>
<td>Até o Teto</td>
<td>Grande</td>
<td>Alto</td>
<td>20-25 anos</td>
<td>Muito Alta</td>
<td>Luxo e privacidade</td>
</tr>
</tbody>
</table>

---

<h2>Dúvidas Frequentes</h2>

<h3>P: Qual box é mais barato?</h3>
<p><strong>R:</strong> O box sem transpasse com perfil prata é o mais barato. Mas se você quer qualidade e durabilidade, o box com transpasse é melhor investimento.</p>

<h3>P: Qual box dura mais tempo?</h3>
<p><strong>R:</strong> O box com dobradiça e o box até o teto duram 20-25 anos. Os outros duram 15-20 anos.</p>

<h3>P: Qual box é mais fácil de limpar?</h3>
<p><strong>R:</strong> O box sem transpasse e o box com dobradiça são os mais fáceis de limpar.</p>

<h3>P: Qual box é melhor para apartamentos?</h3>
<p><strong>R:</strong> O box com transpasse é melhor para apartamentos porque protege o vizinho de baixo contra vazamentos.</p>

<h3>P: Qual cor de alumínio é mais bonita?</h3>
<p><strong>R:</strong> Depende do seu gosto. Preto é moderno, dourado é elegante, prata é clássico, aço inox é ultra.</p>

<h3>P: Quanto tempo leva para instalar?</h3>
<p><strong>R:</strong> Normalmente 1-2 dias. A gente tem pronta entrega para a maioria dos modelos.</p>

<h3>P: Qual é a garantia?</h3>
<p><strong>R:</strong> A gente oferece garantia de qualidade em todos os produtos. O vidro temperado é garantido contra defeitos de fabricação.</p>

---

<h2>Conclusão</h2>

<p>Escolher o melhor box para o seu banheiro é uma decisão importante. Cada tipo tem suas vantagens e desvantagens. Aqui na GS Glass Brasil, a gente trabalha com todos esses modelos e pode ajudar você a escolher o melhor para o seu caso.</p>

<p>Se você tiver dúvidas, é só entrar em contato pelo WhatsApp ou telefone. A gente faz orçamento GRATUITO e sem compromisso.</p>

<p><strong>Solicite seu orçamento agora:</strong></p>
<p>📱 WhatsApp: [SEU NÚMERO]</p>
<p>📞 Telefone: [SEU TELEFONE]</p>
<p>🌐 www.gsglassbrasil.com.br</p>

<p><strong>Transforme seu banheiro com a GS Glass Brasil!</strong> 🏠✨</p>

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
    <h2>Conclusão</h2>
    <p>Esperamos ter ajudado você a entender melhor os diferentes tipos de box de vidro disponíveis. Cada um tem suas características únicas e é importante escolher aquele que melhor se adequa ao seu banheiro.</p>
    <p>Entre em contato conosco para mais informações e orçamento gratuito:</p>
    <ul><li><strong>WhatsApp:</strong> <a href="https://wa.me/5511934275767" target="_blank">(11) 93427-5767</a></li><li><strong>Email:</strong> <a href="mailto:guilhermesalini@gsglassbrasil.com.br">guilhermesalini@gsglassbrasil.com.br</a></li></ul>
    