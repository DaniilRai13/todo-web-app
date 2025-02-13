import { doc, setDoc } from "firebase/firestore"
import { db } from "../../config/firestore"
import { ITask } from "../../config/user.data"
import { FirebaseError } from 'firebase/app'

export const tasksService = {
  create: async (userId: string, task: ITask): Promise<ITask> => {
    try {
      const taskRef = doc(db, "users", userId, 'tasks', task.uid)
      await setDoc(taskRef, task)
      return task
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        throw new Error("Task dosn't be created")
      }
      throw new Error("Task dosn't be created")
    }
  },
  get: () => { },
  update: () => { },
  delete: () => { }
}