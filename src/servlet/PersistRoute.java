package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import model.User;
import postgres.RoutePostgres;

/**
 * Servlet implementation class PersistRoute
 */
@WebServlet("/PersistRoute")
public class PersistRoute extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PersistRoute() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		String jsonRoute = request.getParameter("txtJsonRoute");
		int valutation = Integer.valueOf(request.getParameter("txtRouteValutation"));
		if(!user.getUsername().equals("guest")){
			try {
				JSONObject obj = new JSONObject(jsonRoute);
				JSONObject startPoint = obj.getJSONObject("startPoint");
				JSONObject endPoint = obj.getJSONObject("endPoint");
				JSONArray intermediatePoints = obj.getJSONArray("intermediatePoints");
				
				RoutePostgres.persistRoute(startPoint, endPoint, intermediatePoints, user, valutation);
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	}
}
