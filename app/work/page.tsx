import { type Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import polos from "@/data/polos.json";
import motif from "@/data/motif.json";
import phasmina from "@/data/phasmina.json";
import prayerset from "@/data/prayerset.json";
import apparel from "@/data/apparell.json";
import Product4Row from "@/components/Product4Row";

function ProductShowcase() {
  return (
    <>
      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={polos}
          title="Hijab Polos"
          slug="polos"
        ></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={motif}
          title="Hijab Motif Digital Print"
          slug="motif"
        ></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={phasmina}
          title="Pashmina & Bergo"
          slug="pashminaBergo"
        ></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={prayerset}
          title="Prayer Set"
          slug="prayerset"
        ></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row
          products={apparel}
          title="Apparel"
          slug="apparel"
        ></Product4Row>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: "Produk Kami",
  description:
    "Koleksi kain berkualitas tinggi untuk hijab dan kerudung dari PT. Kanti Sehati Sukses.",
};

export default function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Produk Kami"
        title="Kebahagiaan tak bisa dibeli, tetapi kamu bisa membeli Kain."
      >
        <p>
          Kantiss menyediakan berbagai jenis produk berkualitas dengan harga
          yang terjangkau. Beberapa produk yang kami tawarkan diantaranya kain,
          hijab, produk garmen lainnya
        </p>
      </PageIntro>

      <ProductShowcase />

      <ContactSection />
    </>
  );
}
