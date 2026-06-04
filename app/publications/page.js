import Hero from "../../components/hero";

export default function Publications() {
  const publicationsByYear = [
    {
      year: "2026",
      papers: [
        {
          authors: "Irere, H., Dangarembizi, R., Mukaremera, L. & Dambuza, I.M.",
          title: "The emergence of neuroinvasive Cryptococcus: why eucalyptus-rich regions, especially in Africa, may be facing greater risk.",
          journal: "Frontiers in Cellular and Infection Microbiology",
          details: "15:1727496",
          doi: "https://doi.org/10.3389/fcimb.2025.1727496",
          linkto: "https://www.frontiersin.org/journals/cellular-and-infection-microbiology/articles/10.3389/fcimb.2025.1727496/full",
        },
      ],
    },

    {
      year: "2025",
      papers: [
        {
          authors: "Dangarembizi, R., Awala, A.N. & de Lange, A.",
          title: "Neuroinflammation in fungal infections: from pathogen recognition to pathological manifestations.",
          journal: "Disease Models & Mechanisms",
          details: "18(9):dmm052344",
          doi: "https://doi.org/10.1242/dmm.052344",
          linkto: "https://journals.biologists.com/dmm/article/18/9/dmm052344/369429/Neuroinflammation-in-fungal-infections-from",
        },

        {
          authors: "Gifford, A., Patel, S.A., Matlakala, M., Dangarembizi, R. & Warris, A.",
          title: "Neurological sequelae after paediatric cryptococcal meningitis.",
          journal: "Journal of Fungi",
          details: "11(11):767",
          doi: "https://doi.org/10.3390/jof11110767",
          linkto: "https://www.mdpi.com/2309-608X/11/11/767",
        },

        {
          authors: "Dangarembizi, R., Hoving, J.C., Boulware, D.R., Colombo, A.L., Govender, N.P., Oladele, R., Dat, V.Q., Schwartz, I.S. & Brown, G.D.",
          title: "AIDS-related mycoses: advances, challenges, and future directions.",
          journal: "Trends in Microbiology",
          details: "33(2):141-144",
          doi: "https://doi.org/10.1016/j.tim.2024.12.004",
          linkto: "https://www.cell.com/trends/microbiology/abstract/S0966-842X(24)00319-6",
        },

        {
          authors: "Awala, A.N., Higgitt, E.R., de Lange, A., Kauchali, M., Pato, Y., Raimondo, J.V. & Dangarembizi, R.",
          title: "Silent sentinels: microglial (in)action during cryptococcal infection.",
          journal: "Neuroscience",
          details: "580:8",
          doi: "",
          linkto: "https://sona2025.uca.ma/abstract_sympo/SP5_2.pdf",
        },

        {
          authors: "Awala, A.N., Higgitt, E.R., de Lange, A., Kauchali, M., Raimondo, J.V. & Dangarembizi, R.",
          title: "Decrypting the complex neuroimmune interactions underlying brain injury during cryptococcal infection.",
          journal: "Neuroscience",
          details: "580:28",
          doi: "",
          linkto: "https://www.researchgate.net/publication/394374841_Decrypting_the_complex_neuroimmune_interactions_underlying_brain_injury_during_cryptococcal_infection",
        },
      ],
    },

    {
      year: "2023",
      papers: [
        {
          authors: "Dangarembizi, R. & Drummond, R.A.",
          title: "Immune-related neurodegeneration in the midbrain causes pulmonary dysfunction in murine cryptococcal IRIS.",
          journal: "Trends in Neurosciences",
          details: "46(11):893-895",
          doi: "https://doi.org/10.1016/j.tins.2023.09.005",
          linkto: "https://www.sciencedirect.com/science/article/abs/pii/S0166223623002230",
        },

        {
          authors: "Dangarembizi, R., Wasserman, S. & Hoving, C.J.",
          title: "Emerging and re-emerging fungal threats in Africa.",
          journal: "Parasite Immunology",
          details: "45(2):e12953",
          doi: "https://doi.org/10.1111/pim.12953",
          linkto: "https://onlinelibrary.wiley.com/doi/10.1111/pim.12953",
        },

        {
          authors: "Awala, A.N., Kauchali, M., de Lange, A., Higgitt, E.R., Mbangiwa, T., Raimondo, J.V. & Dangarembizi, R.",
          title: "Mouse organotypic brain slice cultures: a novel model for studying neuroimmune responses to cryptococcal brain infections.",
          journal: "Methods in Molecular Biology",
          details: "2667:31-45",
          doi: "https://doi.org/10.1007/978-1-0716-3199-7_4",
          linkto: "https://pubmed.ncbi.nlm.nih.gov/37145274/",
        },

        {
          authors: "Dangarembizi, R., de Lange, A., Higgitt, E.R., Awala, A.N., Mbangiwa, T., Kauchali, M. & Raimondo, J.V.",
          title: "Human brain organotypic slice cultures: a novel model for studying the neuroimmune mechanisms underlying brain injury in cryptococcal meningitis.",
          journal: "IBRO Neuroscience Reports",
          details: "15:S273-S274",
          doi: "https://doi.org/10.1016/j.ibneur.2023.08.665",
          linkto: "https://www.ibroneuroreports.org/article/S2667-2421(23)00537-7/fulltext",
        },
      ],
    },

    {
      year: "2021",
      papers: [
        {
          authors: "Dangarembizi, R.",
          title: "Reimagining the future of African brain health: perspectives for basic research on the pathogenesis of cryptococcal meningitis.",
          journal: "Brain, Behavior, & Immunity - Health",
          details: "18:100388",
          doi: "https://doi.org/10.1016/j.bbih.2021.100388",
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
                        {paper.authors} {group.year}. {paper.title}{" "}
                        <em className="italic font-bold text-crypto-earth">
                          {paper.journal}
                        </em>
                        {paper.details ? `. ${paper.details}` : "."}{" "}

                        {paper.doi && (
                          <a
                            href={paper.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800 inline-block ml-1 transition"
                          >
                            doi
                          </a>
                        )}

                        <br />
                        <br />

                        <a
                          href={paper.linkto}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-crypto-gold underline hover:text-crypto-ochre transition font-semibold"
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