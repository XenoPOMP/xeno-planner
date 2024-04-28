import { axiosWithAuth } from '@/src/api/interceptors.ts';
import type { IProfileResponse, UserFormType } from '@/src/types';

export class UserService {
  private static BASE_URL = '/user/profile';

  static async getProfile() {
    const response = await axiosWithAuth.get<IProfileResponse>(this.BASE_URL);
    return response.data;
  }

  static async update(data: UserFormType) {
    const response = await axiosWithAuth.put(this.BASE_URL, data);
    return response.data;
  }
}
