'use client';

export type Language = 'fr' | 'en' | 'ar';

export interface NavTranslations {
  brandDescriptor: string;
  platform: string;
  howItWorks: string;
  intelligence: string;
  forDevelopers: string;
  forSuppliers: string;
  about: string;
  contact: string;
  signIn: string;
  startProject: string;
  menu: string;
  close: string;
}

export interface HeroTranslations {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  demoNotice: string;
  projectName: string;
  projectBudget: string;
  statusPackages: string;
  statusRfqs: string;
  statusQuotes: string;
  statusAwards: string;
  tableColPackage: string;
  tableColSuppliers: string;
  tableColLowest: string;
  tableColComparable: string;
  tableColStatus: string;
  statusEvaluation: string;
  statusAwarded: string;
  statusReview: string;
  bidIntelTitle: string;
  supAName: string;
  supAPrice: string;
  supAMeta: string;
  supBName: string;
  supBPrice: string;
  supBMeta: string;
  supBExclusions: string;
  supCName: string;
  supCPrice: string;
  supCMeta: string;
  comparableCostLabel: string;
  comparableWinner: string;
}

export interface ProblemTranslations {
  eyebrow: string;
  headline: string;
  body: string;
  stepBoq: string;
  stepExcel: string;
  stepEmail: string;
  stepPdf: string;
  stepWhatsapp: string;
  stepPhone: string;
  stepRevised: string;
  stepComparison: string;
  stepPo: string;
  caption: string;
}

export interface WorkflowTranslations {
  eyebrow: string;
  headline: string;
  subheadline: string;
  s1: string;
  s1Desc: string;
  s2: string;
  s2Desc: string;
  s3: string;
  s3Desc: string;
  s4: string;
  s4Desc: string;
  s5: string;
  s5Desc: string;
  s6: string;
  s6Desc: string;
  s7: string;
  s7Desc: string;
  s8: string;
  s8Desc: string;
  s9: string;
  s9Desc: string;
}

export interface ConstructionTranslations {
  eyebrow: string;
  headline: string;
  subheadline: string;
  a1Title: string;
  a1Desc: string;
  a2Title: string;
  a2Desc: string;
  a3Title: string;
  a3Desc: string;
  a4Title: string;
  a4Desc: string;
  a5Title: string;
  a5Desc: string;
  a6Title: string;
  a6Desc: string;
}

export interface BidIntelTranslations {
  eyebrow: string;
  headline: string;
  subheadline: string;
  supAHeader: string;
  supAPrice: string;
  supASpec: string;
  supATransport: string;
  supATerms: string;
  supBHeader: string;
  supBPrice: string;
  supBSub: string;
  supBSpec: string;
  supBTransport: string;
  supBTerms: string;
  supCHeader: string;
  supCPrice: string;
  supCSpec: string;
  supCTransport: string;
  supCTerms: string;
  analysisTitle: string;
  paramTransport: string;
  paramSpec: string;
  paramExclusions: string;
  paramTerms: string;
  paramLeadTime: string;
  comparableCostHeading: string;
  supAComp: string;
  supACompNote: string;
  supBComp: string;
  supBCompNote: string;
  supCComp: string;
  supCCompNote: string;
  disclaimer: string;
}

export interface EmergingTranslations {
  eyebrow: string;
  headline: string;
  text: string;
  philosophy: string;
  inputChannels: string;
  outputTitle: string;
  outputSubtitle: string;
}

export interface AudiencesTranslations {
  devTitle: string;
  devSubtitle: string;
  devPoints: string[];
  devCta: string;
  supTitle: string;
  supSubtitle: string;
  supPoints: string[];
  supCta: string;
}

export interface DataMoatTranslations {
  eyebrow: string;
  headline: string;
  text: string;
  factors: string[];
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
}

export interface FinanceTranslations {
  eyebrow: string;
  headline: string;
  text: string;
  f1: string;
  f2: string;
  f3: string;
  f4: string;
  f5: string;
  f6: string;
  disclaimer: string;
}

export interface MoroccoTranslations {
  eyebrow: string;
  headline: string;
  text: string;
  regions: string;
  expansion: string;
}

export interface ProductShowcaseTranslations {
  eyebrow: string;
  headline: string;
  subheadline: string;
  tabOverview: string;
  tabPackage: string;
  tabRfq: string;
  tabBidIntel: string;
  tabSupplier: string;
}

