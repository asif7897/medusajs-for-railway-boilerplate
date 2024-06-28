import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative top-0 h-[90dvh] w-full border-b border-ui-border-base bg-ui-bg-subtle main-hero-section"
    >
      <div className="absolute left-12 md:left-52 inset-y-0 z-10 flex flex-col justify-center items-start text-left small:p-32 gap-6">
        <h2 className="text-4xl">
          Linen elegance
        </h2>
        <a
          target="_blank"
        >
          <Button variant="primary">
            SHOP NOW
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
