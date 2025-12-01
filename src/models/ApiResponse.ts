export type ApiResponse<T> = {
  success: boolean;
  error: Error;
  data: T;
};
