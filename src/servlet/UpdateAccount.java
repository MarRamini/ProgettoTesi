package servlet;

import java.io.IOException;
import java.io.InputStream;

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

import model.User;
import postgres.PersistenceException;
import postgres.UserPostgres;

/**
 * Servlet implementation class UpdateAccount
 */
@WebServlet("/UpdateAccount")
@MultipartConfig
public class UpdateAccount extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateAccount() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request,  response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String prossimaPagina = "";	
		HttpSession session = request.getSession(false);
		User user = (User) session.getAttribute("user");
		
		int id = user.getId();
			
		try {
			if (UserPostgres.RetrieveUserById(id) == null) { 
				prossimaPagina = "/login.jsp";
				request.setAttribute("error", "User does not exists");
			}
			else {
				String username = request.getParameter("txtUsername");
				String password = request.getParameter("txtPassword");
				String gender = request.getParameter("txtGender");
				int age = Integer.parseInt(request.getParameter("txtAge"));
				String name = request.getParameter("txtName");
				String surname = request.getParameter("txtSurname");
				String email = request.getParameter("txtEmail");
				String nationality = request.getParameter("txtNationality");
				Part filePart = request.getPart("avatarFile"); // Retrieves <input type="file" name="avatar">
			    InputStream fileContent = filePart.getInputStream();
				
				User updatedUser = new User();
				updatedUser.setId(username.hashCode());
				updatedUser.setUsername(username);
				updatedUser.setPassword(password);
				updatedUser.setGender(gender);
				updatedUser.setAge(age);
				updatedUser.setName(name);
				updatedUser.setEmail(email);
				updatedUser.setSurname(surname);
				updatedUser.setNationality(nationality);
				updatedUser.setAvatar(fileContent);
				
				UserPostgres.updateUser(user, updatedUser); 
				prossimaPagina = "/index.jsp";
				session = request.getSession();
				session.setAttribute("user", updatedUser);
				request.setAttribute("username", username);
				request.setAttribute("name", name);
				request.setAttribute("surname", surname);
				request.setAttribute("gender", gender);
				request.setAttribute("nationality", nationality);
				request.setAttribute("age", age);
				request.setAttribute("email", email);
				request.setAttribute("avatar", fileContent);
				request.setAttribute("updateSucceded", "true");
			}
		} catch (PersistenceException e) {
			e.printStackTrace();
		}	
		
		ServletContext application  = getServletContext();
		RequestDispatcher rd = application.getRequestDispatcher(prossimaPagina);
		rd.forward(request, response);
	}

}
