import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpDown,
  Star, 
  Users, 
  Zap, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ChevronDown,
  Search,
  Wallet,
  Shield,
  Heart,
  MessageCircle,
  Settings,
  Menu,
  X,
  Copy,
  ExternalLink,
  TrendingUp,
  Globe,
  QrCode,
  Download,
  RefreshCw,
  AlertCircle,
  Hourglass
} from 'lucide-react';

// Language translations
const translations = {
  en: {
    // Header
    about: "About",
    blog: "Blog",
    faq: "FAQ",
    api: "API", 
    support: "Support",
    signIn: "Sign in",
    signUp: "Sign up",
    
    // Hero section
    heroTitle: "Lightning cryptocurrency exchange",
    heroSubtitle: "Instant Busimatch swaps with Lightning Network! Best rates and large volumes of currencies.",
    send: "Send",
    receive: "Receive",
    destination: "Destination",
    destinationPlaceholder: "Paste here your address where we have to send your",
    fixedRate: "Fixed rate (1.0%)",
    floatRate: "Float rate (0.5%)",
    exchangeNow: "Exchange now",
    termsText: "By using the site and creating an exchange, you agree to the",
    termsOfService: "Terms of Service",
    and: "and",
    privacyPolicy: "Privacy Policy",
    
    // Features
    trustedSince: "Trusted since 2018",
    saveTime: "Save time",
    saveTimeDesc: "Maximum exchange speed due to full automation",
    makeExchange: "Make an exchange", 
    makeExchangeDesc: "Pick the right strategy and make favourable trades",
    saveMoney: "Save money",
    saveMoneyDesc: "Best exchange rates and minimum commissions",
    
    // Recent transactions
    recentTransactions: "Recent transactions",
    
    // FAQ
    faqTitle: "FAQ",
    faq1Q: "How can I track my order?",
    faq1A: "In three ways: by email, on our website, or by viewing the transactions in the blockchain explorer.",
    faq2Q: "Why can I trust you?",
    faq2A: "No registration and no need to share your personal details. We don't hold your funds, all exchanges take place instantly in fully automatic mode.",
    faq3Q: "Do you have hidden fees?",
    faq3A: "1% if you opt for a fixed rate, 0.5% if you opt for a floating rate. All fees are transparent and shown upfront.",
    faq4Q: "What is Busimatch token?",
    faq4A: "Busimatch is a decentralized cryptocurrency token designed for fast and secure peer-to-peer transactions with low fees and high scalability.",
    faq5Q: "Which wallets are supported?",
    faq5A: "We support MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and most other popular cryptocurrency wallets for sending and receiving cryptocurrencies.",
    
    // News
    latestNews: "Latest News",
    allNews: "All news",
    news1Title: "Busimatch Token Launches on Lightning Network",
    news1Excerpt: "Enhanced transaction speeds and reduced fees with Lightning Network integration for Busimatch token...",
    news2Title: "New DEX Features: Advanced Trading Tools", 
    news2Excerpt: "We're introducing limit orders, stop-loss features, and advanced charting tools for better trading experience...",
    readMore: "Read more",
    
    // Guides
    guidesTitle: "Guides and tutorials",
    readAll: "Read all",
    guide1Title: "Types of cryptocurrency wallets",
    guide1Excerpt: "Learn about different types of crypto wallets and how to choose the right one for storing your coins.",
    guide2Title: "How to exchange cryptocurrencies on Busimatch",
    guide2Excerpt: "Step-by-step guide to making your first cryptocurrency exchange on our platform safely and efficiently.",
    guide3Title: "Understanding DeFi and DEX trading",
    guide3Excerpt: "Complete guide to decentralized finance and how decentralized exchanges work in the crypto ecosystem.",
    guide4Title: "Crypto security best practices",
    guide4Excerpt: "Essential security tips to protect your cryptocurrency assets and avoid common scams and threats.",
    
    // Footer
    followUs: "Follow us",
    copyright: "© 2018-2025 Busimatch DEX. All rights reserved.",
    
    // Order tracking
    backToExchange: "Back to exchange",
    youSend: "YOU SEND",
    youReceive: "YOU RECEIVE",
    orderId: "Order ID",
    timeRemaining: "Time remaining",
    orderType: "Order type",
    creationTime: "Creation time",
    sendInstruction: "Send",
    toAddress: "to the address:",
    yourTokensWillBeSent: "Your",
    willBeSentTo: "will be sent to",
    awaitingDeposit: "Awaiting deposit",
    awaitingConfirmations: "Awaiting confirmations",
    performExchange: "Perform exchange",
    done: "Done",
    
    // Currency search
    searchPlaceholder: "Type a currency or ticker",
    popularCurrencies: "Popular currencies",
    allCurrencies: "All currencies",
    noCurrenciesFound: "No currencies found"
  },
  
  es: {
    // Header
    about: "Acerca de",
    blog: "Blog",
    faq: "Preguntas frecuentes",
    api: "API",
    support: "Soporte",
    signIn: "Iniciar sesión",
    signUp: "Registrarse",
    
    // Hero section
    heroTitle: "Intercambio rápido de criptomonedas",
    heroSubtitle: "¡Intercambios instantáneos de Busimatch con Lightning Network! Mejores tarifas y grandes volúmenes de monedas.",
    send: "Enviar",
    receive: "Recibir",
    destination: "Destino",
    destinationPlaceholder: "Pega aquí tu dirección donde tenemos que enviar tu",
    fixedRate: "Tarifa fija (1.0%)",
    floatRate: "Tarifa flotante (0.5%)",
    exchangeNow: "Intercambiar ahora",
    termsText: "Al usar el sitio y crear un intercambio, aceptas los",
    termsOfService: "Términos de Servicio",
    and: "y",
    privacyPolicy: "Política de Privacidad",
    
    // Features
    trustedSince: "Confiable desde 2018",
    saveTime: "Ahorra tiempo",
    saveTimeDesc: "Máxima velocidad de intercambio debido a la automatización completa",
    makeExchange: "Hacer un intercambio",
    makeExchangeDesc: "Elige la estrategia correcta y haz operaciones favorables",
    saveMoney: "Ahorra dinero",
    saveMoneyDesc: "Mejores tipos de cambio y comisiones mínimas",
    
    // Recent transactions
    recentTransactions: "Transacciones recientes",
    
    // FAQ
    faqTitle: "Preguntas frecuentes",
    faq1Q: "¿Cómo puedo rastrear mi pedido?",
    faq1A: "De tres maneras: por correo electrónico, en nuestro sitio web, o viendo las transacciones en el explorador de blockchain.",
    faq2Q: "¿Por qué puedo confiar en ustedes?",
    faq2A: "Sin registro y sin necesidad de compartir tus datos personales. No retenemos tus fondos, todos los intercambios ocurren instantáneamente en modo completamente automático.",
    faq3Q: "¿Tienen tarifas ocultas?",
    faq3A: "1% si optas por una tarifa fija, 0.5% si optas por una tarifa flotante. Todas las tarifas son transparentes y se muestran por adelantado.",
    faq4Q: "¿Qué es el token Busimatch?",
    faq4A: "Busimatch es un token de criptomoneda descentralizado diseñado para transacciones peer-to-peer rápidas y seguras con tarifas bajas y alta escalabilidad.",
    faq5Q: "¿Qué billeteras son compatibles?",
    faq5A: "Soportamos MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, y la mayoría de otras billeteras de criptomonedas populares para enviar y recibir criptomonedas.",
    
    // News
    latestNews: "Últimas noticias",
    allNews: "Todas las noticias",
    news1Title: "Token Busimatch se lanza en Lightning Network",
    news1Excerpt: "Velocidades de transacción mejoradas y tarifas reducidas con la integración de Lightning Network para el token Busimatch...",
    news2Title: "Nuevas características DEX: Herramientas de trading avanzadas",
    news2Excerpt: "Estamos introduciendo órdenes límite, características de stop-loss, y herramientas de gráficos avanzados para una mejor experiencia de trading...",
    readMore: "Leer más",
    
    // Guides
    guidesTitle: "Guías y tutoriales",
    readAll: "Leer todo",
    guide1Title: "Tipos de billeteras de criptomonedas",
    guide1Excerpt: "Aprende sobre diferentes tipos de billeteras crypto y cómo elegir la correcta para almacenar tus monedas.",
    guide2Title: "Cómo intercambiar criptomonedas en Busimatch",
    guide2Excerpt: "Guía paso a paso para hacer tu primer intercambio de criptomonedas en nuestra plataforma de manera segura y eficiente.",
    guide3Title: "Entendiendo DeFi y el trading DEX",
    guide3Excerpt: "Guía completa sobre finanzas descentralizadas y cómo funcionan los intercambios descentralizados en el ecosistema crypto.",
    guide4Title: "Mejores prácticas de seguridad crypto",
    guide4Excerpt: "Consejos de seguridad esenciales para proteger tus activos de criptomonedas y evitar estafas y amenazas comunes.",
    
    // Footer
    followUs: "Síguenos",
    copyright: "© 2018-2025 Busimatch DEX. Todos los derechos reservados.",
    
    // Order tracking
    backToExchange: "Volver al intercambio",
    youSend: "ENVÍAS",
    youReceive: "RECIBES",
    orderId: "ID de pedido",
    timeRemaining: "Tiempo restante",
    orderType: "Tipo de pedido",
    creationTime: "Hora de creación",
    sendInstruction: "Envía",
    toAddress: "a la dirección:",
    yourTokensWillBeSent: "Tu",
    willBeSentTo: "será enviado a",
    awaitingDeposit: "Esperando depósito",
    awaitingConfirmations: "Esperando confirmaciones",
    performExchange: "Realizar intercambio",
    done: "Completado",
    
    // Currency search
    searchPlaceholder: "Escribe una moneda o ticker",
    popularCurrencies: "Monedas populares",
    allCurrencies: "Todas las monedas",
    noCurrenciesFound: "No se encontraron monedas"
  },
  
  fr: {
    // Header
    about: "À propos",
    blog: "Blog",
    faq: "FAQ",
    api: "API",
    support: "Support",
    signIn: "Se connecter",
    signUp: "S'inscrire",
    
    // Hero section
    heroTitle: "Échange de cryptomonnaies ultrarapide",
    heroSubtitle: "Échanges instantanés Busimatch avec Lightning Network ! Meilleurs taux et gros volumes de devises.",
    send: "Envoyer",
    receive: "Recevoir",
    destination: "Destination",
    destinationPlaceholder: "Collez ici votre adresse où nous devons envoyer votre",
    fixedRate: "Taux fixe (1.0%)",
    floatRate: "Taux flottant (0.5%)",
    exchangeNow: "Échanger maintenant",
    termsText: "En utilisant le site et en créant un échange, vous acceptez les",
    termsOfService: "Conditions de Service",
    and: "et",
    privacyPolicy: "Politique de Confidentialité",
    
    // Features
    trustedSince: "Fiable depuis 2018",
    saveTime: "Économiser du temps",
    saveTimeDesc: "Vitesse d'échange maximale grâce à l'automatisation complète",
    makeExchange: "Faire un échange",
    makeExchangeDesc: "Choisissez la bonne stratégie et faites des trades favorables",
    saveMoney: "Économiser de l'argent",
    saveMoneyDesc: "Meilleurs taux de change et commissions minimales",
    
    // Recent transactions
    recentTransactions: "Transactions récentes",
    
    // FAQ
    faqTitle: "FAQ",
    faq1Q: "Comment puis-je suivre ma commande ?",
    faq1A: "De trois façons : par email, sur notre site web, ou en consultant les transactions dans l'explorateur blockchain.",
    faq2Q: "Pourquoi puis-je vous faire confiance ?",
    faq2A: "Aucune inscription et pas besoin de partager vos données personnelles. Nous ne détenons pas vos fonds, tous les échanges ont lieu instantanément en mode entièrement automatique.",
    faq3Q: "Avez-vous des frais cachés ?",
    faq3A: "1% si vous optez pour un taux fixe, 0.5% si vous optez pour un taux flottant. Tous les frais sont transparents et affichés à l'avance.",
    faq4Q: "Qu'est-ce que le token Busimatch ?",
    faq4A: "Busimatch est un token de cryptomonnaie décentralisé conçu pour des transactions peer-to-peer rapides et sécurisées avec de faibles frais et une haute évolutivité.",
    faq5Q: "Quels portefeuilles sont supportés ?",
    faq5A: "Nous supportons MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, et la plupart des autres portefeuilles de cryptomonnaies populaires pour envoyer et recevoir des cryptomonnaies.",
    
    // News
    latestNews: "Dernières nouvelles",
    allNews: "Toutes les nouvelles",
    news1Title: "Le Token Busimatch est lancé sur Lightning Network",
    news1Excerpt: "Vitesses de transaction améliorées et frais réduits avec l'intégration Lightning Network pour le token Busimatch...",
    news2Title: "Nouvelles fonctionnalités DEX : Outils de trading avancés",
    news2Excerpt: "Nous introduisons des ordres limites, des fonctionnalités stop-loss, et des outils de graphiques avancés pour une meilleure expérience de trading...",
    readMore: "Lire plus",
    
    // Guides
    guidesTitle: "Guides et tutoriels",
    readAll: "Lire tout",
    guide1Title: "Types de portefeuilles de cryptomonnaies",
    guide1Excerpt: "Apprenez sur les différents types de portefeuilles crypto et comment choisir le bon pour stocker vos pièces.",
    guide2Title: "Comment échanger des cryptomonnaies sur Busimatch",
    guide2Excerpt: "Guide étape par étape pour faire votre premier échange de cryptomonnaies sur notre plateforme de manière sûre et efficace.",
    guide3Title: "Comprendre DeFi et le trading DEX",
    guide3Excerpt: "Guide complet sur la finance décentralisée et comment les échanges décentralisés fonctionnent dans l'écosystème crypto.",
    guide4Title: "Meilleures pratiques de sécurité crypto",
    guide4Excerpt: "Conseils de sécurité essentiels pour protéger vos actifs de cryptomonnaies et éviter les arnaques et menaces communes.",
    
    // Footer
    followUs: "Suivez-nous",
    copyright: "© 2018-2025 Busimatch DEX. Tous droits réservés.",
    
    // Order tracking
    backToExchange: "Retour à l'échange",
    youSend: "VOUS ENVOYEZ",
    youReceive: "VOUS RECEVEZ",
    orderId: "ID de commande",
    timeRemaining: "Temps restant",
    orderType: "Type de commande",
    creationTime: "Heure de création",
    sendInstruction: "Envoyez",
    toAddress: "à l'adresse :",
    yourTokensWillBeSent: "Votre",
    willBeSentTo: "sera envoyé à",
    awaitingDeposit: "En attente de dépôt",
    awaitingConfirmations: "En attente de confirmations",
    performExchange: "Effectuer l'échange",
    done: "Terminé",
    
    // Currency search
    searchPlaceholder: "Tapez une devise ou ticker",
    popularCurrencies: "Devises populaires",
    allCurrencies: "Toutes les devises",
    noCurrenciesFound: "Aucune devise trouvée"
  },
  
  de: {
    // Header
    about: "Über uns",
    blog: "Blog",
    faq: "FAQ",
    api: "API",
    support: "Support",
    signIn: "Anmelden",
    signUp: "Registrieren",
    
    // Hero section
    heroTitle: "Blitzschneller Kryptowährungsaustausch",
    heroSubtitle: "Sofortige Busimatch-Tausche mit Lightning Network! Beste Kurse und große Volumen von Währungen.",
    send: "Senden",
    receive: "Empfangen",
    destination: "Ziel",
    destinationPlaceholder: "Fügen Sie hier Ihre Adresse ein, an die wir Ihre",
    fixedRate: "Fester Kurs (1.0%)",
    floatRate: "Variabler Kurs (0.5%)",
    exchangeNow: "Jetzt tauschen",
    termsText: "Durch die Nutzung der Website und das Erstellen eines Tauschs stimmen Sie den",
    termsOfService: "Nutzungsbedingungen",
    and: "und",
    privacyPolicy: "Datenschutzrichtlinie",
    
    // Features
    trustedSince: "Vertrauenswürdig seit 2018",
    saveTime: "Zeit sparen",
    saveTimeDesc: "Maximale Tauschgeschwindigkeit durch vollständige Automatisierung",
    makeExchange: "Einen Tausch machen",
    makeExchangeDesc: "Wählen Sie die richtige Strategie und machen Sie günstige Trades",
    saveMoney: "Geld sparen",
    saveMoneyDesc: "Beste Wechselkurse und minimale Provisionen",
    
    // Recent transactions
    recentTransactions: "Letzte Transaktionen",
    
    // FAQ
    faqTitle: "FAQ",
    faq1Q: "Wie kann ich meine Bestellung verfolgen?",
    faq1A: "Auf drei Wegen: per E-Mail, auf unserer Website oder durch Anzeigen der Transaktionen im Blockchain-Explorer.",
    faq2Q: "Warum kann ich Ihnen vertrauen?",
    faq2A: "Keine Registrierung und keine Notwendigkeit, Ihre persönlichen Daten zu teilen. Wir halten Ihre Gelder nicht, alle Tausche finden sofort im vollautomatischen Modus statt.",
    faq3Q: "Haben Sie versteckte Gebühren?",
    faq3A: "1% wenn Sie sich für einen festen Kurs entscheiden, 0,5% wenn Sie sich für einen variablen Kurs entscheiden. Alle Gebühren sind transparent und werden im Voraus angezeigt.",
    faq4Q: "Was ist der Busimatch-Token?",
    faq4A: "Busimatch ist ein dezentraler Kryptowährungs-Token, der für schnelle und sichere Peer-to-Peer-Transaktionen mit niedrigen Gebühren und hoher Skalierbarkeit entwickelt wurde.",
    faq5Q: "Welche Wallets werden unterstützt?",
    faq5A: "Wir unterstützen MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet und die meisten anderen beliebten Kryptowährungs-Wallets zum Senden und Empfangen von Kryptowährungen.",
    
    // News
    latestNews: "Neueste Nachrichten",
    allNews: "Alle Nachrichten",
    news1Title: "Busimatch Token startet auf Lightning Network",
    news1Excerpt: "Verbesserte Transaktionsgeschwindigkeiten und reduzierte Gebühren mit Lightning Network-Integration für Busimatch Token...",
    news2Title: "Neue DEX-Features: Erweiterte Trading-Tools",
    news2Excerpt: "Wir führen Limit-Orders, Stop-Loss-Features und erweiterte Charting-Tools für eine bessere Trading-Erfahrung ein...",
    readMore: "Mehr lesen",
    
    // Guides
    guidesTitle: "Anleitungen und Tutorials",
    readAll: "Alle lesen",
    guide1Title: "Arten von Kryptowährungs-Wallets",
    guide1Excerpt: "Lernen Sie über verschiedene Arten von Crypto-Wallets und wie Sie das richtige zum Speichern Ihrer Münzen wählen.",
    guide2Title: "Wie man Kryptowährungen auf Busimatch tauscht",
    guide2Excerpt: "Schritt-für-Schritt-Anleitung für Ihren ersten Kryptowährungstausch auf unserer Plattform sicher und effizient.",
    guide3Title: "DeFi und DEX-Trading verstehen",
    guide3Excerpt: "Vollständige Anleitung zu dezentralen Finanzen und wie dezentrale Börsen im Krypto-Ökosystem funktionieren.",
    guide4Title: "Crypto-Sicherheits-Best-Practices",
    guide4Excerpt: "Wesentliche Sicherheitstipps zum Schutz Ihrer Kryptowährungs-Assets und zur Vermeidung häufiger Betrug und Bedrohungen.",
    
    // Footer
    followUs: "Folgen Sie uns",
    copyright: "© 2018-2025 Busimatch DEX. Alle Rechte vorbehalten.",
    
    // Order tracking
    backToExchange: "Zurück zum Tausch",
    youSend: "SIE SENDEN",
    youReceive: "SIE ERHALTEN",
    orderId: "Bestell-ID",
    timeRemaining: "Verbleibende Zeit",
    orderType: "Bestelltyp",
    creationTime: "Erstellungszeit",
    sendInstruction: "Senden Sie",
    toAddress: "an die Adresse:",
    yourTokensWillBeSent: "Ihre",
    willBeSentTo: "wird gesendet an",
    awaitingDeposit: "Warten auf Einzahlung",
    awaitingConfirmations: "Warten auf Bestätigungen",
    performExchange: "Tausch durchführen",
    done: "Fertig",
    
    // Currency search
    searchPlaceholder: "Währung oder Ticker eingeben",
    popularCurrencies: "Beliebte Währungen",
    allCurrencies: "Alle Währungen",
    noCurrenciesFound: "Keine Währungen gefunden"
  },
  
  nl: {
    // Header
    about: "Over ons",
    blog: "Blog",
    faq: "Veelgestelde vragen",
    api: "API",
    support: "Ondersteuning",
    signIn: "Inloggen",
    signUp: "Registreren",
    
    // Hero section
    heroTitle: "Bliksemsnelle cryptocurrency-uitwisseling",
    heroSubtitle: "Directe Busimatch-ruil met Lightning Network! Beste tarieven en grote volumes van valuta's.",
    send: "Versturen",
    receive: "Ontvangen",
    destination: "Bestemming",
    destinationPlaceholder: "Plak hier uw adres waar we uw",
    fixedRate: "Vast tarief (1.0%)",
    floatRate: "Variabel tarief (0.5%)",
    exchangeNow: "Nu uitwisselen",
    termsText: "Door gebruik te maken van de site en het maken van een uitwisseling, gaat u akkoord met de",
    termsOfService: "Servicevoorwaarden",
    and: "en",
    privacyPolicy: "Privacybeleid",
    
    // Features
    trustedSince: "Vertrouwd sinds 2018",
    saveTime: "Tijd besparen",
    saveTimeDesc: "Maximale uitwisselingssnelheid door volledige automatisering",
    makeExchange: "Een uitwisseling maken",
    makeExchangeDesc: "Kies de juiste strategie en maak gunstige trades",
    saveMoney: "Geld besparen",
    saveMoneyDesc: "Beste wisselkoersen en minimale commissies",
    
    // Recent transactions
    recentTransactions: "Recente transacties",
    
    // FAQ
    faqTitle: "Veelgestelde vragen",
    faq1Q: "Hoe kan ik mijn bestelling volgen?",
    faq1A: "Op drie manieren: per e-mail, op onze website, of door de transacties te bekijken in de blockchain explorer.",
    faq2Q: "Waarom kan ik jullie vertrouwen?",
    faq2A: "Geen registratie en geen behoefte om uw persoonlijke gegevens te delen. We houden uw fondsen niet vast, alle uitwisselingen vinden onmiddellijk plaats in volledig automatische modus.",
    faq3Q: "Hebben jullie verborgen kosten?",
    faq3A: "1% als u kiest voor een vast tarief, 0,5% als u kiest voor een variabel tarief. Alle kosten zijn transparant en worden vooraf getoond.",
    faq4Q: "Wat is de Busimatch token?",
    faq4A: "Busimatch is een gedecentraliseerde cryptocurrency token ontworpen voor snelle en veilige peer-to-peer transacties met lage kosten en hoge schaalbaarheid.",
    faq5Q: "Welke portemonnees worden ondersteund?",
    faq5A: "We ondersteunen MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, en de meeste andere populaire cryptocurrency portemonnees voor het verzenden en ontvangen van cryptocurrencies.",
    
    // News
    latestNews: "Laatste nieuws",
    allNews: "Alle nieuws",
    news1Title: "Busimatch Token lanceert op Lightning Network",
    news1Excerpt: "Verbeterde transactiesnelheden en verminderde kosten met Lightning Network integratie voor Busimatch token...",
    news2Title: "Nieuwe DEX functies: Geavanceerde handelstools",
    news2Excerpt: "We introduceren limietorders, stop-loss functies, en geavanceerde grafiektools voor een betere handelservaring...",
    readMore: "Lees meer",
    
    // Guides
    guidesTitle: "Gidsen en tutorials",
    readAll: "Alles lezen",
    guide1Title: "Soorten cryptocurrency portemonnees",
    guide1Excerpt: "Leer over verschillende soorten crypto portemonnees en hoe u de juiste kiest voor het opslaan van uw munten.",
    guide2Title: "Hoe cryptocurrencies uitwisselen op Busimatch",
    guide2Excerpt: "Stap-voor-stap gids voor het maken van uw eerste cryptocurrency uitwisseling op ons platform veilig en efficiënt.",
    guide3Title: "DeFi en DEX handel begrijpen",
    guide3Excerpt: "Volledige gids over gedecentraliseerde financiën en hoe gedecentraliseerde uitwisselingen werken in het crypto ecosysteem.",
    guide4Title: "Crypto beveiligings best practices",
    guide4Excerpt: "Essentiële beveiligingstips om uw cryptocurrency assets te beschermen en veelvoorkomende oplichting en bedreigingen te vermijden.",
    
    // Footer
    followUs: "Volg ons",
    copyright: "© 2018-2025 Busimatch DEX. Alle rechten voorbehouden.",
    
    // Order tracking
    backToExchange: "Terug naar uitwisseling",
    youSend: "U VERZENDT",
    youReceive: "U ONTVANGT",
    orderId: "Bestelling ID",
    timeRemaining: "Resterende tijd",
    orderType: "Bestelling type",
    creationTime: "Aanmaaktijd",
    sendInstruction: "Verzend",
    toAddress: "naar het adres:",
    yourTokensWillBeSent: "Uw",
    willBeSentTo: "wordt verzonden naar",
    awaitingDeposit: "Wachten op storting",
    awaitingConfirmations: "Wachten op bevestigingen",
    performExchange: "Uitwisseling uitvoeren",
    done: "Klaar",
    
    // Currency search
    searchPlaceholder: "Typ een valuta of ticker",
    popularCurrencies: "Populaire valuta's",
    allCurrencies: "Alle valuta's",
    noCurrenciesFound: "Geen valuta's gevonden"
  },
  
  it: {
    // Header
    about: "Chi siamo",
    blog: "Blog",
    faq: "FAQ",
    api: "API",
    support: "Supporto",
    signIn: "Accedi",
    signUp: "Registrati",
    
    // Hero section
    heroTitle: "Scambio di criptovalute fulmineo",
    heroSubtitle: "Scambi istantanei Busimatch con Lightning Network! Migliori tariffe e grandi volumi di valute.",
    send: "Invia",
    receive: "Ricevi",
    destination: "Destinazione",
    destinationPlaceholder: "Incolla qui il tuo indirizzo dove dobbiamo inviare il tuo",
    fixedRate: "Tariffa fissa (1.0%)",
    floatRate: "Tariffa variabile (0.5%)",
    exchangeNow: "Scambia ora",
    termsText: "Utilizzando il sito e creando uno scambio, accetti i",
    termsOfService: "Termini di Servizio",
    and: "e",
    privacyPolicy: "Informativa sulla Privacy",
    
    // Features
    trustedSince: "Affidabile dal 2018",
    saveTime: "Risparmia tempo",
    saveTimeDesc: "Velocità di scambio massima grazie alla completa automazione",
    makeExchange: "Fare uno scambio",
    makeExchangeDesc: "Scegli la strategia giusta e fai operazioni favorevoli",
    saveMoney: "Risparmia denaro",
    saveMoneyDesc: "Migliori tassi di cambio e commissioni minime",
    
    // Recent transactions
    recentTransactions: "Transazioni recenti",
    
    // FAQ
    faqTitle: "FAQ",
    faq1Q: "Come posso tracciare il mio ordine?",
    faq1A: "In tre modi: per email, sul nostro sito web, o visualizzando le transazioni nell'explorer blockchain.",
    faq2Q: "Perché posso fidarmi di voi?",
    faq2A: "Nessuna registrazione e nessun bisogno di condividere i tuoi dati personali. Non teniamo i tuoi fondi, tutti gli scambi avvengono istantaneamente in modalità completamente automatica.",
    faq3Q: "Avete commissioni nascoste?",
    faq3A: "1% se opti per una tariffa fissa, 0,5% se opti per una tariffa variabile. Tutte le commissioni sono trasparenti e mostrate in anticipo.",
    faq4Q: "Cos'è il token Busimatch?",
    faq4A: "Busimatch è un token di criptovaluta decentralizzato progettato per transazioni peer-to-peer veloci e sicure con commissioni basse e alta scalabilità.",
    faq5Q: "Quali portafogli sono supportati?",
    faq5A: "Supportiamo MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, e la maggior parte degli altri portafogli di criptovalute popolari per inviare e ricevere criptovalute.",
    
    // News
    latestNews: "Ultime notizie",
    allNews: "Tutte le notizie",
    news1Title: "Il Token Busimatch viene lanciato su Lightning Network",
    news1Excerpt: "Velocità di transazione migliorate e commissioni ridotte con l'integrazione Lightning Network per il token Busimatch...",
    news2Title: "Nuove funzionalità DEX: Strumenti di trading avanzati",
    news2Excerpt: "Stiamo introducendo ordini limite, funzionalità stop-loss, e strumenti di grafici avanzati per una migliore esperienza di trading...",
    readMore: "Leggi di più",
    
    // Guides
    guidesTitle: "Guide e tutorial",
    readAll: "Leggi tutto",
    guide1Title: "Tipi di portafogli di criptovalute",
    guide1Excerpt: "Impara sui diversi tipi di portafogli crypto e come scegliere quello giusto per conservare le tue monete.",
    guide2Title: "Come scambiare criptovalute su Busimatch",
    guide2Excerpt: "Guida passo-passo per fare il tuo primo scambio di criptovalute sulla nostra piattaforma in modo sicuro ed efficiente.",
    guide3Title: "Comprendere DeFi e il trading DEX",
    guide3Excerpt: "Guida completa sulla finanza decentralizzata e come funzionano gli scambi decentralizzati nell'ecosistema crypto.",
    guide4Title: "Migliori pratiche di sicurezza crypto",
    guide4Excerpt: "Consigli di sicurezza essenziali per proteggere i tuoi asset di criptovalute ed evitare truffe e minacce comuni.",
    
    // Footer
    followUs: "Seguici",
    copyright: "© 2018-2025 Busimatch DEX. Tutti i diritti riservati.",
    
    // Order tracking
    backToExchange: "Torna allo scambio",
    youSend: "INVII",
    youReceive: "RICEVI",
    orderId: "ID ordine",
    timeRemaining: "Tempo rimanente",
    orderType: "Tipo di ordine",
    creationTime: "Ora di creazione",
    sendInstruction: "Invia",
    toAddress: "all'indirizzo:",
    yourTokensWillBeSent: "Il tuo",
    willBeSentTo: "sarà inviato a",
    awaitingDeposit: "In attesa di deposito",
    awaitingConfirmations: "In attesa di conferme",
    performExchange: "Esegui scambio",
    done: "Fatto",
    
    // Currency search
    searchPlaceholder: "Digita una valuta o ticker",
    popularCurrencies: "Valute popolari",
    allCurrencies: "Tutte le valute",
    noCurrenciesFound: "Nessuna valuta trovata"
  },
  
  ar: {
    // Header
    about: "حولنا",
    blog: "المدونة",
    faq: "الأسئلة الشائعة",
    api: "واجهة برمجة التطبيقات",
    support: "الدعم",
    signIn: "تسجيل الدخول",
    signUp: "التسجيل",
    
    // Hero section
    heroTitle: "تبادل العملات المشفرة السريع",
    heroSubtitle: "مبادلات Busimatch فورية مع شبكة البرق! أفضل الأسعار وحجوم كبيرة من العملات.",
    send: "إرسال",
    receive: "استقبال",
    destination: "الوجهة",
    destinationPlaceholder: "الصق هنا عنوانك حيث يجب أن نرسل",
    fixedRate: "سعر ثابت (1.0%)",
    floatRate: "سعر متغير (0.5%)",
    exchangeNow: "تبادل الآن",
    termsText: "باستخدام الموقع وإنشاء تبادل، فإنك توافق على",
    termsOfService: "شروط الخدمة",
    and: "و",
    privacyPolicy: "سياسة الخصوصية",
    
    // Features
    trustedSince: "موثوق منذ 2018",
    saveTime: "توفير الوقت",
    saveTimeDesc: "أقصى سرعة تبادل بسبب الأتمتة الكاملة",
    makeExchange: "القيام بتبادل",
    makeExchangeDesc: "اختر الاستراتيجية الصحيحة وقم بصفقات مربحة",
    saveMoney: "توفير المال",
    saveMoneyDesc: "أفضل أسعار الصرف وأقل عمولات",
    
    // Recent transactions
    recentTransactions: "المعاملات الأخيرة",
    
    // FAQ
    faqTitle: "الأسئلة الشائعة",
    faq1Q: "كيف يمكنني تتبع طلبي؟",
    faq1A: "بثلاث طرق: عبر البريد الإلكتروني، على موقعنا، أو بعرض المعاملات في مستكشف البلوك تشين.",
    faq2Q: "لماذا يمكنني الوثوق بكم؟",
    faq2A: "لا تسجيل ولا حاجة لمشاركة بياناتك الشخصية. نحن لا نحتفظ بأموالك، جميع التبادلات تحدث فوراً في الوضع التلقائي الكامل.",
    faq3Q: "هل لديكم رسوم مخفية؟",
    faq3A: "1% إذا اخترت سعراً ثابتاً، 0.5% إذا اخترت سعراً متغيراً. جميع الرسوم شفافة ومعروضة مسبقاً.",
    faq4Q: "ما هو رمز Busimatch؟",
    faq4A: "Busimatch هو رمز عملة مشفرة لامركزي مصمم للمعاملات السريعة والآمنة من نظير إلى نظير مع رسوم منخفضة وقابلية توسع عالية.",
    faq5Q: "ما هي المحافظ المدعومة؟",
    faq5A: "نحن ندعم MetaMask و WalletConnect و Coinbase Wallet و Trust Wallet ومعظم محافظ العملات المشفرة الشائعة الأخرى لإرسال واستقبال العملات المشفرة.",
    
    // News
    latestNews: "آخر الأخبار",
    allNews: "جميع الأخبار",
    news1Title: "إطلاق رمز Busimatch على شبكة البرق",
    news1Excerpt: "سرعات معاملات محسنة ورسوم مخفضة مع تكامل شبكة البرق لرمز Busimatch...",
    news2Title: "ميزات DEX جديدة: أدوات تداول متقدمة",
    news2Excerpt: "نحن نقدم أوامر الحد وميزات وقف الخسارة وأدوات الرسوم البيانية المتقدمة لتجربة تداول أفضل...",
    readMore: "اقرأ المزيد",
    
    // Guides
    guidesTitle: "الأدلة والدروس",
    readAll: "اقرأ الكل",
    guide1Title: "أنواع محافظ العملات المشفرة",
    guide1Excerpt: "تعلم عن أنواع مختلفة من محافظ الكريبتو وكيفية اختيار الصحيح لتخزين عملاتك.",
    guide2Title: "كيفية تبادل العملات المشفرة على Busimatch",
    guide2Excerpt: "دليل خطوة بخطوة لعمل أول تبادل عملة مشفرة على منصتنا بأمان وكفاءة.",
    guide3Title: "فهم DeFi وتداول DEX",
    guide3Excerpt: "دليل شامل حول التمويل اللامركزي وكيف تعمل التبادلات اللامركزية في نظام الكريبتو البيئي.",
    guide4Title: "أفضل ممارسات أمان الكريبتو",
    guide4Excerpt: "نصائح أمان أساسية لحماية أصول العملة المشفرة الخاصة بك وتجنب الاحتيال والتهديدات الشائعة.",
    
    // Footer
    followUs: "تابعنا",
    copyright: "© 2018-2025 Busimatch DEX. جميع الحقوق محفوظة.",
    
    // Order tracking
    backToExchange: "العودة للتبادل",
    youSend: "أنت ترسل",
    youReceive: "أنت تستقبل",
    orderId: "معرف الطلب",
    timeRemaining: "الوقت المتبقي",
    orderType: "نوع الطلب",
    creationTime: "وقت الإنشاء",
    sendInstruction: "أرسل",
    toAddress: "إلى العنوان:",
    yourTokensWillBeSent: "سيتم إرسال",
    willBeSentTo: "الخاص بك إلى",
    awaitingDeposit: "في انتظار الإيداع",
    awaitingConfirmations: "في انتظار التأكيدات",
    performExchange: "تنفيذ التبادل",
    done: "تم",
    
    // Currency search
    searchPlaceholder: "اكتب عملة أو رمز",
    popularCurrencies: "العملات الشائعة",
    allCurrencies: "جميع العملات",
    noCurrenciesFound: "لم يتم العثور على عملات"
  }
};

