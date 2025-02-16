import { FirebaseError } from 'firebase/app'
import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { db } from "../../config/firestore"
import { ITask } from "../../config/user.data"

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
  get: async (userId: string) => {
    try {
      const tasksRef = collection(db, "users", userId, 'tasks')
      const querySnapshot = await getDocs(tasksRef)
      const tasks = querySnapshot.docs.map(doc => {
        const data = doc.data()

        return {
          uid: data.uid,
          title: data.title,
          description: data.description,
          status: data.status,
          startDate: data.startDate,
          endDate: data.endDate,
          priority: data.priority,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt
        }
      })

      return tasks
    } catch (error: unknown) {
      console.error(error)
      if (error instanceof FirebaseError) {
        throw new Error("Tasks were not received")
      }
      throw new Error("Tasks were not received")
    }
  },
  update: () => { },
  delete: () => { }
}