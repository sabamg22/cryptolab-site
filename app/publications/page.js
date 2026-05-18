import Hero from "../../components/hero";

export default function Publications() {
  const publicationsByYear = [
  {
    year: "2026",
    papers: [
      {
        authors:
          "Irere H, Dangarembizi R, Mukaremera L, Dambuza IM",
        title:
          "The emergence of neuroinvasive Cryptococcus: why eucalyptus-rich regions, especially in Africa, may be facing greater risk",
        journal: "Frontiers in Cellular and Infection Microbiology",
        details: "15:1727496. doi: 10.3389/fcimb.2025.1727496.",
        linkto: "https://www.frontiersin.org/journals/cellular-and-infection-microbiology/articles/10.3389/fcimb.2025.1727496/full",
      },
    ],
  },
  {
    year: "2025",
    papers: [
      {
        authors:
          "Dangarembizi R, Awala AN, de Lange A",
        title:
          "Neuroinflammation in fungal infections: from pathogen recognition to pathological manifestations",
        journal: "Disease Models & Mechanisms",
        details: "18(9) doi: 10.1242/dmm.052344.",
        linkto: "https://journals.biologists.com/dmm/article/18/9/dmm052344/369429/Neuroinflammation-in-fungal-infections-from",
      },
      {
        authors:
          "Gifford A, Patel SA, Matlakala M, Dangarembizi R, Warris A",
        title:
          "Neurological sequelae after paediatric cryptococcal meningitis",
        journal: "Journal of Fungi",
        details: "11(11):767 doi: 10.3390/jof11110767.",
        linkto: "https://www.mdpi.com/2309-608X/11/11/767",
      },
      {
        authors:
          "Dangarembizi R, Hoving JC, Boulware DR, Colombo AL, Govender NP, Oladele R, Dat VQ, Schwartz IS, Brown GD",
        title:
          "AIDS-related mycoses: advances, challenges, and future directions",
        journal: "Trends in Microbiology",
        details: "33(2):141-144. doi: 10.1016/j.tim.2024.12.004.",
        linkto: "https://www.cell.com/trends/microbiology/abstract/S0966-842X(24)00319-6",
      },
    ],
  },
  {
    year: "2023",
    papers: [
      {
        authors:
          "Dangarembizi R, Drummond RA",
        title:
          "Immune-related neurodegeneration in the midbrain causes pulmonary dysfunction in murine cryptococcal IRIS",
        journal: "Trends in Neurosciences",
        details: "doi: 10.1016/j.tins.2023.09.005.",
        linkto: "https://www.sciencedirect.com/science/article/abs/pii/S0166223623002230",
      },
      {
        authors:
          "Dangarembizi R, Wasserman S, Hoving JC",
        title:
          "Emerging and re-emerging fungal threats in Africa",
        journal: "Parasite Immunology",
        details: "45(2) doi: 10.1111/pim.12953.",
        linkto: "https://onlinelibrary.wiley.com/doi/10.1111/pim.12953",
      },
    ],
  },
  {
    year: "2021",
    papers: [
      {
        authors:
          "Dangarembizi R",
        title:
          "Reimagining the future of African brain health: perspectives for basic research on the pathogenesis of cryptococcal meningitis",
        journal: "Brain, Behavior, & Immunity - Health",
        details: "18:100388. doi: 10.1016/j.bbih.2021.100388.",
        linkto: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8605210/",
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

      <main className="w-full bg-crypto-sand py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <p className="font-futura text-crypto-ochre uppercase text-sm tracking-widest mb-3">
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
                      className="border-l-4 border-crypto-ochre pl-5 pb-4 border-b border-crypto-earth/20"
                    >
                      <p className="font-futura text-lg text-crypto-coal leading-relaxed">
                        {paper.authors}, {group.year},{" "}
                        <em className="text-crypto-earth">{paper.title}</em>.{" "}
                        <strong className="font-bold text-crypto-earth">
                          {paper.journal}
                        </strong>{" "}
                        {paper.details}{" "}
                        <br></br>
                        <br></br>
                        <a
                          href={paper.linkto}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-crypto-gold underline hover:text-crypto-ochre transitions"
                        >
                          Read →
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