import { useState } from "react";
import Layout from "../components/layout/Layout";
import AssessmentForm from "../components/riskassessment/AssessmentForm";
import RiskReport from "../components/riskassessment/RiskReport";

function RiskAssessment() {
  const [reportData, setReportData] = useState(null);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        {reportData ? (
          <RiskReport
            data={reportData}
            onRetake={() => setReportData(null)}
          />
        ) : (
          <AssessmentForm
            onGenerate={(data) => setReportData(data)}
          />
        )}
      </div>
    </Layout>
  );
}

export default RiskAssessment;