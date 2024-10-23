import { type Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import products from "@/data/polos.json";
import Product4Row from "@/components/Product4Row";

function ProductShowcase() {
  return (
    <>
      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row products={products} title="Hijab Polos" slug="polos"></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row products={products} title="Hijab Digital Print" slug="motif"></Product4Row>
      </Container>
      
      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row products={products} title="Pashmina & Bergo" slug="pashminaBergo"></Product4Row>
      </Container>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row products={products} title="Prayer Set" slug="prayerset"></Product4Row>
      </Container>
      
      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <Product4Row products={products} title="Apparel" slug="apparel"></Product4Row>
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
          Di PT. Kanti Sehati Sukses, kami menyediakan berbagai pilihan kain
          berkualitas tinggi yang dirancang khusus untuk hijab dan kerudung.
          Setiap produk kami dibuat dengan perhatian terhadap detail dan
          menggunakan bahan terbaik, untuk memastikan kenyamanan, ketahanan, dan
          gaya.
        </p>
      </PageIntro>

      <ProductShowcase />

      <ContactSection />
    </>
  );
}
