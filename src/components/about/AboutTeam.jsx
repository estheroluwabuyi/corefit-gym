import FadeInSection from "../FadeInSection";

const teamMembers = [
  {
    name: "Emma Brooks",
    role: "Head Coach",
    img: "/images/team/coach.webp",
    bio: "Emma brings 7+ years of coaching experience, known for her warm approach and uplifting energy.",
  },
  {
    name: "Jordan Miles",
    role: "Fitness Instructor",
    img: "/images/team/fitness.webp",
    bio: "Jordan keeps every session fun and engaging, helping members stay motivated and consistent.",
  },
  {
    name: "Sofia Daniels",
    role: "Nutrition Coach",
    img: "/images/team/nutrition.webp",
    bio: "Sofia creates simple, friendly nutrition plans designed to support real, sustainable progress.",
  },
  {
    name: "Liam Carter",
    role: "Mobility & Wellness Specialist",
    img: "/images/team/wellness.webp",
    bio: "Liam focuses on flexibility, posture, and recovery, making fitness feel safe and enjoyable.",
  },
];

function AboutTeam() {
  return (
    <FadeInSection animation="blur" delay={0.3}>
      <section className="mt-[6rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-[1.5rem] md:text-[1.7rem] text-center mx-auto font-semibold font-montserrat mb-2">
            Meet Our Team
          </h2>
          <div className="h-1.5 w-20 bg-secondary  rounded-full mb-7"></div>
        </div>

        <div className="grid grid-cols-1 max-w-2xl sm:grid-cols-2 xl:grid-cols-4 xl:max-w-[1300px] mx-auto gap-10 mt-10 sm:max-w-6xl">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-black/90 p-6 py-10 lg:py-15 rounded-xl shadow-lg border border-white/10 hover:scale-[1.02] transition-all duration-500"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-[10rem] h-[10rem] object-cover rounded-full mx-auto border-4  border-secondary shadow-md"
              />

              <h3 className="mt-6 text-[1.5rem] font-semibold text-center">
                {member.name}
              </h3>
              <p className="text-secondary text-[1.2rem] font-medium uppercase text-center mt-2">
                {member.role}
              </p>

              <p className="text-text/80 tracking-wider leading-relaxed  text-center mt-4 text-[1.4rem]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

export default AboutTeam;
