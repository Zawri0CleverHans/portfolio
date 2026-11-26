export const profile = {
  name: 'Qadeer Zawri',
  role: 'Machine Learning Engineer',
  tagline:
    'I’m an engineer and researcher who likes to build, test things until they break, dig into the data to figure out why, and rebuild them stronger. Currently working across machine learning and empirical economics, I turn messy, real-world problems into models and systems that survive contact with reality.',
  location: 'Lahore, Pakistan',
  email: 'zawriqadeer@gmail.com',
  phone: '+92 336 3190106',
  github: 'https://github.com/Zawri0CleverHans',
  githubHandle: 'github.com/Zawri0CleverHans',
  xUrl: 'https://x.com/QadeerZawri',
  xHandle: '@QadeerZawri',
  education: {
    institution: 'University of the Punjab',
    degree: 'BBE (Bachelor of Business Economics)',
    location: 'Lahore, Pakistan',
  },
  resumePath: `${import.meta.env.BASE_URL}Qadeer_Zawri_Resume.pdf`,
  bannerPath: `${import.meta.env.BASE_URL}banner.jpg`,
};

export const heroHighlights = [
  {
    label: 'Current Role',
    value: 'ML Engineer · ArgonTech',
    detail: 'PyTorch, Hugging Face & W&B production pipelines',
  },
  {
    label: 'Strategy & Growth',
    value: 'Ex-Technical Strategist · Brown Tech Int.',
    detail: 'Scoped software & data solutions for US SMEs',
  },
  {
    label: 'Board & Community',
    value: 'Sabira Foundation · OMLAS',
    detail: 'Board Director & grassroots AI literacy lead',
  },
];

