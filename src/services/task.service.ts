import { axiosWithAuth } from '@/src/api/interceptors.ts';
import { type EnumDndDestId } from '@/src/data/EnumDndDestId.ts';
import { FILTERS } from '@/src/data/task-columns.data.ts';
import type { ITaskResponse, TaskFormStateType } from '@/src/types';

export class TaskService {
  private static BASE_URL = '/user/task';

  /**
   * Return date for task that is being drag-n-dropped
   * or created.
   * @param destColumnId
   */
  static issueDate(
    destColumnId: Exclude<EnumDndDestId, EnumDndDestId.COMPLETED>,
  ): Date {
    /** Date applicant. */
    let newCreatedAt: Date;

    /** Prevent potential filter collisions. */
    switch (destColumnId) {
      case 'on-this-week': {
        const tomorrow = FILTERS.tomorrow.startOf('day');
        const endOfWeek = FILTERS[destColumnId].startOf('day');
        const applicant = tomorrow.add(1, 'day').startOf('day');

        /** Collision detected */
        if (applicant.isSameOrBefore(endOfWeek)) {
          applicant.add(1, 'day');
        }

        newCreatedAt = applicant.startOf('day').toDate();
        break;
      }

      // Next week must point to first day in
      // week, however this day may be the next day (tomorrow).
      case 'on-next-week': {
        /** This date is taken from filter directly. */
        const dateApplicant = FILTERS[destColumnId]
          .subtract(7, 'day')
          .add(1, 'day')
          .startOf('day');

        /** This date equals to tomorrow. */
        const nextDayDate = FILTERS.tomorrow.startOf('day');

        /** Collision detected */
        if (dateApplicant.isSame(nextDayDate)) {
          newCreatedAt = dateApplicant.add(1, 'day').toDate();
          break;
        }

        /** No collision */
        newCreatedAt = dateApplicant.toDate();
        break;
      }

      // By default, newCreatedAt is assigned
      // to exact date from filter.
      default: {
        newCreatedAt = FILTERS[destColumnId].toDate();
        break;
      }
    }

    return newCreatedAt;
  }

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
