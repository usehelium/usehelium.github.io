import {
  Navbar,
  HeroSection,
  ProductMockup,
  TrustBar,
  ProblemSection,
  FeaturesSection,
  WorkflowSection,
  ArchitectureSection,
  AdapterSection,
  SecuritySection,
  OpenSourceSection,
  RoadmapSection,
  UseCasesSection,
  DeveloperExperienceSection,
  ComparisonSection,
  CTASection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductMockup />
        <TrustBar />
        <ProblemSection />
        <FeaturesSection />
        <WorkflowSection />
        <ArchitectureSection />
        <AdapterSection />
        <SecuritySection />
        <OpenSourceSection />
        <RoadmapSection />
        <UseCasesSection />
        <DeveloperExperienceSection />
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
