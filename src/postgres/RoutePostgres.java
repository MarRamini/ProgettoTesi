package postgres;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import fi.foyt.foursquare.api.FoursquareApiException;
import fi.foyt.foursquare.api.entities.CompactVenue;
import model.User;
import model.Venue;
import socialAndServices.Foursquare;

public class RoutePostgres {
	
	public static void persistRoute(JSONObject startPoint, JSONObject endPoint, JSONArray intermediatePoints, User user, int valutation) throws PersistenceException{
		
		DataSource datasource = new DataSource();
		Connection connection = null;
		PreparedStatement statement = null;
		
		try{
			connection = datasource.getConnection();
			String query = "INSERT INTO routes(start, ending, stops, userid, valutation) VALUES ( ?, ?, ?, ?, ?);";
			statement = connection.prepareStatement(query);
			
			statement.setString(1, startPoint.toString());
			statement.setString(2, endPoint.toString());
			statement.setString(3, intermediatePoints.toString());
			statement.setInt(4, user.getId());
			statement.setInt(5, valutation);
			
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
}
