import React from 'react';
import Course from '../course/course';
import '../courselist/courselist.css';


const CoursesList = () => {
  const courses = [
    {
      id: 1,
      title: "AWS Mastery Marathon (30 Days Commitment)",
      lessons: 45,
      trials: 2,
      price: 0,
      isFree: true,
      imageUrl: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/193967/1718612700859Course_Thumbnail__1__lyst1718612700913.png",
      link: "https://university.pravinmishra.in/learn/Cloud-Computing-with-AWS"
    },
    {
      id: 2,
      title: "AWS Mastery - Complete Course To AWS Cloud Engineer",
      lessons: 372,
      trials: 7,
      price: 14999,
      isFree: false,
      imageUrl: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184709/1709132099330Screenshot_2024_02_28_at_45430_PMpng_lyst6350.png",
      link: "https://university.pravinmishra.in/learn/AWS-Mastery-Complete-Course-To-AWS-Cloud-Engineer"
    },
    {
      id: 3,
      title: "AWS Fundamentals - Amazon Web Services for Beginners [2024]",
      lessons: 175,
      trials: 2,
      price: 1699,
      isFree: false,
      imageUrl: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184768/1709131219826Screenshot_2024_02_28_at_44000_PMpng_lyst6258.png",
      link: "https://university.pravinmishra.in/learn/AWS-Fundamentals-Amazon-Web-Services-for-Beginners-2024"
    },
    {
      id: 4,
      title: "Mastering AWS DevOps - For AWS Engineers",
      lessons: 116,
      trials: 5,
      price: 1699,
      isFree: false,
      imageUrl: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184853/1709122169431e3otu_980_6_lyst6257.webp",
      link: "https://university.pravinmishra.in/learn/Mastering-AWS-DevOps-For-AWS-Engineers"
    },
    {
      id: 5,
      title: "AWS Lambda & Serverless Computing - Project Based Learning",
      lessons: 59,
      trials: 5,
      price: 799,
      isFree: false,
      imageUrl: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184840/1709122265345c1mzg_980_5_lyst2440.webp",
      link: "https://university.pravinmishra.in/learn/AWS-Lambda---Serverless-Computing---Project-Based-Learning"
    },
    {
      id: 6,
      title: "Linux for Cloud Engineers: A Complete Project Based Learning",
      lessons: 21,
      trials: 2,
      price: 799,
      isFree: false,
      imageUrl: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184852/1709121715852c1mta_980_4_lyst3553.webp",
      link: "https://university.pravinmishra.in/learn/Linux-for-Cloud-Engineers--A-Complete-Project-Based-Learning"
    },
    // {
    //   id: 7,
    //   title: "Practical Git & GitHub: Assignments Based Learning",
    //   lessons: 23,
    //   trials: 1,
    //   price: 799,
    //   isFree: false,
    //   imageUrl: "https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/165134/courses/184849/1709062825618mzntu_980_2_lyst1304.webp",
    //   link: "https://university.pravinmishra.in/learn/Git-and-GitHub-for-Beginners--Learn-Version-Control"
    // }
  ];

  return (
    <section className="courses-section" id="courses">
      <div className="courses-header">
        <h2>Courses</h2>
        <a 
          href="https://university.pravinmishra.in/learn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-all-btn"
        >
          View All
        </a>
      </div>
      <div className="courses-grid">
        {courses.map(course => (
          <Course
            key={course.id}
            title={course.title}
            lessons={course.lessons}
            trials={course.trials}
            price={course.price}
            imageUrl={course.imageUrl}
            link={course.link}
            isFree={course.isFree}
          />
        ))}
      </div>
    </section>
  );
};
export default CoursesList;