import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { Metadata } from "next";
import Image from "next/image";

import polos from "@/data/polos.json";
import motif from "@/data/motif.json";
import pashminaBergo from "@/data/phasmina.json";
import prayerset from "@/data/prayerset.json";
import apparel from "@/data/apparell.json";
import ProductCard from "./ProductCard";

interface WorkPageProps {
  params: { slug: string };
}

const categoryDescriptions: Record<string, string> = {
  polos:
    "Berita baik bagi Anda yang ingin membuat brand hijab milik sendiri! Kantiss menyediakan produk berupa hijab polos dengan finishing yang dapat disesuaikan dengan preferensi ada. Hijab ini juga dapat dikombinasikan dengan aksesoris seperti metal logo, plastik satuan, pouch, box, dan packaging lainnya yang tentunya akan disediakan oleh Kantiss.",
  motif:
    "Di PT. Kanti Sehati Sukses, kami bangga dengan koleksi kain bermotif yang memadukan seni dan inovasi. Setiap motif dirancang untuk mencerminkan keindahan budaya dan tren modern, menjadikan setiap produk sebagai pernyataan gaya yang unik.",
  pashminaBergo:
    "Pashmina dan Bergo kami dirancang khusus untuk memberikan kelembutan dan kemewahan dalam setiap helai kain. Di PT. Kanti Sehati Sukses, kami memastikan bahwa setiap pashmina tidak hanya indah, tetapi juga nyaman digunakan untuk berbagai kesempatan.",
  prayerset:
    "Prayer set kami dirancang dengan penuh ketelitian untuk memberikan kenyamanan maksimal saat beribadah. Di PT. Kanti Sehati Sukses, kami memastikan setiap prayer set dibuat dari bahan terbaik, menawarkan ketenangan dalam ibadah dan kemewahan dalam desain.",
  apparel:
    "Koleksi apparel kami dirancang untuk memenuhi kebutuhan fashion sehari-hari. Di PT. Kanti Sehati Sukses, kami mengutamakan kenyamanan dan gaya, memastikan setiap produk kami dapat dipadukan dengan berbagai gaya, dari kasual hingga formal.",
};

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${title} - PT KANTI SEHATI SUKSES`,
    description: `Koleksi ${params.slug} kami`,
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const description =
    categoryDescriptions[params.slug] ||
    "Pashmina dan Bergo kami dirancang khusus untuk memberikan kelembutan dan kemewahan dalam setiap helai kain. Di PT. Kanti Sehati Sukses, kami memastikan bahwa setiap pashmina tidak hanya indah, tetapi juga nyaman digunakan untuk berbagai kesempatan.";
  let title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  if (title === "Polos") {
    title = "Hijab Polos"
  } else if (title === "Motif") {
    title = "Hijab Motif Digital Print"
  } else if (title === "pashminaBergo") {
    title = "Pashmina & Bergo"
  } 

  const productData: Record<string, any[]> = {
    polos: polos,
    motif: motif,
    pashminaBergo: pashminaBergo,
    prayerset: prayerset,
    apparel: apparel,
  };
  const products = productData[params.slug] || [];

  return (
    <>
      <PageIntro eyebrow="Produk" title={title}>
        <p>{description}</p>
      </PageIntro>

      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