export const caseStudies = [
  {
    id: 'chile-learning-research',
    category: 'Empirical Research',
    timeframe: 'PSLM / HIES 2024–2025',
    role: 'Lead ML & Econometric Researcher',
    title: 'Chile Learning Research',
    subtitle: 'Modeling child learning competency and maternal empowerment across 29,694 households.',
    context:
      'Empirical education studies often rely on linear assumptions or leak household signals across splits, obscuring how maternal literacy, digital access, and household wealth jointly relate to child learning competency (ages 10–16).',
    approach:
      'Built a three-stage Python pipeline: clean Parquet ETL with 5-category paternal taxonomy and native NaNs, household-grouped splits (GroupShuffleSplit) for zero leakage, survey-weighted XGBoost/Random Forest/Logit/MLP tuned with Optuna, and two appendix robustness subsamples (Resident-Father N=25,850; Observed-Autonomy N=20,202).',
    impact:
      'Champion XGBoost reached 0.8302 survey-weighted Test ROC-AUC (65.97% recall on learning-deficient children vs. 38.51% for MLP). Grouped Macro-Block SHAP maintained the exact same #1–#6 rank order across all three cohorts.',
    metrics: [
      { label: 'Main Cohort', value: 'N = 29,694' },
      { label: 'Weighted ROC-AUC', value: '0.8302' },
      { label: 'Maternal Share (Blocks 2+5)', value: '33.28%' },
    ],
    tech: ['XGBoost', 'SHAP', 'Optuna', 'Scikit-Learn', 'Survey Weights', 'Parquet ETL'],
    highlights: [
      'Zero-leakage household-grouped 80/20 split (23,824 train / 5,870 untouched test children, 0 overlapping households).',
      'Model-specific missingness routing: native NaN splits for tree models vs. train-only mean imputation + StandardScaler for Logit/MLP.',
      'Combined Relative SHAP (%) with raw |SHAP| and Grouped Macro-Block attribution to resolve collinearity dilution across correlated education features.',
    ],
    shapBreakdown: [
      { rank: 1, block: 'Household Wealth Standards', main: 35.25, vars: 18 },
      { rank: 2, block: 'Maternal Education & Digital Access', main: 27.51, vars: 4 },
      { rank: 3, block: 'Paternal Capital & Employment Taxonomy', main: 16.24, vars: 9 },
      { rank: 4, block: 'Regional Geography & Infrastructure', main: 10.27, vars: 7 },
      { rank: 5, block: 'Maternal Financials & Autonomy', main: 5.78, vars: 14 },
      { rank: 6, block: 'Child Sibling & Household Demographics', main: 4.95, vars: 7 },
    ],
  },
  {
    id: 'semantic-search-engine',
    category: 'ML Engineering',
    timeframe: 'NLP & Information Retrieval',
    role: 'ML Systems Architect',
    title: 'Semantic Code & Document Search Engine',
    subtitle: 'Sub-millisecond dense vector retrieval across multi-thousand text and code repositories.',
    context:
      'Traditional keyword and regex search breaks down on large, unstructured engineering repositories and technical corpora where intent matters more than exact token overlap.',
    approach:
      'Engineered an end-to-end semantic retrieval pipeline using pooled Sentence Transformer representations, batched vector extraction via Hugging Face Dataset.map() over memory-mapped Apache Arrow tables, and normalized FAISS vector indexing.',
    impact:
      'Enabled sub-millisecond nearest-neighbor (k-NN) semantic retrieval with cosine and inner-product similarity metrics across multi-thousand document corpora.',
    metrics: [
      { label: 'Query Latency', value: '< 1 ms (k-NN)' },
      { label: 'Index Backend', value: 'FAISS' },
      { label: 'Storage Layer', value: 'Apache Arrow' },
    ],
    tech: ['Python', 'Hugging Face Datasets', 'Sentence Transformers', 'FAISS', 'PyTorch'],
    highlights: [
      'Batched embedding extraction via Dataset.map() to maximize throughput without exhausting memory.',
      'L2-normalized dense embeddings supporting fast cosine and inner-product similarity queries.',
      'Unified retrieval interface spanning both natural-language documents and source code.',
    ],
  },
  {
    id: 'llm-finetuning-diagnostic',
    category: 'ML Engineering',
    timeframe: 'Transformers & LLMOps',
    role: 'Lead ML Engineer',
    title: 'Production Transformer & LLM Fine-Tuning Diagnostic Engine',
    subtitle: 'Dual PyTorch/Accelerate and Trainer pipelines engineered to prevent silent label loss and overfitting.',
    context:
      'Fine-tuning Transformers on long, variable-length corpora often drops tail context silently or masks validation overfitting when relying solely on aggregate epoch loss.',
    approach:
      'Architected dual training pipelines—a native PyTorch loop using Accelerate, AdamW, and linear decay scheduling alongside a declarative Hugging Face Trainer setup. Added overflow_to_sample_mapping token chunking, dynamic padding collators, and live Weights & Biases telemetry.',
    impact:
      'Preserved document labels across long sequences without information loss and diagnosed continuous loss vs. discrete accuracy divergence to trigger EarlyStoppingCallback at peak generalization.',
    metrics: [
      { label: 'Pipelines', value: 'Accelerate + Trainer' },
      { label: 'Tokenization', value: 'Overflow Chunking' },
      { label: 'Observability', value: 'Live W&B' },
    ],
    tech: ['PyTorch', 'Transformers', 'Accelerate', 'Evaluate', 'Weights & Biases'],
    highlights: [
      'Rust-backed Fast Tokenizers paired with DataCollatorWithPadding for high GPU utilization.',
      'Long-document chunking using return_overflowing_tokens and overflow_to_sample_mapping.',
      'Real-time validation loss vs. accuracy curve tracking to halt training before generalization degrades.',
    ],
  },
  {
    id: 'ipo-gain-predictor',
    category: 'ML Engineering',
    timeframe: 'Cross-Market Finance',
    role: 'Deep Learning Engineer',
    title: 'IPO Gain Predictor',
    subtitle: 'Multi-stage deep neural network forecasting IPO underpricing across Indian and US markets.',
    context:
      'Public listing performance reflects noisy interactions between pre-IPO fundamentals, venture backing, macroeconomic conditions, and market sentiment across differing regulatory regimes.',
    approach:
      'Developed a multi-stage deep neural network in PyTorch and Scikit-Learn that ingests structured financial disclosures, historical venture metrics, macro indicators, and extracted sentiment vectors.',
    impact:
      'Delivered unified multi-class listing-day performance predictions and underpricing estimates across both Indian and US equity listings.',
    metrics: [
      { label: 'Markets', value: 'US & India' },
      { label: 'Architecture', value: 'Multi-Stage DNN' },
      { label: 'Task', value: 'Multi-Class + Gain' },
    ],
    tech: ['PyTorch', 'Scikit-Learn', 'Python', 'Pandas', 'NumPy'],
    highlights: [
      'Harmonized heterogeneous pre-IPO financial disclosures and venture funding histories across two markets.',
      'Combined tabular financial engineering with market sentiment vectors in a staged PyTorch architecture.',
    ],
  },
  {
    id: 'digital-loralai',
    category: 'Impact & Strategy',
    timeframe: 'OMLAS Impact Project',
    role: 'Program Architect & Lead Trainer',
    title: 'Digital Loralai: AI Literacy & Future Skills',
    subtitle: '4-week grassroots capacity-building initiative training 70 students in remote economies.',
    context:
      'College and university students in underserved regions like Loralai often lack structured exposure to practical AI workflows needed for modern academic research and remote digital work.',
    approach:
      'Designed and spearheaded a 4-week hands-on capacity-building program under the OMLAS (One Million Leaders Asia) framework, focused on applied AI literacy rather than abstract theory.',
    impact:
      'Mobilized and trained a cohort of 70 local college and university students on practical AI tools for academic research, concept synthesis, professional communication, and remote employment readiness.',
    metrics: [
      { label: 'Students Trained', value: '70' },
      { label: 'Duration', value: '4 Weeks' },
      { label: 'Framework', value: 'OMLAS' },
    ],
    tech: ['Community Mobilization', 'AI Literacy', 'Capacity Building', 'Systems Thinking'],
    highlights: [
      'Curriculum tailored for real-world constraints in remote digital economies.',
      'Covered structured research synthesis, professional communication, and applied AI workflows.',
    ],
  },
];

