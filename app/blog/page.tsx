// `GalleryData` diambil dari komponen server
import Image from 'next/image';
import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { PageIntro } from '@/components/PageIntro';
import GalleryGrid from '@/components/GaleryGrid'

// Menandai komponen sebagai server
export const metadata = {
  title: 'Galeri',
  description: 'Kami dengan bangga menghadirkan berbagai inovasi dan teknologi terdepan yang kami tawarkan.',
};

// Komponen utama server
export default function Gallery() {
  const galleryImages = [
    { 
      src: "https://i.imgur.com/rMXJE8R.jpeg", 
      alt: 'Mesin Cutting Roll', 
      description: "Mesin Cutting Roll dirancang untuk memotong dengan presisi dalam proses manufaktur, terutama di industri kertas dan film. Menggunakan mekanisme gulungan yang canggih, mesin ini memastikan pemotongan bersih dan akurat dengan limbah minimal, meningkatkan efisiensi produksi dan konservasi material.", 
      span: 'col-span-2 row-span-2'  
    },
    { 
      src: "https://i.imgur.com/YMAMWWx.jpeg", 
      alt: 'Mesin Cutting Roll 2', 
      description: "Versi lanjutan dari Mesin Cutting Roll ini dilengkapi dengan kontrol otomatis untuk presisi yang lebih tinggi dan pemrosesan lebih cepat. Cocok untuk produksi skala besar, mesin ini dioptimalkan untuk menangani berbagai material, mulai dari film tipis hingga kertas tebal, memberikan kualitas yang konsisten di setiap potongan." 
    },
    { 
      src: "https://i.imgur.com/BooGGO5.jpeg", 
      alt: 'Mesin Inspeksi', 
      description: "Mesin Inspeksi dirancang untuk mendeteksi dan menilai cacat dalam material selama produksi, memastikan hanya produk berkualitas tinggi yang mencapai garis akhir. Dilengkapi dengan sensor resolusi tinggi dan analisis waktu nyata, mesin ini memungkinkan produsen menjaga kendali kualitas yang ketat dan mengurangi kesalahan produksi secara efektif." 
    },
    { 
      src: "https://i.imgur.com/sVCpKfN.jpeg", 
      alt: 'Mesin Inspeksi 2', 
      description: "Mesin Inspeksi mutakhir yang dilengkapi dengan teknologi pencitraan yang ditingkatkan untuk mendeteksi bahkan ketidaksempurnaan terkecil. Mesin ini menyediakan pemantauan terus-menerus dan kemampuan inspeksi berkecepatan tinggi, menjadikannya komponen penting untuk penjaminan kualitas dalam manufaktur modern." 
    },
    { 
      src: "https://i.imgur.com/mRgnKH1.jpeg", 
      alt: 'Mesin Laser Cutting', 
      description: "Mesin Laser Cutting memanfaatkan laser berkekuatan tinggi untuk memotong berbagai material dengan presisi yang tinggi dan limbah material minimal. Mesin ini ideal untuk industri yang membutuhkan desain dan pola rumit, seperti otomotif, penerbangan, dan manufaktur elektronik." 
    },
    { 
      src: "https://i.imgur.com/XK3ITeI.jpeg", 
      alt: 'Mesin Laser Cutting 2', 
      description: "Mesin Laser Cutting yang ditingkatkan, dengan kecepatan dan akurasi yang lebih tinggi untuk aplikasi industri skala besar. Laser berdaya tinggi pada mesin ini memberikan pemotongan halus pada desain yang kompleks, menjadikannya cocok untuk pengembangan prototipe dan produksi massal." 
    },
    { 
      src: "https://i.imgur.com/SB8cC0k.jpeg", 
      alt: 'Mesin Press', 
      description: "Mesin Press dirancang untuk aplikasi stamping dan pressing berat, banyak digunakan dalam industri fabrikasi logam. Mesin ini menggabungkan rekayasa yang kokoh dengan kontrol presisi, memungkinkan pembentukan logam menjadi berbagai bagian untuk otomotif, konstruksi, dan manufaktur mesin." 
    },
    { 
      src: "https://i.imgur.com/EBd3U8B.jpeg", 
      alt: 'Mesin Press 2', 
      description: "Mesin Press kelas industri dengan kemampuan penerapan gaya yang ditingkatkan, dioptimalkan untuk menciptakan komponen logam yang tahan lama. Dengan fokus pada efisiensi energi, mesin ini memastikan aksi pressing yang kuat sambil meminimalkan biaya operasional dan dampak lingkungan." 
    },
    { 
      src: "https://i.imgur.com/kEtGWqB.jpeg", 
      alt: 'Mesin Printing', 
      description: "Mesin Printing menawarkan solusi pencetakan resolusi tinggi berskala besar, dirancang khusus untuk industri pengemasan dan pelabelan. Dengan pengaturan yang dapat disesuaikan, mesin ini dapat mencetak di berbagai media, termasuk kertas, plastik, dan kain, memberikan warna yang tajam dan gambar yang detail untuk produk komersial." 
    },
    { 
      src: "https://i.imgur.com/y0j4NCZ.jpeg", 
      alt: 'Mesin Printing 2', 
      description: "Mesin Printing canggih yang dioptimalkan untuk kecepatan cetak lebih tinggi tanpa mengorbankan kualitas. Dengan kalibrasi warna yang presisi dan sistem tinta yang dapat disesuaikan, mesin ini ideal untuk produksi batch kecil maupun besar dalam industri pengemasan dan seni grafis." 
    },
    { 
      src: "https://i.imgur.com/f864pyG.jpeg", 
      alt: 'Mesin Printing 3', 
      description: "Mesin Printing berkapasitas tinggi ini dirancang untuk operasi berkelanjutan dalam pengaturan industri. Sistem pengelolaan tinta dan pengeringan otomatis memastikan proses pencetakan yang lancar, cocok untuk produksi skala besar seperti label, poster, dan materi cetak lainnya." 
    },
    { 
      src: "https://i.imgur.com/3qucI7u.jpeg", 
      alt: 'Mesin Finishing', 
      description: "Mesin Finishing sangat penting untuk tahap akhir produksi, menyediakan proses seperti laminasi, pelapisan, dan penjilidan. Mesin ini meningkatkan daya tahan dan estetika produk, memastikan barang memenuhi standar industri sebelum didistribusikan." ,
      span: 'col-span-2 row-span-2' 
    },
    { 
      src: "https://i.imgur.com/ktA8Zda.jpeg", 
      alt: 'Mesin Finishing 2', 
      description: "Mesin Finishing canggih yang menawarkan berbagai pilihan finishing termasuk embossing, foil stamping, dan pelapisan UV. Dengan fleksibilitasnya, mesin ini dapat digunakan pada berbagai produk, memastikan hasil akhir yang rapi dan berkualitas tinggi." 
    },
    { 
      src: "https://i.imgur.com/ZvpMQcy.jpeg", 
      alt: 'Gudang', 
      description: "Fasilitas Gudang kami yang sepenuhnya dioptimalkan dirancang untuk menyimpan dan mengelola bahan baku, barang dalam proses, dan barang jadi secara efisien. Dengan sistem manajemen inventaris yang kuat dan bagian khusus untuk setiap jenis produk, fasilitas ini memastikan operasi logistik yang lancar dan pengiriman tepat waktu." 
    }
  ]
  return (
    <>
      <PageIntro eyebrow="Galeri" title="Teknologi dan Keandalan">
        <p>
          Kami dengan bangga menghadirkan berbagai inovasi dan teknologi terdepan yang kami tawarkan. Setiap mesin yang kami tampilkan adalah hasil dari penelitian mendalam dan pengembangan berkelanjutan, dirancang untuk memenuhi kebutuhan industri dan memberikan solusi yang efisien bagi pelanggan kami.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <GalleryGrid images={galleryImages} />
      </Container>

      <ContactSection />
    </>
  );
}
