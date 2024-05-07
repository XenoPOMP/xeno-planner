import { axiosWithAuth } from '@/src/api/interceptors.ts';
import type { ITimeBlockResponse, TimeBlockFormStateType } from '@/src/types';

export class TimeBlockService {
  private static BASE_URL = '/user/time-block';

  static async getTimeBlocks() {
    const response = await axiosWithAuth.get<ITimeBlockResponse[]>(
      this.BASE_URL,
    );
    return response.data;
  }

  static async createTimeBlock(data: TimeBlockFormStateType) {
    return axiosWithAuth.post(this.BASE_URL, data);
  }

  static async updateOrderTimeBlock(ids: string[]) {
    return axiosWithAuth.put(`${this.BASE_URL}/update-order`, {
      ids,
    });
  }

  static async updateTimeBlock(id: string, data: TimeBlockFormStateType) {
    return axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
  }

  static async deleteTimeBlock(id: string) {
    return axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
  }
}
