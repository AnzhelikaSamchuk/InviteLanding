export interface ISuccessAttributeDto {
  key: string;
  title: string;
  subtitle?: string;
  link?: string;
  buttonText?: string;
  channelName?: string;

  createdAt: string;
  updatedAt: string;

  locale: string;
}
