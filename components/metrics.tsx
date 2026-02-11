import { Card } from "@/components/ui/card"

export default function Metrics() {
  return (
    <section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <h3 className="text-3xl font-bold">10–50×</h3>
        <p className="text-muted-foreground">Faster deployment</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-3xl font-bold">1–5</h3>
        <p className="text-muted-foreground">Annotations required</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-3xl font-bold">Multi-modal</h3>
        <p className="text-muted-foreground">MRI, CT, microscopy, histology</p>
      </Card>
    </section>
    
  )
}
