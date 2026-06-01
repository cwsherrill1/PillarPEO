import { Reveal } from "@/components/Reveal";

interface ArticleHeroProps {
  src: string;
  alt: string;
  caption?: string;
}

/** Editorial hero image displayed beneath the article headline. */
export const ArticleHero = ({ src, alt, caption }: ArticleHeroProps) => (
  <section className="bg-background pt-12 md:pt-16">
    <div className="container max-w-4xl">
      <Reveal>
        <figure className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
          <img
            src={src}
            alt={alt}
            loading="eager"
            className="aspect-[16/9] w-full object-cover"
          />
          {caption && (
            <figcaption className="bg-muted/30 px-4 py-2 text-center text-sm text-muted-foreground">
              {caption}
            </figcaption>
          )}
        </figure>
      </Reveal>
    </div>
  </section>
);

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
}

/** Inline supporting image used mid-article. */
export const ArticleImage = ({ src, alt, caption }: ArticleImageProps) => (
  <section className="py-12">
    <div className="container max-w-3xl">
      <Reveal>
        <figure className="overflow-hidden rounded-xl shadow-lg ring-1 ring-border">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
          {caption && (
            <figcaption className="bg-muted/30 px-4 py-2 text-center text-sm text-muted-foreground">
              {caption}
            </figcaption>
          )}
        </figure>
      </Reveal>
    </div>
  </section>
);

export default ArticleHero;
