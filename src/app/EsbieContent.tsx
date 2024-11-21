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
  //   TextWithTooltip,
  TwoColumnBlock,
} from "../libs/imports";
import {
  cardData,
  techIcons,
  linkIcons,
  faIcons,
} from "../../public/content/content";
import RandomMessage from "../components/RandomMessage";
import GradientText from "../components/GradientText/GradientText";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PortfolioPage from "./portfolio/page";

const HeroSection = () => (
  <FullWidthSection>
    <ImageTextBlock
      imageSrc="/sarah-brown-web-developer.png"
      altText="hero image"
    >
      <Heading level={1}>
        Hi, I'm Sarah!👋🏼 <br />
        I'm a{" "}
        <GradientText
          text="cloud native,"
          //   tooltipContent="I design applications specifically for the cloud, so they can scale efficiently, recover quickly, and adapt as needed."
          gradientIndex={1}
        />{" "}
        <GradientText
          text="full-stack"
          //   tooltipContent="I handle both front-end and back-end development, managing everything from the user interface to the server"
          gradientIndex={2}
        />{" "}
        <GradientText
          text="web developer"
          //   tooltipContent="I create and maintain websites and web applications"
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
      <HeroSection /> <PortfolioPage />
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
          After several incredible years with Code Like a Girl, where I honed my
          skills as a senior software developer and tech leader, I'm now seeking
          my next opportunity. I specialise in full-stack development (Next.js,
          Node.js, AWS) and thrive in creating scalable, user-focused solutions
          while fostering inclusive, collaborative teams. Based in South
          Australia, I'm open to remote roles—let's connect and chat about how I
          can contribute to your team's success!
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
              icon={faIcons.arrowRight}
              iconPosition="right"
            >
              More from me online
            </HeadingWithIcon>
          }
          rightColumn={
            <IconGallery icons={linkIcons} withCaptions={true} size="large" />
          }
        />
      </FullWidthSection>
      <FullWidthSection>
        <HeadingWithIcon
          level={2}
          icon={faIcons.arrowRight}
          iconPosition="right"
        >
          Offline
        </HeadingWithIcon>
        <Paragraph>
          When I'm not coding I'm <RandomMessage />
        </Paragraph>
      </FullWidthSection>
    </>
  );
}
