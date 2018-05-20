package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;

import model.Search;
import model.User;
import model.Venue;
import postgres.PersistenceException;
import postgres.SearchPostgres;
import postgres.VenuePostgres;

/**
 * Servlet implementation class PersistRevenue
 */
@WebServlet("/PersistRevenue")
public class PersistRevenue extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PersistRevenue() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession(false);
		String jsonString = request.getParameter("venue");
		User user = (User) session.getAttribute("user");
		Venue venue = null;
		
		if(!user.getUsername().equals("guest")){
			try {
				venue = this.decodeJson(jsonString);
				
				if(venue != null && user != null){
					VenuePostgres.persistVenue(venue, user);
				}
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (PersistenceException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}	
		}
	}
	
	private Venue decodeJson(String json) throws JSONException{
		Venue venue = new Venue();
		
		try{
			JSONObject obj = new JSONObject(json);
			String venueLabel = obj.getString("label");
			double venueLatitude = obj.getDouble("latitude");
			double venueLongitude = obj.getDouble("longitude");
			String venueId = obj.getString("obj");
			boolean venueLikeFlag = obj.getBoolean("likeFlag");
			
			venue.setLabel(venueLabel);
			venue.setLatitude(venueLatitude);
			venue.setLongitude(venueLongitude);
			venue.setIdentifier(venueId);
			venue.setLikeFlag(venueLikeFlag);
			
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return venue;
	}

}
