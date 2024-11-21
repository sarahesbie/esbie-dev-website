import { FullWidthSection, CardGallery, Spacer } from "@/libs/imports";
import { portfolioItems } from "./content";
import styles from "./Portfolio.module.scss";

const PortfolioPage = () => {
  const fallbackColor = "#b2d8d8";

  const cards = portfolioItems.map((item) => ({
    content: <h3>{item.title}</h3>,
    backgroundImage: item.images?.[0],
    backgroundColor: item.images?.[0] ? undefined : fallbackColor,
    link: `/portfolio/${item.slug}`,
  }));

  return (
    <FullWidthSection>
      <div className={styles.portfolioPage}>
        <h2>My Work</h2>
        <Spacer />
        <CardGallery cards={cards} galleryId="portfolio-cards" />
      </div>
    </FullWidthSection>
  );
};

export default PortfolioPage;
