/** @format */

export type TaskModel = {
  id: string;
  taskNumber: number;
  title: string;
  description: string;
  dateCreation: Date;
  timeInWork: number;
  dateEnding: Date;
  priority: string;
  files: File[] | string[];
  status: number;
  isPossibleToAddSubTasks: boolean;
  comments: CommentModel[];
};
export type CommentModel = {
  id: number;
  text: string;
  comments: CommentModel[];
};