export const experiences = [
  {
    role: 'Machine Learning Engineer',
    company: 'ArgonTech',
    location: 'Lahore, Pakistan',
    period: 'Mar 2026 – Present',
    focus: 'Production ML & NLP Engineering',
    summary:
      'Architecting end-to-end training and tokenization pipelines for production NLP systems.',
    bullets: [
      'Designed and deployed production-grade ML and NLP pipelines using PyTorch and Hugging Face (declarative Trainer workflows and custom Accelerate loops).',
      'Optimized preprocessing throughput using Rust-backed Fast Tokenizers, batched mapping, and dynamic padding (DataCollatorWithPadding) for high GPU utilization.',
      'Integrated Weights & Biases (W&B) experiment tracking and automated EarlyStoppingCallback routines to diagnose loss curves and eliminate validation overfitting.',
    ],
  },
  {
    role: 'Technical Growth Strategist',
    company: 'Brown Tech Int.',
    location: 'Lahore, Pakistan · On-site',
    period: 'Aug 2024 – Jan 2026',
    focus: 'Commercial Scoping & US Client Alignment',
    summary:
      'Bridged US-based SME leadership with internal engineering teams to turn business bottlenecks into scoped technical engagements.',
    bullets: [
      'Partnered with HR leaders, product managers, CEOs, CTOs, and founders of US-based SMEs to diagnose operational bottlenecks and recommend tailored software and data solutions.',
      'Acted as primary liaison between US client leadership and internal engineering teams, aligning roadmaps, milestones, and technical feasibility.',
      'Led focused requirement-gathering sessions that sharpened project scopes, improved conversion rates, and secured longer-term service agreements.',
    ],
  },
];

