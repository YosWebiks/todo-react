import { v4 } from "uuid"

export default class Todo {
    public completed:boolean = false
    public created_at:Date
    public id:string
    constructor(public title:string) {
        this.created_at = new Date()
        this.id = v4()
    }
}