export interface FinalCtaTranslations {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface FooterTranslations {
  descriptor: string;
  navTitle: string;
  legalTitle: string;
  contactTitle: string;
  rights: string;
  affiliationText: string;
}

export interface TranslationDictionary {
  nav: NavTranslations;
  hero: HeroTranslations;
  problem: ProblemTranslations;
  workflow: WorkflowTranslations;
  construction: ConstructionTranslations;
  bidIntel: BidIntelTranslations;
  emerging: EmergingTranslations;
  audiences: AudiencesTranslations;
  dataMoat: DataMoatTranslations;
  finance: FinanceTranslations;
  moroccoFirst: MoroccoTranslations;
  productShowcase: ProductShowcaseTranslations;
  finalCta: FinalCtaTranslations;
  footer: FooterTranslations;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  // =========================================================================
  // FRENCH (PRIMARY LAUNCH LANGUAGE)
  // =========================================================================
  fr: {
    nav: {
      brandDescriptor: 'CONSTRUCTION PROCUREMENT INTELLIGENCE',
      platform: 'Plateforme',
      howItWorks: 'Fonctionnement',
      intelligence: 'Intelligence BTP',
      forDevelopers: 'Maîtres d’Ouvrage',
      forSuppliers: 'Fournisseurs & Sous-traitants',
      about: 'À propos',
      contact: 'Contact',
      signIn: 'Connexion',
      startProject: 'Démarrer un projet',
      menu: 'Menu',
      close: 'Fermer',
    },
    hero: {
      eyebrow: 'CONSTRUCTION PROCUREMENT INTELLIGENCE',
      headlineLine1: 'Les achats de construction,',
      headlineLine2: 'bâtis autour du projet.',
      subheadline:
        'BYLDORA transforme les bordereaux de prix, DQE et spécifications de projets en consultations structurées, comparatifs d’offres rigoureux et décisions d’adjudication documentées.',
      primaryCta: 'Démarrer un projet',
      secondaryCta: 'Découvrir la méthode',
      demoNotice: 'Projet démo — Illustratif',
      projectName: 'Complexe Hôtelier & Résidentiel Casablanca',
      projectBudget: 'Budget achats : 38,4M MAD',
      statusPackages: '27 lots techniques',
      statusRfqs: '18 consultations émises',
      statusQuotes: '13 devis reçus',
      statusAwards: '5 lots attribués',
      tableColPackage: 'Lot Technique',
      tableColSuppliers: 'Offres',
      tableColLowest: 'Moins-disant brut',
      tableColComparable: 'Coût rendu comparable',
      tableColStatus: 'État',
      statusEvaluation: 'En évaluation',
      statusAwarded: 'Attribué',
      statusReview: 'Revue technique',
      bidIntelTitle: 'Intelligence des offres — Analyse d’équivalence',
      supAName: 'Fournisseur A (Atlas Clim)',
      supAPrice: '2,41M MAD',
      supAMeta: '100% conforme CCTP • 21 jours • Traite 60j',
      supBName: 'Fournisseur B (Maghreb Clim)',
      supBPrice: '2,27M MAD (facial)',
      supBMeta: '92% conformité • 30 jours • Paiement comptant',
      supBExclusions: '3 exclusions non chiffrées (transport usine, grutage)',
      supCName: 'Fournisseur C (Sahara Thermal)',
      supCPrice: '2,49M MAD',
      supCMeta: '100% conforme CCTP • 12 jours • Traite 90j',
      comparableCostLabel: 'Coût rendu comparable calculé',
      comparableWinner: 'Fournisseur A — 2,41M MAD (Option optimale vérifiée)',
    },
    problem: {
      eyebrow: 'RÉALITÉ DU SECTEUR',
      headline: 'Les achats de construction restent fragmentés.',
      body:
        'Un projet débute par un bordereau estimatif structuré et s’achève par des arbitrages d’achats dispersés entre classeurs Excel, devis PDF non harmonisés, chaînes d’emails, messages WhatsApp et confirmations verbales.',
      stepBoq: 'Bordereau / DQE',
      stepExcel: 'Classeurs Excel',
      stepEmail: 'Courriels & Pièces jointes',
      stepPdf: 'Devis PDF scannés',
      stepWhatsapp: 'Échanges WhatsApp',
      stepPhone: 'Accords téléphoniques',
      stepRevised: 'Devis révisés',
      stepComparison: 'Comparatif manuel',
      stepPo: 'Bon de commande',
      caption: 'Dispersion de l’information contractuelle lors d’un appel d’offres classique.',
    },
    workflow: {
      eyebrow: 'LE MODÈLE BYLDORA',
      headline: 'Un flux unique. Une seule source de vérité.',
      subheadline:
        'De l’analyse initiale des métrés à l’émission du bon de commande contractuel, chaque étape est structurée, vérifiée et auditable.',
      s1: 'PROJET',
      s1Desc: 'Paramètres du chantier, calendrier et enveloppe budgétaire.',
      s2: 'BPDE / MÉTRÉS',
      s2Desc: 'Extraction des articles, unités, quantités et exigences CCTP.',
      s3: 'ALLOTISSEMENT',
      s3Desc: 'Regroupement en lots techniques cohérents d’exécution.',
      s4: 'CONSULTATION (RFQ)',
      s4Desc: 'Diffusion formalisée aux entreprises qualifiées.',
      s5: 'FOURNISSEURS',
      s5Desc: 'Accès sans barrière technique pour les entreprises régionales.',
      s6: 'DÉPÔT DES DEVIS',
      s6Desc: 'Collecte via portail, fichier Excel annoté ou devis PDF.',
      s7: 'INTELLIGENCE DES OFFRES',
      s7Desc: 'Harmonisation du fret, des variantes et des conditions de règlement.',
      s8: 'ADJUDICATION',
      s8Desc: 'Choix commercial documenté avec piste d’audit opposable.',
      s9: 'BON DE COMMANDE',
      s9Desc: 'Émission immédiate du contrat d’achat avec clauses de retenue.',
    },
    construction: {
      eyebrow: 'PRÉCISION SECTORIELLE',
      headline: 'Conçu pour la réalité opérationnelle du BTP.',
      subheadline:
        'Les achats de construction ne sont pas des commandes e-commerce. BYLDORA intègre nativement les mécanismes contractuels des chantiers.',
      a1Title: 'Bordereaux de Prix & Métrés',
      a1Desc:
        'Gestion fine des décompositions multi-niveaux, métrés détaillés et classifications professionnelles (CSI, Uniclass, normes locales).',
      a2Title: 'Conformité Technique & CCTP',
      a2Desc:
        'Détection des écarts de spécifications, marques proposées en substitution et tolérances thermiques ou mécaniques requises.',
      a3Title: 'Conditions Commerciales & Exclusions',
      a3Desc:
        'Identification des limites de prestations : grutage non inclus, transport départ usine, assurances et retenue de garantie.',
      a4Title: 'Délais & Chemin Critique',
      a4Desc:
        'Alignement rigoureux des dates de livraison requises sur chantier avec les plannings de fabrication en usine.',
      a5Title: 'Qualification Fournisseurs',
      a5Desc:
        'Structuration des références d’entreprises, attestations décennales et historiques d’exécution sur chantiers antérieurs.',
      a6Title: 'Sous-traitance & Fourniture',
      a6Desc:
        'Application des mêmes standards de rigueur pour les lots de fourniture seule que pour les marchés de travaux complets.',
    },
    bidIntel: {
      eyebrow: 'LE DIFFÉRENCIATEUR CLÉ',
      headline: 'Le devis le plus bas n’est pas toujours le moins-disant.',
      subheadline:
        'Dans le BTP, un devis d’affichage omettant le transport ou imposant un décaissement immédiat coûte régulièrement 15 à 25% plus cher que son montant facial.',
      supAHeader: 'Fournisseur A • Atlas Clim',
      supAPrice: '2 410 000 MAD',
      supASpec: '100% conforme au CCTP',
      supATransport: 'Fret sur chantier et grutage toiture inclus',
      supATerms: 'Traite standard 60 jours fin de mois',
      supBHeader: 'Fournisseur B • Maghreb Clim',
      supBPrice: '2 270 000 MAD',
      supBSub: 'Prix facial le plus bas en apparence',
      supBSpec: '92% de conformité (moteur générique substitué)',
      supBTransport: 'Transport départ usine (+120k) & grutage exclu (+65k)',
      supBTerms: 'Acompte 30% puis solde avant expédition',
      supCHeader: 'Fournisseur C • Sahara Thermal',
      supCPrice: '2 490 000 MAD',
      supCSpec: '100% conforme au CCTP',
      supCTransport: 'Logistique intégrale jusqu’au chantier',
      supCTerms: 'Traite différée à 90 jours',
      analysisTitle: 'Paramètres analysés par le moteur BYLDORA :',
      paramTransport: 'Transport & déchargement',
      paramSpec: 'Écarts aux spécifications CCTP',
      paramExclusions: 'Prestations et sujétions exclues',
      paramTerms: 'Impact sur le besoin en fonds de roulement',
      paramLeadTime: 'Risque sur le chemin critique du planning',
      comparableCostHeading: 'COÛT RENDU COMPARABLE RECONCILIÉ',
      supAComp: '2 410 000 MAD',
      supACompNote: 'Offre retenue — Zéro surcoût masqué',
      supBComp: '2 630 000 MAD',
      supBCompNote: '+360 000 MAD d’exclusions et pénalités de rendement',
      supCComp: '2 490 000 MAD',
      supCCompNote: 'Alternative viable avec gain de trésorerie (traite 90j)',
      disclaimer:
        'Exemple illustratif. Les ajustements de coût comparable sont calculés sur la base des exclusions documentées au devis et des paramètres saisis par l’acheteur.',
    },
    emerging: {
      eyebrow: 'ADOPTION PRAGMATIQUE',
      headline: 'Conçu pour les marchés de construction fragmentés.',
      text:
        'BYLDORA est développé pour des environnements où les relations humaines priment, où l’information fournisseur est morcelée et où les offres continuent d’arriver sous forme de classeurs Excel, de pièces jointes PDF, d’emails et de messages WhatsApp.',
      philosophy:
        'BYLDORA s’adapte à l’écosystème commercial existant plutôt que d’exiger de chaque artisan et sous-traitant qu’il modifie ses méthodes de travail.',
      inputChannels: 'PDF • Excel • Email • WhatsApp • Portail Web',
      outputTitle: 'Moteur d’Harmonisation BYLDORA',
      outputSubtitle: 'Données d’achats structurées et opposables',
    },
    audiences: {
      devTitle: 'MAÎTRES D’OUVRAGE & ENTREPRISES GÉNÉRALES',
      devSubtitle: 'Maîtrise budgétaire et sécurité contractuelle',
      devPoints: [
        'Structurer l’ensemble des consultations à partir du bordereau estimatif',
        'Éliminer les heures passées à compiler manuellement des classeurs Excel',
        'Bénéficier d’une visibilité complète sur l’avancement des passations de marchés',
        'Identifier les risques d’approvisionnement et les dérives de spécifications',
        'Constituer une piste d’audit opposable pour les comités d’engagement',
        'Prendre des décisions d’achat rationnelles basées sur le coût réel rendu',
      ],
      devCta: 'Découvrir la plateforme',
      supTitle: 'FOURNISSEURS & SOUS-TRAITANTS',
      supSubtitle: 'Accès fluide aux consultations de référence',
      supPoints: [
        'Recevoir des dossiers de consultation clairs et qualifiés',
        'Répondre sans contrainte logicielle : formulaire web, Excel ou devis PDF',
        'Capitaliser sur les fiches techniques et références déjà validées',
        'Gérer facilement les variantes et les révisions d’offres',
        'Développer un historique d’exécution vérifiable sur les marchés majeurs',
      ],
      supCta: 'Rejoindre le réseau fournisseurs',
    },
    dataMoat: {
      eyebrow: 'INFRASTRUCTURE DE DONNÉES',
      headline: 'Chaque décision d’achat génère de l’intelligence.',
      text:
        'À chaque consultation menée, la plateforme enregistre des données objectives et structurées relatives aux prix unitaires, aux disponibilités industrielles, aux conformités de marques et aux délais réels de livraison.',
      factors: [
        'Prix unitaires réels',
        'Fournisseurs qualifiés',
        'Spécifications techniques',
        'Délais de fabrication',
        'Conditions de paiement',
        'Exécution des livraisons',
        'Fiabilité constatée',
      ],
      step1: 'PROJETS',
      step2: 'TRANSACTIONS',
      step3: 'DONNÉES STRUCTURÉES',
      step4: 'INTELLIGENCE SECTORIELLE',
      step5: 'ACHATS OPTIMISÉS',
    },
    finance: {
      eyebrow: 'HORIZON D’INFRASTRUCTURE FINANCIÈRE',
      headline: 'Les achats structurés créent le socle du financement.',
      text:
        'Lorsque les transactions d’approvisionnement deviennent vérifiables et horodatées, elles constituent la base documentaire nécessaire pour appuyer de nouveaux flux de financement au bénéfice des sous-traitants, des entreprises générales et des maîtres d’ouvrage.',
      f1: 'Projet Vérifié',
      f2: 'Bon de Commande Certifié',
      f3: 'Fournisseur Qualifié',
      f4: 'Livraison Attestée',
      f5: 'Facture Rapprochée',
      f6: 'Financement Structuré',
      disclaimer:
        'Les services de financement constituent une capacité future et nécessiteront des partenaires financiers agréés et/ou des agréments réglementaires selon les juridictions concernées.',
    },
    moroccoFirst: {
      eyebrow: 'ANCRAGE OPÉRATIONNEL',
      headline: 'Démarrage au Maroc. Bâti pour les marchés en croissance.',
      text:
        'Le Maroc constitue le marché opérationnel initial de BYLDORA, avec une architecture produit pensée pour une extension progressive vers l’Afrique du Nord, l’Afrique francophone, le Golfe (CCG) et l’Europe du Sud.',
      regions: 'Casablanca • Rabat • Tanger • Marrakech',
      expansion: 'Extension stratégique : Maghreb • Afrique de l’Ouest • Moyen-Orient • Europe du Sud',
    },
    productShowcase: {
      eyebrow: 'INTERFACE LOGICIELLE',
      headline: 'Un environnement de travail conçu pour les professionnels.',
      subheadline:
        'Des interfaces sobres, denses en données et axées sur l’aide à la décision plutôt que sur des effets de présentation superflus.',
      tabOverview: 'Vue d’ensemble Projet',
      tabPackage: 'Détail du Lot',
      tabRfq: 'Consultation & BPDE',
      tabBidIntel: 'Matrice d’Équivalence',
      tabSupplier: 'Fiche Fournisseur',
    },
    finalCta: {
      eyebrow: 'ENGAGEMENT DU PROCHAIN CYCLE',
      headline: 'Apportez de la rigueur à vos prochains achats.',
      subheadline:
        'Démarrez avec un projet concret. Structurez le processus d’achat à partir de vos bordereaux.',
      primaryCta: 'Démarrer un projet',
      secondaryCta: 'Échanger avec l’équipe BYLDORA',
    },
    footer: {
      descriptor: 'Construction Procurement Intelligence',
      navTitle: 'Navigation',
      legalTitle: 'Informations Légales',
      contactTitle: 'Bureaux',
      rights: 'Tous droits réservés.',
      affiliationText: 'An EM300.co Company',
    },
  },

