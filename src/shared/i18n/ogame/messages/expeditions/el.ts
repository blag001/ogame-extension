import { ExpeditionDepletionLevel } from "@/shared/models/expeditions/ExpeditionDepletionLevel";
import { ExpeditionEventSize } from "../../../../models/expeditions/ExpeditionEventSize";
import { ExpeditionEventType } from "../../../../models/expeditions/ExpeditionEventType";
import { ExpeditionMessages } from "./types";

export const el: ExpeditionMessages = {
    [ExpeditionEventType.darkMatter]: {
        [ExpeditionEventSize.small]: [
            /*'Η αποστολή */'εξερεύνησης δεν μπόρεσε να εντοπίσει αντιύλη',
            /*'Εντοπίστηκαν τα */'απομεινάρια ενός εξωγήινου σκάφους'/* . Στο κύτος του βρέθηκε ένα κιβώτιο με μικρή ποσότητα αντιύλης!'*/,
            /*'Συναντήσαμε εν παράξενο ον, */'που μας πρόσφερε ένα κιβώτιο με αντιύλη ως αντάλαγμα'/* , για μερικούς απλούς μαθηματικούς υπολογισμούς'*/,
            /*'Η αποστολή */'εξερεύνησης κατέλαβε ένα σκάφος-φάντασμα'/* . Δε στάθηκε δυνατό μάθουμε τι απέγινε το πλήρωμα αλλά οι τεχνικοί μπορέσαν και συγκέντρωσαν την αντιύλη που μετέφερε.'*/,
            /*'Η εξερευνητική αποστολή ακολούθησε κάποιες */'παράξενες ενδείξεις που προέρχοταν από ένα αστεροϊδή'/* . Στο πυρήνα του, εντοπίστηκε αντιύλη. Η ερευνητές πήραν τον αστεροϊδή για να προσπαθήσουν να εξορύξουν την αντιύλη.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*TODO: el 'Unserer Expedition ist */'ein einmaliges Experiment gelungen'/*:'*/,
            /*'Η αποστολή εξερεύνησης, */'εντόπισε ένα εγκαταλειμένο διαστημικό σταθμό'/* , ο οποίος περιφερόταν ανεξέλεγκτα στο διάστημα για αρκετό καιρό. Ο ίδιος ο σταθμός δεν είναι χρήσιμος, ωστώσο εντοπίστηκε ποσότητα αντιύλης στους αντιδραστίρες. Οι τεχνικοί προσπαθούν να περισυλλέξουν όσο το δυνατόν περισσότερη ποσότητα.'*/,
            /*TODO: el 'Unsere Expedition meldet ein seltsames spektrales Phänomen. Dies führte unter anderem dazu, dass sich in den */'Energiespeichern der Schiffsschilde Dunkle Materie'/* bildete. Unsere Techniker versuchen nun, solange das Phänomen noch anhält, möglichst viel dieser Dunklen Materie zu konservieren.'*/,
        ],
        [ExpeditionEventSize.large]: [
            /*TODO: el 'Eine */'spontane Hyperraumverzerrung'/* hat es deiner Expedition ermöglicht, eine große Menge dunkler Materie sicherzustellen!'*/,
            /*TODO: el 'Unsere Expedition meldet einen ersten Kontakt der besonderen Art. Anscheinend hat */'eine Energiekreatur, die sich Legorianer nannte'/*, die Schiffe der Expedition durchflogen und dann beschlossen, der unterentwickelten Spezies ein wenig auszuhelfen - es materialisierte sich ein Behälter mit dunkler Materie an Bord der Brücke!'*/,
        ],
        regex: (darkMatter: string) => new RegExp(`(?<name>${darkMatter}) (?<amount>[^\\s]+) αποκτήθηκαν`, 'i'),
    },

    [ExpeditionEventType.resources]: {
        [ExpeditionEventSize.small]: [
            /*'Η αποστολή */'εξερεύνησης εντόπισε ένα μικρό αστεροϊδή'/* , από τον οποίο μπορούν να εξορυχθούν κάποιοι πόροι.'*/,
            /*'Σε ένα απομονωμένο */'αστεροϊδή ανακαλύψαμε κάποιους εύκολα προσβάσιμα πεδία'/* πόρων και εξορύξαμε με επιτυχία μερικούς.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*'Η αποστολή εξερεύνησης */'εντόπισε ένα αρχαίο κομβόι μεταγωγικών με γεμάτα αμπάρια'/* . Μερικοί από τους πόρους μπορούν να χρησιμοποιηθούν.'*/,
            /*'Σε ένα */'μικρό φεγγάρι με δική του ατμόσφαιρα'/* , η αποστολή εντόπισε τεράστιες ποσότητες ακατέργαστων πόρων. Το πλήρωμα βρίσκεται στο έδαφος και προσπαθεί να φορτώσει αυτό το φυσικό θυσαυρό.'*/,
        ],
        [ExpeditionEventSize.large]: [
            /*TODO: el 'Ein */'Mineraliengürtel um einen unbekannten Planeten'/* enthielt Unmengen an Rohstoffen. Die Expeditionsflotte meldet volle Lager!'*/,
            /*TODO: el 'Deine Expeditionsflotte meldet den */'Fund eines riesigen Alien-Schiffswracks'/*. Mit der Technologie konnten sie zwar nichts anfangen, aber das Schiff ließ sich in seine Einzelteile zerlegen, wodurch man wertvolle Rohstoffe gewinnen konnte.'*/,
        ],
        regex: (resources: string[]) => new RegExp(`(?<name>${resources.join('|')}) (?<amount>.+) αποκτήθηκαν`, 'i'),
    },

    [ExpeditionEventType.fleet]: {
        [ExpeditionEventSize.small]: [
            /*'Διερχόμαστε */'διαμέσου των απομειναριών κάποιας προηγούμενης αποστολής'/* . Οι τεχνικοί μας θα προσπαθήσουν να θέσουν κάποια σκάφη σε πάλι λειτουργία.'*/,
            /*'Η αποστολή */'εξερεύνησης εντόπισε ένα εγκαταλελειμένο πύύργιο'/* , κάποιας παλιάς δι & γτητας. Στο υπόστεγο βρέθηκαν μερικά σκάφη. Οι τεχνικοί προσπαθούν να θέσουν τα πιο καλοδιατηρημένα σε λειτουργία.'*/,
            /*'Η αποστολή εξερεύνησης εντόπισε ένα πλανήτη, */'ο οποίος είναι σχεδόν καταστραμένος'/* , προφανώς από κάποιες πολεμικές συγκρούσεις. Υπάρχουν αρκετά σκάφη που περιφέρονται σε τροχιά. Οι τεχνικοί προσπαθούν να επισκευάσουν μερικά από αυτά. .'*/,
            /*'Εντοπίσαμε */'μια εγκαταλελειμένη βάση πειρατών'/* . Μερικά σκάφη βρίσκονται στα υπόστεγα. Οι τεχνικοί μας κάνουν τους απαραίτητους ελέγχους για να δουν αν μερικά από αυτά μπορούν να μας φανούν χρήσιμα ή όχι.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*TODO: el 'Unsere Expedition stieß auf eine */'alte automatische Schiffswerft'/*. Einige Schiffe sind noch in der Produktionsphase und unsere Techniker versuchen, die Energieversorgung der Werft wiederherzustellen.'*/,
            /*'Εντοπίσαμε */'τα απομεινάρια μιας αρμάδας'/* . οι τεχνικοί πήγαν κατευθείαν στα πιο ανέπαφα σκάφη προσπαθώντας να τα θέσουν ξανά σε λειτουργία.'*/,
        ],
        [ExpeditionEventSize.large]: [
            /*TODO: el 'Wir haben einen */'riesigen Raumschiffsfriedhof'/* gefunden. Einigen Technikern der Expeditionsflotte ist es gelungen, das ein oder andere Schiff wieder in Betrieb zu nehmen.'*/,
            /*TODO: el 'Wir haben einen Planeten mit */'Resten einer Zivilisation'/* entdeckt.'*/,
        ],
        regex: (ships: string[]) => new RegExp(`Τα ακόλουθα σκάφη, αποτελούν πλέον μέρος του στόλου:\\s*(?<ships>((${ships.join('|')}):\\s*\\d+\\s*)+)?`, 'i'),
    },

    [ExpeditionEventType.nothing]: [
        /*'Δυστυχώς, παρά τις πολλά */'υποσχόμενες αρχικές ενδείξεις στο τομέα'/*, επιστρέψαμε πίσω με άδεια χέρια...'*/,
        /*'Εκτός από μερικά περίεργα, */'μικρά ζώα από έναν άγνωστο ελώδη πλανήτη'/* , αυτή η αποστολή δεν φέρνει τίποτα συγκλονιστικό επιστρέφοντας από το ταξίδι.'*/,
        /*'Η αποστολή έμαθε */'για το αχανές κενό του διαστήματος'/* . Δεν υπήρχε ούτε καν ένας μικρός αστεροειδής ή ακτινοβολία ή σωματίδιο που θα έκανε αυτή την αποστολή ενδιαφέρουσα.'*/,
        /*'Μια οντότητα, */'αποτελούμενη από καθαρή ενέργεια'/* , φρόντισε ώστε τα πληρώματα της αποστολής να αποροφηθούν κοιτάζοντας σαν υπνωτισμένοι τα σχέδια που δημιουργούσε στις οθόνες. Όταν οι περισσότεροι συνήλθαν, έπρεπε να ματαιώσουν την αποστολή καθώς είχε απομείνει ελάχιστο Δευτέριο.'*/,
        /*'Μια αποτυχία στον */'αντιδραστήρα του ηγούμενου σκάφους της αποστολής'/* , παραλίγο να καταστρέψει όλο το στόλο. Ευτυχώς οι μηχανικοί ήταν κάτι παραπάνω από ικανοί και μπόρεσαν να αποφύγουν τα χειρότερα. Οι επισκευές απαίτησαν αρκετό χρόνο και υποχρέωσαν την αποστολή να επιστρέψει χωρίς να έχει επιτύχει τίποτα.'*/,
        /*'Η αποστολή έβγαλε μερικές */'φαντασμαγορικές φωτογραφίες από ένα σούπερ Νόβα'/* . Τίποτα άλλο δεν επιτεύχθηκε σε αυτή την αποστολή, αλλά τουλάχιστον υπάρχουν πιθανότητες να κερδίσουμε στο φετινό διαγωνισμό "Καλύτερη φωτογραφία του Σύμπαντος"'*/,
        /*'Η αποστολή σας ακολούθησε περίεργα σήματα για κάποιο διάστημα. Στο τέλος */'διαπίστωσαν ότι τα σήματα εκπέμπονταν από ένα παλιό κατασκοπευτικό'/* που είχε αποσταλεί γενεές πριν να συναντήσει ξένα είδη. Το κατασκοπευτικό διασώθηκε και κάποια μουσεία από τον κεντρικό σας πλανήτη, έχουν ήδη εκφράσει το ενδιαφέρον τους.'*/,
        /*'Τώρα λοιπόν γνωρίζουμε, πως αυτές οι */'αστρικές διαταραχές επιπέδου 5'/* , εκτός από τα χαοτικά αποτελέσματα που έχουν στα συστήματα πλοήγησης των σκαφών, δημιουργούν και φαινόμαινα μαζικών παραισθήσεων στο πλήρωμα. Η αποστολή επέστρεψε χωρίς να φέρει τίποτα πίσω.'*/,
        /*'Η αποστολή σας, παραλίγο να */'εγκλωβιστεί στο πεδίο βαρύτητας ενός ουδέτερου πλανήτη και χρειάστηκε'/* αρκετός χρόνος για να διαφύγει. Εξαιτίας του γεγονότος αυτού, καταναλώθηκε μεγάλη ποσότητα Δευτερίου και ο στόλος υποχρεώθηκε να επιστρέψει άπρακτος.'*/,
        /*'Το σύστημα ναυσιπλοϊας, */'προσβλήθηκε από κάποιο παράξενο ιό λίγο μετά την αποχώρηση'/* από το οικείο ηλιακό σύστημα και υποχρέωσε το σχηματισμό σε κυκλική τροχιά. Είναι περιττό να αναφερθεί οτι η αποστολή απέτυχε.'*/,
        /*'Τα γενέθλια του */'καπετάνιου μάλλον δεν έπρεπε να γίνουν σε αυτόν τον απομονωμένο'/* πλανήτη. Ένας τρομερός πυρετός άγνωστης αιτιολογίας, έστειλε το περισσότερο πλήρωμα της αποστολής στο δωμάτιο πρώτων βοηθειών για το υπόλοιπο της αποστολής. Η επιχείρηση κατέρρευσε λόγω έλλειψης προσωπικού.'*/,
        /*'Κάποιος εγκατέστησε ένα */'παλιό παιχνίδι στρατηγικής στους υπολογιστές όλων των'/* σκαφών. Εξ`αιτίας αυτού, αν και η αποστολή έλειπε καιρό, δεν ήταν παραγωγική.'*/,
    ],

    [ExpeditionEventType.lostFleet]: [
        /*TODO: el 'Das Letzte, was von dieser Expedition noch gesendet wurde, waren einige unglaublich gut gelungene */'Nahaufnahmen eines sich öffnenden schwarzen Lochs'/*.'*/,
        /*'Το μόνο που απέμεινε από την αποστολή εξερεύνησης, */'είναι αυτή η τελευταία επικοινωνία'/* : zzzzzz....αυτό....zzzzzz....τρομερό....zzzzzz....δεν....zzzzzz....βοήθ....zzzzzzzzzzzzzzzzz... Τέλος μετάδοσης'*/,
        /*'Ένα πρόβλημα στο σύστημα ψύξης του αντιδραστήρα, στο προπορευόμενο σκάφος, είχε σαν αποτέλεσμα μια αλυσιδωτή αντίδραση που με μιά */'θεαματική πυρηνική έκρηξη κατάστρεψε όλο το στόλο'/* που ακολουθούσε.'*/,
        /*'Ο στόλος */'εξερεύνησης δεν επέστρεψε ποτέ...'/* Οι επιστήμονες προσπαθούν να ανακαλύψουν τι συνέβη, αλλά φαίνεται ότι ο στόλος χάθηκε για πάντα...'*/,
    ],

    [ExpeditionEventType.trader]: [
        /*'Ο στόλος της */'αποστολής σας ήρθε σε επαφή με μια ντροπαλή εξωγήινη'/* φυλή. Ανακοίνωσαν ότι θα στείλουν στους κόσμους σας, αντιπρόσωπους με αγαθά προς ανταλλαγή.'*/,
        /*'Η */'αποστολή σας έλαβε σήμα κινδύνου'/* . Ένα μεγάλο μεταγωγικό πιάστηκε στο ισχυρό βαρυτικό πεδίο ενός πλανητοειδούς. Μετά την επιτυχή διάσωση του μεταγωγικού, ο πλοίαρχος ανακοίνωσε χαρούμενα ότι το άτομο που τον έσωσε γίνεται ο αγαπημένος και αποκλειστικός του πελάτης.'*/,
    ],

    [ExpeditionEventType.early]: [
        /*'Μια απρόσμενη */'ανάστροφη σύζευξη στα ενεργειακά στροφεία επίσπευσε την επιστροφή'/* της αποστολής, επιστρέφει νωρίτερα από το αναμενόμενο. Οι πρώτες αναφορές ενημερώνουν ότι δεν υπάρχει κάτι αξιόλογο να αναφέρουν.'*/,
        /*'Η αποστολή σας δεν αναφέρει ανωμαλίες στον υπό αναγνώριση τομέα. Αλλά */'ο στόλος βρέθηκε σε ηλιακή θύελλα ενώ επέστρεφε'/* . Για αυτό το λόγο το ταξίδι της επιστροφής συντόμευσε κατά πολύ. Η αποστολή σας θα γυρίσει νωρίτερα.'*/,
        /*'Ο νέος και τολμηρός διοικητής, */'ταξίδευσε με επιτυχία μέσω μιας ασταθούς σκουληκότρυπας'/* για να συντομεύσει την επιστροφή! Παρ’όλα αυτά η αποστολή δεν έφερε κάτι καινούριο.'*/,
    ],

    [ExpeditionEventType.delay]: [
        /*'Ο κυβερνήτης της αποστολής δε κοιμήθηκε καλά το βράδι, */'με αποτέλεσμα κάνει λάθος υπολογισμούς'/* για το πέρασμα από τη Διαγαλαξιακή Πύλη. Όχι μόνο μετέβη ο στόλος σε τελείως διαφορετικό σημείο από το προκαθορισμένο, αλλά θα χρειαστεί και πολύ περισσότερο χρόνο για να επιστρέψει.'*/,
        /*'Η αποστολή σας */'βρέθηκε σε τομέα σωματιδιακών καταιγίδων'/* . Με αποτέλεσμα να υπερφορτωθούν οι αποθήκες ενέργειας και να καταστραφούν τα περισσότερα κύρια συστήματα των σκαφών. Οι μηχανικοί σας απόφυγαν τα χειρότερα αλλά η αποστολή θα επιστρέψει με μεγάλη καθυστέρηση'*/,
        /*'Για άγνωστη αιτία, το άλμα της αποστολής πήγε στραβά. Σχεδόν */'προσγειώθηκε στην καρδιά ενός ήλιου'/* . Ευτυχώς προσγειώθηκε σε γνωστό σύστημα, αλλά το άλμα επιστροφής θα καθυστερήσει περισσότερο από το αναμενόμενο.'*/,
        /*'Ο */'αστρικός άνεμος ενός κόκκινου γίγαντα κατάστρεψε'/* το άλμα της αποστολής, θα πάρει αρκετή ώρα να υπολογιστεί το άλμα επιστροφής. Μεταξύ των άστρων του τομέα, δεν υπήρχε παρά το κενό. Ο στόλος θα επιστρέψει αργότερα από το αναμενόμενο.'*/,
        /*'Το */'νέο σύστημα ναυσιπλοΐας αντιμετωπίζει προβλήματα'/* . Το άλμα αποστολής όχι μόνο τους οδήγησε σε εντελώς λανθασμένη κατεύθυνση αλλά χρησιμοποιήθηκε και όλο το δευτέριο. Ευτυχώς, το άλμα του στόλου κατέληξε κοντά στο φεγγάρι του πλανήτη εκκίνησης. Απογοητευμένη η αποστολή, επιστρέφει χωρίς ώθηση. Το ταξίδι της επιστροφής θα καθυστερήσει λίγο παραπάνω.'*/,
        /*'Η */'ναυαρχίδα της αποστολής συγκρούστηκε με ξένο σκάφος'/* που έκανε άλμα χωρίς προειδοποίηση. Το ξένο σκάφος ανατινάχτηκε και η ζημιά στη ναυαρχίδα ήταν εκτεταμένη. Μόλις ολοκληρωθούν οι απαραίτητες επισκευές, ο στόλος θα ξεκινήσει το ταξίδι της επιστροφής καθώς η αποστολή δε μπορεί να συνεχιστεί κάτω από αυτές τις συνθήκες.'*/,
    ],

    [ExpeditionEventType.item]: {
        regex: /Το αντικείμενο (?<name>.+) προστέθηκε στα Υπάρχοντα/i,
    },

    [ExpeditionEventType.pirates]: {
        [ExpeditionEventSize.small]: [
            /*'Πέσαμε σε */'ενέδρα που είχε στηθεί από τους αστροπειρατές'/* . Η μάχη ήταν αναπόφευκτη.'*/,//TODO: welche Nachricht ist das?
            /*'Μερικοί */'πραγματικά απελπισμένοι πειρατές του διαστήματος'/* προσπάθησαν να καταλάβουν την εξερευνητική αποστολή.'*/,
            /*'Μία */'πρωτόγονη φυλή πειρατών μας επιτίθεται'/* με τα αστροσκάφη τους, αν μπορούμε να τα ονομάσουμε έτσι. Αν τα πυρά τους γίνουν επικύνδινα θα αναγκαστούμε να ανταποδώσουμε.'*/,
            /*'Υποκλέψαμε */'κάποια ραδιοσήματα από κάποιους μεθυσμένους αστροπειρατές'/* . Μάλλον θα μας επιτεθούν σύντομα.'*/,
            /*'Έπρεπε να */'αντιμετωπίσουμε μερικούς πειρατές'/*. Ευτυχώς δεν ήταν πολλοί.'*/,
            /*TODO: el 'Unsere Expeditionsflotte meldet, dass ein gewisser */'Moa Tikarr und seine wilde Meute'/* die bedingungslose Kapitulation unserer Flotte verlangen. Sollten sie Ernst machen, werden sie feststellen müssen, dass sich unsere Schiffe durchaus zu wehren wissen.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*TODO: el 'Deine Expeditionsflotte hatte ein */'unschönes Zusammentreffen mit einigen Weltraumpiraten'/*.'*/,
            /*TODO: el 'Wir sind in den */'Hinterhalt einiger Sternen-Freibeuter'/* geraten!'*/,
            /*'Το σήμα κινδύνου που ακολουθήσαμε, ήταν δόλωμα για την */'ενέδρα που είχαν στήσει οι αστροπειρατές'/* . Η μάχη ήταν αναπόφευκτη.'*/,
        ],
        [ExpeditionEventSize.large]: [
            /*TODO: el 'Die aufgefangenen Signale stammten nicht von Fremdwesen, sondern */'von einer geheimen Piratenbasis'/* ! Die Piraten waren von unserer Anwesenheit in ihrem Sektor nicht besonders begeistert.'*/,
            /*TODO: el 'Die Expeditionsflotte meldet */'schwere Kämpfe mit nicht-identifizierten Piratenschiffen'/*.'*/,
        ],
        'fled-death-star': [
            /*LOCA: el 'Your expedition stumbled across some pirates, but overwhelmed by the magnitude of your Deathstar, they fled.' */
        ],
    },

    [ExpeditionEventType.aliens]: {
        [ExpeditionEventSize.small]: [
            /*'Μερικά σκάφη με εντυπωσιακή εμφάνιση, */'επιτέθηκαν στο εξερευνητικό στόλο απροειδοποίητα',
            /*'Ο εξερευνητικός στόλος σας, */'ήρθε σε όχι και τόσο φιλική επαφή'/* , με κάποια άγνωστης προέλευσης όντα.'*/,
            /*'Η αποστολή */'δέχτηκε επίθεση από ένα μικρό σχηματισμό άγνωστων'/* σκαφών!'*/,
            /*TODO: el 'Die Expeditionsflotte meldet */'Kontakt mit unbekannten Schiffen'/*. Die Funksprüche sind nicht entschlüsselbar, jedoch scheinen die fremden Schiffe ihre Waffen zu aktivieren.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*TODO: el 'Eine */'unbekannte Spezies greift unsere Expedition'/* an!'*/,
            /*'Ο στόλος της αποστολής, */'εισχώρησε σε μια περιοχή που ανήκει σε μια μη καταγεγραμένη'/* , αλλά πολύ επιθετική και πολεμοχαρή εξωγήινη φυλή.'*/,
            /*TODO: el 'Die Verbindung zu unserer Expeditionsflotte wurde kurzfristig gestört. Sofern wir die letzte Botschaft richtig entschlüsselt haben, steht die Flotte unter schwerem Feuer; die */'Aggressoren konnten nicht identifiziert werden'/*.'*/,
        ],
        [ExpeditionEventSize.large]: [
            /*TODO: el 'Deine Expedition ist in eine Alien-Invasions-Flotte geraten und */'meldet schwere Gefechte'/*.'*/,
            /*TODO: el 'Wir hatten Mühe den korrekten */'Dialekt einer Alienrasse'/* auszusprechen. Unser Diplomat rief daher "Feuer!" statt "Friede!".'*/,
            /*TODO: el 'Ein großer */'Verband kristalliner Schiffe unbekannter Herkunft'/* hält direkten Kollisionskurs mit unserer Expeditionsflotte. Wir müssen nun wohl vom Schlimmsten ausgehen.'*/,
        ],
        'fled-death-star': [
            /*LOCA: el 'Your expedition stumbled across some aliens, but overwhelmed by the magnitude of your Deathstar, they fled.' */
        ],
    },

    logbookRegex: /Εγγραφή από το ημερολόγιο του τμήματος αντικατασκοπείας:(?<text>.+)/i,
    depletionMessages: {
        [ExpeditionDepletionLevel.none]: [
            /*'Φαίνεται πως */'αυτό το τμήμα του σύμπαντος είναι ανεξερεύνητο',
            /*'Είναι ωραίο το συναίσθημα, να */'είμαστε οι πρώτοι που ταξιδευουμε'/* σε αυτό τον ανεξερεύνητο τομέα.'*/,
        ],
        [ExpeditionDepletionLevel.low]: [
            /*TODO: el 'Es scheint nicht so, als ob */'jemals ein Mensch in diesem Bereich der Galaxis'/* gewesen wäre.'*/,
            /*TODO: el 'Es wurden */'sehr alte Signaturen von Raumschiffen'/* entdeckt. Wir sind also nicht die Ersten hier.'*/,
            /*TODO: el 'Wir hatten beinahe eine */'Kollision mit einer anderen Expeditionsflotte'/*. Hätte nicht gedacht, dass sich hier noch andere herumtreiben.'*/,
        ],
        [ExpeditionDepletionLevel.medium]: [
            /*TODO: el 'Wir haben den Abschluss der Expedition mit den Crewmitgliedern einer zweiten Expeditionsflotte, die im selben Sektor unterwegs war, gefeiert. */'Die haben auch nichts Spannendes zu berichten',
            /*TODO: el 'Es wurden */'Anzeichen für die Präsenz anderer Expeditionsflotten'/* gefunden.'*/,
            /*TODO: el 'Es wurde */'friedlicher Funkkontakt zu einigen anderen Expeditionen'/* in diesem Sektor hergestellt.'*/,
        ],
        [ExpeditionDepletionLevel.high]: [
            /*TODO: el 'Wenn wir uns zu unsicher fühlen, können wir uns ja */'mit all den anderen Expeditionen'/*, die hier herum fliegen, zusammen tun.'*/,
            /*TODO: el 'Vielleicht wäre es sinnvoller, hier */'eine Souvenir-Station zu errichten'/* , anstatt noch eine Expedition loszuschicken.'*/,
            /*TODO: el 'Wenn das so weitergeht, sollte man */'bei all dem Verkehr hier Navigationsbojen'/* aussetzen.'*/,
        ],
    },
};