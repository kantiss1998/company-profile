import { type Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { GridList, GridListItem } from "@/components/GridList";
import { PageIntro } from "@/components/PageIntro";
import { SectionIntro } from "@/components/SectionIntro";
import { StatList, StatListItem } from "@/components/StatList";
import { loadArticles } from "@/lib/mdx";

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-[#eee7f6] py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Visi Misi"
        title="Visi"
      >
        <p>
          Perusahaan yang siap mengutamakan pelayanan yang baik untuk menjadikan kerudung local Indonesia yang bernilai Kreatif, Inovatif, Fungsi, Estetika dan gaya dengan kwalitas Global
        </p>
      </SectionIntro>
      <div className="mt-10"></div>    
      <SectionIntro
        title="Misi"
      >
      </SectionIntro>
      <Container className="mt-5">
        <GridList>
          <GridListItem title="Membaca perubahan" invert>
            yang terjadi dan menangkap peluang yang ada.
          </GridListItem>
          <GridListItem title="Beradaptasi" invert>
            dengan melakukan perbaikan sistem manajemen ke arah yang lebih profesional.
          </GridListItem>
          <GridListItem title="Membangun" invert>
            Kekuatan dengan melakukan pemberdayaan sumber daya manusia secara terus menerus.
          </GridListItem>
          <GridListItem title="Melayani" invert>
            Kepuasan semua konsumen sehingga terjalin hubungan yang profesional dan harmonis.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Produsen terkemuka kain berkualitas tinggi untuk hijab dan kerudung.",
};

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2);

  return (
    <>
      <PageIntro
        eyebrow="Tentang Kami"
        title="Produsen terkemuka kain berkualitas tinggi"
      >
        <p>
          PT. Kanti Sehati Sukses, produsen terkemuka kain
          berkualitas tinggi untuk hijab dan kerudung. Didirikan pada tahun
          1998, perusahaan kami telah membangun reputasi dalam memproduksi kain
          berkualitas unggul dengan menggunakan teknologi terbaru dan
          bahan-bahan terbaik.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="T" isi="aat" label="Senantiasa tunduk dan patuh kepada Allah SWT juga pimpinan" />
          <StatListItem value="A" isi="manah" label="Jujur dan dapat dipercaya" />
          <StatListItem value="K" isi="erjasama" label="Bahu membahu untuk mencapai target perusahaan" />
          <StatListItem value="W" isi="inning spirit" label="Selalu ingin maju dengan memaksimalkan kompetisi yang dimiliki" />
          <StatListItem value="A" isi="daptif" label="Terus menerus berinovasi dan bergerak menghadapi perubahan" />
        </StatList>
      </Container>

      <Culture />

      <ContactSection />
    </>
  );
}