  // =========================================================================
  // ENGLISH (SECONDARY LANGUAGE)
  // =========================================================================
  en: {
    nav: {
      brandDescriptor: 'CONSTRUCTION PROCUREMENT INTELLIGENCE',
      platform: 'Platform',
      howItWorks: 'How it works',
      intelligence: 'Construction Intelligence',
      forDevelopers: 'For Developers',
      forSuppliers: 'For Suppliers',
      about: 'About',
      contact: 'Contact',
      signIn: 'Sign in',
      startProject: 'Start a Project',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      eyebrow: 'CONSTRUCTION PROCUREMENT INTELLIGENCE',
      headlineLine1: 'Construction procurement,',
      headlineLine2: 'built around the project.',
      subheadline:
        'BYLDORA transforms construction BOQs and project requirements into structured RFQs, comparable supplier bids and intelligent procurement decisions.',
      primaryCta: 'Start a Project',
      secondaryCta: 'See how it works',
      demoNotice: 'Demo project — Illustrative',
      projectName: 'Casablanca Hospitality Development',
      projectBudget: 'Procurement value: MAD 38.4M',
      statusPackages: '27 packages',
      statusRfqs: '18 RFQs issued',
      statusQuotes: '13 quotations received',
      statusAwards: '5 awards',
      tableColPackage: 'Package',
      tableColSuppliers: 'Suppliers',
      tableColLowest: 'Lowest quote',
      tableColComparable: 'Comparable cost',
      tableColStatus: 'Status',
      statusEvaluation: 'Evaluation',
      statusAwarded: 'Awarded',
      statusReview: 'Review',
      bidIntelTitle: 'Bid intelligence — Specification & Landed Cost Analysis',
      supAName: 'Supplier A (Atlas Clim)',
      supAPrice: 'MAD 2.41M',
      supAMeta: '100% technical compliance • 21 days • 60-day terms',
      supBName: 'Supplier B (Maghreb Clim)',
      supBPrice: 'MAD 2.27M',
      supBMeta: '92% technical compliance • 30 days • 30-day terms',
      supBExclusions: '3 exclusions (unquoted freight from Tangier, crane hoist)',
      supCName: 'Supplier C (Sahara Thermal)',
      supCPrice: 'MAD 2.49M',
      supCMeta: '100% technical compliance • 12 days • 90-day terms',
      comparableCostLabel: 'Comparable Landed Cost Adjudication',
      comparableWinner: 'Supplier A — MAD 2.41M (Verified lowest landed cost)',
    },
    problem: {
      eyebrow: 'INDUSTRY REALITY',
      headline: 'Construction procurement is still fragmented.',
      body:
        'A project can begin with a structured BOQ and end with procurement decisions scattered across Excel files, PDFs, emails, WhatsApp conversations and supplier quotations.',
      stepBoq: 'BOQ',
      stepExcel: 'Excel',
      stepEmail: 'Email',
      stepPdf: 'PDF',
      stepWhatsapp: 'WhatsApp',
      stepPhone: 'Phone',
      stepRevised: 'Revised quotation',
      stepComparison: 'Manual comparison',
      stepPo: 'Purchase order',
      caption: 'Dispersion of commercial contract truth during traditional tender adjudication.',
    },
    workflow: {
      eyebrow: 'THE BYLDORA MODEL',
      headline: 'One procurement workflow. One source of truth.',
      subheadline:
        'From initial bill of quantities to finalized purchase orders, every milestone is structured, verified, and defensible.',
      s1: 'PROJECT',
      s1Desc: 'Baseline project milestones, site location, and capital allocation.',
      s2: 'BOQ',
      s2Desc: 'Structured extraction of line items, units, quantities, and CCTP specs.',
      s3: 'PROCUREMENT PACKAGES',
      s3Desc: 'Logical grouping into trade-specific execution packages.',
      s4: 'RFQ / RFP',
      s4Desc: 'Dissemination with strict submission criteria and commercial terms.',
      s5: 'SUPPLIERS',
      s5Desc: 'Frictionless engagement with pre-qualified regional vendors.',
      s6: 'QUOTES',
      s6Desc: 'Omnichannel ingestion via online portal, spreadsheet, or PDF sheets.',
      s7: 'BID INTELLIGENCE',
      s7Desc: 'Reconciliation of unquoted freight, substitutions, and payment credit.',
      s8: 'AWARD',
      s8Desc: 'Defensible commercial selection backed by verified transaction audits.',
      s9: 'PURCHASE ORDER',
      s9Desc: 'Direct contract-ready PO issuance with statutory retention clauses.',
    },
    construction: {
      eyebrow: 'DOMAIN DEPTH',
      headline: 'Built for the way construction is actually procured.',
      subheadline:
        'Generic procurement software treats orders like simple retail shopping carts. BYLDORA is engineered around the deep, messy realities of technical building contracts.',
      a1Title: 'BOQ & Métrés',
      a1Desc:
        'Understand quantities, units, and hierarchical division schedules (CSI MasterFormat, Uniclass, POMI).',
      a2Title: 'Technical Compliance',
      a2Desc:
        'Identify specification deviations, proposed brand substitutions, and thermal/acoustic tolerances.',
      a3Title: 'Commercial Terms',
      a3Desc:
        'Compare payment terms, retention bonds (5–10%), transport boundaries, and unquoted exclusions.',
      a4Title: 'Lead Times',
      a4Desc:
        'Connect procurement award dates directly to critical-path jobsite installation milestones.',
      a5Title: 'Suppliers',
      a5Desc:
        'Structure verified vendor performance, insurance certificates, and past execution track records.',
      a6Title: 'Subcontracting',
      a6Desc:
        'Manage trade subcontractor packages with the same rigorous logic as material procurement.',
    },
    bidIntel: {
      eyebrow: 'THE CORE DIFFERENTIATOR',
      headline: 'The lowest quote is not always the lowest cost.',
      subheadline:
        'In construction procurement, an unscrutinized quote with missing scope or unfavorable cash advances regularly causes 15–30% budget overruns.',
      supAHeader: 'Supplier A • Atlas Clim',
      supAPrice: 'MAD 2.41M',
      supASpec: '100% specification match',
      supATransport: 'Freight to jobsite and crane hoisting included',
      supATerms: 'Standard 60-day commercial terms',
      supBHeader: 'Supplier B • Maghreb Clim',
      supBPrice: 'MAD 2.27M',
      supBSub: 'Apparent lowest headline quote',
      supBSpec: '92% specification match (substituted generic motor)',
      supBTransport: 'Transport excluded (+120k) & crane excluded (+65k)',
      supBTerms: 'Unfavorable advance cash payments (30% upfront)',
      supCHeader: 'Supplier C • Sahara Thermal',
      supCPrice: 'MAD 2.49M',
      supCSpec: '100% specification match',
      supCTransport: 'All logistics included to jobsite',
      supCTerms: '90-day extended payment credit',
      analysisTitle: 'BYLDORA Intelligence Engine evaluates:',
      paramTransport: 'Jobsite transport & offloading',
      paramSpec: 'Technical specification deviations',
      paramExclusions: 'Excluded scope & hoist hire',
      paramTerms: 'Working capital and cashflow impact',
      paramLeadTime: 'Critical-path schedule risk',
      comparableCostHeading: 'COMPARABLE LANDED COST',
      supAComp: 'MAD 2.41M',
      supACompNote: 'Awarded offer — Optimal defensible choice',
      supBComp: 'MAD 2.63M',
      supBCompNote: '+MAD 360,000 in unquoted exclusions and lifecycle losses',
      supCComp: 'MAD 2.49M',
      supCCompNote: 'Viable second source with 90-day liquidity advantage',
      disclaimer:
        'Illustrative example. Comparable-cost adjustments are based on documented quote differences and buyer inputs.',
    },
    emerging: {
      eyebrow: 'PRAGMATIC ADOPTION',
      headline: 'Built for fragmented construction markets.',
      text:
        'BYLDORA is designed for markets where procurement is relationship-driven, supplier information is fragmented and quotations still arrive through Excel, PDF, email and WhatsApp.',
      philosophy:
        'BYLDORA adapts to the existing procurement ecosystem rather than requiring every participant to change how they work.',
      inputChannels: 'PDF • Excel • Email • WhatsApp • Web',
      outputTitle: 'BYLDORA Intelligence Engine',
      outputSubtitle: 'Structured, verifiable procurement data',
    },
    audiences: {
      devTitle: 'DEVELOPERS & GENERAL CONTRACTORS',
      devSubtitle: 'Commercial control and auditable purchasing',
      devPoints: [
        'Structure procurement directly from project bill of quantities',
        'Eliminate weeks spent on manual spreadsheet reconciliation',
        'Improve operational visibility across all ongoing trade packages',
        'Track procurement lead-time risks before site delays occur',
        'Create defensible audit trails for investment committees and banks',
        'Improve purchasing decisions through true landed economics',
      ],
      devCta: 'Explore the platform',
      supTitle: 'SUPPLIERS & SUBCONTRACTORS',
      supSubtitle: 'Frictionless engagement with premier projects',
      supPoints: [
        'Receive structured, qualified RFQs matched to your trade capacity',
        'Respond digitally without software friction: web portal, Excel or PDF',
        'Reuse verified company information, compliance certificates, and specs',
        'Manage quotation revisions and technical addenda seamlessly',
        'Build a verified transaction history across major developments',
      ],
      supCta: 'Become a supplier',
    },
    dataMoat: {
      eyebrow: 'DATA INFRASTRUCTURE',
      headline: 'Every procurement decision creates intelligence.',
      text:
        'With every completed tender, the platform compiles objective data points around unit rates, supplier fulfillment, material specifications, and real lead times.',
      factors: [
        'Unit prices',
        'Suppliers',
        'Specifications',
        'Lead times',
        'Payment terms',
        'Delivery',
        'Performance',
      ],
      step1: 'PROJECTS',
      step2: 'TRANSACTIONS',
      step3: 'STRUCTURED DATA',
      step4: 'MARKET INTELLIGENCE',
      step5: 'BETTER PROCUREMENT',
    },
    finance: {
      eyebrow: 'FINANCIAL INFRASTRUCTURE HORIZON',
      headline: 'Procurement creates the foundation for finance.',
      text:
        'Once procurement transactions become structured and verifiable, they can eventually support new financial workflows for suppliers, contractors and project owners.',
      f1: 'Verified Project',
      f2: 'Verified PO',
      f3: 'Verified Supplier',
      f4: 'Verified Delivery',
      f5: 'Verified Invoice',
      f6: 'Potential financing',
      disclaimer:
        'Financial products are a future capability and may require regulated financial partners and/or licensing depending on jurisdiction.',
    },
    moroccoFirst: {
      eyebrow: 'REGIONAL FOUNDATION',
      headline: 'Starting in Morocco. Built for fragmented construction markets.',
      text:
        'Morocco provides the initial operating market, with a product architecture designed for expansion across North Africa, Francophone Africa, the GCC and Southern Europe.',
      regions: 'Casablanca • Rabat • Tangier • Marrakech',
      expansion: 'Strategic expansion: Maghreb • West Africa • GCC • Southern Europe',
    },
    productShowcase: {
      eyebrow: 'SOFTWARE INTERFACE',
      headline: 'Engineered for institutional procurement teams.',
      subheadline:
        'Compact, data-dense interfaces focused on commercial adjudication rather than decorative visual elements.',
      tabOverview: 'Project Overview',
      tabPackage: 'Procurement Package',
      tabRfq: 'RFQ Builder',
      tabBidIntel: 'Bid Intelligence',
      tabSupplier: 'Supplier Profile',
    },
    finalCta: {
      eyebrow: 'DEPLOY INTELLIGENCE',
      headline: 'Bring intelligence to your next procurement cycle.',
      subheadline:
        'Start with a project. Build the procurement workflow around the data.',
      primaryCta: 'Start a Project',
      secondaryCta: 'Talk to BYLDORA',
    },
    footer: {
      descriptor: 'Construction Procurement Intelligence',
      navTitle: 'Navigation',
      legalTitle: 'Legal',
      contactTitle: 'Offices',
      rights: 'All rights reserved.',
      affiliationText: 'An EM300.co Company',
    },
  },

