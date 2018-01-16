package socialAndServices;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import model.Venue;
import postgres.DataSource;
import postgres.PersistenceException;
import fi.foyt.foursquare.api.FoursquareApi;
import fi.foyt.foursquare.api.FoursquareApiException;
import fi.foyt.foursquare.api.Result;
import fi.foyt.foursquare.api.entities.CompactVenue;
import fi.foyt.foursquare.api.entities.VenuesSearchResult;

public class Foursquare {
	
	private static final String ID = "YYKMILQ24YMAF1WSXVDMQRIAUUYBAZ4HJFW5KCCKEEE2M1DA";
	private static final String SECRET = "4DEGSCLCLJPMF31IJD5XT2Q2B01RUJROKLIMWBNS4YWAIVG3";
	private static final String CALLBACK = "***";
	
	
	public static CompactVenue searchSingleVenue(String ll) throws FoursquareApiException {
		
		CompactVenue venue = null;
		
		// First we need a initialize FoursquareApi
		FoursquareApi foursquareApi = new FoursquareApi(ID, SECRET, CALLBACK);
		
		// After client has been initialized we can make queries
		/*
		 * Parameter:
		 *  - String ll
		 *  - Double llAcc
		 *  - Double alt
		 *  - Double altAcc
		 *  - String query
		 *  - Integer limit
		 *  - String intent
		 *  - String categoryId
		 *  - String url
		 *  - String providerId
		 *  - String linkedId
		 */
		Result<VenuesSearchResult> result = foursquareApi.venuesSearch(ll, null, null, null, null, 1, "checkin", null, null, null, null);
		
		if (result.getMeta().getCode() == 200) {	// query is ok
			if (result.getResult().getVenues().length < 1)
				System.out.println("ERR: ll = " + ll);
			else
				venue = result.getResult().getVenues()[0];			
		} else {
			// TODO: Proper error handling
			System.out.print("Error occured: ");
			//System.out.println("  code: " + result.getMeta().getCode());
			//System.out.println("  type: " + result.getMeta().getErrorType());
			System.out.println("  detail: " + result.getMeta().getErrorDetail());
		}
		
		return venue;
	}
	
	
	
public static CompactVenue searchSingleVenueMatch(Venue v) throws FoursquareApiException {
		
		CompactVenue venue = null;
		
		// First we need a initialize FoursquareApi
		FoursquareApi foursquareApi = new FoursquareApi(ID, SECRET, CALLBACK);
		
		// After client has been initialized we can make queries
		/*
		 * Parameter:
		 *  - String ll
		 *  - Double llAcc
		 *  - Double alt
		 *  - Double altAcc
		 *  - String query
		 *  - Integer limit
		 *  - String intent
		 *  - String categoryId
		 *  - String url
		 *  - String providerId
		 *  - String linkedId
		 */
		Result<VenuesSearchResult> result = foursquareApi.venuesSearch(v.getLatitude()+","+v.getLongitude(), null, null, null, v.getName_fq(), 1, "match", null, null, null, null);
		
		if (result.getMeta().getCode() == 200) {	// query is ok
			if (result.getResult().getVenues().length < 1)
				System.out.println("ERR: ll = " + v.getLatitude()+","+v.getLongitude() + " (" + v.getName_fq() + ")");
			else
				venue = result.getResult().getVenues()[0];			
		} else {
			// TODO: Proper error handling
			System.out.print("Error occured: ");
			//System.out.println("  code: " + result.getMeta().getCode());
			//System.out.println("  type: " + result.getMeta().getErrorType());
			System.out.println("  detail: " + result.getMeta().getErrorDetail());
		}
		
		return venue;
	}
	
	
	
