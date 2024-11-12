import { type Metadata } from "next";

import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import { GridPattern } from "@/components/GridPattern";
import { PageIntro } from "@/components/PageIntro";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { TagList, TagListItem } from "@/components/TagList";
import imageLaptop from "@/images/laptop.jpg";
import imageMeeting from "@/images/meeting.jpg";
import imageWhiteboard from "@/images/whiteboard.jpg";

function Section({
  title,
  image,
  children,
}: {
  title: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>;
  children: React.ReactNode;
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function DigitalPrinting() {
  return (
    <Section title="Digital Printing" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Layanan digital printing kami menawarkan solusi inovatif untuk
          mencetak motif desain khusus pada kain hijab. Dengan memanfaatkan
          teknologi digital printing, pelanggan dapat menciptakan hijab dengan
          desain yang unik dan personal. Proses ini memungkinkan reproduksi
          detail desain yang{" "}
          <strong className="font-semibold text-neutral-950">akurat</strong>,
          baik dari segi warna maupun pola, sehingga hasil cetakan menjadi
          sangat presisi.
        </p>
        <p>
          Teknologi ini memungkinkan produksi hijab dalam jumlah yang{" "}
          <strong className="font-semibold text-neutral-950">fleksibel</strong>,
          baik untuk kebutuhan individu maupun produksi massal. Kelebihan utama
          dari digital printing adalah kemampuannya untuk mencetak berbagai
          variasi warna yang kompleks dan mendetail, yang sulit dicapai dengan
          metode konvensional. Desain hijab yang dihasilkan memiliki keawetan
          warna yang tinggi dan tidak mudah pudar.
        </p>
        <p>
          Selain itu, proses digital printing pada kain hijab lebih{" "}
          <strong className="font-semibold text-neutral-950">
            {" "}
            ramah lingkungan
          </strong>{" "}
          karena menggunakan tinta berbasis air yang lebih aman bagi lingkungan.
          Ini membuat layanan ini semakin populer di kalangan pelanggan yang
          peduli terhadap dampak ekologis dari produk yang mereka gunakan. Hasil
          akhirnya adalah hijab yang tidak hanya indah dan unik, tetapi juga
          berkontribusi pada keberlanjutan lingkungan.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Konsultasi desain</TagListItem>
        <TagListItem>Pencocokan dan kalibrasi warna</TagListItem>
        <TagListItem>Contoh kain (swatch)</TagListItem>
        <TagListItem>Cetakan uji (proofs)</TagListItem>
        <TagListItem>Persetujuan desain oleh pelanggan</TagListItem>
        <TagListItem>Penilaian kesesuaian kain</TagListItem>
        <TagListItem>Pemeriksaan kontrol kualitas</TagListItem>
      </TagList>
    </Section>
  );
}

function FlatPrinting() {
  return (
    <Section title="Hijab Finishing" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Layanan flat printing kami mengedepankan teknik pencetakan yang
          menggunakan mesin khusus untuk mencetak motif desain pada kain hijab
          dengan waktu produksi yang lebih cepat. Proses ini sangat efisien
          karena menggunakan mesin yang dirancang untuk mencetak secara flat
          atau datar, memungkinkan motif dapat tercetak secara merata di seluruh
          permukaan kain.
        </p>
        <p>
          Flat printing sangat cocok untuk pelanggan yang membutuhkan produksi
          dalam jumlah besar dengan waktu pengerjaan yang singkat. Meski
          prosesnya cepat, kualitas hasil cetakan tetap terjaga. Motif yang
          dihasilkan dari flat printing memiliki detail yang jelas dan tajam,
          dengan warna yang tahan lama.
        </p>
        <p>
          Teknologi ini juga fleksibel dalam hal penggunaan berbagai jenis kain,
          sehingga pelanggan dapat memilih bahan yang sesuai dengan kebutuhan
          mereka. Kecepatan dan kualitas yang dihasilkan menjadikan flat
          printing sebagai solusi ideal untuk produksi hijab dengan desain yang
          lebih sederhana namun tetap berkualitas tinggi.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Persiapan desain untuk pencetakan flat</TagListItem>
        <TagListItem>Pengaturan mesin cetak</TagListItem>
        <TagListItem>Penyesuaian kecepatan produksi</TagListItem>
        <TagListItem>Pengujian kualitas cetakan</TagListItem>
        <TagListItem>Contoh kain pra-produksi</TagListItem>
        <TagListItem>Persetujuan hasil cetakan oleh pelanggan</TagListItem>
        <TagListItem>
          Pemeriksaan visual akhir sebelum produksi massal
        </TagListItem>
      </TagList>
    </Section>
  );
}

function YarnTwisting() {
  return (
    <Section title="Yarn Twisting" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Layanan yarn twisting kami menciptakan hijab dengan tekstur unik dan
          tampilan menarik melalui proses pemutaran benang. Dalam teknik ini,
          dua atau lebih benang dipintal bersama, menciptakan efek torsi yang
          memberikan tampilan dan rasa yang berbeda pada kain. Teknik ini tidak
          hanya menghasilkan hijab dengan tekstur yang berbeda, tetapi juga
          memperkaya variasi warna yang dapat dicapai.
        </p>
        <p>
          Hijab yang dihasilkan dari proses yarn twisting memiliki kelebihan
          tersendiri dari segi estetika dan fungsionalitas. Efek torsi pada kain
          menciptakan dimensi tambahan, membuat hijab terasa lebih dinamis saat
          dikenakan. Selain itu, perpaduan benang dengan warna berbeda
          memberikan gradasi warna yang indah dan tidak monoton.
        </p>
        <p>
          Teknik yarn twisting juga memungkinkan pembuatan hijab yang lebih kuat
          dan tahan lama, karena benang yang dipintal bersama memberikan
          kekuatan ekstra pada kain. Hijab yang dihasilkan tidak hanya modis,
          tetapi juga nyaman dan awet digunakan sehari-hari.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Pemilihan jenis benang</TagListItem>
        <TagListItem>Penilaian kekuatan benang</TagListItem>
        <TagListItem>Pengaturan mesin pemintal</TagListItem>
        <TagListItem>Pengujian efek torsi pada benang</TagListItem>
        <TagListItem>Contoh kain hasil torsi</TagListItem>
        <TagListItem>Pemeriksaan kualitas tekstur dan warna</TagListItem>
        <TagListItem>
          Penilaian kombinasi warna pada benang yang dipintal
        </TagListItem>
      </TagList>
    </Section>
  );
}

function Weaving() {
  return (
    <Section title="Weaving" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Proses weaving atau tenun adalah salah satu teknik tertua dalam
          pembuatan kain yang kami gunakan untuk menciptakan kain hijab
          berkualitas tinggi. Dengan menggabungkan benang-benang melalui teknik
          ini, kami mampu menciptakan hijab yang kokoh, nyaman, dan memiliki
          daya tahan yang baik. Teknik tenun memungkinkan kami untuk mengontrol
          kepadatan dan kekuatan kain, sehingga dapat disesuaikan dengan
          preferensi pelanggan.
        </p>
        <p>
          Teknik weaving memungkinkan produksi kain dengan motif yang kompleks
          dan beragam, menciptakan pola yang indah dan menarik pada hijab.
          Proses ini juga memberikan fleksibilitas dalam pemilihan bahan dasar,
          baik itu serat alami seperti katun atau sintetis seperti poliester,
          sesuai dengan kebutuhan dan selera pelanggan.
        </p>
        <p>
          Selain itu, hijab yang dihasilkan dari proses weaving memiliki tekstur
          yang khas, memberikan sensasi lembut namun tetap kuat saat dikenakan.
          Kain hijab yang dihasilkan dari teknik ini memiliki tampilan yang
          elegan dan kualitas yang tahan lama, menjadikannya pilihan yang tepat
          untuk penggunaan sehari-hari atau acara khusus.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Pemilihan benang untuk tenun</TagListItem>
        <TagListItem>Penentuan pola tenunan</TagListItem>
        <TagListItem>Penyesuaian ketebalan dan kepadatan kain</TagListItem>
        <TagListItem>Pengujian awal pola tenun</TagListItem>
        <TagListItem>Sampel kain tenun</TagListItem>
        <TagListItem>Persetujuan pola tenun oleh pelanggan</TagListItem>
        <TagListItem>Pengujian kekuatan dan elastisitas kain</TagListItem>
      </TagList>
    </Section>
  );
}

function Knitting() {
  return (
    <Section title="Knitting" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Proses knitting atau merajut yang kami gunakan dalam produksi kain
          hijab menawarkan tekstur yang lebih elastis dan nyaman dipakai. Dalam
          teknik ini, benang-benang dikaitkan satu sama lain untuk menciptakan
          kain yang fleksibel dan mudah menyesuaikan bentuk. Hasil rajutan ini
          memberikan rasa lembut dan ringan saat dikenakan, membuat hijab
          menjadi pilihan yang nyaman untuk berbagai cuaca.
        </p>
        <p>
          Selain kenyamanan, knitting juga memberikan fleksibilitas dalam
          desain. Hijab yang dihasilkan dari proses rajutan ini sering kali
          memiliki pola yang lebih bervariasi dan kaya tekstur, menjadikannya
          pilihan populer bagi mereka yang mencari sesuatu yang unik. Teknik ini
          juga memungkinkan penciptaan hijab dengan kemampuan stretch yang baik
          tanpa mengorbankan kualitas atau keindahan.
        </p>
        <p>
          Hijab yang diproduksi melalui knitting umumnya lebih lentur, sehingga
          memberikan kesan kasual namun tetap elegan. Hal ini menjadikannya
          pilihan yang sangat sesuai untuk gaya sehari-hari yang membutuhkan
          kenyamanan dan kepraktisan, tanpa mengesampingkan tampilan yang
          stylish.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Pemilihan jenis benang untuk rajut</TagListItem>
        <TagListItem>Pengaturan mesin rajut</TagListItem>
        <TagListItem>Pengujian pola rajutan awal</TagListItem>
        <TagListItem>Sampel kain hasil rajutan</TagListItem>
        <TagListItem>Persetujuan pola dan tekstur oleh pelanggan</TagListItem>
        <TagListItem>Pengujian fleksibilitas dan elastisitas kain</TagListItem>
        <TagListItem>Pemeriksaan kualitas akhir kain rajut</TagListItem>
      </TagList>
    </Section>
  );
}

function DyeingFinishing() {
  return (
    <Section title="Dyeing & Finishing" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Layanan dyeing & finishing kami menawarkan proses pewarnaan dan
          finishing yang mendetail untuk menghasilkan hijab dengan warna yang
          cerah dan tahan lama. Dalam proses dyeing, kain dicelup dalam warna
          pilihan, memungkinkan pelanggan untuk memilih warna sesuai keinginan
          mereka. Proses ini memastikan bahwa warna meresap ke dalam serat kain
          secara menyeluruh, menghasilkan warna yang kaya dan tidak mudah pudar.
        </p>
        <p>
          Setelah proses pewarnaan selesai, kami melakukan tahap finishing untuk
          memberikan sentuhan akhir yang memastikan hijab tampil sempurna.
          Proses finishing mencakup berbagai teknik untuk meningkatkan kualitas
          kain, seperti memperhalus permukaan, meningkatkan kekuatan kain, serta
          memberikan efek kilau atau matte sesuai keinginan pelanggan.
        </p>
        <p>
          Hasil akhir dari proses dyeing & finishing adalah hijab dengan warna
          yang lebih hidup, kualitas yang lebih tahan lama, dan tampilan yang
          lebih elegan. Proses ini memastikan setiap hijab yang diproduksi
          memiliki standar kualitas yang tinggi dan siap digunakan dengan nyaman
          dalam berbagai kesempatan.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Pemilihan warna untuk pencelupan</TagListItem>
        <TagListItem>Pengujian daya serap kain terhadap pewarna</TagListItem>
        <TagListItem>Pengujian ketahanan warna</TagListItem>
        <TagListItem>Sampel kain hasil pewarnaan</TagListItem>
        <TagListItem>Persetujuan warna akhir oleh pelanggan</TagListItem>
        <TagListItem>
          Penerapan teknik finishing (halus, kilau, matte)
        </TagListItem>
        <TagListItem>
          Pemeriksaan kualitas hasil akhir (warna, kekuatan, tekstur)
        </TagListItem>
      </TagList>
    </Section>
  );
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Menggabungkan Keandalan dan Kreativitas"
      >
        <p>
          Kami selalu berusaha memadukan keandalan dengan inovasi, dengan tetap
          setia pada teknologi pencetakan dan teknik yang sudah terbukti.
          Walaupun kami mengenal teknologi terbaru, kami tetap percaya pada
          proses yang telah memberikan hasil memuaskan selama bertahun-tahun.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Teliti">
            Setiap detail dalam proses produksi, dari kain hingga warna,
            diperiksa dengan cermat untuk memastikan kualitas terbaik.
          </GridListItem>
          <GridListItem title="Efisien">
            Proses produksi kami cepat, tanpa mengorbankan hasil. Kecepatan dan
            ketepatan menjadi prioritas.
          </GridListItem>
          <GridListItem title="Adaptif">
            Kami fleksibel untuk menyesuaikan setiap desain sesuai kebutuhan
            pelanggan, tanpa mengurangi efisiensi.
          </GridListItem>
          <GridListItem title="Jujur">
            Transparansi dalam setiap langkah produksi adalah kunci kami, meski
            pelanggan seringkali tidak ingin repot membaca detailnya.
          </GridListItem>
          <GridListItem title="Setia">
            Kami membangun hubungan jangka panjang dengan klien, terus
            berinovasi dan memenuhi kebutuhan mereka.
          </GridListItem>
          <GridListItem title="Inovatif">
            Kami selalu mencari cara baru untuk menghasilkan hijab yang unik,
            tanpa melupakan tradisi dan kualitas.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "We believe in efficiency and maximizing our resources to provide the best value to our clients.",
};

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Jasa Produksi" title="Layanan yang kami sediakan">
        <p>
          Kami percaya pada efisiensi dan memaksimalkan sumber daya kami untuk
          memberikan nilai terbaik bagi klien kami. Cara utama kami melakukannya
          adalah dengan mengoptimalkan mesin yang kami gunakan.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <DigitalPrinting />
        <FlatPrinting />
        <YarnTwisting />
        <Weaving />
        <Knitting />
        <DyeingFinishing />
      </div>

      <Values />

      <ContactSection />
    </>
  );
}
