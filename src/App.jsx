import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () => {
  return (
    <>
      <NavBar />

      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Developers and Employers --> */}
      <HomeCards />

      {/* <!-- Browse Jobs --> */}

      <JobListings />

      {/* {View All Jobs} */}
      <ViewAllJobs/>
      
    </>
  );
};

export default App;
