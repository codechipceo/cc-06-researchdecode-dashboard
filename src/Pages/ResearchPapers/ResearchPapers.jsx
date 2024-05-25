import { useResearchPaper } from "../../Hooks/use-researchPaper";

export const ResearchPapers = () => {
  const { hooksInstance, researchPaperData } = useResearchPaper();
  console.log(researchPaperData);
  return <div></div>;
};
