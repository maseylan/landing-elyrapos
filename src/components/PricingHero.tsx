import Image from "next/image";
import PlanCard from "@/components/PlanCard";
import { PRICING_PLANS } from "@/lib/site";

export default function PricingHero() {
  return (
    <section className="relative">
      <div className="relative h-[440px] overflow-hidden lg:h-[480px]">
        <Image
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center pb-24">
          <div className="mx-auto max-w-3xl px-4 text-center text-white">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Harga Elyra POS
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Pilih paket yang sesuai tahap bisnis Anda — dari yang esensial sampai enterprise. Tanpa biaya tersembunyi.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 -mt-24 mx-auto max-w-4xl px-4 lg:px-6">
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
