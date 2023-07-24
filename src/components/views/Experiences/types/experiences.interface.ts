export interface ISkillsListProps {
  id: number;
  content: SkillsContent[];
}
type SkillsContent = {
  img: any;
  title: string;
  bg: string;
};