export const leadershipOrganizations = [
  {
    name: 'Sabira Foundation',
    subtitle: 'Sabira Memorial Welfare Education System',
    role: 'Board of Director · Since Jan 2026',
    location: 'Rawalpindi & Lahore, Pakistan',
    description:
      'Non-profit providing free schooling (pre-primary through Grade 8) for orphans, child laborers, and underprivileged children—covering core academics, STEM, digital literacy, moral education, and student welfare.',
    url: null,
  },
  {
    name: 'OMLAS',
    subtitle: 'One Million Leaders Asia',
    role: 'Impact Project Lead (Digital Loralai)',
    location: 'Asia-Pacific · Grassroots',
    description:
      'Mobilized and trained 70 college and university students in Loralai through a 4-week applied AI literacy and future digital skills fellowship project.',
    url: 'https://onemillionleadersasia.org/',
  },
  {
    name: 'All Pakistan Labour Federation',
    subtitle: 'APLF',
    role: 'Leadership & Community Engagement',
    location: 'Pakistan',
    description:
      'Collaborated with Pakistan’s labor advocacy network supporting worker rights, institutional coordination, and community capacity building.',
    url: 'https://aplf-pcmlf.org/',
  },
  {
    name: 'BRSP',
    subtitle: 'Balochistan Rural Support Programme',
    role: 'Regional Development & Outreach',
    location: 'Balochistan, Pakistan',
    description:
      'Engaged alongside one of Balochistan’s flagship rural development organizations advancing community empowerment and grassroots resilience.',
    url: 'https://brsp.org.pk/',
  },
];

export const skillGroups = [
  {
    title: 'LLMs, Transformers & NLP',
    items: [
      'PyTorch',
      'Hugging Face (Transformers, Datasets, Evaluate, Accelerate)',
      'Self-Attention & BERT',
      'PEFT / LoRA / QLoRA',
      'Agentic AI Workflows',
    ],
  },
  {
    title: 'Data Engineering & Retrieval',
    items: [
      'Rust-Backed Fast Tokenizers',
      'WordPiece Subword Tokenization',
      'Dynamic Padding & Overflow Chunking',
      'Apache Arrow (Memory-Mapped)',
      'FAISS, Sentence Transformers & RAG',
    ],
  },
  {
    title: 'Modeling & Languages',
    items: [
      'Python (OOP, Async)',
      'SQL',
      'C++ Interoperability',
      'XGBoost & LightGBM',
      'Polars, Pandas, NumPy & SHAP',
    ],
  },
  {
    title: 'Strategy & Leadership',
    items: [
      'Commercial Solutions Scoping',
      'Stakeholder & C-Suite Alignment',
      'Cross-Functional Leadership',
      'Systems Thinking',
      'Grassroots Program Design',
    ],
  },
];

export const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford University (Coursera)',
    date: 'Completed Mar 7, 2026',
    credentialId: 'T53I0GZ0W2BQ',
    verifyUrl: 'https://coursera.org/verify/specialization/T53I0GZ0W2BQ',
    courses: [
      {
        name: 'Supervised Machine Learning: Regression and Classification',
        date: 'Nov 1, 2025',
        url: 'https://coursera.org/verify/LKJVSGMHDLTN',
      },
      {
        name: 'Advanced Learning Algorithms',
        date: 'Feb 18, 2026',
        url: 'https://coursera.org/verify/R0NCH4XMJK4N',
      },
      {
        name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
        date: 'Mar 7, 2026',
        url: 'https://coursera.org/verify/XZ4OM73ZLJXY',
      },
    ],
  },
  {
    title: 'Fundamentals of Agents (Unit 1: Foundations of Agents)',
    issuer: 'Hugging Face Agents Course',
    date: 'Completed Nov 7, 2026',
    credentialId: 'HF-AGENTS-U1',
    imagePath: `${import.meta.env.BASE_URL}hf-agents-cert.webp`,
    description:
      'Verified completion of Unit 1 covering agentic reasoning loops, tool calling architectures, and foundational LLM agent patterns.',
  },
];
