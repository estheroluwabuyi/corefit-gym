import SectionHeader from "../SectionHeader";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import FadeInSection from "../FadeInSection";

const blogPosts = [
  {
    title: "Beginner’s Guide to Strength Training",
    intro:
      "Starting your fitness journey? Learn the basics of strength training and how to do it safely...",
    img: "/images/blog/blog1.webp",
    date: "10/08/2025",
    id: 1,
    alt: "A beginner lifting dumbbells",
  },
  {
    title: "5 Easy Stretches to Do Every Morning",
    intro:
      "Simple stretches to help you feel energised and reduce stiffness throughout the day...",
    img: "/images/blog/blog2i.webp",
    date: "02/08/2025",
    id: 2,
    alt: "A person doing morning stretches",
  },
  {
    title: "How to Choose the Right Fitness Equipment",
    intro:
      "From treadmills to resistance bands—find out what’s worth your money and space...",
    img: "/images/blog/blog3.webp",
    date: "20/08/2025",
    id: 3,
    alt: "fitness equipment",
  },
  {
    title: "Healthy Snacks for Pre and Post-Workout",
    intro:
      "Fuel your workouts with easy, nutritious snacks you can prepare in minutes...",
    img: "/images/blog/blog4.webp",
    date: "12/07/2025",
    id: 4,
    alt: "Healthy snacks on a table",
  },
];

function BlogPreview() {
  return (
    <div className="bg-primary px-8 py-12 pb-15 lg:pb-20 lg:px-[5rem]">
      <SectionHeader
        title="From the "
        highlight="Fitness Corner"
        highlightColor="text"
        titleColor="secondary"
      />

      <p className="md:text-[1.35rem] lg:text-[1.55rem] tracking-wider sm:max-w-5xl lg:max-w-7xl text-center mx-auto">
        Stay informed and inspired with our latest articles. From workout tips
        to healthy recipes, we share simple, practical advice to help you live
        well and stay active.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {blogPosts.map((post) => (
          <FadeInSection delay={0.4}>
            <div
              key={post.id}
              className="relative bg-dark-alt rounded-2xl shadow-lg"
            >
              <img
                src={post.img}
                alt={post.alt}
                className="w-full h-[200px] rounded-t-2xl"
              />
              <div className="flex items-center  gap-2 py-1 px-1.5   bg-dark-alt/90 rounded-[3px] w-[10rem] absolute top-0 left-0 mt-5 ml-5 text-[1.25rem]">
                <FaCalendarAlt className="mb-1" />
                {post["date"]}
              </div>
              <div className="p-4 py-8">
                <h3 className="font-semibold text-secondary mt-2 font-montserrat uppercase text-center">
                  {post.title}
                </h3>
                <p className="text-left pt-5">
                  {post.intro}
                  <span className="text-secondary text-[0.9rem] font-semibold  ">
                    <Link to="/blog">Read More</Link>
                  </span>
                </p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}

export default BlogPreview;
