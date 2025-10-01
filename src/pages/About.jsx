import PageHeader from "../components/PageHeader";

function About() {
  return (
    <div className=" bg-dark-alt min-h-screen  pb-15 lg:pb-20">
      <PageHeader
        title="About"
        titleSpan=" Us"
        titleColor="text-secondary"
        subtitle="Our gym is more than just a workout space—it’s a place where support, energy, and dedication come together to fuel every fitness journey."
      />
    </div>
  );
}

export default About;
