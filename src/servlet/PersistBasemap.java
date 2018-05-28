package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.User;
import postgres.PersistenceException;
import postgres.UserPostgres;

/**
 * Servlet implementation class persistBasemap
 */
@WebServlet("/PersistBasemap")
public class PersistBasemap extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PersistBasemap() {
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
	
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		String prossimaPagina = null;
		String basemap = request.getParameter("txtBasemap");
		
		try{
			
			UserPostgres.persistBasemap(user, basemap);
			prossimaPagina = "/login.jsp";
			user.setBasemap(basemap);
			
		}catch(PersistenceException e){
			e.printStackTrace();
		}
		
		ServletContext application  = getServletContext();
		RequestDispatcher rd = application.getRequestDispatcher(prossimaPagina);
		rd.forward(request, response);
	}

}
