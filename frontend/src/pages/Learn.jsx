import { useState } from "react";

import Layout from "../components/layout/Layout";
import LearningHero from "../components/learning/LearningHero";
import LearningTabs from "../components/learning/LearningTabs";
import ProgressOverview from "../components/learning/ProgressOverview";
import ContinueLearning from "../components/learning/ContinueLearning";
import CourseCategories from "../components/learning/CourseCategories";
import CourseGrid from "../components/learning/CourseGrid";
import LearningWidgets from "../components/learning/LearningWidgets";
import SearchBar from "../components/learning/SearchBar";
import FilterChips from "../components/learning/FilterChips";
function Learn() {
  const [activeTab, setActiveTab] = useState("progress");

  return (
    <Layout>
      <LearningHero />
      <SearchBar/>
<FilterChips />
      <LearningTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "progress" ? (
        <>
          <ProgressOverview />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
            <ContinueLearning />
            <CourseCategories />
            
          </div>
          <LearningWidgets />
        </>
      ) : (
        <CourseGrid />
      )}
    </Layout>
  );
}

export default Learn;