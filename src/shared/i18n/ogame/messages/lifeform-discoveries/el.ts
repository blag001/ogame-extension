import { LifeformDiscoveryEventArtifactFindingSize } from "@/shared/models/lifeform-discoveries/LifeformDiscoveryEventArtifactFindingSize";
import { LifeformDiscoveryEventType } from "@/shared/models/lifeform-discoveries/LifeformDiscoveryEventType";
import { LifeformDiscoveryMessages } from "./types";

export const el: LifeformDiscoveryMessages = {
    [LifeformDiscoveryEventType.nothing]: [
        /*TODO: el 'Zu Beginn der Erkundung konnten einige */'vielversprechende Koordinaten aus einer geheimnisvollen Nachricht'/* entschlüsselt werden. Als das Erkundungsschiff jedoch den angegebenen Sektor erreichte, fand die Crew nur noch das riesige Trümmerfeld eines bewaffneten Konflikts vor. Die Suche nach Überlebenden blieb erfolglos.'*/,
        /*'Ένα μαγνητικό πεδίο ενός */'αστεροειδούς δημιουργούσε παρεμβολές στο σκάνερ'/* . Κάτι που φαινόταν σαν πολλά υποσχόμενο σήμα από έξυπνη εξωγήινη ζωή, ήταν απλά μια παρεμβολή των οργάνων μέτρησης και δυστυχώς δεν βρέθηκε νέα μορφή ζωής.'*/,
        /*'Μόλις ένα */'Ανιχνευτικό σκάφος κατάφερε να συλλέξει μια πολλά υποσχόμενη ραδιοεπικοινωνία'/* , κατέρρευσαν όλα τα συστήματα επικοινωνίας. Υπό αυτές τις συνθήκες ήταν αδύνατη οποιαδήποτε επικοινωνία με πιθανές ευφυείς Μορφές ζωής και η συνέχεια της αποστολής θα ήταν επικίνδυνη. Γι` αυτό, το πλήρωμα επέστρεψε απογοητευμένο, αλλά άθικτο.'*/,
        /*TODO: el 'In einem noch größtenteils unerforschten Planetensystem */'wurde ein kosmischer Nebel mit Bewusstsein entdeckt'/* ! Die intergalaktischen Botschafter gerieten in helle Aufregung, weshalb unter großer medialer Aufmerksamkeit eine Sonde entsandt wurde. Beim Kommunikationsversuch mit dem Nebel stellte sich aber schnell heraus, dass seine Intelligenz kaum über der von einfachen Insekten lag. Die Aufregung schwand und es wurde beschlossen, einen Mantel des Schweigens über die ganze Aktion zu breiten.'*/,
        /*TODO: el 'Bei der Suche nach neuen Lebensformen folgte das Erkundungsschiff einigen mysteriösen Signalen, die */'von der Rückseite eines unbekannten Planeten zu stammen'/* schienen. Die intergalaktischen Botschafter an Bord hatten schon das Begrüßungspaket geholt und den Übersetzungscomputer aktiviert, doch es stellte sich heraus, dass das Signal von einem Schiffswrack stammt. Das Schiff ist eindeutig außerirdischer Herkunft, aber von den Piloten fehlt leider jede Spur. So konnte keine neue Lebensform entdeckt werden.'*/,
        /*'Το Ανιχνευτικό σκάφος κυκλοφορούσε για ένα διάστημα, ώσπου να */'διαπιστωθεί πως υπήρχε ένα μοιραίο σφάλμα στο λογισμικό του σκάνερ'/* . Έτσι δεν ανακαλύφθηκε νέα μορφή ζωής.'*/,
        /*'Δυστυχώς η εντομοειδής εξωγήινη φυλή, την οποία οι */'διαγαλακτικοί πρέσβεις μας αρχικά θεώρησαν ευφυή λόγω της ιδιαίτερης καθαρότητας'/* του πλανήτη της, τελικά αποδείχτηκε απλοϊκή. Αφού έφαγαν τα περιεχόμενα του συμπιεστή σκουπιδιών του σκάφους, απελευθερώθηκαν και πάλι στον πλανήτη τους, παρόλο που το πλήρωμα είχε ψηφίσει να κρατήσει μερικά από τα πλάσματα.'*/,
        /*'Οι ερευνητές του Ανιχνευτικού σκάφους ανακάλυψαν */'ενθουσιασμένοι ένα νευρωνικό δίκτυο στη μέση ενός πεδίου αστεροειδών'/* . Η απογοήτευση ήταν μεγάλη όταν αποδείχτηκε πως επρόκειτο μόνο για ένα σύμπλεγμα παγιδευμένων μηνυμάτων με αποτελέσματα αθλημάτων από αιώνες πριν, που είχαν μια δική τους ζωή ως πηγαδάκι από καφενείο. Το πλήρωμα επέστρεψε απογοητευμένο και χωρίς ιδιαίτερα αποστελέσματα.'*/,
        /*'Το πλήρωμα του Ανιχνευτικού σκάφους */'ενθουσιάστηκε όταν οι εξετάσεις σπόρων μυκήτων έδειξαν δείγματα ευφυούς ζωής'/* . Δυστυχώς αποδείχτηκε πως κάποιος πλακατζής είχε νοθεύσει τα αποτελέσματα για να εκθέσει έναν αντίπαλο ερευνητή. Οι σπόροι που εξετάστηκαν ήταν στην πραγματικότητα το ίδιο ευφυείς όπως ο μέσος μύκητας στην κουζίνα του σκάφους. Ο ταραχοποιός αποβιβάστηκε στον επόμενο πλανήτη με άδεια άνευ αποδοχών και το σκάφος επέστρεψε άπρακτο.'*/,
        /*TODO: el 'Vielversprechende Signale führten das */'Erkundungsschiff zu einer mysteriösen goldenen Sphäre'/*, die einsam in den Tiefen des Weltalls schwebte. Trotz aller Bemühungen der intergalaktischen Botschafter an Bord konnte weder ein Eingang gefunden noch irgendwie Kontakt zu dem merkwürdigen Objekt hergestellt werden, bevor es sich mit einem Sprung davonmachte.'*/,
        /*'Το Ανιχνευτικό σκάφος ανακάλυψε ένα φυτικό σύστημα σε έναν άγνωστο πλανήτη, το οποίο φάνηκε πολύ ευφυέστερο απ` ό,τι συνήθως. Όταν το πλήρωμα θέλησε να το εξετάσει, το σταμάτησαν μυστηριώδη ρομπότ ασφαλείας με στολές, */'τα οποία δήλωσαν πως το φυτικό σύστημα είναι ιδιόκτητο'/* . Οι ερευνητές δεν εγκατέλειψαν την προσπάθεια, παρόλες τις απειλές για διαγαλακτικές δικαστικές διαδικασίες, και σε μια κρυφή προσπάθεια στο σκοτάδι και την ομίχλη συνέλεξαν δείγματα κι έφυγαν γρήγορα. Προφανώς το σκοτάδι ήταν βαρύ και η ομίχλη ήταν πυκνή, κι έτσι στο σκάφος τα δείγματα αποδείχτηκαν να προέρχονται από συνηθισμένα φυτά εσωτερικού χώρου.'*/,
        /*'Ψάχνοντας ευφυή εξωγήινη ζωή, το Ανιχνευτικό σκάφος κυκλοφορούσε στο γαλαξία εδώ και μήνες, όταν τελικά ανακάλυψε */'έναν μακρινό εξωγήινο συγγενή του Παραμηκίου'/* ! Αυτή η μορφή ζωής μπορεί να μην είναι ευφυής, αλλά εξαιτίας του μακρινού ταξιδιού και της εξάντλησης, το πλήρωμα αποφάσισε να βολευτεί και με μη ευφυείς μορφές ζωής και να επιστρέψει χωρίς ιδιαίτερα ευρήματα.'*/,
        /*'Τα πολλά υποσχόμενα σήματα, τα οποία */'ακολουθούσε το σκάφος, χάθηκαν δυστυχώς σε μια κοσμική ομίχλη'/* . Η αναζήτηση συνεχίστηκε για ένα διάστημα, όμως δεν ανακαλύφθηκε νέα μορφή ζωής.'*/,
        /*'Μετά από εξαντλητική αναζήτηση, το πλήρωμα του Ανιχνευτικού */'σκάφους ανακάλυψε ένα είδος φωσφορίζουσας τεράστιας αμοιβάδας'/* ! Δυστυχώς οι αμοιβάδες δυσκολεύονταν με την επεξεργασία των στάνταρ εξετάσεων για την ταυτοποίηση εξωγήινης ζωής. Εξαιτίας αυτού και του γεγονότος, πως οι αμοιβάδες ακόμη υποτιμούνται στους ερευνητικούς κύκλους, αυτή η ανακάλυψη θεωρήθηκε μη σημαντική.'*/,
        /*'Μια υπνωτική ομίχλη επηρέασε ολόκληρο το πλήρωμα του Ανιχνευτικού σκάφους. Τα περίεργα χρώματα και σχέδια επηρέαζαν με περίεργο τρόπο τον ανθρώπινο εγκέφαλο, ώστε το πλήρωμα σταμάτησε να ψάχνει για εξωγήινη ζωή και ξεκίνησε να ερευνά το ερώτημα: «*/'Οι εξωγήινοι τρώνε πράσινα χοτ ντογκ'/* ;» Περιττό να αναφέρουμε πως δεν βρήκαν νέα μορφή ζωής.'*/,
        /*TODO: el 'Bei der Suche nach außerirdischem Leben */'geriet das Erkundungsschiff in einen kosmischen Vortex'/*, der die Außenhülle schwer beschädigte. Durch ein riskantes Flugmanöver konnten Crew und Schiff gerettet werden, mussten jedoch die Erkundung aufgeben und ohne Ergebnisse zurückkehren.'*/,
        /*'Το Ανιχνευτικό σκάφος βρήκε έναν παλιό, */'εγκαταλειμμένο διαστημικό σταθμό, ο οποίος κατοικούνταν από άγνωστες μορφές ζωής'/* . Μετά από εκτενή έρευνα, αποκαλύφθηκε πως πρόκειται για έξυπνη φάρσα μιας εξαφανισμένης μορφής ζωής. Το πλήρωμα κατέστρεψε τα χαιρέκακα μηνύματα, αλλά δεν ανακάλυψε τίποτα άλλο.'*/,
        /*TODO: el 'Auf einem wilden Planeten */'entdeckte die Crew eine hochmoderne Forschungsstation'/*, die von einer künstlichen Intelligenz gesteuert und bewacht wurde. Die Tür zur Station war allerdings durch ein Passwort geschützt und die KI verweigerte die Kommunikation. Nachdem nach tagelangen Ratespielen die Vorräte knapp wurden, gelang es einem bisher eher unscheinbaren Mitglied der Crew, das Passworträtsel zu entschlüsseln. Im Inneren der Anlage stellte sich aber leider heraus, dass die KI nur ein elaboriertes Home-Management-System war und die Crew machte sich enttäuscht auf den Heimweg.'*/,
        /*'Ένα Ανιχνευτικό σκάφος έφτασε απειλητικά κοντά στον */'ορίζοντα γεγονότων μιας μαύρης τρύπας λόγω ενός τεχνικού σφάλματος'/* . Το πλήρωμα μόλις που κατάφερε να γυρίσει το σκάφος, όμως χρησιμοποίησε τα τελευταία αποθέματα καυσίμων σε αυτήν τη μανούβρα κι έτσι η αναζήτηση για νέες μορφές ζωής έληξε.'*/,
        /*'Το Ανιχνευτικό σκάφος ανέφερε με ενθουσιασμό, πως το πλήρωμα βρήκε ένα */'ακριβώς ίδιο Ανιχνευτικό σκάφος από ένα σύμπαν-καθρέφτη'/* . Το πλήρωμα από την άλλη διάσταση είχε μάλιστα τα ίδια ονόματα. Αυτές ήταν όμως οι μοναδικές ομοιότητες, επειδή οι επισκέπτες από τον άλλο κόσμο ήταν τόσο άξεστοι στο αυθόρμητο πάρτι καλωσορίσματος, που διώχθηκαν από το σύμπαν. Απογοητευμένο, αλλά και ανακουφισμένο, το πλήρωμα του Ανιχνευτικού σκάφους μας επέστρεψε.'*/,
    ],
    [LifeformDiscoveryEventType.lostShip]: [
        /*TODO: el 'Die Crew des Erkundungsschiffes war erheblichen inneren Konflikten ausgesetzt, */'die schließlich zu einer Meuterei führten'/*. Die ausgesetzten Crewmitglieder konnten gefunden und geborgen werden, sie berichteten jedoch, dass die Gegenseite das Schiff übernommen und sich einer Bande von Raumpiraten angeschlossen hat. Als Konsequenz dieses Vorfalls wurden nun für alle Schiffsbesatzungen vierteljährliche Teambuilding-Seminare verordnet.'*/,
        /*TODO: el 'Die Crew des Erkundungsschiffs schaffte es, */'Kontakt zu einer bisher unbekannten außerirdischen Spezies'/* aufzunehmen, die sich auf den ersten Blick als freundlich herauszustellen schien. Die Nachrichten unserer Botschafter und der Crew wurden jedoch schnell unmäßig euphorisch, weshalb wir davon ausgehen müssen, dass sie unter einen hypnotischen Einfluss geraten waren. Ihr letztes Lebenszeichen war die freudige Ankündigung der gesamten Crew, dass sie dauerhaft bei den freundlichen Aliens bleiben würden. Schiff und Besatzung sind seitdem verschollen.'*/,
        /*'Ψάχνοντας ευφυείς Μορφές ζωής, το σκάφος στάθμευσε σε ένα ως τώρα ανεξερεύνητο φεγγάρι. Γρήγορα φάνηκε ο λόγος που δεν το είχε αναφέρει κανείς ως τώρα. Το πλήρωμα κατάφερε να στείλει σήμα κινδύνου, αλλά δυστυχώς ήταν αργά. Τα */'τεράστια Σκουλήκια Μάγματος που τρόμαξαν από την προσγείωση'/* , κατάπιαν το σκάφος και ολόκληρο ο πλήρωμα μέσα σε λίγα λεπτά.'*/,
        /*TODO: el 'Das Erkundungsschiff schaffte es zwar, eine intelligente Alienspezies aufzuspüren, */'diese erwies sich jedoch als feindselig'/*. Dem letzten Funkspruch der Crew ist zu entnehmen, dass sie von den Außerirdischen als Gefangene abtransportiert wurden. Jeglicher Versuch, den weiteren Verbleib des Schiffes und seiner Besatzung aufzuklären, blieb leider erfolglos.'*/,
        /*TODO: el 'Das Erkundungsschiff hielt auf seiner Reise auf einem unbekannten Planeten, um seine Vorräte aufzustocken. Der Planet war von einem mysteriösen Nebel eingehüllt, den */'die Crew aus erster Hand als Schlafgas identifizieren'/* konnte. Dieser stellte sich bei näherer Nachforschung als so stark heraus, dass sowohl die Crew als auch das Schiff nicht geborgen werden konnten.'*/,
        /*TODO: el 'Die Crew dieses Erkundungsschiffes war schon immer für waghalsige Manöver bekannt und galt in der gesamten Flotte als vollkommen unerschrocken, weshalb sie für diese Mission wie die perfekte Besatzung erschien. Vermutlich waren sie deshalb der Meinung, */'dass sie das Asteroidenfeld direkt durchfliegen können'/*. Leider stellte sich dies als etwas zu tollkühn heraus und von ihrem Schiff blieben nur noch Trümmer übrig.'*/,
        /*TODO: el 'Es scheint, als wäre das */'Erkundungsschiff in einer bis dahin unbekannten Singularität'/* verloren gegangen. Es konnten keine Lebenszeichen der Crew mehr empfangen werden.'*/,
        /*TODO: el 'Die Erkundungsflotte */'geriet auf ihrer Mission in den Hinterhalt einer feindlichen Alienspezies'/*. Wir vermuten, dass sie intelligent ist, aber leider war sie auch höchst aggressiv und vernichtete das Erkundungsschiff, bevor ein Kontakt überhaupt zustande kommen konnte.'*/,
        /*TODO: el 'Das Erkundungsschiff hatte vielversprechende Signale aufgefangen. Nachdem sie begeistert den energetischen Spuren folgten, */'brach plötzlich die Verbindung ab und konnte nicht wieder hergestellt'/* werden. Ausgeschickte Suchtrupps fanden keinerlei Hinweise auf den Verbleib des Schiffes. Es ist wohl in den Weiten des Alls verloren gegangen.'*/,
        /*TODO: el 'Bei der Verfolgung starker kosmischer Signale war der Navigator offenbar so abgelenkt, dass er das in der */'Nähe befindliche schwarze Loch vollkommen aus den Augen'/* verlor. Das Schiff geriet in das Gravitationsfeld und alle Anstrengungen der Crew konnten nicht verhindern, dass es hineingesogen wurde. Um einen weiteren Verlust dieser Art zu vermeiden, wurde vorgeschlagen, automatische Warnsignale vor schwarzen Löchern als Standard zu integrieren.'*/
    ],
    [LifeformDiscoveryEventType.newLifeformFound]: /στις συντεταγμένες .+ και προστέθηκε στην Διαχείριση μορφών ζωής/i,
    [LifeformDiscoveryEventType.knownLifeformFound]: /Κι όμως, οι πρέσβεις μας μπόρεσαν να επεκτείνουν τις γνώσεις τους σχετικά με τη φυλή κατά (?<xp>\d+) Εμπειρία/i,
    [LifeformDiscoveryEventType.artifacts]: {
        size: {
            [LifeformDiscoveryEventArtifactFindingSize.storageFull]: /*TODO: el 'Das Erkundungsschiff hat zwar ein paar Artefakte gefunden, */'konnte sie aber nicht mitnehmen, da deine Lager voll sind',
            [LifeformDiscoveryEventArtifactFindingSize.small]: /*'Το σκάφος εξερεύνησης */'βρήκε μερικά κειμήλια',
            [LifeformDiscoveryEventArtifactFindingSize.medium]: /*'Το σκάφος εξερεύνησης */'βρήκε έναν μεγάλο αριθμό κειμηλίων',
            [LifeformDiscoveryEventArtifactFindingSize.large]: /*'Το σκάφος εξερεύνησης */'μια τεράστια συλλογή κειμηλίων',
        },
        numberOfArtifacts: /Κειμήλια που βρήκες: (?<artifacts>\d+)/i,
    },
};