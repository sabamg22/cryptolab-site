export default function Hero({
  image,
  title,
  subtitle,
  children,
  earlyShrink = false,
}) {
  // If children exist → left-aligned layout
  const alignment = children
    ? "items-start text-left px-6 md:px-16 lg:px-32"
    : "items-center text-center px-6";

  // Add class ONLY when earlyShrink is explicitly enabled
  const heroClass = earlyShrink ? "hero-has-children" : "";

  return (
    <section
      id="hero"
      className={`
        relative 
        w-full 
        h-[55vh] 
        md:h-[85vh]
        overflow-hidden
        bg-cover
        bg-[center_25%]
        md:bg-center
        bg-no-repeat
        bg-scroll
        md:bg-fixed
        ${heroClass}
      `}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT BLOCK */}
      <div
        className={`
          absolute 
          inset-0 
          flex 
          flex-col 
          justify-center 
          ${alignment}
        `}
      >
        {children ? (
          <div className="flex flex-col items-start max-w-3xl">
            {children}
          </div>
        ) : (
          <>
            <h1
              className="
                font-gothic
                text-white
                font-bold
                text-5xl
                md:text-7xl
                lg:text-8xl
                drop-shadow-lg
                leading-tight
              "
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="
                  font-courier
                  text-white
                  text-xl
                  md:text-2xl
                  lg:text-3xl
                  mt-4
                  drop-shadow-md
                  font-medium
                "
              >
                {subtitle}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}