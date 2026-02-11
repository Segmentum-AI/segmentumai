import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl font-bold">
        Let’s segment smarter
      </h2>
      <p className="mt-4 text-muted-foreground">
        Talk to us about deploying Segmentum AI.
      </p>
      <Button className="mt-8" size="lg">
        Contact us
      </Button>
    </section>
  )
}
