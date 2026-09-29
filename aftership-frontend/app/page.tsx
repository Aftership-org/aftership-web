import Image from "next/image"
import {
  Activity,
  ArrowRight,
  Boxes,
  ChevronRight,
  Code2,
  Database,
  GitBranch,
  Search,
  ShieldCheck,
  Webhook,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const loginHref = "/login"

const workflow = [
  {
    icon: GitBranch,
    title: "Connect",
    body: "Install the GitHub App and choose the repositories Aftership can access.",
  },
  {
    icon: Activity,
    title: "Measure",
    body: "Add the lightweight SDK when you are ready to collect application telemetry.",
  },
  {
    icon: Search,
    title: "Diagnose",
    body: "Compare deployments and trace regressions back to endpoints and commits.",
  },
]

const stack = [
  { icon: Code2, label: "Next.js", detail: "Fast product surfaces" },
  { icon: Boxes, label: "Go", detail: "Focused REST services" },
  { icon: Database, label: "PostgreSQL", detail: "Durable project history" },
  { icon: Webhook, label: "GitHub", detail: "Installations and webhooks" },
]

export default function Page() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <a
            href="#top"
            className="flex items-center gap-3 font-semibold tracking-tight"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Activity aria-hidden="true" className="size-4" strokeWidth={2} />
            </span>
            Aftership
          </a>

          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a
              className="transition-colors hover:text-foreground"
              href="#workflow"
            >
              How it works
            </a>
            <a
              className="transition-colors hover:text-foreground"
              href="#diagnose"
            >
              Diagnose
            </a>
            <a
              className="transition-colors hover:text-foreground"
              href="#architecture"
            >
              Architecture
            </a>
          </div>

          <a
            href={loginHref}
            aria-label="Log in"
            className={cn(buttonVariants({ size: "sm" }), "gap-2 px-4")}
          >
            <GitBranch aria-hidden="true" strokeWidth={2} />
            <span className="hidden sm:inline">Log in</span>
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20 lg:px-8"
      >
        <div className="hero-copy md:col-span-5">
          <p className="mb-5 font-mono text-xs font-medium tracking-widest text-accent-strong uppercase">
            Deployment intelligence
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tighter text-balance sm:text-5xl lg:text-6xl">
            Know what every deploy changed.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aftership links Git commits to performance changes, so regressions
            have an owner and a cause.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={loginHref}
              className={cn(buttonVariants({ size: "lg" }), "gap-2 px-5")}
            >
              <GitBranch aria-hidden="true" strokeWidth={2} />
              Log in
            </a>
            <a
              href="#workflow"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 px-5"
              )}
            >
              See how it works
              <ArrowRight aria-hidden="true" strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="hero-visual relative md:col-span-7">
          <div
            className="bg-hero-halo absolute -inset-8 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-shadow-color/20">
            <Image
              src="/images/aftership-cycle-hero.webp"
              alt="A four-stage loop showing software shipping, regression detection, repair, and the next deployment"
              width={1440}
              height={807}
              fetchPriority="high"
              loading="eager"
              unoptimized
              sizes="(max-width: 767px) 100vw, 58vw"
              className="aspect-video w-full object-cover"
            />
            <div className="grid grid-cols-4 border-t border-border bg-card px-4 py-3 text-center font-mono text-xs font-medium text-muted-foreground">
              <span>Ship</span>
              <span>Detect</span>
              <span>Fix</span>
              <span>Repeat</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-subtle">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="reveal max-w-5xl text-3xl leading-tight font-medium tracking-tight text-balance sm:text-5xl">
            A deployment should explain the performance change it introduced,
            not leave you searching through disconnected tools.
          </p>
          <div className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Commits give each change a precise source.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Deployments create the comparison boundary.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Telemetry shows the impact on real endpoints.
            </p>
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            From repository to root cause.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Start with GitHub today. Add measurement and diagnosis as your
            project grows.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-12">
          {workflow.map((item, index) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={cn(
                  "reveal rounded-2xl border border-border bg-card p-6",
                  index === 0 && "md:col-span-5",
                  index === 1 && "md:col-span-4 md:mt-10",
                  index === 2 && "md:col-span-3 md:mt-20"
                )}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={2}
                    />
                  </span>
                  {index < workflow.length - 1 ? (
                    <ChevronRight
                      aria-hidden="true"
                      className="hidden size-4 text-muted-foreground md:block"
                      strokeWidth={2}
                    />
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface-subtle">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-12 md:py-28 lg:px-8">
          <div className="md:col-span-5">
            <p className="mb-5 font-mono text-xs font-medium tracking-widest text-accent-strong uppercase">
              GitHub native
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Connect only what matters.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Install the GitHub App, review accessible repositories, and create
              an Aftership project from one selection.
            </p>
            <a
              href={loginHref}
              className={cn(buttonVariants({ size: "lg" }), "mt-8 gap-2 px-5")}
            >
              <GitBranch aria-hidden="true" strokeWidth={2} />
              Log in
            </a>
          </div>

          <div className="reveal md:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-shadow-color/10">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                  <p className="font-medium">Choose a repository</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Accessible through your GitHub installation
                  </p>
                </div>
                <GitBranch
                  aria-hidden="true"
                  className="size-5 text-muted-foreground"
                  strokeWidth={2}
                />
              </div>
              <div className="p-3">
                {["aftership-web", "checkout-api", "customer-portal"].map(
                  (repo, index) => (
                    <label
                      key={repo}
                      className={cn(
                        "flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-4 text-left transition-colors active:translate-y-px",
                        index === 0 ? "bg-accent-soft" : "hover:bg-muted"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <GitBranch
                          aria-hidden="true"
                          className="size-4 text-muted-foreground"
                          strokeWidth={2}
                        />
                        <span>
                          <span className="block text-sm font-medium">
                            {repo}
                          </span>
                          <span className="mt-1 block text-xs text-muted-foreground">
                            Private repository
                          </span>
                        </span>
                      </span>
                      <input
                        type="radio"
                        name="repository"
                        value={repo}
                        defaultChecked={index === 0}
                        className="size-4 accent-primary"
                      />
                    </label>
                  )
                )}
              </div>
              <details className="group border-t border-border bg-muted/40 px-5 py-4 text-xs text-muted-foreground">
                <summary className="cursor-pointer font-medium text-foreground">
                  Preview other states
                </summary>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <p className="rounded-lg bg-card p-3">
                    Loading repository access
                  </p>
                  <p className="rounded-lg bg-card p-3">
                    No repositories available
                  </p>
                  <p className="rounded-lg bg-card p-3">
                    GitHub access expired
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src="/images/aftership-deployment-compare.webp"
            alt="Two deployment surfaces showing a smooth baseline beside a disrupted regression"
            width={1440}
            height={807}
            unoptimized
            sizes="(max-width: 1279px) 100vw, 1280px"
            className="aspect-video w-full object-cover"
          />
          <div className="p-6 sm:p-10">
            <h2 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Compare the release, not the noise.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Aftership groups telemetry around deployments, making the
              performance delta clear before investigation begins.
            </p>
          </div>
        </div>
      </section>

      <section
        id="diagnose"
        className="border-y border-border bg-surface-subtle"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Find the endpoint that moved.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Move from a regression signal to the affected request path,
              commit, and deployment context.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-12">
            <div className="relative overflow-hidden rounded-2xl border border-border md:col-span-7 md:row-span-2">
              <Image
                src="/images/aftership-endpoint-trace.webp"
                alt="Application endpoint traces converging on one anomalous path"
                width={1000}
                height={1000}
                unoptimized
                sizes="(max-width: 767px) 100vw, 58vw"
                className="aspect-square h-full w-full object-cover"
              />
            </div>
            <article className="reveal rounded-2xl border border-border bg-card p-6 md:col-span-5">
              <Search
                aria-hidden="true"
                className="size-6 text-accent-strong"
                strokeWidth={2}
              />
              <h3 className="mt-8 text-xl font-semibold">
                Endpoint level evidence
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                See which routes became slower or more error-prone after a
                deployment.
              </p>
            </article>
            <article className="reveal rounded-2xl border border-border bg-accent-soft p-6 md:col-span-5">
              <GitBranch
                aria-hidden="true"
                className="size-6 text-accent-strong"
                strokeWidth={2}
              />
              <h3 className="mt-8 text-xl font-semibold">
                Commit context attached
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Keep repository, branch, commit SHA, and deployment identity
                together from the start.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="architecture"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      >
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Built on a clear boundary.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              A focused web client, a Go API, and durable project metadata leave
              room for telemetry later.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:col-span-8">
            {stack.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.label}
                  className="reveal flex min-h-40 flex-col justify-between rounded-2xl border border-border bg-card p-6"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-accent-strong"
                    strokeWidth={2}
                  />
                  <div>
                    <h3 className="font-semibold">{item.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-subtle">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Serious signal for teams that ship fast.
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-12">
            <article className="rounded-2xl border border-border bg-card p-7 md:col-span-7">
              <p className="text-2xl font-medium tracking-tight">SaaS makers</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Protect the workflows your customers rely on without assembling
                an observability department.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-accent-soft p-7 md:col-span-5 md:translate-y-8">
              <p className="text-2xl font-medium tracking-tight">
                Independent developers
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Trace a slowdown back to the release that introduced it.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7 md:col-span-4">
              <p className="text-2xl font-medium tracking-tight">Vibe coders</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Keep speed without losing sight of runtime quality.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7 md:col-span-8 md:translate-y-8">
              <p className="text-2xl font-medium tracking-tight">
                Small product teams
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Give every deployment one shared performance record across
                engineering and product.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-foreground px-6 py-16 text-background sm:px-12 md:py-24">
          <div
            className="bg-cta-pattern absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <ShieldCheck
              aria-hidden="true"
              className="size-8 text-primary"
              strokeWidth={2}
            />
            <h2 className="mt-8 text-3xl font-semibold tracking-tight sm:text-5xl">
              Connect your first repository.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-background/70">
              Start with GitHub access and a clean project record. Add telemetry
              when the foundation is ready.
            </p>
            <a
              href={loginHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 gap-2 bg-background px-5 text-foreground hover:bg-background/90"
              )}
            >
              <GitBranch aria-hidden="true" strokeWidth={2} />
              Log in
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-foreground">
            <Activity
              aria-hidden="true"
              className="size-4 text-accent-strong"
              strokeWidth={2}
            />
            Aftership
          </p>
          <p>Connect repositories today. Measure deployments next.</p>
        </div>
      </footer>
    </main>
  )
}
