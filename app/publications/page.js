import Hero from "../../components/hero";

export default function Publications() {
  const publicationsByYear = [
    {
      year: "2025",
      papers: [
        {
          authors:
            "Author Surname Initials, Author Surname Initials, Author Surname Initials",
          title: "Publication title placeholder goes here in sentence case",
          journal: "Journal Name",
          details: "2025. doi: 00.0000/example.000000.",
          pdf: "#",
        },
        {
          authors:
            "Author Surname Initials, Author Surname Initials, Author Surname Initials",
          title: "Second publication title placeholder goes here",
          journal: "Journal Name",
          details: "2025. doi: 00.0000/example.000000.",
          pdf: "#",
        },
      ],
    },
    {
      year: "2024",
      papers: [
        {
          authors:
            "Author Surname Initials, Author Surname Initials, Author Surname Initials",
          title: "Publication title placeholder goes here in sentence case",
          journal: "Journal Name",
          details: "2024. doi: 00.0000/example.000000.",
          pdf: "#",
        },
      ],
    },
  ];

  return (
    <>
      <Hero
        image="/images/hero-publications.webp"
        title="Publications"
        subtitle="Selected research outputs from the Crypto Lab"
      />

      <main className="w-full bg-white py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <p className="font-futura text-crypto-red uppercase text-sm tracking-widest mb-3">
            Research Outputs
          </p>

          <h1 className="font-gothic text-4xl md:text-6xl text-crypto-earth mb-6">
            Publications
          </h1>

          <div className="space-y-14">
            {publicationsByYear.map((group) => (
              <section key={group.year}>
                <h2 className="font-gothic text-3xl md:text-4xl text-crypto-earth font-bold mb-8">
                  {group.year}
                </h2>

                <div className="space-y-8">
                  {group.papers.map((paper, index) => (
                    <article
                      key={index}
                      className="border-l-4 border-crypto-red pl-5 pb-8 border-b border-crypto-earth/20"
                    >
                      <p className="font-futura text-lg text-crypto-coal leading-relaxed">
                        {paper.authors}, {group.year},{" "}
                        <em className="text-crypto-earth">{paper.title}</em>.{" "}
                        <strong className="font-bold text-crypto-earth">
                          {paper.journal}
                        </strong>{" "}
                        {paper.details}{" "}
                        <a
                          href={paper.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-crypto-red underline hover:text-crypto-ochre transition"
                        >
                          pdf
                        </a>
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}