import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Attention:</span> Pay via Bkash: 0177 0152 354 for a discount!
      
    </Badge>
  )
}

export default PaymentTest
