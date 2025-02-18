export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  handleOk: () => void;
  handleCancel: () => void;
  handleFiledChange: (field: string, value: string) => void;
  open: boolean;
  title: string;
  eidtableValue: { question: string; answer: string };
  loading?: boolean;
}
