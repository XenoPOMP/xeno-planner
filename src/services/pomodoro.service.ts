import { axiosWithAuth } from '@/src/api/interceptors.ts';
import type {
  IPomodoroSessionResponse,
  PomodoroRoundFormStateType,
  PomodoroSessionFormStateType,
} from '@/src/types';

export class PomodoroService {
  private static BASE_URL = '/user/timer';

  static async getTodaySession() {
    return axiosWithAuth.get<IPomodoroSessionResponse>(
      `${this.BASE_URL}/today`,
    );
  }

  static async createSession() {
    return axiosWithAuth.post<IPomodoroSessionResponse>(this.BASE_URL);
  }

  static async updateSession(id: string, data: PomodoroSessionFormStateType) {
    return axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
  }

  static async deleteSession(id: string) {
    return axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
  }

  static async updateRound(id: string, data: PomodoroRoundFormStateType) {
    return axiosWithAuth.put(`${this.BASE_URL}/round/${id}`, data);
  }
}
