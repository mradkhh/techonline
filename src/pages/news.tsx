import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const newsContent = {
  "en": {
    title: "Your News",
    content: [
      {
        title:
          "Ennnnnnnnnnnn Otter.ai’s new assistant can automatically transcribe your Zoom meetings",
        synopsis:
          "A.I.-powered voice transcription service Otter.ai wants to make it even easier for its business users to record their meetings. The company is today introducing a new feature, Otter Assistant, whic...",
        imageUrl: "",
      },
      {
        title:
          "Otter.ai’s new assistant can automatically transcribe your Zoom meetings",
        synopsis:
          "A.I.-powered voice transcription service Otter.ai wants to make it even easier for its business users to record their meetings. The company is today introducing a new feature, Otter Assistant, whic...",
        imageUrl: "",
      },
      // ...
    ],
  },
  "ru": {
    title: "Vos nouvelles",
    content: [
      {
        title:
          "Ruuuuuuuuuuuu Le nouvel assistant d'Otter.ai peut transcrire automatiquement vos réunions Zoom",
        synopsis:
          "Le service de transcription vocale alimenté par A.I. Otter.ai veut rendre encore plus facile pour ses utilisateurs professionnels l'enregistrement de leurs réunions. La société présente aujourd'hui une nouvelle fonctionnalité, Otter Assistant, qui ...",
        imageUrl: "",
      },
      // ...
    ],
  },
  "uz": {
    title: "Tus noticias",
    content: [
      {
        title:
          "Uzzzzzzzzzzz El nuevo asistente de Otter.ai puede transcribir automáticamente sus reuniones de Zoom",
        synopsis:
          "El servicio de transcripción de voz con tecnología de inteligencia artificial Otter.ai quiere facilitar aún más a sus usuarios comerciales la grabación de sus reuniones. La compañía presenta hoy una nueva función, Otter Assistant, que ...",
        imageUrl: "",
      },
      {
        title:
          "El nuevo asistente de Otter.ai puede transcribir automáticamente sus reuniones de Zoom",
        synopsis:
          "El servicio de transcripción de voz con tecnología de inteligencia artificial Otter.ai quiere facilitar aún más a sus usuarios comerciales la grabación de sus reuniones. La compañía presenta hoy una nueva función, Otter Assistant, que ...",
        imageUrl: "",
      },
      {
        title:
          "El nuevo asistente de Otter.ai puede transcribir automáticamente sus reuniones de Zoom",
        synopsis:
          "El servicio de transcripción de voz con tecnología de inteligencia artificial Otter.ai quiere facilitar aún más a sus usuarios comerciales la grabación de sus reuniones. La compañía presenta hoy una nueva función, Otter Assistant, que ...",
        imageUrl: "",
      },
      // ...
    ],
  },
};

export default function News(props: any) {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title, content } = newsContent[locale];
  return (
    <div>
      <Head>
        <title>TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>Current Language: { locale }</h1>
        <div >
          <div >
            <h3>{title}</h3>
          </div>

          <div>
            {content.map((newsItem: any, i: number) => (
              <>
                <h1 key={i}>{newsItem?.title}</h1>
              </>
            ))}
          </div>
              <div style={{ display: "flex", flexDirection: 'column' }}>
                <Link
                activeClassName={locale === "en"}
                href={asPath}
                locale="en"
              >
                  English
              </Link>

              <Link
                activeClassName={locale === "ru"}
                href={asPath}
                locale="ru"
              >
                  Russian
              </Link>
              <Link
                activeClassName={locale === "uz"}
                href={asPath}
                locale="uz"
              >
                 Uzbekcha
              </Link>
              </div>
        </div>
      </main>
    </div>
  );
}