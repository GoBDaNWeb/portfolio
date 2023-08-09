export interface ISkillsListProps {
  id: number;
  content: SkillsContent[];
}
export type SkillsContent = {
  img: string;
  title: string;
  bg: string;
};
