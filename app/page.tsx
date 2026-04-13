import Section from '@/components/Section';
import DirectoryLinks from '@/components/DirectoryLinks';
import ProjectItem from '@/components/ProjectItem';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-[720px] mx-auto px-5 md:px-8 py-12 md:py-20">
        {/* hero */}
        <section className="mb-12 md:mb-16">
          <p className="text-[15px] text-[#a0a0a0] mb-1">hey, i&apos;m</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Vaibhav Hariram</h1>
        </section>

        {/* directory */}
        <section className="mb-12 md:mb-16">
          <DirectoryLinks />
        </section>

        {/* intro */}
        <Section>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            building paprika — runtime governance for ai agents. trace capture, policy enforcement, deterministic replay. deployed to 25+ engineering teams.
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            prev. swe intern @ railinc (summer &apos;24 + &apos;25). react + java/spring boot on the RIGIS platform. etl pipeline processing 100K+ rail stations.
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            studying cs @ berkeley
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            fine-tuned 7B–13B LLMs on 1.2M samples, distributed training across 4×A100s for berkeley&apos;s{' '}
            <a href="https://gorilla.cs.berkeley.edu" target="_blank" rel="noopener noreferrer" className="text-white hover:underline underline-offset-2">gorilla</a>{' '}
            project (BAIR). cited by nvidia, anthropic, openai teams.
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            researcher @ uc berkeley (eecs), satellite imagery + ML to detect crypto mining development in el salvador (Potts Lab)
          </p>
        </Section>

        {/* personal projects */}
        <Section title="personal projects">
          <ProjectItem
            name="routeX"
            description="routing engine that does in <1ms what dijkstra does in 45. contraction hierarchies over 280K bay area road segments, postgis geofencing, xgboost eta predictions."
            stack="stack: c++ • postgis • xgboost • osm"
          />
          <ProjectItem
            name="swandb"
            description="feature store that actually respects time. pit-correct joins, <8ms online serving, parquet storage that doesn't lie to your model."
            stack="stack: duckdb • redis • parquet"
          />
          <ProjectItem
            name="chronicle"
            description="llm inference server — 32% throughput over hf baseline. micro-batching + kv-cache reuse. <200ms p95 at 100 concurrency."
            stack="stack: python • cuda • mistral-7b"
          />
          <ProjectItem
            name="snare"
            description="(see repo)"
          />
        </Section>

        {/* open source */}
        <Section title="open source">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0] py-1">
            vLLM / PyTorch — merged performance optimization + distributed benchmarking PRs upstream
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0] py-1">
            geofilter — numba jit point-in-polygon engine. 10M points in 0.58s. wrote it because existing spatial filters were too slow and i was impatient.
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0] py-1">
            reqbench — load-testing cli sustaining 4.8K req/sec at 500 concurrency with p95/error ci gating
          </p>
        </Section>

        {/* lore */}
        <Section title="lore">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            pretty good at geography trivia
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            played trevor rainbolt in ranked geoguessr. got absolutely cooked tho
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            played carnatic violin for 10 years
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            huge chelsea fan + chicago sports
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            grew up in cary, north carolina. escaped.
          </p>
        </Section>

        {/* tl;dr */}
        <Section title="tl;dr">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            i love geospatial ai/ml + geotech: geospatial data, machine learning, and real systems people actually use
          </p>
        </Section>

        {/* currently */}
        <Section title="currently">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            berkeley → scale and build wherever and whatever i can
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            still thinking about that caleb williams throw…
          </p>
        </Section>

        {/* some other things */}
        <Section title="some other things">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            coursework: data structures, algorithms, discrete math, structure of computer programs, a.i., machine learning, networking + internet protocols, database systems, computer vision, data science, probably more ai/ml
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            languages: python, c++, typescript, java, sql
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            ml + systems: FSDP, AMP, CUDA, KV-cache, distributed fine-tuning, eval pipelines, quantization
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            frameworks: react, fastapi, spring boot, node.js, duckdb, langgraph, pytorch, xgboost
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            infra: aws, docker, redis, postgresql, postgis, gdal, arcgis pro, linux, ci/cd
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            interests: cities + public transportation, collecting old maps, tamil culture, soccer jerseys, geoguessr, chicago sports, international music
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            less frequently: south indian movies, home decor, sketching, online chess, sparkling water
          </p>
        </Section>

        {/* other things */}
        <Section title="other things">
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            used to watch anime a little bit
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            trying to learn to dj and cook (or both at the same time)
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            will run a marathon this year
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            trying to attend more hackathons
          </p>
          <p className="text-[15px] leading-relaxed text-[#e0e0e0]">
            roast my spotify playlists
          </p>
        </Section>

        {/* footer */}
        <footer className="mt-16 pt-8 border-t border-[#2a2a2f]">
          <p className="text-[14px] text-[#6b6b6b] leading-relaxed">
            this page changes often. if you&apos;re reading this, feel free to reach out. if you&apos;re from stanford, no.
          </p>
        </footer>
      </div>
    </main>
  );
}
