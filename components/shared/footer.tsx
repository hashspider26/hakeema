export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/50 py-12 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-black dark:text-zinc-400">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="font-bold text-lg text-zinc-900 dark:text-white">
            <span className="text-[#22c55e]">e</span><span className="text-[orangered]">Dawakhana.pk</span>
          </span>
          <p className="text-zinc-500">
            Your trusted partner in natural wellness. Providing pure herbal medicines and authentic organic remedies.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Shop</h3>
          <a href="/shop?category=medicines" className="hover:text-primary transition-colors">Herbal Medicines</a>
          <a href="/shop?category=honey" className="hover:text-primary transition-colors">Pure Honey</a>
          <a href="/shop?category=oils" className="hover:text-primary transition-colors">Natural Oils</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Company</h3>
          <a href="/about" className="hover:text-primary transition-colors">About Us</a>
          <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
          <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Contact</h3>
          <p>Mianwali, Punjab, Pakistan</p>
          <p>0313-7667636</p>
          <p>itsmjkniazi@gmail.com</p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-zinc-200 pt-8 px-4 text-center dark:border-zinc-800">
        <p>© {new Date().getFullYear()} <span className="text-[#22c55e]">e</span><span className="text-[orangered]">Dawakhana.pk</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}
