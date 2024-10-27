import { LineItem } from "@medusajs/medusa"
import { Metadata } from "next"
import { cookies } from "next/headers"
import CartTemplate from "@modules/cart/templates"
import { enrichLineItems } from "@modules/cart/actions"
import { getCheckoutStep } from "@lib/util/get-checkout-step"
import { CartWithCheckoutStep } from "types/global"
import { getCart, getCustomer } from "@lib/data"

export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}

// Function to fetch cart details
const fetchCart = async () => {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) {
    return null
  }

  const cart = await getCart(cartId).then(
    (cart) => cart as CartWithCheckoutStep
  )

  if (!cart) {
    return null
  }

  if (cart?.items.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id)
    cart.items = enrichedItems as LineItem[]
  }

  cart.checkout_step = cart && getCheckoutStep(cart)

  return cart
}

// Main Cart component
export default async function Cart() {
  const cart = await fetchCart()
  const customer = await getCustomer()

  return (
    <>
      {/* Facebook Pixel Integration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'CardView');  // Custom event for viewing the cart
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=CardView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Render the Cart Template */}
      <CartTemplate cart={cart} customer={customer} />
    </>
  )
}
