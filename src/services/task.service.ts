import { axiosWithAuth } from '@/src/api/interceptors.ts';
import type { ITaskResponse, TaskFormStateType } from '@/src/types';

export class TaskService {
  private static BASE_URL = '/user/task';

  static async getTasks() {
    const response = await axiosWithAuth.get<ITaskResponse[]>(this.BASE_URL);
    return response.data;
  }

  static async createTask(data: TaskFormStateType) {
    return axiosWithAuth.post(this.BASE_URL, data);
  }

  static async updateTask(id: string, data: TaskFormStateType) {
    return axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
  }

  static async deleteTask(id: string) {
    return axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
  }
}
