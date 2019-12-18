export interface ITaskItem {
  id: number,
  name: string;
  description: string;
  status: string;
  starred: boolean;
  dueDate: Date;
  completedDate: Date;
  isOverdue: boolean;
  isComplete: boolean;

}
