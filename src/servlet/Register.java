package servlet;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

import postgres.CheckinPostgres;
import postgres.PersistenceException;
import postgres.UserPostgres;
import model.User;

/**
 * Servlet implementation class Register
 */
@WebServlet("/Register")
@MultipartConfig
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Register() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String prossimaPagina = "";
		
		String username = request.getParameter("txtUsername");
		String password = request.getParameter("txtPassword");
		int id = username.hashCode();
		HttpSession session = request.getSession(false);
		
		try {
			if (UserPostgres.RetrieveUserById(id) != null) { 
				prossimaPagina = "/register.jsp";
				request.setAttribute("error", "User already exists");
			}
			else {
				String gender = request.getParameter("txtGender");
				String education = request.getParameter("txtEducation");
				String profession = request.getParameter("txtProfession");
				//controllo sull'input dell'età
				int age = Integer.parseInt(request.getParameter("txtAge"));
				String name = request.getParameter("txtName");
				String surname = request.getParameter("txtSurname");
				String email = request.getParameter("txtEmail");
				String nationality = request.getParameter("txtNationality");
				Part filePart = request.getPart("avatar"); // Retrieves <input type="file" name="avatar">
			    InputStream fileContent = filePart.getInputStream();
				
				User user = new User();
				user.setId(username.hashCode());
				user.setUsername(username);
				user.setPassword(password);
				user.setGender(gender);
				user.setAge(age);
				user.setName(name);
				user.setEmail(email);
				user.setSurname(surname);
				user.setNationality(nationality);
				user.setAvatar(fileContent);
				user.setEducation(education);
				user.setProfession(profession);
				
				/*user.setWeight(1, Double.valueOf(request.getParameter("txtArts")));
				user.setWeight(2, Double.valueOf(request.getParameter("txtEntertainment")));
				user.setWeight(3, Double.valueOf(request.getParameter("txtMuseum")));
				user.setWeight(4, Double.valueOf(request.getParameter("txtHistory")));				
				user.setWeight(5, Double.valueOf(request.getParameter("txtFood")));
				user.setWeight(6, Double.valueOf(request.getParameter("txtNightlife")));
				user.setWeight(7, Double.valueOf(request.getParameter("txtOutdoors")));
				user.setWeight(8, Double.valueOf(request.getParameter("txtAthletics")));
				user.setWeight(9, Double.valueOf(request.getParameter("txtChurch")));
				user.setWeight(10, Double.valueOf(request.getParameter("txtShop")));*/
				
				
				//user.setId(retrieveMostSmilarUser(user));
				
				//UserPostgres.persistUser(user);
				prossimaPagina = "/basemapChoice.jsp";
				session = request.getSession();
				session.setAttribute("user", user);
				request.setAttribute("username", username);
				request.setAttribute("name", name);
				request.setAttribute("surname", surname);
				request.setAttribute("gender", gender);
				request.setAttribute("nationality", nationality);
				request.setAttribute("age", age);
				request.setAttribute("email", email);
				request.setAttribute("avatar", fileContent);
				request.setAttribute("registerSucceded", "true");
			}
		} catch (PersistenceException e) {
			e.printStackTrace();
		}	
		
		ServletContext application  = getServletContext();
		RequestDispatcher rd = application.getRequestDispatcher(prossimaPagina);
		rd.forward(request, response);
	}
	
	
	
	public int retrieveMostSmilarUser(User user) throws PersistenceException {
		List<User> users = UserPostgres.getAllUsers();
		int id = -1;
		int numCheckins = 0;
		
		double AB;		// A•B
		double A = 0;	// A
		double B;		// B^2
		double sim = 0;
		double simTemp;
		
		for (int i=1; i<user.getWeigths().length; i++) {
			A += Math.pow(user.getWeigth(i), 2);
		}
		
		for (User u: users) {
			AB = 0;
			B = 0;			
			for (int i=1; i<user.getWeigths().length; i++) {
				AB += (user.getWeigth(i)) * (u.getWeigth(i));
				B += Math.pow(u.getWeigth(i), 2);
			}
			simTemp = ( AB / Math.sqrt(A*B) );
			if (simTemp > sim) {
				sim = simTemp;
				id = u.getId();
				numCheckins = CheckinPostgres.getNumCheckinsByUser(u.getId());
			} else {
				if (simTemp == sim) {
					int ck = CheckinPostgres.getNumCheckinsByUser(u.getId());
					if (ck > numCheckins) {						
						id = u.getId();
						numCheckins = ck;
					}
				}
			}
		}
		
		return id;
	}
	/*
	private static String getSubmittedFileName(Part part) {
	    for (String cd : part.getHeader("content-disposition").split(";")) {
	        if (cd.trim().startsWith("filename")) {
	            String fileName = cd.substring(cd.indexOf('=') + 1).trim().replace("\"", "");
	            return fileName.substring(fileName.lastIndexOf('/') + 1).substring(fileName.lastIndexOf('\\') + 1); // MSIE fix.
	        }
	    }
	    return null;
	}*/

}
