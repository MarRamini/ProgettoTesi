package postgres;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Search;
import model.User;

public class SearchPostgres {
	
	public static void persistSearch(Search search, User user) throws PersistenceException{
		
		DataSource datasource = new DataSource();
		Connection connection = null;
		PreparedStatement statement = null;
		
		try{
			connection = datasource.getConnection();
			String query = "INSERT INTO Searches(address, latitude, longitude, userid) VALUES ( ?, ?, ?, ?);";
			statement = connection.prepareStatement(query);
			
			statement.setString(1, search.getAddress());
			statement.setDouble(2, search.getLatitude());
			statement.setDouble(3, search.getLongitude());
			statement.setInt(4, user.getId());
			
			statement.executeUpdate();			
			
		} catch (SQLException e) {
			throw new PersistenceException(e.getMessage());
		} catch (PersistenceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (statement != null) 
					statement.close();
				if (connection!= null)
					connection.close();
			} catch (SQLException e) {
				throw new PersistenceException(e.getMessage());
			}
		}
	}
	
	public static List<Search> retrieveSearchesByUser(User user) throws PersistenceException{
		
		DataSource datasource = new DataSource();
		Connection connection = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		List<Search> searches = new ArrayList<Search>();
		
		try{
			connection = datasource.getConnection();
			String query = "SELECT * FROM searches where userid='" + user.getId() + "';";
			statement = connection.prepareStatement(query);
			result = statement.executeQuery();
			
			while(result.next()){
				Search search = new Search();
				search.setAddress(result.getString("address"));
				search.setLatitude(result.getDouble("latitude"));
				search.setLongitude(result.getDouble("longitude"));
				
				searches.add(search);
			}
			
		}catch (SQLException e) {
			throw new PersistenceException(e.getMessage());
		} finally {
			try {
				if (result != null)
					result.close();
				if (statement != null) 
					statement.close();
				if (connection!= null)
					connection.close();
			} catch (SQLException e) {
				throw new PersistenceException(e.getMessage());
			}
		}
		
		return searches;
	}
	
}
