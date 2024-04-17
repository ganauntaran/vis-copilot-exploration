export interface RecommendationDTO {
    id: string;
    courseID: string;
    courseName: string;
    courseDescription: string;
    courseLink: string;
    courseImgLink: string | null;
    courseCategory: string;
    quotaAvailable: number;
    targetAudience: string;
    specificJobBand: string;
    tag: string;
    ratingscore: string;
    student: string;
    positionName: string;
    type: string;
    feedback: string;
    isSelfEnroll: boolean;
    isLecturer: boolean;
    learningObjectives: string;
    facilitators: FacilitatorData[];
  }