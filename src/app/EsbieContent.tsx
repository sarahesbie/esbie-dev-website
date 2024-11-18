"use client";
import {
  Button,
  CardGallery,
  FullWidthSection,
  Heading,
  HeadingWithIcon,
  Icon,
  IconGallery,
  ImageTextBlock,
  Paragraph,
  Spacer,
  TextWithTooltip,
  TwoColumnBlock,
} from "./imports";
import { cardData, techIcons, linkIcons } from "../../public/content/content";
import RandomMessage from "./RandomMessage";

const HeroSection = () => (
  <FullWidthSection>
    <ImageTextBlock
      imageSrc="/sarah-brown-web-developer.png"
      altText="hero image"
    >
      <Heading level={1}>
        Hi, I'm Sarah!👋🏼 <br />
        I'm a{" "}
        <TextWithTooltip
          text="cloud native,"
          tooltipContent="I design applications specifically for the cloud, so they can scale efficiently, recover quickly, and adapt as needed."
          gradientIndex={1}
        />{" "}
        <TextWithTooltip
          text="full-stack"
          tooltipContent="I handle both front-end and back-end development, managing everything from the user interface to the server"
          gradientIndex={2}
        />{" "}
        <TextWithTooltip
          text="web developer"
          tooltipContent="I create and maintain websites and web applications"
          gradientIndex={3}
        />
        .
      </Heading>
    </ImageTextBlock>
  </FullWidthSection>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <FullWidthSection>
    <Heading level={2}>{title}</Heading>
    <Spacer size="medium" />

    {children}
  </FullWidthSection>
);

export default function EsbieContent() {
  return (
    <>
      {" "}
      <HeroSection />
      {/* <Section title="My Work">
        <CardGallery
          cards={cardData.map((card, index) => (
            <div key={index}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
          galleryId="projects"
        />
      </Section> */}
      <FullWidthSection
        backgroundImage="/dreamy-pastel-clouds.jpeg"
        backgroundType="content"
        alignment="center"
        glassEffect={true}
      >
        {" "}
        <Spacer size="large" />
        <Heading level={2}>About Me</Heading>
        <Spacer size="small" />
        <Paragraph size="medium">
          I'm a passionate full-stack developer who thrives on building
          scalable, elegant solutions to modern web challenges. When I'm not
          coding, I'm <RandomMessage />
        </Paragraph>{" "}
        <Spacer size="large" />
      </FullWidthSection>
      <Section title="The Tools I Use">
        <IconGallery icons={techIcons} withCaptions={true} />
      </Section>
      <FullWidthSection>
        <TwoColumnBlock
          leftColumn={
            <HeadingWithIcon
              level={2}
              icon={<i className="fa-solid fa-arrow-right"></i>}
              iconPosition="right"
            >
              More from me
            </HeadingWithIcon>
          }
          rightColumn={
            <IconGallery icons={linkIcons} withCaptions={true} size="large" />
          }
        />
      </FullWidthSection>
    </>
  );
}
