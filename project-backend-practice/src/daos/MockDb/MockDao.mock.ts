
import {createConnection, Connection} from 'typeorm';
export class MockDaoMock {

    // replace with connection to database relational possibly
    // private readonly dbFilePath = 'src/daos/MockDb/MockDb.json';

    protected async openDb(): Promise<Connection | null> {
        const connection = await createConnection();
        if (connection) {
            // tslint:disable-next-line:no-console
            console.log(connection);
            return connection;
        }

        return null;
    }

    // protected saveDb(db: any): Promise<any> {
    //     return jsonfile.writeFile(this.dbFilePath, db);
    // }
}
