import jsonfile from 'jsonfile';

export class MockDaoMock {
 
    // replace with connection to database relational possibly
    private readonly dbFilePath = 'src/daos/MockDb/MockDb.json';

    protected openDb(): Promise<any> {
        return jsonfile.readFile(this.dbFilePath);
    }

    protected saveDb(db: any): Promise<any> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}
