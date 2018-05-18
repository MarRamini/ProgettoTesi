package servlet;

import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import model.Search;
import model.User;
import postgres.PersistenceException;
import postgres.SearchPostgres;

/**
 * Servlet implementation class RetrievePreferredSearches
 */
@WebServlet("/RetrievePreferredSearches")
public class RetrievePreferredSearches extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RetrievePreferredSearches() {
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
		User user = (User) session.getAttribute("user");		
		List<Search> searches = null;
		Map<String, Double> location2weight = new HashMap<String, Double>();
		
		if(!user.getUsername().equals("guest")){
			try {
				searches = SearchPostgres.retrieveSearchesByUser(user);
				Iterator<Search> iter = searches.iterator();
				while(iter.hasNext()){
					int positiveCounter = 0;
					Search currentSearch = iter.next();	
					if(!location2weight.containsKey(currentSearch.getAddress())){
						for(Search search : searches){
							if(search.equals(currentSearch))
								positiveCounter ++;
						}
						double weight = (double)positiveCounter / (double)searches.size();
						location2weight.put(currentSearch.getAddress(), weight);
					}
				}
				String jsonString = this.encodeJson(location2weight);
				response.setContentType("application/json");
				response.getWriter().write(jsonString);
				
			} catch (PersistenceException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}		
	}
	
	private String encodeJson(Map<String,Double> map){
		String jsonString = "";
		
		try{
			JSONObject obj= new JSONObject();
			Set<String> keys = map.keySet();
			int counter = 1;
			for(String key : keys){
				JSONObject obj1 = new JSONObject();
				obj1.put("address", key);
				obj1.put("weight", map.get(key));
				obj.put(String.valueOf(counter), obj1);
				counter ++;
			}
			jsonString = obj.toString();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return jsonString;
	}

}
