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
import postgres.PersistenceException;
import postgres.SearchPostgres;

/**
 * Servlet implementation class PersistSearch
 */
@WebServlet("/PersistSearch")
public class PersistSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PersistSearch() {
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
		String jsonString = request.getParameter("search");
		Search search = null;
		HttpSession session = request.getSession(false);
		User user = (User) session.getAttribute("user");
		
		try {
			search = this.decodeJson(jsonString);
			
			if(search != null && user != null){
				SearchPostgres.persistSearch(search, user);
			}
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (PersistenceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
	
	private Search decodeJson(String json) throws JSONException{
		Search search = new Search();
		
		try{
			JSONObject obj = new JSONObject(json);
			String searchAddress = obj.getString("address");
			double searchLatitude = obj.getDouble("latitude");
			double searchLongitude = obj.getDouble("longitude");
			search.setAddress(searchAddress);
			search.setLatitude(searchLatitude);
			search.setLongitude(searchLongitude);
			
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return search;
	}

}
