import { useId } from "react";
import { type Metadata } from "next";
import Link from "next/link";

import { Border } from "@/components/Border";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Offices } from "@/components/Offices";
import { PageIntro } from "@/components/PageIntro";
import { SocialMedia } from "@/components/SocialMedia";
import { ContactForm } from "./ContactForm";

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Lebih suka berdiskusi secara luring ? <br/>
        Silakan hubungi kami untuk
        berkonsultasi secara langsung.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Office", "office@kantiss.com"],
            ["Marketing", "marketing@kantiss.com"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
}

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Let’s work together. We can’t wait to hear from you.",
};

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Hubungi Kami" title="Mari berpeluang bersama!">
        <p>Kami terbuka untuk menjawab pertanyaan anda</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <div className="lg:col-span-1 lg:flex lg:flex-col lg:justify-center">
            <ContactDetails />
          </div>
        </div>
      </Container>
    </>
  );
}
