
export interface IDataTableAction {
    actionType: string;
    actionCallBack: (id: string) => void;
}