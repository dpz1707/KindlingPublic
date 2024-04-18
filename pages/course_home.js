import CoursesSection from "../components/coursesSection/coursesSection";
import CoursesFold from "../components/coursesFold/coursesFold";
import Footer from "../components/footer/footer"

export default function Courses() {
  return (
    <>
      <CoursesFold />
      <CoursesSection courseSectionTitle="The VC Basics" />
      <Footer></Footer>
    </>
  );
}
