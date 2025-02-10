import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firestore";
import { ITask } from "../../config/user.data";

export const tasksService = {
  create: async (id: string, data: ITask): Promise<ITask> => {
    try {
      const taskRef = doc(db, "user", id, 'tasks', data.id)
      await setDoc(taskRef, data)
      return data;
    } catch (error) {
      throw new Error("Task dosn't be created")
    }
  },
  get: () => { },
  update: () => { },
  delete: () => { },
  sort: () => { },
  find: () => { }
}