export class Owner {
    constructor(private firstname: string, private lastname: string, private age: number) {}

    public getFirstname(): string {
        return this.firstname;
    }
    public getLastname(): string {
        return this.lastname;
    }
    public getAge(): number {
        return this.age;
    }
}