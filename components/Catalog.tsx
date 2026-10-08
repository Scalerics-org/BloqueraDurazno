import { SITE, PRODUCTS } from "@/data/site";
import ProductCard from "./ProductCard";
import { waLink } from "./waLink";

export default function Catalog() {
  return (
    <section id="catalogo" className="bg-cream-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-brand font-display text-base tracking-widest uppercase mb-2">
              Nuestros productos
            </p>
            <h2 className="text-concrete-900 text-5xl md:text-6xl">Catálogo</h2>
            <div className="w-16 h-1 bg-brand mt-4" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* CTA note */}
        <p className="text-center text-concrete-500 text-sm mt-10">
          ¿Necesitás un producto que no está en el catálogo?{" "}
          <a
            href={waLink("Hola! Consulto por un producto que no está en el catálogo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            Consultanos por WhatsApp
          </a>
        </p>

        {/* Letra chica de los precios.
            La Ley 17.250 pide que el precio que ve el consumidor sea el final y
            con impuestos incluidos. Hasta el 8-10-2026 el sitio publicaba
            "$28 / $25" sin decir nada de IVA ni de vigencia. Sale sólo cuando
            los datos están cargados en site.ts: mejor no decir nada que afirmar
            algo falso sobre impuestos. */}
        {(SITE.legal.ivaIncluido !== null || SITE.legal.preciosDesde) && (
          <p className="text-center text-concrete-500 text-xs mt-4">
            {SITE.legal.ivaIncluido === true && "Precios en pesos uruguayos, IVA incluido. "}
            {SITE.legal.ivaIncluido === false && "Precios en pesos uruguayos más IVA. "}
            {SITE.legal.preciosDesde && `Vigentes desde ${SITE.legal.preciosDesde}. `}
            Pueden cambiar sin previo aviso; el que vale es el que te confirmamos al hacer el pedido.
          </p>
        )}
      </div>
    </section>
  );
}
