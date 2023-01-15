export interface AxiosMethods {
  get<T>(url: string): Promise<T>;
}
