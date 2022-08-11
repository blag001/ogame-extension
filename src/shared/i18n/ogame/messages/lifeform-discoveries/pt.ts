import { LifeformDiscoveryEventType } from "@/shared/models/lifeform-discoveries/LifeformDiscoveryEventType";
import { LifeformDiscoveryMessages } from "./types";

export const pt: LifeformDiscoveryMessages = {
    [LifeformDiscoveryEventType.nothing]: [
        /*'No início da missão de exploração, foi */'possível decifrar algumas coordenadas promissoras'/*, obtidas através de uma mensagem misteriosa. No entanto, quando a Nave de Exploração chegou ao setor indicado pelas coordenadas, tudo o que a tripulação encontrou foi um gigantesco campo de destroços deixado para trás após uma batalha. Não foram encontrados sobreviventes.'*/,
        /*'O */'campo magnético de um asteroide interferiu'/* com os sistemas de deteção. Aquilo que aparentava ser um sinal promissor de vida inteligente extraterrestre era apenas uma interferência nos instrumentos de telemetria. Não foram encontradas novas formas de vida.'*/,
        /*'No momento exato em que a Nave de Exploração intercetou um sinal de rádio promissor, */'todos os sistemas de comunicação foram abaixo'/* sem aviso. Dadas as circunstâncias, não só foi impossível estabelecer contacto com uma forma de vida potencialmente inteligente, como também seria perigoso prosseguir com a missão. A tripulação regressou a casa desapontada, mas ilesa.'*/,
        /*'Foi descoberta uma nébula com uma qualquer forma de */'consciência numa área muito inexplorada do nosso sistema'/* ! Os nossos emissários intergalácticos mal conseguiam conter o seu entusiasmo. Chegou mesmo a montar-se um circo mediático quando foi enviada uma sonda para o interior da nuvem. Mas as tentativas de comunicação com a nébula revelaram que a sua inteligência era semelhante à de uma barata. O entusiasmo rapidamente desapareceu e foi decidido esquecer este episódio o mais rápido possível.'*/,
        /*'À procura de novas formas de vida, a Nave de Exploração seguiu alguns sinais misteriosos que pareciam ter origem no lado */'longínquo de um planeta desconhecido'/*. Os emissários intergalácticos a bordo já tinham o pacote de saudações pronto e o computador de tradução ativado, mas descobriu-se que o sinal tinha origem num destroço. A nave tem origem definitivamente extraterrestre, mas, infelizmente, não há sinais da tripulação. Não foi encontrada nenhuma forma de vida nova.'*/,
        /*'A Nave de Exploração já tinha partido há algum tempo quando foi */'descoberto um erro crítico no software de deteção'/*. Infelizmente, isto significa que não foi possível encontrar novas formas de vida.'*/,
        /*'Os nossos emissários intergalácticos visitaram um */'planeta habitado por uma espécie de insetos extremamente'/* limpos. Esperavam encontrar vida inteligente, mas ficaram desapontados com a descoberta. Após observarem esta espécie a alimentar-se dos conteúdos do compactador de lixo da nave, decidiram devolvê-la ao planeta de origem, embora alguns membros da tripulação tenham sugerido manter alguns dos seres a bordo.'*/,
        /*'Os investigadores a bordo da Nave de Exploração ficaram muito entusiasmados quando */'descobriram uma rede neural no centro de um campo'/* de asteroides. Foi uma enorme deceção quando descobriram apenas um punhado de notícias intercetadas sobre resultados desportivos de há muitos séculos atrás. Estas notícias tinham desenvolvido uma vida própria, como se fossem um tipo qualquer de comentador desportivo espacial. A tripulação regressou com os espíritos em baixo, sem ter descoberto algo mais significante do que quem se sagrou vencedor em determinadas competições.'*/,
        /*'A tripulação da Nave de Exploração ficou extremamente feliz quando os resultados dos */'testes aos esporos fúngicos sugeriram que tinha'/* sido encontrada vida inteligente. Infelizmente, foi apenas um engraçadinho que manipulou os resultados para envergonhar um investigador rival. Na verdade, os esporos não eram sequer mais inteligentes do que os escondidos atrás do micro-ondas do refeitório. O responsável por toda a confusão foi suspenso e largado no planeta mais próximo.'*/,
        /*'Alguns sinais promissores guiaram a Nave de Exploração até uma esfera */'dourada misteriosa que flutuava abandonada nos confins'/* do espaço. Apesar de todos os esforços dos emissários intergalácticos a bordo, não foi possível descobrir uma entrada ou estabelecer qualquer tipo de contacto com este estranho objeto antes de ele desaparecer subitamente.'*/,
        /*'Num planeta inexplorado, a Nave de Exploração descobriu um sistema de flores mais inteligente do que aparentava. No entanto, quando a tripulação tentou investigar, surgiram alguns */'guardas robóticos em uniformes a avisá-los de que as plantas'/* eram propriedade privada. Ignorando as possíveis dificuldades causadas por violações das leis intergalácticas sobre a invasão de propriedade, os investigadores decidiram extrair algumas amostras com uma operação clandestina durante o escuro da noite, escapando na sua nave. Infelizmente, parece que a noite era demasiado escura. A bordo da sua nave, descobriram que as amostras pelas quais arriscaram tanto eram meras plantas de ter por casa.'*/,
        /*'À procura de inteligência extraterrestre, a Nave de Exploração navegava pela galáxia há meses, sem destino e sem resultados, quando */'finalmente descobriu o equivalente alienígena a um paramécio'/*! Não cumpria propriamente os critérios de vida inteligente... Mas após tantos meses de busca aborrecida, a tripulação decidiu considerar esta descoberta de vida não inteligente como um sucesso e regressou a casa sem qualquer novidade significativa.'*/,
        /*'Os extremamente promissores sinais perseguidos pela Nave de Exploração */'foram perdidos numa neblina cósmica'/*. A busca ainda se prolongou por mais algum tempo, mas não foi encontrada nenhuma forma de vida nova.'*/,
        /*TODO: pt 'Nach intensiver Suche fand die Crew des */'Erkundungsschiffes eine lumineszente Riesenamöbenart'/*! Leider hatten die Amöben Schwierigkeiten bei der Bearbeitung des standardisierten Tests zur Identifikation außerirdischer Intelligenz. Deshalb und weil in Forscherkreisen Amöben leider immer noch verkannt werden, wurde diese Entdeckung als nicht relevant eingestuft.'*/,
        /*'Uma neblina hipnotizante atraiu toda a tripulação da Nave de Exploração. As cores e padrões estranhos pareciam interferir, de alguma forma, com o cérebro humano. Por este motivo, em vez de procurarem vida extraterrestre, a tripulação estava mais preocupada com a resposta à pergunta "Será que os */'alienígenas realmente comem cachorros-quentes verdes'/*?". Escusado será dizer que não encontraram nenhuma forma de vida nova.'*/,
        /*'Durante a sua busca por vida extraterrestre, a Nave de Exploração */'entrou num vórtice cósmico que provocou danos graves'/* ao casco externo. A tripulação e a nave foram salvas graças a uma manobra de voo arriscada, mas tiveram de abandonar a exploração e regressar a casa de mãos vazias.'*/,
        /*'A Nave de Exploração encontrou uma estação espacial antiga e abandonada, */'outrora pilotada por uma espécie desconhecida'/*. No entanto, após uma análise intensiva, tornou-se claro que a estação era apenas uma farsa complexa criada por uma forma de vida extinta. A tripulação destruiu as mensagens ridículas, mas não conseguiu descobrir algo relevante.'*/,
        /*'Num planeta solitário e selvagem, a tripulação deparou-se com uma estação de */'pesquisa liderada por uma IA de alta tecnologia'/*. Infelizmente, a porta da estação estava protegida por uma palavra-passe e a IA recusou-se a cooperar. A tripulação passou dias a tentar decifrar a palavra-passe. Os mantimentos estavam prestes a esgotar-se quando um dos membros mais discretos descobriu a combinação. Para sua tristeza, a estação foi uma deceção: a IA era pouco mais do que um elaborado sistema de gestão de casas. A tripulação decidiu regressar ao planeta de origem.'*/,
        /*'Um erro técnico no módulo de navegação conduziu a Nave de Exploração até perigosamente */'perto do horizonte de eventos de um buraco negro'/*. A tripulação conseguiu inverter a trajetória a tempo, mas com um enorme custo para os níveis de combustível. Por este motivo, a busca por novas formas de vida teve de ser interrompida e terminou sem sucesso.'*/,
        /*'Entusiasmada, a Nave de Exploração comunicou que encontrou uma */'nave idêntica de um universo paralelo'/*. Os membros da tripulação da outra dimensão até tinham exatamente os mesmos nomes. Mas as semelhanças ficaram por aí: durante a festa de boas-vindas, os convidados foram tão grosseiros que a tripulação não demorou muito a expulsá-los do nosso universo. Desapontada, mas igualmente aliviada, a tripulação regressou a casa.'*/,
        /*TODO: pt 'Die Crew des Erkundungsschiffes war erheblichen inneren Konflikten ausgesetzt, */'die schließlich zu einer Meuterei führten'/*. Die ausgesetzten Crewmitglieder konnten gefunden und geborgen werden, sie berichteten jedoch, dass die Gegenseite das Schiff übernommen und sich einer Bande von Raumpiraten angeschlossen hat. Als Konsequenz dieses Vorfalls wurden nun für alle Schiffsbesatzungen vierteljährliche Teambuilding-Seminare verordnet.'*/,
    ],
    [LifeformDiscoveryEventType.lostShip]: [
        /*'A tripulação da Nave de Exploração contactou com sucesso uma */'espécie alienígena até agora desconhecida'/*. As primeiras impressões sugeriram que se tratava de uma espécie benevolente. No entanto, os relatórios dos nossos emissários e da nossa tripulação tinham um tom cada vez mais eufórico, o que nos leva a assumir que foram alvo de uma qualquer forma de hipnose. O último relatório que recebemos era uma proclamação extremamente feliz, em nome de toda a tripulação, das suas intenções de permanecerem para sempre na companhia destes alienígenas amigáveis. A nave e a tripulação desapareceram sem deixar rasto.'*/,
        /*TODO: pt 'Bei der Suche nach intelligenten Lebensformen legte das Schiff auf einem bisher unerforschten Mond eine Zwischenlandung ein. Es stellte sich schnell heraus, warum bisher niemand über ihn berichtete. Der Crew gelang es noch, einen Hilferuf auszusenden, aber leider zu spät. Die vom Landemanöver */'aufgescheuchten riesigen Magmawürmer verschlangen das Schiff'/* und seine gesamte Besatzung innerhalb von Minuten.'*/,
        /*TODO: pt 'Das Erkundungsschiff schaffte es zwar, eine intelligente Alienspezies aufzuspüren, */'diese erwies sich jedoch als feindselig'/*. Dem letzten Funkspruch der Crew ist zu entnehmen, dass sie von den Außerirdischen als Gefangene abtransportiert wurden. Jeglicher Versuch, den weiteren Verbleib des Schiffes und seiner Besatzung aufzuklären, blieb leider erfolglos.'*/,
        /*TODO: pt 'Das Erkundungsschiff hielt auf seiner Reise auf einem unbekannten Planeten, um seine Vorräte aufzustocken. Der Planet war von einem mysteriösen Nebel eingehüllt, den */'die Crew aus erster Hand als Schlafgas identifizieren'/* konnte. Dieser stellte sich bei näherer Nachforschung als so stark heraus, dass sowohl die Crew als auch das Schiff nicht geborgen werden konnten.'*/,
        /*TODO: pt 'Die Crew dieses Erkundungsschiffes war schon immer für waghalsige Manöver bekannt und galt in der gesamten Flotte als vollkommen unerschrocken, weshalb sie für diese Mission wie die perfekte Besatzung erschien. Vermutlich waren sie deshalb der Meinung, */'dass sie das Asteroidenfeld direkt durchfliegen können'/*. Leider stellte sich dies als etwas zu tollkühn heraus und von ihrem Schiff blieben nur noch Trümmer übrig.'*/,
        /*TODO: pt 'Es scheint, als wäre das */'Erkundungsschiff in einer bis dahin unbekannten Singularität'/* verloren gegangen. Es konnten keine Lebenszeichen der Crew mehr empfangen werden.'*/,
        /*TODO: pt 'Die Erkundungsflotte */'geriet auf ihrer Mission in den Hinterhalt einer feindlichen Alienspezies'/*. Wir vermuten, dass sie intelligent ist, aber leider war sie auch höchst aggressiv und vernichtete das Erkundungsschiff, bevor ein Kontakt überhaupt zustande kommen konnte.'*/,
        /*TODO: pt 'Das Erkundungsschiff hatte vielversprechende Signale aufgefangen. Nachdem sie begeistert den energetischen Spuren folgten, */'brach plötzlich die Verbindung ab und konnte nicht wieder hergestellt'/* werden. Ausgeschickte Suchtrupps fanden keinerlei Hinweise auf den Verbleib des Schiffes. Es ist wohl in den Weiten des Alls verloren gegangen.'*/,
        /*TODO: pt 'Bei der Verfolgung starker kosmischer Signale war der Navigator offenbar so abgelenkt, dass er das in der */'Nähe befindliche schwarze Loch vollkommen aus den Augen'/* verlor. Das Schiff geriet in das Gravitationsfeld und alle Anstrengungen der Crew konnten nicht verhindern, dass es hineingesogen wurde. Um einen weiteren Verlust dieser Art zu vermeiden, wurde vorgeschlagen, automatische Warnsignale vor schwarzen Löchern als Standard zu integrieren.'*/
    ],
    [LifeformDiscoveryEventType.newLifeformFound]: /nas coordenadas .+ e adicionada ao menu Formas de Vida/i,
    [LifeformDiscoveryEventType.knownLifeformFound]: /emissários conseguiram aumentar o nosso nível de conhecimento sobre esta forma de vida em (?<xp>\d+) EXP/i,
};