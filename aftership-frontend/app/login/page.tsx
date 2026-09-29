import type { Metadata } from "next"
import Link from "next/link"
import { Activity, ArrowLeft } from "lucide-react"

import { GitHubIcon } from "@/components/github-icon"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Log in | Aftership",
  description: "Log in to Aftership with your GitHub account.",
}

export default function LoginPage() {
  return (
    <main className="grid min-h-svh bg-background text-foreground lg:grid-cols-2">
      <section className="flex min-h-svh flex-col px-6 py-6 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="flex w-fit items-center gap-3 font-semibold tracking-tight"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Activity aria-hidden="true" className="size-4" strokeWidth={2} />
          </span>
          Aftership
        </Link>

        <div className="my-auto w-full max-w-md self-center py-16">
          <p className="font-mono text-xs font-medium tracking-widest text-accent-strong uppercase">
            Welcome back
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tighter sm:text-5xl">
            Log in to Aftership.
          </h1>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
            Connect your GitHub identity to access projects, repositories, and
            deployment insights.
          </p>

          <a
            href="/api/auth/github"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 w-full gap-3 px-5"
            )}
          >
            <GitHubIcon className="size-5" />
            Continue with GitHub
          </a>

          <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
            GitHub is the only sign-in method for Aftership.
          </p>
        </div>

        <Link
          href="/"
          className="flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={2} />
          Back to home
        </Link>
      </section>

      <aside className="relative hidden overflow-hidden bg-foreground text-background lg:flex lg:items-end">
        <div className="bg-cta-pattern absolute inset-0 opacity-50" />
        <div className="relative max-w-xl p-14">
          <p className="font-mono text-xs font-medium tracking-widest text-background/60 uppercase">
            Connect. Measure. Diagnose.
          </p>
          <p className="mt-6 text-4xl leading-tight font-medium tracking-tight text-balance">
            Every deployment should tell you what changed and where to look
            next.
          </p>
        </div>
      </aside>
    </main>
  )
}
