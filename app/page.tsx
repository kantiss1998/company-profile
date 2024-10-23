import { type Metadata } from "next";

import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { List, ListItem } from "@/components/List";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import Clients from "../components/Client";
import Technology from "@/components/Technology";
import { Button } from "@/components/Button";
import Link from "next/link";



function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="Menciptakan Produk Baru Unggulan"
        className="mt-20 sm:mt-20 lg:mt-20"
      >
        <p>
          Perkembangan teknologi membuat produk sandang mudah diduplikasi.
          Kantiss percaya bahwa perkembangan teknologi juga dapat menjadi
          peluang untuk dapat terus berinovasi dan menciptakan produk unggulan.
          Beberapa produk ciptaan Kantiss yang menjadi market leader diantaranya
          adalah{" "}
          <b className="text-[#b72525]">
            Saudia, Ultra Voal, Bella, dan Shinar.
          </b>
        </p>
      </SectionIntro>
    </>
  );
}


function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Jasa Produksi"
        title="Kantiss menyediakan layanan dalam bentuk jasa produksi. Antusiasme kami adalah untuk membuat semua rencana Anda menjadi kenyataan!"
        invert
        className="mt-20"
      >
        <p>
          Produk tekstil memiliki variasi yang sangat beragam dan Kantiss
          menyadari hal tersebut. Oleh karena, itu kami terbuka apabila Anda
          memiliki preferensi dalam melakukan pengadaan bahan.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src="https://i.imgur.com/gkffBNf.jpeg"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Digital Printing">
              Layanan pencetakan motif atau desain khusus yang dapat
              dikostumisasi pada permukaan kain. Teknologi ini memungkinkan anda
              untuk memperoleh kain/hijab dengan desain sesuai selera Anda
              dengan minimum kuantitas yang rendah.
            </ListItem>
            <ListItem title="Hijab Finishing">
              Layanan pemrosesan kain menjadi hijab dengan berbagai pilihan
              finishing. Diantaranya ialah jahit tepi, ultrasonic, neci, picot,
              eyelash, dan berbagai variasi lasercut.
            </ListItem>
            <ListItem title="Garment">
              Layanan memproses kain menjadi produk siap pakai seperti bergo,
              mukena daily, mukena travel, sajadah, sarung, dan pakaian jadi
              lainnya.
            </ListItem>
          </List>
        </div>
        <Link href="/process">
          <div className="flex justify-end">
            <Button invert>Lihat selengkapnya</Button>
          </div>
          </Link>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  description:
    "We are a development studio working at the intersection of design and technology.",
};

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            PT Kantiss
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            PT Kanti Sehati Sukses, berdiri sejak tahun 1998 merupakan produsen
            tekstil terkemuka untuk kain, hijab, dan pakaian muslim lainnya.
            Memiliki spesialisasi di manufaktur hijab, Kantiss menjadi{" "}
            <b className="text-[#b72525]">One Stop Hijab Manufacturing </b>serta
            berfokus menghasilkan produk berkualitas unggul, bahan terbaik, dan
            teknologi terkini dengan harga terjangkau.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies />

      <Technology />

      <Services />

      <ContactSection />
    </>
  );
}
