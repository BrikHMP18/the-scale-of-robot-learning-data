type DataCategory =
  | 'robot-data'
  | 'direct-human-manipulation'
  | 'egocentric-video'
  | 'simulation'
  | 'web-data';
type ModelCategory = 'vla' | 'vla-rl' | 'world-model' | 'embodied-fm';

interface RobotDataset {
  name: string;
  year: string;
  hours: number | null;
  hoursLabel: string;
  categories: DataCategory[];
  collectionMethod?: string;
  modelCategory: ModelCategory;
  institution: string;
  source: {
    href: string;
    note: string;
  };
}

const CATEGORY: Record<DataCategory, { label: string; color: string }> = {
  'robot-data': { label: 'Robot trajectories', color: '#d8b74f' },
  'direct-human-manipulation': { label: 'Direct human manipulation', color: '#c98275' },
  'egocentric-video': { label: 'Egocentric human video', color: '#7ea6d8' },
  'simulation': { label: 'Simulation data', color: '#82b596' },
  'web-data': { label: 'Web / non-robot data', color: '#a28ab8' },
};

const MODEL_CATEGORY: Record<ModelCategory, { label: string; color: string }> = {
  'vla': { label: 'VLA', color: '#79b8ae' },
  'vla-rl': { label: 'VLA + RL', color: '#d6a078' },
  'world-model': { label: 'World model', color: '#a29acf' },
  'embodied-fm': { label: 'Embodied FM', color: '#d39ab7' },
};

const GRID_COLOR = '#254d3b';

