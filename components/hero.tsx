import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <section className="py-32 text-center">
      <Badge className="mb-4">Biomedical AI</Badge>
      <h1 className="text-5xl font-bold tracking-tight">
        Segment anything biological<br />in minutes, not months
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        Segmentum AI enables ultra-fast, few-shot biomedical segmentation across
        imaging modalities with minimal annotation.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg">Request a demo</Button>
        <Button variant="outline" size="lg">
          See how it works
        </Button>
      </div>
    </section>
  )
}