	public static CompactVenue[] searchVenues(String ll) throws FoursquareApiException {
		
		CompactVenue[] venues = null;
		
		// First we need a initialize FoursquareApi
		FoursquareApi foursquareApi = new FoursquareApi(ID, SECRET, CALLBACK);
		
		// After client has been initialized we can make queries
		/*
		 * Parameter:
		 *  - String ll
		 *  - Double llAcc
		 *  - Double alt
		 *  - Double altAcc
		 *  - String query
		 *  - Integer limit
		 *  - String intent
		 *  - String categoryId
		 *  - String url
		 *  - String providerId
		 *  - String linkedId
		 */
		Result<VenuesSearchResult> result = foursquareApi.venuesSearch(ll, null, null, null, null, 10, "checkin", null, null, null, null);
		
		if (result.getMeta().getCode() == 200) {	// query is ok						
			venues = result.getResult().getVenues();
		} else {
			// TODO: Proper error handling
			System.out.println("Error occured: ");
			System.out.println("  code: " + result.getMeta().getCode());
			System.out.println("  type: " + result.getMeta().getErrorType());
			System.out.println("  detail: " + result.getMeta().getErrorDetail());
		}
		
		return venues;
	}
	
	
	public static void updateNameAndCategoryFoursquareFromTo(int idFrom, int idTo) {
		DataSource datasource = new DataSource();
		Connection connection = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		String query = "select id, latitude_or, longitude_or from venues_original where id >= " + idFrom + " and id <= " + idTo;
		String ll;
		
		String name;
		String category;
		CompactVenue compactVenue;
		String update = "update venues_original set latitude = ?, longitude = ?, name_fq = ?, category_fq = ? where id = ?";
		
		try {
			connection = datasource.getConnection();
			statement = connection.prepareStatement(query);
			result = statement.executeQuery();
			while (result.next()) {
				ll = result.getString("latitude_or") + "," + result.getString("longitude_or");
				
				compactVenue = searchSingleVenue(ll);
				if (compactVenue != null) {
					name = compactVenue.getName();
					if (compactVenue.getCategories() != null && compactVenue.getCategories().length > 0)
						category = compactVenue.getCategories()[0].getName();
					else
						category = null;
				} else {
					name = null;
					category = null;				
				}
				
				statement = connection.prepareStatement(update);
				if (compactVenue != null && compactVenue.getLocation().getLat() != null) {
					statement.setBigDecimal(1, new BigDecimal(compactVenue.getLocation().getLat().toString()));					
				} else {
					statement.setBigDecimal(1, new BigDecimal(result.getString("latitude_or")));
				}
				if (compactVenue != null && compactVenue.getLocation().getLng() != null) {
					statement.setBigDecimal(2, new BigDecimal(compactVenue.getLocation().getLng().toString()));
				} else {
					statement.setBigDecimal(2, new BigDecimal(result.getString("longitude_or")));
				}
				statement.setString(3, name);
				statement.setString(4, category);
				statement.setInt(5, result.getInt("id"));
				statement.executeUpdate();				
				
			}
		} catch (PersistenceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FoursquareApiException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} finally {
			try {
				if (result != null)
					result.close();
				if (statement != null) 
					statement.close();
				if (connection!= null)
					connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	
	
	public static void updateNameAndCategoryFoursquareFromVenuesList(List<Venue> venues) {
		DataSource datasource = new DataSource();
		Connection connection = null;
		PreparedStatement statement = null;
		
		String ll;
		String name;
		String category;
		CompactVenue compactVenue;
		String update = "update venues_original set latitude = ?, longitude = ?, name_fq = ?, category_fq = ? where id = ?";
		
		try {
			connection = datasource.getConnection();
			for (Venue v: venues) {
				ll = v.getLatitude() + "," + v.getLongitude();
				
				compactVenue = searchSingleVenue(ll);
				if (compactVenue != null) {
					name = compactVenue.getName();
					if (compactVenue.getCategories() != null && compactVenue.getCategories().length > 0)
						category = compactVenue.getCategories()[0].getName();
					else
						category = null;
				} else {
					name = null;
					category = null;				
				}
				
				statement = connection.prepareStatement(update);
				if (compactVenue != null && compactVenue.getLocation().getLat() != null) {
					statement.setBigDecimal(1, new BigDecimal(compactVenue.getLocation().getLat().toString()));					
				} else {
					statement.setBigDecimal(1, new BigDecimal(v.getLatitude()));
				}
				if (compactVenue != null && compactVenue.getLocation().getLng() != null) {
					statement.setBigDecimal(2, new BigDecimal(compactVenue.getLocation().getLng().toString()));
				} else {
					statement.setBigDecimal(2, new BigDecimal(v.getLongitude()));
				}
				statement.setString(3, name);
				statement.setString(4, category);
				statement.setInt(5, v.getId());
				statement.executeUpdate();				
				
			}
		} catch (PersistenceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FoursquareApiException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} finally {
			try {
				if (statement != null) 
					statement.close();
				if (connection!= null)
					connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	
	
	
	public static void updateCategoryFoursquareAndFoursquareId(List<Venue> venues) {
		DataSource datasource = new DataSource();
		Connection connection = null;
		PreparedStatement statement = null;
		
		String ll;
		String foursquareId;
		String category;
		CompactVenue compactVenue;
		String update = "update venues set category_fq = ?, foursquare_id = ? where id = ?";
		
		try {
			connection = datasource.getConnection();
			for (Venue v: venues) {
				
				ll = v.getLatitude() + "," + v.getLongitude();
				compactVenue = searchSingleVenue(ll);
				
				if (compactVenue != null && compactVenue.getName().equals(v.getName_fq())) {
					foursquareId = compactVenue.getId();
					if (compactVenue.getCategories() != null && compactVenue.getCategories().length > 0) {						
						category = compactVenue.getCategories()[0].getName();
					}
					else {
						category = null;
					}						
				} else {
					category = null;
					foursquareId = null;
				}
				
				statement = connection.prepareStatement(update);
				statement.setString(1, category);
				statement.setString(2, foursquareId);
				statement.setInt(3, v.getId());
				statement.executeUpdate();				
				
			}
		} catch (PersistenceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FoursquareApiException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} finally {
			try {
				if (statement != null) 
					statement.close();
				if (connection!= null)
					connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	

}