  // =========================================================================
  // ARABIC (THIRD LANGUAGE)
  // =========================================================================
  ar: {
    nav: {
      brandDescriptor: 'منظومة إدارة مشتريات البناء والتشييد',
      platform: 'المنصة',
      howItWorks: 'كيف تعمل',
      intelligence: 'ذكاء المشتريات',
      forDevelopers: 'للمطورين والمقاولين',
      forSuppliers: 'للموردين',
      about: 'عن بيلدورا',
      contact: 'اتصل بنا',
      signIn: 'تسجيل الدخول',
      startProject: 'ابدأ مشروعاً',
      menu: 'القائمة',
      close: 'إغلاق',
    },
    hero: {
      eyebrow: 'منظومة إدارة مشتريات البناء والتشييد',
      headlineLine1: 'مشتريات البناء والتشييد،',
      headlineLine2: 'مبنية وفق احتياجات المشروع.',
      subheadline:
        'تحوّل بيلدورا جداول الكميات والمواصفات (BOQ) إلى مناقصات منظمة، ومقارنات عادلة لعروض الأسعار، وقرارات شراء موثوقة.',
      primaryCta: 'ابدأ مشروعاً',
      secondaryCta: 'اكتشف كيف تعمل',
      demoNotice: 'مشروع توضيحي — تجريبي',
      projectName: 'مشروع المجمع الفندقي بالدار البيضاء',
      projectBudget: 'قيمة المشتريات: 38.4 مليون درهم',
      statusPackages: '27 حزمة أعمال',
      statusRfqs: '18 مناقصة صادرة',
      statusQuotes: '13 عرض سعر مستلم',
      statusAwards: '5 حزم تمت ترسيتها',
      tableColPackage: 'حزمة العمل',
      tableColSuppliers: 'الموردون',
      tableColLowest: 'أقل سعر ظاهري',
      tableColComparable: 'التكلفة المقارنة الحقيقية',
      tableColStatus: 'الحالة',
      statusEvaluation: 'قيد التقييم',
      statusAwarded: 'تمت الترسية',
      statusReview: 'مراجعة فنية',
      bidIntelTitle: 'ذكاء العروض — تقييم التكلفة الحقيقية والمطابقة الفنية',
      supAName: 'المورد أ (أطلس للتكييف)',
      supAPrice: '2.41 مليون درهم',
      supAMeta: 'مطابقة تامة 100% • 21 يوماً • تسهيل 60 يوماً',
      supBName: 'المورد ب (مغرب للتكييف)',
      supBPrice: '2.27 مليون درهم (ظاهري)',
      supBMeta: 'مطابقة 92% • 30 يوماً • دفع نقدي مسبق',
      supBExclusions: '3 استثناءات غير مسعرة (نقل من طنجة، رافعة الموقع)',
      supCName: 'المورد ج (صحراء ثيرمال)',
      supCPrice: '2.49 مليون درهم',
      supCMeta: 'مطابقة تامة 100% • 12 يوماً • تسهيل 90 يوماً',
      comparableCostLabel: 'التكلفة الحقيقية المقارنة المحسوبة',
      comparableWinner: 'المورد أ — 2.41 مليون درهم (الخيار الأفضل المعتمد)',
    },
    problem: {
      eyebrow: 'واقع القطاع',
      headline: 'مشتريات البناء ما زالت مجزأة وغير مترابطة.',
      body:
        'يبدأ المشروع بجدول كميات منظم، لكن قرارات الشراء تنتهي مشتتة بين ملفات إكسل، ومستندات PDF، والبريد الإلكتروني، ومحادثات واتساب والاتصالات الشفهية.',
      stepBoq: 'جدول الكميات BOQ',
      stepExcel: 'ملفات Excel',
      stepEmail: 'البريد الإلكتروني',
      stepPdf: 'عروض PDF الممسوحة',
      stepWhatsapp: 'محادثات WhatsApp',
      stepPhone: 'المكالمات الشفهية',
      stepRevised: 'العروض المعدلة',
      stepComparison: 'المقارنة اليدوية',
      stepPo: 'أمر الشراء PO',
      caption: 'تشتت البيانات التعاقدية في مسار المناقصات التقليدي.',
    },
    workflow: {
      eyebrow: 'نموذج بيلدورا',
      headline: 'مسار موحد للمشتريات. مصدر وحيد للحقيقة التعاقدية.',
      subheadline:
        'من تدقيق جدول الكميات إلى إصدار أمر الشراء المعتمد، كل خطوة منظمة وموثقة ومحمية.',
      s1: 'المشروع',
      s1Desc: 'تحديد معالم المشروع والموقع والموازنة المرصودة.',
      s2: 'جدول الكميات BOQ',
      s2Desc: 'استخراج تلقائي لبنود الأعمال والكميات والمواصفات الفنية.',
      s3: 'حزم الأعمال',
      s3Desc: 'توزيع البنود في حزم تخصصية واضحة (مدني، كهروميكانيك، تشطيبات).',
      s4: 'طلب عروض الأسعار RFQ',
      s4Desc: 'إصدار المناقصات للموردين المعتمدين وفق شروط تسليم محددة.',
      s5: 'الموردون',
      s5Desc: 'مشاركة سلسة دون متطلبات برمجية معقدة.',
      s6: 'استلام العروض',
      s6Desc: 'استقبال العروض عبر المنصة أو ملفات إكسل أو مستندات PDF.',
      s7: 'ذكاء العروض',
      s7Desc: 'معادلة تكاليف النقل والاستثناءات وشروط الدفع.',
      s8: 'الترسية',
      s8Desc: 'اختيار تجاري مدعوم بسجل تدقيق لا يقبل الشك.',
      s9: 'أمر الشراء PO',
      s9Desc: 'إصدار أوامر الشراء الفورية المتضمنة ضمانات حسن التنفيذ.',
    },
    construction: {
      eyebrow: 'العمق الهندسي',
      headline: 'مبنية وفق الآلية الحقيقية لصفقات الإنشاءات.',
      subheadline:
        'برمجيات الشراء العامة تعامل مشاريع البناء كطلبات تسوق عادية. بيلدورا مصممة خصيصاً وفق المتطلبات الفنية والتعاقدية لقطاع التشييد.',
      a1Title: 'جداول الكميات والمتر المربع',
      a1Desc:
        'فهم دقيق للتقسيمات متعددة المستويات، والمواصفات المعيارية المعتمدة.',
      a2Title: 'المطابقة الفنية والمواصفات CCTP',
      a2Desc:
        'رصد الفروقات الفنية، والمواد البديلة المقترحة، ومعايير الكفاءة المطلوبة.',
      a3Title: 'الشروط التجارية والاستثناءات',
      a3Desc:
        'كشف حدود التوريد: كأجور النقل ومعدات الرفع في الموقع وضمانات الصيانة.',
      a4Title: 'مواعيد التوريد والمسار الحرج',
      a4Desc:
        'ربط مواعيد التوريد بالجدول الزمني لتنفيذ المشروع في الموقع لمنع التأخير.',
      a5Title: 'سجل الموردين والمقاولين',
      a5Desc:
        'توثيق بيانات التأهيل، وشهادات التأمين، وسوابق الأعمال المنجزة.',
      a6Title: 'المقاولات الفرعية والتوريدات',
      a6Desc:
        'إدارة حزم مقاولي الباطن بنفس دقة ومعايير توريدات المواد والمعدات.',
    },
    bidIntel: {
      eyebrow: 'الفارق الجوهري',
      headline: 'عرض السعر الأقل ليس دائماً التكلفة الأقل.',
      subheadline:
        'في قطاع البناء، قبول عرض سعر دون تدقيق الاستثناءات وشروط الدفع يتسبب في زيادة التكاليف بنسبة 15 إلى 30%.',
      supAHeader: 'المورد أ • أطلس للتكييف',
      supAPrice: '2,410,000 درهم',
      supASpec: 'مطابقة تامة 100% للمواصفات',
      supATransport: 'شامل التوصيل إلى موقع المشروع والرفع بالرافعة',
      supATerms: 'تسهيل تجاري 60 يوماً من تاريخ التوريد',
      supBHeader: 'المورد ب • مغرب للتكييف',
      supBPrice: '2,270,000 درهم',
      supBSub: 'الأقل سعراً في الظاهر فقط',
      supBSpec: 'مطابقة 92% (استبدال محرك بتصميم تجاري)',
      supBTransport: 'تسليم أرض المصنع (+120 ألف) والرافعة مستثناة (+65 ألف)',
      supBTerms: 'شروط دفع مسبقة (30% دفعة أولى ثم الباقي قبل الشحن)',
      supCHeader: 'المورد ج • صحراء ثيرمال',
      supCPrice: '2,490,000 درهم',
      supCSpec: 'مطابقة تامة 100% للمواصفات',
      supCTransport: 'شامل كافة الخدمات اللوجستية إلى الموقع',
      supCTerms: 'تسهيل دفع مؤجل لمدة 90 يوماً',
      analysisTitle: 'المعايير التي يحللها محرك بيلدورا الذكي:',
      paramTransport: 'أجور النقل والتفريغ في الموقع',
      paramSpec: 'الفروقات عن المواصفات الفنية المعتمدة',
      paramExclusions: 'البنود المستثناة وأجور الرافعات',
      paramTerms: 'أثر شروط الدفع على السيولة ورأس المال العامل',
      paramLeadTime: 'مخاطر مواعيد التوريد على الجدول الزمني للمشروع',
      comparableCostHeading: 'التكلفة المقارنة الحقيقية بعد التسوية',
      supAComp: '2,410,000 درهم',
      supACompNote: 'العرض الفائز المعتمد — خالٍ من الأعباء الخفية',
      supBComp: '2,630,000 درهم',
      supBCompNote: '+360,000 درهم فروقات استثناءات وخسائر تشغيلية',
      supCComp: '2,490,000 درهم',
      supCCompNote: 'خيار بديل ملائم مع ميزة سيولة (دفع بعد 90 يوماً)',
      disclaimer:
        'مثال توضيحي. يتم احتساب التكلفة المقارنة بناءً على الاستثناءات الموثقة في العرض ومدخلات مسؤول المشتريات.',
    },
    emerging: {
      eyebrow: 'تبني عملي للواقع',
      headline: 'مصممة للأسواق الإنشائية النامية.',
      text:
        'صُممت بيلدورا للأسواق التي تعتمد على العلاقات المباشرة وتعدد القنوات، حيث ترد عروض الأسعار عبر ملفات إكسل والبريد الإلكتروني ومستندات PDF ورسائل واتساب.',
      philosophy:
        'تتكيف بيلدورا مع عادات العمل الحالية للشركات والموردين دون فرض برمجيات معقدة تلزمهم بتغيير أسلوب عملهم.',
      inputChannels: 'PDF • Excel • Email • WhatsApp • بوابة الويب',
      outputTitle: 'محرك بيلدورا للمعالجة الذكية',
      outputSubtitle: 'بيانات مشتريات موحدة وموثقة وقابلة للتدقيق',
    },
    audiences: {
      devTitle: 'المطورون العقاريون والمقاولون الرئيسيون',
      devSubtitle: 'حوكمة المشتريات وشفافية القرارات التعاقدية',
      devPoints: [
        'تنظيم المناقصات مباشرة من واقع جدول الكميات والمواصفات',
        'توفير أسابيع من الجهد اليدوي لمطابقة الجداول وحساب الفروقات',
        'متابعة شاملة لتقدم حزم المشتريات في الوقت الفعلي',
        'رصد مخاطر التوريد ومخالفة المواصفات قبل حدوث التأخير',
        'تأسيس سجل تدقيق معتمد للجان الاستثمار والجهات التمويلية',
        'اتخاذ قرارات شراء مدروسة مبنية على التكلفة الحقيقية',
      ],
      devCta: 'استكشف المنصة',
      supTitle: 'الموردون ومقاولو الباطن',
      supSubtitle: 'تفاعل سلس مع كبرى المشاريع الإنشائية',
      supPoints: [
        'استلام طلبات عروض أسعار واضحة ومطابقة لاختصاصك',
        'تقديم العروض دون تعقيد: عبر الرابط المباشر، أو ملفات Excel، أو PDF',
        'إعادة استخدام بيانات الاعتماد والشهادات الفنية المعتمدة',
        'إدارة التعديلات الفنية وإصدارات الأسعار بسهولة تامة',
        'بناء سجل تعاملات موثوق مع كبار المطورين والمقاولين',
      ],
      supCta: 'انضم كـمورد معتمد',
    },
    dataMoat: {
      eyebrow: 'البنية التحتية للبيانات',
      headline: 'كل قرار شراء يبني رصيداً من المعرفة والذكاء.',
      text:
        'مع كل مناقصة تكتمل، تجمع المنصة بيانات موثقة حول أسعار البنود، وسرعة استجابة الموردين، ومطابقة المواصفات، ومواعيد التسليم الفعلية.',
      factors: [
        'الأسعار الوحدوية',
        'الموردون المعتمدون',
        'المواصفات الفنية',
        'فترات التصنيع والتوريد',
        'شروط الدفع والتسهيلات',
        'معدل الالتزام بالتسليم',
        'كفاءة الأداء الفعلي',
      ],
      step1: 'المشاريع',
      step2: 'الصفقات',
      step3: 'البيانات المنظمة',
      step4: 'ذكاء السوق',
      step5: 'مشتريات أفضل',
    },
    finance: {
      eyebrow: 'أفق البنية التحتية المالية',
      headline: 'تنظيم المشتريات يؤسس لحلول التمويل المستقبلي.',
      text:
        'عندما تتحول عمليات الشراء إلى معاملات موثقة ومؤرخة رقمياً، فإنها تشكل القاعدة اللازمة لتسهيل حلول التمويل وسلاسل الإمداد للموردين والمقاولين وأصحاب المشاريع.',
      f1: 'مشروع معتمد',
      f2: 'أمر شراء موثق',
      f3: 'مورد مؤهل',
      f4: 'استلام مؤكد في الموقع',
      f5: 'فاتورة مطابقة',
      f6: 'تمويل مستقبلي منظم',
      disclaimer:
        'الخدمات التمويلية تمثل إمكانية مستقبلية وتتطلب شراكات مع مؤسسات مالية مرخصة وفق القوانين والأنظمة المعمول بها في كل بلد.',
    },
    moroccoFirst: {
      eyebrow: 'الانطلاق الإقليمي',
      headline: 'الانطلاق من المغرب. مصممة للأسواق سريعة النمو.',
      text:
        'يمثل المغرب السوق التشغيلي الأول لبيلدورا، مع بنية برمجية مصممة للتوسع نحو شمال إفريقيا وإفريقيا الفرنكوفونية ودول الخليج وجنوب أوروبا.',
      regions: 'الدار البيضاء • الرباط • طنجة • مراكش',
      expansion: 'خطة التوسع: المغرب العربي • غرب إفريقيا • دول الخليج • جنوب أوروبا',
    },
    productShowcase: {
      eyebrow: 'واجهة المنصة',
      headline: 'بيئة عمل مصممة لمديري المشتريات والمشاريع.',
      subheadline:
        'واجهات واضحة، عالية الكثافة المعلوماتية، مكرسة لاتخاذ القرارات دون أي عناصر زخرفية غير ضرورية.',
      tabOverview: 'نظرة عامة على المشروع',
      tabPackage: 'تفاصيل حزمة العمل',
      tabRfq: 'إعداد المناقصة وجدول الكميات',
      tabBidIntel: 'مصفوفة ذكاء العروض',
      tabSupplier: 'ملف المورد المعتمد',
    },
    finalCta: {
      eyebrow: 'تفعيل المنظومة',
      headline: 'أضف الدقة والذكاء لدورة مشترياتك القادمة.',
      subheadline:
        'ابدأ بمشروع حقيقي. ابنِ مسار المشتريات انطلاقاً من جدول الكميات الخاص بك.',
      primaryCta: 'ابدأ مشروعاً',
      secondaryCta: 'تحدث مع فريق بيلدورا',
    },
    footer: {
      descriptor: 'منظومة إدارة مشتريات البناء والتشييد',
      navTitle: 'الروابط',
      legalTitle: 'الشروط والخصوصية',
      contactTitle: 'المكاتب',
      rights: 'جميع الحقوق محفوظة.',
      affiliationText: 'An EM300.co Company',
    },
  },
};
