package postgres;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DataSource {
	//private String dbURI = "jdbc:mysql://localhost:3306/gscorrdata_new";
	private String dbURI = "jdbc:postgresql://localhost:5432/TesiDB";
	//private String userName = "root";
	private String userName = "postgres";
	private String password = "postgres";

	public Connection getConnection() throws PersistenceException {
		Connection connection;
		try {
			//Class.forName("com.mysql.jdbc.Driver");
		    Class.forName("org.postgresql.Driver");		//driver class loading
		    /*
		     * Now the driver is registered at DriverManager (postgreSQL driver automatically
		     * registers itself at DriverManager once his class is loaded).
		     * Since driver is loaded and registered, I can obtain a connection to the database 
		     */
			connection = DriverManager.getConnection(dbURI, userName, password);
		} catch (ClassNotFoundException e) {
			System.out.println("Where is your PostgresSQL JDBC Driver?");
			e.printStackTrace();
			throw new PersistenceException(e.getMessage());
		} catch(SQLException e) {
			throw new PersistenceException(e.getMessage());
		}
		return connection;
	}

}