const datasets: RobotDataset[] = [
  {
    name: 'π0',
    year: '31 Oct 2024',
    hours: 10000,
    hoursLabel: '10K+ h',
    categories: ['robot-data'],
    modelCategory: 'vla',
    institution: 'Physical Intelligence',
    source: {
      href: 'https://arxiv.org/abs/2410.24164',
      note: '10,000+ hours of dexterous robot data; additional open data are not quantified in hours.',
    },
  },
  {
    name: 'π0.5',
    year: '22 Apr 2025',
    hours: null,
    hoursLabel: 'N/D',
    categories: ['robot-data', 'web-data'],
    collectionMethod: 'Language teleoperation; mixed sources',
    modelCategory: 'vla',
    institution: 'Physical Intelligence',
    source: {
      href: 'https://arxiv.org/abs/2504.16054',
      note: 'Total not disclosed. The paper reports about 400 hours of mobile-manipulator data plus an unquantified, extended version of the π0 dataset, other robot data, OXE, and web data.',
    },
  },
  {
    name: 'GEN-0',
    year: '4 Nov 2025',
    hours: 270000,
    hoursLabel: '270K+ h',
    categories: ['direct-human-manipulation'],
    collectionMethod: 'Proprietary handheld interface (UMI-like)',
    modelCategory: 'embodied-fm',
    institution: 'Generalist AI',
    source: {
      href: 'https://generalistai.com/blog/gen-0',
      note: '270K+ hours of real-world manipulation trajectories. Generalist describes lightweight handheld devices that capture natural human manipulation without robot teleoperation.',
    },
  },
  {
    name: 'π*0.6',
    year: '17 Nov 2025',
    hours: null,
    hoursLabel: 'N/D',
    categories: ['robot-data', 'web-data'],
    collectionMethod: 'Teleoperation · autonomous rollouts · expert interventions',
    modelCategory: 'vla-rl',
    institution: 'Physical Intelligence',
    source: {
      href: 'https://www.pi.website/blog/pistar06',
      note: 'Exact total not disclosed. The paper describes tens of thousands of demonstration hours for offline-RL pretraining, followed by task demonstrations, autonomous robot episodes, and expert interventions through RECAP.',
    },
  },
  {
    name: 'DreamDojo',
    year: '6 Feb 2026',
    hours: 44711,
    hoursLabel: '44,711 h',
    categories: ['egocentric-video'],
    modelCategory: 'world-model',
    institution: 'NVIDIA',
    source: {
      href: 'https://arxiv.org/abs/2602.06949',
      note: 'The final pretraining mixture totals 44,711 hours of egocentric human video. Continuous latent actions provide proxy labels where fine-grained action labels are absent.',
    },
  },
  {
    name: 'EgoScale',
    year: '18 Feb 2026',
    hours: 20854,
    hoursLabel: '20,854 h',
    categories: ['egocentric-video'],
    modelCategory: 'vla',
    institution: 'NVIDIA',
    source: {
      href: 'https://arxiv.org/abs/2602.16710',
      note: '20,854 hours of action-labeled egocentric human video used to pretrain a VLA for dexterous human-to-robot transfer.',
    },
  },
  {
    name: 'GEN-1',
    year: '2 Apr 2026',
    hours: 500000,
    hoursLabel: '500K+ h',
    categories: ['direct-human-manipulation'],
    collectionMethod: 'Proprietary handheld interface (UMI-like)',
    modelCategory: 'embodied-fm',
    institution: 'Generalist AI',
    source: {
      href: 'https://generalistai.com/blog/gen-1',
      note: '500K+ hours of human physical-interaction data captured with low-cost human-operated devices and no robot data in pretraining; about one hour of robot data is used separately for each reported adaptation result.',
    },
  },
  {
    name: 'π0.7',
    year: '16 Apr 2026',
    hours: null,
    hoursLabel: 'N/D',
    categories: ['robot-data', 'egocentric-video', 'web-data'],
    collectionMethod: 'Human demonstrations · autonomous rollouts · interventions',
    modelCategory: 'vla',
    institution: 'Physical Intelligence',
    source: {
      href: 'https://arxiv.org/abs/2604.15483',
      note: 'Exact total not disclosed. Training mixes human demonstrations, autonomous policy-evaluation data including failures, human interventions, open robot datasets, egocentric human video, and web data. π0.7 is not RL-trained.',
    },
  },
  {
    name: 'LingBot-VLA 2.0',
    year: '7 Jul 2026',
    hours: 60000,
    hoursLabel: '~60K h',
    categories: ['robot-data', 'egocentric-video'],
    modelCategory: 'vla',
    institution: 'Robbyant',
    source: {
      href: 'https://arxiv.org/abs/2607.06403',
      note: 'About 60K hours: 50K hours of filtered robot trajectories across 20 configurations and 10K hours of filtered egocentric human video.',
    },
  },
  {
    name: 'GR00T N1.7',
    year: '7 Jul 2026',
    hours: 40000,
    hoursLabel: '~40K h',
    categories: ['robot-data', 'egocentric-video', 'simulation'],
    modelCategory: 'vla',
    institution: 'NVIDIA',
    source: {
      href: 'https://developer.nvidia.com/blog/develop-humanoid-robot-policies-end-to-end-with-nvidia-isaac-gr00t/',
      note: 'About 32K hours of real demonstrations and human egocentric data, plus 8K hours of simulated rollouts and demonstrations.',
    },
  },
  {
    name: 'Xiaomi-Robotics-1',
    year: '16 Jul 2026',
    hours: 100000,
    hoursLabel: '100K+ h',
    categories: ['direct-human-manipulation'],
    collectionMethod: 'UMI',
    modelCategory: 'vla',
    institution: 'Xiaomi Robotics',
    source: {
      href: 'https://arxiv.org/abs/2607.15330',
      note: '100K+ hours of real-world UMI trajectories across 1,700+ scenarios for pretraining; 7,200+ in-house robot hours are reported separately for post-training.',
    },
  },
  {
    name: 'ACT-2',
    year: '17 Jul 2026',
    hours: null,
    hoursLabel: 'N/D',
    categories: ['direct-human-manipulation'],
    collectionMethod: 'Skill Capture Glove (UMI lineage)',
    modelCategory: 'embodied-fm',
    institution: 'Sunday Robotics',
    source: {
      href: 'https://www.sunday.ai/blog/act-2-preview',
      note: 'ACT-2 is pretrained on a sensorized human dataset collected with proprietary hardware, but its hours and trajectory count are not disclosed. The single-demonstration result refers only to a post-training experiment.',
    },
  },
];

const HOURS_PER_SQUARE = 1000;
const SQUARE_SIZE = 7;
const GAP = 2;
const CELL_SIZE = SQUARE_SIZE + GAP;
const PORTRAIT_RATIO = 3;

function getGridSize(hours: number) {
  const squares = Math.ceil(hours / HOURS_PER_SQUARE);
  const columns = Math.max(1, Math.ceil(Math.sqrt(squares / PORTRAIT_RATIO)));
  const rows = Math.ceil(squares / columns);

  return {
    squares,
    columns,
    rows,
    width: columns * CELL_SIZE,
    height: rows * CELL_SIZE,
  };
}

