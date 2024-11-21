import { notFound } from "next/navigation";
import { portfolioItems } from "../content";
import {
  ReverseSplitSection,
  Paragraph,
  Heading,
  SplitSection,
  Icon,
  Spacer,
} from "@/libs/imports";
import Link from "next/link";
import styles from "../Portfolio.module.scss";
import { faIcons } from "../../../../public/content/content";

interface Props {
  params: { slug: string };
}

const PortfolioItemPage = ({ params }: Props) => {
  const item = portfolioItems.find((item) => item.slug === params.slug);

  if (!item) {
    notFound();
  }

  const leftContent = item.images?.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`${item.title} - Image ${index + 1}`}
      style={{ maxWidth: "100%", borderRadius: "8px" }}
    />
  ));

  const rightContent = (
    <div className={styles.portfolioItem}>
      <Heading level={1}>{item.title}</Heading>
      {item.subtitle && <Heading level={3}>{item.subtitle}</Heading>}
      <Spacer />
      {item.content.map((section, index) => (
        <div key={index}>
          <Heading level={2}>{section.heading}</Heading>
          <Spacer />
          {section.paragraphs.map((para, i) => (
            <Paragraph size="small" key={i}>
              {para}
            </Paragraph>
          ))}
          {section.link && (
            <Link href={section.link.href}>{section.link.label}</Link>
          )}{" "}
          <Spacer />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <header className={styles.portfolioHeader}>
        <Link href="/">
          <Icon>{faIcons.arrowLeft}</Icon>
          <p>back to main site</p>
        </Link>
        {/* <span>
          <Icon>{faIcons.arrowRight}</Icon>next project
        </span> */}
      </header>

      {item.images ? (
        <div className={styles.textAndImages}>
          <ReverseSplitSection
            leftContent={leftContent}
            rightContent={rightContent}
          />
        </div>
      ) : (
        <div className={styles.textOnly}>
          {" "}
          <SplitSection leftContent={rightContent} rightContent={<></>} />
        </div>
      )}
    </>
  );
};

export default PortfolioItemPage;
