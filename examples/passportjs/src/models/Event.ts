import {Format, Property, PropertyType} from "@tsed/common";
import {Task} from "./Task";

export class EventCreation {
  @Format("date-time")
  startDate: Date;

  @Format("date-time")
  endDate: Date;

  @Property()
  name: string;
}

export class Event extends EventCreation {
  @Property()
  _id: string;

  @Property()
  calendarId: string;

  @PropertyType(Task)
  tasks: Task[] = [];
}