function GridSvg({ hours, label }: { hours: number; label: string }) {
  const grid = getGridSize(hours);
  const partialCellOpacity = (hours % HOURS_PER_SQUARE) / HOURS_PER_SQUARE;

  return (
    <svg
      className="relative z-[60] block"
      width={grid.width}
      height={grid.height}
      viewBox={`0 0 ${grid.width} ${grid.height}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={label}
    >
      {Array.from({ length: grid.squares }, (_, index) => {
        const column = index % grid.columns;
        const row = Math.floor(index / grid.columns);
        const isPartialCell = index === grid.squares - 1 && partialCellOpacity !== 0;

        return (
          <rect
            key={index}
            x={column * CELL_SIZE}
            y={row * CELL_SIZE}
            width={SQUARE_SIZE}
            height={SQUARE_SIZE}
            fill={GRID_COLOR}
            fillOpacity={isPartialCell ? partialCellOpacity : 1}
          />
        );
      })}
    </svg>
  );
}

export default function RobotVisualizer() {
  return (
    <main className="relative min-h-screen overflow-x-hidden border-t border-[#171714] bg-[#f2f0e9] text-[#121310] selection:bg-emerald-200">
      <div className="mx-auto w-full max-w-[1920px]">
        <section className="px-4 pb-7 pt-8 text-center sm:px-6 sm:pb-9 sm:pt-11 lg:px-8 lg:pb-10 lg:pt-14">
          <h1 className="mx-auto max-w-[18rem] text-balance font-editorial text-[clamp(2.5rem,5.2vw,5.25rem)] font-normal leading-[0.9] tracking-[-0.035em] text-[#0d0e0c] sm:max-w-[46rem] sm:leading-[0.94] lg:max-w-none lg:whitespace-nowrap">
            The Scale of Robot Learning Data
          </h1>

          <div className="mt-6 flex flex-col items-center gap-5 sm:mt-8 lg:mt-9">
            <div className="grid grid-cols-[auto_1px_auto] items-center justify-center gap-4 sm:gap-8">
              <div className="flex flex-col items-center gap-0.5 min-[380px]:flex-row min-[380px]:items-baseline min-[380px]:gap-2">
                <strong className="font-display text-2xl font-medium tracking-[-0.04em] text-[#315b4a]">{datasets.length}</strong>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/40">Releases</span>
              </div>
              <span className="h-5 w-px bg-[#315b4a]/20" />
              <div className="flex flex-col items-center gap-0.5 min-[380px]:flex-row min-[380px]:items-baseline min-[380px]:gap-2">
                <strong className="font-display text-2xl font-medium tracking-[-0.04em] text-[#315b4a]">1,000 h</strong>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/40">Reported h / square</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2.5">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-black/35">Model</span>
                {Object.entries(MODEL_CATEGORY).map(([key, model]) => (
                  <div key={key} className="flex items-center gap-1.5 text-[10px] text-black/65">
                    <span
                      className="h-[7px] w-[7px] flex-none rounded-full"
                      style={{ backgroundColor: model.color }}
                    />
                    {model.label}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-black/35">Data</span>
                {Object.entries(CATEGORY).map(([key, category]) => (
                  <div key={key} className="flex items-center gap-1.5 text-[10px] text-black/65">
                    <span className="h-1.5 w-1.5 flex-none" style={{ backgroundColor: category.color }} />
                    {category.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-[#315b4a]/50 xl:hidden">
            Scroll to explore ↔
          </p>
          <div className="data-scrollbar overscroll-x-contain overflow-x-auto scroll-smooth pb-2 [scroll-snap-type:x_mandatory] xl:overflow-visible xl:pb-0 xl:[scroll-snap-type:none]">
            <div className="flex min-w-max gap-3 pt-2 sm:pt-3 lg:pt-5 xl:min-w-0">
              {datasets.map((dataset) => (
                <article
                  key={dataset.name}
                  className="group w-[126px] flex-none scroll-ml-4 [scroll-snap-align:start] min-[390px]:w-[140px] sm:w-[148px] xl:min-w-0 xl:flex-1 xl:[scroll-snap-align:none]"
                >
                  <div className="flex h-[280px] items-end justify-center min-[390px]:h-[300px] sm:h-[360px]">
                    <div className="origin-bottom scale-[0.72] transition-transform duration-300 ease-out group-hover:-translate-y-1 min-[390px]:scale-[0.8] sm:scale-100">
                      {dataset.hours === null ? (
                        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/35">n/d</span>
                      ) : (
                        <GridSvg hours={dataset.hours} label={`${dataset.name}: ${dataset.hoursLabel}`} />
                      )}
                    </div>
                  </div>

                  <div className="border-t border-black/20 pb-7 pt-3.5 sm:pb-9 sm:pt-4">
                    <div className="mb-3 flex min-h-[3.75rem] flex-col items-start gap-1">
                      <h2 className="max-w-full [overflow-wrap:anywhere] font-display text-[15px] font-semibold leading-tight tracking-[-0.02em] transition-colors group-hover:text-[#315b4a] xl:text-[14px] 2xl:text-[15px]">
                        {dataset.name}
                      </h2>
                      <span className="font-mono text-[9px] font-medium uppercase tracking-[0.04em] text-black/50">{dataset.year}</span>
                    </div>
                    <p className="font-display text-xl font-medium tracking-[-0.03em] text-[#315b4a]">{dataset.hoursLabel}</p>
                    <p className="mt-1 min-h-8 text-[11px] font-medium leading-snug text-black/65">{dataset.institution}</p>
                    <div className="mt-3 flex min-h-[8rem] flex-col items-start gap-1.5">
                      <span
                        className="flex items-center gap-1.5 text-[9px] font-semibold text-black/70"
                      >
                        <span
                          className="h-[7px] w-[7px] flex-none rounded-full"
                          style={{ backgroundColor: MODEL_CATEGORY[dataset.modelCategory].color }}
                        />
                        {MODEL_CATEGORY[dataset.modelCategory].label}
                      </span>
                      {dataset.categories.map((categoryKey) => (
                        <span key={categoryKey} className="flex items-center gap-1.5 text-[9px] text-black/60">
                          <span
                            className="h-1.5 w-1.5 flex-none"
                            style={{ backgroundColor: CATEGORY[categoryKey].color }}
                          />
                          {CATEGORY[categoryKey].label}
                        </span>
                      ))}
                      {dataset.collectionMethod && (
                        <div className="mt-1 border-l border-black/15 pl-2 text-[8px] leading-snug text-black/50">
                          <span className="block font-mono text-[7px] uppercase tracking-[0.12em] text-black/35">
                            Collection
                          </span>
                          <span className="mt-0.5 block">{dataset.collectionMethod}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-7 pt-3 sm:px-6 sm:pb-8 sm:pt-5 lg:px-8 lg:pb-10">
          <div>
            <h2 className="flex min-h-11 items-center py-2 font-display text-sm font-semibold text-[#121310]">
              Sources
            </h2>
            <div className="pb-5 pt-4 text-xs leading-relaxed text-black/65 sm:pt-5">
              <ul className="grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
                {datasets.map((dataset) => (
                  <li key={dataset.name} className="min-w-0 border-t border-black/15 py-3">
                    <div className="min-w-0">
                      <a
                        className="min-w-0 [overflow-wrap:anywhere] font-display text-sm font-semibold text-[#315b4a] underline decoration-[#315b4a]/35 underline-offset-2 hover:decoration-[#315b4a]"
                        href={dataset.source.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {dataset.name}
                      </a>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-black/65">
                      {dataset.source.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-b border-black/15">
            <h2 className="flex min-h-11 items-center border-t border-black/15 py-2 font-display text-sm font-semibold text-[#121310]">
              Notes
            </h2>
            <p className="w-full pb-5 pt-4 text-[11px] leading-relaxed text-black/65 sm:pt-5">
              This is a curated, non-exhaustive selection. Figures are author-reported pretraining or training-mixture totals, not independently audited. “+” marks a lower bound, “~” an estimate, and N/D an undisclosed total. Each square represents 1,000 reported hours. Data labels describe the modality: robot trajectories are executed by a robot, while direct human manipulation is captured without one. Collection identifies the disclosed acquisition method, where available. “VLA + RL” denotes a VLA trained with reinforcement learning. Categories indicate included modalities, not proportions unless published.
            </p>
          </div>

          <footer className="flex justify-center pt-6 font-mono text-[9px] uppercase tracking-[0.16em] sm:justify-end">
            <span className="text-[#315b4a]/70">Fact-checked 22 Jul 2026</span>
          </footer>
        </section>
      </div>
    </main>
  );
}