// Language context
const LanguageContext = React.createContext();

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = (key) => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Header Component
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-opacity-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="https://i.imgur.com/9JQZ6vZ.png" 
                alt="Busimatch Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to original B logo if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-white font-bold text-sm">B</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-white">BUSIMATCH</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('about')}</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('blog')}</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('faq')}</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('api')}</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('support')}</a>
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span className="text-lg">{currentLang.flag}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {showLanguageDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg min-w-[180px] z-50"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => {
                            setCurrentLanguage(language.code);
                            setShowLanguageDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors flex items-center space-x-3 ${
                            currentLanguage === language.code ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
                          }`}
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span>{language.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <button className="text-gray-300 hover:text-white transition-colors">
                🌙
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                {t('signIn')}
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                {t('signUp')}
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 bg-opacity-95 rounded-lg p-4 mb-4"
            >
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('about')}</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('blog')}</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('faq')}</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('api')}</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">{t('support')}</a>
                
                {/* Mobile Language Selector */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setCurrentLanguage(language.code);
                          setIsOpen(false);
                        }}
                        className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-700 transition-colors flex items-center space-x-2 ${
                          currentLanguage === language.code ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
                        }`}
                      >
                        <span>{language.flag}</span>
                        <span className="text-xs">{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
                  <button className="text-left text-gray-300 hover:text-white transition-colors">
                    {t('signIn')}
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-left">
                    {t('signUp')}
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Main Exchange Component
export const ExchangeApp = () => {
  const [currentPage, setCurrentPage] = useState('exchange'); // 'exchange' or 'order'
  const [orderData, setOrderData] = useState(null);
  
  return (
    <div className="min-h-screen">
      {currentPage === 'exchange' ? (
        <HeroSection setCurrentPage={setCurrentPage} setOrderData={setOrderData} />
      ) : (
        <OrderTrackingPage orderData={orderData} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

// Hero Section with Crypto Exchange Interface
export const HeroSection = ({ setCurrentPage, setOrderData }) => {
  const { t } = useLanguage();
  const [sendCurrency, setSendCurrency] = useState('BTC');
  const [receiveCurrency, setReceiveCurrency] = useState('BUSIMATCH');
  const [sendAmount, setSendAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSendDropdown, setShowSendDropdown] = useState(false);
  const [showReceiveDropdown, setShowReceiveDropdown] = useState(false);
  const [exchangeRate, setExchangeRate] = useState('');
  const [priceUSD, setPriceUSD] = useState('');
  const [cryptoPrices, setCryptoPrices] = useState({});
  const [loading, setLoading] = useState(false);

  const cryptocurrencies = [
    { symbol: 'BTC', name: 'Bitcoin', icon: '₿', color: 'text-orange-400', geckoId: 'bitcoin' },
    { symbol: 'BUSIMATCH', name: 'Busimatch Token', icon: '🚀', color: 'text-purple-400', geckoId: null, price: 1.00 },
    { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ', color: 'text-blue-400', geckoId: 'ethereum' },
    { symbol: 'BNB', name: 'BNB Smart Chain (BEP20)', icon: '🔶', color: 'text-yellow-400', geckoId: 'binancecoin' },
    { symbol: 'USDT', name: 'Tether (ERC20)', icon: '₮', color: 'text-green-400', geckoId: 'tether' },
    { symbol: 'USDT_TRC20', name: 'Tether (TRC20)', icon: '₮', color: 'text-green-400', geckoId: 'tether' },
    { symbol: 'SOL', name: 'Solana', icon: '◎', color: 'text-purple-400', geckoId: 'solana' },
    { symbol: 'ADA', name: 'Cardano', icon: '₳', color: 'text-blue-400', geckoId: 'cardano' },
    { symbol: 'XRP', name: 'Ripple', icon: '◈', color: 'text-blue-300', geckoId: 'ripple' },
    { symbol: 'MATIC', name: 'Polygon', icon: '⬢', color: 'text-purple-400', geckoId: 'matic-network' },
    { symbol: 'AVAX', name: 'Avalanche', icon: '🔺', color: 'text-red-400', geckoId: 'avalanche-2' },
    { symbol: 'LTC', name: 'Litecoin', icon: 'Ł', color: 'text-gray-400', geckoId: 'litecoin' },
    { symbol: 'MONERO', name: 'Monero', icon: 'ɱ', color: 'text-orange-400', geckoId: 'monero' }
  ];

  // Fetch real cryptocurrency prices from CoinGecko API
  const fetchCryptoPrices = async () => {
    setLoading(true);
    try {
      const geckoIds = cryptocurrencies
        .filter(crypto => crypto.geckoId)
        .map(crypto => crypto.geckoId)
        .join(',');
      
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${geckoIds}&vs_currencies=usd`
      );
      
      if (response.ok) {
        const data = await response.json();
        const prices = {};
        
        cryptocurrencies.forEach(crypto => {
          if (crypto.geckoId && data[crypto.geckoId]) {
            prices[crypto.symbol] = data[crypto.geckoId].usd;
          } else if (crypto.symbol === 'BUSIMATCH') {
            prices[crypto.symbol] = crypto.price; // Fixed price for BUSIMATCH
          }
        });
        
        setCryptoPrices(prices);
      } else {
        // Fallback to mock prices if API fails
        console.warn('Failed to fetch real prices, using fallback prices');
        const fallbackPrices = {
          'BTC': 43250.00,
          'ETH': 2580.50,
          'MONERO': 168.45,
          'SOL': 95.20,
          'ADA': 0.48,
          'XRP': 0.52,
          'BNB': 285.60,
          'USDT': 1.00,
          'MATIC': 0.82,
          'AVAX': 26.40,
          'LTC': 72.80,
          'BUSIMATCH': 1.00
        };
        setCryptoPrices(fallbackPrices);
      }
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
      // Fallback prices
      const fallbackPrices = {
        'BTC': 43250.00,
        'ETH': 2580.50,
        'MONERO': 168.45,
        'SOL': 95.20,
        'ADA': 0.48,
        'XRP': 0.52,
        'BNB': 285.60,
        'USDT': 1.00,
        'MATIC': 0.82,
        'AVAX': 26.40,
        'LTC': 72.80,
        'BUSIMATCH': 1.00
      };
      setCryptoPrices(fallbackPrices);
    } finally {
      setLoading(false);
    }
  };

  // Fetch prices on component mount
  useEffect(() => {
    fetchCryptoPrices();
    // Refresh prices every 30 seconds
    const interval = setInterval(fetchCryptoPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  // Calculate exchange rate and amounts with CORRECT calculations
  useEffect(() => {
    if (cryptoPrices[sendCurrency] && cryptoPrices[receiveCurrency]) {
      const sendPrice = cryptoPrices[sendCurrency];
      const receivePrice = cryptoPrices[receiveCurrency];
      
      console.log(`Send ${sendCurrency} price: $${sendPrice}`);
      console.log(`Receive ${receiveCurrency} price: $${receivePrice}`);
      
      // Correct calculation: how many receive tokens per 1 send token
      const rate = sendPrice / receivePrice;
      console.log(`Exchange rate: 1 ${sendCurrency} = ${rate} ${receiveCurrency}`);
      setExchangeRate(rate.toFixed(6));
      
      if (sendAmount) {
        const converted = (parseFloat(sendAmount) * rate).toFixed(6);
        setReceiveAmount(converted);
        setPriceUSD((parseFloat(sendAmount) * sendPrice).toFixed(2));
      }
    }
  }, [sendCurrency, receiveCurrency, sendAmount, cryptoPrices]);

  // Update receive amount when send amount changes
  const handleSendAmountChange = (value) => {
    setSendAmount(value);
    if (value && exchangeRate) {
      const converted = (parseFloat(value) * parseFloat(exchangeRate)).toFixed(6);
      setReceiveAmount(converted);
      
      if (cryptoPrices[sendCurrency]) {
        setPriceUSD((parseFloat(value) * cryptoPrices[sendCurrency]).toFixed(2));
      }
    } else {
      setReceiveAmount('');
      setPriceUSD('');
    }
  };

  const swapCurrencies = () => {
    const temp = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(temp);
    const tempAmount = sendAmount;
    setSendAmount(receiveAmount);
    setReceiveAmount(tempAmount);
  };

  const handleExchange = () => {
    const sendCrypto = cryptocurrencies.find(c => c.symbol === sendCurrency);
    const order = {
      id: 'FB9A34',
      sendAmount,
      sendCurrency,
      receiveAmount: receiveAmount || (parseFloat(sendAmount) * parseFloat(exchangeRate)).toFixed(6),
      receiveCurrency,
      status: 'awaiting_deposit',
      createdAt: new Date().toLocaleString(),
      // Generate address for the currency they want to SEND (not receive)
      receivingAddress: generateSendAddress(sendCurrency),
      destinationAddress: 'rJQrESwxf2BfkGhfSXwDi7Kb9rU48ei',
      exchangeRate: exchangeRate,
      networkConfirmations: 1,
      priceUSD: priceUSD
    };
    setOrderData(order);
    setCurrentPage('order');
  };

  // Generate address for the currency user wants to SEND
  const generateSendAddress = (currency) => {
    const addresses = {
      'BTC': 'bc1qa46gek8s76v3652vx70xk6nlx7us7meln30vgl',
      'ETH': '0x742d35Cc6C3D1d5D9bF5c8f8A5e2F3a1B2c4d5e6',
      'SOL': '8s9KQrXzBfkGhfSXwDj8Kb0rU49fi2nL4pO1q3R7sTuV',
      'BNB': 'bnb1qa46gek8s76v3652vx70xk6nlx7us7meln30vgl',
      'USDT': '0x852c47Dd7C3D1d6D9bF6c9f9A6e3F4a2B3c5d6e7',
      'USDT_TRC20': 'TQrESwxfZBfkGhfSXwDj7Kb9rU48eiNmLp',
      'XRP': 'rJQrESwxfZBfkGhfSXwDj7Kb9rU48ei',
      'ADA': 'addr1qa46gek8s76v3652vx70xk6nlx7us7meln30vgl9k2m',
      'MATIC': '0x963d58Ee8C4D2d7D0bF7c0f0A7e4F5a3B4c6d7e8',
      'AVAX': 'X-avax1qa46gek8s76v3652vx70xk6nlx7us7meln30vgl',
      'LTC': 'ltc1qa46gek8s76v3652vx70xk6nlx7us7meln30vgl',
      'MONERO': '46Gek8s76v3652vx70xk6nlx7us7meln30vglK2mN8pLqR',
      'BUSIMATCH': '0xBUS1match742d35Cc6C3D1d5D9bF5c8f8A5e2F3a1'
    };
    return addresses[currency] || 'generated_address_' + Math.random().toString(36).substr(2, 9);
  };

  const filteredCurrencies = cryptocurrencies.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const CurrencyDropdown = ({ isOpen, setIsOpen, selected, onSelect, label }) => (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white flex items-center justify-between hover:bg-gray-600 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg">{cryptocurrencies.find(c => c.symbol === selected)?.icon}</span>
          <span className="font-medium">{selected}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 z-50 bg-gray-800 border border-gray-600 rounded-lg mt-1 max-h-80 overflow-y-auto"
          >
            <div className="p-3 border-b border-gray-600">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type a currency or ticker"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="py-2">
              <div className="px-3 py-2 text-xs text-gray-400 font-medium">Popular currencies</div>
              {filteredCurrencies.map((crypto) => (
                <button
                  key={crypto.symbol}
                  onClick={() => {
                    onSelect(crypto.symbol);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                  className="w-full px-3 py-2 text-left hover:bg-gray-700 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{crypto.icon}</span>
                    <div>
                      <div className="text-white font-medium">{crypto.name}</div>
                      <div className="text-gray-400 text-sm">{crypto.symbol}</div>
                    </div>
                  </div>
                  <span className={`text-sm font-mono ${crypto.color}`}>{crypto.symbol}</span>
                </button>
              ))}
              
              {filteredCurrencies.length === 0 && (
                <div className="px-3 py-4 text-gray-400 text-center">No currencies found</div>
              )}
              
              <div className="border-t border-gray-600 mt-2 pt-2">
                <button className="w-full px-3 py-2 text-left text-blue-400 hover:bg-gray-700 transition-colors">
                  All currencies
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597315797662-cb81ba54c8b2')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold text-white mb-4 whitespace-nowrap"
        >
          {t('heroTitle')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-lg text-gray-100 mb-12"
        >
          {t('heroSubtitle')}
        </motion.p>

        {/* Crypto Exchange Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Send Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-orange-400">Send</label>
                <span className="text-sm text-orange-400">{sendCurrency}</span>
              </div>
              <div className="space-y-3">
                <input 
                  type="number"
                  value={sendAmount}
                  onChange={(e) => handleSendAmountChange(e.target.value)}
                  placeholder="0.0206473"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <CurrencyDropdown
                  isOpen={showSendDropdown}
                  setIsOpen={setShowSendDropdown}
                  selected={sendCurrency}
                  onSelect={setSendCurrency}
                  label="Send"
                />
              </div>
              {sendAmount && exchangeRate && cryptoPrices[sendCurrency] && cryptoPrices[receiveCurrency] && (
                <div className="mt-2 text-sm text-gray-400">
                  1 {sendCurrency} = {parseFloat(exchangeRate).toFixed(8)} {receiveCurrency}
                </div>
              )}
              {priceUSD && (
                <div className="mt-1 text-sm text-green-400">
                  ≈ ${priceUSD}
                </div>
              )}
              {loading && (
                <div className="mt-1 text-sm text-yellow-400">
                  Updating prices...
                </div>
              )}
            </div>

            {/* Swap Button */}
            <div className="flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={swapCurrencies}
                className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
              >
                <ArrowUpDown className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Receive Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-blue-400">Receive</label>
                <span className="text-sm text-blue-400">{receiveCurrency}</span>
              </div>
              <div className="space-y-3">
                <input 
                  type="number"
                  value={receiveAmount}
                  onChange={(e) => setReceiveAmount(e.target.value)}
                  placeholder="999.7071"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <CurrencyDropdown
                  isOpen={showReceiveDropdown}
                  setIsOpen={setShowReceiveDropdown}
                  selected={receiveCurrency}
                  onSelect={setReceiveCurrency}
                  label="Receive"
                />
              </div>
              {receiveAmount && cryptoPrices[receiveCurrency] && (
                <div className="mt-2 text-sm text-gray-400">
                  {(() => {
                    const receivePrice = cryptoPrices[receiveCurrency];
                    if (receivePrice && receiveAmount) {
                      const usdValue = (parseFloat(receiveAmount) * receivePrice).toFixed(2);
                      return `≈ $${usdValue}`;
                    }
                    return '';
                  })()}
                </div>
              )}
            </div>
          </div>

          {/* Destination Wallet */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Destination</label>
            <input 
              type="text"
              placeholder={`Paste here your address where we have to send your ${receiveCurrency}`}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Exchange Type */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
              Fixed rate (1.0%)
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Float rate (0.5%)
            </button>
          </div>

          {/* Exchange Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExchange}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Exchange now</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            By using the site and creating an exchange, you agree to the{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Order Tracking Page Component
export const OrderTrackingPage = ({ orderData, setCurrentPage }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState('29:58');

  const steps = [
    { icon: RefreshCw, title: 'Awaiting deposit', active: true },
    { icon: Hourglass, title: 'Awaiting confirmations', active: false },
    { icon: ArrowUpDown, title: 'Perform exchange', active: false },
    { icon: CheckCircle, title: 'Done', active: false }
  ];

  const generateQRCode = (address) => {
    // In a real app, you'd generate actual QR code
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Cg fill='black'%3E%3Crect x='20' y='20' width='20' height='20'/%3E%3Crect x='60' y='20' width='20' height='20'/%3E%3Crect x='100' y='20' width='20' height='20'/%3E%3Crect x='140' y='20' width='20' height='20'/%3E%3Crect x='20' y='60' width='20' height='20'/%3E%3Crect x='180' y='60' width='20' height='20'/%3E%3Crect x='20' y='100' width='20' height='20'/%3E%3Crect x='60' y='100' width='20' height='20'/%3E%3Crect x='140' y='100' width='20' height='20'/%3E%3Crect x='180' y='100' width='20' height='20'/%3E%3Crect x='20' y='140' width='20' height='20'/%3E%3Crect x='100' y='140' width='20' height='20'/%3E%3Crect x='20' y='180' width='20' height='20'/%3E%3Crect x='60' y='180' width='20' height='20'/%3E%3Crect x='100' y='180' width='20' height='20'/%3E%3Crect x='140' y='180' width='20' height='20'/%3E%3C/g%3E%3C/svg%3E";
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597315797662-cb81ba54c8b2')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <button 
              onClick={() => setCurrentPage('exchange')}
              className="text-blue-400 hover:text-blue-300 mb-4 flex items-center space-x-2 mx-auto"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to exchange</span>
            </button>
            
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{orderData.sendAmount} {orderData.sendCurrency}</div>
                  <div className="text-sm text-gray-400">YOU SEND</div>
                </div>
                <ArrowRight className="text-gray-400 w-6 h-6" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{orderData.receiveAmount} {orderData.receiveCurrency}</div>
                  <div className="text-sm text-gray-400">YOU RECEIVE</div>
                </div>
              </div>
              <div className="text-center text-gray-400 text-sm">
                bc1qa46gek8s76v3652vx70xk6nlx7us7meln30vgl → rJQrESwxfZBfkGhfSXwPi7Kb9rU48ei
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Order Details */}
            <div className="space-y-6">
              {/* Order Info */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Order ID</div>
                    <div className="text-blue-400 font-mono flex items-center space-x-2">
                      <span>{orderData.id}</span>
                      <Copy className="w-4 h-4 cursor-pointer hover:text-blue-300" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Time remaining</div>
                    <div className="text-red-400 font-mono">{timeRemaining}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Order type</div>
                    <div className="text-white">Float rate</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Creation time</div>
                    <div className="text-white text-sm">{orderData.createdAt}</div>
                  </div>
                </div>

                {/* Send Instructions */}
                <div className="mb-6">
                  <div className="text-white font-semibold mb-3">
                    Send <span className="text-orange-400">{orderData.sendAmount} {orderData.sendCurrency}</span> to the address:
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <code className="text-blue-400 text-sm break-all">{orderData.receivingAddress}</code>
                      <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white ml-2" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Send your <span className="text-orange-400">{orderData.sendCurrency}</span> to this address. After receiving{' '}
                    <span className="text-white">{orderData.networkConfirmations} network confirmations</span>, we will automatically convert and send{' '}
                    <span className="text-blue-400">{orderData.receiveAmount} {orderData.receiveCurrency}</span> to your destination address.
                  </div>
                </div>

                {/* Receiving Address */}
                <div>
                  <div className="text-sm text-gray-400 mb-2">Your {orderData.receiveCurrency} will be sent to</div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <code className="text-blue-400 text-sm">{orderData.destinationAddress}</code>
                      <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - QR Code and Status */}
            <div className="space-y-6">
              {/* QR Code */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 text-center">
                <div className="mb-4">
                  <img 
                    src={generateQRCode(orderData.receivingAddress)}
                    alt="QR Code"
                    className="w-48 h-48 mx-auto bg-white rounded-lg p-4"
                  />
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
                    Address
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                    With amount
                  </button>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700">
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-blue-600' : 'bg-gray-600'
                      }`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${index === 0 ? 'text-white' : 'text-gray-400'}`}>
                          {step.title}
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Cards Section
export const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Save time",
      description: "Maximum exchange speed due to full automation",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: ArrowUpDown,
      title: "Make an exchange",
      description: "Pick the right strategy and make favourable trades",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: DollarSign,
      title: "Save money",
      description: "Best exchange rates and minimum commissions",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Trusted since 2018
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Recent Transactions Section
export const RecentTransactions = () => {
  const transactions = [
    { from: "0.01296 ETH", to: "USDC", time: "5 sec", address: "0x742d...35Cc" },
    { from: "604 USDT", to: "LTC", time: "1 min", address: "0x8f9a...78Dd" },
    { from: "0.017 SOL", to: "USDC", time: "2 min", address: "0x1b2c...91Ee" },
    { from: "101 USDT", to: "BUSIMATCH", time: "3 min", address: "0x3d4e...12Ff" },
    { from: "1000 BUSIMATCH", to: "SOL", time: "5 min", address: "0x5f6g...34Gg" },
    { from: "4020 USDT", to: "BTC", time: "8 min", address: "0x7h8i...56Hh" },
    { from: "2919 USDT", to: "BTC", time: "12 min", address: "0x9j0k...78Ii" },
    { from: "143 TRX", to: "BTC", time: "15 min", address: "0xbl2m...90Jj" },
    { from: "40.555 TRX", to: "BTC", time: "18 min", address: "0xdn4o...12Kk" },
    { from: "548 USDT", to: "BTC", time: "20 min", address: "0xpq6r...34Ll" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1664526937033-fe2c11f1be25')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Recent transactions
        </motion.h2>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
          {transactions.map((tx, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-700 hover:bg-opacity-30 transition-colors duration-300"
            >
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">{tx.time} ago</span>
                <div className="flex items-center space-x-3">
                  <span className="text-white font-medium">{tx.from}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-white font-medium">{tx.to}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-blue-400 font-medium text-sm">{tx.address}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  
  const faqs = [
    {
      question: "How can I track my order?",
      answer: "In three ways: by email, on our website, or by viewing the transactions in the blockchain explorer."
    },
    {
      question: "Why can I trust you?",
      answer: "No registration and no need to share your personal details. We don't hold your funds, all exchanges take place instantly in fully automatic mode."
    },
    {
      question: "Do you have hidden fees?",
      answer: "1% if you opt for a fixed rate, 0.5% if you opt for a floating rate. All fees are transparent and shown upfront."
    },
    {
      question: "What is Busimatch token?",
      answer: "Busimatch is a decentralized cryptocurrency token designed for fast and secure peer-to-peer transactions with low fees and high scalability."
    },
    {
      question: "Which wallets are supported?",
      answer: "We support MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and most other popular cryptocurrency wallets for sending and receiving cryptocurrencies."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          FAQ
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-700 hover:bg-opacity-30 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// News Section
export const NewsSection = () => {
  const news = [
    {
      title: "Busimatch Token Launches on Lightning Network",
      excerpt: "Enhanced transaction speeds and reduced fees with Lightning Network integration for Busimatch token...",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg",
      date: "June 15, 2025"
    },
    {
      title: "New DEX Features: Advanced Trading Tools",
      excerpt: "We're introducing limit orders, stop-loss features, and advanced charting tools for better trading experience...",
      image: "https://images.unsplash.com/photo-1566816931809-10aade99aa3a",
      date: "June 10, 2025"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Latest News
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2"
          >
            <span>All news</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{article.date}</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Guides Section
export const GuidesSection = () => {
  const guides = [
    {
      title: "Types of cryptocurrency wallets",
      excerpt: "Learn about different types of crypto wallets and how to choose the right one for storing your coins.",
      image: "https://images.unsplash.com/photo-1664527184222-420bb0fec61a",
      category: "Wallets",
      date: "June 12, 2025"
    },
    {
      title: "How to exchange cryptocurrencies on Busimatch",
      excerpt: "Step-by-step guide to making your first cryptocurrency exchange on our platform safely and efficiently.",
      image: "https://images.unsplash.com/photo-1567910977265-62375d7dba86",
      category: "Tutorial",
      date: "June 8, 2025"
    },
    {
      title: "Understanding DeFi and DEX trading",
      excerpt: "Complete guide to decentralized finance and how decentralized exchanges work in the crypto ecosystem.",
      image: "https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg",
      category: "DeFi",
      date: "June 5, 2025"
    },
    {
      title: "Crypto security best practices",
      excerpt: "Essential security tips to protect your cryptocurrency assets and avoid common scams and threats.",
      image: "https://images.unsplash.com/photo-1572191783453-62f99a6055ce",
      category: "Security",
      date: "June 1, 2025"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Guides and tutorials
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2"
          >
            <span>Read all</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {guide.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {guide.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-3">{guide.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{guide.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  const footerSections = [
    {
      title: "Busimatch",
      links: [
        { text: "About", href: "#" },
        { text: "Our brand", href: "#" },
        { text: "Affiliate program", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Affiliate Program Terms", href: "#" },
        { text: "API Terms of Use", href: "#" }
      ]
    },
    {
      title: "Popular",
      links: [
        { text: "Blog", href: "#" },
        { text: "BTC to BUSIMATCH", href: "#" },
        { text: "BUSIMATCH to BTC", href: "#" },
        { text: "ETH to BUSIMATCH", href: "#" },
        { text: "USDT(TRC20) to BUSIMATCH", href: "#" },
        { text: "USDT(ETH) to BUSIMATCH", href: "#" },
        { text: "USDT(TRX) to BUSIMATCH", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "FAQ", href: "#" },
        { text: "Support", href: "#" },
        { text: "API", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2018-2025 Busimatch DEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};