const HeroBanner = ({ image, badge, title, children, headingLevel = 'h2' }) => {
    const Heading = headingLevel;

    return (
        <section className="relative m-3 h-[50vh] min-h-[360px] overflow-hidden rounded-2xl bg-neutral-300 dark:bg-neutral-800">
            <img src={image} alt="" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-12">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    {badge}
                </span>
                <Heading className="mt-4 text-3xl md:text-6xl font-bold tracking-tight text-white">
                    {title}
                </Heading>
                <p className="mt-3 text-sm text-white/80">{children}</p>
            </div>
        </section>
    );
};

export default HeroBanner;