export class State {
  public todoList: any = [
    {
      title: "Title One",
      description: "Description One",
      status: 0,
      id: 1
    },
    {
      title: "Title Two",
      description: "Description Two",
      status: 1,
      id: 2
    }
  ];
  public title?: string = "";
  public description?: string = "";
  public id?: number = 0;
  public status?: boolean = false;
}
